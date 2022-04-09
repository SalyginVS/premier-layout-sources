<template>
  <div class="one_news_first_block first_screen">
    <div class="first_screen__main_description">
      <div class="first_screen__left_description">
        <h1 class="h_three first_screen__main_title">
          <span class="italic gold_text">Куди їхати</span>
          <span>по враження?</span>
        </h1>
        <p class="first_screen__description_text">
          Учені довели, що мистецтво знімає біль. Візит до кінотеатру чи музею
          послаблює симптоми депресії. А відвідування концертів подовжує життя.
          Тому ми підготували вичерпний перелік культурних подій початку 2020
          року. Учені довели, що мистецтво знімає біль. Візит до кінотеатру чи
          музею послаблює симптоми депресії. А відвідування концертів подовжує
          життя. Тому ми підготували вичерпний перелік культурних.
        </p>
      </div>
      <div class="first_screen__right_description">
        <div class="advert">
          <nuxt-link to="/" class="a1 advert__hotel"
            >Premier Palace Hotel</nuxt-link
          >
          <p class="a1 advert__place">Київ, Україна</p>
          <div class="advert__event_wrapper advert__subblock">
            <p class="p2_light advert__evant_date">6.01.2020</p>
            <div class="advert__vertical_line"></div>
            <nuxt-link to="/" class="p2_light advert__evant_type"
              >Подія</nuxt-link
            >
          </div>
        </div>
        <div class="socials">
          <p class="a1">поділитися:</p>
          <a href="/" target="_blank" class="socials__icon">
            <img src="~/static/images/fb_black.svg" alt
          /></a>
          <a target="_blank" href="/" class="socials__icon"
            ><img src="~/static/images/twi_black.svg" alt />
          </a>
        </div>

        <p class="first_screen__description_text">
          Учені довели, що мистецтво знімає біль. Візит до кінотеатру чи музею
          послаблює симптоми депресії. А відвідування концертів подовжує життя.
          Тому ми підготували вичерпний перелік культурних подій початку 2020
          року. Учені довели, що мистецтво знімає біль. Візит до кінотеатру чи
          музею послаблює симптоми депресії. А відвідування концертів подовжує
          життя. Тому ми підготували вичерпний перелік культурних.
        </p>
      </div>
    </div>
    <div class="first_screen__main_image">
      <!-- <img src="~/static/images/one_news.jpg" alt /> -->
      <LittleSlider :slides="slides" />
      <div class="line"></div>
    </div>

    <InterestingPlace :interesting_place="interesting_place" />
  </div>
</template>

<script>
import InterestingPlace from "~/blocks/our_blog/one_news/InterestingPlace";
import LittleSlider from "~/blocks/globals/sliders/LittleSlider";

export default {
  name: "OneNewsFirstBlock",
  components: {
    InterestingPlace,
    LittleSlider,
  },
  data: () => ({
    interesting_place: {
      title: "Супербоул",
      place: "Маямі (Флорида), США",
      description:
        "Супербоул (чи Суперкубок) — це фінальна гра сезону в професійному американському футболі, яка для американців є чимось на кшталт національного свята. До того ж, це найпопулярніше телешоу року: найбагатші компанії витрачають мільйони доларів не лише на рекламний слот під час трансляції матчу (одна хвилина ефіру коштує приблизно 8 мільйонів доларів), а й на креатив. Не менш важливою традицією Суперкубку є музичне хафтайм-шоу, що проходить у перерві між таймами. Тому за багато років Супербоул перетворився на самостійну розвагу навіть для тих, кого футбол не дуже й цікавить. Квитки можна придбати на офіційному сайті, ціна стартує від 4 725 доларів. Але не менш захопливий досвід (і точно фінансово привабливіший) — переглянути фінал в одному з численних барів чи пабів Америки. Головне забронювати місце заздалегідь.",
    },
    slides: [
      {
        id: 0,
        img: require("~/static/images/one_hotel_slider.jpg"),
      },
      {
        id: 1,
        img: require("~/static/images/one_hotel_slider.jpg"),
      },
      {
        id: 2,
        img: require("~/static/images/one_hotel_slider.jpg"),
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";
@import "../../../assets/scss/blocks/right_advert.scss";
.first_screen {
  padding-bottom: 96px;

  @include max(lg) {
    padding-bottom: 88px;
  }
  @include max(md) {
    padding-bottom: 64px;
  }
  @include max(sm) {
    padding-bottom: 48px;
  }

  &__left_description {
    @include max(sm) {
      .first_screen__description_text {
        display: none;
      }
    }
  }

  &__right_description {
    @include min(sm) {
      .first_screen__description_text {
        display: none;
      }
    }
  }
  &__main_title {
    margin-bottom: 32px;

    @include max(lg) {
      font-size: 38px;
      margin-bottom: 26px;
    }
    @include max(md) {
      font-size: 29px;
      margin-bottom: 20px;
    }
    @include max(sm) {
    }
  }
  &__description_text {
    width: 656px;
    font-weight: 300;
    font-size: 14px;
    line-height: 196%;
    letter-spacing: 0.04em;
    color: #000000;

    @include max(lg) {
      width: 445px;
      font-size: 12px;
    }
    @include max(md) {
      width: 344px;
    }
    @include max(sm) {
      margin-top: 18px;
      width: 100%;
    }
  }
  &__main_description {
    @include pl-168;
    @include mb-140;
    display: flex;
    justify-content: space-between;

    @include max(lg) {
      padding-left: 135px;
      margin-bottom: 125px;
    }
    @include max(md) {
      padding-left: 48px;
      margin-bottom: 112px;
    }
    @include max(sm) {
      display: flex;
      flex-direction: column;
      padding: 0 18px;
      margin-bottom: 48px;
    }
  }
  &__main_image {
    width: 100%;
    padding: 0 128px;
    margin-bottom: 96px;

    @include max(lg) {
      padding: 0 114px;
      margin-bottom: 72px;
    }
    @include max(md) {
      padding: 0 48px;
      margin-bottom: 64px;
    }
    @include max(sm) {
      padding: 0 18px;
      margin-bottom: 48px;
    }
  }
}
.socials {
  align-items: baseline;
  .socials__icon {
    height: fit-content;
  }

  @include max(sm) {
    display: none;
  }


}
.first_screen__main_image {
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 1;
  }
  .line {
    position: absolute;
    top: 140px;
    left: -12px;
    width: 400px;
    height: 1px;
    background-color: rgba(#000000, 0.3);
    transform: rotate(-60deg);

    @include max(lg) {
      top: 79px;
      left: 30px;
      width: 250px;
    }
    @include max(md) {
      display: none;
    }
  }
}
.interesting_place {
  margin-top: 0;
}
.one_screen_swiper {
  width: 100% !important;
  //height: 700px !important;

  @include max(lg) {
    height: 455px;
  }
  @include max(md) {
    height: 383px;
  }
  @include max(sm) {
    height: 214px;
  }
}
.advert {
  @include min(lg) {
    width: 380px;
  }
  @include max(lg) {
    padding: 29px 40px;
    background-color: #f0edea;
    width: 309px;
  }
  @include max(md) {
    padding: 29px 32px;
    width: 39vw;
    max-width: 309px;
  }
  @include max(sm) {
    width: 100%;
    max-width: 100%;
    padding: 0;
    background: none;
    .advert__place{
      display: inline;
      margin-left: 10px;
    }
  }
}

.advert__event_wrapper {
  @include max(lg) {
    margin-top: 16px;
  }
  @include max(md) {
  }
  @include max(sm) {
    margin-top: 10px;
  }
}
</style>
