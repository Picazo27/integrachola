<template>
  <v-container style="margin-top: 80px;">
    <h1 style="margin-top: 30px;">Creatinas</h1>
    <br>
    <v-row align="center" justify="center">
      <v-col
        v-for="(creatine, index) in creatines"
        :key="index"
        cols="auto"
      >
        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-card-item>
            <div>
              <div class="text-overline mb-1">
                {{ creatine.variant }}
              </div>
              <div class="text-h6 mb-1">
                {{ creatine.nombre_producto }}
              </div>
              <div class="creatina"><img :src="creatine.imagen" alt="Creatina" style="height: 350px; width: 350px;"></div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-btn @click="addToCart(creatine)">
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
import { useProductStore } from '@/store/productosstore.js';

const creatines = ref([]);

const productStore = useProductStore();

const addToCart = (product) => {
  // Lógica para agregar al carrito
  console.log('Agregado al carrito:', product);
};

onMounted(() => {
  productStore.fetchProducts();
});

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost/creatinas');
    creatines.value = response.data.data; // Asegúrate de ajustar esto según la estructura de tus datos
  } catch (error) {
    console.error('Error fetching creatines:', error);
  }
});
</script>
