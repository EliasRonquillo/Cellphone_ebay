import { boot } from "quasar/wrappers";
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { VueFire } from "vuefire";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7HTBwCCPKu39GfM_SIW7KCUL__tL8cps",
  authDomain: "ebaycell-7bba8.firebaseapp.com",
  projectId: "ebaycell-7bba8",
  storageBucket: "ebaycell-7bba8.appspot.com",
  messagingSenderId: "503732540455",
  appId: "1:503732540455:web:cc6587a77c3a8abe606a02",
  measurementId: "G-E4HKSHV4LR",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  app.use(VueFire, {
    // imported above but could also just be created here
    app,
    modules: [],
  });
});

export { db };
