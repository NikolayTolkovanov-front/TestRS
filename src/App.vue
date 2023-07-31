<template>
  <div class="container">
    <FiltersList @applyFilters="applyFilters" />
    <ReviewsList :filters="filters" />
  </div>
</template>

<script>
import FiltersList from '@/components/Filters/FiltersList.vue';
import ReviewsList from '@/components/List/ReviewsList.vue';

export default {
  name: 'App',
  components: {
    FiltersList,
    ReviewsList
  },

  data() {
    return {
      filters: {},
    }
  },

  methods: {
    applyFilters(filters) {
      this.filters = filters
    }
  }
}
</script>

<style lang="sass">
* 
  margin: 0
  padding: 0
  box-sizing: border-box
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

.container
  max-width: 1200px
  padding: 0 30px
  display: flex

</style>
