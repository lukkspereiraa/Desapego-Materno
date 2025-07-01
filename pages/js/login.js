import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {

    const passwordInput = document.getElementById("senha");
    const togglePasswordIcon = document.getElementById("toggle-password-icon");

    // Verifica se os elementos existem na página antes de adicionar o evento
    if (passwordInput && togglePasswordIcon) {
        togglePasswordIcon.addEventListener("click", () => {
            const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
            passwordInput.setAttribute("type", type);
            
            togglePasswordIcon.classList.toggle("fa-eye");
            togglePasswordIcon.classList.toggle("fa-eye-slash");
        });
    }

    // --- LÓGICA DE LOGIN COM FIREBASE ---
    const loginForm = document.getElementById("login-form");
    const errorModal = document.getElementById("login-error-modal");
    const closeErrorModalBtn = document.getElementById("close-login-error-modal");
    const errorMessageElement = document.getElementById("login-error-message");

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("senha").value;

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Login bem-sucedido, redireciona para o feed
                    console.log("Login com sucesso!", userCredential.user);
                    window.location.href = 'feed.html';
                })
                .catch((error) => {
                    console.error("Erro no login:", error.code);
                    
                    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
                        errorMessageElement.textContent = 'E-mail ou senha incorretos. Tente novamente.';
                    } else {
                        errorMessageElement.textContent = 'Ocorreu um erro inesperado. Tente novamente mais tarde.';
                    }
                    if (errorModal) {
                        errorModal.classList.add("show");
                    }
                });
        });
    }
    
    // Modal de erro
    if (closeErrorModalBtn) {
        closeErrorModalBtn.addEventListener("click", () => {
            if (errorModal) {
                errorModal.classList.remove("show");
            }
        });
    }
});