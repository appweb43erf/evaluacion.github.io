<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ropa</title>
    <!--
    Carga el núcleo de Firebase
    JS SDK
  -->
  <script
  src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js">
  </script>
<!--
  Agrega el manejo de
  autenticación.
-->
<script
  src="https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js">
  </script>
<!--
  Agrega el manejo de bases de
  datos.
-->
<script
  src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js">
  </script>
<!--
  Configura la app usando la
  información del sitio de
  Firebase.
-->

    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="app">
        <h1>Ropa</h1>
        <form id="task-form">
            <label for="nombre">Nombre:</label>
            <input type="text" id="task-nombre" required>

            <label for="tipo">Tipo:</label>
            <input type="text" id="task-tipo" required>

            <label for="color">Color:</label>
            <input type="text" id="task-color" required>

            <label for="talla">Talla:</label>
            <input type="text" id="task-talla" required>

            <label for="fechaFabricacion">Fecha de Fabricación:</label>
            <input type="date" id="task-fechaFabricacion" required>
            <button id="btn-ropa-save">Guardar</button>
            <button type="button" id="facebookLogin" class="btn btn-ropa-save">Iniciar sesión con Facebook</button>
            <button type="button" id="githubLogin" class="btn btn-dark">Iniciar sesion con GitHub</button>
        </form>
        <br><br><br>
        <div id="ropa-container"></div>
    </div>
    <div id="ropa-container"></div>
    <script type="module" src="./index.js"></script>
    <script type="module" src="./firebase.js"></script>
    <script type="module" src="./facebookLogin.js"></script>s
</body>
</html>
