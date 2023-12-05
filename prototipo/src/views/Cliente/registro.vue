<template>
  <h1 class="re">Registro</h1>
  <div class="login d-flex align-center justify-center">
    <v-sheet class="mx-auto d-flex">
      <v-form class="flex-row" fast-fail @submit.prevent="">
        <div class="flex-column">
          <v-text-field label="Nombre"></v-text-field>
          <v-text-field label="Apellido Paterno"></v-text-field>
          <v-text-field label="Calle"></v-text-field>
          <v-text-field label="Colonia"></v-text-field>
          <v-text-field label="C.P (Código Postal)"></v-text-field>
          <v-text-field label="Contraseña"></v-text-field>
        </div>
        <div class="separator"></div>
        <div class="flex-column">
          <v-text-field label="Apellido Materno"></v-text-field>
          <v-text-field label="Numero de casa"></v-text-field>
          <v-text-field label="Correo Electronico"></v-text-field>
          <v-text-field label="Telefono"></v-text-field>
          <v-text-field label="Confirmar Contrasena"></v-text-field>
          <botonreg></botonreg>
          <div class="mt-2">
            <h3>Tienes Cuenta?</h3>
            <RouterLink to="iniciosesion"><h3>Inicia Sesion</h3></RouterLink>
          </div>
        </div>
      </v-form>
    </v-sheet>
  </div>
</template>

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
