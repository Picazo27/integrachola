<template>
  <v-container style="margin-top: 80px;">
    <h1 style="margin-top: 35px;">Aminoácidos</h1>
    <br>
    <v-row align="center" justify="center">
      <v-col
        v-for="(item, index) in items"
        :key="index"
        cols="auto"
      >
        <v-card
          class="mx-auto"
          max-width="344"
          :variant="item.variant"
        >
          <v-card-item>
            <div>
              <div class="text-overline mb-1">
                {{ item.variant }}
              </div>
              <div class="text-h6 mb-1">
                Aminoacidos
              </div>
              <div class="amino">
                <img :src="item.image" class="img-card" :alt="item.name">
              </div>
            </div>
          </v-card-item>
  
          <v-card-actions>
            <boton @click="addToCart(item)">Agregar Carrito</boton>
            <input type="number" v-model="item.quantity">
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
  /* Estilos */
</style>

<script setup>
import axios from 'axios';
import boton from '@/components/botonagg.vue';
import { ref, onMounted } from 'vue';

const items = ref([]);
import { useProductStore } from '@/store/productosstore.js';

const productStore = useProductStore();

onMounted(() => {
  productStore.fetchProducts();
});


const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost/aminoacidos'); // Actualiza con tu ruta
    items.value = response.data; // Asume que recibes un array de objetos con datos de aminoácidos
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
};

const addToCart = (selectedItem) => {
  // Aquí puedes implementar la lógica para agregar al carrito con el item seleccionado
  console.log('Agregado al carrito:', selectedItem);
};

onMounted(() => {
  fetchData(); // Llama a la función fetchData al montar el componente
});
</script>
