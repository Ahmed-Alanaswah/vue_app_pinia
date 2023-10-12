<template>
  <div class="home">
    <h1>home page</h1>
    <h1>state count is {{ count }}</h1>
    <h1>state name is {{ name }}</h1>
    <h2>gettter: {{ countPlusOne }}</h2>
    <button @click="increase">increase</button>
    <button @click="decrease">decrease</button>
    <button @click="changeName">change name</button>
    <button @click="store.$reset">reset</button>
  </div>
</template>

<script setup>
import { counterStore } from "@/store/counterStore";
import { storeToRefs } from "pinia";
const store = counterStore();

const { count, countPlusOne, name } = storeToRefs(store);

const increase = store.increase;
const decrease = store.decrease;
const changeName = store.changeName;
// import { mapState, mapActions } from "pinia";

// export default {
//   computed: {
//     ...mapState(counterStore, ["count"]),
//     storeGetter() {
//       return counterStore().countPlusOne;
//     },
//   },

//   methods: {
//     ...mapActions(counterStore, ["increase", "decrease"]),
//   },
// };
</script>
