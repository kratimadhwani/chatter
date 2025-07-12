const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');
const notificationSound = document.getElementById('notification-sound');

// Encapsulate notification sound logic
const playNotificationSound = () => {
    if (notificationSound) {
        notificationSound.currentTime = 0;
        notificationSound.play();
    }
};

let name = '';
while (!name) {
    name = prompt('enter your name to join');
    if (name === null) {
        alert('You must enter a name to join the chat.');
        window.location.reload();
    }
}

const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageElement.innerText = message;
    messageContainer.append(messageElement);
};

socket.emit('new-user-joined', name);

socket.on('user-joined', userName => {
    append(`${userName} joined the chat`, 'right');
    playNotificationSound();
});

socket.on('receive', data => {
    append(`${data.name}: ${data.message}`, 'left');
    playNotificationSound();
});

socket.on('user-left', userName => {
    append(`${userName} left the chat`, 'right');
});

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents page reload
    const message = messageInput.value;
    if (message.trim() === '') return;
    append(`You: ${message}`, 'right');
    socket.emit('send', message);
    playNotificationSound(); // Play sound on own message
    messageInput.value = '';
});