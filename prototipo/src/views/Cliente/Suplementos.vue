<template>
    <v-container style="margin-top: 80px;">
      <h1 style="margin-top: 30px;">Suplementos</h1>
      <v-combobox
        v-model="selectedSupplement"
        label="Suplementos"
        :items="supplementTypes"
        variant="outlined"
        style="width: 300px;"
      ></v-combobox>
      <br>
  
      <!-- Sección para mostrar los productos según la selección -->
      <v-container v-if="selectedSupplement === '' || selectedSupplement === 'Ver Destacados'">
        <v-row align="center" justify="center">
          <v-col v-for="(product, index) in products" :key="index" cols="auto">
            <v-card class="mx-auto" max-width="244" :variant="product.variant">
              <v-card-item>
                <div>
                  <div class="text-h6 mb-1">{{ product.title }}</div>
                  <div class="prote"><img :src="product.image" class="img-card"></div>
                </div>
              </v-card-item>
              <v-card-actions>
                <botoncart>Agregar al carrito</botoncart>
                <input type="number">
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  
      <!-- Sección para cada tipo de suplemento -->
      <v-container v-else>
        <v-row align="center" justify="center">
          <v-col v-for="(product, index) in filteredProducts" :key="index" cols="auto">
            <v-card class="mx-auto" max-width="244" :variant="product.variant">
              <v-card-item>
                <div>
                  <div class="text-h6 mb-1">{{ product.title }}</div>
                  <div class="prote"><img :src="product.image" class="img-card"></div>
                </div>
              </v-card-item>
              <v-card-actions>
                <botoncart>Agregar al carrito</botoncart>
                <input type="number">
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  
    </v-container>
  </template>
  
  <style>
  /* Tus estilos aquí */
  </style>
  
  <script setup>
  import botoncart from '@/components/botonagg.vue'
  import { ref, watch } from 'vue';
  import axios from 'axios';
  
  const selectedSupplement = ref('');
  const products = [
    // Tu array de productos
  ];
  
  const supplementTypes = [
    'Ver Destacados',
    'Proteina',
    'Creatina',
    'Proteina en Polvo',
    'Pre-entreno',
    'Aminoacidos'
  ];
  
  // Filtrar productos basados en la selección del combobox
  const filteredProducts = ref([]);
  
  watch(selectedSupplement, (newVal) => {
    if (newVal === 'Proteina') {
      filteredProducts.value = products.filter(product => product.title === 'Proteina');
    } else if (newVal === 'Creatina') {
      filteredProducts.value = products.filter(product => product.title === 'Creatina');
    } else if (newVal === 'Pre-entreno') {
      filteredProducts.value = products.filter(product => product.title === 'Pre-entreno');
    } else if (newVal === 'Proteina en Polvo') {
      filteredProducts.value = products.filter(product => product.title === 'Proteina en Polvo');
    } else if (newVal === 'Aminoacidos') {
      filteredProducts.value = products.filter(product => product.title === 'Aminoacidos');
    } else {
      // Mostrar todos los productos si se selecciona 'Ver Destacados' o ningún valor
      filteredProducts.value = products;
    }
  });
  
  // Llamada a la API usando Axios para obtener los productos
  axios.get('http://localhost/mostrar')
    .then(response => {
      // Asigna la respuesta a tu array de productos o a la estructura que necesites
      // products = response.data; // Ajusta según la estructura de tus datos
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  </script>
  