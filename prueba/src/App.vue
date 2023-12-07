<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!--  -->
     
     <v-container class="op-admin" >
      
 <v-row class="icono">
    <v-icon size="100px" > mdi-account-circle</v-icon>
   <v-row-text class="my-4">NOMBRE DEL ADMIN</v-row-text>
 </v-row>
 <v-divider></v-divider>
 <v-list class="custom-list">
  <v-list-item>
    <label>Administracion</label>
  </v-list-item>
  <v-divider></v-divider>
  <v-list-item>
    <label>Clientes</label>
  </v-list-item>
  <v-divider></v-divider>
  <v-list-item>
    <label>Empleados</label>
  </v-list-item>
  <v-divider></v-divider>
  <v-list-item>
    <label>Proveedores</label>
  </v-list-item>
  <v-divider></v-divider>
  <v-list-item>
    <label>Productos</label>
  </v-list-item>
  <v-divider></v-divider>
  <v-list-item>
    <label>Inventario</label>
  </v-list-item>
  <v-divider></v-divider>
  <v-list-item>
    <label>Entradas</label>
  </v-list-item>
  <v-divider></v-divider>
  <v-list-item>
    <label>Salidas</label>
  </v-list-item>
  <v-divider></v-divider>
  <v-list-item>
    <label>Categorias</label>
  </v-list-item>
  <v-divider></v-divider>
  <v-list-item>
    <v-btn @click="funcion" style="background-color: black; color: white; margin-top: 14px;">CERRAR SESION </v-btn>
  </v-list-item>
 </v-list>
     </v-container>
    </v-navigation-drawer>

    <v-app-bar>
      

    <v-app-bar-title>Adminstracion</v-app-bar-title>
    </v-app-bar>
    
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

.v-divider{
  border-top: 6px solid #000;
}

.v-list-item{
  text-align: center;
}


</style>

<style scoped>

.custom-list:hover{
  background-color: #e0e0e0;
}

</style>
