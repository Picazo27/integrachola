<template>
  <v-container style="margin-top: 80px;">
  <div>
    <v-img
      class="mx-auto my-6"
      max-width="180"
      src="../assets/logopicazo.png"
    ></v-img>
    
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
     
    ><h1 class="text-center">Inicia Sesion</h1>
      <div class="text-subtitle-1 text-medium-emphasis">Cuenta</div>

      <v-text-field
        :rules="rules_usuario"
        density="compact"
        placeholder="Correo Electronico"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Contrasena

        <a
          class="text-caption text-decoration-none text-red"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Olvidaste tu Contrasena?</a>
      </div>

      <v-text-field
  :append-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
  :type="visible ? 'text' : 'password'"
  :rules="rules_contraseña"
  density="compact"
  placeholder="Introduce tu Contraseña"
  prepend-inner-icon="mdi-lock-outline"
  variant="outlined"
  @click:append="togglePasswordVisibility"
></v-text-field>


      <v-card
        class="mb-12"
        color="surface-variant"
        variant="tonal"
      >
        <v-card-text class="text-medium-emphasis text-caption">
          Si te equivocas 3 veces tu cuenta quedara bloqueada temporalmente por 3 horas
        </v-card-text>
      </v-card>

      <v-btn @click="mostrarAlertainiciarsesion"
        block
        class="mb-8"
        color="grey-darken-4"
        size="large"
       
      >
         Inicia Sesion
      </v-btn>

    </v-card>
    <br>
    
  </div>
</v-container>
</template>
<style>

</style>
<script setup>
import { ref } from 'vue';
const visible = ref(false);
const firstName = ref('');
const rules_usuario = [
  (value) => {
    const resul = value.indexOf('@');
    if (resul === -1) {
      return 'correo debe ser valido';
    }
  },
];

const rules_contraseña = [
  (value) => {
    if (!value) {
      return 'No puede haber contraseñas vacías.';
    } else if (value.length < 8) {
      return 'La contraseña debe tener al menos 8 caracteres.';
    }
    return true;
  },
];
function togglePasswordVisibility() {
  visible.value = !visible.value;
}
const mostrarAlertainiciarsesion = () => {
 
 window.alert('Listo, Haz iniciado Sesion');
};
</script>