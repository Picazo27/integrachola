<template>
    <v-container>
      <v-text-field v-model="search" label="Buscar" outlined></v-text-field>
      
      <v-text-field v-model="numerOrdenFilter" label="Buscar por N de Orden" outlined></v-text-field>
      
      <v-text-field v-model="nombreClienteFilter" label="Buscar por Nombre Cliente" outlined></v-text-field>
      
      <v-data-table
        :headers="headers"
        :items="filteredBoats"
        :search="search"
        item-key="name"
      >
      </v-data-table>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        search: '',
        numerOrdenFilter: '',
        nombreClienteFilter: '',
        boats: [
          {
            numerorden: 12123,
            nombre: 'Melany',
            estado: 'En camino'
          },
          {
            numerorden:1311,
            nombre:'Yoshua',
            estado:'en camino'
          }
         
        ],
        headers: [
          { text: 'NumOrden', value: 'numerorden', align: 'start' },
          { text: 'Nombre-Cliente', value: 'nombre', align: 'end' },
          { text: 'Estado', value: 'estado', align: 'end' },
        ],
      };
    },
    computed: {
      filteredBoats() {
        return this.boats.filter(boat => {
          return (
            boat.numerorden.toString().includes(this.numerOrdenFilter.toLowerCase()) &&
            boat.nombre.toLowerCase().includes(this.nombreClienteFilter.toLowerCase())
          );
        });
      },
    },
  };
  </script>
  