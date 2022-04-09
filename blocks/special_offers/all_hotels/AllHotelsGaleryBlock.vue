<template>
  <div class="all_hotels_galery_block_container">
      <MasonryGalery :images="images" />
  </div>
</template>

<script>
import MasonryGalery from "~/blocks/globals/MasonryGalery";

export default {
  name: "AllHotelsGaleryBlock",
  components: {
    MasonryGalery
  },
  data: () => ({
    images: [
      require("~/static/images/offer_galery_1.jpg"),
      require("~/static/images/offer_galery_2.jpg"),
      require("~/static/images/offer_galery_3.jpg"),
      require("~/static/images/offer_galery_4.jpg"),
      require("~/static/images/offer_galery_5.jpg"),
      require("~/static/images/offer_galery_6.jpg"),
      require("~/static/images/offer_galery_7.jpg")
    ]
  })
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";
.all_hotels_galery_block_container {
  @include mb-140;
}
</style>
