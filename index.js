const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion
} = require('@whiskeysockets/baileys');
const P = require('pino');
const fs = require('fs');
const path = require('path');
const qrcode = require('qrcode-terminal');

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('./auth_info');
  const { version, isLatest } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    version,
    auth: state,
    printQRInTerminal: true,
    logger: P({ level: 'silent' }),
    browser: ['NelsonMD Multi', 'Chrome', '1.0'],
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === 'close') {
      const shouldReconnect = (lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut);
      console.log('Disconnected:', lastDisconnect?.error, 'Reconnecting:', shouldReconnect);
      if (shouldReconnect) startBot();
    } else if (connection === 'open') {
      console.log('✅ NelsonMD Multi Bot connected successfully!');
    }
  });

  sock.ev.on('messages.upsert', async ({ messages, type }) => {
    if (!messages || type !== 'notify') return;
    const msg = messages[0];
    const text = msg?.message?.conversation || msg?.message?.extendedTextMessage?.text;
    if (text === 'ping') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'pong' }, { quoted: msg });
    }
  });
}

startBot().catch((err) => console.error('Bot Error:', err));
