<template>
  <div class="our_news_container our_news">
    <div class="main-wrapper">
      <p class="a1 our_news__little_title">новини</p>
      <h3 class="our_news__big_title">Наші новини</h3>
      <p class="p1 our_news__description">
        Ми створюємо максимальний комфорт та турботу для кожного гостя нашої
        мережі. Маленькі речі, які можуть не бути видні з першого погляду,
        залишать.
      </p>
      <NewsList :countBlock="3" :data="data" />
      <div class="our_news__button_wrapper">
        <SlashButton text="всі новини" />
      </div>
    </div>
  </div>
</template>

<script>
import NewsList from "~/blocks/our_blog/NewsList";

export default {
  name: "OurNews",
  components: {
    NewsList,
  },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";

.our_news_container {
  padding: 120px 0;
  @include pl-168;
  @include pr-168;
  background: #f0edea;

  @include max(lg) {
    padding: 96px 134px;
  }
  @include max(md) {
    padding: 87px 48px;
  }
  @include max(sm) {
    padding: 64px 18px;
  }
}
.our_news {
  &__little_title {
    text-align: center;
    opacity: 0.3;
    @include mb-16;

    @include max(lg) {
      margin-bottom: 17px;
    }
    @include max(md) {
      margin-bottom: 12px;
    }
    @include max(sm) {
      margin-bottom: 10px;
    }
  }
  &__big_title {
    text-align: center;
    @include mb-24;

    @include max(lg) {
      margin-bottom: 32px;
    }
    @include max(md) {
      margin-bottom: 24px;
    }
  }
  &__description {
    text-align: center;
    max-width: 638px;
    margin: auto;
    margin-bottom: 80px;
    opacity: 0.5;

    @include max(lg) {
      margin-bottom: 48px;
    }
    @include max(md) {
      margin-bottom: 56px;
    }
    @include max(sm) {
      margin-bottom: 48px;
    }
  }
  &__button_wrapper {
    width: fit-content;
    margin: 8px auto 0;

    @include max(lg) {
      margin-top: 18px;
    }
    @include max(md) {
      margin-top: 16px;
    }
  }
}
</style>
