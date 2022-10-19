<template>
  <div>
    <v-container>
      <v-row class="mb-5" justify="center">
        <v-btn
          @click="pushToCityWeather('Dallol')"
          width="125px"
          text
          color="white"
          class="title letter-spacing font-weight-light text-capitalize"
        >
          Dallol
        </v-btn>
        <v-btn
          @click="pushToCityWeather('Fairbanks')"
          width="125px"
          text
          color="white"
          class="title font-weight-light text-capitalize"
          >Fairbanks
        </v-btn>
        <v-btn
        @click="pushToCityWeather('London')"
          width="125px"
          text
          color="white"
          class="title font-weight-light text-capitalize"
          >London</v-btn
        >
      </v-row>
      <v-row justify="center">
        <v-btn
          @click="pushToCityWeather('Recife')"
          width="125px"
          text
          color="white"
          class="title font-weight-light text-capitalize"
        >
          Recife
        </v-btn>
        <v-btn
          @click="pushToCityWeather('Vancouver')"
          width="125px"
          text
          color="white"
          class="title font-weight-light text-capitalize"
        >
          Vancouver
        </v-btn>
        <v-btn
          @click="pushToCityWeather('Yakutsk')"
          width="125px"
          text
          color="white"
          class="title font-weight-light text-capitalize"
        >
          Yakutsk
        </v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ButtonGroup",

  methods: {
    pushToCityWeather(city){
      this.$router.push({path: "/weather", query: { city: `${city}` } })
    }
  },
};
</script>

<style scoped></style>
