import { auth, db } from './firebase-config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
    
    // --- Seleciona todos os elementos no início ---
    const registerForm = document.getElementById("register-form");
    const passwordInput = document.getElementById("senha");
    const togglePasswordIcon = document.getElementById("toggle-password-icon");

    // Elementos dos modais
    const successModal = document.getElementById("success-modal");
    const errorModal = document.getElementById("error-modal");
    const closeErrorModalBtn = document.getElementById("close-error-modal");
    const goToLoginBtn = document.getElementById("go-to-login");

    // Lógica para mostrar/ocultar senha
    if (passwordInput && togglePasswordIcon) {
        togglePasswordIcon.addEventListener("click", () => {
            const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
            passwordInput.setAttribute("type", type);
            togglePasswordIcon.classList.toggle("fa-eye");
            togglePasswordIcon.classList.toggle("fa-eye-slash");
        });
    }

    // Lógica do formulário de cadastro
    if (registerForm) {
        registerForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("senha").value;
            const cidade = document.getElementById("cidade").value;
            const idadeGestacional = document.getElementById("gestacao").value;

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;

                    // Tenta adicionar os dados do perfil ao Firestore
                    try {
                        const docRef = addDoc(collection(db, "utilizadores"), {
                            uid: user.uid,
                            nome: nome,
                            cidade: cidade,
                            email: email ,
                            idadeGestacional: idadeGestacional 
                        });

                        successModal.classList.add("show");

                        setTimeout(() => {
                            window.location.href = "login.html";
                        }, 1500); 

                    } catch (e) {
                        alert("A sua conta foi criada, mas houve um erro ao guardar os dados do perfil.");
                    }
                })
                .catch((error) => {
                    if (error.code === 'auth/email-already-in-use') {
                        errorModal.classList.add("show");
                    } else if (error.code === 'auth/weak-password') {
                        alert('A sua senha é muito fraca. Ela precisa ter no mínimo 6 caracteres.');
                    } else {
                        alert('Ocorreu um erro ao criar a conta: ' + error.message);
                    }
                });
        });
    }

    // Ações dos botões do modal de erro
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