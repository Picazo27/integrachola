<template>
  <v-container style="margin-top: 100px;">
  <v-card
    class="mx-auto"
    color="grey-lighten-3"
    max-width="800"
  >
    <v-toolbar flat color="grey-darken-4">
      <v-btn icon="mdi-account" style="margin-top: 17px;"></v-btn>

      <v-toolbar-title class="font-weight-light" style="margin-top: 30px;">
      Perfil
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="isEditing = !isEditing"
      >
        <v-fade-transition leave-absolute>
          <v-icon v-if="isEditing">mdi-close</v-icon>

          <v-icon v-else>mdi-pencil</v-icon>
        </v-fade-transition>
      </v-btn>
    </v-toolbar>
<div class="usuario">
      <v-row>
        <v-col cols="12">
        <v-card-text>
       
          <v-text-field
        :disabled="!isEditing"
        base-color="grey-darken-4"
        label="Nombre"
      ></v-text-field>
      <v-text-field
        :disabled="!isEditing"
        base-color="grey-darken-4"
        label="Apellido Paterno"
      ></v-text-field>
      <v-text-field
        :disabled="!isEditing"
        base-color="grey-darken-4"
        label="Apellido Materno"
      ></v-text-field>
      <v-text-field
        :disabled="!isEditing"
        base-color="grey-darken-4"
        label="Calle"
      ></v-text-field>
      <v-text-field
        :disabled="!isEditing"
        base-color="grey-darken-4"
        label="Numero Interior o Exterior"
      ></v-text-field>
      </v-card-text>
        
          <v-card-text>
          <v-autocomplete
        :disabled="!isEditing"
        :items="states"
        :custom-filter="customFilter"
        base-color="grey-darken-4"
        item-title="name"
        item-value="abbr"
        label="Municipio"
      ></v-autocomplete>

      <v-text-field
        :disabled="!isEditing"
        base-color="grey-darken-4"
        label="Colonia"
      ></v-text-field>
      <v-text-field
        :disabled="!isEditing"
        base-color="grey-darken-4"
        label="C.P (Codigo Postal)"
      ></v-text-field>
      <v-text-field
        :disabled="!isEditing"
        base-color="grey-darken-4"
        label="Correo Electronico"
      ></v-text-field>
      <v-text-field
        :disabled="!isEditing"
        base-color="grey-darken-4"
        label="Telefono"
      ></v-text-field>
    <v-text-field
        :disabled="!isEditing"
        base-color="grey-darken-4"
        label="Contrasena"
      ></v-text-field>
          </v-card-text>
          </v-col>
        </v-row>
    <v-divider></v-divider>
  </div>
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
      block
        class="mb-8"
        size="large"
       color="grey-darken-4"
        :disabled="!isEditing"
        @click="save"
      >
        Guardar
      </v-btn>
    </v-card-actions>

    <v-snackbar
      v-model="hasSaved"
      :timeout="2000"
      attach
      position="absolute"
      location="bottom left"
    >
     Tu perfil se ha actualizado
    </v-snackbar>
  </v-card>
</v-container>
</template>
<style>
.usuario{
  justify-content: center;
  width: 800px;
}
</style>
<script>
  export default {
    data: () => ({
      hasSaved: false,
      isEditing: null,
      states: [
        { name: 'Torreon', abbr: 'TRC', id: 1 },
        { name: 'Gomez Palacio', abbr: 'GP', id: 2 },
        { name: 'Lerdo', abbr: 'LRD', id: 3 },
      
      ],
    }),

    methods: {
      customFilter (itemTitle, queryText, item) {
        const textOne = item.raw.name.toLowerCase()
        const textTwo = item.raw.abbr.toLowerCase()
        const searchText = queryText.toLowerCase()

        return textOne.indexOf(searchText) > -1 ||
          textTwo.indexOf(searchText) > -1
      },
      save () {
        this.isEditing = !this.isEditing
        this.hasSaved = true
      },
    },
  }
</script>