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

    <q-img
      src="https://elcomercio.pe/resizer/AX5niTVdSJkZq0wK9vAVoJ3tbSE=/580x330/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DOYVVQECG5FN3O5KIDHXXKWBCQ.jpg"
      spinner-color="white"
      style="height: 170px; max-width: 300px"
      img-class="my-custom-image"
      class="rounded-borders"
    >
      <div class="absolute-bottom text-subtitle1 text-center">
        <div v-if="datoswindows.length > 0">
          <p>Dispositos Windows: {{ datoswindows.length }}</p>
        </div>
        <div v-else>
          Cargando...
        </div>
      </div>
    </q-img>

    <q-img
      src="https://img.freepik.com/fotos-premium/persona-que-usa-computadora-portatil-grafico-pantalla_853645-12052.jpg?w=360"
      spinner-color="white"
      style="height: 170px; max-width: 300px"
      img-class="my-custom-image"
      class="rounded-borders"
    >
      <div class="absolute-bottom text-subtitle1 text-center">
        <div v-if="datosandroid.length > 0">
          <p>Dispositos Android: {{ datosandroid.length }}</p>
        </div>
        <div v-else>
          Cargando...
        </div>
      </div>
    </q-img>

    <q-img
      src="https://www.iphones.ru/wp-content/uploads/2013/01/apple-580x362.png"
      spinner-color="white"
      style="height: 170px; max-width: 300px"
      img-class="my-custom-image"
      class="rounded-borders"
    >
      <div class="absolute-bottom text-subtitle1 text-center">
        <div v-if="datosIOS.length > 0">
          <p>Dispositos IOS: {{ datosIOS.length }}</p>
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
import { collection, query, where } from 'firebase/firestore'

const { data: todos } = useCollection(collection(db, 'anuncios'));


// Construir una consulta que filtra los documentos con sistema === 'Windows'
const queryWindows = query(collection(db, 'anuncios'), where('sistema', '==', 'Windows'));
const { data: datoswindows } = useCollection(queryWindows);// Obtener los datos de la colección con el filtro aplicado

// Construir una consulta que filtra los documentos con sistema === 'Android'
const queryAndroid = query(collection(db, 'anuncios'), where('sistema', '==', 'Android'));
const { data: datosandroid } = useCollection(queryAndroid);// Obtener los datos de la colección con el filtro aplicado

// Construir una consulta que filtra los documentos con sistema === 'Android'
const queryIOS= query(collection(db, 'anuncios'), where('sistema', '==', 'IOS'));
const { data: datosIOS} = useCollection(queryIOS);// Obtener los datos de la colección con el filtro aplicado


console.log('Todos:', todos);
console.log('Windows:', datoswindows);
console.log('Android:', datosandroid);
console.log('Android:', datosIOS);


</script>