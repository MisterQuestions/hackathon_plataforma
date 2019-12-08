<template>
    <div class="dashboard">
      <Header/>
      <div class="overview">
        <div class="searchbox">
          <i class="material-icons">search</i>
          <input type="text" placeholder="Buscar un módulo o característica...">
        </div>
        <div class="modules">
          <div class="box">
            <div class="info">
              <div class="icon">
                <i class="material-icons">playlist_add_check</i>
              </div>
              <div class="name">Asistencia</div>
            </div>
          </div>
          <div class="box">
            <div class="info">
              <div class="icon">
                <i class="material-icons">playlist_add_check</i>
              </div>
              <div class="name">Cursos</div>
            </div>
          </div>
          <div class="box">
            <div class="info">
              <div class="icon">
                <i class="material-icons">av_timer</i>
              </div>
              <div class="name">Horario</div>
            </div>
          </div>
          <div class="box">
            <div class="info">
              <div class="icon">
                <i class="material-icons">receipt</i>
              </div>
              <div class="name">Examen</div>
            </div>
          </div>
          <div class="box">
            <div class="info">
              <div class="icon">
                <i class="material-icons">event</i>
              </div>
              <div class="name">Calendario</div>
            </div>
          </div>
          <div class="box">
            <div class="info">
              <div class="icon">
                <i class="material-icons">view_day</i>
              </div>
              <div class="name">Noticias</div>
            </div>
          </div>
          <div class="box">
            <div class="info">
              <div class="icon">
                <i class="material-icons">assignment</i>
              </div>
              <div class="name">Tareas</div>
            </div>
          </div>
          <div class="box">
            <div class="info">
              <div class="icon">
                <i class="material-icons">filter_9</i>
              </div>
              <div class="name">Calificaciones</div>
            </div>
          </div>
          <div class="box">
            <div class="info">
              <div class="icon">
                <i class="material-icons">insert_comment</i>
              </div>
              <div class="name">Mensajes</div>
            </div>
          </div>
          <div class="box">
            <div class="info">
              <div class="icon">
                <i class="material-icons">assessment</i>
              </div>
              <div class="name">Estadísticas</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
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
  width: 175px;
  height: 175px;
  margin: 10px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
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
  }
}

.name {
  margin-top: 10px;
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
