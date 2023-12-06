<template>
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
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          :rules="rules_contraseña"
          density="compact"
          placeholder="Introduce tu Contrasena"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
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
  
        <v-btn
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
  </template>
  <style>

</style>
  <script>
 export default {
    data: () => ({
      firstName: '',
      rules_usuario:[
        value => {
        let resul = value.indexOf("@");
        if(resul == -1){
          return 'El correo debe tener un arroba'
        }
        }
      ],
      rules_contraseña: [
        value => {
          if (value) return true

          return 'No Hay contraseñas vacias.'
        },
      ],
    }),
  }
  </script>