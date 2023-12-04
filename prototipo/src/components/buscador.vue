<template>
    <v-card
      class="mx-auto"
      color="grey-darken-4"
      max-width="400"
    >
      <v-card-text>
        <v-text-field
          :loading="loading"
          density="compact"
          variant="solo"
          label="Buscar Producto"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          @click:append-inner="onClick"
        ></v-text-field>
      </v-card-text>
    </v-card>
  </template>
  <script>
    export default {
      data: () => ({
        loaded: false,
        loading: false,
      }),
  
      methods: {
        onClick () {
          this.loading = true
  
          setTimeout(() => {
            this.loading = false
            this.loaded = true
          }, 2000)
        },
      },
    }
  </script>