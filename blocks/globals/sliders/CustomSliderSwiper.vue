<template>
  <div
    class="custom_slider-swiper"
    :class="{ 'show-desc-mob': showDescrOnMob }"
  >
    <div class="custom_slider_description main-wrapper">
      <div class="slider_description_left">
        <p class="little_title">{{ description.little_title }}</p>
        <h3 v-html="description.big_title"></h3>
      </div>
      <div
        class="slider_description_right"
        :class="{
          slider_description_right_with_button: description.slash_button,
        }"
      >
        <p class="slider_description_text p1">{{ description.description }}</p>
        <SlashButton
          v-if="description.slash_button"
          :text="description.slash_button"
          :link="description.slash_button_href"
        />
      </div>
    </div>

    <div class="slider_container">
      <div class="slider_container__wrapper">
        <div class="slider_counter">
          <transition name="fade" mode="out-in">
            <p :key="current_slide" class="italic h6 ">
              {{
                current_slide + 1 > 9
                  ? current_slide + 1
                  : "0" + (current_slide + 1)
              }}
            </p>
          </transition>
          <div class="gorizontal_line"></div>
          <p class="italic h6 ">
            {{
              this.slides.length > 9
                ? this.slides.length
                : "0" + this.slides.length
            }}
          </p>
        </div>
        <!-- <div class="button_prev" @click="prevSlide"></div>
      <div class="button_next" @click="nextSlide"></div> -->

        <div class="big_slider_wrapper">
          <div class="sale-label__wrapper">
            <SaleLabel
              class="js_hide_cursor"
              :labelAddInfo="labelAddInfo"
              v-if="label"
              :text="labelContent"
              @openRoomDetailsModal="openRoomDetailsModal"
            />
          </div>

          <div class="swiper-container main-slider" ref="mainSlider">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide slider_slide"
                v-for="slide in slides"
                :key="slide.id"
              >
                <div class="sale-label__wrapper">
                  <SaleLabel
                    class="js_hide_cursor"
                    :labelAddInfo="labelAddInfo"
                    v-if="label"
                    :text="labelContent"
                  />
                </div>
                <img :src="slide.image" alt />
                <!-- <div class="js_hide_cursor main-content"> -->
                  <slot />
                <!-- </div> -->
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

            <div class="arrow-cursor" ref="cursor">
              <svg
                width="67"
                height="61"
                viewBox="0 0 67 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="arrow-cursor__icon"
              >
                <g>
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
        <div class="slider-previews-wrap">
          <div class="swiper-container extra-slider" ref="extraSlider">
            <div class="swiper-wrapper slider_wrapper_little">
              <div
                class="swiper-slide"
                v-for="slide in extraSliders()"
                :key="slide.id"
              >
                <img :src="slide.image" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      <UnderlineButton
        v-if="description.slash_button"
        :text="description.slash_button"
      />
    </div>
  </div>
</template>

<script>
import SlashButton from "~/components/SlashButton";
import UnderlineButton from "~/components/UnderlineButton";
import CursorClicker from "~/plugins/cursor_clicker";
import SaleLabel from "~/components/SaleLabel";
import ClearComponent from "~/components/ClearComponent";
import Swiper from "swiper";

export default {
  name: "CustomSliderSwiper",
  props: {
    slides: {
      type: Array,
      default: () => [],
    },
    label: {
      type: Boolean,
      default: false,
    },
    labelAddInfo: {
      type: Boolean,
      default: false,
    },
    description: {
      type: Object,
      default: () => ({}),
    },
    labelContent: {
      type: String,
      default: "",
    },
    showDescrOnMob: {
      type: Boolean,
      default: false,
    },
    openRoomDetailsModal:{
      type:Function
    }
  },
  components: {
    SlashButton,
    SaleLabel,
    UnderlineButton,
  },
  data: () => ({
    current_slide: 0,
  }),

  mounted() {
    let { mainSlider, extraSlider } = this.$refs;
    let th = this;
    let mainSwiper = new Swiper(mainSlider, {
      speed: 1200,
      loop: true,
      slidesPerView: 1,
      loopedSlides: 5,
      centeredSlides: true,
      longSwipesRatio: 0.1,
      loopPreventsSlide: false,
      watchSlidesProgress: true,
      mousewheelControl: true,
      keyboardControl: true,
      mousewheel: {
        forceToAxis: true,
        sensitivity: 0,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.1,
          spaceBetween: 8,
        },
        600: {
          slidesPerView: 1,
        },
      },
      navigation: {
        nextEl: ".slider-next",
        prevEl: ".slider-prev",
      },

      on: {
        slideChange: function () {
          th.current_slide = this.realIndex;
        },
      },
    });
    let extraSwiper = new Swiper(extraSlider, {
      speed: 400,
      loop: true,
      slidesPerView: 1,
      loopedSlides: 5,
      centeredSlides: true,
      breakpoints: {
        320: {
          slidesPerView: 1.2,
        },
        600: {
          slidesPerView: 1,
        },
      },
      lazy: {
        loadPrevNext: true,
      },
    });

    const sliderMain = mainSwiper;
    const sliderPreviews = extraSwiper;
    sliderMain.controller.control = sliderPreviews;
    sliderPreviews.controller.control = sliderMain;
  },
  methods: {
    extraSliders() {
      let extraSlider = this.slides.slice();
      console.log(extraSlider);
      let elem = extraSlider.shift();
      console.log(elem);
      extraSlider.push(elem);

      return extraSlider;
    },
    cursorHide(e) {
      let { cursor } = this.$refs;
      cursor.style.opacity = 0;
      cursor.classList.remove("active");
      cursor.classList.add("inActive");
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
          opacity: 1;
        `;
      }
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
          opacity: 1;
        `;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";

.custom_slider-swiper {
  //background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #f0edea 100%);

  //background: linear-gradient(180deg, rgba(240, 237, 234, 0) 0%, #ff8000 100%);

  background: linear-gradient(180deg, rgba(240, 237, 234, 0) 0%, #F0EDEA 100%);

  padding-bottom: 10px;


  @include max(sm) {
    background: #fbfbfb;
  }
  .massage_slide_foreground {
      @include max(1023){
        padding:32px;
      }
      @include max(sm) {
        padding: 20px;
      }
    }
  &.show-desc-mob {
    .custom_slider_description {
      @include max(sm) {
        flex-direction: column;
        padding: 0 18px;
      }
    }
    .slider_description_right {
      @include max(sm) {
        display: flex;
      }
      .slider_description_text {
        @include max(sm) {
          margin-top: 20px;
          width: 100%;
        }
      }
    }


  }
}
.custom_slider_description {
  display: flex;
  justify-content: space-between;
  padding-right: 173px;
  padding-left: 158px;

  @include min(1600) {
    padding-right: 0;
    padding-left: 0;
    width: calc(1920px - 395 * 2px);
  }
  @include max (1300){
    padding-right: 130px;
  }
  @include max (lg){
    padding-right: 134px;
    padding-left: 134px;
  }
  @include max(md) {
    padding: 0 48px;
  }
  @include max(sm) {
    padding: 0 18px;
  }

  h3 {
    width: 425px;
    @include max(md) {
      width: 230px;
    }
  }
}
.little_title {
  margin-bottom: 23px;
  @include max(lg) {
    margin-bottom: 16px;
  }
  @include max(md) {
    margin-bottom: 10px;
  }
}
.slider_description_text {
  width: 430px;
  margin-top: 150px;
  @include max(lg) {
    width: 320px;
    margin-top: 80px;
  }
  @include max(md) {
    margin-top: 60px;
  }
}
.slider_description_right {
  @include max(sm) {
    display: none;
  }
}
.slider_description_right_with_button p {
  margin-bottom: 64px;
  @include max(lg) {
    margin-bottom: 40px;
  }
  @include max(md) {
    margin-bottom: 32px;
  }
  @include max(sm) {
    display: none;
  }
}

.slider_container {
  padding: 112px 0 140px;
  overflow: hidden;
  position: relative;
  @include max(lg) {
    padding: 72px 0 123px;
  }
  @include max(md) {
    padding: 64px 0 112px;
  }
  @include max(sm) {
    padding: 32px 0 83px;
  }
}
.underline-button {
  display: none!important;
  @include max(sm) {
    display: flex!important;
    margin: 32px auto 0 auto;
  }
}

.slider_container__wrapper {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  @include min(xl){
    //max-width: 1600px;
    //margin-left:auto;
    /* rr */
    max-width: calc(1920px - 395 * 2px);
    margin-left: auto;
    margin-right: auto;
    //transform: translateX(-158px);
    left: -158px;
    /* rr */
  }

}
.slider_counter {
  padding: 0 64px;
  @include max(lg) {
    padding: 0 52px;
  }
  @include max(md) {
    padding: 0 36px;
  }
  @include max(768){
    position: absolute;
    left:75%;
  }
  @include max(sm) {
    display: none;
  }
  .h6 {
    opacity: 0.5;
    text-align: center;
    &:last-of-type {
      opacity: 0.2;
    }

    @include max(md) {
      font-size: 20px;
    }
  }
}

.gorizontal_line {
  width: 30px;
  opacity: 0.1;
  border: 1px solid #000000;
  margin: 10px 0;
  @include max(md) {
    margin: 8px 0;
  }
}

.big_slider_wrapper {
  width: 62vw;
  height: 40.28vw;
  margin-right: 109px;
  // pointer-events: none;
  @include min(xl){
    //width:46.5vw;
    //height:56.67vh;
    max-width: 892px;
    max-height: 580px;
    margin-right: 124px;
  }
  @include max(lg) {
    margin-right: 98px;
    width: 601px;
    height: 390px;
  }
  @include max(md) {

    margin-right: 48px;
    width: 68vw;
    height: 346px;
  }
  @include max (768){
    margin: 0 90px 0 48px;
  }
  @include max(sm) {
    // width: 92.8vw;
    width: 100%;
    // height: 348px;
    height: fit-content;
    margin: 0 auto;
  }
}


.slider_wrapper {
  pointer-events: none;
  z-index: 10;
  width: 100%;
  height: 100%;
}
.slider_wrapper_little {
  width: 46.32vw;
  height: 33.3333vw;
  @include min(xl){
    // width:calc(667 / 1440 / 1.5 * 100vw);
    // height: calc(56.67 / 1.2 * 1vh);
    max-width: 667px;
    max-height: 480px;
  }
  @include max(lg) {
    width: 413px;
    height: 297px;
  }
  @include max(md) {
    width: 301px;
    height: 231px;
  }
  img {
    filter: grayscale(100%);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.main-slider {
  height: 100%;
  position: static !important;
  @include max(sm) {
    // height: fit-content;
    height: 65vh;
  }
  .slider_slide {
    .sale-label__wrapper {
      display: none;
      @include max(sm) {
        display: flex;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }
    }
    &.swiper-slide-active,
    &.swiper-slide-duplicate-active {
      @include max(sm) {
        transform: scaleX(1) scaleY(1);
        filter: grayscale(0%);
      }
      .sale-label__wrapper {
        @include max(sm) {
          opacity: 1;
        }
      }
    }
    &.swiper-slide-prev,
    &.swiper-slide-next {
      @include max(sm) {
        transition: all 0.5s ease-in-out;
        filter: grayscale(100%);
        transform: scaleY(0.8);
      }
    }
  }
}
// .main-content {
//   pointer-events: all;
// }

.swiper-wrapper {
  z-index: 2;
  pointer-events: none;
  @include max(sm) {
    // height: fit-content;
    height: 100%;
  }
}

.slider-previews-wrap {
  @include min (1920){
    //transform: translateX(-4vw) scale(0.82);
  }
  @include max(sm) {
    // position: absolute !important;
    // top: 50%;
    // transform: translateY(-50%);
    // left: 0;
    // width: 100%;
    // overflow: hidden;
    display: none;
  }
}
.extra-slider {
  z-index: 0;
}
.slider_slide {
  position: relative;
}
.slider_slide img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;

  @include max(sm) {
    // height: 415px;
    height: 100%;
  }
  @include max(500) {
    // height: 230px;
  }
}

.sale-label__wrapper {
  position: relative;
  display: flex;
  @include max(sm) {
    display: none;
  }
}
.arrow-cursor {
  width: 60px;
  height: 60px;
  position: fixed;
  left: -30px;
  top: -30px;
  z-index: 100000;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  @include max(lg) {
    display: none;
  }
  &__icon {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  &__path {
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.5px;
  }
  &.hide {
    opacity: 0;
  }
}

.button_prev,
.button_next {
  width: 50%;
  height: 100%;
  margin-top: 0;
  top: 0;
  background-image: none;
  cursor: none;
  outline: none;
  z-index: 5;
  position: absolute;
  pointer-events: all;
}

.button_prev {
  left: 0;
}

.button_next {
  right: 0;
}
.sale_label {
  z-index: 11;
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
    & ~ .slider-cursor {
      opacity: 1;
    }
  }
}

.slider-prev {
  left: 0;
  outline: none !important;
  @include min(xl){
    right: 50%;
    left: unset;
  }
}
.slider-next {
  right: 0;
  outline: none !important;
    @include min(xl){
    right: unset;
    left: 50%;
  }
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
  @include max(lg) {
    display: none;
  }
}
</style>
