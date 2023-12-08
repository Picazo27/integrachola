import { defineStore } from 'pinia';
import { groupBy } from 'lodash';

export const useCartStore = defineStore('CartStore', {
  state: () => ({
    items: [],
    totalProducts: 0,
  }),

  getters: {
    count: (state) => {
      const countedProducts = state.items.reduce((count, producto) => {
        return count + producto.cantidad;
      }, 0);
      return countedProducts;
    },
    isEmpty: (state) => state.count === 0,

    grouped: (state) => {
      const grouped = groupBy(state.items, (producto) => producto.nombre);
      const sorted = Object.keys(grouped).sort();
      let inOrder = {};
      sorted.forEach((key) => (inOrder[key] = grouped[key]));
      return inOrder;
    },

    groupCount: (state) => (nombre) => state.grouped[nombre]?.length || 0,

    total: (state) => {
      return state.items.reduce((total, producto) => {
        return total + producto.precio * producto.cantidad; // Calcular precio total por pieza por cantidad
      }, 0);
    },
  },

  actions: {
    checkout() {
      const authUserStore = useAuthUserStore();
      alert(`
        ${authUserStore.username} just bought ${this.count} items at a total of $${this.total}
      `);
    },

    addItems(count, producto) {
  const existingProduct = this.items.find((item) => item.nombre === producto.nombre);

  if (existingProduct) {
    existingProduct.cantidad += count;
  } else {
    // Añadir el nuevo producto con su cantidad
    this.items.push({ ...producto, cantidad: count });
  }
},
    clearItem(nombreProducto) {
      this.items = this.items.filter((producto) => producto.nombre !== nombreProducto);
    },

    setItemCount(producto, count) {
      this.clearItem(producto.nombre);
      this.addItems(count, producto);
    },
    
  },
});
