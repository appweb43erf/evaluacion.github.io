import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getRopas } from "./firebase.js";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    // El usuario está autenticado, puedes mostrar los datos
    // o realizar otras operaciones aquí
    showUserData();
  } else {
    // El usuario no está autenticado, puedes redirigirlo a la página de inicio de sesión
    window.location.href = "index.html";
  }
});

function showUserData() {
  const ropaContainer = document.getElementById("user-container");

  getRopas().then((querySnapshot) => {
    let html = "";

    querySnapshot.forEach((doc) => {
      const ropa = doc.data();
      console.log(doc.id);
      html += `
        <div>
          <p>Nombre: ${ropa.nombre}</p>
          <p>Tipo: ${ropa.tipo}</p>
          <p>Color: ${ropa.color}</p>
          <p>Talla: ${ropa.talla}</p>
          <p>Fecha de Fabricación: ${ropa.fecha}</p>
        </div>
      `;
    });

    ropaContainer.innerHTML = html;
  });
}
