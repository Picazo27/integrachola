<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          title: 'Nombre Proveedor',
          align: 'start',
          sortable: false,
          key: 'name',
        },
        {
          title: 'Calle',
          key: 'street',
          sortable: false,},
          {
            title: 'Colonia',
            key: 'colony',
            sortable: false,
          },
          {
            title:'C.P',
            key:'postalCode',
            sortable:false,
          },
          {
            title:'Ciudad',
            key:'city',
            sortable:false,
          },
          {
            title:'Telefono',
            key:'phone',
            sortable:false,
          },
          {
            title:'Correo Electronico',
            key:'email',
            sortable:false,
          },
        { title: 'Acciones ', key: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      defaultItem: {
  name: '',
  calories: 0,
  fat: 0,
  carbs: 0,
  protein: 0,
  street: '',
  colony: '',
  postalCode: '',
  city: '',
  phone: '',
  email: '',
},
editedItem: {
  name: '',
  calories: 0,
  fat: 0,
  carbs: 0,
  protein: 0,
  street: '',
  colony: '',
  postalCode: '',
  city: '',
  phone: '',
  email: '',
},

    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo Provedor' : 'Editar Proveedor'
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
        this.desserts = [
          
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
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
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>
<template>
    <div class="d1" > Proveedores</div>
    
  <v-data-table
    :headers="headers"
    :items="desserts"
    :sort-by="[{ key: 'calories', order: 'asc' }]"
  >
    <template v-slot:top>
    <v-toolbar
        flat
    >
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
            <v-btn
              color="grey-darken-4"
              
              class="mb-2"
              v-bind="props"
              width="auto"
            >
              Agregar Proveedor
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="10"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Nombre De Proveedor"
                    ></v-text-field>
                    <v-text-field
                    v-model="editedItem.street"
                     label="Calle"
                     ></v-text-field>
                     <v-text-field
                      v-model="editedItem.colony"
                      label="Colonia"></v-text-field>
                      <v-text-field
                      v-model="editedItem.postalCode"
                      label="C.P."
                      ></v-text-field>
                      <v-text-field
                      v-model="editedItem.city"
                      label="Ciudad"
                      ></v-text-field>
                      <v-text-field
                      v-model="editedItem.phone"
                      label="Teléfono"></v-text-field>
                      <v-text-field v-model="editedItem.email"
                      label="Correo"></v-text-field>

                    
                  </v-col>
                  
                  
                  
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="grey-darken-4"
                variant="text"
                @click="close"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="grey-darken-4"
                variant="text"
                @click="save"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">¿Estas seguro de eliminar este campo?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="grey-darken-4" variant="text" @click="closeDelete">Cancelar</v-btn>
              <v-btn color="gey-darken-4" variant="text" @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
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
        @click="deleteItem(item)"
        
      >
        mdi-delete
      </v-icon>
      <v-btn variant="text"> Informacion  </v-btn>
    </template>
    <template v-slot:no-data>
      
    </template>
  </v-data-table>
</template>
<style> 
.d1{
    font-size: xx-large;
    display: flex;
    direction: columns;
    justify-content: left;

}
</style>