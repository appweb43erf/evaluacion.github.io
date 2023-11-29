// Importa las funciones de firebase.js
import { saveRopa, getRopas, onGetRopas, deleteRopa, getRopaById, updateRopa } from "./firebase.js";

const ropaForm = document.getElementById("task-form");
const ropaContainer = document.getElementById("ropa-container");

let editStatus = false;
let editRopaId = null;

window.addEventListener("DOMContentLoaded", async () => {
  onGetRopas((querySnapshot) => {
    let html = "";

    querySnapshot.forEach((doc) => {
      const ropa = doc.data();
      console.log(doc.id);
      html += `
        <div>
          <p>${ropa.nombre}</p>
          <p>${ropa.tipo}</p>
          <p>${ropa.color}</p>
          <p>${ropa.talla}</p>
          <p>${ropa.fecha}</p>
          <button class='btn-delete' data-id='${doc.id}'>Borrar</button>
          <button class='btn-edit' data-id='${doc.id}'>Editar</button>
        </div>
      `;
    });

    ropaContainer.innerHTML = html;

    const btnsDelete = ropaContainer.querySelectorAll('.btn-delete');

    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        deleteRopa(dataset.id);
      });
    });

    const btnsEdit = ropaContainer.querySelectorAll('.btn-edit');
    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const doc = await getRopaById(e.target.dataset.id);
        const ropa = doc.data();

        // Corrige el nombre de las propiedades
        ropaForm['task-nombre'].value = ropa.nombre;
        ropaForm['task-tipo'].value = ropa.tipo;
        ropaForm['task-color'].value = ropa.color;
        ropaForm['task-talla'].value = ropa.talla;
        ropaForm['task-fechaFabricacion'].value = ropa.fecha;

        editStatus = true;
        editRopaId = doc.id;

        ropaForm['btn-ropa-save'].innerText = "Actualizar";
      });
    });
  });
});

ropaForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = ropaForm["task-nombre"];
  const tipo = ropaForm["task-tipo"];
  const color = ropaForm["task-color"];
  const talla = ropaForm["task-talla"];
  const fecha = ropaForm["task-fechaFabricacion"];

  if (!editStatus) {
    saveRopa(nombre.value, tipo.value, color.value, talla.value, fecha.value);
  } else {
    updateRopa(editRopaId, {
      nombre: nombre.value,
      tipo: tipo.value,
      color: color.value,
      talla: talla.value,
      fecha: fecha.value,
    });

    editStatus = false;
    editRopaId = null;

    ropaForm['btn-ropa-save'].innerText = "Guardar";
  }

  ropaForm.reset();
});
