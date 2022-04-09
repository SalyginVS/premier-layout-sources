<template>
  <div class="bread_crumbs" :class="{ light_style, arrowInverse }">
    <nuxt-link
      to="/"
      class="crumb_wrapper"
      v-for="crumb in crumbs"
      :key="crumb"
    >
      <p class="a1">{{ crumb }}</p>
      <svg
        width="5"
        height="8"
        viewBox="0 0 5 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.3"
          d="M1 7.5L4 4L1 0.5"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "BreadCrumbs",
  props: {
    crumbs: {
      type: Array,
      default: []
    },
    light_style: {
      type: Boolean,
      default: false
    },
    arrowInverse: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils";

.bread_crumbs {
  position: absolute;
  top: 114px;
  left: 38px;
  z-index: 50;
  @include max(lg) {
    top: 100px;
    left: 30px;
  }
  @include max(md) {
    top: 95px;
  }
  @include max(sm) {
    top: 74.5px;
    left: 16px;
  }
}
.bread_crumbs,
.crumb_wrapper {
  padding: 5px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-wrap: wrap;
  svg {
    margin: 0 12px;
    @include max(sm) {
      margin: 0 10px;
    }
  }
}s

.crumb_wrapper:last-of-type svg {
  display: none;
}
p {
  opacity: 0.5;
}

.light_style {
  p,
  path {
    color: #ffffff;
    stroke: #ffffff;
  }
}
.arrowInverse {
  .crumb_wrapper:first-of-type svg {
    display: block;
  }
  svg {
    transform: rotate(180deg);
  }
  p {
    order: 1;
  }
}
</style>
