<template>
    <div></div>
    <q-page :style-fn="myTweak" padding>




        <!--  Ventana emergente como card -->

        <q-card class="col-md-6 col-12 q-pa-md">

            <q-card-section>
                <div class="text-h6">
                    <center><label class="label">NUEVO ANUNCIO</label></center>
                </div>
            </q-card-section>

            <q-card-section class="col-md-6 col-12 q-pa-md">
                <div class="row">
                    <div class="col-md-6 col-12 q-pa-md">
                        <!-- Primera columna -->


                        <!-- Carrusel para cuando este sea responsive -->
                        <div v-if="$q.screen.lt.md" class="q-gutter-md">

                            <fieldset style="border: 2px solid #000000">
                                <legend> <label class="label"> Imagenes</label></legend>

                                <div class="row">

                                    <div class="col"><!-- tercer de minicarrusel imagenes-->
                                        <div class="col-md-6 col-12 q-pa-md" style="position: relative;">
                                            <q-carousel animated v-model="slide" navigation infinite :autoplay="autoplay"
                                                arrows transition-prev="slide-right" transition-next="slide-left"
                                                @mouseenter="autoplay = false" @mouseleave="autoplay = true"
                                                style="height: 100px; height:200px ;">
                                                <q-carousel-slide :name="1"
                                                    img-src="https://elcomercio.pe/resizer/3LcA6gymp3LjmhSX0OVvu6SPhBo=/1200x675/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/PUGKOK7IOBCERJG4LSGBOR7GSE.jpg" />
                                                <q-carousel-slide :name="2"
                                                    img-src="https://images.milenio.com/wEg_JOP_V-jOw8tOxvbOR7-3qZU=/345x237/uploads/media/2019/03/30/telefonos-creando-distracciones-complican-descanso.jpg" />

                                            </q-carousel>
                                            <div
                                                style="position: absolute; bottom: 40%; left: 52%; transform: translateX(-50%); z-index: 1;">
                                                <q-btn icon="add" color="secondary" label="" @click="openFilePicker" rounded
                                                    style="display: flex;" />
                                                <b class="text-white">Agregar foto</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </fieldset>
                            <br><br>

                        </div>

                        <!-- Botón estático en pantallas más grandes -->

                        <fieldset style="border: 2px solid #000000" class="q-gutter-">
                            <div class="q-gutter-sm">

                                <div class="input-group">
                                    <br><br>
                                    <label class="label">Estado:</label>
                                    <q-radio v-model="opcion" val="usado" label="Usado" outlined dense />
                                    <q-radio v-model="opcion" val="nuevo" label="Nuevo" outlined dense />
                                </div>
                            </div>

                            <div class="col-md-6 col-;g12 q-pa-md">
                                <br>
                                <div class="input-group">
                                    <label class="label">Marca:</label>
                                    <q-input v-model="marca" outlined dense @keyup.enter="prompt = false"
                                        style=" border: 2px solid #00000098 ; " />
                                </div>

                                <div class="input-group">
                                    <label class="label">Modelo:</label>
                                    <q-input v-model="modelo" outlined dense @keyup.enter="prompt = false"
                                        style=" border: 2px solid #00000098 ; " />
                                </div>
                                <div class="input-group">
                                    <label>Marca:</label>
                                    <q-select label="" transition-show="scale" transition-hide="scale" filled
                                        v-model="selectedOption" :options="options" style=" border: 2px solid #00000098 ;"
                                        @keyup.enter="prompt = false" />
                                </div>
                                <div class="input-group">
                                    <label class="label">ROM:</label>
                                    <q-input v-model="rum" label="" outlined dense @keyup.enter="prompt = false"
                                        style=" border: 2px solid #00000098 ; " />
                                </div>
                                <div class="input-group">
                                    <label class="label">RAM:</label>
                                    <q-input v-model="ram" label="" outlined dense @keyup.enter="prompt = false"
                                        style=" border: 2px solid #00000098 ; " />
                                </div>
                            </div>
                        </fieldset>


                        <div v-if="$q.screen.gt.md" class="q-gutter-md">
                            <fieldset style="border: 2px solid #000000">
                                <legend> <label class="label"> Imagenes</label></legend>
                                <!-- en divs para que hayan 3 columnas-->
                                <div class="row">
                                    <div class="col-2"><!-- primer columna de botones-->
                                        <q-btn icon="add" color="primary" label="" @click="openFilePicker" rounded />
                                        <br>

                                        <br><br> <br><br> <br><br>
                                        <q-btn icon="remove" color="negative" label="" @click="deleteFiles" rounded />

                                    </div>

                                    <div class="col"><!-- segunda  columna de informacion de imagenes-->

                                        <div class="row ">
                                            <div class="col"> <label class="label"> N°</label><br> 1<br>2</div>

                                            <div class="col"> <label class="label"> Tamaño</label><br> 2MB<br>3MB</div>

                                            <div class="col"> <label class="label"> Tipo</label><br> JPG<br>PNG</div>

                                        </div>
                                    </div>


                                    <div class="col"><!-- tercer de minicarrusel imagenes-->
                                        <div class="q-pa-md">
                                            <q-carousel swipeable animated v-model="slide" thumbnails infinite
                                                style="height: 100px; height:200px ;">
                                                <q-carousel-slide :name="1"
                                                    img-src="https://elcomercio.pe/resizer/3LcA6gymp3LjmhSX0OVvu6SPhBo=/1200x675/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/PUGKOK7IOBCERJG4LSGBOR7GSE.jpg" />
                                                <q-carousel-slide :name="2"
                                                    img-src="https://images.milenio.com/wEg_JOP_V-jOw8tOxvbOR7-3qZU=/345x237/uploads/media/2019/03/30/telefonos-creando-distracciones-complican-descanso.jpg" />


                                            </q-carousel>
                                        </div>
                                    </div>
                                </div>

                            </fieldset>
                        </div>
                    </div>

                    <div class="col-md-6 col-12 q-pa-md">
                        <!-- Segunda columna --><br />
                        <fieldset style="border: 2px solid #000000">
                            <br /><br /><br /><br />
                            <div class="q-gutter-sm">
                                <label class="label"> Titulo Breve del Anuncio</label>
                                <q-input v-model="titulobreve" outlined dense @keyup.enter="prompt = false"
                                    style=" border: 2px solid #00000098 ;" />
                                <div class="input-group">
                                    <label class="label">Vendedor:</label>
                                    <q-input v-model="vendedor" label="" outlined dense @keyup.enter="prompt = false"
                                        style=" border: 2px solid #00000098 ;" />
                                </div>
                                <div class="input-group">
                                    <label class="label">Telefono:</label>
                                    <q-input v-model="telefono" label="" outlined dense @keyup.enter="prompt = false"
                                        style=" border: 2px solid #00000098 ;" />
                                </div>
                                <label class="label">Descripción:</label>
                                <q-input v-model="descripcion" label="" outlined dense @keyup.enter="prompt = false"
                                    type="textarea" style=" border: 2px solid #00000098 ;" />

                                <fieldset
                                    style="width: 110px; margin: 0 auto; text-align: center; border: 2px solid #00000098;  ">
                                    <legend> <label class="label"> Precio</label></legend>
                                    <q-input v-model="precio" label="Precio" outlined dense @keyup.enter="prompt = false"
                                        style="width: 100%; border: 2px solid #00000098 ;" />
                                </fieldset>


                            </div>
                        </fieldset>

                        <q-card-actions align="center" class="text-primary">
                            <q-btn label="Cancel" v-close-popup icon="highlight_off" color="accent" />
                            <q-btn label="Crear" @click="addAddress" icon="save_as" color="accent" />
                        </q-card-actions>
                    </div>
                </div>
            </q-card-section>
        </q-card>

    </q-page>
    <!-- Aqui termina la ventana emergente -->
</template>
    
<script>
export default {
    data() {
        return {
            selectedOption: null,
            options: [
                'Android', 'Windows', 'Ios',],
            opcion: "usado", // Valor predeterminado seleccionado en los radios
            marca: "", // Valor inicial de la marca
            modelo: "", // Valor inicial del modelo}
            rum: "",
            ram: "",
            titulobreve: "",
            vendedor: "",
            descripcion: "",
            precio: "",
            imagenes: [],
            uploadedFiles: [], // Lista de archivos cargados
            customFileList: [], // Lista personalizada de archivos para mostrar información adicional
            slide: (1),

        };
    },
    methods: {
        submitForm() {
            // Maneja el envío del formulario aquí
        },

        agregarDireccion() {

        },

    },


};
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




.ventanaemergente {
    max-width: none;
    min-width: none;
    min-height: none;
    width: 1200px;
    height: 800px;

    justify-content: center;
    align-items: center;
}





.input-group {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

}

.label {
    margin-right: 10px;
    /* Agrega margen a la derecha de la etiqueta para separarla de la caja de texto */
    font-weight: bold;
    font-size: 18px;

}


/* Estilos para pantallas medianas y grandes pero con scc
  
  @media screen and (max-width: 768px) {
    .ventanaemergente {
      max-width: 100%;
      width: 100%;
      padding: 20px;
    }
  
  
  }
  Estilos para pantallas medianas y grandes
  @media screen and (min-width: 769px) {
    .ventanaemergente {
      max-width: none;
      min-width: none;
      min-height: none;
      width: 1200px;
      height: 800px;
    }
  
  }
  
  */
</style>
    