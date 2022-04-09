<template>
  <div id="special_offers">
    <HeaderBlock :header_ligh_style="true" />
    <BreadCrumbs :crumbs="crumbs" />
    <div class="top_distance"></div>
    <TitleWithDescription :showSelect="false"  :data="titleData" />
    <div class="margin_block1"></div>
    <Comparision />
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";

import TitleWithDescription from "~/blocks/globals/TitleWithDescription";
import Comparision from "~/blocks/comparision/Comparision";

export default {
  components: {
    HeaderBlock,
    TitleWithDescription,
    Comparision,
  },
  data: () => ({
    crumbs: ["назад до новин"],
    titleData: {
      little_title: "Сравнение отелей",
      title_gold: "Побачте різницю",
      title_black: "між готелями",
    },
  }),
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";
.top_distance {
  @include mt-227;

  @include max(sm) {
    margin-top: 154px;
  }

}
</style>
