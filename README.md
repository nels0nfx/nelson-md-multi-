![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen)
![Baileys](https://img.shields.io/badge/Baileys-MD-orange)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

# NelsonMD Multi-Session WhatsApp Bot

![GitHub Repo Stars](https://img.shields.io/github/stars/nelsonfx/nelson-md-multi-?style=flat)
![Last Commit](https://img.shields.io/github/last-commit/nelsonfx/nelson-md-multi-?style=flat)
![MIT License](https://img.shields.io/github/license/nelsonfx/nelson-md-multi-?style=flat)

> NelsonMD is a powerful multi-session WhatsApp bot built using **Baileys**. It allows users to host their own bot sessions, scan their unique QR codes, and keep their session running — just like Levante.

---

## Features

- ✅ Multi-user session support  
- ✅ Sessions saved individually  
- ✅ QR code login system  
- ✅ Built-in command handling  
- ✅ Auto reconnect on disconnect  
- ✅ Express.js backend for panel support  
- ✅ Easy deployment to Railway, Replit, or BotNet  

---

## Folder Structure

nelson-md-multi/
├── index.js             # Main bot file
├── package.json         # Project config
├── lib/
│   └── commands.js      # Add your custom commands here
├── sessions/            # Session files stored here
---

## How to Run Locally

---

## One-Click Deployment

### Deploy to Railway  
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template)

### Deploy to Replit  
[![Run on Replit](https://replit.com/badge/github/nelsonfx/nelson-md-multi-)](https://replit.com/github/nelsonfx/nelson-md-multi-)

> Tip: Update the links above later with your actual template or repo deploy link!
### 1. Clone and Install

```bash
git clone https://github.com/YourUsername/nelson-md-multi-.git
cd nelson-md-multi-
npm install
node index.js
Once the bot starts, visit:http://localhost:3000/start/YOURNAME

---

[![Run on Replit](https://replit.com/badge/github/nels0nfx/nelson-md-multi-)](https://replit.com/new/github.com/nels0nfx/nelson-md-multi-)
### Deploy on Replit

1.Create a new Replit project (Node.js)
2.Upload your files or clone the GitHub repo
3.Add a .replit file:run = "npm start"
4.Run the project and visit:https://your-repl-name.repl.co/start/YOURNAME

## Deploy on BotNet

1.Visit Bot Hosting or similar VPS
2.Create a new Node.js app
3.Upload this bot or link the repo
4.Set run command to:npm start

---

## Deploy on Railway

1. Go to [Railway](https://railway.app)
2. Click **New Project** > **Deploy from GitHub**
3. Select your `nelson-md-multi-` repository
4. Set the Start command to:
   ```bash
   npm start

## Example Commands

!ping   → Replies with pong!
!help   → List all commands
!about  → Bot information


## Environment Variables

SESSION_ID=YourSessionIdAfterScan
PREFIX=!
PORT=3000
You can ignore SESSION_ID if you’re scanning from terminal

## Built With

	•	Baileys
	•	Node.js
	•	Express.js


---

## Author

**Nelson Chinecherem (NelsonMD)**  
Telegram: [@nelsonfx_admin](https://t.me/nelsonfx_admin)

---

## License

This project is licensed under the **MIT License**.  
Feel free to fork, deploy, and improve!

---

## Thanks To

- [@adiwajshing](https://github.com/adiwajshing) for the original Baileys
- Levante-style bot system inspiration
