<template>
  <div
    id="one-room_first_screen"
    :style="{
      backgroundImage: ` linear-gradient(180deg, rgba(0, 0, 0, 0) 44.59%, rgba(0, 0, 0, 0.54) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${image})`
    }"
    :class="{ 'full-screen': fullScreen}"
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

export default {
  name: "OneRoomFirstScreen",
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
#one-room_first_screen.hotel_school_page {
  .main-title{
    @include max(964){
      width:100%;
    }
  }
}
/**hotel_school_page */
#one-room_first_screen {
  height: 100vh;
  padding-top: 81px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex-direction: column;
  @include max(lg) {
    height: 598px;
  }
  @include max(md) {
    height: 635px;
  }
  &.full-screen {
    h2 {
      width: calc(100% - 400px);
    }
  }
}
h2 {
  color: #ffffff;
  width: 80%;
  text-align: center;
  @include min(375) {
    width: calc(100% - 60 * 2px);
  }
}
.footer_wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 72px;
  @include min(1024){
    margin-top: 64px;
  }
  @include min(768){
    margin-top: 60px;
  }
    @include min(375){
    margin-top:40px;
  }
}
.footer__extra-info {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  h6 {
    //font-family: AvenirNextCyrRegular, sans-serif;
    font-size: 32px;
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
