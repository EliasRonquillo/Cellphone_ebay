<template>
  <q-page>
    <!--PARA PANTALLAS MÁS GRANDES-->
    <div class="row q-pa-md">
      <div class="col 12 col-md-2">
        <FiltrosMenu></FiltrosMenu>
      </div>

      <div class="col-12 col-md-10">
        <div class="q-mx-md row items-start q-gutter-md">
          <fieldset>
            <div class="q-mx-md row items-center q-gutter-md">
              <label>Precio:</label>
              <q-input filled class="inputSmaller">
                <template v-slot:prepend>
                  <q-icon name="attach_money" />
                </template>
              </q-input>
              <label>Hasta:</label>
              <q-input filled class="inputSmaller">
                <template v-slot:prepend>
                  <q-icon name="attach_money" />
                </template>
              </q-input>
            </div>
          </fieldset>
          <fieldset>
            <div class="q-mx-md row items-center q-gutter-md">
              <br /><br />
              <label>Ordenar por:</label>
              <q-btn color="secondary">
                <q-icon left size="2em" name="north" />
                <br />
                <div>Precio</div>
              </q-btn>
              <q-btn color="secondary" label="Fecha" />
            </div>
            <br />
          </fieldset>
        </div>

        <div class="row">
          <q-card
            class="my-card col-3"
            v-for="(item, index) in anuncios"
            :key="index"
          >
            <img
              src="https://i.blogs.es/8143a4/samsung-galaxy-j6-specifications-2/450_1000.webp"
            />
            <q-card-section>
              <div class="text-h6" style="text-align: center">
                {{ item.precio }}
              </div>
              <div class="text-subtitle2" style="text-align: center">
                {{ item.marca }}, {{ item.modelo }}, {{ item.pantalla }}
              </div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              {{ item.rom }}, {{ item.ram }}
            </q-card-section>
          </q-card>
        </div>
        <div class="row">
          <div class="col">
            <q-pagination
              v-model="current"
              max="8"
              direction-links
              gutter="20px"
              class="q-mt-md"
            />
          </div>
          <div class="col">
            <div class="q-pa-md row items-start q-gutter-md">
              <label>Articulos por página</label>
              <q-select
                outlined
                v-model="model"
                class="inputSmaller"
                :options="options"
              ></q-select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db } from "boot/firebase";
import { collection } from "firebase/firestore";
import { useCollection } from "vuefire";
import FiltrosMenu from "../components/FiltrosMenu.vue";
import { connectStorageEmulator } from "firebase/storage";
const a001 = ref(746645);

const options = [25, 26, 27, 28, 29];
const current = ref(1);

const anuncios = useCollection(collection(db, "anuncios"));

function MostrarAnuncios() {
  console.log(anuncios);
}

onMounted(() => {
  console.log("Mounted");
});
</script>

<style lang="scss" scoped>
.inputSmaller {
  width: 100px;
}

.inputPosition {
  margin: 0 auto;
}
</style>
