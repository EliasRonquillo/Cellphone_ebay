<template>
    <q-layout>
   
  <!-- Contenido principal -->
  <q-page-container>
  
  <q-header elevated class="custom-header">
    <q-toolbar>
      <q-toolbar-title class="titulo">
    Tienda en Línea
    
  <label class="search-label">
     
      <input
        type="text"
        class="search-input"
        placeholder="Buscar..."
        @input="onSearchInput"
        v-model="searchQuery"
      />
    </label>
  </q-toolbar-title>
  Inicio
  Estadisticas
  <q-btn
              flat
              dense
              round
              icon="add"
              aria-label="Agregar"
              @click="toggleModal"
            />
    <q-btn
      flat
      dense
      round
      icon="shopping_cart"
      aria-label="Abrir Carrito"
      @click="toggleCart"
    />
  </q-toolbar>
  
  
  </q-header>
  
  
    <!-- Cuadrícula de productos (tres productos en la misma fila) -->
    <q-row>
      <q-col cols="3" v-for="product in products" :key="product.name">
        <q-card>
          <q-card-section>
            <q-img :src="product.image" alt="Imagen del producto" class="product-image" />
          </q-card-section>
          <q-card-section>
            <q-card-title>{{ product.name }}</q-card-title>
            <q-card-main>
              {{ product.description }}
              <br />
              Precio: ${{ product.price }}
            </q-card-main>
            <q-card-actions>
              <q-btn color="primary" label="Agregar al Carrito" />
            </q-card-actions>
          </q-card-section>
        </q-card>
      </q-col>
    </q-row>
  </q-page-container>
  
  
      <!-- Panel lateral derecho para el icono del carrito -->
     
      <template>
    <div>
      <!-- Botón para abrir el modal -->
      <q-btn label="Abrir Modal" @click="toggleModal" />
      
      <!-- Modal -->
      <q-dialog v-model="isModalOpen" persistent>
        <q-card class="custom-modal">
          <q-card-section >
            <center><h4>Detalles del Producto</h4></center>
            
            <!-- Formulario -->
     <form>        
    <div class="divisiones">      
    <table border="0">
  
  
  <tr>
    <td><label for="condition" class="textoform">Estado:</label></td>
    <td>
    <input type="radio" id="nuevo" name="condition" value="nuevo" />
    <label for="nuevo">Nuevo</label>
    <input type="radio" id="usado" name="condition" value="usado" />
    <label for="usado">usado</label>
  </td>
  </tr>
  
    <tr>
      <td><label for="Marca" class="textoform">Marca:</label></td>
      <td><q-input outlined class="cajatexto" /></td>
    </tr>
  
    <tr>
      <td><label for="Modelo" class="textoform">Modelo:</label></td>
      <td><q-input outlined   class="cajatexto"/></td>
  
    </tr>
    <tr>
      <td><label for="Pantalla" class="textoform">Pantalla:</label></td>
      <td><q-input outlined  class="cajatexto"/></td>
     
    </tr>
    <tr>
      <td> <label for="Sistema" class="textoform">Sistema:</label></td>
      <td> <q-select
                  v-model="selectedSystem"
                  options="Android,iOS,Windows,Other"
                  outlined
                /></td>
    </tr>
  
    <tr>
      <td><label for="rom" class="textoform">ROM:</label></td>
      <td>  <q-input outlined  class="cajatexto"/></td>
    </tr>
  
    <tr>
      <td><label for="ram" class="textoform">RAM:</label></td>
      <td>        <q-input outlined  class="cajatexto"/></td>
    </tr>
  
  
  </table>
  </div>
  
  <div class="divisiones">
    
    <table border="0">
    <tr>
      <td><label for="Titulo" class="textoform">Titulo Breve del Anuncio:</label></td>
      <td><q-input outlined class="cajatexto"/></td>
    </tr>
    <tr>
      <td><label for="Vendedor" class="textoform">Vendedor:</label></td>
      <td><q-input outlined class="cajatexto"/></td>
    </tr>
    <tr>
      <td><label for="Telefono" class="textoform">Telefono:</label></td>
      <td><q-input outlined class="cajatexto"/></td>
    </tr>
    <tr>
      <td colspan="2"><label for="Descripción" class="textoform">Descripción:</label></td>
    </tr>
    <tr>
      <td colspan="2"><textarea id="Descripción" name="Descripción" rows="4" cols="50"></textarea></td>
    </tr>
    <tr>
      <fieldset>
  <legend>Precio</legend>
      <td><q-input outlined /></td>
    </fieldset>
    </tr>
  
    <tr>
    
      <td> <q-btn label="Cancelar" color="accent" @click="toggleModal" /></td>
      <td> <q-btn label="Guardar" color="accent" /></td>
    </tr>
  
  </table>
  
  </div>
            </form>
          </q-card-section>
  
  
  <!-- Sección del carrusel -->
  <div class="carousel-section">
      <label for="images">Imágenes:</label>
      <!-- Utiliza un botón personalizado en lugar del input -->
      <q-btn outlined round @click="openFilePicker">
        <q-icon name="add" />
      </q-btn>
      <!-- Carrusel para mostrar las imágenes seleccionadas -->
      <div class="carousel" ref="carousel">
        <div v-for="(image, index) in selectedImages" :key="index" class="carousel-slide">
          <img :src="image" alt="Imagen" class="carousel-image" />
          <button @click="removeImage(index)" class="remove-button">Eliminar</button>
        </div>
      </div>
      <!-- El input real, oculto, para cargar imágenes -->
      <input type="file" id="images" ref="fileInput" @change="handleImageUpload" multiple style="display: none;" />
    </div>
  
        </q-card>
      </q-dialog>
  
  
    </div>
  </template>
  
  
  
  
  
  <q-drawer
        v-model="cartOpen"
        show-if-above
        bordered
        right
      >
        <q-list>
          <q-item-label header>
            Carrito de Compras
            <div>
              <br><br><br>
              
    <form @submit.prevent="submitForm">
        
        <fieldset>
          <legend>Marca </legend>
  
        
            <input type="checkbox" value="marca" />Samsung<br><br>
            <input type="checkbox" value="marca" />Huawei<br><br>
            <input type="checkbox" value="marca" />Nokia<br><br>
            <input type="checkbox" value="marca" />Iphone<br><br>
            <input type="checkbox" value="marca" />Xiomi<br>
         
        </fieldset>
        <br><br><br>
        <fieldset>
          <legend>Sistema</legend>
  
     
    
            <input type="checkbox" value="marca" />Android<br><br>
            <input type="checkbox" value="marca" />Windows<br><br>
            <input type="checkbox" value="marca" />Ios<br><br>
       <br>
         
        </fieldset>
  
        <!-- Botón para enviar el formulario -->
      
      </form>
    </div>
          </q-item-label>
        </q-list>
      </q-drawer>
  
      <div class="q-pa-lg flex flex-center">
      <q-pagination
        v-model="current"
        :max="5"
        direction-links
      />

      
      <div class="pagination-image">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          alt="Imagen de la página"
          v-show="current === index + 1"
        />
      </div>
    </div>
  
      
    
    </q-layout>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue'
  
  export default defineComponent({
    name: 'OnlineStore',
  
    data() {
      return {
        current: 1,
        images: [
          "https://www.almacenestropigas.com/media/catalog/product/4/6/461990200014.png?width=700&height=700&store=el_salvador_kiosco_espanol&image-type=image",
         "https://www.prado.com.sv/media/catalog/product/c/e/celular-4g-samsung-a14-negro-128gb-183507_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
        ],
        cartOpen: false,
        isModalOpen: false,
        selectedImages: [],
        selectedImageIndex: 0,
        products: [
          {
            name: 'Producto 1',
            description: 'Descripción del Producto 1',
            price: 20,
            image: 'https://www.almacenestropigas.com/media/catalog/product/4/6/461990200014.png?width=700&height=700&store=el_salvador_kiosco_espanol&image-type=image'
          },
          {
            name: 'Producto 2',
            description: 'Descripción del Producto 2',
            price: 30,
            image: 'https://www.almacenestropigas.com/media/catalog/product/4/6/461990200014.png?width=700&height=700&store=el_salvador_kiosco_espanol&image-type=image'
          },
          
          
          // Agrega más productos según tus necesidades
        ],
      }
    },
  
    created() {
      // Puedes elegir dos productos específicos aquí
      this.product = this.products[0] // Muestra el primer producto de la lista
    },
  
    methods: {
      toggleCart() {
        this.cartOpen = !this.cartOpen
      },
  
      toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    },
  
  //metodos para la seleccion de imagenes
    handleImageUpload(event) {
        const files = event.target.files;
        if (files) {
          for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            reader.onload = (e) => {
              const imageSrc = e.target.result;
              if (this.selectedImages.length < 20) {
                this.selectedImages.push(imageSrc);
              }
            };
            reader.readAsDataURL(files[i]);
          }
        }
      },
      removeImage(index) {
        this.selectedImages.splice(index, 1);
        if (index === this.selectedImageIndex && this.selectedImages.length > 0) {
          this.selectedImageIndex--;
        }
      },
  
      openFilePicker() {
        // Simula un clic en el input oculto para abrir el selector de archivos
        this.$refs.fileInput.click();
      },
      prevSlide() {
        if (this.selectedImageIndex > 0) {
          this.selectedImageIndex--;
        }
      },
      nextSlide() {
        if (this.selectedImageIndex < this.selectedImages.length - 1) {
          this.selectedImageIndex++;
        }
      },
    }
    
  })
  </script>
  
  <style scoped>
  .product-image {
    width: 150px; /* Ancho deseado de la imagen en píxeles */
    height: auto; /* La altura se ajustará automáticamente */
    
  }
  
  .custom-header{
    width:auto; /* Ancho deseado de la imagen en píxeles */
    height:100px; /* La altura se ajustará automáticamente */
  }
  
  .titulo {
      padding-top: 30px; /* Ajusta el margen superior según sea necesario */
      margin-right: 20px; /* Ajusta el margen derecho según sea necesario */
      padding-left: 40px;
      width: auto; /* Ancho deseado de la imagen en píxeles */
      height: 100px; /* La altura se ajustará automáticamente */
      float: right; /* Hace que el título flote a la derecha */
    
    }
  
    .search-input {
  
    padding-left: 30px; /* Espacio para el ícono */
    background-color: #04061a; /* Fondo */
    border: 1px solid #fff; /* Borde blanco delgado */
    border-radius: 20px; /* Borde redondeado */
    width: 300px; /* Ancho deseado */
    color: #fff; /* Color del texto */
    height: 36px; /* Altura deseada */
    font-size: 16px; /* Tamaño de fuente */
    outline: none; /* Quita el borde de enfoque */
    margin-left: 50px;
  }
  
  /* Estilos para la ventana emergente de búsqueda */
  
  /* Estilo del modal */
  .custom-modal {
    width: auto; /* Ancho del 100% del viewport (ventana del navegador) */
    height: 800px; /* Alto del 100% del viewport */
    max-width: none; /* Quita la limitación del ancho máximo */
    max-height: none; /* Quita la limitación del alto máximo */
   
  }
  .cajatexto{
    border: 2px solid #000;
  }
  
  
  
  
  /* Estilo del carrusel */
  .carousel-section {
    margin-left:  600px;
    margin-right:  600px;
   
    
  }
  
  .carousel {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
  
  .carousel-slide {
    flex: 0 0 auto;
    margin-right: 10px;
    text-align: center;
  }
  
  .carousel-image {
    max-width: 100px;
    max-height: 100px;
    object-fit: cover;
  }
  
  .remove-button {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 5px 10px;
  
    font-size: 12px;
    margin-top: 40px;
  }
  
  .divisiones{
  
    display: inline-block;
    width: 50%; /* Opcional: establece el ancho deseado para cada div */
    box-sizing: border-box; /* Asegura que el ancho incluye el relleno y el borde */
  
  }
  
  .textoform{
    font-size: 20px;
    font-weight: 2px;
  }
  </style>
  