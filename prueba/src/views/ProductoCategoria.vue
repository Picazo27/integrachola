
<template>
    <v-app>
    <v-container>
  
     <h1 style="margin-top: 12px; margin-bottom: 18px;">Productos de Categoria X</h1>
  
    <v-row style="margin-bottom: 35px; align-items: center;">
      <v-col>
        <listdown></listdown>
      </v-col>
      <v-col>
        <barra></barra>
      </v-col>
      <v-col >
        <anadir></anadir>
      </v-col>
    </v-row>
  
    <v-row>
      <v-col align="center" justify="center">
          <imagen></imagen>
        </v-col> 
        <v-col>
          <carta></carta>
        </v-col>
        <v-col align="center" justify="center">
          <imagen></imagen>
        </v-col> 
        <v-col align="center" justify="center">
          <carta></carta>
        </v-col> 
    </v-row>
    
    <v-row >
      <v-col align="center" justify="center">   
         <imagen></imagen>
        </v-col>    
        <v-col align="center" justify="center">
          <carta></carta>
        </v-col> 
        <v-col align="center" justify="center">
          <imagen></imagen>
        </v-col> 
       <v-col align="center" justify="center">
        <carta></carta>
        </v-col> 
      </v-row>
    
    </v-container>
    </v-app>
    
    </template>
    
    
    <script setup>
  
    import listdown from './components/listaDesplegable.vue'
    import barra from './components/barraBuscador.vue'
    import anadir from './components/botonAnadir.vue'
    import imagen from'./components/elegirImagen.vue'
    import carta from './components/cartaDeatalle.vue'
    
    </script>
    
    <style>
  
    .v-card{
     justify-content: left;
    }
    
    .label{
      justify-content: left;
    }
  
    .v-row{
      justify-content: center;
      align-content: center;
    }
  
    </style>