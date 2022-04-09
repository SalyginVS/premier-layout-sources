<template>
  <div id="first_screen_main">
    <div class="content_wrapper main-wrapper ">
      <FirstScreenText
        title="місто має подобатись"
        header="Міста відпочинку"
        description="Є безліч причин, чому ми їздимо у Київ, Харків, Львів, Полтаву... І це точно не сніданок у ліжко і не білий м’який халат. Але саме вони роблять так, щоб потім на питання “Ну як тобі місто?” вам відповіли: “Хороше місто”"
        :filtersArray="filtersArray"
      />
      <div class="button_wrapper">
        <SlashButton text="Дізнайтеся більше" mode="light" link="/rooms"/>
      </div>
      <div class="first_screen__scroll_line_wrapper">
        <div class="first_screen__scroll_line">
          <ScrollLine @click="alert('hello')"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlashButton from "~/components/SlashButton";
import FirstScreenText from "~/blocks/globals/FirstScreenText";
import ScrollLine from "~/components/ScrollLine";

export default {
  name: "FirstScreen",
  components: {
    SlashButton,
    FirstScreenText
  },
  data(){
    return{
      filtersArray: [
      {
        id: 0,
        name: "КИЇВ",
        filters: [
          {
            name: "Premier Palace Hotel",
          },
          {
            name: "Premier Hotel Lybid",
          },
          {
            name: "Premier Hotel Rus",
          },
        ],
      },
      {
        id: 1,
        name: "ДНІПРО",
        filters: [
          {
            name: "Premier Hotel Abri",
          },
        ],
      },
      {
        id: 2,
        name: "ЛЬВІВ",
        filters: [
          {
            name: "Premier Hotel Dnister",
          },
        ],
      },
      {
        id: 3,
        name: "СУМИ",
        filters: [
          {
            name: "Premier Hotel Shafran",
          },
        ],
      },
      {
        id: 4,
        name: "ХАРКІВ",
        filters: [
          {
            name: "Premier Hotel Shafran",
          },
        ],
      },










    ],
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

#first_screen_main {
  height: 100vh;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 74.42%,
      rgba(0, 0, 0, 0.54) 100%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 55.51%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("../../static/images/first_screen_main.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 81px;
  display: flex;
  align-items: center;
  position: relative;
  @include max(375) {
    display: block;
    padding-top:63px;
  }
}
.content_wrapper {
  @include max(lg) {
    width: 100%;
    padding-top: 71px;
  }
  @include max(sm) {
    padding-top: unset;
  }
  @include max(375) {
    margin-top: 137px;
  }
}
.button_wrapper {
  margin-top: 61px;
  @include max(lg) {
    margin-top: 40px;
  }
  @include max(md) {
    margin-top: 32px;
  }
  @include max(sm) {
    display: none;
  }
}
.slash_button {
  margin-left: 840px;
  @include max(lg) {
    margin-left: auto;
    margin-right: 305px;
  }
  @include max(md) {
    margin-right: 180px;
  }
}
.first_screen{
  &__scroll_line_wrapper {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 100%;
    max-width: 1440px;
    @include max(lg) {
      display: none;
    }
  }
  &__scroll_line {
    position: absolute;
    bottom: 0;
    left: 38px;
  }  
}

</style>
