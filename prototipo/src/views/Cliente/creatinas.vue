<template>
    <v-container style="margin-top: 80px;">
        <h1 style="margin-top: 30px;">Creatinas</h1>
        <br>
      <v-row align="center" justify="center">
        <v-col
          v-for="(variant, i) in variants"
          :key="i"
          cols="auto"
        >
          <v-card
            class="mx-auto"
            max-width="244"
            :variant="variant"
          >
            <v-card-item>
              <div>
                <div class="text-overline mb-1">
                  {{ variant }}
                </div>
                <div class="text-h6 mb-1">
                  Creatina
                </div>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBIJT-v3xDlZ41kSeOODYlte74YaN83EzDIaGSC37MRRLwdPufpYiHmiwZJrn0L8n8GpE&usqp=CAU" class="img-card"></div>
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
    height: 250px;
    width: 250px;
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