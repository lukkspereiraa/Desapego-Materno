// SUBSTITUA TODO O CONTEÚDO DE script.js POR ISTO:
document.addEventListener("DOMContentLoaded", () => {
    const loginEmailBtn = document.querySelector(".login-btn-email");

    loginEmailBtn.addEventListener("click", () => {
        window.location.href = 'login.html';
    });
});

function entrarGoogle() {
  alert("Iniciando login com Google...");
  // Aqui integraria com Firebase, OAuth ou Google Sign-In
}

function cadastrar() {
  // Esta função está no botão de cadastro no HTML, então mantemos
  window.location.href = 'cadastro.html';
}