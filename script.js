const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

const botReplies = {
    "hello": "Hi there! How can I help you?",
    "who are you": "I'm an AI chatbot here to assist IT students with their queries.",
    "what is AI": "AI (Artificial Intelligence) is the simulation of human intelligence in machines.",
    "what is HTML": "HTML (Hypertext Markup Language) is the standard language for creating webpages.",
    "what is CSS": "CSS (Cascading Style Sheets) is used for styling HTML elements.",
    "what is JavaScript": "JavaScript is a programming language used to create interactive effects within web browsers."
};

function sendMessage() {
    const userMessage = userInput.value.trim();
    
    if (userMessage === "") return;

    // Display user's message
    chatBox.innerHTML += `<div class="user-message">${userMessage}</div>`;
    userInput.value = "";
    
    // Display bot's reply
    const botMessage = botReplies[userMessage.toLowerCase()] || "Sorry, I don't understand that.";
    setTimeout(() => {
        chatBox.innerHTML += `<div class="bot-message">${botMessage}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
}
