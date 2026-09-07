// api/tts.js - Secure Azure Nigerian AI Speech Proxy
export default async function handler(req, res) {
  // 1. Handle CORS for local testing and cross-origin requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  const { text, voice = 'en-NG-EzinneNeural', speed = '1.0' } = req.body || {};

  if (!text || typeof text !== 'string' || !text.trim()) {
    return res.status(400).json({ error: 'Missing or empty "text" parameter.' });
  }

  // 2. Read credentials from server environment variables
  const speechKey = process.env.AZURE_SPEECH_KEY;
  const speechRegion = process.env.AZURE_SPEECH_REGION || 'eastus';

  if (!speechKey) {
    return res.status(500).json({
      error: 'AZURE_SPEECH_KEY environment variable is not configured on the server.'
    });
  }

  // 3. Map selected Nigerian voice (Ezinne Female, Abeo Male)
  const allowedVoices = ['en-NG-EzinneNeural', 'en-NG-AbeoNeural'];
  const targetVoice = allowedVoices.includes(voice) ? voice : 'en-NG-EzinneNeural';

  // 4. Map playback rate to SSML prosody rate
  let prosodyRate = '0%';
  const numSpeed = parseFloat(speed) || 1.0;
  if (numSpeed <= 0.8) prosodyRate = '-15%';
  else if (numSpeed <= 0.9) prosodyRate = '-10%';
  else if (numSpeed >= 1.2) prosodyRate = '+15%';
  else if (numSpeed >= 1.1) prosodyRate = '+10%';

  // 5. Escape XML characters for SSML safety
  const safeText = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

  const ssml = `
<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-NG">
  <voice name="${targetVoice}">
    <prosody rate="${prosodyRate}">
      ${safeText}
    </prosody>
  </voice>
</speak>`.trim();

  const endpoint = `https://${speechRegion}.tts.speech.microsoft.com/cognitiveservices/v1`;

  try {
    const azureResponse = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': speechKey,
        'Content-Type': 'application/ssml+xml',
        'X-Microsoft-OutputFormat': 'audio-16khz-128kbitrate-mono-mp3',
        'User-Agent': 'KidsLearningAcademy'
      },
      body: ssml
    });

    if (!azureResponse.ok) {
      const errText = await azureResponse.text();
      console.error('Azure TTS Error:', azureResponse.status, errText);
      return res.status(azureResponse.status).json({
        error: `Azure Speech API failed (${azureResponse.status}): ${errText}`
      });
    }

    const audioBuffer = await azureResponse.arrayBuffer();

    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    return res.status(200).send(Buffer.from(audioBuffer));
  } catch (err) {
    console.error('Server error calling Azure TTS:', err);
    return res.status(500).json({ error: 'Failed to contact Speech Service: ' + err.message });
  }
}
