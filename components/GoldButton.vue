<template>
  <div class="gold_button">
    <div class="gold_button__bg"></div>
    <template v-if="link">
      <nuxt-link
        :to="link"
        v-if="forwardedFromReview"
        class="gold_button__link"
      >
        <p class="a1">{{ text }}</p>
      </nuxt-link>
      <template v-else>
        <nuxt-link :to="link" class="gold_button__link" :class="{ big_size }">
          <p class="a1">{{ text }}</p>
        </nuxt-link>
      </template>
    </template>
    <div v-else class="gold_button__link" @click="emitClick">
      <p class="a1">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoldButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: null,
    },
    big_size: {
      type: Boolean,
      default: false,
      required: false,
    },
    forwardedFromReview: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    console.log("link", this.link);
  },
  methods: {
    emitClick() {
      this.$emit("buttonClick")
    }
  },
  computed: {
    // linkTo() {
    //   return this.link ? this.link : "/";
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";

.gold_button {
  overflow: hidden;
  padding: 0 56px;
  height: 56px;
  position: relative;

  border: 1px solid;
  border-image: url("../static/images/gold_for_button.svg") 2 stretch; // use stretch, round param has bugs

  transition-duration: 0.6s;
  @include max(900) {
    border: unset;
    background-color: #958362;
    background-image: url("../static/images/gold_for_button.svg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  &:hover {
    @include min(900) {
      background: rgba(255, 255, 255, 0);
      background-size: cover;
      transition-duration: 0.5s;

      .a1 {
        background-color: #958362;
        background-image: url("../static/images/gold_for_button.svg");
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .gold_button__bg {
      opacity: 0;
    }
  }

  cursor: pointer;
  @include max(lg) {
    height: 49px;
    padding: 0 32px;
  }
  @include max(md) {
    padding: 0 30px;
  }
  &__link {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .a1 {
    white-space: nowrap;
  }
}

@media (hover: none) {
  .gold_button {
    border-image: none;
  }
}

.gold_button__bg {
  position: absolute;
  min-width: 100%;
  width: 110%;
  height: 110%;
  top: -5%;
  left: -5%;
  background-image: url("../static/images/gold_for_button.svg");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
  transition: opacity 0.4s ease;
}

.gold_button__link {
  position: relative;
  z-index: 5;
  transition: color 0.4s ease;
}

.big_size {
  width: fit-content;
  min-width: 242px;
  padding: 0 40px;
  margin: 0 auto;

  @include max(lg) {
    padding: 0 26px;
  }
  @include max(md) {
    padding: 0 32px;
  }
}
p {
  text-align: center;
  color: #ffffff;
}
</style>
