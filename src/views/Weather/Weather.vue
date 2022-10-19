<template>
  <div class="weather-container">
    <h2 class="font-weight-light letter-spacing">WEATHER</h2>
    <p class="font-weight-thin letter-spacing">select a city</p>
    <img
      class="mt-10 mb-10"
      src="../../assets/planeta-terra_1.png"
      width="125"
      height="125"
    />
    <button-group />
  </div>
</template>

<script>
import ButtonGroup from "../../components/ButtonGroup.vue";

export default {
  name: "Weather",

  data: () => ({}),

  components: {
    "button-group": ButtonGroup,
  },
};
</script>

<style lang="scss">
$background-color: #0F0F0F;
$text-color: #FEFEFE;

.weather-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: $background-color;
  height: 100%;
  color: $text-color;
}


.letter-spacing {
  letter-spacing: 2px;
}
</style>
