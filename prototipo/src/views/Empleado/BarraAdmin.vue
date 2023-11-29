<template>
  <v-container>
    <v-row>
      <v-navigation-drawer class="op-admin fixed text-center" app>
        <v-icon size="130px">mdi-account</v-icon>
        <br>
        <v-row-text>Nombre del admin</v-row-text>
        <v-divider></v-divider>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-btn color="black" block>CERRAR SESION</v-btn>
      </v-navigation-drawer>
      <v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue'
  const drawer = ref(true)
  
  const items = [
    'Adminsitracion',
    'Clientes',
    'Empleados',
    'Provedores',
    'Productos',
    'Inventarios',
    'Categorias'
  ]
</script>

<style>


.fixed {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  width: 250px;   


}
.v-navigation-drawer__content{
  background-color: #c62828;
}

.v-col {
  margin-left: 250px; 
}

</style>
