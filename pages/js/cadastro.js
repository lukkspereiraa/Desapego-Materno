import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona os modais e botões
    const successModal = document.getElementById("success-modal");
    const errorModal = document.getElementById("error-modal");
    const closeErrorModalBtn = document.getElementById("close-error-modal");
    const goToLoginBtn = document.getElementById("go-to-login");
    
    // --- Cadastro no Firebase ---
    const registerForm = document.getElementById("register-form");

    if (registerForm) {
        registerForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("senha").value;

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Mostra o modal de sucesso
                    successModal.classList.add("show");

                    setTimeout(() => {
                        window.location.href = "login.html";
                    }, 2500);
                })
                .catch((error) => {
                    // --- TRATAMENTO DE ERRO ---
                    if (error.code === 'auth/email-already-in-use') {
                        // Se o e-mail 
                        errorModal.classList.add("show");
                    } else if (error.code === 'auth/weak-password') {
                        alert('Sua senha é muito fraca. Precisa ter no mínimo 6 caracteres.');
                    } else {
                        alert('Ocorreu um erro ao criar a conta. Verifique o console para mais detalhes.');
                    }
                });
        });
    }

    // --- MODAL DE ERRO ---
    if (closeErrorModalBtn) {
        closeErrorModalBtn.addEventListener("click", () => {
            errorModal.classList.remove("show");
        });
    }

    if (goToLoginBtn) {
        goToLoginBtn.addEventListener("click", () => {
            window.location.href = "login.html";
        });
    }

});