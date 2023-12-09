<template>

    <v-app id="inspire" style="margin-left: 80px; margin-top: 100px;">
          <v-navigation-drawer app permanent>
           
           <v-container class="op-admin" >
            
       <v-row class="icono">
          <v-icon size="100px" > mdi-account-circle</v-icon>
         <v-row-text class="my-4">NOMBRE DEL ADMIN</v-row-text>
       </v-row>
       <v-divider></v-divider>
       <v-list class="custom-list">
        <v-list-item>Empleado</v-list-item>
        <v-divider></v-divider>
        <RouterLink to="inicio"><v-list-item><label>Inicio</label></v-list-item></RouterLink>
        <v-divider></v-divider>
        <RouterLink to="ordenes"><v-list-item><label>Ordenes</label></v-list-item></RouterLink>
        <v-divider></v-divider>
        <RouterLink to="detalle orden"><v-list-item><label>Detalle Orden</label></v-list-item></RouterLink>
        <v-divider></v-divider>
        <RouterLink to="clientes"><v-list-item><label>Clientes</label></v-list-item></RouterLink>
        <v-divider></v-divider>
        <RouterLink to="productos"><v-list-item><label>Productos</label></v-list-item></RouterLink>
        <v-divider></v-divider>
        <RouterLink to="detalle producto"><v-list-item><label>Detalle Producto</label></v-list-item></RouterLink>
        <v-divider></v-divider>
       </v-list>
       <v-row style="justify-content: center; margin-top: 10px;">
        <v-btn @click="funcion" style="background-color: black; color: white; margin-top: 14px;">CERRAR SESION </v-btn>
      
       </v-row>
           </v-container>
          </v-navigation-drawer>
      
          <v-app-bar>
          <v-app-bar-title>Empleado</v-app-bar-title>
          </v-app-bar>

          <v-container style="justify-content:center; margin-left: 170px;">
            <RouterView></RouterView>
          </v-container>
          
        </v-app>
    </template>
    
    <script setup>
    
       
    import { RouterLink,RouterView } from 'vue-router'   

      
    
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
      .v-list-item:hover {
        background-color: rgba(0, 0, 0, 0.5); /* Fondo oscuro al pasar el cursor */
        cursor: pointer; /* Cambia el cursor al estilo de un puntero */
        color: rgb(255, 255, 255); 
      }
      </style>
    