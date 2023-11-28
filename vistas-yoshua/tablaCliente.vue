<template>
    
     <v-table fixed-header density="compact" style="margin: 200px; margin-top: 50px; width: 100%;">
       <thead>
         <tr>
           <th class="text-left">
             Id
           </th>
           <th class="text-left">
             Nombre
           </th>
           <th class="text-left">
             Apellido
           </th>
           <th class="text-left">
             Direccion
           </th>
           <th class="text-left">
             Correo
           </th>
         </tr>
       </thead>
       <tbody>
         <tr
           v-for="item in desserts"
           :key="item.name"
         >
           <td>{{ item.Id }}</td>
           <td>{{ item.Nombre }}</td>
           <td>{{ item.Apellido }}</td>
           <td>{{ item.Direccion }}</td>
           <td>{{ item.Correo }}</td>
         </tr>
       </tbody>
     </v-table>
 
   </template>
   
   <script>
   export default {
       data () {
         return {
           desserts: [
             {
               Id: '1',
               Nombre: 'Samuel',
               Apellido: 'Gallegos',
               Direccion:'La joya',
               Correo:'sam@gmail.com',
             },
             {
               Id: '1',
               Nombre: 'Samuel',
               Apellido: 'Gallegos',
               Direccion:'La joya',
               Correo:'sam@gmail.com',
             },
             {
               Id: '1',
               Nombre: 'Samuel',
               Apellido: 'Gallegos',
               Direccion:'La joya',
               Correo:'sam@gmail.com',
             },
             {
               Id: '1',
               Nombre: 'Samuel',
               Apellido: 'Gallegos',
               Direccion:'La joya',
               Correo:'sam@gmail.com',
             },
             {
               Id: '1',
               Nombre: 'Samuel',
               Apellido: 'Gallegos',
               Direccion:'La joya',
               Correo:'sam@gmail.com',
             },
             {
               Id: '1',
               Nombre: 'Samuel',
               Apellido: 'Gallegos',
               Direccion:'La joya',
               Correo:'sam@gmail.com',
             },
             {
               Id: '1',
               Nombre: 'Samuel',
               Apellido: 'Gallegos',
               Direccion:'La joya',
               Correo:'sam@gmail.com',
             },
             {
               Id: '1',
               Nombre: 'Samuel',
               Apellido: 'Gallegos',
               Direccion:'La joya',
               Correo:'sam@gmail.com',
             },
             {
               Id: '1',
               Nombre: 'Samuel',
               Apellido: 'Gallegos',
               Direccion:'La joya',
               Correo:'sam@gmail.com',
             },
             {
               Id: '1',
               Nombre: 'Samuel',
               Apellido: 'Gallegos',
               Direccion:'La joya',
               Correo:'sam@gmail.com',
             },
           ],
         }
       },
     }
   </script>
   
   <style>
   
   
   
   </style>