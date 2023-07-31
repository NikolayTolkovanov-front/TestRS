const hotels = [
  {
    "name": "Marina Inn",
    "country": "Австрия",
    "address": "Фалираки, Родос, Греция",
    "stars": 4,
    "type": "Отель",
    "description": "Этот 4-звездочный отель расположен в центре города. На его территории есть бассейн с террасой и сауна. Из номеров открывается вид на море или на средневековый город.",
    "services": ["Пляж","Кондиционер","Открытый бассейн","Бесплатная парковка","Бесплатный WiFi","Вид на море","Бесплатный завтрак"],
    "min_price": 2789.00,
    "currency": "RUR",
    "rating": 4,
    "reviews_amount": 18,
    "last_review": "Отличное расположение. Вкусный завтрак. Отдыхали с детьми - все понравилось."
  },
  {
    "name": "Mondrian Suites",
    "country": "Греция",
    "address": "Фалираки, Родос, Греция",
    "stars": 5,
    "type": "Апартаменты",
    "description": "Из окон открывается вид на город.К услугам гостей номера-студио с балконом и чайником в 2,7 км от пляжа.",
    "services": ["Пляж","Кондиционер","Открытый бассейн","Платная парковка","Бесплатный WiFi","Вид на море"],
    "min_price": 3245.20,
    "currency": "RUR",
    "rating": 5,
    "reviews_amount": 4,
    "last_review": "Потрясающее место, в номере есть все необходимое. Красивый вид на море."
  },
  {
    "name": "Sunny Appartments",
    "country": "Греция",
    "address": "Родос, Родос, Греция",
    "stars": 2,
    "type": "Апартаменты",
    "description": "Все номера и апартаменты оборудованы кондиционером и телевизором с плоским экраном. Также в распоряжении гостей тостер и чайник.",
    "services": ["Пляж","Кондиционер","Бесплатная парковка","Бесплатный WiFi"],
    "min_price": 1153.00,
    "currency": "RUR",
    "rating": 2,
    "reviews_amount": 36,
    "last_review": "Бассейн очень маленький. Кормят невкусно. Больше не поедем."
  },
  {
    "name": "Super All Inclusive Hotel",
    "country": "Греция",
    "address": "Родос, Родос, Греция",
    "stars": 4,
    "type": "Отель",
    "description": "Все номера оснащены телевизором с плоским экраном. Из некоторых номеров открывается вид на море или город.",
    "services": ["Пляж","Кондиционер","Открытый бассейн","Бесплатный WiFi","Вид на море","Бесплатный завтрак"],
    "min_price": 3689.00,
    "currency": "RUR",
    "rating": 4.1,
    "reviews_amount": 14,
    "last_review": "Недалёко от пляжа и старого города, вокруг много разных магазинчиков"
  },
  {
    "name": "Adams Hotel",
    "country": "Греция",
    "address": "Родос, Родос, Греция",
    "stars": 3,
    "type": "Отель",
    "description": "Отель расположен всего в 100 метрах от пляжа и в 5-ти минутах ходьбы от исторической части города, недалеко от всех основных достопримечательностей. Из отеля открывается вид на море. К услугам гостей спокойный открытый бассейн.",
    "services": ["Пляж","Кондиционер","Открытый бассейн","Бесплатная парковка","Бесплатный WiFi","Бесплатный завтрак"],
    "min_price": 1896.00,
    "currency": "RUR",
    "rating": 0,
    "reviews_amount": 0,
    "last_review": ""
  },
  {
    "name": "Zorion",
    "country": "Австрия",
    "address": "Родос, Родос, Греция",
    "stars": 1,
    "type": "Отель",
    "description": "Отель расположен всего в 100 метрах от пляжа и в 5-ти минутах ходьбы от исторической части города, недалеко от всех основных достопримечательностей. Из отеля открывается вид на море. К услугам гостей спокойный открытый бассейн.",
    "services": ["Пляж","Кондиционер","Открытый бассейн","Бесплатная парковка","Бесплатный WiFi","Бесплатный завтрак"],
    "min_price": 1896.00,
    "currency": "RUR",
    "rating": 0,
    "reviews_amount": 0,
    "last_review": ""
  }
]

const countries = [
  { id: 1, country: "Австрия", enabled: false },
  { id: 2, country: "Аргентина", enabled: false },
  { id: 3, country: "Армения", enabled: false },
  { id: 4, country: "Беларусь", enabled: false },
  { id: 5, country: "Россия", enabled: false },
  { id: 6, country: "США", enabled: false },
  { id: 7, country: "Франция", enabled: false },
  { id: 8, country: "Япония", enabled: false },
]

const countStarsfilters = [
  {
    id: 1,
    name: "1 star",
    value: "1 звезда",
    numberValue: 1,
    enabled: false
  },
  {
    id: 2,
    name: "2 stars",
    value: "2 звезды",
    numberValue: 2,
    enabled: false
  },
  {
    id: 3,
    name: "3 stars",
    value: "3 звезды",
    numberValue: 3,
    enabled: false
  },
  {
    id: 4,
    name: "4 stars",
    value: "4 звезды",
    numberValue: 4,
    enabled: false
  },
  {
    id: 5,
    name: "5 stars",
    value: "5 звезд",
    numberValue: 5,
    enabled: false
  }
]

// Здесь можно изменить логику и получать данные с сервера
export const getReviewsInfo = () => {
  return hotels
}

export const getCountries = () => {
  return countries
}

export const getCountStarsFilters = () => {
  return countStarsfilters
}