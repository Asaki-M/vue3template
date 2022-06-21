import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      counter: 0,
      name: 'vue3template'
    }
  },
  getters: {
    double: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    },
    decrease() {
      this.counter--
    }
  }
})
