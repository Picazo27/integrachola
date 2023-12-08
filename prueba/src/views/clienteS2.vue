<template>
    <v-app>
      <v-container>
        <h1 style="margin-top: 12px; margin-bottom: 18px;">Productos de Categoria X</h1>
  
        <v-row>
          <buscador style="margin-top: 40px; margin-left: 45px;"></buscador>
        </v-row>
        
        <v-row style="justify-content: center;">
           <tabla></tabla>
        </v-row>
  
      </v-container>
    </v-app>
  </template>
  
  <script setup >
  
  import buscador from'@/components/barraBuscador.vue'
  import tabla from '@/components/tablaCliente.vue'
  
  </script>
  
  <style>
  
  
  
  </style>