<template>
  <div class="header">
    <div class="me">
      <div class="logo">
        <img src="@/assets/logo.png">
      </div>
      <div class="data">
        <div class="name">Antonio Carvajal Galindo</div>
        <div class="group"><b>Tutor</b></div>
      </div>
    </div>
    <div class="quickactions">
      <a class="icon notifications" href="/profile/notifications">
        <i class="material-icons">notifications</i>
      </a>
      <a class="icon messages" href="/profile/messages">
        <i class="material-icons">email</i>
      </a>
      <a class="icon profile" href="/profile">
        <i class="material-icons">person</i>
      </a>
      <a class="icon" href="/logout">
        <i class="material-icons logout">input</i>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.me {
  margin-left: 5px;
  display: flex;
}

.logo {
  width: 50px;

  img {
    width: 100%;
    height: 100%;
  }
}

.data {
  margin-left: 10px;
}

.quickactions {
  display: flex;
  align-items: center;
}

i {
  color: #ffffff;
}

.icon {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  text-decoration: none;
}

.notifications {
  background-color: #28b3b8;
}

.messages {
  background-color: #0b5659;
}

.profile {
  background-color: #dbb418;
}

.logout {
  color: #ff2e2e;
}
</style>
