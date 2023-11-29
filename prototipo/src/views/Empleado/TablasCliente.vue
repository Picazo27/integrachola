<template>
  <v-container>
    <v-text-field label="Buscar" variant="outlined" v-model="search">

    </v-text-field>
  <v-data-table-virtual
    :search="search"
    :headers="headers"
    :items="virtualBoats"
    height="400"
    item-value="name"
  ></v-data-table-virtual>
</v-container>
  
</template>
<script>
  export default {
    data () {
      return {
        search:'',
        headers: [
          { title: 'Nombre', align: 'start', key: 'name' },
          { title: 'Apellido', align: 'end', key: 'Apellido' },
          { title: 'Direccion', align: 'end', key: 'Direccion' },
          {title:'Telefono', align:'end', key:'Telefono'},
          { title: 'Correo Electronico', align: 'end', key: 'Correo' },
        ],
        boats: [
          {
            name: 'Yoshua',
            Apellido: 'Rios',
            Telefono: 871238178,
            Dirrecion: 'Av.Huelguistas de cananea',
            Correo: 'yoshua@gmail.com',
          },
          {
            name: 'David',
            Apellido: 25,
            Telefono: 35,
            Direccion: 500000,
            Correo: 2020,
          },
          {
            name: 'Voyager',
            speed: 20,
            length: 45,
            price: 700000,
            year: 2019,
          },
          {
            name: 'WaveRunner',
            speed: 40,
            length: 19,
            price: 250000,
            year: 2022,
          },
          {
            name: 'SeaBreeze',
            speed: 28,
            length: 31,
            price: 450000,
            year: 2018,
          },
          {
            name: 'HarborGuard',
            speed: 18,
            length: 50,
            price: 800000,
            year: 2017,
          },
          {
            name: 'SlickFin',
            speed: 33,
            length: 24,
            price: 350000,
            year: 2021,
          },
          {
            name: 'StormBreaker',
            speed: 22,
            length: 38,
            price: 600000,
            year: 2020,
          },
          {
            name: 'WindSail',
            speed: 15,
            length: 55,
            price: 900000,
            year: 2019,
          },
          {
            name: 'FastTide',
            speed: 37,
            length: 20,
            price: 280000,
            year: 2022,
          },
        ],
      }
    },

    computed: {
      virtualBoats () {
        return [...Array(50).keys()].map(i => {
          const boat = { ...this.boats[i % this.boats.length] }
          boat.name = `${boat.name} #${i}`
          return boat
        })
      },
    },
  }
</script>