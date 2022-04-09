<template>
  <div id="error">
    <HeaderBlock :header_ligh_style="true" />
    <RunningLine :runing_elements="runing_elements" />
    <div class="contant_wrapper">
      <p
        class="p2_light error_description"
      >Сторінку не знайдено або ви ввели неправильну адресу. Ви можете повернутися на головну сторінку або повідомити про помилку, якщо вважаєте, що є проблема з нашим сайтом. Ми оцінимо :)</p>
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
.error_description {
  width: 661px;
  margin: auto;
  text-align: center;
  margin-bottom: 32px;
}
.contant_wrapper {
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url("../static/images/404.svg");
  background-repeat: no-repeat;
  background-size: 859px auto;
  background-position: center;
}
// 404.svg
</style>