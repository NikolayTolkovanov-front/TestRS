<template>
  <div class="btn-apply-filters">
    <button @click="applyFilters()">
      Применить фильтр
    </button>
  </div>
</template>

<script>
export default {
  name: "ApplyFiltersButton",

  methods: {
    applyFilters() {
      this.$emit("applyFilters");
    },
  },
};
</script>

<style lang="sass" scoped>
.btn-apply-filters
  margin-top: 50px
</style>
