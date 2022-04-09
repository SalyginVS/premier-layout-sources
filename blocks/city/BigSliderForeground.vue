<template>
  <div
    class="big_slider_foreground_container asight"
    :class="{ 'city-page': isCityPage }"
  >
    <div class="big_slider_foreground_container_wrapper">
      <h4 class="asight__title">Майдан Незалежності</h4>
      <p class="p1 asight__description">
        Відновіть сили та відчуйте внутрішню гармонію, завітавши до Premier
        Palace Wellness Club. В оздоровчий комплекс Premier Palace Wellness Club
        входять: VIP-сауна, фінська сауна, турецька лазня, солярій, тренажерний
        зал із найсучаснішим обладнанням.
      </p>
      <SlashButton v-if="isCityPage && breakpoints<=425"
        text="Переглянути на карті"
        mode="dark"
        class="js_hide_cursor"
      />
      <SlashButton v-else
        text="Переглянути на карті"
        mode="light"
        class="js_hide_cursor"
      />
    </div>
  </div>
</template>

<script>
import SlashButton from "~/components/SlashButton";
import { globalMixin } from "~/plugins/mixins";
export default {
  name: "BigSliderForeground",
  mixins:[globalMixin],
  props: {
    isCityPage: {
      type: Boolean,
      default: false
    }
  },
  components: {
    SlashButton
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.big_slider_foreground_container {
  height: 100%;
  padding: 40px 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  z-index: 10;
  // background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
  //   linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.48) 100%);
  &.city-page {
    padding: 32px 26px 39px 24px;
    @include max(425) {
      background-color: #f0edea;
    }
    .asight__description {
      @include max(425) {
        margin-bottom: 24px;
        display: block;
        color: black;
      }
    }
    .asight__title {
      @include max(425) {
        color: black;
      }
    }
    .big_slider_foreground_container_wrapper {
      @include max(425) {
        max-width: 100%;
      }
    }
  }
}
.big_slider_foreground_container_wrapper {
  max-width: 47%;
}
.asight {
  &__title {
    color: white;
    margin-bottom: 15px;
  }
  &__description {
    color: white;
    margin-bottom: 56px;
    @include max(1024) {
      display: none;
    }
  }
}
.slash_button {
  pointer-events: all;
}
</style>
