<template>
  <div class="video_mobile_app">
    <TitleWithDescription
      :data="titleData"
      :isVideoMobileApp="isVideoMobileApp"
    />
    <video
      class="video container"
      src="~/static/mabile_app.mp4"
      playsinline
      autoplay
      muted
      loop
    ></video>
  </div>
</template>

<script>
import TitleWithDescription from "~/blocks/globals/TitleWithDescription";
export default {
  name: "VideoMobileApp",
  components: {
    TitleWithDescription,
  },
  data() {
    return {
      isVideoMobileApp:false,
      titleData: {
        little_title: "про видео",
        title_gold: "Фотографії",
        title_black: "наших весіль",
        text_description:
          "Начните свою семейную жизнь изысканно и необычно – проведите волшебную брачную ночь в гостинице Premier Palace Hotel, который предлагает лучший банкетный зал для свадьбы в Киеве. Романтическая свадебная церемония.",
      },
    };
  },
  created(){
    this.isVideoMobileApp=!this.isVideoMobileApp;
  },
  destroyed() {
    this.isVideoMobileApp=!this.isVideoMobileApp;
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.video_mobile_app {
  @include mb-140;
}
.video {
  width: 100%;
  margin-top: 104px;
  @include min(1024) {
    margin-top: 73px;
  }
  @include max(630) {
    margin-top: 48px;
  }
}
</style>
