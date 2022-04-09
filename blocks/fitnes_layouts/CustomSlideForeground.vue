<template>
  <div class="massage_slide_foreground">
    <h4 class="js_hide_cursor main-content swiper-no-swiping">
      {{ custom_foreground_props.title }}
    </h4>
    <nuxt-link
      to="/"
      class="details a1 js_hide_cursor js_hide_cursor main-content"
      >{{ custom_foreground_props.button }}</nuxt-link
    >
  </div>
</template>

<script>
export default {
  name: "CustomSlideForeground",
  props: {
    custom_foreground_props: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.massage_slide_foreground {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.12) 100%
  );
}
h4 {
  @include mb-24;
}
.details,
h4 {
  color: #ffffff;
}
.details {
  width: fit-content;
  border-bottom: 1px solid rgba(#ffffff, 0.5);
  color: rgba(#ffffff, 0.8);
  cursor: pointer;
  pointer-events: all;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
}
.main-content {
  pointer-events: all;
  user-select: text;
}
</style>
