<template>
  <div id="rooms">
    <HeaderBlock :header_ligh_style="true" />
    <BreadCrumbs :crumbs="crumbs" />
    <div class="top_distance"></div>
    <TitleWithDescription :data="titleData" /> 
    <rooms />
    <transition name="fade">
      <LogInModal @closeModal="closeModal" :openModal="openLogInModal" />
    </transition>
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import TitleWithDescription from "~/blocks/globals/TitleWithDescription";
import Rooms from "~/blocks/rooms/Rooms";
import { mapState } from "vuex";

export default {
  components: {
    HeaderBlock,
    TitleWithDescription,
    Rooms,
  },
  data: () => ({
    crumbs: ["Premier Palace Hotel", "номери"],
    titleData: {
      little_title: "Номера и люксы",
      title_gold: "Ми дбаємо про",
      title_black: "ваш відпочинок",
      text_description:
        "Отели Премьер - это профессиональный высококлассный сервис и внимание к вашим пожеланиям. Всем гостям мы предоставляем бесплатный трансфер, обслуживание на reception 24/7, доставка еды в номера с последними!",
      buttonText: "гарантія найкращої ставки",
    },
  }),
  computed: {
    ...mapState(["openLogInModal"])
  },

  methods: {
   closeModal(){
     this.$store.commit("setCloseLogInModal")
   }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";
#rooms {
  background-color: #fbfbfb;
  #title_with_description {
    @include min(lg) {
      padding-left: 173px;
      padding-right: 158px;
    }
  }
}
#rooms_block{
  @include max(1023){
    padding-left: 48px;
    padding-right: 48px; 
  }
  @include max(767){
    padding-left: 18px;
    padding-right: 18px; 
  }
}
.top_distance {
  @include mt-227;
  @include max(lg){
    margin-top: 237px;
  }
  @include max(md){
    margin-top: 221px;
  }
  @include max(sm){
    margin-top: 168px;
  }
}
</style>