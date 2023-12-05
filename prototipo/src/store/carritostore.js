import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCarritoStore = defineStore({
  id: 'carrito',
  state: () => ({
    productos: ref([]),
  }),
  actions: {
    agregarProducto(producto) {
      this.productos.value.push(producto);
    },
    removerProducto(index) {
      this.productos.value.splice(index, 1);
    },
    actualizarCantidad(index, nuevaCantidad) {
      this.productos.value[index].cantidad = nuevaCantidad;
    },
    limpiarCarrito() {
      this.productos.value = [];
    },
  },
});
