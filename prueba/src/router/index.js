// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/administradoR.vue'),
    children: [
      {
        path: 'clientes',
        component: () => import( '@/views/clienteS.vue'),
      },

      {
        path: 'empleados',
        component: () => import ('@/views/clienteS1.vue'),
      },
      {
        path:'proveedores',
        component: ()=> import ('@/views/clienteS1.vue'),
      },
      {
        path:'productos',
        component: ()=> import ('@/views/ProductoCategoria.vue'),
      },
      {
        path:'inventario',
        component: ()=> import ('@/views/clienteS1.vue'),
      },
      {
        path:'entradas',
        component: ()=> import ('@/views/clienteS1.vue'),
      },
      {
        path:'salidas',
        component: ()=> import ('@/views/clienteS1.vue'),
      },
      {
        path:'categorias',
        component: ()=> import ('@/views/cateGo.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
