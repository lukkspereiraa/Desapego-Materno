import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

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

    // Evento de envio do formulário
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede que a página recarregue

        const email = document.getElementById("email").value;
        const password = document.getElementById("senha").value;

        // --- LÓGICA DO FIREBASE ---
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Cadastro bem-sucedido
                const user = userCredential.user;
                console.log("Usuário cadastrado com sucesso!", user);
                alert("Conta criada com sucesso! Você será redirecionado para a tela de login.");
                window.location.href = "login.html";
            })
            .catch((error) => {
                // Trata os erros de cadastro
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Erro no cadastro:", errorCode, errorMessage);

                if (errorCode === 'auth/weak-password') {
                    alert('Sua senha é muito fraca. Ela precisa ter no mínimo 6 caracteres.');
                } else if (errorCode === 'auth/email-already-in-use') {
                    alert('Este e-mail já está em uso. Tente fazer login.');
                } else {
                    alert('Ocorreu um erro ao criar a conta. Tente novamente.');
                }
            });
    });
});