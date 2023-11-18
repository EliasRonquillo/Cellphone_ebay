<template>
  <q-page>
    <fieldset>
      <legend>Marca</legend>
      <q-list bordered separator>
        <q-item
          clickable
          v-ripple
          v-for="(item, key) in marcas"
          :key="'sis-' + key"
        >
          <q-checkbox v-model="item.value" color="secondary">
            {{ item.label
            }}<q-badge color="primary" floating class="q-mt-md q-mr-md">{{
              item.cantidad
            }}</q-badge>
          </q-checkbox>
        </q-item>
      </q-list>
    </fieldset>

    <fieldset class="q-mt-sm">
      <legend>Sistema</legend>
      <q-list bordered separator>
        <q-item
          clickable
          v-ripple
          v-for="(item, key) in sistemas"
          :key="'sis-' + key"
        >
          <q-checkbox v-model="item.value" color="secondary">
            {{ item.label
            }}<q-badge color="primary" floating class="q-mt-md q-mr-md">{{
              item.cantidad
            }}</q-badge>
          </q-checkbox>
        </q-item>
      </q-list>
    </fieldset>

    <fieldset class="q-mt-sm">
      <legend>Pantalla</legend>
      <q-list bordered separator>
        <q-item
          clickable
          v-ripple
          v-for="(item, key) in pantallas"
          :key="'sis-' + key"
        >
          <q-checkbox v-model="item.value" color="secondary">
            {{ item.label }}
          </q-checkbox>
        </q-item>
      </q-list>
    </fieldset>
    <div class="row">
      <div class="col">
        <q-btn
          rounded
          color="primary"
          label="Filtrar"
          @click="Filtrar"
          class="q-mt-sm q-ml-sm"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useDataStore } from "src/stores/dataGlobal";

const store = useDataStore();
const marcas = ref([
  { value: false, label: "Samsung", cantidad: 15 },
  { value: false, label: "Huawei", cantidad: 10 },
  { value: false, label: "Nokia", cantidad: 56 },
  { value: false, label: "IPhone", cantidad: 4 },
  { value: false, label: "Xiaomi", cantidad: 4 },
]);

const sistemas = ref([
  { value: false, label: "Android", cantidad: 15 },
  { value: false, label: "Windows", cantidad: 10 },
  { value: false, label: "IOS", cantidad: 56 },
]);

const pantallas = ref([
  { value: false, label: "6" },
  { value: false, label: "5.5" },
  { value: false, label: "5" },
]);

function Filtrar() {
  const filtroSistema = [];
  const filtroMarca = [];
  const filtroPantalla = [];

  marcas.value.forEach((item) => {
    if (item.value) {
      filtroMarca.push(item.label);
    }
  });

  sistemas.value.forEach((item) => {
    if (item.value) {
      filtroSistema.push(item.label);
    }
  });

  pantallas.value.forEach((item) => {
    if (item.value) {
      filtroPantalla.push(item.label);
    }
  });

  console.log(filtroSistema);
  store.dataMarca = filtroMarca;
  store.dataSistema = filtroSistema;
  store.dataPantalla = filtroPantalla;
}
</script>
