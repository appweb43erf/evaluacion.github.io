
import { } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js"

document.addEventListener('DOMContentLoaded', function () {
    const backToLoginButton = document.querySelector('#backToLogin');
    if (backToLoginButton) {
      backToLoginButton.addEventListener('click', () => {
        // Redirige al usuario a la página de inicio de sesión
        window.location.href = "index.html";
      });
    }
  });
  