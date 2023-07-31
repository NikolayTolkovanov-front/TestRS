<template>
  <div class="review-item">
    <div class="info-block first">
      <div class="info-characters">
        <h2>{{ reviewInfo.name }}</h2>
        <div class="info">
          <v-star-rating :read-only="true" :rating="reviewInfo.stars" :show-rating="false" :star-size="20" />
          <span>{{ reviewInfo.type }}</span>
          <span>*</span>
          <span>{{ reviewInfo.reviews_amount }} отзыва</span>
          <span>
            <img src="@/assets/img/gps.svg" alt="">
            <span>{{ reviewInfo.country }}</span>
          </span>
        </div>
      </div>
      <div class="info-price">
        <p>{{ reviewInfo.min_price }} {{ formattedSymbolPrice }}</p>
        <p>Цена за 1 ночь</p>
      </div>
    </div>
    <div class="info-block second">
      <p class="info-description">{{ reviewInfo.description }}</p>
      <button @click="switchBookHotel">
        <img :src="bookedHotelPathToImage" alt="">
        <span>{{ bookedHotel }}</span>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ReviewItem",
    props: {
      reviewInfo: {
        type: Object
      }
    },

    data() {
      return {
        currencies: {
          "RUR": "₽",
          "USD": "$",
        },

        booked: false,
      }
    },

    methods: {
      switchBookHotel() {
        if (this.booked === false) {
          this.bookHotel()
          return
        }
        
        this.unbookHotel()
      },

      bookHotel() {
        this.booked = true
        this.$emit('bookHotel', this.reviewInfo.name)
      },

      unbookHotel() {
        this.booked = false
        this.$emit('unbookHotel', this.reviewInfo.name)
      }
    },

    computed: {
      formattedSymbolPrice() {
        return this.reviewInfo.currency in this.currencies ? this.currencies[this.reviewInfo.currency] : "W"
      },

      bookedHotelPathToImage() {
        return this.booked ? require('@/assets/img/success.svg') : require('@/assets/img/calendar.svg')
      },

      bookedHotel() {
        return this.booked ? 'Забронировано' : 'Забронировать'
      }
    }
  }
</script>

<style lang="sass" scoped>
.review-item
  margin-top: 20px
  display: flex
  flex-direction: column

.info-characters
  display: flex
  flex-direction: column
  flex-grow: 1

.info-block
  display: flex

.info-block .second
  display: flex

.info
  display: flex
</style>