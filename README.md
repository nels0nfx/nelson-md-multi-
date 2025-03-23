# NelsonMD Multi-Session WhatsApp Bot

NelsonMD is a powerful multi-session WhatsApp bot built using **Baileys**. It allows users to host their own bot sessions, scan their unique QR codes, and keep their session running — just like Levante.

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

### 1. Clone and Install

```bash
git clone https://github.com/YourUsername/nelson-md-multi-.git
cd nelson-md-multi-
npm install
node index.js
Once the bot starts, visit:http://localhost:3000/start/YOURNAME

---

## Deploy on Replit

1.	Create a new Replit project (Node.js)
2.	Upload your files or clone the GitHub repo
3.	Add a .replit file:run = "npm start"
4.	Run the project and visit:https://your-repl-name.repl.co/start/YOURNAME

## Deploy on BotNet

	1.	Visit Bot Hosting or similar VPS
	2.	Create a new Node.js app
	3.	Upload this bot or link the repo
	4.	Set run command to:npm start

## Example Commands

!ping   → Replies with pong!
!help   → List all commands
!about  → Bot information

## Built With

	•	Baileys
	•	Node.js
	•	Express.js

## Author

Nelson Chinecherem (NelsonMD)
Telegram: @nelsonfx_admin

## License

This project is licensed under the MIT License
