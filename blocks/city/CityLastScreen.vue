<template>
  <div class="city_last_screen">
    <div class="title_with_description_wrapper">
      <TitleWithDescription :data="titleData" :isCityPage="isCityPage" />
    </div>
    <CitySlider :line="line" :isCityPage="isCityPage" />
  </div>
</template>

<script>
import TitleWithDescription from "~/blocks/globals/TitleWithDescription";
import CitySlider from "~/blocks/globals/sliders/CitySlider";

export default {
  name: "CityLastScreen",
  components: {
    TitleWithDescription,
    CitySlider
  },
  props: {
    isCityPage: {
      type: Boolean,
      default: false
    },
    line: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    titleData: {
      little_title: "інші міста",
      title_gold: "Наші готелі",
      title_black: "в 13 подорожах",
      text_description:
        "Premier Palace - це готель високого рівня обслуговування та комфорту. У 2009 році він отримав шість зірок і сім смуг від системи Stars and Stripes, всесвітньо відомої організації по визнанню в індустрії гостинності, а консьєрж готелю."
    }
  }),
};
</script>
<style lang="scss">
@import "../../assets/scss/utils.scss";
</style>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.city_last_screen {
  padding: 96px 0 192px;
  @include mt-140;
  background: #f0edea;
  @include max(768) {
    padding: 148px 0;
  }
  @include max(425) {
    padding: 80px 0;
  }
}
.title_with_description_wrapper {
  @include mb-140;
}
</style>
