<template>
  <div class="sights_block_container sights">
    <BigSlideSlider
      :slides="big_slider"
      :config="config"
      :slider_description="big_slider_description"
      :line="line"
      :isConsultingPage="isConsultingPage"
    >
      <ConsultingBigSliderForeground :isConsultingPage="isConsultingPage" />
    </BigSlideSlider>
  </div>
</template>

<script>
import BigSlideSlider from "~/blocks/globals/sliders/BigSlideSlider";
import BigSliderForeground from "~/blocks/consulting/BigSliderForeground";

export default {
  name: "OurHalls",
  components: {
    BigSlideSlider,
    ConsultingBigSliderForeground: BigSliderForeground
  },
  props: {
    line: {
      type: Boolean,
      default: false
    },
    isConsultingPage: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    config: {
      gradient_bg: true
    },
    // foreground: BigSliderForeground,
    big_slider_description: {
      little_title: "кейсы",
      big_title: "Наші проекти"
    },
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
<style lang="scss">
.sights_block_container {
  .slider-description {
    margin-bottom: 80px;
  }
}
</style>

<style lang="scss" scoped>
.sights {
  margin-top: 130px;

  &__description {
    width: 557px;
    margin: auto;
    margin-top: 24px;
    text-align: center;
  }
}
</style>
