<template>
  <v-container>
    <!-- Tarjeta de texto -->
    <v-card style="text-align: center;">
      <v-card-title>Información de la Orden</v-card-title>
      <v-card-text style="justify-content: center; justify-items: center; align-items: center; align-content: center;">
        <v-row style="justify-content: center;">
          <v-col cols="12" md="6">
            <v-row>
              <v-col cols="12">
                <strong>Orden:</strong> {{ orden }}
              </v-col>
              <v-col cols="12">
                <strong>Fecha de Orden:</strong> {{ fechaOrden }}
              </v-col>
              <v-col cols="12">
                <strong>Hora de Orden:</strong> {{ horaOrden }}
              </v-col>
              <v-col cols="12">
                <strong>Hora Estimada:</strong> {{ horaEstimada }}
              </v-col>
              <v-col cols="12">
                <strong>Cliente:</strong> {{ cliente }}
              </v-col>
              <v-col cols="12">
                <strong>Dirección:</strong> {{ direccion }}
              </v-col>
              <v-col cols="12">
                <strong>Estado:</strong> {{ estado }}
              </v-col>
              <v-col cols="12">
                <strong>Tipo de Entrega:</strong> {{ tipoEntrega }}
              </v-col>
              <v-col cols="12">
                <strong>Total:</strong> {{ total }}
              </v-col>
              <v-col cols="12">
                <strong>Forma de Pago:</strong> {{ formaPago }}
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Tabla de productos -->
    <v-data-table :items="productos" class="elevation-1" style="margin-top: 40px; width:90%;">
      <template v-slot:items="props">
        <td>{{ props.item.producto }}</td>
        <td>{{ props.item.precio }}</td>
        <td>{{ props.item.cantidad }}</td>
        <td>{{ props.item.subtotal }}</td>
      </template>
      <template v-slot:footer="props">
        <td colspan="3">Total</td>
        <td>{{ props.footer.total }}</td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      orden: "12345",
      fechaOrden: "2023-01-01",
      horaOrden: "12:00 PM",
      horaEstimada: "1:00 PM",
      cliente: "Juan Pérez",
      direccion: "Calle 123, Ciudad",
      estado: "En Proceso",
      tipoEntrega: "Domicilio",
      total: "$100.00",
      formaPago: "Tarjeta de Crédito",
      productos: [
        { producto: "Producto 1", precio: "$20.00", cantidad: 2, subtotal: "$40.00" },
        { producto: "Producto 2", precio: "$30.00", cantidad: 1, subtotal: "$30.00" },
        // Agrega más productos según sea necesario
      ],
    };
  },
};
</script>

<style>

.v-data-table-footer{
  justify-content: center;
}
.v-table__wrapper{
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
}
.td{
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
}
.tbody{
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
}

</style>
