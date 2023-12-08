<template>
    <v-container>
      <v-card>
        <v-card-title>Seleccionar Tipo de Entrega</v-card-title>
        <v-card-text>
          <v-radio-group v-model="tipoEntrega">
            <v-radio label="Sucursal"></v-radio>
            <v-radio label="Predeterminada"></v-radio>
            <v-combobox
    label="Otras"
    :items="['Dirreccion 1', 'Dirreccion2']"
    variant="outlined"
  ></v-combobox>
          </v-radio-group>
        </v-card-text>
        <v-card-actions>
          <v-btn color="error">Cancelar</v-btn>
          <v-btn color="primary">Continuar</v-btn>
        </v-card-actions>
      </v-card>
  
      <v-card>
        <v-card-title>Agregar Nueva Dirreccion</v-card-title>
        <v-card-text>
          <v-text-field label="Calle"></v-text-field>
          <v-text-field label="Entre Calles"></v-text-field>
          <v-text-field label="Número Exterior"></v-text-field>
          <v-text-field label="Número Interior"></v-text-field>
          <v-text-field label="Colonia"></v-text-field>
          <v-text-field label="Código Postal"></v-text-field>
          <v-text-field label="Ciudad"></v-text-field>
          <v-text-field label="Persona a Recibir"></v-text-field>
          <v-text-field label="Contacto"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <router-link to="carrito"><v-btn block class="mb-8" color="red" size="large">Regresar</v-btn></router-link>
          <router-link to="metodopago"><v-btn block
            class="mb-8"
            color="grey-darken-4"
            size="large">Siguiente</v-btn></router-link>
            
        </v-card-actions>
      </v-card>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const tipoEntrega = ref('');
  const otraEntrega = ref('');
  const otrasEntregas = ['Otra 1', 'Otra 2', 'Otra 3'];
  </script>
  