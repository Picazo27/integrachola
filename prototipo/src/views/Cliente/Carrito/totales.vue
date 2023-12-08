<template>
    <v-container style="margin-top: 80px;">  
        <h1 style="margin-top: 30px;">Suplementos</h1>
        <v-combobox v-model="Suplementos"
              label="Suplementos"
              :items="['Proteina','Creatina','Proteina en Polvo','Pre-entreno','Aminoacidos']"
              variant="outlined"
              style="width: 300px;
              align 
              "
              ></v-combobox>
        <br> 
        <v-container v-if="Suplementos===''">
        <v-container >
          <v-row align="center" justify="center">
        <v-col 
        v-for="(variant, i) in variants"
        :key="i"
        cols="auto"
        >
        <v-card
            class="mx-auto"
            max-width="344"
            :variant="variant"
        >
            <v-card-item>
            <div>
                <div class="text-h6 mb-1">
                Proteina
                </div>
                <div class="prote"><img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1664439072-41Veol69hzL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*"></div>
            </div>
            </v-card-item>
            <v-card-actions>
                <botoncart>Agregar al carrito</botoncart>
 
            <input type="number">
        </v-card-actions>
        </v-card>
        </v-col>
    </v-row>
    </v-container>
    <v-container>
        <br>
    <v-row align="center" justify="center">
        <v-col v-if="Suplementos===''"
        v-for="(variant, i) in variants"
        :key="i"
        cols="auto"
        >
        <v-card
            class="mx-auto"
            max-width="344"
            :variant="variant"
        >
            <v-card-item>
            <div>
                <div class="text-h6 mb-1">
                Creatina
                </div>
                <div class="prote"><img src="https://proteinpalacemx.com/cdn/shop/products/META_NUTRITION_CREATINE_100_SERVICIOS_5G_proteinpalacemx_2_900x.jpg?v=1662403840"></div>
            </div>
            </v-card-item>
            <v-card-actions>
                <botoncart>Agregar al carrito</botoncart>

            <input type="number">
        </v-card-actions>
        </v-card>
        </v-col>
    </v-row>
    </v-container>
    <v-container>
        <br>
    <v-row align="center" justify="center">
        <v-col v-if="Suplementos===''"
        v-for="(variant, i) in variants"
        :key="i"
        cols="auto"
        >
        <v-card
            class="mx-auto"
            max-width="344"
            :variant="variant"
        >
            <v-card-item>
            <div>
                <div class="text-h6 mb-1">
                Pre-Entreno
                </div>
                <div class="prote"><img src="https://i5.walmartimages.com.mx/mg/gm/3pp/asr/09245e09-b13a-47e9-9e69-efdfc2e5fa4d.cf0f70e63c38cdfb5a2fdf9fa7bc59c5.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff"></div>
            </div>
            </v-card-item>
            <v-card-actions>
                <botoncart>Agregar al carrito</botoncart>

            <input type="number">
        </v-card-actions>
        </v-card>
        </v-col>
    </v-row>
    </v-container>
    <v-container>
        <br>
    <v-row align="center" justify="center">
        <v-col v-if="Suplementos===''"
        v-for="(variant, i) in variants"
        :key="i"
        cols="auto"
        >
        <v-card
            class="mx-auto"
            max-width="344"
            :variant="variant"
        >
            <v-card-item>
            <div>
                <div class="text-h6 mb-1">
                Proteina En Polvo
                </div>
                <div class="prote"><img src="https://www.43supplements.com/wp-content/uploads/2022/09/Vainilla.jpg"></div>
            </div>
            </v-card-item>
            <v-card-actions>
                <botoncart>Agregar al carrito</botoncart>

            <input type="number">
        </v-card-actions>
        </v-card>
        </v-col>
    </v-row>
    </v-container>
    <v-container>
        <br>
    <v-row align="center" justify="center">
        <v-col v-if="Suplementos===''"
        v-for="(variant, i) in variants"
        :key="i"
        cols="auto"
        >
        <v-card
            class="mx-auto"
            max-width="344"
            :variant="variant"
        >
            <v-card-item>
            <div>
                <div class="text-h6 mb-1">
                Aminoacidos
                </div>
                <div class="prote"><img src="https://i0.wp.com/www.fitstore.com.mx/wp-content/uploads/2022/01/2264us_mutant_bcaa_9.7_tropical_mango_flavor_363_g_12.8_oz_v1.00-ms-1.png?fit=500%2C600&ssl=1"></div>
            </div>
            </v-card-item>
            

            <v-card-actions>
                <botoncart>Agregar al carrito</botoncart>

            <input type="number">
        </v-card-actions>
        </v-card>
        </v-col>
    </v-row>
    </v-container>
    <br>
    </v-container>
        </v-container > 
        <v-container v-if="Suplementos==='Proteina'">
    <v-row align="center" justify="center" >
        <v-col 
        v-for="(variant, i) in variants"
        :key="i"
        cols="auto"
        focus
        >
        <v-card
            class="mx-auto"
            max-width="344"
            :variant="variant"
        >
            <v-card-item>
            <div>
                <div class="text-h6 mb-1">
                Proteina
                </div>
                <div class="prote"><img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1664439072-41Veol69hzL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*"></div>
            </div>
            </v-card-item><v-card-actions>
                <botoncart>Agregar al carrito</botoncart>
 
            <input type="number">
        </v-card-actions>
        </v-card>
        </v-col>
    </v-row>
    </v-container>      
    <v-container v-if="Suplementos==='Creatina'">
    <v-row align="center" justify="center">
        <v-col 
        
        v-for="(variant, i) in variants"
        :key="i"
        cols="auto"
        >
        <v-card
            class="mx-auto"
            max-width="344"
            :variant="variant"
        >
            <v-card-item>
            <div>
                <div class="text-h6 mb-1">
                Creatina
                </div>
                <div class="prote"><img src="https://proteinpalacemx.com/cdn/shop/products/META_NUTRITION_CREATINE_100_SERVICIOS_5G_proteinpalacemx_2_900x.jpg?v=1662403840"></div>
            </div>
            </v-card-item>
            <v-card-actions>
                <botoncart>Agregar al carrito</botoncart>

            <input type="number">
        </v-card-actions>
        </v-card>
        </v-col>
    </v-row>
    </v-container>

    <v-container v-if="Suplementos==='Pre-entreno'">
        
    <v-row align="center" justify="center">
        <v-col 
        
        v-for="(variant, i) in variants"
        :key="i"
        cols="auto"
        >
        <v-card
            class="mx-auto"
            max-width="344"
            :variant="variant"
        >
            <v-card-item>
            <div>
                <div class="text-h6 mb-1">
                Pre-Entreno
                </div>
                <div class="prote"><img src="https://i5.walmartimages.com.mx/mg/gm/3pp/asr/09245e09-b13a-47e9-9e69-efdfc2e5fa4d.cf0f70e63c38cdfb5a2fdf9fa7bc59c5.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff"></div>
            </div>
            </v-card-item>
            <v-card-actions>
                <botoncart>Agregar al carrito</botoncart>

            <input type="number">
        </v-card-actions>
        </v-card>
        </v-col>
    </v-row>
    </v-container>

    <v-container v-if="Suplementos==='Proteina en Polvo'">
        <br>
    <v-row align="center" justify="center">
        <v-col 
        v-for="(variant, i) in variants"
        :key="i"
        cols="auto"
        >
        <v-card
            class="mx-auto"
            max-width="344"
            :variant="variant"
        >
            <v-card-item>
            <div>
                <div class="text-h6 mb-1">
                Proteina En Polvo
                </div>
                <div class="prote"><img src="https://www.43supplements.com/wp-content/uploads/2022/09/Vainilla.jpg"></div>
            </div>
            </v-card-item>
            <v-card-actions>
            <botoncart>Agregar al carrito</botoncart>
            <input type="number">
        </v-card-actions>
        </v-card>
        </v-col>
    </v-row>
    </v-container>

    <v-container v-if="Suplementos==='Aminoacidos'">
        <br>
    <v-row align="center" justify="center">
        <v-col 
        v-for="(variant, i) in variants"
        :key="i"
        cols="auto"
        >
        <v-card
            class="mx-auto"
            max-width="344"
            :variant="variant"
        >
            <v-card-item>
            <div>
                <div class="text-h6 mb-1">
                Aminoacidos
                </div>
                <div class="prote"><img src="https://i0.wp.com/www.fitstore.com.mx/wp-content/uploads/2022/01/2264us_mutant_bcaa_9.7_tropical_mango_flavor_363_g_12.8_oz_v1.00-ms-1.png?fit=500%2C600&ssl=1"></div>
            </div>
            </v-card-item>
            <v-card-actions>
            <botoncart>Agregar a Carrito</botoncart>
            <input type="number">
        </v-card-actions>
        </v-card>
        </v-col>
    </v-row><br>
    </v-container>
    
</template>

<style>
@media screen and (min-width: 350px) {
  .red {
    color: #D70000;
    padding-bottom: 4px;
    padding-top: 4px;
  }
  img {
    width: 650px;
    height: 300px;
  }
}

.max-width-sm{
  max-width: 300px;
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
import botoncart from '@/components/botonagg.vue'
import { ref } from 'vue';
const Suplementos=ref("")
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
  const variants = ['outlined', 'outlined', 'outlined','outlined']
</script>