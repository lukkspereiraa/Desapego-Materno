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

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const gestacao = document.getElementById("gestacao").value.trim();

    if (!nome || !email || !senha || !cidade) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
   
    console.log("Cadastro enviado:", { nome, email, senha, cidade, gestacao });
    
    alert("Cadastro realizado com sucesso!");

    form.reset();
    
    passwordInput.setAttribute("type", "password");
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
  });
});