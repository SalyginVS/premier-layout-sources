<template>
  <div
    class="sights_block_container sights"
    :class="{ isCityPage: isCityPage }"
  >
    <TwoTitles main_title="Пам'ятки Києва" little_title="Пам'ятки" />
    <p class="p1 sights__description">
      Premier Palace Hotel може запропонувати Вам найрізноманітніший вибір
      локацій на будь-який смак - починаючи з Гранд Холу «Софіївський», здатним.
    </p>
    <BigSlideSlider
      :slides="big_slider"
      :config="config"
      :foreground="foreground"
      :line="line"
      :isCityPage="isCityPage"
    >
      <BigSliderForeground :isCityPage="isCityPage" />
    </BigSlideSlider>
  </div>
</template>

<script>
import TwoTitles from "~/blocks/globals/TwoTitles";
import BigSlideSlider from "~/blocks/globals/sliders/BigSlideSlider";
import BigSliderForeground from "~/blocks/city/BigSliderForeground";

// BigSliderForeground

export default {
  name: "SightsBlock",
  components: {
    TwoTitles,
    BigSlideSlider,
    BigSliderForeground
  },
  props: {
    line: {
      type: Boolean,
      default: false
    },
    isCityPage: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    config: {
      bg_part_style: true
    },
    foreground: BigSliderForeground,
    big_slider: [
      {
        id: 0,
        image: require("~/static/images/city_slider.jpg")
      },
      {
        id: 1,
        image: require("~/static/images/city_slider.jpg")
      },
      {
        id: 2,
        image: require("~/static/images/city_slider.jpg")
      },
      {
        id: 3,
        image: require("~/static/images/city_slider.jpg")
      },
      {
        id: 4,
        image: require("~/static/images/city_slider.jpg")
      },
      {
        id: 5,
        image: require("~/static/images/city_slider.jpg")
      },
      {
        id: 6,
        image: require("~/static/images/city_slider.jpg")
      },
      {
        id: 7,
        image: require("~/static/images/city_slider.jpg")
      },
      {
        id: 8,
        image: require("~/static/images/city_slider.jpg")
      },
    ]
  })
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.sights {
  margin-top: 130px;
  @include max(425) {
    margin-top: 80px;
  }

  &__description {
    width: 564px;
    margin: auto;
    margin-top: 24px;
    text-align: center;
    margin-bottom: 80px;
  }
  &.isCityPage {
    .sights__description {
      @include max(1024) {
        max-width: 351px;
        margin-bottom: 40px;
      }
    }
  }
}
</style>
