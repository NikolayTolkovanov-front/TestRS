import { createApp } from "vue";
import App from "./App.vue";
import vSelect from "vue-select";
import SliderPrice from "@vueform/slider";
import StarRating from 'vue-star-rating'

import "vue-select/dist/vue-select.css";
import "@vueform/slider/themes/default.css";
import "@/assets/styles/index.sass"

createApp(App)
  .component("v-select", vSelect)
  .component("v-slider-price", SliderPrice)
  .component("v-star-rating", StarRating)
  .mount("#app");
