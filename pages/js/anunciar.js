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

    itemForm.addEventListener("submit", (event) => {
        event.preventDefault(); 

        alert("Anúncio publicado com sucesso! (Simulação)");

        itemForm.reset();
        priceInput.disabled = false; 
    });
});