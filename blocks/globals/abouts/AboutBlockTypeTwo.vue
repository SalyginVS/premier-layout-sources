<template>
  <div id="about_fitnes_and_spa">
    <div class="main-wrapper">
      <div class="about_fitnes_and_spa_wrapper">
        <img class="left_img" :src="data.left_image" alt />
        <div class="spa_description">
          <p class="little_title">{{ data.little_title }}</p>
          <h3>{{ data.black_title }}</h3>
          <h3 class="italic gold_text gold_text_header">
            {{ data.gold_title }}
          </h3>
          <div class="description_wrapper">
            <div class="text_description">
              <AboutMainDescription :text="data.description" :maxLength="maxLength" :isFitnesAndSpa="isFitnesAndSpa" />
            </div>
            <ContactsBlock v-if="has_contacts" :normal_mode="true" />
          </div>
        </div>
        <LittleRightImage :img="data.small_image" />
      </div>
    </div>
  </div>
</template>

<script>
import ContactsBlock from "~/blocks/globals/ContactsBlock";
import LittleRightImage from "~/components/LittleRightImage";
import AboutMainDescription from "~/blocks/globals/abouts/AboutMainDescription";

export default {
  name: "AboutBlockTypeTwo",
  props: {
    data: {
      type: Object,
      default: () => ({
        left_image: "",
        little_title: "",
        gold_title: "",
        black_title: "",
        description: "",
        small_image: ""
      })
    },
    has_contacts: {
      type: Boolean,
      default: false
    },
    maxLength:{
      type:Number,
      default:40
    },
    isFitnesAndSpa:{
      type:Boolean,
      default:false
    }
  },
  components: {
    ContactsBlock,
    LittleRightImage,
    AboutMainDescription
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";
#about_fitnes_and_spa {
  @include max(767){
    margin-top:80px;
  }
  // margin: 140px 0 311px;
  // display: flex;
  // position: relative;
  // @include min(1441) {
  //   margin: 140px auto 311px;
  // }
  // @include max(lg) {
  //   margin: 124px 0;
  // }
  // @include max(1024) {
  //   margin: 124px 0 334px 0;
  // }
  // // @include max(md) {
  // //   margin: 112px 0;
  // // }
  // @include max(769) {
  //   margin: 112px 0 148px 0;
  // }
  // @include max(sm) {
  //   margin: 0 0 80px;
  //   flex-direction: column;
  // }
}
.about_fitnes_and_spa_wrapper{
  margin: 140px 0 311px;
  display: flex;
  position: relative;
  @include min(1441) {
    margin: 140px auto 311px;
  }
  @include max(lg) {
    margin: 124px 0;
  }
  @include max(1024) {
    margin: 124px 0 334px 0;
  }
  // @include max(md) {
  //   margin: 112px 0;
  // }
  @include max(769) {
    margin: 112px 0 148px 0;
  }
  @include max(sm) {
    margin: 0 0 80px;
    flex-direction: column;
  }
}

.little_img_wrapper {
  @include min(1351) {
    bottom: 0px;
  }
  @include max(1350) {
    bottom: -100px;
  }
  @include max(769) {
    display: none;
  }
}
.left_img {
  width: 36.2vw;
  margin-top: 98px;
  object-fit: cover;
  height: 100%;

  @include max(lg) {
    max-width: 369px;
    margin-top: 80px;
  }
  @include max(md) {
    width: 100%;
    max-width: 305px;
    margin-top: 70px;
  }
  @include max(sm) {
    width: calc(100% - 18px);
    height: 430px;
    max-width: unset;
    margin-top: 0;
    margin-bottom: 32px;
  }
}
.spa_description {
  margin-left: 114px;
  @include max(lg) {
    margin-left: 86px;
  }
  @include max(md) {
    margin-left: 42px;
  }
  @include max(sm) {
    margin-left: 0px;
    padding: 0 18px;
  }
}
.little_title {
  margin-bottom: 32px;
  @include max(lg) {
    margin-bottom: 24px;
  }
  @include max(sm) {
    display: none;
  }
}
.text_description {
  margin-top: 72px;
  @include mb-80;
  width: 434px;
  @include max(lg) {
    margin-top: 40px;
    margin-bottom: 48px;
    width: 368px;
  }
  @include max(md) {
    margin-top: 32px;
    margin-bottom: 40px;
    width: 100%;
    max-width: 326px;
  }
  @include max(sm) {
    margin-top: 25px;
    margin-bottom: 32px;
    width: 100%;
    max-width: unset;
  }
}
.description_wrapper {
  margin-left: 105px;
  @include max(lg) {
    margin-left: 67px;
  }
  @include max(md) {
    margin-left: 48px;
  }
  @include max(sm) {
    margin-left: 0px;
  }
}
</style>
