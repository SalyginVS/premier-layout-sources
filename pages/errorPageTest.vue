<template>
  <div id="error-test">
    <HeaderBlock :header_ligh_style="true" />

    <div class="contant_wrapper">
      <RunningLine :runing_elements="runing_elements" />
      <p class="p2_light error_description">
        Сторінку не знайдено або ви ввели неправильну адресу. Ви можете
        повернутися на головну сторінку або повідомити про помилку, якщо
        вважаєте, що є проблема з нашим сайтом. Ми оцінимо :)
      </p>
    </div>
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import RunningLine from "~/blocks/globals/RunningLine";
import FooterBlock from "~/components/FooterBlock";

export default {
  components: {
    HeaderBlock,
    RunningLine,
    FooterBlock
  },
  data: () => ({
    runing_elements: [
      {
        id: 1,
        text: "заРЕЗЕРВУВАТИ",
        main_image: require("~/static/images/list_bar2.jpg")
      },
      {
        id: 2,
        text: "На головну",
        main_image: require("~/static/images/list_bar3.jpg")
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";
.error_description {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  width: 661px;
  text-align: center;
  @include max(768) {
    width: 534px;
  }
  @include max(767) {
    min-width: 339px;
    width:unset;
  }
}
.runing_line_container {
  top: -30px;
}
.contant_wrapper {
  position: relative;
  margin-top: 81px;
  height: calc(100vh - 81px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url("../static/images/404.svg");
  background-repeat: no-repeat;
  background-size: 859px auto;
  background-position: center;
  @include max(1024) {
    justify-content: center;
    background-size: 600px auto;
    background-position: center 47%;
  }
  @include max(375) {
    justify-content: center;
    background-size: 340px auto;
    background-position: center 47%;
  }
}
// 404.svg
</style>
