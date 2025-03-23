// lib/commands.js

module.exports = {
  handleCommand: async (text, sender) => {
    switch (text.toLowerCase()) {
      case '!ping':
        return 'pong!';
      case '!about':
        return 'This is NelsonMD Multi-Session WhatsApp Bot.';
      case '!help':
        return 'Commands:\n!ping - Test\n!about - Info\n!help - Help';
      default:
        return null;
    }
  }
};
