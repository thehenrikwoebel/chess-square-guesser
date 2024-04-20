import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({ field: "", wrongs: 0, rights: 0 }),
  getters: {
    getState: (state) => state.field,
  },
  actions: {
    setField(text) {
      this.field = text;
    },
    getValue() {
      return this.field;
    },
    getWrongs() {
      return this.wrongs;
    },
    incrementWrongs() {
      this.wrongs++;
    },
    resetWrongs() {
      this.wrongs = 0;
    },
    getRights() {
      return this.rights;
    },
    incrementRights() {
      this.rights++;
    },
  },
});
