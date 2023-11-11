<template>
  <q-page class="fondo">
    <q-page-container class="q-gutter-md">
      <div class="text-h3 text-center">
        <q-icon name="settings" size="5em" />
      </div>
      <div class="text-h6 text-center">
        <div class="text-h3">Estadistica</div>
        Dispositivos registrados en la base de datos
      
        <div v-if="todos.length > 0">
          <q-icon name="analytics" size="2em" />
          <p>Total de elementos: {{ todos.length }}</p>
        </div>
        <div v-else>
          Cargando...
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