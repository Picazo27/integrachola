<template>
    <v-container>
      <v-card>
        <v-card-title>Seleccionar Método de pago</v-card-title>
        <v-card-text>
          <v-radio-group v-model="metodoDePago">
            <v-combobox
              label="Metodos de Pago"
              :items="['Efectivo', 'Tarjeta']"
              variant="outlined"
            ></v-combobox>
           </v-radio-group>
      </v-card-text>
      <v-card-actions>
          <router-link to="direccion-entrega"><v-btn color="error">Regresar</v-btn>
        </router-link>
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
import { VAlert } from 'vuetify/lib/components/index.mjs';
  const metodoDePago = ref('');
    </script>
  