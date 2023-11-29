  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
  import { } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js"
  import { } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
  import { } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-functions.js";  
  import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Configuración de tu aplicación Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCAF5-rKXavofX4M7nMB7m1l6c1VEZGvcE",
  authDomain: "tercero-8ee51.firebaseapp.com",
  projectId: "tercero-8ee51",
  storageBucket: "tercero-8ee51.appspot.com",
  messagingSenderId: "902200318862",
  appId: "1:902200318862:web:5069024b7baf932d4aa2df"
};
// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Funciones para interactuar con Firestore
export const saveRopa = async (nombre, tipo, color, talla, fecha) => {
  const ropaRef = collection(db, "ropa");
  await addDoc(ropaRef, { nombre, tipo, color, talla, fecha });
};

export const getRopas = () => getDocs(collection(db, 'ropa'));

export const onGetRopas = (callback) => onSnapshot(collection(db, 'ropa'), callback);

export const deleteRopa = async (id) => {
  const ropaRef = doc(db, "ropa", id);
  await deleteDoc(ropaRef);
};

export const getRopaById = (id) => getDoc(doc(db, "ropa", id));

export const updateRopa = async (id, newFields) => {
  const ropaRef = doc(db, "ropa", id);
  await updateDoc(ropaRef, newFields);
};

export {auth};
