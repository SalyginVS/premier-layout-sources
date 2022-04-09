<template>
  <div
    class="big_slide_slider demo-2_big demo-2"
    ref="demo2_big"
    :class="{
      gradient_bg: config.gradient_bg,
      three_d_tour_options: config.three_d_tour,
      bg_part_style: config.bg_part_style,
      indent,
      indent_meeting,
      isCityPage: isCityPage,
      consulting_page: isConsultingPage,
    }"
  >
    <SliderDescription v-if="slider_description" :data="slider_description" />

    <div class="arrow-cursor">
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
    <div class="big_slider_wrapper">
      <div v-if="line" class="line-simple"></div>
      <div class="swiper-container big_slider" ref="big_slider">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            :class="{ light_image }"
            v-for="slide in slides"
            :key="slide.id"
          >
            <div
              v-if="slide.border"
              class="bottom-description__wrapper"
              :style="{ 'border-image': `url(${slide.border}) 1` }"
            ></div>
            <div
              class="swiper-slide_img"
              :class="{
                isCityPage: isCityPage,
                consulting_page: isConsultingPage,
              }"
              :style="{ backgroundImage: `url(${slide.image})` }"
            >
              <div class="foreground_wrapper">
                <slot :slide="slide"></slot>
              </div>
            </div>
            <div class="foreground_wrapper">
              <slot />
            </div>
          </div>
        </div>

        <div
          class="slider_counter"
          v-if="config.pagination && slider_counter_under == false"
        >
          <p class="italic">{{ counter }}</p>
          <img src="~/static/images/slash_light.svg" alt />
          <p class="italic slides_length">{{ slides.length }}</p>
        </div>

        <div
          class="slider_counter_under"
          v-if="config.pagination && slider_counter_under == true"
        >
          <p class="italic">{{ counter }}</p>
          <img src="~/static/images/slash_dark.svg" alt />
          <p class="italic slides_length">{{ slides.length }}</p>
        </div>

        <div class="swiper-button-prev" @click="prevSlide"></div>
        <div class="swiper-button-next" @click="nextSlide"></div>
      </div>
    </div>


    <div v-if="all_offers" class="all_offers">
      <p class="a1">Всі пропозиції</p>
      <img src="~/static/images/gold_test.png" alt="" />
    </div>

    <div class="three_d_tour_wrapper" v-if="config.three_d_tour">
      <p class="a1 three_d_tour">3d тур по готелю</p>
    </div>
    <!-- added component UnderlineButton for epic 02 page meetings_and_events -->

    <UnderlineButton
      v-if="slider_description && slider_description.link"
      class="slider-footer-button"
      :text="slider_description.link"
    />
  </div>
</template>

<script>
import Demo2 from "~/plugins/slider";
import { globalMixin } from "~/plugins/mixins";
import SliderDescription from "~/blocks/globals/SliderDescription";
import ClearComponent from "~/components/ClearComponent";
import UnderlineButton from "~/components/UnderlineButton";
export default {
  name: "BigSlideSlider",
  mixins: [globalMixin],
  components: {
    SliderDescription,
    UnderlineButton,
  },
  props: {
    isWeddingPage: {
      type: Boolean,
      default: false,
    },
    isCityPage: {
      type: Boolean,
      default: false,
    },
    isConsultingPage: {
      type: Boolean,
      default: false,
    },
    slides: {
      type: Array,
      default: () => [],
    },
    slider_description: {
      type: [Object, null],
      default: () => null,
    },
    foreground: {
      type: Object,
      default: () => ClearComponent,
    },
    indent: {
      type: Boolean,
      default: false,
    },
    indent_meeting: {
      type: Boolean,
      default: false,
    },
    meetingFilterMore: {
      type: Boolean,
      default: false,
    },
    light_image: {
      type: Boolean,
      default: false,
    },
    config: {
      type: Object,
      default: () => ({
        gradient_bg: false,
        bg_part_style: false,
        three_d_tour: false,
        pagination: false,
      }),
    },
    line: {
      type: Boolean,
      default: false,
    },
    all_offers: {
      type: Boolean,
      default: false
    },
    slider_counter_under: {
      type: Boolean,
      default: false
    },
    isOurBlog: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    demo2: null,
    current_slide: 0,
    all_slides: 0,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$nextTick(() => {
        this.initSlider();
      })
    })
  },
  methods: {
    initSlider() {
      let { big_slider, demo2_big } = this.$refs;
        window.lazySizesConfig = window.lazySizesConfig || {};
        window.lazySizesConfig.init = false;
        // let my_swiper = document.querySelector(".big_slider");
        // let demo = document.querySelector(".demo-2_big");
        let my_swiper = big_slider;
        let demo = demo2_big;
        let swiper_config = {
          slidesPerView: "auto",
          spaceBetween: 0,
          speed: 900,
          loop: true,
          centeredSlides: true,
          loopedSlides: 3,
          mousewheel: {
            forceToAxis: true,
          },
          breakpoints: {
            375:{
              spaceBetween:18
            },
            650: {
              spaceBetween: 32,
            },
            800: {
              spaceBetween: 24,
              slidesPerView: "auto",
            },
          },
          // navigation: {
          //   nextEl: ".swiper-button-next",
          //   prevEl: ".swiper-button-prev"
          // }
        };
        this.demo2 = new Demo2(demo, my_swiper, swiper_config);
        // let cursor_clicker = new CursorClicker(slider_container);
      },
 
    // let cursor_clicker = new CursorClicker(slider_container);
  },
  
  computed: {
    counter() {
      if (this.demo2) {
        return this.demo2.swiper.realIndex + 1;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";

.big_slide_slider {
  padding-bottom: 140px;

  @include max(lg) {
    margin-bottom: 124px;
  }
  @include max(md) {
    margin-bottom: 112px;
  }
  @include max(sm) {
    margin-bottom: 0;
  }

  &.indent {
    padding-top: 0;
    margin-top: 180px;
    @include max(lg) {
      margin-top: 164px;
    }
    @include max(md) {
      margin-top: 148px;
    }
    @include max(sm) {
      margin-top: 80px;
    }
  }

  &.indent_meeting {
    padding-top: 0;
    margin-top: 140px;

    @include max(lg) {
      margin-top: 123px;
    }
    @include max(sm) {
      margin-top: 80px;
      background-color: white;
    }
  }
  /**consulting-page && city-page */
  &.isCityPage,
  &.consulting_page {
    .big_slider_wrapper {
      @include max(425) {
        background: none;
        padding-bottom: 80px;
      }
    }
    .foreground_wrapper {
      @include max(425) {
        height: unset;
      }
    }
    .swiper-slide {
      width: 90vw;
      max-width: 934px;
      min-height: 535px;
      @include max(425) {
        width: 80vw;
        &:before{
          display:none;
        }
      }
      @include max(375) {
        width: 75vw;
      }
      .foreground_wrapper {
        opacity: 1;
      }
    }
  }
  &.consulting_page {
    .big_slider_wrapper {
      @include max(425) {
        background: white;
      }
    }
    .swiper-slide {
      @include max(425) {
        min-height: 565px;
      }
      &::before {
        visibility: hidden;
      }
    }
  }
  /**consulting-page && city-page */
}
.gradient_bg {
  background: linear-gradient(180deg, rgba(240, 237, 234, 0) 0%, #f0edea 100%);
}
.three_d_tour_options {
  padding-bottom: 160px;
  @include max(lg) {
    padding-bottom: 144px;
  }
  @include max(md) {
    padding-bottom: 128px;
  }
  @include max(sm) {
    padding-bottom: 112px;
  }
}
.big_slider_wrapper {
  position: relative;
}
.bg_part_style {
  padding-bottom: 0px;
  .big_slider_wrapper {
    position: relative;
    background: linear-gradient(to top, #f0edea 70%, transparent 0);
    @include pb-140;
  }
}
.line-simple {
  left: unset;
  right: 148px;
  top: -16px;
  @include min(1920) {
    right: 20vw;
  }
  @include max(lg) {
    width: 0px;
    display: none;
  }
}
.swiper-slide {
  width: 64.9vw;
  height: 600px;
  transform: scale(0.65);
  filter: grayscale(100%);
  will-change: transform;
  transition: transform 0.45s ease;
  position: relative;

  &-prev {
    transform: translateX(80px) scale(0.65);
  }
  &-next {
    transform: translateX(-80px) scale(0.65);
  }

  @include min(xl){
    max-width: 1046px;
    max-height: 684px;
    height: calc(664 / 1920 * 100vw);
  }
  @include max(lg) {
    height: 384px;
  }
  @include max(1439) {
    width: 58.63vw;
  }
  @include max(1023) {
    width: 69.6vw;
    height: 339px;
  }
  @include max(767) {
    height: 380px;
    width: 63vw;
    transform: scale(1, 0.8);
  }
  @include max(425) {
    width: 75vw;
    height: 415px;
  }
  // @include max(md) {
  //   // width: 87.5vw;

  // }
  // @include max(sm) {
  //   height: 223px;
  //   width: 90vw;
  // }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.48) 100%);
  }
  &.light_image {
    &::before {
      display: none;
    }
  }

  p {
    position: absolute;
    left: 24px;
    top: 24px;
    color: #ffffff;
  }
  .foreground_wrapper {
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  .swiper-slide_img {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .foreground_wrapper {
      display: block;
    }
    /**consulting-page && city-page */
    &.isCityPage,
    &.consulting_page {
      @include max(425) {
        background-size: cover;
        background-repeat: no-repeat;
        height: 238px;
        .foreground_wrapper {
          display: none;
        }
      }
    }
    &.consulting_page {
      @include max(425) {
        height: 415px;
      }
    }
    /**consulting-page && city-page */
  }
}
.swiper-slide-active,
.swiper-slide-duplicate-active {
  filter: grayscale(0);
  transform: scale(1);
  .foreground_wrapper {
    opacity: 1;
  }
}
.swiper-wrapper {
  z-index: 11;
  pointer-events: none;
}

.slider_counter {
  position: absolute;
  z-index: 11;
  width: 100%;
  bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  @include max(lg) {
    bottom: 15px;
  }
  p {
    font-weight: normal;
    font-size: 24px;
    line-height: 110%;
    color: #ffffff;
    @include max(lg) {
      font-size: 16px;
    }
  }
  img {
    margin: 0 8px;
    margin-bottom: -5px;
  }
  .slides_length {
    opacity: 0.4;
  }
}

.slider_counter_under {
  position: absolute;
  z-index: 11;
  width: 100%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @include max(lg) {
  }
  @include max(lg) {
  }
  p {
    font-weight: normal;
    font-size: 24px;
    line-height: 110%;
    color: black;
    @include max(lg) {
      font-size: 16px;
    }
  }
  img {
    width: 8px;
    margin: 0 8px;
    margin-bottom: -5px;
  }
  .slides_length {
    opacity: 0.4;
  }
}

.three_d_tour_wrapper {
  position: absolute;
  width: 100%;
  margin-top: 72px;
  display: flex;
  justify-content: center;
  @include max(lg) {
    margin-top: 64px;
  }
  @include max(md) {
    margin-top: 56px;
  }
  @include max(sm) {
    margin-top: 48px;
  }
}
.all_offers {
  cursor: pointer;
  height: 16px;
  display: none;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;
  img {
    height: 1px;
    width: 106px;
  }
  @include max(sm) {
    margin-top: 48px;
    //margin-bottom: 44px;
  }
  @include max(sm) {
    display: flex;
  }
}
.three_d_tour {
  position: absolute;
  margin-bottom: 0;
  border-bottom: 1px dashed #000000;
  opacity: 0.5;
  width: fit-content;
  cursor: pointer;
  transition: opacity 0.5s ease;
}

.three_d_tour::after {
  content: "";
  position: absolute;
  width: 0%;
  bottom: -1px;
  left: 0;
  border-bottom: 1px solid #000;
  transition: width 0.5s ease;
  z-index: 5;
}

.three_d_tour:hover {
  opacity: 0.9;

  &::after {
    width: 100%;
  }
}

// demo2

.demo-2 {
  --color-text: #919191;
  --color-bg: #e4dfdd42;
  --color-link: #000000;
  --color-link-hover: #000000;
  --color-info: #000000;
  --swiper-height: 65vh;

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

  .swiper-button-prev,
  .swiper-button-next {
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

  .swiper-button-prev {
    left: 0;
  }

  .swiper-button-next {
    right: 0;
  }

  .arrow-cursor {
    width: 65px;
    height: 65px;
    position: fixed;
    left: -30px;
    top: -30px;
    z-index: 100000;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    @include max(1030) {
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
}
@media (max-width: 640px) {
  .arrow-cursor,
  .swiper-button-prev,
  .swiper-button-next {
    visibility: hidden;
  }
}
@media (max-height: 340px) {
  .swiper-slide {
    width: 50%;
    min-width: unset;
  }
  .image_desktop {
    display: block;
    img {
      object-position: left;
    }
  }
  .image_mobile {
    display: none;
  }
}
.big_slide_slider .slider-footer-button {
  display: none;
  @include max(767) {
    display: block;
    margin-top: 48px;
  }
}


</style>
