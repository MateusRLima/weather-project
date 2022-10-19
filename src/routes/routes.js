import Vue from "vue";
import VueRouter from "vue-router";

import Weather from "../views/Weather/Weather.vue";
import CityWeather from "../views/CityWeather/CityWeather.vue"

Vue.use(VueRouter);

// Criação das rotas utilizando o Vue Router 3.

const routes = [
  {
    path: "/",
    component: Weather,
  },
  {
    path: "/weather/",
    component: CityWeather,
    props: route => ({ query: route.query.q })
  },
];

const router = new VueRouter({
  routes,
});

export default router;
