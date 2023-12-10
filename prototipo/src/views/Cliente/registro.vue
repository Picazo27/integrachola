<template>
  <h1 class="re">Registro</h1>
  <div class="login d-flex align-center justify-center">
    <v-sheet class="mx-auto d-flex">
      <v-form class="flex-row" fast-fail @submit.prevent="registrarUsuario" v-model="valid">
        <div class="flex-column">
          <v-text-field variant="solo"
                  v-model="usuario.nombre"
                  :rules="[caracteresNormales, requerido]" label="Nombre(s)"></v-text-field>
          <v-text-field variant="solo"
                  v-model="usuario.apellido_p"
                  :rules="[caracteresNormales, requerido]" label="Apellido Paterno"></v-text-field>
          <v-text-field variant="solo"
                  v-model="usuario.calle"
                  :rules="[caracteresNormales, requerido]" label="Calle"></v-text-field>
          <v-text-field variant="solo"
                  v-model="usuario.colonia"
                  :rules="[caracteresNormales, requerido]" label="Colonia"></v-text-field>
          <v-text-field variant="solo"
                  v-model="usuario.cp"
                  label="C.P (Código Postal)"></v-text-field>
          <v-text-field v-model="usuario.contrasena"
                  variant="solo"
                  type="password"
                  :rules="passwordRules" label="Contraseña"></v-text-field>
        </div>
        <div class="separator"></div>
        <div class="flex-column">
          <v-text-field
          variant="solo"
                  v-model="usuario.apellido_m"
                  :rules="[caracteresNormales, requerido]" label="Apellido Materno"></v-text-field>
          <v-text-field
          variant="solo"
                  v-model="usuario.numero"
                   label="Numero de casa"></v-text-field>
          <v-text-field v-model="usuario.user"
                  placeholder="example@gmail.com"
                  type="email"
                  variant="solo"
                  :rules="emailRules" label="Correo Electronico"></v-text-field>
          <v-text-field  v-model="usuario.telefono"
                  variant="solo"
                  @input="formatoTelefono" label="Telefono"></v-text-field>
          <v-text-field v-model="confirmPassword"
                  variant="solo"
                  type="password"
                  :rules="confirmPasswordRules" label="Confirmar Contrasena"></v-text-field>
                  <v-btn
                class="text-none pa-2 ma-2 boton1 font-weight-bold text-white"
                :disabled="loading"
                :loading="loading"
                block
                type="submit"
                size="x-large"
                color="rgba(136, 158, 137, 0.55)"
              >
                Registrarse
              </v-btn>          <div class="mt-2">
            <h3>Tienes Cuenta?</h3>
            <RouterLink to="iniciosesion"><h3>Inicia Sesion</h3></RouterLink>
          </div>
        </div>
      </v-form>
    </v-sheet>
  </div>
</template>
<script setup>
import botonreg from '@/components/botonregis.vue'

import { ref, watch, computed } from "vue";
import axios from "axios";
import { caracteresNormales, requerido } from "../../validations/validations";

const loading = ref(false);
const valid = ref(true);
const showAlert = ref(false);
const alertMessage = ref("");
const alertColor = ref("");

const showAlertMessage = (message, color) => {
  showAlert.value = true;
  alertMessage.value = message;
  alertColor.value = color;
};

const usuario = ref({
  nombre: "",
  apellido_p: "",
  apellido_m: "",
  user: "",
  contrasena: "",
  telefono_usuario: "",
  calle: "",
  numero:"",
  colonia: "",
  cp: "",

});

const registrarUsuario = async () => {
  try {
    if (!valid.value) {
      return;
    }

    const response = await axios.post(
      "http://localhost/registrousuario",
      usuario.value
    );

    if (response.data.status === 200) {
      usuario.value.nombre = null;
      usuario.value.apellido_p = null;
      usuario.value.apellido_m = null;
      usuario.value.user = null;
      usuario.value.contrasena = null;
      usuario.value.telefono = null;
      usuario.value.calle = null;
      usuario.value.numero = null;
      usuario.value.colonia = null;
      usuario.value.cp = null;
      confirmPassword.value = null;
      showAlertMessage("Usuario registro exitosamente", "success");
    } else {
      showAlertMessage(
        "Error al registrar los datos, intenta con otro correo o numero telefonico",
        "error"
      );
    }

    if (response.data.msg === "Formato de imagen no permitido") {
      showAlertMessage("Favor de ingresar una imagen ", "error");
    }
  } catch (error) {
    console.error("Error al registrar usuario: ", error.message);
  }
};

const confirmPassword = ref("");

const emailRules = computed(() => [
  (v) => !!v || "El correo electrónico es obligatorio",
  (v) => /.+@.+\..+/.test(v) || "Ingresa un correo electrónico válido",
]);

const telefonoRules = computed(() => [
  (v) => !!v || "El número de teléfono es obligatorio",
  (v) =>
    /^\(\d{3}\)-\d{3}-\d{4}$/.test(v) ||
    "Ingresa un número de teléfono válido (ej. (871)-794-4242)",
]);
const formatoTelefono = () => {
  usuario.value.telefono_usuario = usuario.value.telefono_usuario
    .replace(/\D/g, "")
    .replace(/^(\d{3})(\d{3})(\d{4})$/, "($1)-$2-$3");
};
const passwordRules = computed(() => [
  (v) => !!v || "La contraseña es obligatoria",
  (v) =>
    (v && v.length >= 8) || "La contraseña debe tener al menos 8 caracteres",
  (v) => /\d/.test(v) || "La contraseña debe contener al menos un número",
  (v) =>
    /[A-Z]/.test(v) ||
    "La contraseña debe contener al menos una letra mayúscula",
  (v) =>
    /[!@#$%^&*(),.?":{}|<>]/.test(v) ||
    "La contraseña debe contener al menos un carácter especial",
]);
const confirmPasswordRules = computed(() => [
  (v) => !!v || "Confirma tu contraseña",
  (v) =>
    v === usuario.value.contrasena || "Las contraseñas no coinciden",
]);
</script>
<style scoped>
/* ... */
.flex-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.re{
  text-align: center;
  padding-top: 10px;
  padding-bottom: 20px;
}
.flex-column {
  flex-basis: calc(50% - 10px);
  margin-bottom: 20px;
  width: 500px;
}

/* Media Query para dispositivos móviles */
@media only screen and (max-width: 600px) {
  .flex-column {
    flex-basis: 100%;
    width:200px;
  }
}

</style>
