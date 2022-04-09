<template>
  <div id="fitnes_and_spa_first_screen">
    <div class="main-wrapper">
      <div class="first_screen_text">
        <h1>Зустрічі та <span class="left-r">події</span></h1>
        <p class="p1 first_screen_decription">
          Коли до організації заходу пред'являються найвищі вимоги, приходить
          час прийняти безкомпромісне рішення - вибрати місце проведення події.
          Якщо Ви хочете, щоб Ваш захід залишив у пам'яті гостей тільки найкращі
          враження, зробіть вибір.
        </p>
      </div>
    </div>
    <div class="bottom_bar">
      <KebabFooter
        :footer_list="footer_list"
        :isMob="isMeetingAndEvents"
        :title="title"
      />
    </div>
  </div>
</template>

<script>
import SlashButton from "~/components/SlashButton";
import FirstScreenText from "~/blocks/globals/FirstScreenText";
import KebabFooter from "~/blocks/globals/KebabFooter";
//static info
import { footer_type_two } from "~/assets/js_static_data/footers_first_screens";

export default {
  name: "FirstScreen",
  props: {
    isMeetingAndEvents: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    SlashButton,
    FirstScreenText,
    KebabFooter,
  },
  data: () => ({
    footer_list: footer_type_two,
    title: "Зустрічі та події",
  }),
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
#fitnes_and_spa_first_screen {
  height: 100vh;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 36.19%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 55.51%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),
    url("../../static/images/meeting_fs.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: soft-light, normal, normal, normal, normal, normal,
    normal;
  padding-top: 81px;
  display: flex;
  align-items: center;
  justify-content: center;
  //   position: relative;
  @include max(sm) {
    height: calc(100vh - 40px);
  }
}
.first_screen_text {
  width: 100%;
  margin-left: auto;
  // padding-right: 400px;
  display: flex;
  flex-direction: column;
  @include max(lg) {
    padding-right: 178px;
  }
  @include max(md) {
    padding-right: 69px;
  }
  @include max(767) {
    flex-flow: row wrap;
    justify-content: center;
    max-width: 320px;
    padding: 0;
  }


  h1 {
    @include mb-48;
    // margin-left: auto;
    width: 696px;
    text-align: right;
    align-self: flex-start;

    .left-r {
      margin-right: -5px;
      @include max(1439){
        margin-right: 0;
      }
    }
    @include max(1439) {
      max-width: 524px;
    }
    @include max(1023) {
      max-width: 414px;
    }
    @include max(767) {
      max-width: 246px;
      margin-bottom: 32px;
      text-align: center;
      font-size: 40px;
    }
  }
  p {
    align-self: flex-end;
    @include max(650) {
      width: 319px;
      align-self: unset;
      text-align: center;
    }
  }
  .first_screen_decription {
    width: 380px;
    margin-right: -170px;
    @include max(1439) {
      margin-right: -13vw;
      max-width: 331px;
    }
    @include max(1023) {
      max-width: 281px;
      margin-right: -18vw;
    }
    @include max(767) {
      max-width: 319px;
      word-spacing: normal;
      margin: 0;
    }
    // margin-left: 840px;
  }
}

p,
h1 {
  color: #ffffff;
}
// .vertical_line {
//   height: 1px;
//   width: 32px;
//   margin: 0 24px;
//   background: #ffffff;
//   opacity: 0.2;

// }
.bottom_bar {
  position: absolute;
  width: 100%;
  bottom: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  @include max(767) {
    width: calc(100% - 8px);
    margin: 0 auto;
    border-top: 1px solid #ffffff;
    bottom: 0;
    height: 62px;
    justify-content: center;
  }
}
</style>
