<!-- MiVista.vue -->
<template>
    <v-container>
      <h1>Esta es MiVista</h1>
      <mi-componente></mi-componente> <!-- Aquí estás usando el componente -->
    </v-container>
  </template>
  
  <script>
  import MiComponente from '@/components/miComponente.vue'; // Ajusta la ruta según tu estructura
  
  export default {
    components: {
      MiComponente
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos de la vista si es necesario */
  </style>
  