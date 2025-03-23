const express = require('express');
const fs = require('fs-extra');
const path = require('path');
const qrcode = require('qrcode-terminal');
const {
  default: makeWASocket,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  DisconnectReason
} = require('@whiskeysockets/baileys');
const P = require('pino');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('NelsonMD Multi-Session WhatsApp Bot is running.');
});

app.get('/start/:sessionId', async (req, res) => {
  const sessionId = req.params.sessionId;
  const sessionFolder = path.join(__dirname, 'sessions', sessionId);

  await fs.ensureDir(sessionFolder);
  const { state, saveCreds } = await useMultiFileAuthState(sessionFolder);
  const { version } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    version,
    logger: P({ level: 'silent' }),
    printQRInTerminal: true,
    auth: state,
    browser: ['NelsonMD Multi', 'Chrome', '1.0']
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      qrcode.generate(qr, { small: true });
      console.log(`[${sessionId}] QR Code generated.`);
    }

    if (connection === 'open') {
      console.log(`[${sessionId}] Connected!`);
    }

    if (connection === 'close') {
      const code = lastDisconnect?.error?.output?.statusCode;
      if (code !== DisconnectReason.loggedOut) {
        console.log(`[${sessionId}] Disconnected. Reconnecting...`);
        setTimeout(() => {
          app.get(`/start/${sessionId}`);
        }, 3000);
      } else {
        console.log(`[${sessionId}] Logged out.`);
      }
    }
  });

  res.send(`Session ${sessionId} starting... Check your terminal for the QR code.`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
