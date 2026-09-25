// lib/firebase.ts
// Conexión a Firebase (Auth con Google + Firestore) para la sección de reseñas.
//
// Estos valores de configuración de Firebase son públicos por diseño (viajan
// en el JS del navegador de cualquier app de Firebase): la seguridad real la
// dan las reglas de Firestore (ver firestore.rules en la raíz del repo), no
// estos datos. Por eso van hardcodeados acá y no como variables de entorno:
// este proyecto exporta el sitio como HTML/JS estático (output: "export"),
// así que no depende de tener un .env cargado en el servidor de hosting.
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSwMKfqfVU8Bo-IV7JMV4cdgGDMrUXPOw",
  authDomain: "sensoria-8c69b.firebaseapp.com",
  projectId: "sensoria-8c69b",
  storageBucket: "sensoria-8c69b.firebasestorage.app",
  messagingSenderId: "187127982961",
  appId: "1:187127982961:web:de68f50f25aba520a764d0",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
