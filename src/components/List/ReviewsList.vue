<template>
  <div class="hotels">
    <ReviewItem
      v-for="review in paginatedReviews"
      :reviewInfo="review"
      @bookHotel="bookHotel"
      @unbookHotel="unbookHotel"
    />
    <NotFound v-if="!filteredReviews.length" />
    <div v-if="paginatedReviews.length" class="pagination">
      <button v-if="page > 1" @click="page = page - 1">Назад</button>
      <p>{{ page }} страница</p>
      <button v-if="hasNextPage" @click="page = page + 1">Следующая</button>
    </div>
  </div>
</template>
<script>
import ReviewItem from "@/components/List/ReviewItem.vue";
import NotFound from "@/components/NotFound.vue";
import { getReviewsInfo } from "@/api/hotels";

export default {
  name: "ReviewsList",
  components: { ReviewItem, NotFound },
  props: {
    filters: {
      type: Object,
    },
  },

  data() {
    return {
      reviews: [],
      bookedReviews: new Set(),
      page: 1,
    };
  },

  created() {
    this.reviews = getReviewsInfo();
  },

  methods: {
    bookHotel(nameHotel) {
      this.bookedReviews.add(
        this.reviews.filter((review) => review.name === nameHotel)[0]
      );
    },

    unbookHotel(nameHotel) {
      this.bookedReviews.delete(
        this.reviews.filter((review) => review.name === nameHotel)[0]
      );
    },

    filterReviewsByCountries(reviews) {
      if (this.filters.selectedCountries) {
        if (this.filters.selectedCountries.length) {
          return reviews.filter((review) => {
            return this.filters.selectedCountries.includes(review.country);
          });
        }
      }
      return reviews;
    },

    filterReviewsByType(reviews) {
      if (this.filters.selectedTypes) {
        if (this.filters.selectedTypes.length) {
          return reviews.filter((review) => {
            return this.filters.selectedTypes.includes(review.type);
          });
        }
      }
      return reviews;
    },

    filterReviewsByCountStars(reviews) {
      if (this.filters.selectedCountStars) {
        if (this.filters.selectedCountStars.length) {
          return reviews.filter((review) =>
            this.filters.selectedCountStars.includes(review.stars)
          );
        }
      }
      return reviews;
    },

    filterReviewsByCountReviews(reviews) {
      if (this.filters.countReviews || this.filters.countReviews === 0) {
        return reviews.filter((review) => {
          return this.filters.countReviews <= review.reviews_amount;
        });
      }
      return reviews;
    },

    filterReviewsByPrice(reviews) {
      if (this.filters.selectedPrices) {
        if (Object.keys(this.filters.selectedPrices).length) {
          return reviews.filter(
            (review) =>
              review.min_price >= this.filters.selectedPrices.min &&
              review.min_price <= this.filters.selectedPrices.max
          );
        }
      }
      return reviews;
    },
  },

  computed: {
    startIndex() {
      return (this.page - 1) * 3;
    },

    endIndex() {
      return this.page * 3;
    },

    filteredReviews() {
      let filters = [
        this.filterReviewsByCountries,
        this.filterReviewsByType,
        this.filterReviewsByCountStars,
        this.filterReviewsByCountReviews,
        this.filterReviewsByPrice,
      ];

      let reviews = this.reviews;

      for (let filter of filters) {
        reviews = filter(reviews);
      }

      return reviews;
    },

    paginatedReviews() {
      return this.filteredReviews.slice(this.startIndex, this.endIndex);
    },

    hasNextPage() {
      return this.filteredReviews.length > this.endIndex;
    },
  },
};
</script>
<style lang="sass">
.hotels
  flex-grow: 1
  padding-left: 50px

.pagination
  display: flex
</style>
