import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    cart: [],
    searchQuery: '',
    language: 'sv',
  }),
  getters: {
    getSearchQuery: (state) => state.searchQuery,
  },
  actions: {
    setSearchQuery(query) {
      this.searchQuery = query;
    },
    resetSearchQuery() {
      this.searchQuery = '';
    },
    setLanguage(language, locale) {
      this.language = language;
      locale.value = language;
    },
  },
});
