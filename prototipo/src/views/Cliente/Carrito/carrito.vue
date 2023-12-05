<template>
  <v-container class="d-flex justify-center align-center" fluid>
    <v-card style="width:700px; height: 700px;">
      <v-card-title>
        Productos en la Orden
      </v-card-title>
      <v-card-text>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr class="lista">
                <th>Imagen</th>
                <th>Nombre del Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <br>
                <th>Remover</th>
              </tr>
            </thead>
            <tbody>
              <tr class="lista" v-for="(producto, index) in productos" :key="index">
                <td>
                  <img  class="carritoimg" :src="producto.imagen" alt="Imagen del Producto" width="50" height="50">
                </td>
                <td>{{ producto.nombre }}</td>
                <td>
                  <input type="number" v-model="producto.cantidad" @input="actualizarCantidad(index)">
                </td>
                <td>{{ producto.precio }}</td>
                <td>
                  <v-icon @click="removerProducto(index)">mdi-delete</v-icon>
                </td>
              </tr>
              <br>
             
              <td>
                <th>SubTotal:</th>
                <br>
                <th>Total:</th>
                <router-link :to="{name:'direccion-entrega'}">
        <v-btn type="block" color="grey-darken-4" size="large">Siguiente</v-btn>
      </router-link>
              </td>

            </tbody>
            
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<style>
th td{
  height: 100px; 
 width: 200px; 
}
.carritoimg{
  width: 200px;
  height: 200px;
}

</style>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { RouterLink, RouterView } from 'vue-router'      

const router = useRouter();

const productos = ref([
  { imagen: 'https://www.43supplements.com/wp-content/uploads/2016/12/s16.jpg', nombre: 'Proteina', cantidad: 1, precio: 10.0 },
  { imagen: 'https://www.43supplements.com/wp-content/uploads/2023/08/CREATINA-350-GR-1-scaled-e1692037467193.jpg', nombre: 'Creatina', cantidad: 2, precio: 20.0 },
]);

const removerProducto = (index) => {
  productos.value.splice(index, 1);
};
const agregarProductoAlCarrito = (producto) => {
  carritoStore.agregarProducto(producto);
};
const carritoStore = useCarritoStore();

const actualizarCantidad = (index) => {
};

const irADireccionEntrega = () => {
  router.push({ name: 'direccion-entrega' });
}
</script>
