<template>
  <router-link
    :to="albumLink"
    :class="{ selected: album.id === selectedAlbumId }"
    >{{ album.title }}</router-link
  >
</template>

<script>
export default {
  props: {
    album: {
      type: Object,
    },
  },

  setup(props) {
    const albumLink = `/albums/${props.album.id}`;

    return { albumLink };
  },
};
</script>

<style scoped>
a {
  display: block;
  background: darkcyan;
  color: white;
  border: none;
  margin: 5px;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  transition: 0.1s;
  outline: none;
  width: 100%;
  text-decoration: none;
  text-align: center;
  font-family: Arial;
}

a:hover {
  filter: brightness(120%);
  cursor: pointer;
  transition: 0.1s;
}

a.router-link-active {
  background: orangered;
}
</style>
