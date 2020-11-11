<template>
  <div class="wrapper">
    <div class="header">
      <slot name="header" />
    </div>
    <div class="main">
      <div class="sidebar">
        <slot name="sidebar" />
      </div>
      <div class="content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  height: 100vh;
}

.header {
  height: var(--header-height);
}

.main {
  height: calc(100vh - var(--header-height));
  display: flex;
  border-top: 2px solid silver;
}

.sidebar {
  padding: 10px;
  flex-basis: 300px;
  flex-shrink: 0;
  flex-grow: 0;
  border-right: 2px solid silver;
  overflow-y: auto;
}

.content {
  overflow-y: auto;
  width: 100%;
}
</style>
