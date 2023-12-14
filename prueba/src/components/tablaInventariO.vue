<template>

  <v-app>
      <v-container>
         <h1 style="margin-top: 15px; margin-bottom: 20px;">Inventario</h1>
  
         <v-row style="align-items: center; align-content:center; justify-items: center;">
          <buscador></buscador> <anadir></anadir> <lista></lista>
         </v-row>
         <v-row>
          <inventarioTabla></inventarioTabla>
         </v-row>
      </v-container>
  </v-app>
  
  </template>
  
  
  <script setup>
  import inventarioTabla from '@/components/tablaInventariO.vue'
  import anadir from'@/components/botonAnadir.vue'
  import lista from '@/components/listainventariO.vue'
  import buscador from '@/components/barraBuscador.vue'
  
  </script>
  
  <style>
  
  
  
  </style>
  