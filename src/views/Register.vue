<template>
    <form class="form-signin">
      <h1 class="h3">Crear cuenta</h1>
      <input type="text" v-model="input.firstName" class="form-control first-name" placeholder="Nombre" required/>
      <input type="email" v-model="input.email" class="form-control email" placeholder="Correo" required />
      <input type="password" v-model="input.password" class="form-control password" placeholder="Contraseña" required/>
      <input type="password" v-model="input.confirmPassword" class="form-control confirm-password" placeholder="Confirmar Contraseña" required/>
      <button class="btn btn-lg" v-on:click="register()">Crear cuenta</button>
    </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Agora',
  data () {
    return {
      input: {
        firstName: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      response: ''
    }
  },
  methods: {
    register () {
      axios({
        method: 'POST',
        url: 'http://34.74.72.68/api/auth/signup',
        data: this.input,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(
        res => {
          this.response = res.data
          console.log(this.response)
        },
        err => {
          console.log(err)
        }
      )
    }
  }
}
</script>

<style lang="scss">
.form-signin {
  text-align: center;
  align-items: center;
  margin-top: 10em;
  margin-left: 37%;
  width: 100%;
  max-width: 330px;
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
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.password {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.confirm-password {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin-top: -1px;
}
.btn {
  background-color: #28b3b8;
  color: #ffffff;
}
</style>
