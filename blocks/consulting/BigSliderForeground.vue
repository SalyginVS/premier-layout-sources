<template>
  <div
    class="big_slider_foreground_container asight"
    :class="{ consulting_page: isConsultingPage }"
  >
    <div class="content">
      <h4 class="asight__title">Premier Compass Hotel Oleksandriya</h4>
      <div class="asight__characters-wrapper">
        <div class="p1 asight__characters-elem">
          <div class="asight__characters-elem-title">Дизайн</div>
          <div class="asight__characters-elem-line"></div>
        </div>
        <div class="p1 asight__characters-elem">
          <div class="asight__characters-elem-title">Будівництво</div>
          <div class="asight__characters-elem-line"></div>
        </div>
        <div class="p1 asight__characters-elem">
          <div class="asight__characters-elem-title">Підтримка</div>
        </div>
      </div>
      <p class="p1 asight__description">
        Premier Compass Hotel Oleksandriya – это идеальный отель для
        путешествующих на автомобиле. А все дело в его расположении – он
        находится рядом с трассой Е-50, Ужгород-Киев.
      </p>
      <!-- <SlashButton text="Переглянути на карті" mode="light" /> -->
    </div>
  </div>
</template>

<script>
// import SlashButton from "~/components/SlashButton";

export default {
  name: "BigSliderForeground",
  props: {
    isConsultingPage:{
      type:Boolean,
      default:false
    }
  },
  components: {
    // SlashButton,
  },
  created() {
    console.log(this.isConsultingPage);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
/**consulting-page */
.big_slider_foreground_container.consulting_page {
  @include max(375) {
    padding: 32px 29px 0 24px;
    background: #F0EDEA;
  }
  .asight__description {
    @include max(1024) {
      display: none;
    }
  }
  .content{
    @include max(375){
      width:100%;
    }
  }
}
/**consulting-page */
.big_slider_foreground_container {
  height: 100%;
  padding: 40px 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.48) 100%);
}
.asight {
  &__title {
    color: white;
    margin-bottom: 14px;
    @include max(375){
      color:black;
    }
  }
  &__description {
    color: white;
    margin-bottom: 56px;
  }
  /**consulting-page */
  &__characters-wrapper {
    display: flex;
    margin-bottom: 37px;
    // @include max(1024) {
    //   // margin-bottom: 0;
    // }
  }
  &__characters-elem {
    color: white;
    display: flex;
    align-items: center;
    @include max(375){
      color:black;
    }
    &-line {
      border: 1px solid white;
      width: 1px;
      height: 14px;
      margin: 0 20px;
      @include max(1024) {
        margin: 0 10px;
      }
      @include max(375){
        border: 1px solid black;
        opacity: 0.4;
      }
    }
  }
  /**consulting-page */
  .content {
    width: 65%;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: flex-end;
  }
}
</style>
