// Composables
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  
  {
    path: '/',
    component: () => import('../views/Cliente/menu.vue'), 
    children: [
      {
        path: 'productos',
        component: () => import('../views/Cliente/productos.vue'),
      },
      {
        path: 'suplementos',
        component: () => import('../views/Cliente/productos.vue'),
      },
      {
        path: 'proteinas',
        component: () => import('../views/Cliente/proteinas.vue'),
      },
      {
        path: 'creatinas',
        component: () => import('../views/Cliente/creatinas.vue'),
      },
      {
        path: 'iniciosesion',
        component: () => import('../views/Cliente/iniciosesion.vue'),
      },
      {
        path: 'registro',
        component: () => import('../views/Cliente/registro.vue'),
      },
      {
        path: 'perfil',
        component: () => import('../views/Cliente/usuario.vue'),
      },
      {
        path: 'carrito',
        name: 'carrito',
        component: () => import('../views/Cliente/Carrito/carrito.vue'),
      },
      {
            path: 'direccion-entrega',
            name: 'direccion-entrega',
            component: () => import('../views/Cliente/Carrito/dirreccion.vue'),
      },
      {
            path: 'metodopago',
            name: 'metodopago',
            component: () => import('../views/Cliente/Carrito/metodopago.vue'),
      },
      {
        path:'Administracion',
        name:'Administracion',
        component: () => import('../views/Empleado/BarraAdmin.vue'),
      },
      {
        path:'Cliente',
        name:'Cliente',
        component: ()=>  import('../views/Empleado/Cliente.vue')
      },
      {
        path:'Detalle_contacto',
        name:'Detalle_contacto',
        component: ()=> import('../views/Empleado/Detalle_contacto.vue')
      },
      {
        path:'Detalle_orden',
        name:'Detalle_orden',
        component: ()=> import('../views/Empleado/detalle_orden.vue')
      },
      {
        path:'Detalle_producto',
        name:'Detalle_producto',
        component:()=> import('../views/Empleado/DetalleProducto.vue')
      },
      {
        path:'Tablas_cliente',
        name:'Tablas_cliente',
        component:()=> import('../views/Empleado/TablasCliente.vue')
      }
      
      
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
