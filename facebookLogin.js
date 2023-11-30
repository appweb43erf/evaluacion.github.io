import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { auth } from './firebase.js';

// facebookLogin.js
document.addEventListener('DOMContentLoaded', function () {
    const facebookButton = document.querySelector('#facebookLogin');
    if (facebookButton) {
      facebookButton.addEventListener('click', async () => {
        // Tu código aquí

        const provider = new FacebookAuthProvider();
  
        try {
            const result = await signInWithPopup(auth, provider);
            console.log('Inicio de sesión exitoso:', result);
  
            const credentials = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credentials.accessToken;
  
            // Obtiene la información del usuario
            const user = result.user;
            document.cookie = `accessToken=${accessToken}; SameSite=None; Secure`;
  
            // Puedes acceder a más información del usuario usando
            // result.additionalUserInfo.profile
  
            console.log(user);
            console.log(accessToken);
  
            window.location.href = "Usuario.html";
            
        } catch (error) {
            console.error('Error durante el inicio de sesión:', error);
        }
      });
    }
  });
  