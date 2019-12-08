<template>
    <div class="dashboard">
      <Header/>
      <div class="overview">
        <div class="searchbox">
          <i class="material-icons">search</i>
          <input type="text" placeholder="Buscar un módulo o característica...">
        </div>
        <div class="modules">
          <a class="box" href="/dashboard/assistance">
            <div class="info">
              <div class="icon">
                <i class="material-icons">playlist_add_check</i>
              </div>
              <div class="name">Asistencia</div>
            </div>
          </a>
          <a class="box" href="/dashboard/courses">
            <div class="info">
              <div class="icon">
                <i class="material-icons">book</i>
              </div>
              <div class="name">Cursos</div>
            </div>
          </a>
          <a class="box" href="/dashboard/schedule">
            <div class="info">
              <div class="icon">
                <i class="material-icons">av_timer</i>
              </div>
              <div class="name">Horario</div>
            </div>
          </a>
          <a class="box" href="/dashboard/exam">
            <div class="info">
              <div class="icon">
                <i class="material-icons">receipt</i>
              </div>
              <div class="name">Examen</div>
            </div>
          </a>
          <a class="box" href="/dashboard/calendar">
            <div class="info">
              <div class="icon">
                <i class="material-icons">event</i>
              </div>
              <div class="name">Calendario</div>
            </div>
          </a>
          <a class="box" href="/dashboard/news">
            <div class="info">
              <div class="icon">
                <i class="material-icons">view_day</i>
              </div>
              <div class="name">Noticias</div>
            </div>
          </a>
          <a class="box" href="/dashboard/assignments">
            <div class="info">
              <div class="icon">
                <i class="material-icons">assignment</i>
              </div>
              <div class="name">Tareas</div>
            </div>
          </a>
          <a class="box" href="/dashboard/grades">
            <div class="info">
              <div class="icon">
                <i class="material-icons">filter_9</i>
              </div>
              <div class="name">Calificaciones</div>
            </div>
          </a>
          <a class="box" href="/dashboard/messages">
            <div class="info">
              <div class="icon">
                <i class="material-icons">insert_comment</i>
              </div>
              <div class="name">Mensajes</div>
            </div>
          </a>
          <a class="box" href="/dashboard/stats">
            <div class="info">
              <div class="icon">
                <i class="material-icons">assessment</i>
              </div>
              <div class="name">Estadísticas</div>
            </div>
          </a>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.dashboard {
  background-color: #f2f4f4;
  height: 100vh;
}

.overview {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  max-width: 900px;
  margin: auto;
}

.searchbox {
  width: 100%;
  display: flex;
  background-color: #ffffff;
  padding: 10px;
  margin-top: 15px;

  i {
    opacity: 0.5;
    margin-right: 5px;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
  }
}

.modules {
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  justify-content: space-evenly;
}

.box {
  width: 155px;
  height: 155px;
  margin: 10px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
}

.info {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.icon {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #c7d0d8;

  i {
    font-size: 3rem;
    color: #ffffff;
  }
}

.name {
  margin-top: 10px;
  color: #000000;
}
</style>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'header',
  components: {
    Header
  }
}
</script>
