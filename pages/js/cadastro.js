document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("register-form");
  const togglePassword = document.querySelector(".toggle-password");
  const passwordInput = document.getElementById("senha");

  togglePassword.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    // ... (sua lógica de validação continua aqui) ...
    alert("Cadastro realizado com sucesso! Você será redirecionado para o login.");
    // ALTERAÇÃO: Redireciona para o login
    window.location.href = 'login.html'; 
  });
});