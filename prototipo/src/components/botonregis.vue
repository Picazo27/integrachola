<template>
    <v-btn
      :class="btnClass"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
      type="block"
      size="x-large"
      style="width: 300px" 
    >
      <p :style="{ color: textColor }">Registrate</p>
    </v-btn>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const isHovered = ref(false);
  
  const btnClass = computed(() => {
    return isHovered.value ? 'darken' : '';
  });
  
  const textColor = computed(() => {
    return isHovered.value ? 'white' : '';
  });
  </script>
  
  <style>
  .darken {
    background-color: #292929 !important;
    transition: background-color 0.3s;
  }
  </style>
  