<template>
  <q-card-section class="q-pt-none">
    <div class="row">
      <div class="col-md-6 col-12">
        <div class="col-sm-6 col-12">
          <q-carousel
            animated
            v-model="slide"
            arrows
            navigation
            infinite
            class="col-sm-6 col-12"
          >
            <q-carousel-slide
              :name="1"
              img-src="https://www.cnet.com/a/img/resize/fa30df0ab174346771eef6924905c91bbfcb55ca/hub/2014/09/13/38d0b3b2-a123-4912-b950-9ea8aa18b6ba/xerxes-1708-033.jpg?auto=webp&width=768"
            />
            <q-carousel-slide
              :name="2"
              img-src="https://i.blogs.es/1a6888/650_1000_iphone-6-1/1366_2000.png"
            />
            <q-carousel-slide
              :name="3"
              img-src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2015/10/125097-autopsia-iphone-6s-todas-sus-piezas-componentes.jpg?tf=3840x"
            />
            <q-carousel-slide
              :name="4"
              img-src="https://media.wired.co.uk/photos/606db4f2e46630a583ab3127/master/w_1600%2Cc_limit/iPhone6main.jpg"
            />
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
import { db } from 'src/boot/firebase';
import { useRoute } from "vue-router";
import { doc, getDoc } from "firebase/firestore";

const slide = ref(1);
const route = useRoute();
const docRef = ref({});
const articulo = ref({});

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

onMounted(() => {
  obtenerArticulo();
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