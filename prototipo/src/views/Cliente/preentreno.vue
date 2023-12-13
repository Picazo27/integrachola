<template>
  <v-container style="margin-top: 80px;">
    <h1 style="margin-top: 35px;">Pre-Entrenos</h1>
    <br>
    <v-row align="center" justify="center">
      <v-col
        v-for="(product, i) in proteins"
        :key="i"
        cols="auto"
      >
        <v-card
          class="mx-auto"
          max-width="244"
        >
          <v-card-item>
            <div>
              <div class="text-overline mb-1">
                {{ product.name }} <!-- Reemplaza con el campo correspondiente -->
              </div>
              <div class="text-h6 mb-1">
                Pre-entreno
              </div>
              <div class="amino"><img :src="product.image" class="img-card"></div> <!-- Reemplaza con el campo correspondiente -->
            </div>
          </v-card-item>

          <v-card-actions>
            <button @click="addToCart(product)">Agregar Carrito</button>
            <input type="number">
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
img{
    height: 350px;
    width: 350px;
}
h1{
    text-align: center;
}
input{
    height: 30px;
    width: 70px;
    margin: 20px;
}
</style>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const proteins = ref([]);

const addToCart = (product) => {
  // Lógica para agregar al carrito
  console.log('Agregado al carrito:', product);
};

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost/mostrar');
    proteins.value = response.data; // Ajusta esto según la estructura de tus datos
  } catch (error) {
    console.error('Error fetching proteins:', error);
  }
});
</script>
