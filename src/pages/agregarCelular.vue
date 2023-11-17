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
                                            
                                                    <q-carousel-slide v-for="(imagen, index) in imagenes" :key="index" :name="index" :img-src="imagen" />

                                            </q-carousel>
                                            <div
                                                style="position: absolute; bottom: 40%; left: 52%; transform: translateX(-50%); z-index: 1;">
                                                <q-btn icon="add" color="secondary" label="" @click="selectFiles" rounded
                                                    style="display: flex;" />
                                                    <input
                                                    type="file"
                                                    style="display: none"
                                                    accept=".jpg, image/*"
                                                    ref="fileInput"
                                                    @change="onFileInputChange"
                                                    multiple
                                                />
                                                <b class="text-white">Agregar foto</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </fieldset>
                            <br><br>

                        </div>

                        <!-- Botón estático en pantallas más grandes -->

                        <fieldset style="border: 2px solid #000000" class="">
                        
                            <div class="q-gutter-sm">
                                <br>
                                <div class="input-group">
                                    <br><br>
                                    <label class="label">  Estado:</label>
                                    <label class="label">  <q-radio v-model="nuevoAnuncio.estado" val="usado" label="Usado" outlined dense /></label>
                                    <label class="label"><q-radio v-model="nuevoAnuncio.estado" val="nuevo" label="Nuevo" outlined dense /></label>
                                </div>
                                <div class="input-group">
                                    <label class="label">Marca:</label>
                                    <q-select label="" transition-show="scale" transition-hide="scale" filled
                                        v-model="nuevoAnuncio.marca" :options="opcionesmarca" style=" border: 2px solid #00000098 ;"
                                        @keyup.enter="prompt = false" />
                                </div>

                                <div class="input-group">
                                    <label class="label">Modelo:</label>
                                    <q-input v-model="nuevoAnuncio.modelo" outlined dense 
                                        style=" border: 2px solid #00000098 ; " /> 

                                     
                                </div>



                                 <div class="input-group">
                                    <label class="label">Pantalla:</label>
                                    <q-input v-model="nuevoAnuncio.pantalla" outlined dense
                                        style=" border: 2px solid #00000098 ; " />
                                        <label class="label">Pulgadas</label>
                                </div>
                                <div class="input-group">
                                    <label class="label">Sistema:</label>
                                    <q-select label="" transition-show="scale" transition-hide="scale" filled
                                        v-model="nuevoAnuncio.sistema" :options="options" style=" border: 2px solid #00000098 ;"
                                        @keyup.enter="prompt = false" />
                                </div>
                                <div class="input-group">
                                    <label class="label">ROM:</label>
                                    <q-input v-model="nuevoAnuncio.rom" label="" outlined dense 
                                        style=" border: 2px solid #00000098 ; " />   <div v-if="$q.screen.gt.md" class="q-gutter-md">
                                            <label class="label">Almacenamiento Interno</label></div>
                                </div>
                                <div class="input-group">
                                    <label class="label">RAM:</label>
                                    <q-input v-model="nuevoAnuncio.ram" label="" outlined dense 
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
                                        
                                       
                            <q-btn outlined round @click="selectFiles" color="primary"><!-- el boton reemplaza el file -->
                            <q-icon name="add" />
                            </q-btn>
                            <input
                                type="file"
                                style="display: none"
                                accept=".jpg, image/*"
                                ref="fileInput"
                                @change="onFileInputChange"
                                multiple
                            />

                                        <br>

                                        <br><br> <br><br> <br><br>
           
                                    </div>

                                    <div class="col"><!-- segunda  columna de informacion de imagenes-->

                                                            
                                            <div class="row">
                                <div class="col-md-12">
                                    <table class="table">
                                    <thead>
                                        <tr>
                                        <th scope="col-md-12">Eliminar</th>
                                        <th scope="col-md-12">N°</th>
                                        <th scope="col-md-12">Tamaño</th>
                                        <th scope="col-md-12">Nombre</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(imagen, index) in imagenes" :key="index">
                                        <th><p><q-btn icon="remove" color="negative" label="" @click="eliminarImagen(index)" rounded  class="btneliminarimg" /></p></th>
                                        <th scope="row-md-12"><p>{{ index + 1 }}</p></th>
                                        <th scope="row-md-12"><p>{{ tamanosImagenes[index] }}</p></th>
                                        <th scope="row-md-12"><p>{{ imagenesnombre[index] }}</p></th>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                </div>
                                    </div>


                                    <div class="col"><!-- tercer de minicarrusel imagenes-->
                                        <div class="q-pa-md">
                                            <q-carousel animated v-model="slide" navigation infinite :autoplay="autoplay"
                                                arrows transition-prev="slide-right" transition-next="slide-left"
                                                @mouseenter="autoplay = false" @mouseleave="autoplay = true"
                                                style="height: 100px; height:200px ;">
                                            
                                                    <q-carousel-slide v-for="(imagen, index) in imagenes" :key="index" :name="index" :img-src="imagen" />

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
                                <q-input v-model="nuevoAnuncio.titulo" outlined dense 
                                    style=" border: 2px solid #00000098 ;" />
                                <div class="input-group">
                                    <label class="label">Vendedor:</label>
                                    <q-input v-model="nuevoAnuncio.vendedor" label="" outlined dense 
                                        style=" border: 2px solid #00000098 ;" />
                                </div>
                                <div class="input-group">
                                    <label class="label">Telefono:</label>
                                    <q-input v-model="nuevoAnuncio.telefono" label="" outlined dense 
                                        style=" border: 2px solid #00000098 ;" />
                                </div>
                                <label class="label">Descripción:</label>
                                <q-input v-model="nuevoAnuncio.descripcion" label="" outlined dense 
                                    type="textarea" style=" border: 2px solid #00000098 ;" />

                                <fieldset
                                    style="width: 110px; margin: 0 auto; text-align: center; border: 2px solid #00000098;  ">
                                    <legend> <label class="label"> Precio</label></legend>
                                    <q-input v-model="nuevoAnuncio.precio" label="Precio" outlined dense mask="##########" 
                                        style="width: 100%; border: 2px solid #00000098 ;" />
                                </fieldset>


                            </div>
                        </fieldset>

                        <q-card-actions align="center" class="text-primary">
                            <q-btn label="Cancel" color="accent"  @click="paginainicio" />
                            <q-btn label="Crear" :disable="!validarFormulario" @click="persistent" icon="save_as" color="accent" />
                           
                            <q-dialog v-model="dialogVisible" persistent transition-show="scale" transition-hide="scale">
                        <q-card class="bg-teal text-white" style="width: 300px">
                            <q-card-section>
                            <div class="text-h6">Informacion</div>
                            </q-card-section>

                            <q-card-section class="q-pt-none">
                                Se guardo satisfactoriamenteeeee.
                            </q-card-section>
                            </q-card>
                            </q-dialog>

                        </q-card-actions>
                    </div>
                </div>
                
            </q-card-section>
    
        </q-card>
      
    </q-page>
    <!-- Aqui termina la ventana emergente -->
</template>
    
<script setup>
import { ref, computed } from "vue";
import { collection, addDoc } from "firebase/firestore"; 
import { db, storage } from "src/boot/firebase";
import { ref as refStorage, uploadBytes, getDownloadURL, } from "firebase/storage";


const slide= ref(0);
const options=  ['Android', 'Windows', 'IOS',];
const opcionesmarca=  ['Samsung', 'Huawei', 'Nokia','IPhone','Xiaomi',];
const opcionespantalla=  ['5','5.5','6',];

//variables del nuevo anuncio
const nuevoAnuncio = ref({
descripcion:"",
estado: "",
marca: "",
modelo: "",
pantalla: "",
precio: "",
ram: "",
rom: "",
sistema: "",
telefono: "",
titulo: "",
vendedor: "",

});

//para vaciar los inputs
const descripcionRef= ref(null);
const estado = ref(null);
const imagenesURL= ref("");
const marcaRef= ref(null);
const modeloRef= ref(null);
const pantallaRef= ref(null);
const precioRef= ref(null);
const ramRef= ref(null);
const romRef= ref(null);
const sistemaRef= ref(null);
const telefonoRef= ref(null);
const tituloRef= ref(null);
const vendedorRef= ref(null);
const imagenFile=ref(null);
const imagenURL=ref("");
const imagenes=ref([]);
const imagenesnombre=ref([]);
const tamanosImagenes=ref([]);
let fileInput; //se tiene que declarar para que funcione la referencia



//validando el formulario
const validarFormulario = computed(()=> {
if(
!nuevoAnuncio.value.titulo ||
!nuevoAnuncio.value.descripcion ||
!nuevoAnuncio.value.marca ||
!nuevoAnuncio.value.modelo ||
!nuevoAnuncio.value.pantalla ||
!nuevoAnuncio.value.ram ||
!nuevoAnuncio.value.rom ||
!nuevoAnuncio.value.sistema ||
!nuevoAnuncio.value.telefono ||
!nuevoAnuncio.value.vendedor ||
!nuevoAnuncio.value.estado ||
nuevoAnuncio.value.precio==0

){
return false;
}
return true;
});


function selectFiles() {
     fileInput.click(); // se tiene la referencia del file y se pasa al boton
    }

    function onFileInputChange(event) {
      const selectedFiles = event.target.files;
      const imagenFiles = ref([]);
      for (let i = 0; i < selectedFiles.length; i++) {
        imagenFiles.value.push(selectedFiles[i]);
      }
      imagenFile.value = imagenFiles.value;
      generarURL();
    }

function generarURL(){
    if (imagenFile.value.length > 0) {
        imagenes.value = [];
        imagenesnombre.value = [];
        tamanosImagenes.value= [];
        imagenFile.value.forEach((file) => {
          imagenes.value.push(URL.createObjectURL(file));
          imagenesnombre.value.push(file.type.split('/')[1]); // Extraer la extensión del tipo MIME
          tamanosImagenes.value.push((file.size / 1024).toFixed(2) + " Kb"); // Tamaño en KB con 2 decimales
        });
      }
}

function eliminarImagen(index) {
  if (index >= 0 && index < imagenes.value.length) {
    imagenes.value.splice(index, 1);
    imagenFile.value.splice(index, 1);
    imagenesnombre.value.splice(index, 1);
    tamanosImagenes.value.splice(index, 1);
  }
}



//metodo para agregar
async function agregarAnuncio() {
  console.log("Agregando Anuncio");

  try {
    const docRef = await addDoc(collection(db, "anuncios"), nuevoAnuncio.value);
    console.log("Document written with ID: ", docRef.id);

    if (imagenFile.value.length > 0) {
      const promises = [];

      for (const file of imagenFile.value) {
        const storageRef = refStorage(storage, `/anuncios/${docRef.id}/${docRef.id}_${Math.random()}.jpg`);
        const uploadPromise = uploadBytes(storageRef, file);
        promises.push(uploadPromise);
      }

      await Promise.all(promises);

      console.log("Uploaded all files!");
      loading.value = false;
    }
  } catch (e) {
    console.error("Error adding document: ", e);
    loading.value = false;
  }
}


//funcion de  DIALOGO para mostrar mensaje de exito
const dialogVisible = ref(false);
function persistent() {
    
  dialogVisible.value = true;
  agregarAnuncio();
  // Configura un temporizador para ocultar el cuadro de diálogo después de 4 segundos
  setTimeout(() => {
    dialogVisible.value = false;
    paginainicio();
  }, 2000); // 4 segundos

  
}

//PARA DIRECCIONAR PAGINAS
import { useRouter } from "vue-router";
const router = useRouter();
const paginainicio = () => {
      // Utiliza el método push de Vue Router para navegar a la página deseada
      router.push("/inicio");
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

.btneliminarimg {
  font-size: 12px; /* Tamaño de fuente más pequeño */
  padding: 3px 3px; /* Ajusta el relleno para reducir el tamaño del botón */
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