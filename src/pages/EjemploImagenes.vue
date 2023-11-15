<template>
    <div>
      <q-carousel v-for="(coleccion, index) in colecciones" :key="index"
                  animated v-model="coleccion.slide" navigation infinite
                  :autoplay="autoplay" arrows transition-prev="slide-right" transition-next="slide-left"
                  @mouseenter="autoplay = false" @mouseleave="autoplay = true"
                  style="height: 200px;">
        <q-carousel-slide v-for="(imagen, i) in coleccion.imagenes" :key="i" :name="i" :img-src="imagen" />
      </q-carousel>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { getDownloadURL, listAll, ref as refStorage } from 'firebase/storage';
  import { db, storage } from 'src/boot/firebase';
  import { collection, getDocs } from 'firebase/firestore';
  
  const anunciosCollection = collection(db, 'anuncios');
  const colecciones = ref([]);
  let autoplay = ref(true);
  
  async function cargarColecciones() {
    try {
      const querySnapshot = await getDocs(anunciosCollection);
      querySnapshot.forEach(async (doc) => {
        const anuncioRef = refStorage(storage, `/anuncios/${doc.id}/`);
        const items = await listAll(anuncioRef);
  
        const imagenes = [];
        items.items.forEach(async (imageRef) => {
          try {
            const url = await getDownloadURL(imageRef);
            imagenes.push(url);
          } catch (error) {
            console.error('Error obteniendo URL:', error);
            imagenes.push('');
          }
        });
  
        colecciones.value.push({ nombre: doc.id, imagenes, slide: 0 });
      });
    } catch (error) {
      console.error('Error cargando colecciones:', error);
    }
  }
  
  onMounted(async () => {
    try {
      await cargarColecciones();
    } catch (error) {
      console.error('Error en el montaje:', error);
    }
  });
  </script>