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
              <div class="text-overline mb-4">
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
    <br>
    <hr>
  <br>
  <br>
    <div class="mb-6">
      <v-row>
        <v-col cols="4">
          <v-card-item>
            <v-img src="~@/assets/logoofer.png" height="200"></v-img>
            <v-card-title primary-title >
              <div>
                <h3>LOS MEJORES PRECIOS</h3>
                <p>Te ofrecemos los precios más competitivos online</p>
               
              </div>
            </v-card-title>
            <v-card-text>
            </v-card-text>
          </v-card-item>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-img src="~@/assets/logoc.png" height="200"></v-img>
            <v-card-title primary-title>
              <div>
                <h3>COMPRA EN PICAZO GYM</h3>
                <p>Y recibe una gran experiencia de compra</p>

              </div>
            </v-card-title>
            <v-card-text>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-img src="~@/assets/logoen.png" height="200"></v-img>
            <v-card-title primary-title>
              <div>
                <h3>ENVÍOS MÁS RÁPIDOS</h3>
                <p>Recibe tus suplementos de forma rápida y segura</p>
              </div>
            </v-card-title>
            <v-card-text>
       </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <br>
      
      <h1 class="red">Suplementos Para Gym</h1>
      <h2 class="ce">Contamos con una amplia variedad de suplementos deportivos para mejorar tu rendimiento físico tanto en el gym como en tu vida diaria. Ya sea que tu objetivo sea: mejorar tu rendimiento físico, aumentar tu masa muscular o seguir una dieta saludable para bajar de peso, aquí encontrarás los suplementos y vitaminas de la mas alta calidad en el mercado.</h2>    
      </div>
      <hr>
      <br>
      <v-row>
  <v-col cols="8" >
    <h1 class="red">Proteinas</h1>
    <v-row>
      <v-col cols="6">
        <h2>El consumo de proteína ayuda a los atletas a mejorar su rendimiento físico durante los entrenamientos o sesiones de ejercicio intenso. En nuestra tienda podrás encontrar una amplia variedad de suplementos de proteínas, desde proteína de suero hasta proteína de soja. Visíta nuestra Categoría de Proteínas</h2>
      </v-col>
      <v-col cols="6">
        <v-img src="https://whey.cl/wp-content/uploads/2020/11/cual-es-la-mejor-proteina-para-ganar-masa-muscular-sin-engordar-1.png"></v-img>
      </v-col>
    </v-row>
  </v-col>
  </v-row>

  <v-row>
    <v-col cols="8">
<h1 class="red">Creatinas</h1>
<v-row>
  <v-col cols="6">
    <h2>Los suplementos de Monohidrato de Creatina también ayudan a incrementar tu rendimiento deportivo, especialmente si practicas deportes de fuerza. Además un beneficio adicional de la suplementación con creatina es que te ayudará a mejorar la ganancia de masa corporal sin causar efectos secundarios adversos.</h2>
  </v-col>
  <v-col cols="6">
    <v-img src="https://www.herbalife.com.pe/content/dam/regional/samcam/es_pe/sites/herbalife_nutrition/web_graphic/editorial/2022/05-may/Cuanta_proteina_debes_consumir_y_con_que_frecuencia.jpg"></v-img>
  </v-col>
</v-row>
    </v-col>
  </v-row>

<v-row>
<v-col cols="8">
  <h1 class="red">Aminoacidos</h1>
<v-row>
  <v-col cols="6">
    <h2>La ingesta de suplementos de aminoácidos ayudan a la recuperación de los músculos después de las sesiones de ejercicio físico o de un entrenamiento de fuerza. La suplementación deportiva con éste tipo de productos también incrementa el rendimiento físico dado que el perfil de aminoácidos potencia el incremento muscular. </h2>
  </v-col>
  <v-col cols="6">
    <v-img src="https://mui.fitness/__export/1675972656166/sites/muifitness/img/2023/02/09/young-man-preparing-his-protein-drink-royalty-free-image-618752694-1546431880.jpg_1223424624.jpg"></v-img>
  </v-col>
</v-row>
</v-col>
</v-row>

<v-row>
  <v-col cols="8">
    <h1 class="red">Ganadores de Peso</h1>
<v-row>
  <v-col cols="6">
    <h2>Los ganadores de pesos son suplementos específicamente diseñados para proporcionar a la persona los macronutrientes, minerales, carbohidratos y la concentrarción de proteína necesaria para fomentar la ganancia de peso. Además un suplemento ganador de peso puede ayudar a contrarestar la pérdida de masa muscular generada por ejercicios cardiovasculares.</h2>
  </v-col>
  <v-col cols="6">
    <v-img src="https://whey.cl/wp-content/uploads/2020/11/cual-es-la-mejor-proteina-para-ganar-masa-muscular-sin-engordar-1.png"></v-img>
  </v-col>
</v-row>
  </v-col>
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
    },
  ];
  const promociones = [
    {
      variant:'outlined',
      title:'¿PORQUÉ COMPRAR EN PICAZO GYM?',
      image:'~@/assets/logoofer.png'
    },
    {
      variant:'outlined',
      title:'LOS MEJORES PRECIOS',
      image:'~@/assets/logoc.png'
    },
    {
      variant:'outlined',
      title:'ENVÍOS MÁS RÁPIDOS',
      image:'~@/assets/logoen.png'
    }
  ]
</script>
