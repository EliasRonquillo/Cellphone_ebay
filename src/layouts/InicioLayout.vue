<template>
  <q-layout view="hhh LpR lFf">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar class="bg-primary text-white shadow-2 rounded-borders">
        <div class="q-pa-md">
          <q-btn flat icon="campaign" size="lg" label="Tienda CellPhone" />
        </div>
        <div class="q-pa-md">
          <q-input dark bottom-slots label="search" style="width: 400px; margin-top: 20px" rounded outlined>
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>

        <div class="q-pa-md q-gutter-md">
          <q-btn color="primary" label="Inicio" @click="paginainicio" />
          <q-btn color="primary" label="Estadisticas" />
        </div>


        <div class="q-pa-md q-gutter-md">

          <q-btn color="primary" size="lg" rounded icon="add" @click="paginaexterna" />

        </div>



        <div class="q-pa-md q-gutter-md">
          <q-btn flat round color="white" size="lg" icon="shopping_cart" />
        </div>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script >
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();

    // Función para navegar a la página de detalles
    const paginaexterna = () => {
      // Utiliza el método push de Vue Router para navegar a la página deseada
      router.push("/agregar");
    };
    const paginainicio = () => {
      // Utiliza el método push de Vue Router para navegar a la página deseada
      router.push("/inicio");
    };


    return {
      paginaexterna,
      paginainicio,
    };
  },
};

</script>