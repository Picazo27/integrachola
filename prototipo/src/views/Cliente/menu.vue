<template>
    <v-app id="inspire">
      <div class="menula">
      <v-navigation-drawer id="menubar" v-model="drawer" permanent=vuetify.breakpoint.mdAndUp class="hideen-lg-and-up" >
        <v-icon img src="../img/logopicazo.png"></v-icon>
        <v-app-bar-title><buscador></buscador></v-app-bar-title>
       <RouterLink to="productos"> <v-app-bar-title class="titulo2">Promociones</v-app-bar-title></RouterLink>
      <RouterLink to="suplementos"><v-app-bar-title class="titulo2">Suplementos</v-app-bar-title></RouterLink>
      <RouterLink to="proteinas"><v-app-bar-title class="titulo2">Proteinas</v-app-bar-title></RouterLink>
      <RouterLink to="creatinas"><v-app-bar-title class="titulo2">Creatinas</v-app-bar-title></RouterLink>
      <RouterLink to="aminoacidos"><v-app-bar-title class="titulo2">Aminoacidos</v-app-bar-title></RouterLink>
      <RouterLink to="preentreno"><v-app-bar-title class="titulo2">Pre-Entreno</v-app-bar-title></RouterLink>
    <RouterLink to="iniciosesion"> <v-app-bar-title class="titulo2">Iniciar Sesion</v-app-bar-title></RouterLink>
     <RouterLink to="registro"><v-app-bar-title class="titulo2">Registrate</v-app-bar-title></RouterLink>
      <RouterLink to="perfil"><v-app-bar-title class="logola"><v-icon color="white">mdi-account</v-icon> </v-app-bar-title></RouterLink>
      <RouterLink to="carrito"><v-app-bar-title class="logola"><v-icon>mdi-cart</v-icon></v-app-bar-title></RouterLink>
    </v-navigation-drawer>
  </div>
    <v-app-bar class="d-flex flex-sm-row flex-md-row justify-center hidden-md-and-up" color="grey-darken-4" id="barra">

<v-app-bar-nav-icon @click.stop="drawer = !drawer" permanent="!$vuetify.breakpoint.mdAndUp" color="white" class="hidden-lg-and-up">
</v-app-bar-nav-icon>

<v-icon img src="../img/logopicazo.png"></v-icon>
<RouterLink to="productos" class="nav-link hidden-sm-and-down"><v-app-bar-title class="titulo">Principal</v-app-bar-title></RouterLink>
<RouterLink to="suplementos" class="nav-link hidden-sm-and-down"><v-app-bar-title class="titulo">Suplementos</v-app-bar-title></RouterLink>
<RouterLink to="proteinas" class="nav-link hidden-sm-and-down"><v-app-bar-title class="titulo">Proteinas</v-app-bar-title></RouterLink>
<RouterLink to="creatinas" class="nav-link hidden-sm-and-down"><v-app-bar-title class="titulo">Creatinas</v-app-bar-title></RouterLink>
<RouterLink to="aminoacidos" class="nav-link hidden-sm-and-down"><v-app-bar-title class="titulo">Aminoacidos</v-app-bar-title></RouterLink>
<RouterLink to="preentreno" class="nav-link hidden-sm-and-down"><v-app-bar-title class="titulo">Pre-entreno</v-app-bar-title></RouterLink>

<v-app-bar-title class="hidden-sm-and-down"><buscador></buscador></v-app-bar-title>

<RouterLink to="registro"><v-app-bar-title class="hidden-sm-and-down pr-6"><v-icon color="white">mdi-account</v-icon></v-app-bar-title></RouterLink>
<RouterLink to="carrito"><v-app-bar-title class="hidden-sm-and-down pr-6"><v-icon color="white">mdi-cart</v-icon></v-app-bar-title></RouterLink>

</v-app-bar>
    <v-app-bar  class="pl-4" app color="red" dark>
      <span class="headline font-weight-bold">
        🔥 «Adquiere los mejores suplementos deportivos con nosotros | Envíos a domicilio»
      </span>
    </v-app-bar>
    <RouterView></RouterView>
    <final></final>

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
      margin-bottom: 25px;
      margin-left: 15px;
    }
    .nav-link {
  margin: 35px;
   
}
    #menubar{
      background-color: #212121;
      color: aliceblue;
      
    }
    .logola{
      text-align: center;
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
    import final from '@/views/Cliente/footer.vue'
    import { RouterLink, RouterView } from 'vue-router' 
    import buscador from '@/components/buscador.vue'
      const drawer = ref(false)
    </script>