<template>
  <div class="foreground_container" :class="{ styleSubtitle }">
    <p class="a1">{{data}}</p>
  </div>
</template>

<script>
export default {
  name: "HallSliderForeground",
  props: {
    styleSubtitle: {
      type: Boolean,
      default: false,
    },
    data:{
      type: String,
      default: "головний зал"
    }
  },
};
</script>

<style lang="scss" scoped>
.foreground_container {
  padding: 24px;
  background: transparent;
  .a1 {
    font-weight: 450;
    color: rgba(#ffffff, 0.5);
  }
  &.styleSubtitle {
    .a1 {
      color: rgba(#000000, 0.5);
    }
  }
}
</style>