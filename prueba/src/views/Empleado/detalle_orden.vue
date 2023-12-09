<script>
export default {
  data: () => ({
    dialog: false,
    selectedProduct: null,
    search: '',
    headers: [
    { title:'N°Orden',text: 'ID', value: 'id' },
          { title:'Nombre',text: 'Nombre', value: 'nombre' },
          { title:'Estado',text: 'estado', value: 'estado' },
          { title: 'Editar', key: 'actions', sortable: false },
  ],
    usuarios: [],
    productosHeaders: [
      { text: 'ID', value: 'id' },
      { text: 'Nombre', value: 'nombre' },
      { text: 'Cantidad', value: 'cantidad' },
    ],
    productos: [],
    editedIndex: -1,
    editedItem: {
      id: '',
      nombre: '',
      estado: '',
    },
    defaultItem: {
      id: '',
      nombre: '',
      estado: '',
    },
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.usuarios = [
      { id: 5724, nombre: 'Juan Perez', estado: 'Enviado' },
          { id: 5725, nombre: 'Grecia Pic', estado: 'En proceso' },
          { id: 5726, nombre: 'Angel Uwu', estado: 'Recolectado' },
          { id: 5727, nombre: 'Juan Perez', estado: 'Enviado' },
          { id: 5728, nombre: 'Vic Vic', estado: 'Enviado' },
      ]
    },

    showProducts(item) {
      this.productos = [
        { id: 1, nombre: 'Producto A', cantidad: 2 },
        { id: 2, nombre: 'Producto B', cantidad: 1 },
      ];
      this.dialog = true;
    },

    showProductDetails(productos) {
      console.log("showProductDetails", productos);
    },

    closeProductDetails() {
      // Cierra la sección de detalles del producto
      this.selectedProduct = null;
    },

    editItem (item) {
      this.editedIndex = this.usuarios.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.usuarios[this.editedIndex], this.editedItem)
      } else {
        this.usuarios.push(this.editedItem)
      }
      this.close()
    },
  },
}
</script>
  
  <template>
    <v-data-table
    :headers="headers"
          :items="usuarios"
          :search="search"
          :sort-by="[{ key: 'calories', order: 'asc' }]"

    >
      <template v-slot:top>
        <v-toolbar
        style="background-color: black;" flat
        >
          <v-toolbar-title style="color: aliceblue;">Lista Ordenes de Venta</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ props }">
              <v-text-field style="color: aliceblue;" v-model="search" append-icon="mdi-magnify" label="Buscar" single-line hide-details></v-text-field>
             
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Editar Estatus</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.id"
                        label="Orden"
                        readonly
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.nombre"
                        label="Nombre"
                        readonly
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.estado"
                        label="Estatus"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="grey-darken-4"
                  variant="text"
                  type="block"
                  size="large"
                  @click="close"
                >
                  Cancelar
                </v-btn>
                <v-btn
                  color="grey-darken-4"
                  variant="text"
                  type="block"
                  size="large"
                  @click="save"
                >
                  Guardar
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card v-if="selectedProduct">
            <v-card-title>
              Detalles del Producto
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <strong>ID:</strong> {{ selectedProduct.id }}
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <strong>Nombre:</strong> {{ selectedProduct.nombre }}
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <strong>Cantidad:</strong> {{ selectedProduct.cantidad }}
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn color="grey-darken-4" type="block" siz="large" @click="closeProductDetails">Cerrar</v-btn>
            </v-card-actions>
         # </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          size="small"
          class="me-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          size="small"
          class="me-2"
          @click="showProductDetails(item)"
        >
        mdi-vector-point
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="grey-darken-4"
          size="large"
          type="block"
          @click="initialize"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
  </template>
  