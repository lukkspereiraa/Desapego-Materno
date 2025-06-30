document.addEventListener("DOMContentLoaded", () => {
  // --- Funcionalidade da Galeria de Imagens ---
  const mainImage = document.querySelector(".main-image");
  const thumbnails = document.querySelectorAll(".thumbnail");

  thumbnails.forEach(thumb => {
    thumb.addEventListener("click", () => {
      // Troca a imagem principal pela imagem do thumbnail clicado
      mainImage.src = thumb.src.replace('100', '400x300'); // Adapta o tamanho da imagem do placeholder

      // Atualiza a classe 'active'
      thumbnails.forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
    });
  });

  // --- Funcionalidade do Botão de Favoritar ---
  const favoriteBtn = document.querySelector(".favorite-btn");

  favoriteBtn.addEventListener("click", () => {
    const heartIcon = favoriteBtn.querySelector("i");

    // Alterna entre o ícone de coração vazio (far) e cheio (fas)
    if (heartIcon.classList.contains("far")) {
      heartIcon.classList.remove("far");
      heartIcon.classList.add("fas");
    } else {
      heartIcon.classList.remove("fas");
      heartIcon.classList.add("far");
    }
  });
  
  // --- Ações dos Botões ---
  const shareIcon = document.querySelector(".share-icon");
  const chatBtn = document.querySelector(".chat-btn");

  shareIcon.addEventListener("click", () => {
      alert("Link do produto copiado para a área de transferência!");
  });

  chatBtn.addEventListener("click", () => {
      alert("Iniciando conversa com a vendedora...");
      // Futuramente: window.location.href = 'chat.html?userId=ID_DA_VENDEDORA';
  });

});