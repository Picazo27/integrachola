

<template>
  <v-app>
    <v-container>
    <h1>Registro Producto</h1>
      <v-table theme="dark"  >
    <thead>
      <tr>
        <th class="text-center">
          Producto
        </th>
        <th class="text-center">
          Categoria
        </th>
        <th class="text-center">
          Costo
        </th>
        <th class="text-center">
          Cantidad
        </th>
        <th class="text-center">
          Precio
        </th>
        <th class="text-center">
          Provedor
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th style="align:;">
          <v-text-field style="align-content: center;" v-model="nombreProducto"></v-text-field>
        </th>
        <th> <lista></lista> </th>
        <th>
          
          <v-select v-model="categoriaProducto" :items="categorias"></v-select>
        </th>
        
        <th>
          <v-text-field style="width: auto;" v-model="costo"></v-text-field>
        </th>
        <th>
          <v-text-field style="width: auto;" v-model="precio"></v-text-field>
        </th>
        <th><lista></lista></th>
      </tr>
 
    </tbody>
  </v-table>
  <v-row >
    <v-col>
      <cartaImagen></cartaImagen>
    </v-col>
    <v-col class="d-flex align-center">
      <v-btn @click="onButtonClick" color="green">Añadir imagen</v-btn>
    </v-col>
    <v-col class="d-flex align-center">
      <v-btn @click="onButtonClick" color="green">Guardar</v-btn>
    </v-col>
  </v-row>

    </v-container>
  </v-app>
</template>


<script setup>
import lista from '@/components/listaDesplegable.vue'
import cartaImagen from '@/components/elegirImagen.vue'
import { ref, onMounted } from 'vue';
import axios from 'axios';

const nombreProducto = ref('');
const categoriaProducto = ref(null);
// Lista de categorías para el select
const categorias = ref([]);

const agregarProducto = async () => {
  try {
    const imagenBase64 = ''; // Lógica para obtener la imagen en base64
    const response = await axios.post('http://localhost/insertarProducto', {
      nombre_producto: nombreProducto.value,
      id_categoria: categoriaProducto.value,
      // Otros datos del producto
      // ...
      imagen: imagenBase64,
    });
    console.log('Producto insertado:', response.data);
    // Lógica para actualizar la vista con la respuesta
  } catch (error) {
    console.error('Error al insertar el producto:', error);
    // Lógica para manejar el error
  }
};

const obtenerCategorias = async () => {
  try {
    const response = await axios.get('http://localhost/categorias');
    categorias.value = response.data;
    // Lógica para manejar las categorías obtenidas
  } catch (error) {
    console.error('Error al obtener las categorías:', error);
    // Lógica para manejar el error
  }
};

onMounted(() => {
  obtenerCategorias();
  // Lógica adicional para cargar datos al iniciar la página
});
</script>

<style>



.v-table{
  height:150px;
  width:auto;
  margin-top: 50px;
  margin-bottom: 50px;
 
}

.tr{
  justify-content: center;
 
  
}
.h1{
  margin-top: 12px;
  
}
.v-col{
justify-content:center;
}
th{
  color:white;
}



</style>


