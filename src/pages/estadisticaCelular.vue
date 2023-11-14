<template>
  <q-page class="fondo">
    <q-page-container class="q-gutter-md">
      <div class="text-h3 text-center">
        <q-icon name="settings" size="5em" />
      </div>
      <div class="text-h6 text-center">
        
         <div class="q-pa-md">
          
    <q-img
      src="https://static.vecteezy.com/system/resources/previews/002/158/616/non_2x/resume-of-the-employee-icon-elements-of-hr-and-heat-hunting-in-neon-style-icons-simple-icon-for-websites-web-design-mobile-app-info-graphics-isolated-on-brick-wall-background-vector.jpg"
      spinner-color="white"
      style="height: 170px; max-width: 300px"
      img-class="my-custom-image"
      class="rounded-borders"
    >
      <div class="absolute-bottom text-subtitle1 text-center">
        <div v-if="todos.length > 0">
          <p>Total de Dispositos: {{ todos.length }}</p>
        </div>
        <div v-else>
          Cargando...
        </div>
      </div>
    </q-img>



  </div>

    
      </div>


      <q-card>
      <div class="text-h6 text-center">Dispositos Registrados hasta la fecha</div>
      <q-card-section>

         <div class="row mt-3">
          <div class="col-md-6 offset-3">
            <div class="card border border-dark">
              

                  <q-card style="border: 1px solid black;  border-top: 14px solid black;">

                     <canvas ref="barChart"></canvas>
                     
                  </q-card>

                
              </div>
            </div>
        </div>
    </q-card-section>
     </q-card>
   

  
    </q-page-container>
  </q-page>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { db } from 'src/boot/firebase';
import { useCollection } from 'vuefire';
import { collection, query, where } from 'firebase/firestore';
import Chart from 'chart.js/auto';

const barChart = ref(null);
const todos = useCollection(collection(db, 'anuncios'));

const queryWindows = query(collection(db, 'anuncios'), where('sistema', '==', 'Windows'));
const datoswindows = useCollection(queryWindows);

const queryAndroid = query(collection(db, 'anuncios'), where('sistema', '==', 'Android'));
const datosandroid = useCollection(queryAndroid);

const queryIOS = query(collection(db, 'anuncios'), where('sistema', '==', 'IOS'));
const datosIOS = useCollection(queryIOS);

const windowsData = ref(0);
const androidData = ref(0);
const iosData = ref(0);

onMounted(() => {
  const createChart = () => {
    const data = {
      labels: ['Windows', 'Android', 'IOS'],
      datasets: [
        {
          label: 'Dispositivos',
          data: [windowsData.value, androidData.value, iosData.value],
          backgroundColor: [
            'rgb(148, 0, 211)',
            'rgb(0, 191, 255)',
            'rgb(50, 205, 50)',
          ],
          borderColor: 'dark',
          borderWidth: 4,
        },

        
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },

      plugins: {
      legend: {
        display: false,
      },
    },
  };
    const chart = new Chart(barChart.value, {
      type: 'bar',
      data: data,
      options: options,
    });


    const lineChart = new Chart(lineChart.value, {
      type: 'line',
      data: data,
      options: options,
    });
    

  };

  watch([datoswindows, datosandroid, datosIOS], () => {
    if (
      datoswindows.value &&
      datosandroid.value &&
      datosIOS.value &&
      datoswindows.value.length > 0 &&
      datosandroid.value.length > 0 &&
      datosIOS.value.length > 0 &&
      todos.value.length > 0
    ) {
      windowsData.value = datoswindows.value.length;
      androidData.value = datosandroid.value.length;
      iosData.value = datosIOS.value.length;
      createChart();
      createLineChart();
    }
  });
});
</script>
