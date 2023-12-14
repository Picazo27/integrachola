<template>
  <v-container style="margin-top: 80px;">
    <h1 style="margin-top: 30px;">Proteinas</h1>
    <br>
    <v-row align="center" justify="center">
      <v-col
        v-for="(protein, index) in proteins"
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
                {{ protein.variant }}
              </div>
              <div class="text-h6 mb-1">
                {{ protein.nombre_producto }}
              </div>
              <div class="prote"><img :src="protein.imagen" alt="Proteina" style="height: 350px; width: 350px;"></div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-btn @click="addToCart(protein)">
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

const proteins = ref([]);
import { useProductStore } from '@/store/productosstore.js';

const addToCart = (product) => {
  // Lógica para agregar al carrito
  console.log('Agregado al carrito:', product);
};

const productStore = useProductStore();

onMounted(() => {
  productStore.fetchProducts();
});

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost/mostrar');
    proteins.value = response.data.data; // Asegúrate de ajustar esto según la estructura de tus datos
  } catch (error) {
    console.error('Error fetching proteins:', error);
  }
});
</script>
