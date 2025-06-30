// Importa as funções dos SDKs do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-storage.js";

// A configuração do  Firebase
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

// Inicializa os serviços e os exporta para que possamos usá-los em outros arquivos
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);