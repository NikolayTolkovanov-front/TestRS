<template>
  <div class="clear-filters-btn">
    <button @click="$emit('clearFilters')">Очистить фильтры</button>
  </div>
</template>

<script>
  export default {
    name: "clearFiltersButton"
  }
</script>

<style lang="scss" scoped>

</style>