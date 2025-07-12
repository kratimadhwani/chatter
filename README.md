# Chat Application

A real-time chat application built with Node.js and Socket.IO.

## Features

- Real-time messaging
- User join/leave notifications
- Simple and clean UI
- Multiple users can chat simultaneously

## How to Run

### Prerequisites
- Node.js installed on your system

### Steps to Run

1. **Install Dependencies**
   ```bash
   cd nodeServer
   npm install
   ```

2. **Start the Server**
   ```bash
   npm start
   ```
   The server will start on port 8000.

3. **Open the Application**
   - Open `index.html` in your web browser
   - Or serve the files using a local server

4. **Start Chatting**
   - Enter your name when prompted
   - Start sending messages!

## How it Works

- The Node.js server handles Socket.IO connections
- When a user joins, they're prompted for their name
- Messages are broadcast to all other connected users
- Users receive notifications when someone joins or leaves

## File Structure

```
chat app/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Styling
├── js/
│   └── client.js      # Client-side JavaScript
├── nodeServer/
│   ├── index.js       # Node.js server
│   ├── package.json   # Dependencies
│   └── package-lock.json
└── chat.png           # Logo image
```

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js
- **Real-time Communication**: Socket.IO 
