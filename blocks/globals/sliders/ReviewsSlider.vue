<template>
  <div id="reviews" :class="background_type">
    <!-- <div class="quote_wrapper"> -->
      <div class="main-wrapper">
    <div class="quote_swiper swiper-container" ref="quote_swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <p v-if="!simpleReview" class="little_title">
            Костянтин константинопольський
          </p>

          <h5>
            Стриманий інтер'єр, професійний персонал. Готель на рівні 5 * у всіх
            планах - відмінне обслуговування, професіонали рівня п'ятірок в
            Європі. У готелі є два ресторани, японський і середземноморський.
          </h5>
          <div class="button_wrapper">
            <SlashButton v-if="!simpleReview" text="читати далі" link="/reviews" />
            <p v-if="simpleReview" class="little_title">
              Костянтин константинопольський
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <p v-if="!simpleReview" class="little_title">
            Костянтин константинопольський
          </p>
          <h5>
            Стриманий інтер'єр, ння, професіонали рівня п'ятірок в Європі. У
            готелі є два ресторани, японський і середземноморський.
          </h5>
          <div class="button_wrapper">
            <SlashButton v-if="!simpleReview" text="читати далі" link="/reviews" />
            <p v-if="simpleReview" class="little_title">
              Костянтин константинопольський
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <p class="little_title" v-if="!simpleReview">
            Костянтин константинопольський
          </p>
          <h5>
            Стриманий інтер'єр, професійний персонал. Готель нслуговування,
            професіонали рівня п'ятірок в Європі. У готелі є два ресторани,
            японський і середземноморський.
          </h5>
          <div class="button_wrapper">
            <SlashButton v-if="!simpleReview" text="читати далі" link="/reviews" />
            <p v-if="simpleReview" class="little_title">
              Костянтин константинопольський
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <p class="little_title" v-if="!simpleReview">
            Костянтин константинопольський
          </p>
          <h5>
            5 * у всіх планах - відмінне обслуговування, професіонали рівня
            п'ятірок в Європі. У готелі є два ресторани, японський і
            середземноморський.
          </h5>
          <div class="button_wrapper">
            <SlashButton v-if="!simpleReview" text="читати далі" link="/reviews" />
            <p v-if="simpleReview" class="little_title">
              Костянтин константинопольський
            </p>
          </div>
        </div>
      </div>
      <div class="quote_image_wrapper">
        <img src="~/static/images/quote_start.svg" alt />
        <img src="~/static/images/quote_end.svg" alt />
      </div>
    </div>
    <img class="white_image" src="~/static/footer-img/foo1.jpg" alt />
    <img class="white_image" src="~/static/footer-img/foo2.jpg" alt />
    <img class="white_image" src="~/static/footer-img/foo3.jpg" alt />

    <!-- <img class="white_image" src="~/static/images/one_hotel_logo.svg" alt />
    <img class="white_image" src="~/static/images/one_hotel_logo.svg" alt />
    <img class="white_image" src="~/static/images/one_hotel_logo.svg" alt />
    <img class="white_image" src="~/static/images/one_hotel_logo.svg" alt /> -->
    </div>
  </div>
</template>

<script>
import SlashButton from "~/components/SlashButton";
import Swiper from "swiper";

export default {
  name: "ReviewsSlider",
  props: {
    background_type: {
      type: String,
      default: "",
    },
    simpleReview: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    SlashButton,
  },
  mounted() {
    let { quote_swiper } = this.$refs;
    var mySwiper = new Swiper(quote_swiper, {
      speed: 400,
      spaceBetween: 220,
      loop: true,
      centeredSlides: true,
      //slidesPerView: "1.8",
      breakpoints: {
        610: {
          spaceBetween: 90,
          slidesPerView: "1.5",
        },
        860: {
          spaceBetween: 140,
          slidesPerView: "1.56",
        },

        1200: {
          spaceBetween: 220,
          slidesPerView: "1.8",
        },
         1440: {
          spaceBetween: 220,
          slidesPerView: "1.83",
        },
        1900: {
          spaceBetween: 220,
          slidesPerView: '2.35',
          centeredSlides: true,
          loopedSlides: 10
        },
      },
      mousewheel: {
        forceToAxis: true,
      },
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";

.main-wrapper{
  @include min(1920){
    max-width: 100vw;
  }
}

#reviews {
  padding: 218px 0;
  position: relative;
  background-color: unset;
  @include max(lg) {
    padding: 188px 0 148px;
  }
  @include max(md) {
    padding: 167px 0 152px;
  }
  &::before {
    position: absolute;
    content: '';
    background: #F0EDEA;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}
.little_title {
  margin-bottom: 26px;
  text-align: center;
  @include max(lg) {
    margin-bottom: 16px;
  }
  @include max(md) {
    margin-bottom: 12px;
  }
}
.quote_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.quote_swiper {
  margin-bottom: 64px;
  @include max(lg) {
    margin-bottom: 0;
  }
}
.swiper-slide {
  width: 681px;
  opacity: 0.2;
  filter: blur(6px);
  transition: all 0.5s ease;
  cursor: pointer;
}
.swiper-slide-active {
  opacity: 1;
  filter: blur(0);
}
h5 {
  text-align: center;
}
.button_wrapper {
  width: fit-content;
  margin: auto;
  margin-top: 62px;
  @include max(lg) {
    margin-top: 48px;
  }
}

.quote_image_wrapper {
  position: absolute;
  top: 42%;
  left: calc(50% - 468px);
  transform: translateY(-50%);
  width: 936px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  @include max(lg) {
    left: calc(50% - 387px);
    top: 35%;
    width: 774px;
  }
  @include max(md) {
    left: calc(50% - 280px);
    top: 35%;
    width: 560px;
  }
  img {
    @include max(md) {
      width: 25px;
    }
  }
}
.white_image {
  position: absolute;
  z-index: 10;
  opacity: 0.1;
  mix-blend-mode: luminosity;
}
.white_image:first-of-type {
  top: 147px; //20%
  left: 11%; //154px
  width: 195px;
  height: 109.84px;
  @include max(lg) {
    top: 124px;
    left: 50px;
    width: 160px;
    height: 90px;
  }
  @include max(md) {
    top: 112px;
    left: 73px;
    width: 114px;
    height: 64px;
  }
}
.white_image:nth-of-type(2) {
  bottom: 96px;
  left: 26%;
  width: 113px;
  height: 151px;
  @include max(lg) {
    bottom: 72px;
    left: 230px;
    width: 92px;
    height: 124px;
  }
  @include max(md) {
    bottom: 64px;
    left: 167px;
    width: 65px;
    height: 87px;
  }
}
.white_image:nth-of-type(3) {
  bottom: 220px;
  right: 6%;
  width: 280px;
  height: 157.71px;
  @include max(lg) {
    bottom: 173px;
    right: 76px;
    width: 212px;
    height: 120px;
  }
  @include max(md) {
    bottom: 150px;
    right: 65px;
    width: 138px;
    height: 78px;
  }
}
</style>
