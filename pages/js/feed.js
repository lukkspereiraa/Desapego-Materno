document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach(card => {
    card.addEventListener("click", () => {
      // ALTERAÇÃO: Redireciona para a página de detalhes
      window.location.href = 'detalhes.html';
    });
  });
  
  // O restante do JS pode ser removido pois a navegação agora é feita pelo HTML
});