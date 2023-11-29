<template>


    <v-table theme="dark">
        <thead>
          <tr>
            <th class="text-center">
                <v-select style="width: auto; height: auto;"
                  class="lista" 
                  label="Select"
                  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']">
                </v-select>
            </th>
            <th class="text-center">
              Productos
            </th>
          </tr>
        </thead>
        
        <tbody>
  
          <tr
             v-for="item in desserts"
             :key="item.name">
             <td>{{ item.Categoria }}</td>
             <td>{{ item.Productos }}</td>
             
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