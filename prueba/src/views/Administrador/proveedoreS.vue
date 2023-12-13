<template>
    <v-app>
        <v-container>
            <h1 style="margin-top: 10px; margin-bottom: 18px; margin-left: 10px;">Proveedores</h1>
    <v-row>
        <v-col style="margin-left: 100px; align-items: center;">
            <v-text-field clearable label="Buscar" style="width:200px; "></v-text-field>
        </v-col>
        <v-col style="align-items: end; align-content: center; justify-content:center;">
            <v-btn @click="onButtonClick" size="30px">
    <v-icon size="28px">mdi-plus</v-icon> 
</v-btn> 
<label style="margin-left: 10px;">Añadir Proveedor</label>
</v-col>
    </v-row>
    
    <v-row>
        <v-table  style="margin: 200px; margin-top: 50px; width: 100%;">
       <thead>
         <tr>
           
           <th class="text-left" style="align-items: center; align-content:center; justify-content:center; justify-items: center;">
             Nombre 
           </th>
           
         </tr>
       </thead>
       <tbody>
         <tr
           v-for="item in desserts"
           :key="item.name"
           
         >
           
           <td style="justify-items: center; align-content: center; align-items: center; justify-items: center;">{{ item.Nombre }}
            <v-btn style="margin-left: 450px; color: white; background-color: black;">Ver detalles</v-btn>
            <v-icon style="margin-left: 10px;">mdi-delete</v-icon>
        </td>
           
         
         </tr>
       </tbody>
     </v-table>
    </v-row>
        </v-container>
    </v-app>
    </template>

<script>
export default {
    data () {
      return {
        desserts: [
          {
            
            Nombre: 'Samuel',
           
          },
          {
            
            Nombre: 'Samuel',
           
          },
          {
           
            Nombre: 'Samuel',
            
          },
          {
            
            Nombre: 'Samuel',
            
          },
          {
            
            Nombre: 'Samuel',
            
          },
          {
            
            Nombre: 'Samuel',
           
          },
          {
            
            Nombre: 'Samuel',
            
          },
          {
            
            Nombre: 'Samuel',
          
          },
          {
            
            Nombre: 'Samuel',
            
          },
          {
            
            Nombre: 'Samuel',
            
          },
        ],
      }
    },
  }
</script>