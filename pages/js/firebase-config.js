// Importa as funções que precisamos dos SDKs do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-storage.js";

// A configuração do seu projeto Firebase
// (COLE A SUA CONFIGURAÇÃO AQUI SE FOR DIFERENTE)
const firebaseConfig = {
  apiKey: "AIzaSyA3XjrfbatqOnps7GT1x74-yO62cG9kFmY",
  authDomain: "desapego-materno.firebaseapp.com",
  projectId: "desapego-materno",
  storageBucket: "desapego-materno.appspot.com",
  messagingSenderId: "613822558489",
  appId: "1:613822558489:web:e8a9c33f00936132a41588",
  measurementId: "G-7B43ME8JRK"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa e EXPORTA os serviços que vamos usar no resto do app
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Esta função verifica se há um utilizador logado e retorna os seus dados.
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};