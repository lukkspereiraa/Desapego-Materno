import { db, auth } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
    
    const profileNameElement = document.getElementById("profile-user-name");
    
    onAuthStateChanged(auth, async (user) => {
        
        if (user) {
            console.log("Estado de autenticação verificado. UID do utilizador:", user.uid);
            
            try {
                const q = query(collection(db, "utilizadores"), where("uid", "==", user.uid));
                
                console.log("A executar a consulta no Firestore...");
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                   // ENCONTRÁMOS O PERFIL
                    const userData = querySnapshot.docs[0].data();
                    console.log("Dados do perfil encontrados:", userData);

                    profileNameElement.textContent = userData.nome;
                } else {
   
                    console.warn("Consulta bem-sucedida, mas nenhum documento encontrado para este UID.");
                    profileNameElement.textContent = "Perfil não encontrado";
                }

            } catch (error) {
                // ERRO: A consulta ao banco de dados falhou
                console.error("Erro ao buscar dados do Firestore:", error);
                profileNameElement.textContent = "Erro ao carregar";
            }

        } else {
            // NENHUM UTILIZADOR LOGADO
            console.log("Nenhum utilizador logado. A redirecionar para o login...");
            window.location.href = 'login.html';
        }
    });


    // --- Lógica das abas ---
    const tabs = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(item => item.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            tab.classList.add("active");
            const activeTabContent = document.getElementById(tab.dataset.tab);
            if(activeTabContent) {
                activeTabContent.classList.add("active");
            }
        });
    });
});