<template>
  <button
    style="
      min-width: 50px;
      min-height: 50px;
      max-width: 100px;
      max-height: 100px;
      background-color: rgb(240, 217, 181);
    "
    id="button"
    @click="clicked()"
    ref="btn"
  ></button>
</template>

<script>
import { useCounterStore } from "@/stores/counter";
export default {
  name: "Field-white",
  components: {},
  props: {
    click: Boolean,
    normal: Number,
  },
  data() {
    return {};
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
      this.$refs.btn.style.backgroundColor = "rgb(240, 217, 181)";
      this.$emit("finished");
    },
  },

  watch: {
    normal() {
      this.$refs.btn.style.backgroundColor = "rgb(240, 217, 181)";
    },
  },
};
</script>
