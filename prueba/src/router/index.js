// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/Administracion',
    component: () => import('@/views/administradoR.vue'),
    children: [
      {
        path: 'clientes',
        component: () => import( '@/views/Administrador/clienteS.vue'),
      },

      {
        path: 'empleados',
        component: () => import ('@/views/Administrador/clienteS1.vue'),
      },
      {
        path:'proveedores',
        component: ()=> import ('@/views/Administrador/clienteS1.vue'),
      },
      {
        path:'productos',
        component: ()=> import ('@/views/Administrador/ProductoCategoria.vue'),
      },
      {
        path:'inventario',
        component: ()=> import ('@/views/Adminsitrador/clienteS1.vue'),
      },
      {
        path:'entradas',
        component: ()=> import ('@/views/Administrador/clienteS1.vue'),
      },
      {
        path:'salidas',
        component: ()=> import ('@/views/Administrador/clienteS1.vue'),
      },
      {
        path:'categorias',
        component: ()=> import ('@/views/Administrador/cateGo.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/views/Empleado/PricipaL.vue'),
    children: [
      {
        path:'',
        redirect: 'inicio'
      },
      {
        path: 'inicio',
        component: () => import( '@/views/Empleado/ListaOrdenesdeVenta.vue'),
      },

      {
        path: 'ordenes',
        component: () => import ('@/views/Empleado/detalle_orden.vue'),
      },
      {
        path:'detalle orden',
        component: ()=> import ('@/views/Empleado/TablasCliente.vue'),
      },
      {
        path:'clientes',
        component: ()=> import ('@/views/Empleado/ClientE.vue'),
      },
      {
        path:'productos',
        component: ()=> import ('@/views/Empleado/DetalleProducto.vue'),
      },
      {
        path:'detalle producto',
        component: ()=> import ('@/views/Empleado/DetalleProducto.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
