# Deployment — Netlify (Frontend) & Render (Backend)

## Environment Variables (Backend - Render)
Set these in Render Dashboard → Environment
```
PORT=5000
MONGO_URI=your-mongodb-url
JWT_SECRET=your-secret
GEMINI_API_KEY=your-gemini-key
ORIGIN_URL=https://your-frontend.netlify.app
```

## Environment Variables (Frontend - Netlify)
```
VITE_API_URL=https://your-backend.onrender.com/api
```

---

# FRONTEND DEPLOYMENT — NETLIFY

## 1. Build command
```
npm run build
```

## 2. Publish directory
```
dist
```

## 3. Steps
1. Push frontend folder to GitHub  
2. Go to Netlify → **Add New Site**  
3. Select GitHub repo  
4. Enter:
   - Build: `npm run build`
   - Publish: `dist`
5. Add environment variable:
   - `VITE_API_URL=https://your-backend.onrender.com/api`
6. Deploy site.

---

# BACKEND DEPLOYMENT — RENDER

## 1. Create a Web Service
- Go to Render → New Web Service  
- Connect GitHub repo  
- Select the **backend** folder  

## 2. Build Command
```
npm install
```

## 3. Start Command
```
node server.js
```

## 4. Add Environment Variables:
```
PORT=5000
MONGO_URI=your-mongodb-url
JWT_SECRET=your-secret
GEMINI_API_KEY=your-gemini-api-key
ORIGIN_URL=https://your-frontend.netlify.app
```

## 5. Enable WebSockets in Render
Render enables WebSockets by default.

---

# CORS Configuration (Backend)
Allow Netlify domain:

```
origin: process.env.ORIGIN_URL,
credentials: true
```

