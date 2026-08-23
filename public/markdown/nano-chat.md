# 💬 Nano-Chat: Real-Time Messaging App

[![Live App](https://img.shields.io/badge/Live_Demo-nano--chat--1.onrender.com-00C7B7?style=for-the-badge&logo=render&logoColor=white)](https://nano-chat-1.onrender.com/)
[![GitHub Repo](https://img.shields.io/badge/GitHub_Repo-prajyot1093%2FNano--Chat-181717?style=for-the-badge&logo=github)](https://github.com/prajyot1093/Nano-Chat)

> A modern, full-stack real-time messaging application engineered with the **MERN Stack** and **Socket.IO** for low-latency bidirectional chat, secure authentication, profile personalization, and media sharing.

---

## 🌟 Key Features

- ⚡ **Real-Time Communication**: Persistent WebSocket connection via Socket.IO for instant message delivery and typing feedback.
- 🔐 **Robust Security**: JSON Web Token (JWT) auth stored in HTTP-Only cookies with Bcrypt password hashing.
- 🟢 **Live Online Status**: Dynamic user presence tracker showing online/offline members in real-time.
- 🖼️ **Image & Media Upload**: Integrated Cloudinary API for high-speed image uploads and cloud optimization.
- 🎨 **32 DaisyUI Themes**: Instant theme switching allowing users to personalize their UI (synthwave, cyberpunk, retro, dark, light, etc.).
- 📱 **Mobile & Desktop Responsive**: Clean responsive layout built using Tailwind CSS.
- 🗂️ **Global State**: Client-side state managed seamlessly with Zustand.

---

## 🛠️ Tech Stack & Architecture

```
Nano-Chat/
├── backend/
│   ├── src/controllers/ (Auth, Message, User)
│   ├── src/middleware/  (JWT Protection)
│   ├── src/models/      (User, Message Schema via Mongoose)
│   ├── src/routes/      (Auth, Messages, Users)
│   └── src/socket.io.js (WebSocket event handlers)
└── frontend/
    ├── src/components/  (ChatContainer, MessageInput, Sidebar, Navbar)
    ├── src/pages/       (Home, Login, SignUp, Profile, Settings)
    └── src/store/       (useAuthStore, useChatStore, useThemeStore)
```

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 18, Vite, Tailwind CSS, DaisyUI, Zustand, Axios, React Hot Toast, Lucide Icons |
| **Backend** | Node.js, Express.js, Socket.IO, JWT, BcryptJS, Cookie-Parser, CORS |
| **Database** | MongoDB Atlas, Mongoose ODM |
| **Storage & Cloud** | Cloudinary CDN |
| **Hosting** | Render Cloud Platform |

---

## 🔗 Try It Out

- 🚀 **Live Demo**: [https://nano-chat-1.onrender.com/](https://nano-chat-1.onrender.com/)
- 📂 **Source Code**: [https://github.com/prajyot1093/Nano-Chat](https://github.com/prajyot1093/Nano-Chat)
