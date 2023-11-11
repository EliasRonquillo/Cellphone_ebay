<template>
  <q-page class="fondo">
    <q-page-container class="q-gutter-md">
      <div class="text-h3 text-center">
        <q-icon name="settings" size="5em" />
      </div>
      <div class="text-h6 text-center">
        
         <div class="q-pa-md">
    <q-img
      src="https://static.vecteezy.com/system/resources/previews/002/158/616/non_2x/resume-of-the-employee-icon-elements-of-hr-and-heat-hunting-in-neon-style-icons-simple-icon-for-websites-web-design-mobile-app-info-graphics-isolated-on-brick-wall-background-vector.jpg"
      spinner-color="white"
      style="height: 170px; max-width: 300px"
      img-class="my-custom-image"
      class="rounded-borders"
    >
      <div class="absolute-bottom text-subtitle1 text-center">
        <div v-if="todos.length > 0">
          <p>Total de Dispositos: {{ todos.length }}</p>
        </div>
        <div v-else>
          Cargando...
        </div>
      </div>
    </q-img>
  </div>

      
        
      </div>

   
    </q-page-container>
  </q-page>
</template>

<script setup>
import { db } from "src/boot/firebase";
import { useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'

const { data: todos, status } = useCollection(collection(db, 'anuncios'));

console.log('Status:', status);
console.log('Todos:', todos);
</script>