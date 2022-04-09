<template>
  <div class="sights_block_container sights" :class="{isWeddingPage:isWeddingPage}">
    <BigSlideSlider
      :slides="big_slider"
      :config="config"
      :slider_description="slider_description"
      :line="line"
      :isWeddingPage="isWeddingPage"
    >
    <SliderForeground/>
    </BigSlideSlider>
  </div>
</template>

<script>
import TwoTitles from "~/blocks/globals/TwoTitles";
import BigSlideSlider from "~/blocks/globals/sliders/BigSlideSlider";
import SliderForeground from "~/blocks/meeting_and_events/SliderForeground";
// import BigSliderForeground from "~/blocks/city/BigSliderForeground";

// BigSliderForeground

export default {
  name: "OurHalls",
  components: {
    TwoTitles,
    BigSlideSlider,
    SliderForeground
  },
  props: {
    slider_description: {
      type: Object,
      default: () => ({})
    },
    line: {
      type: Boolean,
      default: false
    },
    isWeddingPage: {
      type: Boolean,
      defult: false
    }
  },
  data: () => ({
    config: {
      gradient_bg: true
    },
    // foreground: BigSliderForeground,
    // big_slider_description: {
    //   little_title: "Конференц та банкетні зали",
    //   big_title: "Наші зали",
    //   filters: ["тип події +", "число осіб +"],
    //   description:
    //     'Ми підберемо для Вас максимально комфортні умови, відповідні контексту заходу, його атмосфері <span style="font-weight: 900">+38 (044) 244 13 04</span> <span style="font-weight: 900"> або пишіть на pr@phnr.com</span>',
    //   all: "дивитись всі"
    // },
    big_slider: [
      {
        id: 0,
        image: require("~/static/images/meet_big_slider.jpg")
      },
      {
        id: 1,
        image: require("~/static/images/meet_big_slider.jpg")
      },
      {
        id: 2,
        image: require("~/static/images/meet_big_slider.jpg")
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.sights {
  margin-top: 130px;
  &.isWeddingPage{
    @include max(375){
      margin-top:80px;
    }
  }

  &__description {
    width: 557px;
    margin: auto;
    margin-top: 24px;
    text-align: center;
  }
}
</style>
