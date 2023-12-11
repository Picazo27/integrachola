<template>

    <v-app>
        <v-conatiner>
          <h1 style="margin-top: 20px; margin-bottom: 18px; margin-left: 50px;"> Categorias X</h1>
  
    <v-row style=" margin-top: 20px; margin-bottom: 30px; justify-content: center;">
      <v-btn @click="onButtonClick" size="30px">
      <v-icon size="28px">mdi-plus</v-icon>
  </v-btn> 
      <lalbel >Añadir Categoria</lalbel>
    </v-row>
  
    <v-row style="justify-content: center;">
  <tabla></tabla>
    </v-row>
  
        </v-conatiner>
    </v-app>
    
    </template>
    
    <script setup>
   
    import tabla from '@/components/tablaCate.vue'
  
    </script>
  
    <style>
  
    .h1{
        margin-top: 12px;
    }
  
    </style>