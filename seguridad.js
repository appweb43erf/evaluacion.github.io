import { getAuth, getFirestore } from "../lib/fabrica.js";


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

    // Verifica si el conjunto de roles incluye "admin"
    if (rolIds.has("admin")) {
      // El usuario tiene el rol de administrador, redirige a "crud.html"
      window.location.href = "crud.html";
      return true;
    } else {
      // El usuario no tiene el rol de administrador, redirige a "usuario.html"
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
    const data = doc.data();
    return new Set(data.rolIds || []);
  } else {
    return new Set();
  }
}
