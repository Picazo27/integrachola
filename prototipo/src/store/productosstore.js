import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
  }),

  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost/productos');
        this.products = response.data;
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    },

    addToCart(product) {
      const cartStore = useCartStore(); // Asegúrate de importar y usar la tienda de carrito aquí
      cartStore.addItems(1, product);
      window.alert(`¡Has agregado ${product.name} a tu carrito!`);
    },
  },
});
