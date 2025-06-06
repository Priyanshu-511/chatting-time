// Connect to the Socket.IO server
const socket = io();

// Get DOM elements
const form = document.getElementById('form');
const usernameInput = document.getElementById('username');
const chatInput = document.getElementById('chat');
const output = document.getElementById('output');

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = usernameInput.value.trim();
    const message = chatInput.value.trim();

    if (username && message) {
        // Emit username (only once, or as needed)
        socket.emit('send name', username);
        // Emit chat message
        socket.emit('send message', `${username}: ${message}`);
        // Clear message input
        chatInput.value = '';
    }
});

// Display username
socket.on('send name', (username) => {
    const p = document.createElement('p');
    p.textContent = `User joined: ${username}`;
    p.classList.add('user-join'); // Add class for user join message
    output.appendChild(p);
    output.scrollTop = output.scrollHeight; // Auto-scroll
});

// Display chat message
socket.on('send message', (chat) => {
    const p = document.createElement('p');
    p.textContent = chat;
    p.classList.add('chat-message'); // Add class for chat message
    output.appendChild(p);
    output.scrollTop = output.scrollHeight; // Auto-scroll
});