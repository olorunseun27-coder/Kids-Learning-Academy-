// api/tts.js - Unbroken Nigerian Neural Voice Stream
import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

  const { text, voice = "en-NG-EzinneNeural" } = req.body || {};

  if (!text || typeof text !== "string" || !text.trim()) {
    return res.status(400).json({ error: "Missing or empty text." });
  }

  try {
    const tts = new MsEdgeTTS();
    await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);

    const { audioStream } = tts.toStream(text);

    const audioBuffer = await new Promise((resolve, reject) => {
      const chunks = [];
      let isFinished = false;

      const done = () => {
        if (isFinished) return;
        isFinished = true;
        resolve(Buffer.concat(chunks));
      };

      audioStream.on("data", (chunk) => chunks.push(chunk));
      audioStream.on("end", done);
      audioStream.on("close", done);
      audioStream.on("error", (err) => {
        if (!isFinished) {
          isFinished = true;
          reject(err);
        }
      });

      // Safety timeout: 15 seconds
      setTimeout(() => {
        if (!isFinished) {
          if (chunks.length > 0) done();
          else {
            isFinished = true;
            reject(new Error("TTS stream timed out"));
          }
        }
      }, 15000);
    });

    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    return res.status(200).send(audioBuffer);
  } catch (err) {
    console.error("Edge TTS Error:", err);
    return res.status(500).json({ error: "Speech generation failed: " + err.message });
  }
}
