<template>
  <v-card
    class="mx-auto"
    color="grey-darken-4"
    max-width="300"
  >
    <v-card-text>
      <v-text-field
        :loading="loading"
        dense
        outlined
        solo
        label="Buscar Producto"
        append-inner-icon="mdi-magnify"
        hide-details
        rounded
        @click:append-inner="onClick"
      ></v-text-field>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(false);

const onClick = () => {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>

<style scoped>
.v-text-field--solo .v-input__control {
  height: 30px;
  font-size: 14px;
}

</style>
