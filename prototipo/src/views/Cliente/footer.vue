<template>
  <v-footer color="grey-darken-4">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" class="text-center">
          <img src="../img/logopicazo.png" alt="Picazo Gym Logo" class="logop">
          <p class="mt-4">Contamos con los mejores suplementos deportivos en línea. Enviamos a todo Torreón, Gómez Lerdo. Calidad 100% garantizada.</p>
        </v-col>
        <v-col cols="12" md="4">
          <h3>SUPLEMENTOS DEPORTIVOS</h3>
          <ul>
            <li>Proteínas</li>
            <li>Creatinas</li>
            <li>Óxido Nítrico</li>
            <li>Aminoácidos</li>
            <li>BCAA</li>
          </ul>
        </v-col>
        <v-col cols="12" md="4">
          <h3>SÍGUENOS</h3>
          <ul>
            <li>Facebook</li>
            <li>Whatsapp</li>
            <li>Instagram</li>
          </ul>
          <h3>CONTÁCTANOS</h3>
          <ul>
            <li>Teléfono: 123-456-789</li>
            <li>Email: info@picazogym.com</li>
          </ul>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col>
          <p class="mt-4">Contamos con los mejores suplementos deportivos en línea. Enviamos a todo Torreón, Gómez Lerdo. Calidad 100% garantizada.</p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style>
  .logop {
    width: 110px;
    height: auto;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    font-size: 18px;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
  }

  @media screen and (max-width: 960px) {
    .logop {
      width: 80px;
    }

    li,
    p {
      font-size: 14px;
    }
  }
</style>
