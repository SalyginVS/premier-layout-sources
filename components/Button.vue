<template>
  <div class="simple-button" :class="{ 'white-button': whiteButton }">
    <div v-if="forwardedFromReview" class="a2">
      <span>{{ text }}</span>
    </div>
    <template v-else>
      <nuxt-link :to="link" class="a2"
        ><span>{{ text }}</span></nuxt-link
      >
    </template>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: "/"
    },
    whiteButton: {
      type: Boolean,
      default: false
    },
    forwardedFromReview: {
      type: Boolean,
      default: false
    }
  },
  created() {
    console.log(this.forwardedFromReview);
  },
  updated() {
    console.log(this.forwardedFromReview);
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";

.simple-button {
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid rgba(#000000, 0.1);
  @include max(lg) {
    width: fit-content;
    height: 49px;
    padding: 0 32px;
    //min-width: fit-content;
  }
  @include max(md) {
    padding: 0 30px;
  }
  &.white-button {
    background: #ffffff;
    border: 1px solid #ffffff;
  }
  .a2 {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 140%;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: #000000;
    span {
      color: #000000;
      margin-top: 4px;
    }
  }
}
</style>
