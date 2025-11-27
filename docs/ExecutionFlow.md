# Execution Flow — AI ChatBot

## 1. App Startup
- User opens the frontend (Netlify)
- React loads `main.jsx` → `AppRoutes`
- AuthContext loads user from `localStorage`
- If logged in → redirect to Home

## 2. User Authentication
1. User enters email/password  
2. Frontend sends:
```
POST /api/auth/login
```
3. Backend verifies user  
4. Returns JWT token  
5. Frontend stores token + user in context  

## 3. Joining a Project/Chat Room
- Frontend connects via socket:
```
socket.emit("join", { userId, projectId })
```

## 4. Sending a Message
1. User writes a message  
2. Frontend sends:
```
socket.emit("send_message", messageData)
```
3. Backend:
   - Saves message in MongoDB
   - Calls Gemini API for response
4. Backend emits:
```
socket.emit("receive_message", data)
```

## 5. Receiving Gemini AI Message
- Frontend listens to:
```
socket.on("receive_message", callback)
```
- UI updates chat in real time  

## 6. Project-based Chat Flow
Each project has:
- messages  
- AI-generated responses  
- timestamps  
Backend ensures responses belong to selected project.

