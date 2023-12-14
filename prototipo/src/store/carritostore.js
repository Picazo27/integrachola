import { defineStore } from 'pinia';
import { groupBy } from 'lodash';
import axios from 'axios';

export const useCartStore = defineStore('CartStore', {
  state: () => ({
    items: [],
    totalProductos: 0,
  }),

  getters: {
    contar: (state) => {
      const productosContados = state.items.reduce((conteo, producto) => {
        return conteo + producto.cantidad;
      }, 0);
      return productosContados;
    },
    estaVacio: (state) => state.contar === 0,

    agrupados: (state) => {
      const agrupados = groupBy(state.items, (producto) => producto.nombre);
      const ordenados = Object.keys(agrupados).sort();
      let enOrden = {};
      ordenados.forEach((key) => (enOrden[key] = agrupados[key]));
      return enOrden;
    },

    cantidadGrupo: (state) => (nombre) => state.agrupados[nombre]?.length || 0,

    total: (state) => {
      return state.items.reduce((total, producto) => {
        return total + producto.precio * producto.cantidad; // Calcular el precio total por pieza por cantidad
      }, 0);
    },
  },

  actions: {
    checkout() {
      const authUserStore = useAuthUserStore();
      alert(`
        ${authUserStore.username} acaba de comprar ${this.contar} productos por un total de $${this.total}
      `);
    },

    agregarProductos(cantidad, producto) {
      const productoExistente = this.items.find((item) => item.nombre === producto.nombre);

      if (productoExistente) {
        productoExistente.cantidad += cantidad;
      } else {
        // Añadir el nuevo producto con su cantidad
        this.items.push({ ...producto, cantidad: cantidad });
      }
    },
    
    limpiarProducto(nombreProducto) {
      this.items = this.items.filter((producto) => producto.nombre !== nombreProducto);
    },

    establecerCantidadProducto(producto, cantidad) {
      this.limpiarProducto(producto.nombre);
      this.agregarProductos(cantidad, producto);
    },

    async obtenerYAgregarProductosDesdeAPI() {
      try {
        const respuesta = await axios.get('http://localhost/productos');
        const productosDesdeAPI = respuesta.data;

        // Agregar los productos obtenidos al carrito utilizando el método agregarProductos
        productosDesdeAPI.forEach((producto) => {
          this.agregarProductos(1, producto);
        });

        // Puedes realizar más acciones aquí, como actualizar el estado o notificar al usuario
      } catch (error) {
        console.error('Error al obtener productos desde la API:', error);
      }
    },

    async obtenerProductosDesdeAPI() {
      try {
        const respuesta = await axios.get('http://localhost/mostrarProducto');
        const productosDesdeAPI = respuesta.data;

        // Actualizar el estado del carrito con los productos obtenidos
        productosDesdeAPI.forEach((producto) => {
          this.agregarProductos(1, producto);
        });

        // Más acciones aquí si es necesario

      } catch (error) {
        console.error('Error al obtener productos desde la API:', error);
      }
    },

    // Método para agregar un producto al carrito mediante la API
    async agregarProductoAlCarrito(producto) {
      try {
        await axios.post('https:localhost/Insertarproducto', producto);
        // Actualizar el estado del carrito o realizar otras acciones si es necesario
      } catch (error) {
        console.error('Error al agregar el producto al carrito:', error);
      }
    },
  },
});
