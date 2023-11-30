import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { auth } from './firebase.js'; // 


document.addEventListener('DOMContentLoaded', function () {
    const googleButton = document.querySelector('#googleLogin');
    if (googleButton) {
      googleButton.addEventListener('click', async () => {
        // Tu código aquí
        // Importa los módu
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
  
            window.location.href = "crud.html";
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
    }
  });
  