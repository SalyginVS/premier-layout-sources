<template>
  <div id="order_block">
    <div class="main-wrapper">
      <div class="title_big">
        <p class="block_title a1">Замовити столик</p>

        <h3>Не чекай більше, замов</h3>
        <h3 class="italic">собі відмінну вечерю</h3>
      </div>
      <div class="description_wrapper">
        <p class="p1 text_description">
          Сьогодні Terracotta об'єднує типовий для італійців культ їжі з істинно
          слов'янською гостинністю українців. Незмінними по обидва боки
          Середземного моря залишаються повага до традицій і любов до кулінарії.
        </p>
        <SlashButton text="Замовити столик" :mode="'light'" />
      </div>
    </div>
  </div>
</template>

<script>
import SlashButton from "~/components/SlashButton";

export default {
  name: "Order",
  components: {
    SlashButton,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

#order_block {
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.48),
      rgba(0, 0, 0, 0.48)
    ),
    url("../../static/images/one_rest_order.jpg");
  background-position: center;
  background-size: cover;
  padding: 140px 176px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @include max(lg) {
    padding: 130px 134px 130px;
  }
  @include max(md) {
    padding: 136px 48px;
  }
  @include max(sm) {
    padding: 100px 18px;
  }
  .main-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .description_wrapper {
      margin-left: auto;
    }
  }
}
.block_title {
  color: rgba(#ffffff, 0.3);
  margin-bottom: 12px;
}
.title_big {
  margin-right: auto;
}
.description_wrapper {
  width: 394px;
  @include max(lg) {
    width: 100%;
    max-width: 310px;
  }
  @include max(md) {
    max-width: 326px;
  }
  @include max(sm) {
    max-width: unset;
    width: 100%;
  }
}
.text_description {
  margin: 40px 0 72px;
  @include max(lg) {
    margin: -24px 0 40px;
  }
  @include max(md) {
    margin: -24px 0 32px;
  }
  @include max(sm) {
    margin: 15px 0 32px;
  }
}
h3,
p,
.slash_button {
  color: #ffffff;
  img{
    will-change: transform;
  }
}
</style>