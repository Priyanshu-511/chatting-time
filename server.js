const express = require('express');
const { Server } = require('socket.io');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 5000;
const io = new Server(server);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'), (err) => {
        if (err) {
            console.error('Error sending index.html:', err);
            res.status(500).send('Internal Server Error');
        }
    });
});

// Handle Socket.IO connections
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Handle username submission
    socket.on('send name', (username) => {
        if (typeof username === 'string' && username.trim()) {
            io.emit('send name', username); // Broadcast username to all clients
        }
    });

    // Handle chat message submission
    socket.on('send message', (chat) => {
        if (typeof chat === 'string' && chat.trim()) {
            io.emit('send message', chat); // Broadcast chat message to all clients
        }
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
    });
});

// Start the server
server.listen(port, (err) => {
    if (err) {
        console.error('Failed to start server:', err);
        return;
    }
    console.log(`Server is running on port ${port}`);
});