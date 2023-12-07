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
            <v-combobox
            label="Tarjetas Guardadas"
            :items="['Tarjeta1','Tarjeta2']"
            variant="outlined" v-if="metodoDePago.valueOf==='Tarjeta'"></v-combobox>
          </v-radio-group> <v-container v-if="metodoDePago.items==='Tarjeta'">
          <h3 class="pb-4 text-center">Agregar Nueva Tarjeta</h3>
          <v-text-field  label="Número de Tarjeta"></v-text-field>
          <v-text-field  label="Fecha de Vencimiento (MM/YY)"></v-text-field>
          <v-text-field label="CVV"></v-text-field>
          <v-checkbox label="Guardar Tarjeta"></v-checkbox>
      </v-container>
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
  