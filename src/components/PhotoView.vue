<template>
  <div v-if="loading">Loading...</div>

  <img
    v-else
    v-for="photo in currentPhotos"
    :src="photo.thumbnailUrl"
    :key="photo.id"
  />
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();
    const currentPhotos = computed(() => store.state.photos.currentAlbumPhotos);
    const loading = computed(() => store.state.photos.loading);
    return { currentPhotos, loading };
  },
};
</script>

<style scoped></style>
