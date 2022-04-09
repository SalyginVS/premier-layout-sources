<template>
  <div id="one-news">
    <HeaderBlock :header_ligh_style="true" />
    <BreadCrumbs :crumbs="crumbs" :arrowInverse="true" />
    <div class="top_distance"></div>
    <div class="main-wrapper">
      <OneNewsFirstBlock />
      <OneNewsQuoteBlock :light="true" />
      <PlacesBlock />
    </div>
    <OurNews :data="dataTile" />
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import BreadCrumbs from "~/components/BreadCrumbs";
import OneNewsFirstBlock from "~/blocks/our_blog/one_news/OneNewsFirstBlock";
import OneNewsQuoteBlock from "~/blocks/our_blog/one_news/OneNewsQuoteBlock";
import OurNews from "~/blocks/our_blog/one_news/OurNews";
import PlacesBlock from "~/blocks/our_blog/one_news/PlacesBlock";

export default {
  components: {
    HeaderBlock,

    OneNewsFirstBlock,
    OneNewsQuoteBlock,
    PlacesBlock,
    OurNews,
    BreadCrumbs,
  },
  data: () => ({
    crumbs: ["назад до новин"],
    dataTile: {
      label: "17 feb 2020",
    },
  }),
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";
.top_distance {
  @include mt-227;

  @include max(lg) {
    margin-top: 239px;
  }
  @include max(md) {
    margin-top: 201px;
  }
  @include max(sm) {
    margin-top: 164px;
  }
}
</style>
