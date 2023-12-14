import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    productos: [],
  }),

  actions: {
    async obtenerProductos() {
      try {
        const respuesta = await axios.get('http://localhost/productos');
        this.productos = respuesta.data;
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    },

    agregarAlCarrito(producto) {
      const carritoStore = useCartStore(); // Asegúrate de importar y utilizar la tienda de carrito aquí
      carritoStore.agregarItems(1, producto);
      window.alert(`¡Has agregado ${producto.nombre} a tu carrito!`);
    },
  },
});
