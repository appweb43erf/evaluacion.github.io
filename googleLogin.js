// Importa los módulos necesarios de Firebase
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { auth } from './firebase.js'; // Asegúrate de que el path sea correcto

// Obtiene el botón de inicio de sesión con Google
const googleButton = document.querySelector('#googleLogin');

// Agrega un evento de clic al botón
googleButton.addEventListener('click', async () => {
    // Crea una instancia del proveedor de autenticación de Google
    const provider = new GoogleAuthProvider();

    try {
        // Inicia sesión con Google usando un popup
        const result = await signInWithPopup(auth, provider);
        
        // Obtiene las credenciales y el token de acceso
        const credentials = GoogleAuthProvider.credentialFromResult(result);
        const accessToken = credentials.accessToken;

        // Obtiene la información del usuario
        const user = result.user;

        // Puedes acceder a más información del usuario usando
        // result.additionalUserInfo.profile

        console.log(user);
        console.log(accessToken);

        window.location.href = "Usuario.html";
        // Cierra el modal después de iniciar sesión
    } catch (error) {
        // Maneja los errores específicos de la autenticación de Google
        if (error.code === 'auth/cancelled-popup-request') {
            console.log('Solicitud de popup cancelada por el usuario');
        } else if (error.code === 'auth/popup-closed-by-user') {
            console.log('Popup cerrado por el usuario');
        } else {
            console.error('Error durante el inicio de sesión:', error);
        }
    }
});
s