const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion
} = require('@whiskeysockets/baileys');
const P = require('pino');
const qrcode = require('qrcode-terminal');
const fs = require('fs-extra');
const path = require('path');
const commands = require('./lib/commands');

// === CONFIG ===
const USER_ID = process.env.USER_ID || 'default_user'; // unique per user or deployment
const SESSION_DIR = path.join(__dirname, 'sessions', USER_ID);

async function startBot() {
  await fs.ensureDir(SESSION_DIR);
  const { state, saveCreds } = await useMultiFileAuthState(SESSION_DIR);
  const { version } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    version,
    logger: P({ level: 'silent' }),
    printQRInTerminal: true,
    auth: state,
    browser: ['NelsonMD-Multi', 'Chrome', '1.0']
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      console.log('\nScan this QR to log in:\n');
      qrcode.generate(qr, { small: true });
    }

    if (connection === 'close') {
      const code = lastDisconnect?.error?.output?.statusCode;
      const shouldReconnect = code !== DisconnectReason.loggedOut;
      console.log(`❌ Disconnected with code: ${code}`);
      if (shouldReconnect) {
        setTimeout(() => startBot(), 3000);
      } else {
        console.log('Session expired. Please delete the session folder and scan again.');
      }
    }

    if (connection === 'open') {
      console.log('✅ NelsonMD Bot connected for user:', USER_ID);
    }
  });

  sock.ev.on('messages.upsert', async ({ messages, type }) => {
    if (type !== 'notify') return;
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;

    const text = msg.message.conversation || msg.message.extendedTextMessage?.text || '';
    const from = msg.key.remoteJid;

    const reply = await commands.handleCommand(text.trim(), from);
    if (reply) {
      await sock.sendMessage(from, { text: reply }, { quoted: msg });
    }
  });
}

startBot();
