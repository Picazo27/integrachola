<template>
    <v-container style="margin-top: 80px;">
        <h1 class="re" style="margin-top: 30px;">Producto</h1>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card color="grey-darken-4" dark>
            <v-img :src="producto.imagen" height="400"></v-img>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card color="grey-lighten-3">
            <v-card-title class="headline">{{ producto.nombre }}</v-card-title>
            <v-card-text>{{ producto.descripcion }}</v-card-text>
            <v-card-actions>
              <v-container>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      v-model="cantidad"
                      type="number"
                      label="Cantidad"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <botonagg></botonagg>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useProductStore } from '@/store/'; // Asegúrate de la ruta correcta
  import botonagg from '@/components/botonagg.vue'
  const producto = ref({});
  const cantidad = ref(1);
  const productStore = useProductStore();
  
  const obtenerProducto = async () => {
    try {
      const response = await axios.get('http://localhost/productos/1'); // Cambia el ID del producto según tu API
      producto.value = response.data;
    } catch (error) {
      console.error('Error al obtener el producto:', error);
    }
  };
  
  const agregarAlCarrito = (product) => {
    const productoAAgregar = { ...product, cantidad: cantidad.value };
    productStore.agregarAlCarrito(productoAAgregar);
    window.alert(`¡Has agregado ${product.nombre} a tu carrito!`);
  };
  
  onMounted(obtenerProducto);
  </script>
  