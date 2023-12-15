<template>
    <v-container>
      <!-- Mini buscador -->
      <v-text-field v-model="busqueda" label="Buscar" outlined></v-text-field>
  
      <!-- Tabla de productos -->
      <v-data-table :headers="headers" :items="productos" :search="busqueda" class="elevation-1" style="width: 85%;">
        <template v-slot:items="props">
          <td>{{ props.item.producto }}</td>
          <td>{{ props.item.categoria }}</td>
          <td>{{ props.item.existencias }}</td>
          <td>{{ props.item.proveedor }}</td>
          <td>{{ props.item.precio }}</td>
        </template>
      </v-data-table>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        busqueda: "",
        headers: [
          { text: "Producto", value: "producto" },
          { text: "Categoría", value: "categoria" },
          { text: "Existencias", value: "existencias" },
          { text: "Proveedor", value: "proveedor" },
          { text: "Precio", value: "precio" },
        ],
        productos: [
          { producto: "Producto A", categoria: "Electrónicos", existencias: 20, proveedor: "Proveedor X", precio: "$50.00" },
          { producto: "Producto B", categoria: "Ropa", existencias: 30, proveedor: "Proveedor Y", precio: "$25.00" },
          // Agrega más productos según sea necesario
        ],
      };
    },
  };
  </script>

  <style>

.v-data-table{
    width: 90%;
}

.v-data-table-footer{
  justify-content: center;
}

.v-text-field{
    width: 50%;
}

</style>
  