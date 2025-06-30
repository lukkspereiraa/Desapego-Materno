document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const togglePassword = document.querySelector(".toggle-password");
    const passwordInput = document.getElementById("senha");

    togglePassword.addEventListener("click", () => {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        
        togglePassword.classList.toggle("fa-eye");
        togglePassword.classList.toggle("fa-eye-slash");
    });

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Login efetuado com sucesso! Redirecionando para o feed...")
        window.location.href = 'feed.html'; 
    });
});