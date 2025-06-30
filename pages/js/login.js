document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const togglePassword = document.querySelector(".toggle-password");
    const passwordInput = document.getElementById("senha");

    // Função para mostrar/ocultar senha
    togglePassword.addEventListener("click", () => {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        
        // Troca o ícone do olho
        togglePassword.classList.toggle("fa-eye");
        togglePassword.classList.toggle("fa-eye-slash");
    });

    // Simulação de login
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Login efetuado com sucesso! Redirecionando para o feed...");
        // No futuro, aqui você redirecionaria para o feed
        window.location.href = 'feed.html';
    });
});