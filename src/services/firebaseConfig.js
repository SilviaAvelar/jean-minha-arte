// src/services/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// <--- Importante para o banco

// Suas chaves 
const firebaseConfig = {
    apiKey: "AIzaSyBDqtdBwo1BlvirQPqmNUR_rz-WtDJjjzI",
    authDomain: "jean-minha-arte.firebaseapp.com",
    projectId: "jean-minha-arte",
    storageBucket: "jean-minha-arte.firebasestorage.app",
    messagingSenderId: "101204760828",
    appId: "1:101204760828:web:1111df7fde05ce15e45f79"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa e exporta o Banco de Dados
export const db = getFirestore(app); // <--- Isso permite usar o banco nos componentes