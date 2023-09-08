const textInput = document.getElementById('textinput');

document.addEventListener("DOMContentLoaded", () => {
    const messageArea = document.getElementById("messageArea");
    const userInput = document.getElementById("userInput");
    const sendButton = document.getElementById("sendButton");

    sendButton.addEventListener("click", () => {
        const userMessage = userInput.value.trim();
        if (userMessage !== "") {
            const userMessageElement = document.createElement("div");
            userMessageElement.className = "user-message";
            userMessageElement.textContent = "You: " + userMessage;
            messageArea.appendChild(userMessageElement);

            // Simulate a response
            const responseMessageElement = document.createElement("div");
            responseMessageElement.className = "response-message";
            responseMessageElement.textContent = "Response: This is a response to your message.";
            messageArea.appendChild(responseMessageElement);

            userInput.value = "";
        }
    });
});

textInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

textInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default Enter key behavior
        this.style.height = 'this.style.height + 10px';
        this.style.height = (this.scrollHeight) + 'px';
        this.value += '\n'; // Add a newline character to the value
        this.scrollTop = this.scrollHeight; // Move cursor to the new line
    }
});

function redirect(){
    location.href= "chatbox.html";
};
