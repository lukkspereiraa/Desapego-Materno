document.addEventListener("DOMContentLoaded", () => {
    const loginEmailBtn = document.querySelector(".login-btn-email");

    loginEmailBtn.addEventListener("click", () => {
        window.location.href = 'login.html';
    });
});

function entrarGoogle() {
  alert("Iniciando login com Google...");
  
}

function cadastrar() {
  
  window.location.href = 'cadastro.html';
}