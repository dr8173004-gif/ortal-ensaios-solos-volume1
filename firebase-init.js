// firebase-init.js
import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// 🔧 Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDY5IFakVFbbLn8UQHUCgea7KOx_zZjvlY",
  authDomain: "portal-ensaios-solos-vol1.firebaseapp.com",
  projectId: "portal-ensaios-solos-vol1",
  storageBucket: "portal-ensaios-solos-vol1.appspot.com",
  messagingSenderId: "217730071254",
  appId: "1:217730071254:web:a79fa9cbf49f742ff6277"
};

// ⚙️ Evita erro de app duplicado
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

// ✅ Exportações únicas (agora o 'app' realmente existe)
export { app };
export const auth = getAuth(app);
export const db = getFirestore(app);
