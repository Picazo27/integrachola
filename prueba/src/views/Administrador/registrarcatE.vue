<template>
    <v-container>
      <h2>Registrar Categoría</h2>
      <v-form @submit.prevent="registrarCategoria">
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field v-model="categoria.nombre" label="Nombre de la Categoría"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model="categoria.cantidadProductos" label="Cantidad de Productos"></v-text-field>
          </v-col>
        </v-row>
        <v-btn type="submit" color="primary">Registrar</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const categoria = ref({
    nombre: '',
    cantidadProductos: 0,
  });
  
  const registrarCategoria = async () => {
    try {
      const response = await axios.post('http://localhost/registrarCategoria', categoria.value);
      if (response.status === 200) {
        // Éxito al registrar la categoría
        console.log('Categoría registrada:', response.data);
        // Restablecer los campos del formulario
        Object.keys(categoria.value).forEach((key) => (categoria.value[key] = ''));
      }
    } catch (error) {
      // Manejar errores al enviar la categoría
      console.error('Error al registrar la categoría:', error);
    }
  };
  </script>