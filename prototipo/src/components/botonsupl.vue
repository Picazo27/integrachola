<template>
    <v-btn 
      type="block"
      size="x-large"
      color="#D70000"
      class="mx-auto mt-6 custom-btn"
      style="width: 300px; height: 60px;"
      @click="verSuplementos"
    ></v-btn>
  </template>
  
  <script>
  export default {
    methods: {
      verSuplementos() {
        // Tu lógica cuando se hace clic en el botón
      }
    }
  };
  </script>
  
  <style>
  .custom-btn {
    transition: background-color 0.3s ease-in-out; /* Transición suave */
  }
  
  /* Cambiar el color cuando se pasa el mouse */
  .custom-btn:hover {
    background-color: black;
  }
  </style>
  