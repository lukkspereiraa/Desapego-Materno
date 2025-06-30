document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("manage-account").addEventListener("click", () => {
        alert("Redirecionando para 'Gerenciar Conta'...");
    });

    document.getElementById("notifications").addEventListener("click", () => {
        alert("Redirecionando para 'Notificações'...");
    });

    document.getElementById("location").addEventListener("click", () => {
        alert("Redirecionando para 'Preferências de Localização'...");
    });
    
    document.getElementById("help").addEventListener("click", () => {
        alert("Redirecionando para 'Ajuda e Suporte'...");
    });

    document.getElementById("logout").addEventListener("click", () => {
        const confirmed = confirm("Tem certeza que deseja sair da sua conta?");
        if (confirmed) {
            alert("Saindo da conta...");
            // No futuro, redirecionaria para a tela de login
            // window.location.href = 'index.html';
        }
    });
});