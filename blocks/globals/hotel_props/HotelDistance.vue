<template>
  <div @click="$emit('openMapModal')" class="locale">
    <img src="~/static/images/pin_light.svg" alt />
    <p class="p1 locale__text">{{ place }}</p>
  </div>
</template>

<script>
export default {
  name: "HotelDistance",
  props: {
    place: {
      type: String,
      default: "1.2 км до центра міста",
    },
  }, 
};
</script>

<style lang="scss" scoped>
.locale {
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    margin-right: 12px;
  }
  &__text {
    color: #ffffff;
    font-size: 12px;
  }
}
</style>