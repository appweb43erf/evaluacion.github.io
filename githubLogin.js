import { GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { auth } from './firebase.js';

// github.js
document.addEventListener('DOMContentLoaded', function () {
    const githubButton = document.querySelector('#githubLogin');
    if (githubButton) {
      githubButton.addEventListener('click', async () => {
        // Tu código aquí
        const provider = new GithubAuthProvider();
  
        try {
            const result = await signInWithPopup(auth, provider);
            const credentials = GithubAuthProvider.credentialFromResult(result);
            const accessToken = credentials.accessToken;
  
            // Obtiene la información del usuario
            const user = result.user;
  
            // Puedes acceder a más información del usuario usando
            // result.additionalUserInfo.profile
  
            console.log(user);
            console.log(accessToken);
  
            // Cierra el modal después de iniciar sesión
            window.location.href = "crud.html"
  
        } catch (error) {
            if (error.code === 'auth/cancelled-popup-request') {
                // El usuario canceló la solicitud del popup
                console.log('Solicitud de popup cancelada por el usuario');
            } else if (error.code === 'auth/popup-closed-by-user') {
                // El usuario cerró el popup
                console.log('Popup cerrado por el usuario');
            } else {
                // Otro error, imprímelo en la consola
                console.error('Error de inicio', error);
            }
        }
      });
    }
  });
  
