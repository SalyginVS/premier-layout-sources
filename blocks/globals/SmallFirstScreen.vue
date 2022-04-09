<template>
  <div
    id="small_first_screen"
    :style="{
      backgroundImage: ` linear-gradient(180deg, rgba(0, 0, 0, 0) 44.59%, rgba(0, 0, 0, 0.54) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${image})`
    }"
    :class="{ 'full-screen': fullScreen, hotel_school_page: isHotelSchoolPage }"
  >
    <h2 class="main-title main-wrapper">{{ title }}</h2>
    <div class="footer_wrapper" :class="{mob_footer:isMob}">
      <div class="p1 footer__extra-info" v-if="footerExtraInfo">
        від
        <h6>{{ footerExtraInfo }}</h6>
        за ніч
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import ClearComponent from "~/components/ClearComponent";

export default {
  name: "SmallFirstScreen",
  props: {
    image: {
      type: String,
      default: require("~/static/images/one_rest.jpg")
    },
    title: {
      type: String,
      default: "Premier"
    },
    footerExtraInfo: {
      type: String,
      default: null
    },
    fullScreen: {
      type: Boolean,
      default: false
    },
    isHotelSchoolPage: {
      type: Boolean,
      default: false
    },
    isMob:{
      type:Boolean,
      default:false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
/**hotel_school_page */
#small_first_screen.hotel_school_page {
  .main-title{
    @include max(964){
      width:100%;
    }
  }
}
/**hotel_school_page */
#small_first_screen {
  height: 87vh;
  padding-top: 81px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @include max(lg) {
    height: 598px;
  }
  @include max(md) {
    height: 635px;
  }

  @include max(sm) {
    height: 100vh;
  }
  &.full-screen {
    h2 {
      width: calc(100% - 400px);
    }
  }
}
h2 {
  color: #ffffff;
  width: 50%;
  text-align: center;
  padding-bottom: 30px;
  @include max(md) {
    width: 80%;
  }
  @include max(sm) {
    width: calc(100% - 36px);
  }
}
.footer_wrapper {
  position: absolute;
  width: 100%;
  bottom: 34px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @include max(lg) {
    bottom: 32px;
  }
  @include max(md) {
    bottom: 24px;
  }
}
.footer__extra-info {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  h6 {
    margin: 0 12px;
    color: #ffffff;
  }
}
.mob_footer{
  @include max(767) {
      width: calc(100% - 8px);
      margin:0 auto;
      border-top: 1px solid #FFFFFF;
      bottom: 0;
      left:4px;
      height: 62px;
      justify-content: center;
    }
}
</style>
