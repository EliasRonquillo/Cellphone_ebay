<template>
  <div class="row">
    <div class="col-8">
      <div class="q-pa-md">
        <q-carousel
          animated
          v-model="slide"
          arrows
          navigation
          infinite
          class="carouselSmaller"
        >
          <q-carousel-slide
            :name="1"
            img-src="https://live.mrf.io/statics/i/ps/www.muycomputer.com/wp-content/uploads/2018/06/Galaxy-J6-2.jpg?width=1200&enable=upscale"
          />
          <q-carousel-slide
            :name="2"
            img-src="https://www.smartprix.com/bytes/wp-content/uploads/2018/05/Samsung-J6-2018-Review-in-images-6.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="https://www.lavanguardia.com/andro4all/hero/2018/05/Samsung-Galaxy-J6-y-J8.jpg?width=1200&aspect_ratio=16:9"
          />
          <q-carousel-slide
            :name="4"
            img-src="https://beebom.com/wp-content/uploads/2018/05/galaxy-j6-display.jpg"
          />
        </q-carousel>
      </div>
    </div>
    <div class="col-4">
      <h6>
        Iphone 6 pantalla de 8 pulgadas, 64Gb internos, 2Gb de Ram, Sólo Banda
        Tigo, Nuevo
      </h6>
      <h5><b>$235.00</b></h5>
      <q-btn color="secondary" label="Comprar" class="q-pa-md" />
      <fieldset class="q-mt-lg">
        <div class="row q-gutter-xl justify-center">
          <span>Vendedor: Juan Perez</span>
          <span>Teléfono: 7374-2312</span>
        </div>
      </fieldset>
    </div>
  </div>

  <div class="row justify-center">
    <div class="col">
      <h4 class="text-center">DESCRIPCIÓN</h4>
    </div>
  </div>

  <div class="row justify-center">
    <div class="col">
      <div class="text-center q-gutter-xl">
        <textarea cols="60" rows="10">
Estado: Nuevo
Marca: Iphone
Modelo: 6 plus
Pantalla: 7 pulgadas
Sistema: Ios
Rom: 64GB
Ram: 2GB</textarea
        >
        <textarea cols="60" rows="10">
Telefono en muy buenas condiciones, tiene dos cámaras, la caja esta abierta, pero con muy poco uso, practicamente nuevo, la compañia con la que estaba es Tigo, asi que el chip debe ser tigo, viene con su caja original y con todos sus accesorios. Puedo mandar más fotos si desea por whatsapp</textarea
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const slide = ref(1);
</script>

<style lang="scss" scoped>
.carouselSmaller {
  width: 600px;
  margin: 0 auto;
}

.center {
  margin: 0 auto;
}
</style>
