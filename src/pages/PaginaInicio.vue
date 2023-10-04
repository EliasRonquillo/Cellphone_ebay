<template>
  <div></div>
  <q-page :style-fn="myTweak" padding>
    <div class="row">
      <div class="col-2">
        <q-toggle v-model="value" color="accent" label="Nuevo" />
        <fieldset>
          <legend>Marca</legend>
          <div class="q-pr-xl">
            <q-checkbox val="secondary" label="Samsung (40)" color="secondary" />
            <q-checkbox val="secondary" label="Huawei (40)" color="secondary" />
            <q-checkbox val="secondary" label="Nokia (40)" color="secondary" />
            <q-checkbox val="secondary" label="IPhone (40)" color="secondary" />
            <q-checkbox val="secondary" label="Xiaomi (40)" color="secondary" />
          </div>
        </fieldset>
        <fieldset>
          <legend>Sistema</legend>
          <div class="q-pr-xl">
            <q-checkbox val="secondary" label="Android (40)" color="secondary" />
            <q-checkbox val="secondary" label="Windows (40)" color="secondary" />
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




    </div>
  </q-page>
</template>
  
<script>
export default {
  data() {
    return {
      prompt: false, // Asegúrate de que esté inicializada en false
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
}





.input-group {
  display: flex;
  align-items: center;
  margin-bottom: 1px;

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
  