document.addEventListener("DOMContentLoaded", () => {
    const itemForm = document.getElementById("item-form");
    const isFreeCheckbox = document.getElementById("is-free");
    const priceInput = document.getElementById("item-price");

    // Desabilita o campo de preço se a opção 'gratuito' for marcada
    isFreeCheckbox.addEventListener("change", () => {
        if (isFreeCheckbox.checked) {
            priceInput.disabled = true;
            priceInput.value = "";
            priceInput.required = false;
        } else {
            priceInput.disabled = false;
            priceInput.required = true;
        }
    });

    // Impede o envio real do formulário e mostra um alerta
    itemForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Previne o recarregamento da página

        alert("Anúncio publicado com sucesso! (Simulação)");

        // Limpa o formulário para um novo cadastro
        itemForm.reset();
        priceInput.disabled = false; // Garante que o campo de preço seja reativado
    });
});