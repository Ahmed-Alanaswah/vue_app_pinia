<template>
  <div class="home">
    <h1>home page</h1>
  </div>
</template>

<script>
import { counterStore } from "@/store/counterStore";
import { mapState } from "pinia";

export default {
  computed: {
    ...mapState(counterStore, ["count"]),
  },

  mounted() {
    console.log(this.count);
  },
};
</script>
