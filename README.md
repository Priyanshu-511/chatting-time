# 💬 Real-Time Chat App

A simple, responsive web-based real-time chat application using **Node.js**, **Express**, and **Socket.IO**. This app allows users to join with a username and send messages to others instantly, with a clean and modern user interface.

---

## 🚀 Features

- 🔄 Real-time two-way communication using WebSockets
- 📛 Username tagging and join message display
- 🎨 Stylish, responsive chat interface using CSS
- 📜 Auto-scroll for new messages
- 💻 Works across all screen sizes (desktop & mobile)

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend:** Node.js, Express
- **Realtime:** Socket.IO

---

## 📁 Project Structure

chat-app/
├── public/
│ ├── index.html # Frontend UI
│ ├── style.css # App styling
│ └── script.js # Frontend socket logic
├── server.js # Express server with Socket.IO
├── package.json # Project metadata and dependencies
├── package-lock.json # Dependency lock file


> The app serves everything from the `public/` folder and runs via the `server.js` file.

---

## 📦 Installation & Usage

### 1. Clone the repository
```bash
git clone https://github.com/Priyanshu-511/chatting-time.git
cd chatting-time
```

### 2. Install dependencies
```bash
npm install express socket.io
```

### 3. Start the server
```bash
node server.js
```
## Open browser
Navigate to: http://localhost:5000

