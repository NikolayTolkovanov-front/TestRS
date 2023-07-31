<template>
  <div class="countries-filter">
    <h3 class="filter-title">Страны</h3>
    <div class="select">
      <img class="search-img" src="@/assets/img/search.svg" alt="" />
      <v-select class="select" :options="countries" label="country" :value="selected" :placeholder="selected" v-model="input">
        <template #option="{ id, country, enabled }">
          <div @click="switchCheckbox(id, enabled)">
            <input type="checkbox" :checked="enabled" :name="country" :id="id" />
            <span>{{ country }}</span>
          </div>
        </template>
      </v-select>
    </div>
  </div>
</template>
<script>
import { getCountries } from "@/api/hotels"

export default {
  name: "CountriesFilter",
  props: {
    clearedCountries: {
      type: Array
    }
  },
  data() {
    return {
      input: "",
      selected: "Поиск",
      countries: [],
    };
  },

  created() {
    this.countries = getCountries()
    this.$emit('selectedCountries', this.selectedCountries)
  },

  methods: {
    switchCheckbox(id, enabled) {
      this.countries[id - 1].enabled = !enabled;

      this.$emit('selectedCountries', this.selectedCountries)
    },

    clearFilters() {
      for (let country of this.countries) {
        country.enabled = false
        this.input = ""
      }
    }
  },

  computed: {
    selectedCountries() {
      return this.countries.filter((country) => country.enabled === true).map((country) => country.country);
    },
  },

  watch: {
    clearedCountries() {
      if (!this.clearedCountries.length) {
        this.clearFilters()
      }
    }
  }
};
</script>
<style lang="sass">

.select
  position: relative

  .vs__selected-options
    margin: 4px 21px 0

.search-img
  position: absolute
  top: 50%
  left: 10px
  transform: translateY(-50%)
</style>
