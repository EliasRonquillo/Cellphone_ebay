<template>
  <q-layout view="hhh LpR lFf">
    <q-header reveal elevated class="bg-primary text-white q-xs-2">
      <q-toolbar
        class="bg-primary text-white shadow-2 rounded-borders q-px-xs gt-sm"
      >
        <div class="q-px-md">
          <q-btn flat icon="campaign" size="lg" label="Tienda CellPhone" />
        </div>
        <div class="q-px-md q-mt-md">
          <q-input
            dark
            bottom-slots
            label="search"
            style="width: 400px"
            rounded
            outlined
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>

        <div class="q-px-xl gt-sm">
          <q-btn color="primary" label="Inicio" @click="paginainicio" />
          <q-btn
            color="primary"
            label="Estadisticas"
            @click="paginaestadistica"
          />
        </div>

        <div class="q-px-xl gt-sm">
          <q-btn
            color="primary"
            size="lg"
            rounded
            icon="add"
            @click="paginaexterna"
          />
          <q-btn flat round color="white" size="lg" icon="shopping_cart" />
        </div>
      </q-toolbar>
      <!--PARA PANTALLAS PEQUEÑAS-->
      <q-toolbar class="text-white lt-md">
        <div>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </div>
        <div class="q-px-md q-mt-md">
          <q-input dark bottom-slots label="search" rounded outlined>
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      :width="200"
      :breakpoint="500"
      bordered
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      class="lt-sm"
    >
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>

              <q-item-section @click="handleMenuItemClick(menuItem)">
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-footer reveal elevated>
      <q-toolbar class="justify-center shadow-2 rounded-borders">
        <div>
          <span>Alvarado Landaverde, Ángel Aristides - AL20034 </span>
        </div>
        <div class="q-ml-lg">
          <span> Ronquillo López, Pablo Elías - RL18003</span>
        </div>
      </q-toolbar>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";

const menuList = [
  {
    icon: "campaign",
    label: "Tienda Cellphone",
    separator: true,
  },
  {
    label: "Inicio",
    separator: true,
  },
  {
    label: "Nuevo anuncio",
    separator: true,
  },
  {
    label: "Carrito",
    separator: true,
  },
  {
    label: "Estadísticas",
    separator: true,
  },
];

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

    const paginaestadistica = () => {
      // Utiliza el método push de Vue Router para navegar a la página deseada
      router.push("/estadistica");
    };

    return {
      paginaexterna,
      paginainicio,
      paginaestadistica,
      drawer: ref(false),
      menuList,
    };
  },

  // eventos dentro de los metodos para direccionar paginas
  methods: {
    handleMenuItemClick(menuItem) {
      if (menuItem.label === "Inicio") {
        this.$router.push("/inicio");
      }

      if (menuItem.label === "Nuevo anuncio") {
        this.$router.push("/agregar");
      }

      if (menuItem.label === "Estadísticas") {
        this.$router.push("/estadistica");
      }
      // Otras acciones según sea necesario
    },
  },
};
</script>
