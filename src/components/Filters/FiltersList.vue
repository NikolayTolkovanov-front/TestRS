<template>
  <div class="filters-container">
    <CountriesFilter @selectedCountries="changeSelectedCountries" :clearedCountries="selectedCountries" />
    <TypesFilter @selectedTypes="changeSelectedTypes" :clearedTypes="selectedTypes" />
    <CountStarsFilter @selectedTypes="changeCountStarsCount" :clearedStarsFilters="selectedCountStars" />
    <CountReviewsFilter @countReviews="changeCountReviews" :clearedCountReviews="countReviews" />
    <PriceFilter @selectedPrices="changeSelectedPrices" :clearedSelectedPrices="selectedPrices" />
    <ApplyFiltersButton @applyFilters="applyFilters"/>
    <ClearFiltersButton @clearFilters="clearFilters"/>
  </div>
</template>
<script>
import CountriesFilter from "@/components/Filters/CountriesFilter.vue";
import TypesFilter from "@/components/Filters/TypesFilter.vue";
import CountStarsFilter from "@/components/Filters/CountStarsFilter.vue";
import CountReviewsFilter from "@/components/Filters/CountReviewsFilter.vue";
import PriceFilter from "@/components/Filters/PriceFilter.vue";

import ApplyFiltersButton from '@/components/Filters/ApplyFiltersButton.vue'
import ClearFiltersButton from '@/components/Filters/ClearFiltersButton.vue'

export default {
  name: "FiltersList",
  components: {
    CountriesFilter,
    TypesFilter,
    CountStarsFilter,
    CountReviewsFilter,
    PriceFilter,
    ApplyFiltersButton,
    ClearFiltersButton,
},

  data() {
    return {
      selectedCountries: [],
      selectedTypes: [],
      selectedCountStars: [],
      countReviews: null,
      selectedPrices: {}
    };
  },

  methods: {
    changeSelectedCountries(countriesFilters) {
      this.selectedCountries = countriesFilters;
    },

    changeSelectedTypes(typesFilters) {
      this.selectedTypes = typesFilters;
    },

    changeCountStarsCount(countStarsFilters) {
      this.selectedCountStars = countStarsFilters;
    },

    changeCountReviews(countReviewsFilter) {
      this.countReviews = countReviewsFilter;
    },

    changeSelectedPrices(pricesFilter) {
      this.selectedPrices = pricesFilter
    },

    applyFilters() {
      const filters = {
        selectedCountries: this.selectedCountries,
        selectedTypes: this.selectedTypes,
        selectedCountStars: this.selectedCountStars,
        countReviews: this.countReviews,
        selectedPrices: this.selectedPrices
      }
      this.$emit("applyFilters", filters)
    },

    clearFilters() {
      this.selectedCountries = []
      this.selectedTypes = []
      this.selectedCountStars = []
      this.countReviews = null
      this.selectedPrices = {}
      this.applyFilters()
    }
  },
};
</script>
<style lang="sass">
.filters-container
  min-width: 325px
</style>
