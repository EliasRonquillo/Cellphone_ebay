<template>
  <q-layout view="hhh LpR lFf">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar class="bg-primary text-white shadow-2 rounded-borders">
        <div class="q-pa-md">
          <q-btn flat icon="campaign" size="lg" label="Tienda CellPhone" />
        </div>
        <div class="q-pa-md">
          <q-input
            dark
            bottom-slots
            label="search"
            style="width: 400px; margin-top: 20px"
            rounded
            outlined
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>

        <div class="q-pa-md q-gutter-md">
          <q-btn color="primary" label="Inicio" />
          <q-btn color="primary" label="Estadisticas" />
        </div>

        <div class="q-pa-md q-gutter-md">
          <q-btn color="primary" size="lg" rounded icon="add" />
          <q-btn flat round color="white" size="lg" icon="shopping_cart" />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
