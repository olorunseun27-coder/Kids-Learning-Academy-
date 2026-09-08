/**
 * SECURE AZURE SPEECH PROXY BACKEND FOR NIGERIAN VOICES (EZINNE & ABEO)
 * Run with: node server.js
 * Requirements: npm install express cors dotenv
 */

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve static frontend files if hosted together
app.use(express.static("."));

// Azure Speech API Credentials from Environment Variables
const AZURE_KEY = process.env.AZURE_SPEECH_KEY;
const AZURE_REGION = process.env.AZURE_SPEECH_REGION || "eastus";

app.post("/api/tts", async (req, res) => {
  try {
    const { text, voice } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Missing text parameter" });
    }

    // Default to en-NG-EzinneNeural if invalid voice supplied
    const selectedVoice = (voice === "en-NG-AbeoNeural") ? "en-NG-AbeoNeural" : "en-NG-EzinneNeural";

    // Azure SSML with deliberate, warm teacher delivery
    const ssml = `
      <speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-NG">
        <voice name="${selectedVoice}">
          <prosody rate="-4%" pitch="0%">
            ${text}
          </prosody>
        </voice>
      </speak>
    `.trim();

    const azureUrl = `https://${AZURE_REGION}.tts.speech.microsoft.com/cognitiveservices/v1`;

    const azureResponse = await fetch(azureUrl, {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": AZURE_KEY,
        "Content-Type": "application/ssml+xml",
        "X-Microsoft-OutputFormat": "audio-16khz-128kbitrate-mono-mp3",
        "User-Agent": "NigerianMathTeacherApp"
      },
      body: ssml
    });

    if (!azureResponse.ok) {
      const errBody = await azureResponse.text();
      console.error("Azure Speech Error:", azureResponse.status, errBody);
      return res.status(azureResponse.status).json({ error: "TTS generation failed" });
    }

    const audioBuffer = await azureResponse.arrayBuffer();

    res.set({
      "Content-Type": "audio/mpeg",
      "Content-Length": audioBuffer.byteLength,
      "Cache-Control": "public, max-age=86400" // Cache audio for 24h
    });

    return res.send(Buffer.from(audioBuffer));
  } catch (error) {
    console.error("Server Internal Error:", error);
    return res.status(500).json({ error: "Internal voice server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Nigerian Math Teacher voice service running on port ${PORT}`);
});
