<template>
  <div class="header">
    <div class="me">
      <div class="name">Nombre</div>
      <div class="group"><b>Group</b></div>
    </div>
    <div class="quickactions">
      <div class="icon notifications">
        <i class="material-icons">notifications</i>
      </div>
      <div class="icon messages">
        <i class="material-icons">email</i>
      </div>
      <div class="icon profile">
        <i class="material-icons">person</i>
      </div>
      <div class="icon">
        <i class="material-icons logout">input</i>
      </div>
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
  margin-left: 25px;
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
