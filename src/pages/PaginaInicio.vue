<template>
  <q-page>
    <!--PARA PANTALLAS MÁS GRANDES-->
    <div class="row q-pa-md">
      <div class="col 12 col-md-2">
        <!--MENU DE FILTROS-->
        <q-toggle
          v-model="nuevo"
          color="accent"
          label="Nuevo"
          @click="filtroNuevo"
        />
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
  v-for="(item, index) in datosPaginados"
  :key="index"
>

<center>
<q-card-section class="q-pa-md">
    <div
      class="q-ma-xs q-pa-sm flex justify-center items-center"
      style="max-width: 100px; max-height: 100px;"
    >
      <q-img :src="anunciosURL[index]" class="fit" />
    </div>
    <!-- Resto del contenido de la tarjeta -->
  </q-card-section>
</center>
<!--fiin codigo-->
  <q-card-section>
    <div class="text-h6" style="text-align: center">
      {{ item.precio }}
    </div>
    <div class="text-subtitle2" style="text-align: center">
      {{ item.marca }}, {{ item.modelo }}, {{ item.pantalla }}
    </div>
  </q-card-section>
  <q-card-section class="q-pt-none">
    <q-btn
      color="primary"
      label="detalles"
      :to="'/detalle/' + item.id"
    />
  </q-card-section>
</q-card>

        </div>
        <div class="row">
          <div class="col">
            <q-pagination
              v-model="actual"
              @click="obtenerDataPagina(actual)"
              :max="paginas(cuantosArticulos)"
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
                v-model="cuantosArticulos"
                class="inputSmaller"
                :options="elementosPorPagina"
              ></q-select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, onUpdated, computed, watch } from "vue";
import { useCollection } from "vuefire";
import FiltrosMenu from "../components/FiltrosMenu.vue";
import { useDataStore } from "../stores/dataGlobal";
import { getDownloadURL, listAll, ref as refStorage  } from "firebase/storage";
import { db, storage } from 'src/boot/firebase';
import { collection, getDocs } from 'firebase/firestore';

const store = useDataStore();
const actual = ref(1);
const nuevo = ref(false);
const desde = ref(0.0);
const hasta = ref(0.0);
const anuncios = useCollection(collection(db, "anuncios"));
const anunciosSinFIltro = useCollection(collection(db, "anuncios"));
const HayFiltro = ref(false);
const elementosPorPagina = [4, 8, 12];
const cuantosArticulos = ref(4);
const datosPaginados = ref([]);
const anunciosURL = ref([]);

onUpdated(() => {
  paginas(cuantosArticulos);
  obtenerDataPagina(actual);
  console.log("Updated");
});

function filtroNuevo() {
  if (nuevo.value) {
    anuncios.value = anuncios.value.filter((item) => {
      if (item.estado == "nuevo") {
        return true;
      } else {
        return false;
      }
    });
  }
}

function paginas(cuantosArticulos) {
  if (cuantosArticulos == elementosPorPagina[0]) {
    return Math.ceil(anuncios.value.length / elementosPorPagina[0]);
  } else if (cuantosArticulos == elementosPorPagina[1]) {
    return Math.ceil(anuncios.value.length / elementosPorPagina[1]);
  } else if (cuantosArticulos == elementosPorPagina[2]) {
    return Math.ceil(anuncios.value.length / elementosPorPagina[2]);
  }
}

function obtenerDataPagina(nPagina) {
  datosPaginados.value = [];
  let init;
  let fin;
  if (cuantosArticulos.value == elementosPorPagina[0]) {
    init = nPagina * elementosPorPagina[0] - elementosPorPagina[0];
    fin = nPagina * elementosPorPagina[0];
  } else if (cuantosArticulos.value == elementosPorPagina[1]) {
    init = nPagina * elementosPorPagina[1] - elementosPorPagina[1];
    fin = nPagina * elementosPorPagina[1];
  } else if (cuantosArticulos.value == elementosPorPagina[2]) {
    init = nPagina * elementosPorPagina[2] - elementosPorPagina[2];
    fin = nPagina * elementosPorPagina[2];
  }

  datosPaginados.value = anuncios.value.slice(init, fin);
}

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

function LimpiarFiltros() {
  /*
  HayFiltro.value = false;
  store.dataMarca = [];
  store.dataSistema = [];
  store.dataPantalla = [];
  anuncios.value = [];
  anuncios.value = anunciosSinFIltro.value;
  console.log(anunciosSinFIltro.value);
  */
  /*
  const querySnapshot = await getDocs(collection(db, "anuncios"));
  querySnapshot.forEach((doc) => {
    //doc.data() is never undefined for query doc snapshots
    anuncios.value = doc.data();
    console.log(doc.id, " => ", doc.data());
  });*/
  window.location.reload();
}

function FiltrarPorPrecio() {
  anuncios.value = anuncios.value.sort((a, b) => a.precio - b.precio);
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

  obtenerDataPagina(actual);
  paginas(cuantosArticulos);
  console.log("Mounted");
});



//DATOS NECESARIOS PARA MOSTRAR IMAGEN
const anunciosCollection = collection(db, 'anuncios');
  const colecciones = ref([]);
  let autoplay = ref(true);

  //FUNCION PARA IMAGENES 
  async function cargarColecciones() {
  try {
    const querySnapshot = await getDocs(anunciosCollection);
    querySnapshot.forEach(async (doc) => {
      const anuncioRef = refStorage(storage, `/anuncios/${doc.id}/`);
      const items = await listAll(anuncioRef);

      // Verificar si hay elementos en la carpeta
      if (items.items.length > 0) {
        const imageUrl = await getDownloadURL(items.items[0]); // Obtener solo la primera imagen

        // Almacenar la URL de la imagen en anunciosURL
        anunciosURL.value.push(imageUrl);

       
      } else {
        // Si no hay imágenes en la carpeta, almacenar un valor vacío
        anunciosURL.value.push(imageUrl);
      }
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


  //FIN DE FUNCION!!!------------------------------------------------------------
</script>

<style lang="scss" scoped>
.inputSmaller {
  width: 100px;
}

.inputPosition {
  margin: 0 auto;
}

</style>
