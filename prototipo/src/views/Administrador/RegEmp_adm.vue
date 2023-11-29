<script setup>
import { RouterLink,RouterView } from 'vue-router';
import { VInput } from 'vuetify/lib/components/index.mjs';
const variants = ['outlined']

</script> 
<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col
        v-for="(variant, i) in variants"
        :key="i"
        cols="auto"
      >
        <v-card
          class="mx-auto"
          height=800px
          width=1500px
          max-width="100%"
          :variant="variant"
        >
          <v-card-item>
            <div>
              <div class="text-overline mb-1">
                
              </div>
  <v-container >
    <v-row no-gutters>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <v-text-field label="Nombre" variant="outlined"  ></v-text-field>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <v-text-field label="Apellido Paterno" variant="outlined"></v-text-field>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <v-text-field label="Apellido Materno" variant="outlined"></v-text-field>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <v-text-field label="Telefono" variant="outlined"  ></v-text-field>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <v-text-field label="RFC" variant="outlined"></v-text-field>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <v-text-field label="Calle" variant="outlined"></v-text-field>
        </v-sheet>
      </v-col>
    </v-row>    <v-row no-gutters>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <v-text-field label="Colonia" variant="outlined"  ></v-text-field>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <v-text-field label="Numero" variant="outlined"></v-text-field>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container> 
            </div>
        </v-card-item>

        <v-card-actions>
            <v-btn variant="outlined" onclick="">
            Guardar 
            </v-btn>
            <v-btn variant="outlined">
                Cerrar
            </v-btn>
        </v-card-actions>
        </v-card>
    </v-col>
    </v-row>
</v-container>

</template>

<style>
.lo{
    display: flex;
    flex-wrap: wrap;
    width:100%;
height: 100%; 
}

</style>
