<template>
  <form class="form-signin" @submit="Registerform">
    <h1 class="h3">Crear cuenta</h1>
    <input
      type="text"
      v-model="firstname"
      class="form-control first-name"
      placeholder="Nombre"
      required
    />
    <input type="email" v-model="email" class="form-control email" placeholder="Correo" required />
    <input
      type="password"
      v-model="password"
      class="form-control password"
      placeholder="Contraseña"
      required
    />
    <input
      type="password"
      v-model="confirmpassword"
      class="form-control confirm-password"
      placeholder="Confirmar Contraseña"
      required
    />
    <button class="btn btn-lg">Crear cuenta</button>
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
  color: #0b5659;
}
.first-name {
  border-block-end: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.email {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.password {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.confirm-password {
  margin-top: -11px;
}
.btn {
  background-color: #28b3b8;
  color: white;
}
</style>
