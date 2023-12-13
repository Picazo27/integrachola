<template>
   <v-app>
    <v-conatiner>
        <h1 style=" margin-bottom: 18px; margin-left: 45px;">Empleados</h1>

<v-row><boton style="margin-top: 30px; justify-content: end; margin-right: 120px;"></boton></v-row>
<v-row>
    <v-table fixed-header density="compact" style="margin: 150px; margin-top: 80px; width: 100%;">
       <thead>
         <tr>
           <th class="text-left">
             Nombre
           </th>
           <th class="text-left">
             RFC
           </th>
           <th class="text-left">
             Direccion
           </th>
           <th class="text-left">
             Correo
           </th>
           <th class="text-left">
             Estado
           </th>
         </tr>
       </thead>
       <tbody>
         <tr
           v-for="item in desserts"
           :key="item.name"
         >
          
           <td>{{ item.Nombre }}</td>
           <td>{{ item.RFC }}</td>
           <td>{{ item.Direccion }}</td>
           <td>{{ item.Correo }}</td>
           <td>{{ item.Estado }}</td>
           
         </tr>
       </tbody>
     </v-table>
     <v-row>
        <v-btn color="grey-darken-4" type="block">DETALLES</v-btn>
     </v-row>
</v-row>
    </v-conatiner>
   </v-app>
</template>

<script setup>
import boton from '@/components/botonAnadir.vue'
</script>


<script>
export default {
    data () {
      return {
        desserts: [
          {
           
            Nombre: 'Samuel',
            RFC: '2837678236',
            Direccion:'La joya',
            Correo:'sam@gmail.com',
            Estado:'activo',
          },
          {
           
           Nombre: 'Samuel',
           RFC: '2837678236',
           Direccion:'La joya',
           Correo:'sam@gmail.com',
           Estado:'activo',
         },
         {
           
           Nombre: 'Samuel',
           RFC: '2837678236',
           Direccion:'La joya',
           Correo:'sam@gmail.com',
           Estado:'activo',
         },
         {
           
           Nombre: 'Samuel',
           RFC: '2837678236',
           Direccion:'La joya',
           Correo:'sam@gmail.com',
           Estado:'activo',
         },
         {
           
           Nombre: 'Samuel',
           RFC: '2837678236',
           Direccion:'La joya',
           Correo:'sam@gmail.com',
           Estado:'activo',
         },
         {
           
           Nombre: 'Samuel',
           RFC: '2837678236',
           Direccion:'La joya',
           Correo:'sam@gmail.com',
           Estado:'activo',
         },
        ],
      }
    },
  }
</script>