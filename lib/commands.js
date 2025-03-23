// lib/commands.js

module.exports = {
  handleCommand: async (text, sender) => {
    switch (text.toLowerCase()) {
      case '!ping':
        return 'pong!';
      case '!about':
        return `This is NelsonMD Multi-Session WhatsApp Bot.\nEach user has their own login session.`;
      case '!help':
        return `Available commands:\n!ping - Test bot\n!about - Info\n!help - Show this help`;
      default:
        return null;
    }
  }
};
