<template>
  <div class="count-reviews-filter">
    <h3 class="filter-title">Количество отзывов (от)</h3>
    <input
      class="filter"
      v-model="countReviews"
      @input="sendCountReviews"
      type="text"
      name="count-reviews-filter"
      id="count-reviews-filter"
      min="0"
      max="1000000"
      placeholder="Например, от 10"
    />
  </div>
</template>

<script>
export default {
  name: "CountReviewsFilter",
  props: {
    clearedCountReviews: {
      type: Number
    }
  },

  data() {
    return {
      countReviews: null,
    };
  },

  created() {
    this.$emit("countReviews", this.countReviews);
  },

  methods: {
    sendCountReviews() {
      this.validateCountReviews()
      this.$emit("countReviews", this.countReviews);
    },

    validateCountReviews() {
      const numberRegex = /[^\d]/g
      this.countReviews = Number(String(this.countReviews).replaceAll(numberRegex, ""))
    },

    clearFilter() {
      this.countReviews = null
    }
  },

  watch: {
    clearedCountReviews(value) {
      if (!this.clearedCountReviews) {
        this.clearFilter()
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.filter
  width: 100%
  padding: 10px
</style>
