<template>
  <div class="stars-filter">
    <h3 class="filter-title">Количество звезд</h3>
    <div class="filters">
      <div class="filter-item" v-for="filter in filters" :key="filter.id" @click="switchCheckBox(filter.id)">
        <input type="checkbox" :name="filter.name" :id="filter.id" :checked="filter.enabled" />
        <label :for="filter.name">{{ filter.value }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import { getCountStarsFilters } from '@/api/hotels'

export default {
  name: "CountStarsFilter",
  props: {
    clearedStarsFilters: {
      type: Array,
    }
  },

  data() {
    return {
      filters: []
    };
  },

  created() {
    this.filters = getCountStarsFilters()
    this.$emit('selectedTypes', this.selectedFilters)
  },

  methods: {
    switchCheckBox(id) {
      this.filters[id - 1].enabled = !this.filters[id - 1].enabled
      this.$emit('selectedTypes', this.selectedFilters)
    },

    clearFilters() {
      for (let filter of this.filters) {
        filter.enabled = false
      }
    }
  },

  computed: {
    selectedFilters() {
      return this.filters.filter((type) => type.enabled === true).map((type) => type.numberValue)
    }
  },

  watch: {
    clearedStarsFilters() {
      if (!this.clearedStarsFilters.length) {
        this.clearFilters()
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.stars-filter
  display: flex
  flex-direction: column

.filters
  display: flex
  flex-direction: column

</style>
