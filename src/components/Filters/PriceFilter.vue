<template>
  <h3 class="filter-title">Цены</h3>
  <div class="prices">
    <input
      v-model="prices[0]"
      @input="validateFirstFilterByNumber()"
      type="text"
      name="from-price"
      id="from-price"
      :min="minPrice"
      :max="prices[1]"
    />
    <span>-</span>
    <input
      v-model="prices[1]"
      @input="validateSecondFilterByNumber()"
      type="text"
      name="to-price"
      id="to-price"
      :min="prices[0]"
      :max="maxPrice"
    />
  </div>
  <v-slider-price
    v-model="prices"
    :min="minPrice"
    :max="maxPrice"
    :tooltipPosition="tooltopPosition"
    @slide="changePricesInInputs"
  />
</template>

<script>
export default {
  props: {
    clearedSelectedPrices: {
      type: Object,
    },
  },
  emits: ["selectedPrices"],
  data() {
    return {
      minPrice: 0,
      maxPrice: 100500,
      prices: [1000, 70000],
      tooltopPosition: "bottom",
    };
  },

  created() {
    this.$emit("selectedPrices", { min: this.prices[0], max: this.prices[1] });
  },

  methods: {
    clearFilter() {
      this.prices = [1000, 70000];
    },

    changePricesInInputs(prices) {
      this.prices[0] = prices[0]
      this.prices[1] = prices[1]
    },

    validateFirstFilterByNumber() {
      const numberRegex = /[^\d]/g
      console.log(this.prices[0]);
      this.prices[0] = Number(String(this.prices[0]).replaceAll(numberRegex, ""))
    },

    validateSecondFilterByNumber() {
      const numberRegex = /[^\d]/g
      this.prices[1] = Number(String(this.prices[1]).replaceAll(numberRegex, ""))
    },
  },

  watch: {
    prices: {
      handler(value) {
        this.$emit("selectedPrices", { min: value[0], max: value[1] });
      },
      deep: true,
    },

    clearedSelectedPrices() {
      if (!Object.keys(this.clearedSelectedPrices).length) {
        this.clearFilter();
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.prices
  margin: 15px 0
  display: flex
  justify-content: space-between
</style>
