<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!--  -->
     
     <v-container class="op-admin" >
      <v-row >
        <v-col>
 <v-row class="icono">
    <v-icon size="100px" > mdi-account-circle</v-icon>
   <v-row-text class="my-4">NOMBRE DEL ADMIN</v-row-text>
 </v-row>
 <v-text-space></v-text-space>
 <v-row>
  <router-link to="/administracion"><v-card-text >Adminsitracion</v-card-text></router-link>
 </v-row>
 <v-row>
  <router-link to="/ejemplo"><v-card-text>Clientes </v-card-text></router-link>
 </v-row>
 <v-row>
  <v-card-text>Empleados</v-card-text>
 </v-row>
 <v-row>
  <v-card-text>Provedores</v-card-text>
 </v-row>
 <v-row>
  <v-card-text>Productos</v-card-text>
 </v-row>
 <v-row>
  <v-card-text>Inventarios</v-card-text>
 </v-row>
 <v-row>
  <v-card-text>Entradas</v-card-text>
 </v-row>
 <v-row>
  <v-card-text>Salidas</v-card-text>
 </v-row>
 <v-row>
  <v-card-text>Categorias</v-card-text>
 </v-row>
 <v-row justify="center" aligin="center">
  <v-btn color="black" >CERRAR SESION</v-btn>
 </v-row>
        </v-col>
      </v-row>
     </v-container>
  
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Adminstracion</v-app-bar-title>
    </v-app-bar>
    <v-main>
      

     <v-row>
      <v-col>
        <v-select class="lista"
  
  label="Select"
  :items="['Clientes', 'Empleados', 'Provedores', 'Productos', 'Inventario', 'Entradas','Salidas','Categorias']"
></v-select>

      </v-col>
     </v-row>
   

     <v-row class="py-8">
      <v-img src="https://lh4.googleusercontent.com/eKgfVlAQwf5x8pAp8YJsnvbm8siycLuuPyRj3fsCLYmogQCNCTT0iHG3q8Gek2HMO2SdpxGR63NQs30gpBDndUhLp6r5OU2vgLxGtuP0z-dVTAElyg_G7ksJO4HY_3bQMuJ1Mzgkc7PKkejoVDNDe-pRZQPaQZV5KyRQE8Hof7mlrSCGUe0CH-aH_Mfz"
       width="470px"
       height="470px"></v-img>
     </v-row>

<v-row  class="py-8"></v-row>
     <v-row>
      <v-img src="https://tudashboard.com/wp-content/uploads/2021/03/grafica-de-linea.png" 
       width="470px"
       height="470px"></v-img>
     </v-row>

    </v-main>
  </v-app>
</template>

<script setup>

  import { ref } from 'vue'

  const drawer = ref(null)
  
  //import clientes from './components/Clientes.vue'//

</script>

<script>

  export default {
    data: () => ({ drawer: null }),
  }
</script>


<style>


.op-admin{
 
  background-color: #c62828;

}

.v-row-text{
  justify-content: center;
}

.v-navigation-drawer__content{
     background-color: #c62828;
     align-items: center;

}
.v-icon{
  justify-items: center;
  
}
.v-col{
  justify-content: center;
}
.v-btn{
  text-align: center;
  
  justify-content: center;
}
.v-card-text{
  text-align: center;
}
.icono{
  align-content: center;
  justify-content: center;
}
.v-toolbar__content{
  background-color: #c62828;
}
.lista{
  max-width: 200px;
  margin-top: 45px;
  margin-left: 100px;
}



</style>
