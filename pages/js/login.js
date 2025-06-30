import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const togglePassword = document.querySelector(".toggle-password");
    const passwordInput = document.getElementById("senha");

    togglePassword.addEventListener("click", () => {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        togglePassword.classList.toggle("fa-eye");
        togglePassword.classList.toggle("fa-eye-slash");
    });

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const email = document.getElementById("email").value;
        const password = document.getElementById("senha").value;

        // --- LÓGICA DO FIREBASE ---
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Login bem-sucedido
                const user = userCredential.user;
                console.log("Usuário logado com sucesso!", user);
                alert("Login efetuado com sucesso!");
                window.location.href = 'feed.html';
            })
            .catch((error) => {
                // Trata os erros de login
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Erro no login:", errorCode, errorMessage);

                if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
                    alert('E-mail ou senha incorretos. Por favor, tente novamente.');
                } else {
                    alert('Ocorreu um erro ao tentar fazer login.');
                }
            });
    });
});