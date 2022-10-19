<template>
  <div
    :class="{ city: true, rainny: isRainny, snowy: isSnowy, sunny: isSunny }"
  >
    <v-fade-transition >
      <v-progress-circular indeterminate v-if="loading"></v-progress-circular>
      <v-container v-else>
        <v-row>
          <v-btn @click="returnToWeather()" large icon
            ><v-icon large :color="buttonColor">mdi-arrow-left</v-icon></v-btn
          >
        </v-row>
        <v-row class="row-center-text">
          <v-col>
            <p class="title-city mb-0">{{ $route.query.city.toUpperCase() }}</p>
            <p class="condition-style">{{ condition.toLowerCase() }}</p>
          </v-col>
        </v-row>
        <v-row justify="center" align="center" class="row-center-text">
          <v-col class="temperature" align-self="right" cols="6">
            <p class="mb-0">{{ averageTemp }}</p>
          </v-col>
          <v-col class="text" align-self="center" cols="5">
            <v-row>
              <p class="mb-0 celsius">°C</p>
            </v-row>
            <v-row>
              <v-icon color="#6D6D6D">mdi-arrow-up-thin</v-icon>
              <p class="mb-0">{{ maxTemp }}°</p>
            </v-row>
            <v-row>
              <v-icon color="#6D6D6D">mdi-arrow-down-thin</v-icon>
              <p class="mb-0">{{ minTemp }}°</p>
            </v-row>
          </v-col>
        </v-row>
        <v-row align="center" justify="center" class="m-0">
          <img :src="conditionIcon" />
        </v-row>
        <v-row class="row-center-text">
          <v-col>
            <p class="mb-0 subtitle-2">dawn</p>
            <img :src="dawnIcon" />
            <p>{{ dawnTemp }}° C</p>
          </v-col>
          <v-col>
            <p class="mb-0 subtitle-2">morning</p>
            <img :src="morningIcon" />
            <p>{{ morningTemp }}° C</p>
          </v-col>
          <v-col>
            <p class="mb-0 subtitle-2">afternoon</p>
            <img :src="afternoonIcon" />
            <p>{{ afternoonTemp }}° C</p>
          </v-col>
          <v-col>
            <p class="mb-0 subtitle-2">night</p>
            <img :src="nightIcon" />
            <p>{{ nightTemp }}° C</p>
          </v-col>
        </v-row>
        <v-row class="row-center-text">
          <v-col>
            <p class="mb-0 caption">wind speed</p>
            <p class="mb-0 subtitle-2">{{ maxWind }} m/s</p>
          </v-col>
          <v-divider inset vertical class="divider" />
          <v-col>
            <p class="mb-0 caption">sunrise</p>
            <p class="mb-0 subtitle-2">{{ sunrise }}</p>
          </v-col>
          <v-divider inset vertical class="divider" />
          <v-col>
            <p class="mb-0 caption">sunset</p>
            <p class="mb-0 subtitle-2">{{ sunset }}</p>
          </v-col>
          <v-divider inset vertical class="divider" />
          <v-col>
            <p class="mb-0 caption">humidity</p>
            <p class="mb-0 subtitle-2">{{ avarageHumidity }}%</p>
          </v-col>
        </v-row>
      </v-container>
    </v-fade-transition>
  </div>
</template>

<script>
import { getCityWeather } from "../../services";

export default {
  data: () => ({
    city: "",
    condition: "",
    conditionIcon: "",
    averageTemp: "",
    maxTemp: "",
    minTemp: "",
    dawnTemp: "",
    dawnIcon: "",
    morningTemp: "",
    morningIcon: "",
    afternoonTemp: "",
    afternoonIcon: "",
    nightTemp: "",
    nightIcon: "",
    avarageHumidity: "",
    sunrise: "",
    sunset: "",
    maxWind: "",
    isRainny: false,
    isSnowy: false,
    isSunny: false,
    buttonColor: "",
    loading: false,
  }),

  mounted() {
    this.loading = true;
    getCityWeather(this.$route.query.city.toLowerCase()).then((res) => {
      this.condition = res.data.forecast.forecastday[0].day.condition.text;
      if (this.condition.includes("sno") || this.condition === "Snowy") {
        this.isSnowy = true;
      } else if (
        this.condition.includes("sunny") ||
        this.condition === "Sunny"
      ) {
        this.isSunny = true;
        this.buttonColor = "white";
      } else if (
        this.condition.includes("rain") ||
        this.condition.includes("Cloudy") ||
        this.condition.includes("cloudy")
      ) {
        this.isRainny = true;
        this.buttonColor = "white";
      }
      this.conditionIcon = res.data.forecast.forecastday[0].day.condition.icon;
      this.averageTemp = res.data.forecast.forecastday[0].day.avgtemp_c;
      this.maxTemp = res.data.forecast.forecastday[0].day.maxtemp_c;
      this.minTemp = res.data.forecast.forecastday[0].day.mintemp_c;
      this.dawnTemp = res.data.forecast.forecastday[0].hour[3].temp_c;
      this.dawnIcon = res.data.forecast.forecastday[0].hour[3].condition.icon;
      this.morningTemp = res.data.forecast.forecastday[0].hour[9].temp_c;
      this.morningIcon =
        res.data.forecast.forecastday[0].hour[9].condition.icon;
      this.afternoonTemp = res.data.forecast.forecastday[0].hour[15].temp_c;
      this.afternoonIcon =
        res.data.forecast.forecastday[0].hour[15].condition.icon;
      this.nightTemp = res.data.forecast.forecastday[0].hour[21].temp_c;
      this.nightIcon = res.data.forecast.forecastday[0].hour[21].condition.icon;
      this.avarageHumidity = res.data.forecast.forecastday[0].day.avghumidity;
      this.sunrise = res.data.forecast.forecastday[0].astro.sunrise;
      this.sunset = res.data.forecast.forecastday[0].astro.sunset;
      this.maxWind = res.data.forecast.forecastday[0].day.maxwind_mph;
      this.loading = false;
    });
  },

  methods: {
    returnToWeather() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss">
.city {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.row-center-text {
  text-align: center;
}

.temperature {
  width: 5px;
  text-align: right;
  font-size: 5rem;
  h1 {
    font-weight: 400 !important;
  }
}

.rainny {
  background: linear-gradient(
    180deg,
    rgba(97, 105, 120, 1) 50%,
    rgba(60, 66, 82, 1) 100%
  );

  color: #fefefe;
}

.sunny {
  background: linear-gradient(
    180deg,
    rgba(87, 203, 220, 1) 50%,
    rgba(57, 156, 175, 1) 100%
  );

  color: #fefefe;
}

.snowy {
  background: linear-gradient(
    180deg,
    rgba(224, 224, 224, 1) 50%,
    rgba(163, 163, 163, 1) 100%
  );
}

.divider {
  height: 45px;
}

.celsius {
  font-size: 1.5rem;
}

.title-city {
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 3px;
  height: 3rem;
}

.condition-style {
  font-size: 1.5rem;
  font-weight: 200;
}
</style>
