<template>
  <v-card
    class="mx-auto"
    color="grey-darken-4"
    max-width="300"
    
  >
    <v-card-text class="search-field">
      <v-text-field
        :loading="loading"
        dense
        outlined
        solo
        label="Buscar Producto"
        append-inner-icon="mdi-magnify"
        hide-details
        rounded
        @click:append-inner="onClick"
      ></v-text-field>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';
import { useProductStore } from '@/store/productosstore.js'; // Reemplaza con la ruta correcta

const loading = ref(false);
const productStore = useProductStore();
const productosRef = productStore.productos; // Accede a la referencia

const onClick = async () => {
  loading.value = true;

  try {
    await productStore.obtenerProductos(); // Llama al método para obtener los productos desde la API
  } catch (error) {
    console.error('Error al buscar productos:', error);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.v-text-field--solo .v-input__control {
  height: 20px;
  font-size: 14px;
margin: 0px;
}
.search-field{
  margin-top: 15px;
}
</style>