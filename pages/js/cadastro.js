document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");

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
  });
});
