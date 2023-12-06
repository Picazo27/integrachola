import { defineStore } from "pinia";
import { ref } from "vue";

export const useUsuarioStore = defineStore('UsuarioStore', () => {
  const usuario = ref({ usuario: {user: null,},  _token: null });
  const actividadUsuario = ref([]);
  const historialCompras = ref([]);
  const productosEnCompra = ref([]);
  const sessions = {};

  function startSession(userId) {
    const sessionId = generateUniqueId();
  
    sessions[sessionId] = {
      userId,
    };
  
    return sessionId;
  }

  function getSessionsInfo(sessionId) {
    return sessions[sessionId] || null;
  }

  const storedCompras = localStorage.getItem('historialCompras');
  if (storedCompras) {
    historialCompras.value = JSON.parse(storedCompras);
  }

    const usuarioActualId = ref(null);
    
    function setUsuarioActualId(id) {
      usuarioActualId.value = id;
    }
    function obtenerIdUsuario() {
      return usuarioActualId.value;
    }
  function closeSession() {
    window.localStorage.clear();
    usuario.value = { usuario: {email_usuario: null,},  _token: null };
    usuarioActualId.value = null;
  }

  function setUser(user) {
    window.localStorage.clear();
    let u = { ...usuario.value, ...user };
    usuario.value = u;
    actividadUsuario.value.push({ timestamp: Date.now(), accion: 'Inicio de sesion' });
  }

  function eliminarCompra(index) {
    historialCompras.value.splice(index, 1);
    localStorage.setItem('historialCompras', JSON.stringify(historialCompras.value));
  }

  function agregarCompra(compra) {
    historialCompras.value.push({ timestamp: Date.now(), compra });
    localStorage.setItem('historialCompras', JSON.stringify(historialCompras.value));
  }
  function agregarProductoEnCompra(producto) {
    productosEnCompra.value.push(producto);
  }

  function obtenerProductosEnCompra() {
    return productosEnCompra.value;
  }
  return { usuario,
    actividadUsuario,
    historialCompras,
     closeSession,
      setUser,
         agregarCompra,
          eliminarCompra,
          setUsuarioActualId,
           obtenerIdUsuario,
           startSession,
           getSessionsInfo,
          agregarProductoEnCompra,
          obtenerProductosEnCompra,
          };
}, { persist: true });


/*import { defineStore } from "pinia";
import { ref } from "vue";

export const useUsuarioStore = defineStore('UsuarioStore', () => {
    const usuario = ref({ email_usuario: null, _token: null });

    function closeSession() {
        usuario.value = { email_usuario: null, _token: null };
    }

    function setUser(user) {
        usuario.value = { ...usuario.value, ...user };
    }

    return { usuario, closeSession, setUser }
}, { persist: true });
 */