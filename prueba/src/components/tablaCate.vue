<template>


    <v-table theme="dark">
        <thead>
          <tr class="text-center">
            <th class="text-center">
                <v-select style="width:180px; height:90px;"
                  class="lista" 
                  clearable
                  label="Select"
                  :items="['Categoria1', 'Categoria2', 'Categoria3', 'Categoria4', 'Categoria5', 'Categoria6']">
                </v-select>
            </th>
            <th class="text-center">
              Productos
            </th>
          </tr>
        </thead>
        
        <tbody>
  
          <tr style="justify-content: center; justify-items: center; align-items: center; align-content: center;"
             class="text-center"
             v-for="item in desserts"
             :key="item.name">
             <td>{{ item.Categoria }}</td>
             <td>{{ item.Productos }}  <v-icon style="margin-left: 70px;">mdi-delete</v-icon>
          </td>
             
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
                Categoria: 'cate1',
                Productos:'12', 
              },
              {
                Categoria: 'cate1',
                Productos:'12', 
              },
              {
                Categoria: 'cate1',
                Productos:'12', 
              },
              {
                Categoria: 'cate1',
                Productos:'12', 
              },
              {
                Categoria: 'cate1',
                Productos:'12', 
              },
              {
                Categoria: 'cate1',
                Productos:'12', 
              },
             
            ],
          }
        },
      }
    </script>
   
    
  
    <style>
  
  .v-table{
    align-content: center;
    justify-content: center;
    width: 70%;
    height: 300px;
  }
  
  .tr{
    justify-content: center;
    align-content: center;
    text-align: center;
  }
  .td{
    justify-content: center;
    align-content: center;
    text-align: center;
  }
  
  </style>