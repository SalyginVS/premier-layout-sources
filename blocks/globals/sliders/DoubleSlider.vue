<template>
  <div id="double_slider_container" :class="{ darkBlock, linghtBlock }">
    <SliderDescription :data="double_slider_desc" />

    <div class="swiper-container_wrapper">
      <div class="swiper-container double_swiper" ref="slider">
        <div class="swiper-wrapper">
          <template v-if="noMob">
            <div
              class="swiper-slide"
              ref="swiperSlide"
              v-for="(slides, idx) in getSlidesGroupped()"
              :key="idx"
            >
              <nuxt-link
                class="sliderNew"
                to="/special_offers/all_hotels"
                v-for="slide in slides"
                :key="slide.id"
                :style="{
                  backgroundImage: `url(${slide.image})`,
                }"
                :class="{
                  'active-gradient': slideActiveIdx == idx,
                  js_hide_cursor: slideActiveIdx == idx,
                }"
              >
                <div class="slide_foreground">
                  <sale-label :text="slide.offers" />
                  <div class="link_wrapper">
                    <h6>{{ slide.title }}</h6>
                    <p class="p1 slide-description">{{ slide.description }}</p>
                    <p class="p1 slide-location-description">
                      {{ slide.place }}
                    </p>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </template>
          <template v-else>
            <div
              class="swiper-slide sliderNew_mob"
              v-for="slide in slides"
              :key="slide.id"
              :style="{
                backgroundImage: `url(${slide.image})`,
              }"
            >
              <div class="slide_foreground">
                <sale-label :text="slide.offers" />
                <div class="link_wrapper">
                  <h6>{{ slide.title }}</h6>
                  <p class="p1 slide-description">{{ slide.description }}</p>
                  <p class="p1 slide-location-description">{{ slide.place }}</p>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div
          @mouseleave="cursorHide"
          class="slider-prev no-cursor"
          @mousemove="cursorLeft"
        >
          prev
        </div>
        <div
          @mouseleave="cursorHide"
          class="slider-next no-cursor"
          @mousemove="cursorRight"
        >
          next
        </div>

        <div ref="cursor" class="arrow-cursor">
          <svg
            width="67"
            height="61"
            viewBox="0 0 67 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="arrow-cursor__icon"
          >
            <g opacity="0.6">
              <circle
                opacity="0.8"
                r="29.5"
                transform="matrix(-1 0 0 1 37 30.0518)"
                stroke="white"
              />
              <rect
                width="40"
                height="1"
                transform="matrix(-1 0 0 1 40 29.2085)"
                fill="white"
              />
              <path
                class="arrow-cursor__path"
                d="M34.3431 24.0516L40 29.7085L34.3431 35.3654"
                stroke="white"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
    <UnderlineButton
      class="slider-footer-button"
      :text="double_slider_desc.link"
    />
  </div>
</template>

<script>
import Swiper from "swiper";
import SaleLabel from "~/components/SaleLabel";
import SliderDescription from "~/blocks/globals/SliderDescription";
import UnderlineButton from "~/components/UnderlineButton";

import Demo2 from "~/plugins/slider";
import { globalMixin } from "~/plugins//mixins";

export default {
  name: "DoubleSlider",
  mixins: [globalMixin],

  components: {
    SaleLabel,
    SliderDescription,
    UnderlineButton,
  },
  props: {
    has_filters: {
      type: Boolean,
      default: true,
    },
    double_slider_desc: {
      type: Object,
      default: () => ({}),
    },
    darkBlock: {
      type: Boolean,
      default: false,
    },
    linghtBlock: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    slides: [
      {
        id: 0,
        image: require("~/static/images/list_bar3.jpg"),
        offers: "романтична вечеря",
        title: "Лета легка економія",
        description:
          "Базові сценарії поведінки користувачів, ініційовані виключно синтетично, оголошені такими, що порушують.",
        place: "Київ, Premier Palace Hotel",
      },
      {
        id: 1,
        image: require("~/static/images/double-slider2.png"),
        offers: "Знижка до 15%",
        title: "Лета легка економія",
        description:
          "Базові сценарії поведінки користувачів, ініційовані виключно синтетично, оголошені такими, що порушують.",
        place: "Київ, Premier Palace Hotel",
      },
      {
        id: 2,
        image: require("~/static/images/double-slider1.png"),
        offers: "романтична вечеря",
        title: "Лета легка економія",
        description:
          "Базові сценарії поведінки користувачів, ініційовані виключно синтетично, оголошені такими, що порушують.",
        place: "Київ, Premier Palace Hotel",
      },
      {
        id: 3,
        image: require("~/static/images/double-slider2.png"),
        offers: "Знижка до 15%",
        title: "Лета легка економія",
        description:
          "Базові сценарії поведінки користувачів, ініційовані виключно синтетично, оголошені такими, що порушують.",
        place: "Київ, Premier Palace Hotel",
      },
      {
        id: 4,
        image: require("~/static/images/double-slider1.png"),
        offers: "Знижка до 15%",
        title: "Лета легка економія",
        description:
          "Базові сценарії поведінки користувачів, ініційовані виключно синтетично, оголошені такими, що порушують.",
        place: "Київ, Premier Palace Hotel",
      },
      {
        id: 5,
        image: require("~/static/images/double-slider2.png"),
        offers: "Знижка до 15%",
        title: "Лета легка економія",
        description:
          "Базові сценарії поведінки користувачів, ініційовані виключно синтетично, оголошені такими, що порушують.",
        place: "Київ, Premier Palace Hotel",
      },

      {
        id: 6,
        image: require("~/static/images/list_bar3.jpg"),
        offers: "романтична вечеря",
        title: "Лета легка економія",
        description:
          "Базові сценарії поведінки користувачів, ініційовані виключно синтетично, оголошені такими, що порушують.",
        place: "Київ, Premier Palace Hotel",
      },
      {
        id: 7,
        image: require("~/static/images/double-slider2.png"),
        offers: "Знижка до 15%",
        title: "Лета легка економія",
        description:
          "Базові сценарії поведінки користувачів, ініційовані виключно синтетично, оголошені такими, що порушують.",
        place: "Київ, Premier Palace Hotel",
      },
      {
        id: 8,
        image: require("~/static/images/double-slider1.png"),
        offers: "романтична вечеря",
        title: "Лета легка економія",
        description:
          "Базові сценарії поведінки користувачів, ініційовані виключно синтетично, оголошені такими, що порушують.",
        place: "Київ, Premier Palace Hotel",
      },
      {
        id: 9,
        image: require("~/static/images/double-slider2.png"),
        offers: "Знижка до 15%",
        title: "Лета легка економія",
        description:
          "Базові сценарії поведінки користувачів, ініційовані виключно синтетично, оголошені такими, що порушують.",
        place: "Київ, Premier Palace Hotel",
      },
      {
        id: 10,
        image: require("~/static/images/double-slider1.png"),
        offers: "Знижка до 15%",
        title: "Лета легка економія",
        description:
          "Базові сценарії поведінки користувачів, ініційовані виключно синтетично, оголошені такими, що порушують.",
        place: "Київ, Premier Palace Hotel",
      },
      {
        id: 11,
        image: require("~/static/images/double-slider2.png"),
        offers: "Знижка до 15%",
        title: "Лета легка економія",
        description:
          "Базові сценарії поведінки користувачів, ініційовані виключно синтетично, оголошені такими, що порушують.",
        place: "Київ, Premier Palace Hotel",
      },
    ],
    slideActiveIdx: 0,
  }),
  mounted() {
    let self = this;
    // this.hideCursorOnLink();

    let mySwiper = new Swiper(".double_swiper", {
      longSwipesRatio: 0.1,
      watchSlidesProgress: true,
      speed: 1500,
      mousewheelControl: true,
      slidesPerView: 2,
      loop: true,
      loopedSlides: 12,
      centeredSlides: true,
      mousewheel: {
        forceToAxis: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.3,
        },
        610: {
          slidesPerView: 1.6,
        },
        860: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        1441: {
          slidesPerView: 2.8,
        },
      },
      on: {
        slideChange: function () {
          self.slideActiveIdx = this.realIndex;
        },
      },

      navigation: {
        nextEl: ".slider-next",
        prevEl: ".slider-prev",
      },
    });
  },
  computed: {
    noMob() {
      if (!process.client) {
        return false;
      }
      return window.innerWidth > 600;
    },
  },

  methods: {
    cursorShow(e) {
      let { cursor } = this.$refs;
      cursor.style.opacity = 1;
    },
    cursorHide(e) {
      let { cursor } = this.$refs;
      cursor.style.opacity = 0;
    },
    cursorLeft(e) {
      let { cursor } = this.$refs;
      let cursorHeight = cursor.clientHeight;
      let cursorWidth = cursor.clientWidth;
      let x = e.x - cursorWidth / 2;
      let y = e.y - cursorHeight / 2;

      if (cursor) {
        cursor.style.cssText = `
          top: ${y}px;
          left: ${x}px;
          transform: rotate(-180deg);
          display: flex;
        `;
      }

      e.target.closest(".js_hide_cursor")
        ? this.cursorHide(e)
        : this.cursorShow(e);
    },
    cursorRight(e) {
      let { cursor } = this.$refs;
      let cursorHeight = cursor.clientHeight;
      let cursorWidth = cursor.clientWidth;
      let x = e.x - cursorWidth / 2;
      let y = e.y - cursorHeight / 2;

      if (cursor) {
        cursor.style.cssText = `
          top: ${y}px;
          left: ${x}px;
          display: flex;
        `;
      }

      e.target.closest(".js_hide_cursor")
        ? this.cursorHide(e)
        : this.cursorShow(e);
    },

    getSlidesGroupped() {
      const result = [];

      for (let i = 0; i < this.slides.length / 2; i++) {
        result[i] = [
          this.slides[i * 2],
          this.slides[i * 2 + 1] || this.slides[0],
        ];
      }

      console.log('changed sliders', result);

      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";
#double_slider_container {
  // margin-top: 150px;
  width: 100%;
  // background-color: #F5F4F3;
  background-color: #fbfbfb;
  position: relative;
  z-index: 10;
  &.linghtBlock {
    .swiper-container {
      background: #fbfbfb;
    }
  }
  &.darkBlock {
    @include pt-120;
    background-color: #f0edea;

    @include max(md){
      padding-top: 112px;
    }

    @include max(sm){
      padding-top: 80px;
    }
  }
}
.slider-description {
  margin-bottom: 88px;
  @include max(lg) {
    margin-bottom: 72px;
  }
  @include max(md) {
    margin-bottom: 64px;
  }
  @include max(sm) {
    margin-bottom: 48px;
  }
}
.slider_description {
  .select-blocks {
    position: absolute;
    display: flex;
    width: fit-content;
    z-index: 10;
  }
  .select-wrapper {
    width: fit-content;
    // min-width: 65px;

    &:not(:last-child) {
      margin-right: 44px;
    }
  }
}
.go_to_button__wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .go_to_button {
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    &:hover {
      opacity: 0.7;
    }
  }
}
.swiper-wrapper {
  pointer-events: none;
  z-index: 2;
  height: 41.6vw;
  @include min(1441) {
    height: 600px;
  }
  @include max(lg) {
    height: 384px;
  }
  @include max(md) {
    height: 339px;
  }
  @include max(sm) {
    height: 384px;
  }
}
.swiper-container_wrapper {
  width: 100%;
  background-size: 100% 20%;
  @include pb-140;
  @include max(lg) {
    padding-bottom: 124px;
  }
  @include max(md) {
    padding-bottom: 117px;
  }
  @include max(sm) {
    padding-bottom: 141px;
    background: unset;
  }
}
.swiper-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.swiper-slide {
  width: 31.6vw;
  height: 100%;
  display: flex;
  justify-content: center;
  background-size: cover;
  background-position: center;
  position: relative;
}
.swiper-slide {
  .sliderNew {
    transform: scaleX(0.6) scaleY(0.5);
    transition: transform 0.5s ease-in-out;
    filter: grayscale(100%);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    &:not(:last-child) {
      margin-right: 50px;
    }
    &.active-gradient {
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 46.58%,
            rgba(0, 0, 0, 0.4) 100%
          ),
          linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 46.67%,
            rgba(0, 0, 0, 0.6) 70.54%
          );
      }
    }
  }
  &.sliderNew_mob {
    transform: scaleX(0.8) scaleY(0.75);
    transition: transform 0.5s ease-in-out;
    filter: grayscale(100%);
  }
  &.swiper-slide-prev {
    .sliderNew {
      &:last-child {
        transform: scaleX(0.6) scaleY(0.5) translateX(-14vw);
        @include max(lg) {
          transform: scaleX(0.7) scaleY(0.6) translateX(-12vw);
        }
      }
    }
  }
  &.swiper-slide-next {
    .sliderNew {
      &:not(:last-child) {
        transform: scaleX(0.6) scaleY(0.5) translateX(14vw);
        @include max(lg) {
          transform: scaleX(0.7) scaleY(0.6) translateX(12vw);
        }
      }
    }
  }
}
.slide_foreground {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 24px 32px;
  opacity: 0;
  transition: opacity 0.5s ease;
  position: relative;
  z-index: 1;
  @include max(lg) {
    padding: 16px 20px;
  }
  @include max(md) {
    padding: 16px 30px 12px 16px;
  }

  h6 {
    margin-bottom: 20px;
    @include max(lg) {
      margin-bottom: 8px;
    }
  }

  .slide-description {
    margin-bottom: 32px;
    @include max(md) {
      margin-bottom: 24px;
    }
  }
  .slide-location-description {
    opacity: 0.5;
  }
  h6,
  p {
    color: #ffffff;
  }
}

// .swiper-wrapper {
//   pointer-events: none;
// }

.swiper-slide-active,
.swiper-slide-duplicate-active {
  // width: 65vw !important;
  &.sliderNew_mob {
    transform: scaleX(1) scaleY(1);
    filter: grayscale(0%);
  }

  .sliderNew {
    transform: scaleX(1) scaleY(1);
    filter: grayscale(0%);

    &:not(:last-child) {
      margin-right: 24px;
      width: 32vw;
      height: 100%;
      position: absolute;
      z-index: 34;
      left: calc(-7vw - 12px);
      @include min(1501) {
        width: 66%;
        left: calc(-120px - 12px);
      }

      @include max(1600) {
        width: 70%;
      }
      @include max(1440) {
        width: 32vw;
      }

      @include max(lg) {
        width: 28vw;
        left: -45px;
      }

      @include max(md) {
        width: 53%;
        left: -26px;
      }
    }
    &:last-child {
      width: 32vw;
      height: 100%;
      position: absolute;
      z-index: 34;
      right: calc(-7vw - 12px);
      @include min(1501) {
        width: 66%;
        right: calc(-120px - 12px);
      }

      @include max(1600) {
        width: 70%;
      }
      @include max(1440) {
        width: 32vw;
      }

      @include max(lg) {
        width: 28vw;
        right: -45px;
      }

      @include max(md) {
        width: 53%;
        right: -26px;
      }
    }
  }

  .slide_foreground {
    opacity: 1;
    .link_wrapper {
      cursor: pointer;
      pointer-events: all;
    }
  }
}

///////

.demo-2 {
  .grid {
    // position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.3s ease;
      &.lazyloaded {
        opacity: 1;
      }
    }
  }
}
.slider-prev,
.slider-next {
  position: absolute;
  top: 0;
  // width: calc(50vw - 62vw / 2);
  width: 50vw;
  height: 100%;
  font-size: 0;
  z-index: 1;
  cursor: none;
  pointer-events: all;

  &:hover {
    & ~ .arrow-cursor {
      opacity: 1;
    }
  }
}

.slider-prev {
  left: 0;
  outline: none !important;
}
.slider-next {
  right: 0;
  outline: none !important;
}

.arrow-cursor {
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 74px;
  height: 74px;
  border: 0px solid rgba(#ffffff, 0.2);
  border-radius: unset;

  display: none;
  justify-content: center;
  align-items: center;
  transform-origin: center;

  transition: opacity 0.5s, transform 0.5s;
  opacity: 1;
  @include max(lg) {
    display: none;
  }
}
.slider-footer-button {
  display: none;
  @include max(sm) {
    width: fit-content;
    display: flex;
    margin: 0 auto;
    bottom: 80px;
  }
}
.js_hide_cursor {
  cursor: pointer;
  pointer-events: all;
}
</style>

