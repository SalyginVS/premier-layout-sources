<template>
  <div id="double_slider_container" :class="{ darkBlock, linghtBlock }">
    <SliderDescription :data="double_slider_desc" />

    <div class="swiper-container_wrapper">
      <div class="swiper-container double_swiper" ref="slider">
        <div class="swiper-wrapper">
          <!-- <div class="swiper-slide" v-for="(slide, idx) in slides" :key="idx">
            {{ idx }}
          </div> -->
          <div
            class="swiper-slide"
            ref="swiperSlide"
            v-for="(slide, idx) in slides"
            :key="idx"
          >
            <nuxt-link
              to="/special_offers/all_hotels"
              class="sliderNew"
              :style="{
                backgroundImage: `url(${slide.image})`,
              }"
              :class="{
                'active-gradient': slideActiveIdx == idx || slideNextIdx == idx,
                js_hide_cursor: slideActiveIdx == idx || slideNextIdx == idx,
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

        <div ref="cursor" class="slider-cursor">
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
      id="slider-footer-button"
      :text="double_slider_desc.link"
      :link="double_slider_desc.linkHref"
    />
    <div v-if="is_backline" class="double_slider__backline"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import SaleLabel from "~/components/SaleLabel";
import SliderDescription from "~/blocks/globals/SliderDescription";
import UnderlineButton from "~/components/UnderlineButton";

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
    is_backline: {
      type: Boolean,
      default: true,
    },
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
    ],
    slideActiveIdx: 0,
    slideNextIdx: 1,
  }),
  mounted() {
    // let self = this;
    // let mySwiper = new Swiper(".double_swiper", {
    //   longSwipesRatio: 0.1,
    //   speed: 1500,
    //   loop: true,
    //   loopedSlides: this.slides.length,
    //   slidesPerView: 3,
    //   spaceBetween: 25,
    //   mousewheel: {
    //     forceToAxis: true,
    //   },
    //   on: {
    //     slideChange: function () {
    //       self.slideActiveIdx = this.realIndex;
    //       self.slideNextIdx = this.realIndex + 1;
    //     },
    //   },
    //   navigation: {
    //     nextEl: ".slider-next",
    //     prevEl: ".slider-prev",
    //   },
    //   breakpoints: {
    //     1: {
    //       speed: 700,
    //       slidesPerView: "auto",
    //       spaceBetween: 0,
    //       centeredSlides: true,
    //     },
    //     425: {
    //       slidesPerView: 2,
    //       spaceBetween: 4,
    //       slidesOffsetBefore: 40,
    //       slidesOffsetAfter: 40,
    //     },
    //     520: {
    //       slidesPerView: 3,
    //       spaceBetween: 25,
    //       slidesOffsetBefore: 120,
    //       slidesOffsetAfter: 110,
    //     },
    //     768: {
    //       slidesOffsetBefore: 120,
    //       slidesOffsetAfter: 110,
    //     },
    //     1024: {
    //       slidesOffsetBefore: 246,
    //       slidesOffsetAfter: 200,
    //     },
    //   },
    // });
    // setTimeout(() => {
    //   mySwiper.update();
    // }, 2000);
  },

mounted() {
    let self = this;
    var swiper = new Swiper(".swiper-container", {
      spaceBetween: 24,
      speed: 1600,
      slidesPerView: 2,
      loop: true,
      loopAdditionalSlides: 10,
      loopedSlides: this.slides.length,
      mousewheel: {
        forceToAxis: true,
      },
      on: {
        slideChange: function () {
          self.slideActiveIdx = this.realIndex;
          self.slideNextIdx = this.realIndex + 1;

          console.log("HEEELLLLL");
        }
      },
      navigation: {
        nextEl: ".slider-next",
        prevEl: ".slider-prev",
      },
      breakpoints: {
        1: {
          slidesPerView: 1,
          speed: 1000,
        },
        650: {
          spaceBetween: 20,
        },
        900: {
          spaceBetween: 24,
        },
      },
    });
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
      if (window.matchMedia("(pointer: coarse)").matches) {
        return;
      } else {
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
      }
    },
    cursorRight(e) {
      if (window.matchMedia("(pointer: coarse)").matches) {
        return;
      } else {
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
      }
    }

    // hideCursorOnLink() {
    //   let { cursor } = this.$refs;
    //   let { slider } = this.$refs;
    //   let hideCursorBlock = slider.querySelectorAll(".js_hide_cursor");

    //   for (let el of this.hideCursorBlock) {
    //     el.addEventListener("mouseenter", () => {
    //       cursor.style.display = "none";
    //     });
    //     el.addEventListener("mouseleave", () => {
    //       cursor.style.display = "flex";
    //     });
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";
#double_slider_container {
  width: 100%;
  padding-bottom: 137px;

  @include max(sm) {
    padding-bottom: 80px;
  }
  position: relative;
}
.slider-description {
  margin-bottom: 100px;

  @include max(sm) {
    margin-bottom: 48px;
  }
}

.swiper-container_wrapper {
  overflow: hidden;
  position: relative;

  padding-bottom: 137px;

  @include max(sm) {
    padding-bottom: 80px;
  }
  &::after {
    content: "";
    width: 100%;
    height: 80%;
    background: #f0edea;
    position: absolute;
    bottom: 0;
    @include max(sm) {
      content: unset;
    }
  }
}

.swiper-container {
  // width: 70vw;
  width: 58vw;
  height: 600px;
  //background-color: rgb(255, 0, 0);
  overflow: visible;

  @include max(1440) {
    width: 66vw;
  }
  @include max(lg) {
    //background-color: aqua;
    width: 62vw;
    height: 384px;
  }
  @include max(md) {
    width: 70vw;
    height: 339px;
  }
  @include max(sm) {
    width: 80vw;
    height: 384px;
  }
}
.swiper-wrapper {
  display: flex;
  align-items: center;
  //z-index: 6;
  //transition-duration: 300ms !important;
}

.swiper-slide {
  filter: grayscale(100%);
  transform: translateX(3vw) scale(0.7);


.sliderNew {
    width: 100%;
    height: 100%;
    display: flex;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
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
      .slide_foreground {
        position: relative;
        z-index: 1;
      }
    }
    &.js_hide_cursor {
      .slide_foreground {
        cursor: pointer;
        pointer-events: all;
      }
    }
  }
}

.swiper-slide,
.swiper-slide-duplicate,
.swiper-slide-active,
.swiper-slide-duplicate-active,
.swiper-slide-prev,
.swiper-slide-next,
.swiper-slide-duplicate-prev,
.swiper-slide-duplicate-next {
  will-change: transform;

  transform: translateX(3vw) scale(0.7);
  font-size: 32px;
  color: #000;
  transition: all 0.4s ease;
  //background-color: aqua;
  // border: 1px solid rgb(0, 0, 0);

  @include max(lg) {
    transform: translateX(-1vw) scale(0.6);
  }
  @include max(sm) {
    transform: translateX(-1vw) scale(0.8);
  }
}

.swiper-slide-prev,
.swiper-slide-duplicate-prev {
  transform: translateX(-3vw) scale(0.7);

  @include max(lg) {
    transform: translateX(1vw) scale(0.6);
  }
  @include max(sm) {
    transform: translateX(8vw) scale(0.8);
  }
}

.swiper-slide-active,
.swiper-slide-duplicate-active {
  -webkit-backface-visibility: hidden; /* Chrome, Safari, Opera */
  backface-visibility: hidden;

  will-change: transform;

  transform: translateX(0);
  // background-color: #123456;
  // border: 1px solid rgb(0, 0, 0);
  font-size: 64px;
  color: #fff;
  transform: scale(1);
  height: 600px;
  //border: 1px solid rgb(255, 255, 255);
  filter: grayscale(0%);

  @include max(lg) {
    height: 384px;
  }
  @include max(md) {
    height: 339px;
  }
  @include max(sm) {
    height: 384px;
  }

  .slide_foreground {
    opacity: 1;
    .link_wrapper {
      cursor: pointer;
      pointer-events: all;
    }
  }
}
.swiper-slide-next,
.swiper-slide-duplicate-next {
  filter: grayscale(0%);
  transform: translateX(0);
  //background-color: #123456;
  font-size: 64px;
  color: #fff;
  height: 600px;
  //border: 1px solid rgb(255, 255, 255);

  @include max(lg) {
    height: 384px;
  }
  @include max(md) {
    height: 339px;
  }
  @include max(sm) {
    filter: grayscale(100%);
    height: 384px;
    transform: translateX(-8vw) scale(0.8);
  }

  .slide_foreground {
    opacity: 1;
    @include max(sm) {
      opacity: 0;
    }
    .link_wrapper {
      cursor: pointer;
      pointer-events: all;
    }
  }
}

// other style

.slide_foreground {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 24px 32px;
  opacity: 0;
  transition: opacity 0.5s ease;
  @include max(1024) {
    padding: 16px 20px;
  }
  @include max(sm) {
    padding: 16px 20px 10px;
  }
  // @include max(425) {
  //   width: $mobile_plus_slide_width;
  //   min-width: $mobile_plus_slide_width;
  // }
  // @include max(375) {
  //   width: $mobile_slide_width;
  //   min-width: $mobile_slide_width;
  // }

  h6 {
    margin-bottom: 20px;

    @include max(sm) {
      margin-bottom: 8px;
    }
  }
  .slide-description {
    margin-bottom: 32px;
    @include max(sm) {
      margin-bottom: 24px;
    }
  }
  h6,
  p {
    // -webkit-backface-visibility: hidden; /* Chrome, Safari, Opera */
    // backface-visibility: hidden;

    color: #ffffff;
  }
}

.slide-location-description {
  opacity: 0.5;
}
#slider-footer-button {
  display: none;
  @include max(sm) {
    display: block;
    margin: 48px auto 0;
  }
}
.slider-prev,
.slider-next {
  position: absolute;
  top: 0;
  width: 24vw;
  height: 100%;
  font-size: 0;
  z-index: 1;
  cursor: none;
  pointer-events: all;


&:hover {
    & ~ .slider-cursor {
      opacity: 1;
    }
  }
}
.slider-prev {
  left: -24vw;
  outline: none !important;
}
.slider-next {
  right: -24vw;
  outline: none !important;
}
.slider-cursor {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 74px;
  height: 74px;
  border: 0px solid rgba(#ffffff, 0.2);
  border-radius: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center;
  transition: opacity 0.5s, transform 0.5s;
  opacity: 0;
}
.double_slider__backline {
  width: 1px;
  height: 400px;
  background: #000;
  opacity: 0.3;
  top: -50px;
  left: calc(50% + 410 / 1920 * 100%);
  position: absolute;
  transform: rotate(24deg);
  @include max(lg) {
    left: calc(50% + 270 / 1220 * 100%);
  }
  @include max(md) {
    top: 0;
    left: calc(50% + 150 / 900 * 100%);
  }
  @include max(sm) {
    top: 50px;
    left: calc(50% + 100 / 650 * 100%);
  }
    @include max(xs) {
      left: calc(50% + 100 / 650 * 100%);
  }
}
</style>
