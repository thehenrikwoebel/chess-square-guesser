<template>
  <button
    style="
      min-width: 50px;
      min-height: 50px;
      max-width: 100px;
      max-height: 100px;
      background-color: rgb(181, 136, 99);
    "
    id="button"
    @click="clicked()"
    ref="btn"
  ></button>
</template>

<script>
import { useCounterStore } from "@/stores/counter";
export default {
  name: "Field-black",
  props: {
    click: Boolean,
    normal: Number,
  },

  methods: {
    clicked() {
      const store = useCounterStore();
      if (this.click) {
        this.$refs.btn.style.backgroundColor = "lime";
        store.incrementRights();
        this.$emit("incrementedRights");
        this.normalise();
      } else if (store.getWrongs() === 0) {
        this.$refs.btn.style.backgroundColor = "yellow";
        store.incrementWrongs();
        this.$emit("incrementedWrongs");
      } else if (store.getWrongs() === 1) {
        this.$refs.btn.style.backgroundColor = "orange";
        store.incrementWrongs();
        this.$emit("incrementedWrongs");
      } else if (store.getWrongs() === 2) {
        this.$refs.btn.style.backgroundColor = "red";
        store.resetWrongs();
        this.$emit("incrementedWrongs");
        this.normalise();
      }
    },
    normalise() {
      this.$refs.btn.style.backgroundColor = "rgb(181, 136, 99)";
      this.$emit("finished");
    },
  },

  watch: {
    normal() {
      this.$refs.btn.style.backgroundColor = "rgb(181, 136, 99)";
    },
  },
};
</script>
