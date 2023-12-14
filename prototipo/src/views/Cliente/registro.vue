<template>
<v-container style="margin-top: 85px;">
  <h1 class="re" style="margin-top: 25px;">Registro</h1>
  <div class="login d-flex align-center justify-center">
    <v-sheet class="mx-auto d-flex">
      <v-form class="flex-row" @submit.prevent="submitForm">
        <div class="flex-column">
          <v-text-field v-model="userData.nombre" label="Nombre"></v-text-field>
          <v-text-field v-model="userData.apellido_p" label="Apellido Paterno"></v-text-field>
          <v-text-field v-model="userData.calle" label="Calle"></v-text-field>
          <v-text-field v-model="userData.colonia" label="Colonia"></v-text-field>
          <v-text-field v-model="userData.codigo_postal" label="C.P (Código Postal)"></v-text-field>
          <v-text-field v-model="userData.contrasena" label="Contraseña" type="password"></v-text-field>
        </div>
        <div class="separator"></div>
        <div class="flex-column">
          <v-text-field v-model="userData.apellido_m" label="Apellido Materno"></v-text-field>
          <v-text-field v-model="userData.numero_casa" label="Numero de casa"></v-text-field>
          <v-text-field v-model="userData.user" label="Correo Electronico"></v-text-field>
          <v-text-field v-model="userData.telefono" label="Telefono"></v-text-field>
          <v-text-field v-model="confirmPassword" label="Confirmar Contrasena" type="password"></v-text-field>
          <botonreg @click="registrarUsuario"></botonreg>
          <div class="mt-2">
            <h3>Tienes Cuenta?</h3>
            <RouterLink to="iniciosesion"><h3>Inicia Sesion</h3></RouterLink>
          </div>
        </div>
      </v-form>
    </v-sheet>
  </div>
</v-container>
</template>
<style>
.re{
  text-align: center;
}
</style>
<script setup>
import botonreg from '@/components/botonregis.vue'
import axios from 'axios';
import { ref } from 'vue';

const userData = ref({
  nombre: '',
  apellido_p: '',
  calle: '',
  colonia: '',
  codigo_postal: '',
  contrasena: '',
  apellido_m: '',
  numero_casa: '',
  user: '',
  telefono: ''
});

const confirmPassword = ref('');

const registrarUsuario = async () => {
  if (userData.value.contrasena !== confirmPassword.value) {
    window.alert('Las contraseñas no coinciden.');
    return;
  }

  try {
    const response = await axios.post('http://localhost/users', userData.value);
    if (response.status === 201) {
      window.alert('¡Usuario registrado exitosamente!');
      // Limpiar campos después del registro exitoso
      Object.keys(userData.value).forEach((key) => (userData.value[key] = ''));
      confirmPassword.value = '';
    }
  } catch (error) {
    console.error('Error al registrar usuario:', error);
  }
};
</script>