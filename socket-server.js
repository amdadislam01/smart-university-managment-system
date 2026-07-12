const fs = require('fs');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');

// Manually parse .env.local if present in current workspace
try {
  const envPath = path.join(__dirname, '.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    envContent.split('\n').forEach(line => {
      const parts = line.split('=');
      if (parts.length >= 2) {
        const key = parts[0].trim();
        const value = parts.slice(1).join('=').trim().replace(/^["']|["']$/g, '');
        if (key && !process.env[key]) {
          process.env[key] = value;
        }
      }
    });
    console.log("Loaded environment variables from .env.local");
  }
} catch (err) {
  console.error("Error loading .env.local:", err.message);
}

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("MONGODB_URI environment variable is missing!");
  process.exit(1);
}

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB for Socket server"))
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Message Schema
const MessageSchema = new mongoose.Schema(
  {
    senderId: { type: String, required: true },
    senderName: { type: String, required: true },
    receiverId: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

const Message = mongoose.models.Message || mongoose.model("Message", MessageSchema);

// Create HTTP Server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Socket.io server is running\n');
});

// Configure Socket.io with CORS
const io = new Server(server, {
  cors: {
    origin: "*", // allow Next.js app to connect from any origin
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Join user room based on studentId / teacherId
  socket.on('join', (userId) => {
    if (userId) {
      const room = userId.trim();
      socket.join(room);
      console.log(`User ${userId} (socket ${socket.id}) joined room: ${room}`);
    }
  });

  // Handle incoming messages
  socket.on('sendMessage', async (data) => {
    const { senderId, senderName, receiverId, text } = data;
    console.log(`Message from ${senderId} to ${receiverId}: ${text}`);

    try {
      // Save message to MongoDB
      const newMessage = await Message.create({
        senderId,
        senderName,
        receiverId,
        text
      });

      const messageObj = {
        _id: newMessage._id.toString(),
        senderId,
        senderName,
        receiverId,
        text,
        createdAt: newMessage.createdAt,
      };

      // Emit to recipient's room
      io.to(receiverId.trim()).emit('receiveMessage', messageObj);
      
      // Acknowledge to sender
      socket.emit('messageSent', messageObj);
    } catch (err) {
      console.error("Error saving message:", err);
      socket.emit('error', { message: "Failed to send message" });
    }
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Socket.io server is listening on port ${PORT}`);
});
