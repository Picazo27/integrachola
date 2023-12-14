<template>
     <carrusel></carrusel>
  <v-container style="margin-top: 80px;">
    <h1 style="margin-top: 25px;">Productos Destacados</h1>
    <br>
    <v-row align="center" justify="center">
      <v-col
        v-for="(producto, index) in gymProductos.productos"
        :key="index"
        cols="auto"
      >
        <v-card
          class="mx-auto"
          max-width="250"
          :variant="producto.variant"
        >
          <v-card-item>
            <div>
              <div class="text-h6 mb-1 text-center">
                {{ producto.nombre }}
              </div>
              <div class="producto">
                <img
                  :src="producto.imagen"
                  style="width: 100%; height: 100%;"
                  :aspect-ratio="1"
                >
              </div>
              <div class="text-h6 mb-1 text-center red">
                <h2>${{ producto.precio }}</h2>
              </div>
            </div>
          </v-card-item>
          <v-card-actions>
            <botoncart @click="agregarAlCarrito(producto)"></botoncart>
            <input type="number">
          </v-card-actions>
        </v-card>
      </v-col>
      <br>
      <h1 class="red">¿PORQUÉ COMPRAR EN PICAZO GYM?</h1>
<h2 class="ce">Contamos con una amplia variedad de suplementos deportivos en México. Además tienes la opción de pagar tu pedido en cuando recojas en tienda o se te entregue en tu domicilio, contamos con terminal. El proceso de  pedido es muy sencillo y seguro ¡Pruébalo!</h2>
    </v-row>
    <br>
    <hr>
  <br>
  <br>
  <v-row align="center" justify="center">
  <v-col cols="12" md="4">
    <v-card class="mx-auto" max-width="500">
      <v-card-item>
        <v-img src="~@/assets/logoofer.png" height="200" class="mb-5"></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="ce" >LOS MEJORES PRECIOS</h3>
            <p class="ce">Te ofrecemos los precios más competitivos online</p>
          </div>
        </v-card-title>
        <v-card-text></v-card-text>
      </v-card-item>
    </v-card>
  </v-col>

  <v-col cols="12" md="4">
    <v-card class="mx-auto" max-width="500">
      <v-card-item>
        <v-img src="~@/assets/logoc.png" height="200" class="mb-5"></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="ce">COMPRA EN PICAZO GYM</h3>
            <p class="ce">Y recibe una gran experiencia de compra</p>
          </div>
        </v-card-title>
        <v-card-text></v-card-text>
      </v-card-item>
    </v-card>
  </v-col>

  <v-col cols="12" md="4">
    <v-card class="mx-auto" max-width="500">
      <v-card-item>
        <v-img src="~@/assets/logoen.png" height="200" class="mb-5"></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="ce">ENVÍOS MÁS RÁPIDOS</h3>
            <p class="ce">Recibe tus suplementos de forma rápida y segura</p>
          </div>
        </v-card-title>
        <v-card-text></v-card-text>
      </v-card-item>
    </v-card>
  </v-col>
</v-row>

      <br>
      
      <h1 class="red">Suplementos Para Gym</h1>
      <h2 class="ce">Contamos con una amplia variedad de suplementos deportivos para mejorar tu rendimiento físico tanto en el gym como en tu vida diaria. Ya sea que tu objetivo sea: mejorar tu rendimiento físico, aumentar tu masa muscular o seguir una dieta saludable para bajar de peso, aquí encontrarás los suplementos y vitaminas de la mas alta calidad en el mercado.</h2>    
      
      <hr>
      <br>
      <v-row justify="center">
  <v-col cols="8">
    <h1 class="red">Proteinas</h1>
    <v-row align="center">
      <v-col cols="12" sm="6">
        <v-img src="https://whey.cl/wp-content/uploads/2020/11/cual-es-la-mejor-proteina-para-ganar-masa-muscular-sin-engordar-1.png"></v-img>
      </v-col>
      <v-col cols="12" sm="6">
        <h2>El consumo de proteína ayuda a los atletas a mejorar su rendimiento físico durante los entrenamientos o sesiones de ejercicio intenso. En nuestra tienda podrás encontrar una amplia variedad de suplementos de proteínas, desde proteína de suero hasta proteína de soja. Visíta nuestra Categoría de Proteínas</h2>
      </v-col>
    </v-row>
  </v-col>
  </v-row>

  <v-row justify="center">
    <v-col cols="8">
<h1 class="red">Creatinas</h1>
<v-row align="center"> 
  <v-col cols="12" sm="6">
    <h2>Los suplementos de Monohidrato de Creatina también ayudan a incrementar tu rendimiento deportivo, especialmente si practicas deportes de fuerza. Además un beneficio adicional de la suplementación con creatina es que te ayudará a mejorar la ganancia de masa corporal sin causar efectos secundarios adversos.</h2>
  </v-col>
  <v-col cols="12" sm="6">
    <v-img src="https://www.herbalife.com.pe/content/dam/regional/samcam/es_pe/sites/herbalife_nutrition/web_graphic/editorial/2022/05-may/Cuanta_proteina_debes_consumir_y_con_que_frecuencia.jpg"></v-img>
  </v-col>
</v-row>
    </v-col>
  </v-row>

<v-row justify="center">
<v-col cols="8">
  <h1 class="red">Aminoacidos</h1>
<v-row align="center">
  <v-col cols="12" sm="6">
    <v-img src="https://mui.fitness/__export/1675972656166/sites/muifitness/img/2023/02/09/young-man-preparing-his-protein-drink-royalty-free-image-618752694-1546431880.jpg_1223424624.jpg"></v-img>
  </v-col>
  <v-col cols="12" sm="6">
    <h2>La ingesta de suplementos de aminoácidos ayudan a la recuperación de los músculos después de las sesiones de ejercicio físico o de un entrenamiento de fuerza. La suplementación deportiva con éste tipo de productos también incrementa el rendimiento físico dado que el perfil de aminoácidos potencia el incremento muscular. </h2>
  </v-col>
</v-row>
</v-col>
</v-row>


<seccion></seccion>

  </v-container>
</template>

<style>
.red {
    color: #D70000;
    padding-bottom: 4px;
    padding-top: 4px;
  }
@media screen and (min-width: 790px) {
  
  img {
    width: 750px;
    height: 300px;
  }
}

.max-width-sm{
  max-width: 300px;
}
 
 
  h1 {
    text-align: center;
  }
  
.ce{
  text-align: center;
}
  input {
    height: 30px;
    width: 70px;
    margin: 20px;
  }
  
</style>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useCartStore } from '@/store/carritostore.js';
import { useProductStore } from '@/store/productosstore.js'; 
const gymProductos = useProductStore();
const gymCarrito = useCartStore();

const obtenerProductos = async () => {
  try {
    const respuesta = await axios.get('http://localhost/productos');
    gymProductos.productos = respuesta.data; // Actualiza los productos en la tienda de productos
  } catch (error) {
    console.error('Error al obtener productos:', error);
  }
};

onMounted(() => {
  obtenerProductos();
});

const agregarAlCarrito = (producto) => {
  gymCarrito.agregarItems(1, producto);
  window.alert(`¡Has agregado ${producto.nombre} a tu carrito!`);
};
</script>
