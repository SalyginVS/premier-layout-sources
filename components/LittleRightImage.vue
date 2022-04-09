<template>
  <div
    class="little_img_wrapper"
    :class="{ isAboutMobileApp: isAboutMobileApp }"
  >
    <img :src="img" alt />
  </div>
</template>

<script>
export default {
  name: "LittleRightImage",
  props: {
    img: {
      type: String,
      default: ""
    },
    isAboutMobileApp: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";
.little_img_wrapper {
  width: 256px;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(70%);
  @include max(lg) {
    width: 190px;
    transform: translateY(80%);
  }

  img {
    width: 100%;
  }
  &.isAboutMobileApp{
    @include max(1050){
      display:none;
    }
  }
}
</style>
