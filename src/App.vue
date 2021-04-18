<template>
  <div id="app">
    <div class="appnavbar mb-4">
    <b-navbar toggleable="md" type="dark" variant="danger">
      <b-container>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

       <b-navbar-brand href="/">
        <img src="./assets/code-solid.svg" class="d-inline-block align-top" id="imagen" alt="Kitten">
        Home
        </b-navbar-brand>

         <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item :to="{name: 'header'}">Header</b-nav-item>
              <b-nav-item :to="{name: 'bodycomponent'}">Cuerpo</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
      </b-container>
    </b-navbar>
  </div>
    <router-view />
        <footer>
  <div class="container">
    <div class="row">
        <div class="col-xs-12 col-md-6 text-left">
            <h5 class="lead">CONTACTO:</h5>
            <h5 class="">
            Email: luisjosearias10@gmail.com<br>
            Programacion Computacional IV<br>
            Telefono: ####-####<br>
            </h5>
        </div>

        <div class="col-xs-12 col-md-6 text-right">
            <h6 class="lead">ENCUENTRAME EN LAS REDES</h6>
            <div class="redes-footer">
              <a href="https://www.facebook.com/" target="_blank"><img class="footerimg" src="./assets/facebookwhite.svg"></a>
              <a href="https://twitter.com/Luis78791" target="_blank"><img class="footerimg" src="./assets/twitterwhite.svg"></a>
              <a href="https://www.instagram.com/luisj.01/" target="_blank"><img class="footerimg" src="./assets/instagramwhite.svg"></a>
            </div>
        </div>
    </div>
    <div class="row"> 

        <div class="col-md-12 text-right">
            <p class="small">Luis Jose Arias Reyes @2021.<br> Todos los derechos reservados.</p>
        </div>
        
    </div>

    </div>
  </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 120% ;
}

.appnavbar{
  font-family: 'RocknRoll One', sans-serif;
}

#imagen{
  width: 35px;
}
footer {
  font-family: Rajdhani, sans-serif;
	background-color:#1A1A1A;
	height: 50%;
  color: rgb(255, 255, 255);
  padding-top: 15px;
  font-size: 150%;
}

.main1 { 
  display:flex;
  margin:0 auto;
}

.footerimg{
  width: 40px;
  margin-left: 10px;
}
</style>
