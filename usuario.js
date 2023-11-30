import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getRopaById } from "./firebase.js";

const userNameSpan = document.getElementById('user-name');
const userTypeSpan = document.getElementById('user-type');
const userColorSpan = document.getElementById('user-color');
const userTallaSpan = document.getElementById('user-talla');
const userFechaSpan = document.getElementById('user-fecha');
const backToLoginButton = document.getElementById('backToLogin');

// Escucha los cambios en la autenticación
onAuthStateChanged(auth, async (user) => {
    if (user) {
        // Usuario autenticado, obtén sus datos
        const doc = await getRopaById(user.uid);
        const ropa = doc.data();

        // Muestra los datos en la página
        userNameSpan.innerText = ropa.nombre;
        userTypeSpan.innerText = ropa.tipo;
        userColorSpan.innerText = ropa.color;
        userTallaSpan.innerText = ropa.talla;
        userFechaSpan.innerText = ropa.fecha;
    } else {
        // No hay usuario autenticado, redirige al inicio de sesión
        window.location.href = "IniciaSesion.html";
    }
});

// Agrega un evento de clic al botón de volver a iniciar sesión
backToLoginButton.addEventListener('click', () => {
    // Redirige al usuario a la página de inicio de sesión
    window.location.href = "IniciaSesion.html";
});
