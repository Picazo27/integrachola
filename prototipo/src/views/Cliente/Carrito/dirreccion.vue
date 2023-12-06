<template>
    <v-container>
      <v-card>
        <v-card-title>Seleccionar Tipo de Entrega  </v-card-title>
        <v-card-text>
          <v-radio-group v-model="tipoEntrega">
            <v-radio label="Sucursal" value="Sucursal" ></v-radio>
            <v-radio label="Nueva Direccion" value="Nueva"></v-radio>
            <v-radio label="Predeterminada" value="Predeterminada"></v-radio>

          </v-radio-group>
                    <v-combobox v-if="tipoEntrega==='Predeterminada'"
            clearable
    label="Direcciones"
    :items="['Dirreccion 1', 'Dirreccion2']"
    variant="outlined" ></v-combobox>
        </v-card-text>
        <v-card-actions v-if="tipoEntrega==='Sucursal'||tipoEntrega==='Predeterminada'">
        <router-link to="productos">  <v-btn color="error">Cancelar</v-btn></router-link>
        <router-link to="metodopago">  <v-btn color="primary">Continuar</v-btn></router-link>
        </v-card-actions>
      </v-card>
  
      <v-card v-if="tipoEntrega==='Nueva'">
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
  import { RouterLink } from 'vue-router';
  const tipoEntrega = ref(false);
  const otraEntrega = ref('');
  const otrasEntregas = ['Otra 1', 'Otra 2', 'Otra 3'];
  </script>
  