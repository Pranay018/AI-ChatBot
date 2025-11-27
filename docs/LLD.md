# Low Level Design — AI ChatBot

## Backend Structure
```
backend/
 ├── controllers/
 ├── routes/
 ├── models/
 ├── services/
 ├── socket/
 ├── gemini/
 ├── server.js
```

### Models
- User  
- Project  
- Message  

### Controllers
- `auth.controller.js`  
- `project.controller.js`  
- `chat.controller.js`

### Socket Events
- `join`  
- `send_message`  
- `receive_message`  

### Gemini Service
- Takes user message  
- Sends to Gemini API  
- Receives AI response  
- Stores it in DB  
- Emits to frontend  

---

## Frontend Structure
```
frontend/src/
 ├── screens/
 ├── context/
 ├── config/
 ├── routes/
 ├── App.jsx
```

### Screens
- Login  
- Register  
- Home  
- Project Chat  

### Context
- `user.context.jsx`  
  - stores token  
  - holds login/logout logic  

### Config
- axios.js → API calls  
- socket.js → WebSocket connection  
- webContainer.js → Web-based environment (optional)

