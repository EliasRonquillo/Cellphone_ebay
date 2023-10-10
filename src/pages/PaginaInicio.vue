<template>
  <div></div>
  <q-page :style-fn="myTweak" padding>
    <!--PARA PANTALLAS MÁS GRANDES-->
    <div class="row gt-sm">
      <div class="col 12 col-md-2">
        <q-toggle v-model="value" color="accent" label="Nuevo" />
        <fieldset>
          >
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
            <div class="q-mx-md row items-center q-gutter-md ">
              <br><br>
              <label>Ordenar por:</label>
              <q-btn color="secondary">
                <q-icon left size="2em" name="north" />
                <br>
                <div>Precio</div>
              </q-btn>
              <q-btn color="secondary" label="Fecha" />
            </div>
            <br>
          </fieldset>
        </div>
        <div class="q-pa-md row items-start q-gutter-md">
          
          
          
         <q-card class="my-card" @click="paginadetalle">
    <img src="https://i.blogs.es/8143a4/samsung-galaxy-j6-specifications-2/450_1000.webp" />
    <q-card-section>
      <div class="text-h6" style="text-align: center">$132.00</div>
      <div class="text-subtitle2" style="text-align: center">Samsung J6, Pantalla de 5.5</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      {{ descripcion }}
    </q-card-section>
  </q-card>


          <q-card class="my-card" @click="paginadetalle">
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

          <q-card class="my-card" @click="paginadetalle">
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

          <q-card class="my-card" @click="paginadetalle">
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

          <q-card class="my-card" @click="paginadetalle">
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

          <q-card class="my-card" @click="paginadetalle">
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

          <q-card class="my-card" @click="paginadetalle">
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

          <q-card class="my-card" @click="paginadetalle">
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
    <!--PARA PANTALLAS MÁS PEQUEÑAS-->
    <!--ORDENAR POR-->
    <div class="row lt-md">
      <div class="col" style="margin-left: auto; margin-right: auto">
        <fieldset style="text-align: center">
          <label>Ordenar por:</label>
          <q-btn-dropdown color="secondary" label="Precio" class="q-mx-xs">
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Precio</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Fecha</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </fieldset>
        <!--BOTON PARA EL FILTRO-->
      </div>
      <div class="col">
        <q-btn
          class="q-mx-xl q-mt-md"
          flat
          @click="drawer = !drawer"
          round
          dense
          icon="filter_alt"
        />
      </div>
    </div>
    <!--CARTAS DE LOS CELULARES-->
    <div class="row lt-md justify center">
      <!--CARTA UNO-->
      <div class="q-ma-none" style="margin-left: auto; margin-right: auto">
        <q-card class="my-card" style="width: 125px" @click="paginadetalle">
          <img
            src="https://i.blogs.es/8143a4/samsung-galaxy-j6-specifications-2/450_1000.webp"
          />
          <q-card-section>
            <div class="text-h6" style="text-align: center">$132.00</div>
            <div class="text-subtitle2" style="text-align: center">
              Samsung J6, Pantalla de 5.5
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none" style="text-align: center">
            {{ descripcion }}
          </q-card-section>
        </q-card>
      </div>
      <!--CARTA DOS-->
      <div class="q-ma-none" style="margin-left: auto; margin-right: auto">
        <q-card class="my-card" style="width: 125px" @click="paginadetalle">
          <img
            src="https://i.blogs.es/8143a4/samsung-galaxy-j6-specifications-2/450_1000.webp"
          />
          <q-card-section>
            <div class="text-h6" style="text-align: center">$132.00</div>
            <div class="text-subtitle2" style="text-align: center">
              Samsung J6, Pantalla de 5.5
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none" style="text-align: center">
            {{ descripcion }}
          </q-card-section>
        </q-card>
      </div>
      <!--CARTA TRES-->
      <div class="q-ma-none" style="margin-left: auto; margin-right: auto">
        <q-card class="my-card q-ma-none" style="width: 125px" @click="paginadetalle">
          <img
            src="https://i.blogs.es/8143a4/samsung-galaxy-j6-specifications-2/450_1000.webp"
          />
          <q-card-section>
            <div class="text-h6" style="text-align: center">$132.00</div>
            <div class="text-subtitle2" style="text-align: center">
              Samsung J6, Pantalla de 5.5
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none" style="text-align: center">
            {{ descripcion }}
          </q-card-section>
        </q-card>
      </div>
      <!--CARTA CUATRO-->
      <div class="q-ma-none" style="margin-left: auto; margin-right: auto">
        <q-card class="my-card q-ma-none" style="width: 125px" @click="paginadetalle">
          <img
            src="https://i.blogs.es/8143a4/samsung-galaxy-j6-specifications-2/450_1000.webp"
          />
          <q-card-section>
            <div class="text-h6" style="text-align: center">$132.00</div>
            <div class="text-subtitle2" style="text-align: center">
              Samsung J6, Pantalla de 5.5
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none" style="text-align: center">
            {{ descripcion }}
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row lt-md">
      <div class="col q-ma-md flex flex-center">
        <q-pagination
          v-model="current"
          max="4"
          direction-links
          flat
          color="grey"
          active-color="secondary"
        />
      </div>
    </div>
  </q-page>
</template>

<script >
import { ref } from "vue";
import { useRouter } from "vue-router";
const descripcion = "64GB, 2GB Ram, Color Negro";
const options = [25, 26, 27, 28, 29];
const current = ref(1);

export default {
  setup() {
    const router = useRouter();

    // Función para navegar a la página de detalles
    
    const paginadetalle = () => {
      router.push("/detalle");
    };

    return {
      paginadetalle,
    
    };
  },
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}

  /* Estilo predeterminado de la tarjeta */
  .my-card {
    transition: transform 0.1s ease-in-out; /* Transición suave para el efecto */
  }

  /* Estilo cuando se pasa el mouse sobre la tarjeta */
  .my-card:hover {
    transform: scale(1.02); /*  */
  }

.inputSmaller {
  width: 100px;
}

.inputPosition {
  margin: 0 auto;
}
</style>