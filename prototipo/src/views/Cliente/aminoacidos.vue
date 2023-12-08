<template>
    <v-container  style="margin-top: 80px;">
        <h1 style="margin-top: 35px;">Aminoacidos</h1>
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
                <div class="text-overline mb-1">
                  {{ variant }}
                </div>
                <div class="text-h6 mb-1">
                  Aminoacidos
                </div>
                <div class="amino"><img src="https://www.suplementosgym.com.mx/media/catalog/product/cache/2/small_image/300x/713b5111b78bd93a4a79b9899d195c9f/o/p/optimun-amino-energy-270gr_1.jpg"></div>
              </div>
            </v-card-item>
  
            <v-card-actions>
             <boton>Agregar Carrito</boton>
              <input type="number">
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>

  <style>
img{
    height: 350px;
    width: 350px;
}
h1{
    text-align: center;
}
input{
    height: 30px;
    width: 70px;
    margin: 20px;
}


</style>
<script setup>
  const variants = ['outlined', 'outlined', 'outlined','outlined']
  import boton from '@/components/botonagg.vue'
</script>