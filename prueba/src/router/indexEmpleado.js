// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Empleado/PrincipaL.vue'),
    children: [
      {
        path: 'inicio',
        component: () => import( '@/views/Empleado/detalle_orden.vue'),
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
