<template>
  <div id="rooms">
    <HeaderBlock :header_ligh_style="true" />
    <BreadCrumbs :crumbs="crumbs" />
    <div class="top_distance"></div>
    <ReviewsPoints />
    <div class="rooms-btn_wrapper">
      <GoldButton :text="btnTitle" />
    </div>
    <ReviewsList />
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import GoldButton from "~/components/GoldButton";
import ReviewsPoints from "~/blocks/reviews/ReviewsPoints";
import ReviewsList from "~/blocks/reviews/ReviewsList";

export default {
  components: {
    HeaderBlock,
    ReviewsPoints,
    ReviewsList,
    GoldButton
  },
  data: () => ({
    crumbs: ["Premier Palace Hotel", "відгуки"],
    btnTitle: "Написати відгук"
  })
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";
#rooms{
.top_distance {
  @include mt-227;
  @include max(767) {
    margin-top: 170px;
  }
}
.rooms-btn_wrapper {
  display: none;
  .gold_button {
      width: unset;
    }
  @include max(767) {
    display: block;
    margin-top:32px;
    .gold_button {
      width: calc(100% - 36px);
      margin:0 auto;
    }
  }
}
}

</style>
