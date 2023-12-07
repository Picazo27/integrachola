<template>
  <v-container fluid class="text-center">
    <v-card>
      <h2>Productos en la Orden</h2>
      <v-card-text>
        <v-simple-table class="align-center">
          <template v-slot:default>
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre del Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Remover</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(producto, index) in productos" :key="index">
                <td>
                  <v-img :src="producto.imagen" alt="Imagen del Producto" width="150" height="150"></v-img>
                </td>
                <td>{{ producto.nombre }}</td>
                <td>
                  <input type="number" v-model="producto.cantidad" @input="actualizarCantidad(index, producto.cantidad)">
                </td>
                <td>{{ producto.precio }}</td>
                <td>
                  <v-icon @click="removerProducto(index)">mdi-delete</v-icon>
                </td>
              </tr>
              <h3>Total:{{ totalPrecio }} </h3>
              <h3>Cantidad de Productos:{{ totalProductos }}</h3>
            </tbody>
          </template>
        </v-simple-table>
        <v-row class="text-center">
        <v-row class="mt-4">
          <v-col cols="12" sm="6">
            <v-btn color="red" block @click="limpiarCarrito">Limpiar Carrito</v-btn>
          </v-col>
          <v-col cols="12" sm="6">
            <v-btn color="grey-darken-4" block @click="irADireccionEntrega">Siguiente</v-btn>
          </v-col>
        </v-row></v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script setup>
import { useCartStore } from '@/store/carritostore.js';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const cartStore = useCartStore();
const router = useRouter();

const productos = computed(() => cartStore.items);
const totalProductos = computed(() => cartStore.count);
const totalPrecio = computed(() => cartStore.total);

const removerProducto = (index) => {
  cartStore.clearItem(productos.value[index].nombre);
};

const actualizarCantidad = (index, nuevaCantidad) => {
  cartStore.setItemCount(productos.value[index], nuevaCantidad);
};

const limpiarCarrito = () => {
  cartStore.items = [];
};

const irADireccionEntrega = () => {
  router.push({ name: 'direccion-entrega' });
};
</script>

<style>
th{
  padding-left: 10px;
}
</style>
