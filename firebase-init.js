// main/firebase-init.js
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDY5IFakVFbbLn8UQHUcgea7KOx_zZjyLY",
  authDomain: "portal-ensaios-solos-vol1.firebaseapp.com",
  projectId: "portal-ensaios-solos-vol1",
  storageBucket: "portal-ensaios-solos-vol1.appspot.com",
  messagingSenderId: "217730071254",
  appId: "1:217730071254:web:a79fa9cbf49f742ff62777"
};

// ✅ Previne inicialização duplicada
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

console.log("%c🔥 Firebase inicializado (instância única)", "color:lime;font-weight:bold");
