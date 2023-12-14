<template>
  <v-container style="margin-top: 80px;">
    <h1 class="re" style="margin-top: 30px;">Suplementos</h1>
    <v-combobox
      v-model="selectedSupplement"
      label="Suplementos"
      :items="tiposSuplementos"
      variant="outlined"
      style="width: 300px;"
    ></v-combobox>
    <br>
    <!-- Sección para mostrar los productos según la selección -->
    <v-container v-if="selectedSupplement === '' || selectedSupplement === 'Ver Destacados'">
      <v-row align="center" justify="center">
        <v-col v-for="(producto, index) in productosGym.productos" :key="index" cols="auto">
          <v-card class="mx-auto" max-width="244" :variant="producto.variant">
            <v-card-item>
              <div>
                <div class="text-h6 mb-1">{{ producto.title }}</div>
                <div class="prote"><img :src="producto.image" class="img-card"></div>
              </div>
            </v-card-item>
            <v-card-actions>
              <botoncart @click="agregarAlCarrito(producto)">Agregar al carrito</botoncart>
              <input type="number">
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Sección para cada tipo de suplemento -->
    <v-container v-else>
      <v-row align="center" justify="center">
        <v-col v-for="(producto, index) in productosGym.productosFiltrados" :key="index" cols="auto">
          <v-card class="mx-auto" max-width="244" :variant="producto.variant">
            <v-card-item>
              <div>
                <div class="text-h6 mb-1">{{ producto.title }}</div>
                <div class="prote"><img :src="producto.image" class="img-card"></div>
              </div>
            </v-card-item>
            <v-card-actions>
              <botoncart @click="agregarAlCarrito(producto)">Agregar al carrito</botoncart>
              <input type="number">
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import botoncart from '@/components/botonagg.vue'
import { ref, watch } from 'vue';
import { useProductStore } from '@/store/productosstore.js'; 
import { useCartStore } from '@/store/carritostore.js'; 
import axios from 'axios';


const productosGym = useProductStore();
const selectedSupplement = ref('');
const tiposSuplementos = [
  'Ver Destacados',
  'Proteína',
  'Creatina',
  'Proteína en Polvo',
  'Pre-entreno',
  'Aminoácidos'
];

watch(selectedSupplement, (nuevoValor) => {
  if (nuevoValor === 'Proteína') {
    productosGym.productosFiltrados = productosGym.productos.filter(producto => producto.title === 'Proteína');
  } else if (nuevoValor === 'Creatina') {
    productosGym.productosFiltrados = productosGym.productos.filter(producto => producto.title === 'Creatina');
  } else if (nuevoValor === 'Pre-entreno') {
    productosGym.productosFiltrados = productosGym.productos.filter(producto => producto.title === 'Pre-entreno');
  } else if (nuevoValor === 'Proteína en Polvo') {
    productosGym.productosFiltrados = productosGym.productos.filter(producto => producto.title === 'Proteína en Polvo');
  } else if (nuevoValor === 'Aminoácidos') {
    productosGym.productosFiltrados = productosGym.productos.filter(producto => producto.title === 'Aminoácidos');
  } else {
    // Mostrar todos los productos si se selecciona 'Ver Destacados' o ningún valor
    productosGym.productosFiltrados = productosGym.productos;
  }
});

const agregarAlCarrito = (producto) => {
  const carritoStore = useCartStore();
  carritoStore.agregarItems(1, producto);
  window.alert(`¡Has agregado ${producto.title} a tu carrito!`);
};
</script>
