<template>
  <q-card-section class="q-pt-none">
    <div class="row">
      <div class="col-md-6 col-12">
        <div class="col-sm-6 col-12">
         
          
       
          <q-carousel v-for="(coleccion, index) in colecciones" :key="index"
                  animated v-model="coleccion.slide" navigation infinite
                  :autoplay="autoplay" arrows transition-prev="slide-right" transition-next="slide-left"
                  @mouseenter="autoplay = false" @mouseleave="autoplay = true"
                  >
        <q-carousel-slide v-for="(imagen, i) in coleccion.imagenes" :key="i" :name="i" :img-src="imagen" />
      </q-carousel>
   
      
        </div>
      </div>



      <div class="col-sm-12 col-12 col-md-6">
        
        <div class="info">
          <h6>
            {{ articulo.marca }} {{ articulo.modelo }} pantalla de
            {{ articulo.pantalla }} pulgadas, {{ articulo.rom }} internos,
            {{ articulo.ram }}
            de Ram, {{ articulo.estado }}
          </h6>

          <h5>
            <b>${{ articulo.precio }}</b>
          </h5>

          <div v-if="$q.screen.lt.md" class="q-gutter-md">
            <q-page-sticky position="bottom">
              <div class="q-ma-md">
                <q-btn color="primary" label="Inicio" class="q-btn-lg" />
                <q-btn color="accent" label="Comprar" class="q-btn-lg" />
              </div>
            </q-page-sticky>
          </div>

          <!-- Botón estático en pantallas más grandes -->
          <q-btn
            v-else
            color="secondary"
            label="Comprar"
            class="q-ma-md q-btn-position-bottom-right"
          />
        </div>

        <q-separator spaced />
        <fieldset class="col-sm-12 col-12">
          <div class="row q-gutter-xl justify-center">
            <span>Vendedor: {{ articulo.vendedor }}</span>
            <span>Teléfono: {{ articulo.numero }}</span>
          </div>
        </fieldset>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <h4 class="text-center">DESCRIPCIÓN</h4>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="text-center q-gutter-xl">
          <span class="q-ml-xl text-h6">{{ articulo.estado }}</span>
          <span class="q-ml-xl text-h6">{{ articulo.marca }}</span>
          <span class="q-ml-xl text-h6">{{ articulo.modelo }}</span>
          <span class="q-ml-xl text-h6">{{ articulo.pantalla }}</span>
          <span class="q-ml-xl text-h6">{{ articulo.sistema }}</span>
          <span class="q-ml-xl text-h6">{{ articulo.rom }}</span>
          <span class="q-ml-xl text-h6">{{ articulo.ram }}</span>
          <p>{{ articulo.descripcion }}</p>
        </div>
      </div>
    </div>
   
  </q-card-section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getDownloadURL, listAll, ref as refStorage } from 'firebase/storage';
import { db, storage } from 'src/boot/firebase';
import { useRoute } from "vue-router";
import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs } from 'firebase/firestore';


const route = useRoute();
const docRef = ref({});
const articulo = ref({});

//funcion para informacion

async function obtenerArticulo() {
  docRef.value = doc(db, "anuncios", route.params.IDANUNCIO);
  const docSnap = await getDoc(docRef.value);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    articulo.value = docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}


//datos importantes
const anunciosCollection = collection(db, 'anuncios');
const colecciones = ref([]);
let autoplay = ref(true);

//funcion para la busqueda de imagenes por ID
async function cargarColecciones() {
  try {
    const idAnuncio = route.params.IDANUNCIO; // Se obtiene nada mas el ID 

    const docRef = doc(anunciosCollection, idAnuncio);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) { //Nada mas verifica si existe el ID(documento) en la coleccion de informacion
      const anuncioRef = refStorage(storage, `/anuncios/${idAnuncio}/`);
      const items = await listAll(anuncioRef);

      const imagenes = [];
      for (const imageRef of items.items) {
        try {
          const url = await getDownloadURL(imageRef);
          imagenes.push(url);
        } catch (error) {
          console.error('Error obteniendo URL:', error);
          imagenes.push('');
        }
      }

      colecciones.value.push({ nombre: docSnapshot.id, imagenes, slide: 0 });
    } else {
      console.error('El documento con ID ' + idAnuncio + ' no existe');
    }
  } catch (error) {
    console.error('Error cargando colecciones:', error);
  }
}



onMounted(async() => {
  obtenerArticulo();
  await cargarColecciones();
});
</script>

<style lang="scss" scoped>
.carouselSmaller {
  width: 600px;
  margin: 0 auto;
}

.center {
  margin: 0 auto;
}

.info {
  padding-left: 40px;
}
</style>