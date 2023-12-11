// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',   
    component: () => import('@/views/administradoR.vue'),
    children: [
      {
        path: 'clientes',
        component: () => import( '@/views/Administrador/clienteS1.vue'),
      },
      {
        path: 'empleados',
        component: () => import ('@/views/Administrador/empleadoS.vue'),
      },
      {
        path:'proveedores',
        component: ()=> import ('@/views/Administrador/proveedoreS.vue'),
      },
      {
        path:'productos',
        component: ()=> import ('@/views/Administrador/RegistroProducto.vue'),
      },
      {
        path:'inventario',
        component: ()=> import ('@/views/Administrador/inventarIO.vue'),
      },
      {
        path:'categorias',
        component: ()=> import ('@/views/Administrador/cateGo.vue'),
      },
    ],
  },


  {
    path: '/empleados',
    component: () => import('@/views/Empleado/PricipaL.vue'),
    children: [
      {
        path: 'ordenes',
        component: () => import ('@/views/Empleado/iniciO.vue'),
      },
      {
        path:'detalle orden',
        component: ()=> import ('@/views/Empleado/detalle_orden.vue'),
      },
      {
        path:'productos',
        component: ()=> import ('@/views/Empleado/iniciO.vue'),
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
