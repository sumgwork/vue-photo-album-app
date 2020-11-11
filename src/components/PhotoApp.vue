<template>
  <layout>
    <template v-slot:header>
      Header
    </template>
    <template v-slot:sidebar
      ><album v-for="album in albums" :key="album.id" :album="album"></album
    ></template>
    <template v-slot:content>
      <router-view />
    </template>
  </layout>
</template>

<script>
import Layout from "./Layout.vue";
import Album from "./Album.vue";

export default {
  name: "App",
  components: {
    Layout,
    Album,
  },

  computed: {
    albums() {
      return this.$store.state.albums.all;
    },
    currentPhotos() {
      return this.$store.state.photos.currentAlbumPhotos;
    },
  },

  watch: {
    $route: {
      handler: function(route) {
        this.fetchPhotosForAlbum(route.params.id);
      },
      immediate: true, // also call handler when component is mounted
    },
  },

  methods: {
    fetchPhotosForAlbum(albumId) {
      this.$store.dispatch("photos/fetchPhotosForAlbum", albumId);
    },
  },

  async created() {
    this.$store.dispatch("albums/fetchAlbums");
  },
};
</script>

<style>
:root {
  --header-height: 50px;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
</style>
