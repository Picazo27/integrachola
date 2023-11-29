<template>
    <v-app id="inspire">
      
      <v-navigation-drawer id="menubar" v-model="drawer" permanent="$vuetify.breakpoint.mdAndUp" class="hidden-lg-and-up">
        <v-icon img src="../img/logopicazo.png"></v-icon>
       <RouterLink to="/productos"> <v-app-bar-title class="titulo2">Promociones</v-app-bar-title></RouterLink>
      <RouterLink to="/productos"><v-app-bar-title class="titulo2">Suplementos</v-app-bar-title></RouterLink>
      <RouterLink to="/proteinas"><v-app-bar-title class="titulo2">Proteinas</v-app-bar-title></RouterLink>
      <RouterLink to="/creatinas"><v-app-bar-title class="titulo2">Creatinas</v-app-bar-title></RouterLink>
    <RouterLink to="/iniciasesion"> <v-app-bar-title class="titulo2">Iniciar Sesion</v-app-bar-title></RouterLink>
     <RouterLink to="/registrate"><v-app-bar-title class="titulo2">Registrate</v-app-bar-title></RouterLink>
      <RouterLink to="/usuario"><v-app-bar-title><v-icon color="white">mdi-account</v-icon> </v-app-bar-title></RouterLink>
      <RouterLink to="/carrito"><v-app-bar-title><v-icon>mdi-cart</v-icon></v-app-bar-title></RouterLink>
    </v-navigation-drawer>
 
   
    <v-app-bar class="d-flex flex-sm-row flex-md-row justify-center hidden-md-and-up" color="grey-darken-4" id="barra">

<v-app-bar-nav-icon @click="drawer = !drawer" color="white" class="hidden-lg-and-up">
</v-app-bar-nav-icon>

<v-icon img src="../img/logopicazo.png"></v-icon>

<RouterLink to="/productos" class="nav-link hidden-sm-and-down"><v-app-bar-title class="titulo">Productos</v-app-bar-title></RouterLink>
<RouterLink to="/productos" class="nav-link hidden-sm-and-down"><v-app-bar-title class="titulo">Suplementos</v-app-bar-title></RouterLink>
<RouterLink to="/proteinas" class="nav-link hidden-sm-and-down"><v-app-bar-title class="titulo">Proteinas</v-app-bar-title></RouterLink>
<RouterLink to="/creatinas" class="nav-link hidden-sm-and-down"><v-app-bar-title class="titulo">Creatinas</v-app-bar-title></RouterLink>

<input type="text" class="buscar hidden-sm-and-down" placeholder="Buscar">
<v-app-bar-title class="hidden-sm-and-down"><v-icon class="buscar" color="nav-link">mdi-magnify</v-icon></v-app-bar-title>

<RouterLink to="/perfil"><v-app-bar-title class="hidden-sm-and-down pr-6"><v-icon color="white">mdi-account</v-icon></v-app-bar-title></RouterLink>
<RouterLink to="carrito"><v-app-bar-title class="hidden-sm-and-down pr-6"><v-icon color="white">mdi-cart</v-icon></v-app-bar-title></RouterLink>

</v-app-bar>
    <v-app-bar  class="pl-4" app color="red" dark>
      <span class="headline font-weight-bold">
        🔥 «Adquiere los mejores suplementos deportivos con nosotros | Envíos a domicilio»
      </span>
    </v-app-bar>
    <carrusel></carrusel>
    <RouterView></RouterView>
    <barraadmin></barraadmin>

    </v-app>
    </template>
    <style>
    *{
      font-family: Arial, Helvetica, sans-serif;
    }
    @media only screen and (max-width: 600px) {
      .titulo {
        font-size: 12px;
      }
    }
  
    .titulo{
      color:aliceblue;
    }
    .titulo2{
      color:aliceblue;
      margin: 35px;
    }
    .nav-link {
  margin: 100px;
   
}
    #menubar{
      background-color: #212121;
      color: aliceblue;
      
    }
    .logo{
      width: 25px;
      height: 25px;
      
    }
    .logo2{
      width: 25px;
      height: 25px;  
    }
    
    .buscar{
      color:aliceblue;
      width: 200px;
    
    }
    .footer-fixed {
      position: fixed;
  bottom: 0;
  width: 100%;
    }

    </style>
    <script setup>
    import { ref } from 'vue'
    import carrusel from './carrusel.vue'
    import final from './footer.vue'
    import { RouterLink, RouterView } from 'vue-router' 
    import barraadmin from '../Administrador/Proveedores.vue'
      const drawer = ref(null)
    </script>