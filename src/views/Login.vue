<template>
  <form class="form-signin">
    <h1 class="h3">Iniciar Sesión</h1>
    <input type="email" class="form-control" placeholder="Correo" required />
    <input type="password" class="form-control" placeholder="Contraseña" required />
    <button class="btn btn-lg" type="submit">Continuar</button>
  </form>
</template>

<style lang="scss">
body {
  align-items: center;
  padding-top: 10em;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
  color: #0b5659;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.btn {
  background-color: #28b3b8;
  color: white;
}
</style>
