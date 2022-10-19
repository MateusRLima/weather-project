import axios from "axios";

var url = "https://api.weatherapi.com/v1";

const key = "5269a7bc72bb4633b21140158221710"




const api = () =>
  axios.create({
    baseURL: url,
    timeout: 20000,
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });

export const getCityWeather = (city) => api().get(`/forecast.json?key=${key}&q=${city}&days=1&aqi=no&alerts=no`);
