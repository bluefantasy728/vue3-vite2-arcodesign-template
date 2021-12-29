import { defineStore } from 'pinia';
import store from 'store';

import { defineStore } from 'pinia';

export const useStore = defineStore('index', {
  // a function that returns a fresh state
  state: () => ({
    counter: 0,
    name: 'Eduardo',
  }),
  // optional getters
  getters: {
    // getters receive the state as first parameter
    doubleCount: state => state.counter * 2,
    // use getters in other getters
    doubleCountPlusOne() {
      return this.doubleCount * 2 + 1;
    },
  },
  // optional actions
  actions: {
    reset() {
      // `this` is the store instance
      this.counter = 0;
    },
  },
});
