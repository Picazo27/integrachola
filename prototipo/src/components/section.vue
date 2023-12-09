<template>
    <v-container fluid>
      <v-row align="center" justify="center" class="sec py-8">
        <v-col cols="6" class="d-flex flex-column align-center justify-center text-center">
    <h1 class="red xl">COMPRA AHORA</h1>
    <h3 class="se">Enviamos a todo México a través de nuestros socios en Amazon México. Pagos y Envíos 100% seguros. Suplementos Deportivos líderes en la industria y fabricados bajo estrictos controles de calidad.</h3>
   <RouterLink to="suplementos"> <v-btn 
      type="block"
      size="x-large"
      color="#D70000"
      class="mx-auto mt-6 custom-btn"
      style="width: 300px; height: 60px;"
      @click="verSuplementos"
    > Ver Suplementos</v-btn></RouterLink>
  </v-col>
        <v-col cols="6">
          <v-img src="https://blacknorange-mx.com/sdf/img/suplementos%202.png" aspect-ratio="1.6"></v-img>
        </v-col>
        
      </v-row>
    </v-container>
  </template>

  <style>
.sec{
    background-color: #212121;
}
.se{
    text-align: center;
    color: aliceblue;
}
</style>

  <script>
  import { RouterLink } from 'vue-router';
  </script>
  