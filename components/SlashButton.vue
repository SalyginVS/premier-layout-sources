<template>
  <nuxt-link :to="linkTo" class="slash_button a1" v-if="isLink">
    <img v-if="mode === 'light'" src="~/static/images/button_slash.svg" alt />
    <img
      v-else-if="mode === 'dark'"
      src="~/static/images/button_slash_dark.svg"
      alt
    />
    <img v-else src="~/static/images/button_slash_gold.png" alt />

    <span :class="{ slash_button_light: mode === 'light' }">{{ text }}</span>
  </nuxt-link>
  <div v-else class="slash_button a1" @click="$emit('openModal')">
    <img v-if="mode === 'light'" src="~/static/images/button_slash.svg" alt />
    <img
      v-else-if="mode === 'dark'"
      src="~/static/images/button_slash_dark.svg"
      alt
    />
    <img v-else src="~/static/images/button_slash_gold.png" alt />
    <span :class="{ slash_button_light: mode === 'light' }">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "SlashButton",
  props: {
    text: {
      type: String,
    },
    mode: {
      type: String,
      default: "gold",
    },
    link: {
      type: String,
      default: null,
    },
    isLink: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    linkTo() {
      if (this.link) {
        return this.link;
      } else {
        return "/";
      }
    },
  },
  mounted() {
    console.log(this.mode);
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";

.slash_button {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;

  transition-duration: 0.5s;

  @include min(sm) {
    @media (hover: hover) {
      &:hover {
        transition-duration: 0.5s;
        position: relative;
        // transform: rotate(60deg) translateY(-0.5px) ;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        // -webkit-transform: rotate(60deg);
        // transform: rotate(60deg);
        // will-change: transform;

    transition-duration: 0.5s;

    img {
      transition-duration: 0.5s;
      position: relative;
      transform: rotate(60deg) translateY(-0.5px) ;
      //top: -0.5px;
    }
  }

  img {
    margin-right: 18px;
    transition-duration: 0.5s;
    will-change: transform;

    @include max(lg) {
      margin-right: 16px;
    }
    @include max(md) {
      margin-right: 6px;
    }
    @include max(sm) {
      margin-right: 16px;
    }
  }
}

.slash_button_light {
  color: #ffffff;
  @include max(md) {
    font-size: 10px;
  }
}
  }
}
</style>
