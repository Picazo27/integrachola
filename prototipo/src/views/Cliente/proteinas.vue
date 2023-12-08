<template>
    <v-container  style="margin-top: 80px;">
        <h1 style="margin-top: 35px;">Proteinas</h1>
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
                  Proteina
                </div>
                <div class="prote"><img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1664439072-41Veol69hzL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*"></div>
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
</script>