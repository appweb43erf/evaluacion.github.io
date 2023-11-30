import { getAuth, getFirestore } from "../lib/fabrica.js";
import { muestraError } from "../lib/util.js";

const firestore = getFirestore();
const daoUsuario = firestore.collection("Usuario");

export async function iniciaSesión() {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  await getAuth().signInWithRedirect(provider);
}

export async function tieneRol(usuario, roles) {
  if (usuario && usuario.email) {
    const rolIds = await cargaRoles(usuario.email);

    // Verifica si el conjunto de roles incluye "admin" o "usuario"
    if (roles.some(rol => rolIds.has(rol))) {
      // Redirige al usuario según su rol
      if (rolIds.has("admin")) {
        window.location.href = "crud.html";
      } else {
        window.location.href = "usuario.html";
      }
      return true;
    } else {
      alert("No autorizado.");
      window.location.href = "usuario.html";
      return false;
    }
  } else {
    // Si no hay usuario o correo, inicia sesión
    iniciaSesión();
    return false;
  }
}

export async function terminaSesión() {
  try {
    await getAuth().signOut();
  } catch (e) {
    muestraError(e);
  }
}

export async function cargaRoles(email) {
  let doc = await daoUsuario.doc(email).get();
  if (doc.exists) {
    return new Set(["admin"]); // Cambiar "usuario" según tus necesidades
  } else {
    return new Set();
  }
}
