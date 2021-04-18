<template>
  <div class="appbody mt-4 container">
    <hr />
    <h2>{{ Deportes.length }} Deportes:</h2>
    <h4 v-for="deportes in Deportes" :key="deportes.id">{{ deportes }}</h4>
    <hr />
    <div class="tabladatos mt-5">
      <b-table striped hover :items="personal"></b-table>
    </div>
    <div class="contador mt-5">
      <hr />
      <h2>Contador de clicks</h2>
      <button class="btn btn-primary" v-on:click="contador += 1">Contar</button>
      <button class="btn btn-danger ml-2" v-on:click="contador = 0">
        Restablecer
      </button>
      <p class="mt-2">Haz hecho click: {{ contador }} veces.</p>
    </div>
    <div class="mostrarmensaje mb-5">
      <hr />
      <b-form inline>
        <h2>Mostrar el texto escrito</h2>
        <b-form-input
          id="inline-form-input-text"
          class="mb-2 mr-sm-2 mb-sm-0 col-lg-3 ml-5"
          placeholder="Ingresa el texto a mostrar"
          v-model="mensaje"
        ></b-form-input>
        <b-button variant="success" @click="mostrarmensaje"
          >Mostar Texto</b-button
        >
      </b-form>
    </div>
    <hr />
    <div class="cardview mt-4 row">
      <h2 class="col-12">CardView Bootstrap Vue</h2>
      <b-card
        bg-variant="dark"
        text-variant="white"
        title="Desarrollador"
        img-src="https://i.ibb.co/vPVBm8h/img4-min.png"
        img-alt="Mi imagen"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mx-auto"
      >
        <b-card-text>
          Click en el boton para revelar mi nombre
        </b-card-text>

        <b-button href="#" variant="warning" v-on:click="minombre"
          >Boton</b-button
        >
      </b-card>

      <b-card
        title="Desarrollador"
        img-src="https://i.ibb.co/vPVBm8h/img4-min.png"
        img-alt="Mi imagen"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mx-auto"
      >
        <b-card-text>
          Click en el boton para revelar mi nombre
        </b-card-text>

        <b-button href="#" variant="primary" v-on:click="minombre"
          >Boton</b-button
        >
      </b-card>
    </div>
    <div class="carrusel mt-4">
      <hr />
      <h2>Carrusel Bootstrap</h2>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="5000"
        controls
        indicators
        background="#6b6b6b"
        img-width="1280"
        img-height="720"
        style="text-shadow: 1px 1px 2px #333;"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          caption="FAIRCHILD A-10 THUNDERBOLT II"
          text="Construido en los años 70 el A-10 nació de la experiencia bélica en Vietnam, con intención de aplicarla en Europa"
          img-src="https://i.ibb.co/1v97q9k/img1-min.png"
        ></b-carousel-slide>

        <b-carousel-slide img-src="https://i.ibb.co/Xj9JDFW/img2-min.png">
          <h1>Star Wars</h1>
        </b-carousel-slide>

        <b-carousel-slide img-src="https://i.ibb.co/c8TfCgv/img3-min.png">
          <h1 style="color: black;">Tecnology</h1>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div class="conversor">
      <hr />
      <h1>Convertir de °C a °F</h1>
      <h5>Formula: (0 °C × 9/5) + 32 = 32 °F</h5>
      <b-input-group class="mt-3 col-lg-5 mx-auto mb-4 mt-2" prepend="°C">
        <b-form-input
          v-model="temp1"
          placeholder="Ingresa la temperatura en grados Celsius"
          type="number"
          @change="caltemp"
          size="lg"
        ></b-form-input>
      </b-input-group>
      <input
        type="button"
        class="btn btn-success"
        @click="caltemp"
        value="Calcular"
        size="lg"
      />
      <div class="mt-2">Resultado: {{ result }} °F</div>
    </div>
    <hr>
    <div class="calpromedio row">
      <h2 class="col-12"> Calcular el promedio</h2>
      <b-input-group class="mt-3 col-lg-3 mx-auto mb-4 mt-2" prepend="LAB I 30%">
        <b-form-input
          v-model="num1"
          placeholder="Nota Lab I"
          type="number"
          @change="calpromedio"
          size="lg"
        ></b-form-input>
      </b-input-group>

      <b-input-group class="mt-3 col-lg-3 mx-auto mb-4 mt-2" prepend="LAB II 30%">
        <b-form-input
          v-model="num2"
          placeholder="Nota Lab II"
          type="number"
          @change="calpromedio"
          size="lg"
        ></b-form-input>
      </b-input-group>

      <b-input-group class="mt-3 col-lg-3 mx-auto mb-4 mt-2" prepend="PARCIAL 40%">
        <b-form-input
          v-model="num3"
          placeholder="Nota Parcial"
          type="number"
          @change="calpromedio"
          size="lg"
        ></b-form-input>
      </b-input-group>
      <div class="mt-2 col-12">Promedio: {{ proresult }} </div>
    </div>
    <hr>
    <div class="gameadivinar row">
      <h2 class="col-12">Adivina el numero del bot</h2>
      <p class="col-12">Ingresa un numero del 0 al 10 en el cuadro de texto</p>

      <b-input-group class="col-lg-3 mx-auto" prepend="Tu numero">
        <b-form-input
          v-model="gameRnd"
          placeholder="Tu Numero"
          type="number"
          size="lg"
        ></b-form-input>
      </b-input-group>
      <b-button size="lg"
      pill
      variant="primary"
      @click="juegoadivinar"
      >Jugar</b-button>
      <b-input-group class="col-lg-3 mx-auto" prepend="Numero bot">
        <b-form-input readonly
          v-model="rndnum"
          placeholder="Numero bot:"
          size="lg"
        ></b-form-input>
      </b-input-group>
      <h3 class="col-12 mt-3" id="txtresultadoadivinar">{{resultadivinar}}</h3>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: "appbody",
  data() {
    return {
      Deportes: ["Cilismo", "Tenis", "Paracaidismo", "Futbol", "Basquetbol"],
      personal: [
        { Edad: 19, primer_nombre: "Luis", primer_apellido: "Arias" },
        { Edad: 20, primer_nombre: "Jeremy", primer_apellido: "Aguilar" },
        { Edad: 19, primer_nombre: "Paola", primer_apellido: "Cruz" },
        { Edad: 19, primer_nombre: "Luis", primer_apellido: "Gomez" },
      ],
      contador: 0,
      temp1: 0,
      result: 0,
      slide: 0,
      sliding: null,
      mensaje: "",
      nombre: "Mi nombre es: Luis Jose Arias Reyes",
      proresult: 0,
      num1: 0,
      num2: 0,
      num3: 0,
      rndnum: 0,
      gameRnd: 0,
      resultadivinar: ''
    };
  },
  methods: {
    mostrarmensaje() {
      alert(this.mensaje);
    },
    caltemp() {
      this.result = parseFloat(this.temp1) * (9 / 5) + 32;
    },
    minombre() {
      alert(this.nombre);
    },
    calpromedio(){
      if (parseFloat(this.num1) >10 || parseFloat(this.num2) >10 || parseFloat(this.num3) >10) {
        alert('Fuera de limite Numero mayor: 10.00')
      } else
      this.proresult = ((parseFloat(this.num1) * 0.30) + (parseFloat(this.num2) * 0.30) + (parseFloat(this.num3) * 0.40));
    },
    juegoadivinar(){
      if (parseFloat(this.gameRnd) < 0 || parseFloat(this.gameRnd) > 10 || this.gameRnd.length < 1) {
          this.resultadivinar = ''
          alert("Numero ingresado fuera de los limites o campo vacio")
      } else {
        this.rndnum = Math.floor(Math.random() * 11);
      if (parseFloat(this.gameRnd) == this.rndnum) {
        this.resultadivinar = "Adivinaste"
      } else {
        this.resultadivinar = 'No adivinaste'
      }
      }
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@500&display=swap");
.appbody {
  font-family: "Rajdhani", sans-serif;
  font-size: 125%;
}
</style>
