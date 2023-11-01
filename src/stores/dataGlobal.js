import { defineStore } from "pinia";

export const useDataStore = defineStore("data", {
  state: () => ({
    dataSistema: [],
    dataMarca: [],
    dataPantalla: [],
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
  },

  actions: {
    increment() {
      this.counter++;
    },
  },
});
