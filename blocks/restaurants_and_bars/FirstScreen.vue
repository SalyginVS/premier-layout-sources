<template>
  <div id="first_screen">
    <BreadCrumbs :crumbs="crumbs" :light_style="true" />
    <FirstScreenText
      title="Ресторани <br> та бари"
      description="Ресторани готелю  Premier Palace Hotel задовольнять смак найбільш вимогливих гостей. Ранок починається з кращого в Києві сніданку, романтичний вечір знову повертає гостей за столики з видом на центр міста."
    />
  </div>
</template>

<script>
import FirstScreenText from "~/blocks/globals/FirstScreenText";

export default {
  name: "FirstScreen",
  components: {
    FirstScreenText
  },
  data: () => ({
    crumbs: ["Premier Palace Hotel", "ресторан"]
  })
};
</script>

<style lang="scss" scoped>
#first_screen {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 74.42%,
      rgba(0, 0, 0, 0.54) 100%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 55.51%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("../../static/images/restaurants_and_bars_fs.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 87px;
  position: relative;
}
</style>