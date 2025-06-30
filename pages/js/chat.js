document.addEventListener("DOMContentLoaded", () => {
    const messageInput = document.getElementById("message-input");
    const sendBtn = document.getElementById("send-btn");
    const chatWindow = document.querySelector(".chat-window");

    // Função para criar e adicionar uma nova mensagem à tela
    function addMessage(text, type) {
        // Cria o elemento da mensagem
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", type);

        // Cria o parágrafo do texto
        const textP = document.createElement("p");
        textP.textContent = text;

        // Cria o timestamp
        const timestampSpan = document.createElement("span");
        timestampSpan.classList.add("timestamp");
        const now = new Date();
        const time = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
        timestampSpan.textContent = time;

        // Adiciona texto e timestamp à div da mensagem
        messageDiv.appendChild(textP);
        messageDiv.appendChild(timestampSpan);
        
        // Adiciona a mensagem à janela do chat
        chatWindow.appendChild(messageDiv);

        // Rola a janela para a última mensagem
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    // Função para lidar com o envio de mensagem
    function sendMessage() {
        const messageText = messageInput.value.trim();

        if (messageText) {
            // Adiciona a mensagem do usuário como 'sent'
            addMessage(messageText, "sent");
            
            // Limpa o campo de input
            messageInput.value = "";
        }
    }

    // Event listener para o botão de enviar
    sendBtn.addEventListener("click", sendMessage);

    // Event listener para a tecla "Enter"
    messageInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});