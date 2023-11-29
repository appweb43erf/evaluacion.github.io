import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { auth } from './firebase.js';

const facebookButton = document.querySelector('#facebookLogin');

facebookButton.addEventListener('click', async () => {
    console.log('Iniciando sesión con Facebook...');

    const provider = new FacebookAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);
        console.log('Inicio de sesión exitoso:', result);

        const credentials = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credentials.accessToken;

        // Obtiene la información del usuario
        const user = result.user;

        // Puedes acceder a más información del usuario usando
        // result.additionalUserInfo.profile

        console.log(user);
        console.log(accessToken);

        // Cierra el modal después de iniciar sesión
        const modal = new bootstrap.Modal(document.querySelector('#signinModal'));
        modal.hide();
    } catch (error) {
        console.error('Error durante el inicio de sesión:', error);
    }
});
