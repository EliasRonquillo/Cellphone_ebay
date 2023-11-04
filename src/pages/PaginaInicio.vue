<template>
  <q-page>
    <!--PARA PANTALLAS MÁS GRANDES-->
    <div class="row q-pa-md">
      <div class="col 12 col-md-2">
        <!--MENU DE FILTROS-->
        <FiltrosMenu></FiltrosMenu>
      </div>

      <div class="col-12 col-md-10">
        <div class="q-mx-md row items-start q-gutter-md">
          <fieldset class="q-mx-xs q-pa-xs">
            <!--FILTROS DE PRECIO DESDE/HASTA  -->
            <div class="q-mx-md row items-center q-gutter-md">
              <label>Desde:</label>
              <q-input
                filled
                class="q-pa-none"
                input-style="width: 50px;"
                v-model="desde"
                :rules="[
                  (val) =>
                    (val >= 0 && val !== '') || 'Ingrese una cantidad válida',
                ]"
                type="number"
              >
                <template v-slot:prepend>
                  <q-icon name="attach_money" />
                </template>
              </q-input>
              <label>Hasta:</label>
              <q-input
                filled
                class="q-pa-none"
                input-style="width: 50px;"
                v-model="hasta"
                :rules="[
                  (val) =>
                    (val >= 0.0 && val !== '') || 'Ingrese una cantidad válida',
                ]"
                type="number"
              >
                <template v-slot:prepend>
                  <q-icon name="attach_money" />
                </template>
              </q-input>
              <q-btn color="secondary" label="Filtrar" @click="FiltrarPrecio" />
              <q-btn
                color="secondary"
                label="Limpiar"
                @click="LimpiarFiltros"
              />
            </div>
          </fieldset>

          <!--FILTRO PARA ORDENAR POR FECHA O POR PRECIO-->
          <fieldset class="q-pa-sm">
            <div class="q-mx-md row items-center q-gutter-md q-pa-xs">
              <br /><br />
              <label>Ordenar por:</label>
              <q-btn
                color="secondary"
                icon="north"
                label="Precio"
                @click="FiltrarPorPrecio"
              />
              <q-btn
                color="secondary"
                icon="event"
                label="Fecha"
                @click="FiltrarPorFecha"
              />
            </div>
          </fieldset>
        </div>

        <div class="row q-ma-lg">
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
import { ref, onMounted, computed, watch } from "vue";
import { db } from "boot/firebase";
import { collection } from "firebase/firestore";
import { useCollection } from "vuefire";
import FiltrosMenu from "../components/FiltrosMenu.vue";
import { useDataStore } from "../stores/dataGlobal";
import { connectStorageEmulator } from "firebase/storage";

const store = useDataStore();
const options = [25, 26, 27, 28, 29];
const current = ref(1);
const desde = ref(0.0);
const hasta = ref(0.0);
const anuncios = useCollection(collection(db, "anuncios"));
const HayFiltro = ref(false);

//PROPIEDADES COMPUTADAS PARA SABER SI HAY FILTROS EN LA DATA GLOBAL PARA EL SISTEMA, PANTALLA Y MARCA.
const HayFiltrosSistema = computed(() => {
  return store.dataSistema.length;
});

const HayFiltrosMarca = computed(() => {
  return store.dataMarca.length;
});

const HayFiltrosPantalla = computed(() => {
  return store.dataPantalla.length;
});

watch(HayFiltrosMarca, (nuevo, viejo) => {
  FiltrarPorMenu();
});

watch(HayFiltrosSistema, (nuevo, viejo) => {
  FiltrarPorMenu();
});

watch(HayFiltrosPantalla, (nuevo, viejo) => {
  FiltrarPorMenu();
});

function FiltrarPrecio() {
  if (desde.value > 0 && hasta.value > 0) {
    HayFiltro.value = true;
    anuncios.value = anuncios.value.filter((item) => {
      if (item.precio >= desde.value && item.precio <= hasta.value) {
        return true;
      } else {
        return false;
      }
    });
  }
}

function LimpiarFiltros() {}
function FiltrarPorPrecio() {
  anuncios.value.sort((a, b) => a.precio - b.precio);
}

function FiltrarPorFecha() {
  anuncios.value.sort((a, b) => {
    if (a.fecha < b.fecha) {
      return -1;
    }
    if (a.fecha > b.fecha) {
      return 1;
    }
    return 0;
  });
}

function FiltrarPorMenu() {
  if (
    store.dataMarca.length > 0 ||
    store.dataSistema.length > 0 ||
    store.dataPantalla.length > 0
  ) {
    HayFiltro.value = true;
    anuncios.value = anuncios.value.filter((item) => {
      if (
        store.dataMarca.includes(item.marca) ||
        store.dataSistema.includes(item.sistema) ||
        store.dataPantalla.includes(item.pantalla)
      ) {
        return true;
      } else {
        return false;
      }
    });
  }
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
