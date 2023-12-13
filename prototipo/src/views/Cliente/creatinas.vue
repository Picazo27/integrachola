<template>
  <v-container style="margin-top: 80px;">
    <h1 style="margin-top: 30px;">Creatinas</h1>
    <br>
    <v-row align="center" justify="center">
      <v-col
        v-for="(product, index) in creatinas"
        :key="index"
        cols="auto"
      >
        <v-card
          class="mx-auto"
          max-width="244"
          outlined
        >
          <v-card-item>
            <div>
              <div class="text-overline mb-1">
                {{ product.variant }}
              </div>
              <div class="text-h6 mb-1">
                {{ product.nombre_producto }}
              </div>
              <div><img :src="product.imagen" class="img-card" alt="Creatina"></div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-btn @click="addToCart(product)">
              Agregar al Carrito
            </v-btn>
            <input type="number">
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
  img {
    height: 250px;
    width: 250px;
  }
  h1 {
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

  const creatinas = ref([]);

  const addToCart = (product) => {
    // Lógica para agregar al carrito
    console.log('Agregado al carrito:', product);
  };

  onMounted(async () => {
    try {
      const response = await axios.get('http://localhost/mostrar_creatinas'); // Reemplaza con tu ruta real
      creatinas.value = response.data.data; // Ajusta esto según la estructura de tus datos
    } catch (error) {
      console.error('Error fetching creatinas:', error);
      alert('Hubo un error al cargar los datos de las creatinas. Por favor, inténtalo de nuevo más tarde.');
    }
  });
</script>
