export const albums = {
  namespaced: true,

  state() {
    return {
      all: [],
    };
  },

  mutations: {
    setAlbums(state, payload) {
      state.all = payload;
    },
  },

  actions: {
    async fetchAlbums(ctx) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const data = await response.json();
      ctx.commit("setAlbums", data);
    },
  },
};
