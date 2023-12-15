<template>
  <v-container style="margin-top: 100px;">
  <v-card
    class="mx-auto"
    color="grey-lighten-3"
    max-width="800"
  >
    <v-toolbar flat color="grey-darken-4">
      <v-btn icon="mdi-account" style="margin-top: 17px;"></v-btn>
      <v-toolbar-title class="font-weight-light" style="margin-top: 30px;">
      Perfil
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="isEditing = !isEditing"
      >
        <v-fade-transition leave-absolute>
          <v-icon v-if="isEditing">mdi-close</v-icon>

          <v-icon v-else>mdi-pencil</v-icon>
        </v-fade-transition>
      </v-btn>
    </v-toolbar>
<div class="usuario">
      <v-row>
        <v-col cols="12">
        <v-card-text>
       
          <v-text-field
        :disabled="!isEditing"
        base-color="grey-darken-4"
        label="Nombre"
        v-model="userProfile.nombre"
      ></v-text-field>
      <v-text-field
        :disabled="!isEditing"
        base-color="grey-darken-4"
        label="Apellido Paterno"
        v-model="userProfile.apellido_p"
      ></v-text-field>
      <v-text-field
        :disabled="!isEditing"
        base-color="grey-darken-4"
        label="Apellido Materno"
        v-model="userProfile.apellido_m"
      ></v-text-field>
      <v-text-field
        :disabled="!isEditing"
        base-color="grey-darken-4"
        label="Calle"
        v-model="userProfile.calle"
      ></v-text-field>
      <v-text-field
        :disabled="!isEditing"
        base-color="grey-darken-4"
        label="Numero Interior o Exterior"
        v-model="userProfile.numero"
      ></v-text-field>
      </v-card-text>
        
          <v-card-text>
          <v-autocomplete
        :disabled="!isEditing"
        :items="states"
        :custom-filter="customFilter"
        base-color="grey-darken-4"
        item-title="name"
        item-value="abbr"
        label="Municipio"
        v-model="userProfile.municipio"
      ></v-autocomplete>

      <v-text-field
        :disabled="!isEditing"
        base-color="grey-darken-4"
        label="Colonia"
      ></v-text-field>
      <v-text-field
        :disabled="!isEditing"
        base-color="grey-darken-4"
        label="C.P (Codigo Postal)"
        v-model="userProfile.codigo_postal"
      ></v-text-field>
      <v-text-field
        :disabled="!isEditing"
        base-color="grey-darken-4"
        label="Correo Electronico"
        v-model="userProfile.user"
      ></v-text-field>
      <v-text-field
        :disabled="!isEditing"
        base-color="grey-darken-4"
        label="Telefono"
        v-model="userProfile.telefono"
      ></v-text-field>
    <v-text-field
        :disabled="!isEditing"
        base-color="grey-darken-4"
        label="Contrasena"
        v-model="userProfile.contrasena"
      ></v-text-field>
          </v-card-text>
          </v-col>
        </v-row>
    <v-divider></v-divider>
  </div>
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
      block
        class="mb-8"
        size="large"
       color="grey-darken-4"
        :disabled="!isEditing"
        @click="save"
      >
        Guardar
      </v-btn>
    </v-card-actions>

    <v-snackbar
      v-model="hasSaved"
      :timeout="2000"
      attach
      position="absolute"
      location="bottom left"
    >
     Tu perfil se ha actualizado
    </v-snackbar>
  </v-card>
</v-container>
</template>
<style>
.usuario{
  justify-content: center;
  width: 800px;
}
</style>
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const userProfile = ref({});
const isEditing = ref(false);

const fetchUserProfile = async () => {
  try {
    const response = await axios.get('http://localhost/perfil');
    userProfile.value = response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
  }
};

const saveProfileChanges = async () => {
  try {
    await axios.put('http://localhost/perfil', userProfile.value);
    isEditing.value = false;
  } catch (error) {
    console.error('Error saving profile changes:', error);
  }
};

import { onMounted } from 'vue'; // Importa onMounted desde 'vue'
onMounted(fetchUserProfile); // Llama a onMounted y pasa la función fetchUserProfile


</script>