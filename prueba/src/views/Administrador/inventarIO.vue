<template>
<v-app>
    <v-conatiner>
        <h1 style="margin-top: 10px; margin-bottom: 18px; margin-left: 40px;">Proveedores</h1>

        <v-row>
         <v-col style="justify-content: center; align-content: center; margin-left: 70px;">
            <v-text-field clearable label="Buscar" style="width:200px; "></v-text-field>
         </v-col>
         <v-col>
            
    <v-btn  size="30px">
    <v-icon size="28px">mdi-plus</v-icon>
</v-btn> 
    <lalbel style="margin-left: 20px;">Añadir Producto</lalbel>
         </v-col>
         
        </v-row>
        <v-table fixed-header density="compact" style="margin: 200px; margin-top: 50px; width: 100%;">
       <thead>
         <tr>
           
           <th class="text-left">
             Nombre 
           </th>
           
         </tr>
       </thead>
       <tbody>
         <tr
           v-for="item in desserts"
           :key="item.name"
           
         >
           
           <td>{{ item.Nombre }}
            <v-btn style="margin-left: 480px; color: white; background-color: black;">Ver detalles</v-btn>
            <v-icon style="margin-left: 25px;">mdi-delete</v-icon>
        </td>
           
         
         </tr>
       </tbody>
     </v-table>
        <v-row>
            
        </v-row>
    </v-conatiner>
</v-app>
</template>

<script setup>


</script>