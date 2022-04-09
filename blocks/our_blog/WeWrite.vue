<template>
  <div
    class="we_write we_write__container"
    :class="{ 'light-mode': lightMode }"
  >
    <div class="main-wrapper">
      <div v-if="onlyArticles">
        <ul class="we_write__article_wrapper we_write__article-only">
          <li class="article" v-for="key in 5" :key="key">
            <div class="article__top_line"></div>
            <div class="article__article_container">
              <div>
                <h5 class="article__title">Лета легка економія</h5>
                <p class="p2_light">Jane confessed herself</p>
              </div>
              <div class="article__image_wrapper">
                <img src="~/static/images/list_bar2.jpg" alt />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div v-else>
        <h3 class="we_write__main_title">Ми пишемо</h3>
        <p class="p1 we_write__description">
          Ми створюємо максимальний комфорт та турботу для кожного гостя нашої
          мережі. Маленькі речі, які можуть не бути видні з першого погляду,
          залишать.
        </p>

        <ul class="we_write__article_wrapper">
          <li class="article" v-for="key in articlesToShow" :key="key">
            <div class="article__top_line"></div>
            <div class="article__article_container">
              <div>
                <h5 class="article__title">Лета легка економія</h5>
                <p class="p2_light">Jane confessed herself</p>
              </div>
              <div class="article__image_wrapper">
                <img src="~/static/images/list_bar2.jpg" alt />
              </div>
            </div>
          </li>
        </ul>
        <div class="we_write__button_wrapper">
          <SlashButton text="всі Статті" :link="link"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlashButton from "~/components/SlashButton";

export default {
  name: "WeWrite",
  components: {
    SlashButton
  },
  props: {
    onlyArticles: {
      type: Boolean,
      default: false
    },
    lightMode: {
      type: Boolean,
      default: false
    },
    articlesToShow:{
      type:Number,
      default:5
    },
    link:{
      type:String,
      default:null
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.we_write {
  background: #f0edea;
  padding: 120px 0;
  @include pl-168;
  @include pr-168;

  @include max(lg) {
    padding: 97px 134px;
  }
  @include max(md) {
    padding: 104px 48px 88px;
  }
  @include max(md) {
    padding: 64px 18px;
  }

  &.light-mode {
    background: #fbfbfb;
  }
  &__main_title {
    text-align: center;
    @include mb-24;
  }
  &__description {
    text-align: center;
    max-width: 580px;
    margin: 0 auto 81px;
    opacity: 0.5;
    @include max(lg) {
      margin-bottom: 64px;
    }
    @include max(md) {
      margin-bottom: 32px;
    }
  }
  &__artivle_wrapper {
    display: flex;
    justify-content: space-between;
  }
  &__button_wrapper {
    width: fit-content;
    margin: auto;
    @include mt-88;
    @include max(lg) {
      margin-top: 34px;
    }
    @include max(md) {
      margin-top: 36px;
    }
  }
}
.we_write__article_wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @include max(sm) {
    flex-direction: column;
  }
}
.we_write__article-only {
  //margin-top: 40px;
}
.article {
  width: calc(50% - 32px);

  @include max(sm) {
    width: calc(100%);
  }
  &__top_line {
    width: 100%;
    height: 1px;
    background-color: #000000;
    opacity: 0.1;
  }
  &__article_container {
    padding: 33px 12px;
    display: flex;
    justify-content: space-between;

    @include max(lg) {
      padding: 24px 0px;
    }

    @include max(md) {
      padding: 20px 0px;
    }

    .p2_light {
      opacity: 0.5;
    }
  }
  &__image_wrapper {
    width: 60px;
    height: 60px;
    min-height: 60px;
    min-width: 60px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
.article:nth-of-type(1),
.article:nth-of-type(2) {
  .article__top_line {
    @include min(sm) {
      display: none;
    }
  }
}
.article:nth-of-type(1) {
  .article__top_line {
    display: none;
  }
}

li,
ul {
  list-style: none;

  // @include max(sm) {
  //   display: none;

  //   &:nth-of-type(1),
  //   &:nth-of-type(2),
  //   &:nth-of-type(3) {
  //     display: block;
  //   }
  // }
}
</style>
