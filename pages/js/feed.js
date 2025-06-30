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
      window.location.href = 'detalhes.html';
    });
  });
});