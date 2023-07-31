<template>
  <div class="types-filter">
    <h3 class="filter-title">Тип</h3>
    <div class="filters">
      <div class="filter-item" v-for="filter in filters" :key="filter.id" @click="switchCheckBox(filter.id)">
        <input type="checkbox" :name="filter.name" :id="filter.id" :checked="filter.enabled" />
        <label :for="filter.name">{{ filter.value }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TypesFilter",
  props: {
    clearedTypes: {
      type: Array
    }
  },

  data() {
    return {
      filters: [
        {
          id: 1,
          name: "apartments",
          value: "Апартаменты",
          enabled: false
        },
        {
          id: 2,
          name: "hotel",
          value: "Отель",
          enabled: false
        }
      ]
    };
  },

  created() {
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
      return this.filters.filter((type) => type.enabled === true).map((type) => type.value)
    }
  },

  watch: {
    clearedTypes() {
      if (!this.clearedTypes.length) {
        this.clearFilters()
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.types-filter
  display: flex
  flex-direction: column

.filters
  display: flex
  flex-direction: column

</style>
