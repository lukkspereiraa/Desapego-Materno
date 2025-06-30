document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove a classe 'active' de todas as abas e conteúdos
            tabs.forEach(item => item.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            // Adiciona a classe 'active' à aba clicada
            tab.classList.add("active");

            // Mostra o conteúdo da aba correspondente
            const activeTabContent = document.getElementById(tab.dataset.tab);
            activeTabContent.classList.add("active");
        });
    });
});