
// Initialize the ChatBot
// script.js

document.getElementById('chat-btn').addEventListener('click', function() {
    document.getElementById('chat-popup').style.display = 'block';
});

document.getElementById('close-chat').addEventListener('click', function() {
    document.getElementById('chat-popup').style.display = 'none';
});

document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') sendMessage();
});

function sendMessage() {
    let userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    appendMessage('You: ' + userInput, 'user');

    // Simulating AI response
    setTimeout(() => {
        let botResponse = getAIResponse(userInput);
        appendMessage('AI: ' + botResponse, 'bot');
    }, 1000);

    document.getElementById('user-input').value = '';
}

function appendMessage(text, sender) {
    let chatBox = document.getElementById('chat-box');
    let messageDiv = document.createElement('div');
    messageDiv.classList.add(sender);
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getAIResponse(userMessage) {
    let responses = {
        "hello": "Hi there! How can I assist you?",
        "how are you": "I'm just a bot, but I'm doing great! How about you?",
        "bye": "Goodbye! Have a great day!",
    };

    return responses[userMessage.toLowerCase()] || "I'm not sure how to respond to that.";
}
