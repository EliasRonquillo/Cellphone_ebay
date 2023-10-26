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
            Iphone 6 pantalla de 8 pulgadas, 64Gb internos, 2Gb de Ram, Sólo
            Banda Tigo, Nuevo
          </h6>

          <h5><b>$235.00</b></h5>

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
            <span>Vendedor: Juan Perez</span>
            <span>Teléfono: 7374-2312</span>
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
          <textarea cols="40" rows="10">
                        Estado: Nuevo
                        Marca: Iphone
                        Modelo: 6 plus
                        Pantalla: 7 pulgadas
                        Sistema: Ios
                        Rom: 64GB
                        Ram: 2GB
                    </textarea
          >

          <textarea cols="40" rows="10">
Telefono en muy buenas condiciones, tiene dos cámaras, la caja esta abierta, pero con muy poco uso, practicamente nuevo, la compañia con la que estaba es Tigo, asi que el chip debe ser tigo, viene con su caja original y con todos sus accesorios. Puedo mandar más fotos si desea por whatsapp</textarea
          >
        </div>
      </div>
    </div>
  </q-card-section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCollection } from "vuefire";
import { collection } from "firebase/firestore";

const anuncios = useCollection(collection(db, "anuncios"));
const slide = ref(1);

onMounted(() => {
  console.log("Mounted");
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
