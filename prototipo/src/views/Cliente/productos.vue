<template>
  <v-container>
    <h1>Productos Destacados</h1>
    <br>
    <v-row align="center" justify="center">
      <v-col
        v-for="(product, index) in products"
        :key="index"
        cols="auto"
      >
        <v-card
          class="mx-auto"
          max-width="344"
          :variant="product.variant"
        >
          <v-card-item>
            <div>
              <div class="text-overline mb-1">
                {{ product.variant }}
              </div>
              <div class="text-h6 mb-1">
                {{ product.title }}
              </div>
              <div class="producto"><img :src="product.image"></div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-btn>
              Agregar al Carrito
            </v-btn>
            <input type="number">
          </v-card-actions>
        </v-card>
      </v-col>
      <h1 class="red">¿PORQUÉ COMPRAR EN PICAZO GYM?</h1>
<h2 class="ce">Contamos con una amplia variedad de suplementos deportivos en México. Además tienes la opción de pagar tu pedido en cuando recojas en tienda o se te entregue en tu domicilio, contamos con terminal. El proceso de  pedido es muy sencillo y seguro ¡Pruébalo!</h2>

    </v-row>
  </v-container>
</template>

<style>
 img{
  width: 750px;
  height: 300px;
 }
 .red{
  color:#B71C1C;
  text-align: center;
 }
  h1 {
    text-align: center;
  }
  .ce{
    text-align: center;
  }

  input {
    height: 30px;
    width: 70px;
    margin: 20px;
  }
</style>

<script setup>
  const products = [
    {
      variant: 'outlined',
      title: 'Creatina',
      image: 'https://proteinpalacemx.com/cdn/shop/products/META_NUTRITION_CREATINE_100_SERVICIOS_5G_proteinpalacemx_2_900x.jpg?v=1662403840'
    },
    {
      variant: 'outlined',
      title: 'Proteína en Polvo',
      image: 'https://www.43supplements.com/wp-content/uploads/2022/09/Vainilla.jpg'
    },
    {
      variant:'outlined',
      title: 'Pre entreno',
      image: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/09245e09-b13a-47e9-9e69-efdfc2e5fa4d.cf0f70e63c38cdfb5a2fdf9fa7bc59c5.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff'
    },
    {
      variant:'outlined',
      title:'Aminoacidos',
      image: 'https://i0.wp.com/www.fitstore.com.mx/wp-content/uploads/2022/01/2264us_mutant_bcaa_9.7_tropical_mango_flavor_363_g_12.8_oz_v1.00-ms-1.png?fit=500%2C600&ssl=1'
    }
  ];
</script>
