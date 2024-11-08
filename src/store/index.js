import { createStore } from "vuex";

export default createStore({
  state: {
    cities: [],
    books: [],
  },

  mutations: {
    initCitiesData(state, cities) {
      state.cities = cities;
    },
    initBooksData(state, books) {
      state.books = books;
    },
  },

  getters: {
    cities: (state) => state.cities,
    books: (state) => state.books,
  },
});
