<template>
  <v-app>
    <v-container>
      <!-- Order Details Card -->
      <v-card>
        <v-card-title class="headline">Detalles de la Orden</v-card-title>
        <v-row>
          <v-col v-for="(value, key) in orderDetails" :key="key" cols="12" md="6">
            <v-subheader>{{ key }}</v-subheader>
            <div>{{ value }}</div>
          </v-col>
        </v-row>
      </v-card>

      <!-- Order Items Table -->
      <v-card>
        <v-card-title class="headline">Detalles de los Productos</v-card-title>
        <v-data-table :headers="headers" :items="orderItems"></v-data-table>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      orderDetails: {
        Orden: '12345',
        'Fecha de Orden': '2023-01-01',
        'Hora Estimada': '14:00',
        Cliente: 'John Doe',
        Direccion: '123 Main St, City',
        Estado: 'En Proceso',
        'Tipo de Entrega': 'Express',
        Total: '$100.00',
        'Forma de Pago': 'Tarjeta de Crédito',
      },
      headers: [
        { text: 'Producto', value: 'producto' },
        { text: 'Precio', value: 'precio' },
        { text: 'Cantidad', value: 'cantidad' },
        { text: 'Subtotal', value: 'subtotal' },
      ],
      orderItems: [
        { producto: 'Producto A', precio: '$20.00', cantidad: 2, subtotal: '$40.00' },
        { producto: 'Producto B', precio: '$25.00', cantidad: 3, subtotal: '$75.00' },
        // Agrega más ítems según sea necesario
      ],
    };
  },
};
</script>
