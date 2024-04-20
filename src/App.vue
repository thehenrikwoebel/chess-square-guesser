<template>
  <v-app id="app">
    <v-main>
      <h1 id="heading">Click on field {{ field }}</h1>
      <h2 id="heading2">
        ✅: {{ rights }} ❌:
        {{ wrongs }}
      </h2>
      <BoardComponent
        @incrementedRights="getRights()"
        @incrementedWrongs="getWrongs()"
        @finished="getField()"
      ></BoardComponent>
    </v-main>
  </v-app>
</template>

<script>
import BoardComponent from "./components/Board-component.vue";
import { useCounterStore } from "./stores/counter";
export default {
  name: "App",

  components: {
    BoardComponent,
  },

  data() {
    return {
      field: String,
      rights: Number,
      wrongs: Number,
    };
  },

  methods: {
    getField() {
      const fields = [
        ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8"],
        ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8"],
        ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8"],
        ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8"],
        ["e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8"],
        ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8"],
        ["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8"],
        ["h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8"],
      ];
      const store = useCounterStore();
      const out =
        fields[parseInt(Math.random() * 8)][parseInt(Math.random() * 8)];
      store.setField(out);
      this.field = out;
      this.getRights();
      this.getWrongs();
      return out;
    },
    getRights() {
      const store = useCounterStore();
      this.rights = store.getRights();
    },
    getWrongs() {
      const store = useCounterStore();
      this.wrongs = store.getWrongs();
    },
  },

  mounted() {
    const store = useCounterStore();
    store.setField(this.$options.methods.getField());
    this.field = store.getValue();
    this.getRights();
    this.getWrongs();
  },
};
</script>

<style scoped>
#app {
  background-color: grey;
}
#heading {
  text-align: center;
  padding-top: 30px;
}
#heading2 {
  text-align: center;
}
</style>
