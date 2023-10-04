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
          <q-btn color="primary" label="Inicio" />
          <q-btn color="primary" label="Estadisticas" />
        </div>

        <div class="q-px-xl gt-sm">
          <q-btn color="primary" size="lg" rounded icon="add" />
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
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
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
    return {
      drawer: ref(false),
      menuList,
    };
  },
};
</script>
