document.addEventListener("DOMContentLoaded", () => {
  // --- Interatividade dos Filtros ---
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove a classe 'active' de todos os botões
      filterButtons.forEach(btn => btn.classList.remove("active"));
      // Adiciona a classe 'active' apenas ao botão clicado
      button.classList.add("active");
    });
  });

  // --- Interatividade dos Cards de Produto ---
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach(card => {
    card.addEventListener("click", () => {
      // Simula o redirecionamento para a página de detalhes do produto
      alert("Redirecionando para os detalhes do produto!");
      // No futuro, aqui você usaria:
      // window.location.href = 'detalhes-produto.html?id=ID_DO_PRODUTO';
    });
  });
  
  // --- Interatividade da Navegação Inferior ---
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach(item => {
    item.addEventListener("click", (event) => {
        event.preventDefault(); // Impede o comportamento padrão do link
        
        navItems.forEach(nav => nav.classList.remove("active"));
        item.classList.add("active");
        
        const page = item.querySelector("span").textContent;
        console.log(`Navegando para: ${page}`);
    });
  });

  // --- Interatividade do Ícone de Notificação ---
  const notificationIcon = document.querySelector(".notification-icon");
  notificationIcon.addEventListener("click", () => {
    alert("Você não tem novas notificações.");
  });

});