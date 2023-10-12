import { defineStore } from "pinia";

export const counterStore = defineStore("counter", {
  state: () => ({
    count: 0,
    name: "ahmed",
  }),

  getters: {
    countPlusOne() {
      return this.count + 1;
    },
  },

  actions: {
    increase() {
      this.count++;
    },
    decrease() {
      this.count--;
    },
    changeName() {
      this.name = "mahmoud";
    },

    $reset() {
      this.count = 1;
    },
  },
});
