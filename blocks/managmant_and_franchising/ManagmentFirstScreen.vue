<template>
  <div class="managment_first_screen">
    <div class="first_screen_text">
      <div class="main-wrapper">
        <FirstScreenText
          :title="title"
          :description="description"
          :isManagmentAndFranchisingPage="isManagmentAndFranchisingPage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FirstScreenText from "~/blocks/globals/FirstScreenText";
export default {
  name: "ManagmentFirstScreen",
  props: {
    isManagmentAndFranchisingPage: {
      type: Boolean,
      default: false
    }
  },
  components: {
    FirstScreenText
  },
  data: () => ({
    title: "Управління та франчайзинг",
    description:
      "Коли до організації заходу пред'являються найвищі вимоги, приходить час прийняти безкомпромісне рішення - вибрати місце проведення події. Якщо Ви хочете, щоб Ваш захід залишив у пам'яті гостей тільки найкращі враження, зробіть вибір."
  })
};
</script>
<style lang="scss">
.managment_first_screen {
  #first_screen_text {
    padding-right: unset !important;
  }
}
</style>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.managment_first_screen {
  height: 100vh;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 36.19%,
      rgba(0, 0, 0, 0.54) 100%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 55.51%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("../../static/images/managament_fs.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: soft-light, normal, normal, normal, normal, normal,
    normal;
  padding-top: 81px;
  display: flex;
  align-items: center;
  justify-content: center;
  //   position: relative;
}
</style>
