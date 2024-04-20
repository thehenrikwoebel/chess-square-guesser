<template>
  <div class="container">
    <h2>black</h2>
    <v-container id="div">
      <v-column v-for="n in 8" :key="n">
        <v-row no-gutters v-if="n % 2 !== 0">
          <FieldWhite
            :id="'a' + (9 - n).toString()"
            :click="setField('a' + (9 - n).toString())"
            @incrementedRights="incrementedRights()"
            @incrementedWrongs="incrementedWrongs()"
            @finished="count++"
            :normal="count"
            :key="count"
          ></FieldWhite>
          <FieldBlack
            :id="'b' + (9 - n).toString()"
            :click="setField('b' + (9 - n).toString())"
            @incrementedRights="incrementedRights()"
            @incrementedWrongs="incrementedWrongs()"
            @finished="count++"
            :normal="count"
            :key="count"
          ></FieldBlack>
          <FieldWhite
            :id="'c' + (9 - n).toString()"
            :click="setField('c' + (9 - n).toString())"
            @incrementedRights="incrementedRights()"
            @incrementedWrongs="incrementedWrongs()"
            @finished="count++"
            :normal="count"
            :key="count"
          ></FieldWhite>
          <FieldBlack
            :id="'d' + (9 - n).toString()"
            :click="setField('d' + (9 - n).toString())"
            @incrementedRights="incrementedRights()"
            @incrementedWrongs="incrementedWrongs()"
            @finished="count++"
            :normal="count"
            :key="count"
          ></FieldBlack>
          <FieldWhite
            :id="'e' + (9 - n).toString()"
            :click="setField('e' + (9 - n).toString())"
            @incrementedRights="incrementedRights()"
            @incrementedWrongs="incrementedWrongs()"
            @finished="count++"
            :normal="count"
            :key="count"
          ></FieldWhite>
          <FieldBlack
            :id="'f' + (9 - n).toString()"
            :click="setField('f' + (9 - n).toString())"
            @incrementedRights="incrementedRights()"
            @incrementedWrongs="incrementedWrongs()"
            @finished="count++"
            :normal="count"
            :key="count"
          ></FieldBlack>
          <FieldWhite
            :id="'g' + (9 - n).toString()"
            :click="setField('g' + (9 - n).toString())"
            @incrementedRights="incrementedRights()"
            @incrementedWrongs="incrementedWrongs()"
            @finished="count++"
            :normal="count"
            :key="count"
          ></FieldWhite>
          <FieldBlack
            :id="'h' + (9 - n).toString()"
            :click="setField('h' + (9 - n).toString())"
            @incrementedRights="incrementedRights()"
            @incrementedWrongs="incrementedWrongs()"
            @finished="count++"
            :normal="count"
            :key="count"
          ></FieldBlack>
        </v-row>
        <v-row no-gutters v-else>
          <FieldBlack
            :id="'a' + (9 - n).toString()"
            :click="setField('a' + (9 - n).toString())"
            @incrementedRights="incrementedRights()"
            @incrementedWrongs="incrementedWrongs()"
            @finished="count++"
            :normal="count"
            :key="count"
          ></FieldBlack>
          <FieldWhite
            :id="'b' + (9 - n).toString()"
            :click="setField('b' + (9 - n).toString())"
            @incrementedRights="incrementedRights()"
            @incrementedWrongs="incrementedWrongs()"
            @finished="count++"
            :normal="count"
            :key="count"
          ></FieldWhite>
          <FieldBlack
            :id="'c' + (9 - n).toString()"
            :click="setField('c' + (9 - n).toString())"
            @incrementedRights="incrementedRights()"
            @incrementedWrongs="incrementedWrongs()"
            @finished="count++"
            :normal="count"
            :key="count"
          ></FieldBlack>
          <FieldWhite
            :id="'d' + (9 - n).toString()"
            :click="setField('d' + (9 - n).toString())"
            @incrementedRights="incrementedRights()"
            @incrementedWrongs="incrementedWrongs()"
            @finished="count++"
            :normal="count"
            :key="count"
          ></FieldWhite>
          <FieldBlack
            :id="'e' + (9 - n).toString()"
            :click="setField('e' + (9 - n).toString())"
            @incrementedRights="incrementedRights()"
            @incrementedWrongs="incrementedWrongs()"
            @finished="count++"
            :normal="count"
            :key="count"
          ></FieldBlack>
          <FieldWhite
            :id="'f' + (9 - n).toString()"
            :click="setField('f' + (9 - n).toString())"
            @incrementedRights="incrementedRights()"
            @incrementedWrongs="incrementedWrongs()"
            @finished="count++"
            :normal="count"
            :key="count"
          ></FieldWhite>
          <FieldBlack
            :id="'g' + (9 - n).toString()"
            :click="setField('g' + (9 - n).toString())"
            @incrementedRights="incrementedRights()"
            @incrementedWrongs="incrementedWrongs()"
            @finished="count++"
            :normal="count"
            :key="count"
          ></FieldBlack>
          <FieldWhite
            :id="'h' + (9 - n).toString()"
            :click="setField('h' + (9 - n).toString())"
            @incrementedRights="incrementedRights()"
            @incrementedWrongs="incrementedWrongs()"
            @finished="count++"
            :normal="count"
            :key="count"
          ></FieldWhite>
        </v-row>
      </v-column>
    </v-container>
    <h2>white</h2>
  </div>
</template>

<script>
import FieldWhite from "./Field-white.vue";
import FieldBlack from "./Field-black";
import { useCounterStore } from "@/stores/counter";
export default {
  name: "Board-component",
  components: {
    FieldWhite,
    FieldBlack,
  },
  data() {
    return {
      count: 0,
    };
  },
  props: {},
  methods: {
    setField(id) {
      const store = useCounterStore();
      if (id === store.getValue()) {
        return true;
      } else {
        return false;
      }
    },
    incrementedRights() {
      this.$emit("incrementedRights");
    },
    incrementedWrongs() {
      this.$emit("incrementedWrongs");
    },
  },

  watch: {
    count() {
      this.$emit("finished");
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 1700px) {
  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
}
.container {
  min-width: 900px;
  min-height: 900px;
}
</style>
