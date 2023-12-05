<template>
    <v-container>
      <v-card>
        <v-card-title>Confirmar Entrega</v-card-title>
        <v-card-text>
            <v-combobox
              label="Otras"
              :items="['Efectivo', 'Tarjeta']"
              variant="outlined"
            ></v-combobox>
        </v-card-text>
        <v-card-actions>
          <router-link to=""></router-link><v-btn color="error">Regresar</v-btn>
          <v-btn color="grey-darken-4"
          type="block"
          size="large"
          >Confirmar Compra</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </template>
  <script setup>
  import { ref } from 'vue';
  const metodoDePago = ref('');
    </script>
  