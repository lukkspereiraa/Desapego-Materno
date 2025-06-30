document.addEventListener("DOMContentLoaded", () => {
    const messageInput = document.getElementById("message-input");
    const sendBtn = document.getElementById("send-btn");
    const chatWindow = document.querySelector(".chat-window");

    function addMessage(text, type) {

        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", type);

        const textP = document.createElement("p");
        textP.textContent = text;

        const timestampSpan = document.createElement("span");
        timestampSpan.classList.add("timestamp");
        const now = new Date();
        const time = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
        timestampSpan.textContent = time;

        messageDiv.appendChild(textP);
        messageDiv.appendChild(timestampSpan);

        chatWindow.appendChild(messageDiv);

        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function sendMessage() {
        const messageText = messageInput.value.trim();

        if (messageText) {

            addMessage(messageText, "sent");

            messageInput.value = "";
        }
    }

    sendBtn.addEventListener("click", sendMessage);

    messageInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});