![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen)
![Baileys](https://img.shields.io/badge/Baileys-MD-orange)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

## Table of Contents
- [Features](#features)
- [Folder Structure](#folder-structure)
- [How to Run Locally](#how-to-run-locally)
- [Deployment](#deployment)
- [Example Commands](#example-commands)
- [Built With](#built-with)
- [Author](#author)
- [License](#license)

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
## One-Click Deployment

### Deploy to Railway  
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template)

- Go to Railway
- Click New Project > Deploy from GitHub Repo
- Select your nelson-md-multi- repo
- In Railway settings, set:Start command: npm start

### Deploy to Replit  
[![Run on Replit](https://replit.com/badge/github/nels0nfx/nelson-md-multi-)](https://replit.com/github/nels0nfx/nelson-md-multi-)
1.Create a new Replit project (Node.js)
2.Upload your files or clone the GitHub repo
3.Add a .replit file:run = "npm start"
## Example Commands

```bash
!ping   → Replies with pong!
!help   → Lists all commands
!about  → Provides bot information

## Acknowledgements

- [Baileys](https://github.com/WhiskeySockets/Baileys) for the WhatsApp Web API
- [Levante](https://github.com/lyfe00011/levanter) for project inspiration
