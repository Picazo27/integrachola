

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
          <v-text-field style="align-content: center;"></v-text-field>
        </th>
        <th> <lista></lista> </th>
        <th>
          
          <v-text-field style="width: auto;"></v-text-field>
        </th>
        
        <th>
          <v-text-field style="width: auto;"></v-text-field>
        </th>
        <th>
          <v-text-field style="width: auto;"></v-text-field>
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
import lista from './components/listaDesplegable.vue'
import cartaImagen from './components/elegirImagen.vue'
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



</style>


