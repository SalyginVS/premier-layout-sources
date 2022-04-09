<template>
  <div class="city_guidebook_container">
    <TitleWithDescription :data="titleData" />
    <div class="main-wrapper">
      <div class="blog_kinds_container">
        <div class="blog_kinds_wrapper">
          <p class="a1" v-for="kind in kinds" :key="kind">{{ kind }}</p>
        </div>
      </div>
    </div>
    <CitySlider :line="line" />
  </div>
</template>

<script>
import CitySlider from "~/blocks/globals/sliders/CitySlider";
import TitleWithDescription from "~/blocks/globals/TitleWithDescription";

export default {
  name: "CityGuidebook",
  components: {
    CitySlider,
    TitleWithDescription,
  },
  props: {
    line: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    kinds: [
      "Александрия",
      "Львов",
      "Полтава",
      "Сумы",
      "Поляница",
      "Киев",
      "Харьков",
      "Мишкольц",
      "Одесса",
      "Почаев",
      "Херсон",
    ],
    titleData: {
      little_title: "Міські путівники",
      title_gold: "Наші готелі ",
      title_black: "в 13 подорожах",
    },
  }),
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.city_guidebook_container {
  padding: 192px 0;

  @include max(lg) {
    padding: 164px 0 93px;
  }
  @include max(md) {
    padding: 148px 0 89px;
  }

  @include max(sm) {
    padding: 80px 0 73px;
    background-color: rgb(255, 255, 255);
  }
}
.blog_kinds_container {
  display: flex;
  justify-content: flex-end;
}
.blog_kinds_wrapper {
  margin-top: -66px;
  margin-bottom: 94px;
  padding: 55px;
  //@include pr-168;
  padding-bottom: 33px;
  background-color: #f0edea;
  display: flex;
  flex-wrap: wrap;
  width: 661px;

  @include max(lg) {
    padding: 52px 32px 13px;
    width: 424px;
    margin-top: -62px;
    margin-bottom: 124px;
  }
  @include max(md) {
    width: 375px;
    padding: 32px 14px 21px 32px;
    margin-bottom: 113px;
  }
  @include max(sm) {
    background-color: rgb(255, 255, 255);
    margin-top: 56px;
    margin-bottom: 54px;
    width: 100%;
    padding: 0px 18px;
  }

  p {
    margin-right: 60px;
    @include mb-22;
    cursor: pointer;
    @include max(lg) {
      margin-right: 32px;
      margin-bottom: 18px;
    }
    @include max(md) {
      margin-right: 24px;
      margin-bottom: 14px;
    }
    @include max(md) {
      margin-right: 24px;
      margin-bottom: 26px;
    }
  }
}
</style>
