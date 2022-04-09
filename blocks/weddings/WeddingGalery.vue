<template>
  <div class="wedding_galery_container">
    <TitleWithDescription :data="titleData" />
    <div class="masonry_galery__container">
      <MasonryGalery :images="images" />
    </div> 
    <div class="slash_button_wrapper">
      <SlashButton text="Подивитись все" />
    </div>
  </div>
</template>

<script>
import TitleWithDescription from "~/blocks/globals/TitleWithDescription";
import MasonryGalery from "~/blocks/globals/MasonryGalery";
import SlashButton from "~/components/SlashButton";

export default {
  name: "WeddingGalery",
  components: {
    TitleWithDescription,
    MasonryGalery,
    SlashButton,
  },
  data: () => ({
    titleData: {
      little_title: "фото Весіль",
      title_gold: "Фотографії",
      title_black: "наших весіль",
      text_description:
        "Начните свою семейную жизнь изысканно и необычно – проведите волшебную брачную ночь в гостинице Premier Palace Hotel, который предлагает лучший банкетный зал для свадьбы в Киеве. Романтическая свадебная церемония.",
    },
    images: [
      require("~/static/images/offer_galery_1.jpg"),
      require("~/static/images/offer_galery_2.jpg"),
      require("~/static/images/offer_galery_3.jpg"),
      require("~/static/images/offer_galery_4.jpg"),
      require("~/static/images/offer_galery_5.jpg"),
      require("~/static/images/offer_galery_6.jpg"),
      require("~/static/images/offer_galery_7.jpg"),
      require("~/static/images/offer_galery_1.jpg"),
      require("~/static/images/offer_galery_2.jpg"),
      require("~/static/images/offer_galery_3.jpg"),
      require("~/static/images/offer_galery_4.jpg"),
      require("~/static/images/offer_galery_5.jpg"),
      require("~/static/images/offer_galery_6.jpg"),
      require("~/static/images/offer_galery_7.jpg"),
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.wedding_galery_container {
  @include mb-140;
  @include mt-140;
}
.masonry_galery__container {
  margin-top: 104px;
}
.slash_button_wrapper {
  margin-top: 54px;
  display: flex;
  justify-content: center;
}
</style>