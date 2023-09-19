<template>
  <div></div>
  <q-page :style-fn="myTweak" padding>
    <div class="row">
      <div class="col-2">
        <q-toggle v-model="value" color="accent" label="Nuevo" />
        <fieldset>
          <legend>Marca</legend>
          <div class="q-pr-xl">
            <q-checkbox
              val="secondary"
              label="Samsung (40)"
              color="secondary"
            />
            <q-checkbox val="secondary" label="Huawei (40)" color="secondary" />
            <q-checkbox val="secondary" label="Nokia (40)" color="secondary" />
            <q-checkbox val="secondary" label="IPhone (40)" color="secondary" />
            <q-checkbox val="secondary" label="Xiaomi (40)" color="secondary" />
          </div>
        </fieldset>
        <fieldset>
          <legend>Sistema</legend>
          <div class="q-pr-xl">
            <q-checkbox
              val="secondary"
              label="Android (40)"
              color="secondary"
            />
            <q-checkbox
              val="secondary"
              label="Windows (40)"
              color="secondary"
            />
            <q-checkbox val="secondary" label="IOS (40)" color="secondary" />
          </div>
        </fieldset>
        <fieldset>
          <legend>Pantalla</legend>
          <div class="q-pr-xl">
            <q-checkbox val="secondary" label="6.0 (40)" color="secondary" />
            <q-checkbox val="secondary" label="5.5 (40)" color="secondary" />
            <q-checkbox val="secondary" label="5 (40)" color="secondary" />
          </div>
        </fieldset>
      </div>

      <div class="col-10">
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
              <label>Ordenar por:</label>
              <q-btn color="secondary">
                <q-icon left size="2em" name="north" />
                <div>Precio</div>
              </q-btn>
              <q-btn color="secondary" label="Fecha" />
            </div>
          </fieldset>
        </div>
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card">
            <img
              src="https://i.blogs.es/8143a4/samsung-galaxy-j6-specifications-2/450_1000.webp"
            />
            <q-card-section>
              <div class="text-h6" style="text-align: center">$132.00</div>
              <div class="text-subtitle2" style="text-align: center">
                Samsung J6, Pantalla de 5.5
              </div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              {{ descripcion }}
            </q-card-section>
          </q-card>

          <q-card class="my-card">
            <img
              src="https://i.blogs.es/8143a4/samsung-galaxy-j6-specifications-2/450_1000.webp"
            />
            <q-card-section>
              <div class="text-h6" style="text-align: center">$132.00</div>
              <div class="text-subtitle2" style="text-align: center">
                Samsung J6, Pantalla de 5.5
              </div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              {{ descripcion }}
            </q-card-section>
          </q-card>

          <q-card class="my-card">
            <img
              src="https://i.blogs.es/8143a4/samsung-galaxy-j6-specifications-2/450_1000.webp"
            />
            <q-card-section>
              <div class="text-h6" style="text-align: center">$132.00</div>
              <div class="text-subtitle2" style="text-align: center">
                Samsung J6, Pantalla de 5.5
              </div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              {{ descripcion }}
            </q-card-section>
          </q-card>

          <q-card class="my-card">
            <img
              src="https://i.blogs.es/8143a4/samsung-galaxy-j6-specifications-2/450_1000.webp"
            />
            <q-card-section>
              <div class="text-h6" style="text-align: center">$132.00</div>
              <div class="text-subtitle2" style="text-align: center">
                Samsung J6, Pantalla de 5.5
              </div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              {{ descripcion }}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
const descripcion = "64GB, 2GB Ram, Color Negro";
const dense = ref(true);
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}

.inputSmaller {
  width: 100px;
  height: 5px;
}
</style>
