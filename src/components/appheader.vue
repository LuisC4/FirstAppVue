<template>
  <div id="headerapp" class="container-xl">
    
    <b-jumbotron bg-variant="" text-variant="black" border-variant="dark">
    <template #header><img src="../assets/drop.png" alt="" width="8%"> {{msg1}} <img src="../assets/drop.png" alt="" width="8%"></template>
    
    <template #lead>
      <h2>Mi primera app desarrollada con Vue.Js</h2>
    </template>

    <hr class="my-4">

    <p>
      Utilizando Bootstrap-vue y vue-router<br>
      Al presionar en la Nav-bar "Header": muestra solo el componente appheader.vue <br>
      "Cuerpo": muestra solo el componente appbody.vue el cual contiene todo el cuerpo <br>
      Estas rutas se cargan utilizando vue-router.
    </p>

    <b-button variant="success" v-b-toggle.sidebar-variant href="#">Desplegar caja lateral</b-button>
  </b-jumbotron>

  <div>
    <b-sidebar id="sidebar-variant" title="Caja lateral" bg-variant="dark" text-variant="light" shadow>
      <div class="px-3 py-2">
        <p>
          Red Dead Redemption 2 es un videojuego de accion-aventura western, en un mundo abierto y en perspectiva de primera y tercera persona
        </p>
        <b-img src="https://lh3.googleusercontent.com/HCUkD69MAHEOj84Yi7Kb5vxHpCePTsmQI4g9vYuVPUo-87cWE6ZZIk0tiyYzaiS9zaAFMTXRNYJaaRczRN-yQYw" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
  </div>
</template>


<script>
export default {
    name: 'appheader',
    data(){
      return{
        msg1: 'My First App Vue.JS'
      }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500&display=swap');
#headerapp{
font-family: 'Rajdhani', sans-serif;
font-size: 125%;
}
</style>