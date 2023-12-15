<template>
    <v-app>
      <v-container>
        <h1 style="margin-bottom: 18px; margin-left: 45px;">Tabla de Categorías y Productos</h1>
  
        <v-row>
          <v-col>
            <v-card>
              <v-card-text>
                <v-data-table
                  :headers="headers"
                  :items="data"
                  :items-per-page="5"
                  class="elevation-1"
                >
                  <template v-slot:item="{ item }">
                    <tr>
                      <td>{{ item.categoria }}</td>
                      <td>{{ item.productos }}</td>
                      <td>
                        <v-icon @click="eliminarCategoria(item.id)">mdi-delete</v-icon>
                      </td>
                    </tr>
                  </template>
                </v-data-table>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script>
export default {
  data() {
    return {
      empleados: [] // Inicializar el array de empleados vacío
    };
  },
  mounted() {
    // Llamar a la función para obtener y mostrar los datos al cargar el componente
    this.obtenerEmpleadosDeAPI();
  },
  methods: {
    async obtenerEmpleadosDeAPI() {
      try {
        // Reemplazar la URL con la de tu API
        const apiUrl = 'https://ejemplo.com/api/empleados';
        const respuesta = await fetch(apiUrl);

        if (respuesta.ok) {
          // Convertir la respuesta a formato JSON
          const empleados = await respuesta.json();

          // Asignar los empleados al array 'empleados'
          this.empleados = empleados;
        } else {
          console.error('Error al obtener los datos de la API');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    }
  }
};
</script>
  