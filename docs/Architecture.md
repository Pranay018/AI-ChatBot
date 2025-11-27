# Architecture — AI ChatBot (Full Stack)

## Overview
This project is a **full‑stack AI ChatBot** using:
- **Frontend:** React + Vite + Tailwind + Axios + Socket.io-client
- **Backend:** Node.js + Express + MongoDB + Socket.io + Gemini API
- **Database:** MongoDB Atlas
- **Auth:** JWT Authentication
- **Deployment:**  
  - Frontend → Netlify  
  - Backend → Render

## High-Level System Architecture
```
                       +-------------------+
                       |      Users        |
                       +---------+---------+
                                 |
                                 | HTTPS + WebSockets
                                 |
                       +---------v---------+
                       |     Frontend      | (React, Vite)
                       |  - Chat UI        |
                       |  - Auth UI        |
                       |  - Axios requests |
                       |  - Socket.io      |
                       +---------+---------+
                                 |
                     REST + WS   | 
                                 |
                       +---------v---------+
                       |      Backend      | (Node + Express)
                       | - Auth API        |
                       | - Gemini AI API   |
                       | - Chat handling   |
                       | - Socket.io       |
                       +---------+---------+
                                 |
                                 | MongoDB Driver
                                 |
                       +---------v---------+
                       |     MongoDB       |
                       +-------------------+
```

## Key Components
### Frontend
- `screens/` → Login, Register, Home, Project chat screens  
- `context/user.context.jsx` → User authentication and global state  
- `config/axios.js` → Preconfigured Axios instance  
- `config/socket.js` → Socket.io client  
- `AppRoutes.jsx` → Routing and protected pages  

### Backend
- `routes/*` → Auth, Project, Chat endpoints  
- `controllers/*` → Login, Register, Chat logic  
- `socket/*` → Socket event handlers  
- `gemini/*` → Gemini AI response handler  
- `models/*` → User, Project, Message schemas  

