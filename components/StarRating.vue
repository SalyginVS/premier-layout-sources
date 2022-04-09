<template>
  <div class="rating-star">
    <span
      v-for="star in stars"
      :key="star"
      @click="changeRating(star)"
      class="star"
      :class="{ active: star <= chosenStar }"
    ></span>
  </div>
</template>

<script>
export default {
  name: "StarRating",
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      stars: [1, 2, 3, 4, 5],

      chosenStar: null,
    };
  },
  methods: {
    changeRating(value) {
      this.chosenStar = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.rating-star {
  display: flex;
  align-items: center;
  .star {
    width: 20px;
    height: 20px;
    display: flex;
    background-color: rgba(#000000, 0.2);
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
    transition: background-image 0.5s ease-in-out;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 12px;
    }
    &:hover {
      background-image: url(/_nuxt/static/images/gold_for_button.svg);
      background-color: unset;
      background-size: cover;
    }
    &.active {
      background-image: url(/_nuxt/static/images/gold_for_button.svg);
      background-color: unset;
      background-size: cover;
    }
  }
}
</style>