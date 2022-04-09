<template>
  <div id="our_bslider_descriptionlog " class="demo_2 long-slider" ref="demo_2">
    <SliderDescription
      :descr_indents="descr_indents"
      :data="slider_description"
    />
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
    <div class="swiper-container blog_slider" ref="slider">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="slide in slides"
          :key="slide.id"
          :style="{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 46.58%, rgba(0, 0, 0, 0.6) 100%), url(${slide.image})`,
          }"
        >
          <LittleLabel :text="slide.label" />
          <p class="p1 post_city" v-if="slide.little_title">
            {{ slide.little_title }}
          </p>
          <h6>{{ slide.type }}</h6>
        </div>
      </div>
      <div class="swiper-button-prev" @click="prevSlide" draggable="true"></div>
      <div class="swiper-button-next" @click="nextSlide" draggable="true"></div>
    </div>
    <!-- <nuxt-link to="/" class="button_all_button a1 slider-footer-button">
      {{ slider_description.link }}
    </nuxt-link> -->
    <UnderlineButton
      class="slider-footer-button"
      :text="slider_description.link"
    />
  </div>
</template>

<script>
import Swiper from "swiper";
import Demo2 from "~/plugins/slider";
import LittleLabel from "~/components/LittleLabel";
import SliderDescription from "~/blocks/globals/SliderDescription";
import UnderlineButton from "~/components/UnderlineButton";

export default {
  name: "LongSlider",
  components: {
    LittleLabel,
    SliderDescription,
    UnderlineButton,
  },
  props: {
    slides: {
      type: Array,
      default: () => [],
    },
    descr_indents: {
      type: Boolean,
      default: false,
    },
    slider_description: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    activeSlide(selfKey) {
      const arr = document.getElementsByClassName("swiper-slide");
      let self = this;

      for (let key in this.slidesArray) {
        if (this.slidesArray[key].className) {
          if (this.slidesArray[key].className.includes("swiper-slide-active")) {
            if (Number(key) + 1 + 4 == this.slidesArray.length) {
              self.currentKey = this.slides.length;
            } else {
              self.currentKey = Number(key) + 1;
            }
          }
        }
      }

      //console.log(currentKey);
      console.log("currentKey - " + this.currentKey);
      //console.log("Key - " + selfKey);

      // if (selfKey === this.currentKey) {
      //   console.log("FALSEEEEEEEEEE")
      // } else {
      //   for (let key in this.slidesArray) {
      //     if (key >= this.currentKey && key < this.currentKey + 4) {
      //       this.slidesArray[key].classList.add("no-bg");
      //     } else {
      //       if (this.slidesArray[key].className) {
      //         if (this.slidesArray[key].className.includes("no-bg")) {
      //           this.slidesArray[key].classList.remove("no-bg");
      //         }
      //       }
      //     }
      //   }
      // }

      //console.log("//////////");
    },
    prevSlide() {
      //this.activeSlide(this.currentKey);
      //console.log(this.currentKey);
      this.current_slide = this.demo2.swiper.realIndex;
      console.log(this.demo2.swiper.realIndex);

      this.demo2.swiper.slidePrev();
      this.current_slide = this.demo2.swiper.realIndex;
    },
    nextSlide() {
      //console.log(this.currentKey);
      //this.activeSlide(this.currentKey);
      this.current_slide = this.demo2.swiper.realIndex;
      console.log(this.demo2.swiper.realIndex);

      this.demo2.swiper.slideNext();
    },

  },
  mounted() {
    this.slidesArray = document.getElementsByClassName("swiper-slide");
    //setTimeout(() =>  this.activeSlide() , 1000);

    // let swiper_config = ;
    let { slider, demo_2 } = this.$refs;
    window.lazySizesConfig = window.lazySizesConfig || {};
    window.lazySizesConfig.init = false;

    let swiper_config = {
      speed: 400,
      // slidesPerView: 6,
      spaceBetween: 8,
      loop: true,
      // slidesOffsetBefore: window.innerWidth * 0.11319,
      // centeredSlides: true,
      // loopedSlides: this.slides.length,
      // init: false,
      mousewheel: {
        forceToAxis: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.8,
          slidesOffsetBefore: 0,
        },
        650: {
          slidesPerView: 3.4,
        },
        900: {
          slidesPerView: 4.4,
          centeredSlides: false,
        },
      },
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
      on: {
        slideChange() {
          // this.activeSlide()
          this.current_slide = this.realIndex;
          self.slideActiveIdx = this.realIndex;
          self.slideNextIdx = this.realIndex + 1;

          //this.current_slide = this.demo2.swiper.realIndex;

          //console.log(self.slideActiveIdx);
        },
      },
    };
    this.demo2 = new Demo2(demo_2, slider, swiper_config);
    const swiper = slider.swiper;
  },

  data() {
    return {
      slidesArray: Object,
      currentKey: 0,
      demo2: null,
      current_slide: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";
#our_bslider_descriptionlog {
  // overflow: hidden;
  @include mt-140;
}
.slider_description {
  margin-bottom: 0;
  .select-blocks {
    position: absolute;
    display: flex;
    width: fit-content;
    z-index: 10;
  }
  .select-wrapper {
    width: fit-content;
    // min-width: 60px;

    &:not(:last-child) {
      margin-right: 70px;
    }
  }
}

.text_description {
  width: 640px;
  margin: 24px auto 80px;
  text-align: center;
}
.little_title {
  text-align: center;
  margin-bottom: 18px;
}
.button_all_button {
  position: relative;
}
.swiper-wrapper {
  position: relative;
}
.swiper-slide,
.swiper-slide-duplicate,
.swiper-slide-duplicate-next,
.swiper-slide-duplicate-prev,
.swiper-slide-next,
.swiper-slide-prev {
  transform: translateX(4.4vw);
  height: 396px;
  width: 326px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 2px 18px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 32px 24px;
  cursor: pointer;
  @include max(lg) {
    // width: 222px;
    height: 271px;
    padding: 16px 20px 16px 20px;
  }
  @include max(md) {
    height: 273px;
    transform: translateX(5.4vw);
    // width: 224px;
    //
    padding: 8px 16px 16px 16px;
  }
  @include max(sm) {
    transform: translateX(23.4vw);
  }

  p,
  h6 {
    color: #ffffff;
  }

  .post_city {
    opacity: 0.5;
    margin-bottom: 18px;
    @include max(lg) {
      margin-bottom: 8px;
    }
  }
}

// .swiper-slide {
//   filter: grayscale(100%);
//   .sale_label {
//     opacity: 0;
//   }
//   h6 {
//     opacity: 0;
//   }
// }

// .active1,
// .active2,
// .active3,
// .active4 {
//   filter: grayscale(0%);
//   .sale_label {
//     opacity: 1;
//   }
//   h6 {
//     opacity: 1;
//   }
// }

// .no-bg {
//   filter: grayscale(0%);
//   .sale_label {
//     opacity: 1;
//   }
//   h6 {
//     opacity: 1;
//   }
// }

.bg-slide {
}

.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  z-index: 100;
  background-image: none;
  width: fit-content;
  height: fit-content;
  outline: none;
  top: calc(50% - 8px);
}
.swiper-button-next {
  right: 32px;
  display: block;
}
.swiper-button-prev {
  left: 32px;
}
// demo2

.demo_2 {
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
    @include max(768) {
      display: none;
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
.long-slider .slider-footer-button {
  display: none;
  @include max(767) {
    width: fit-content;
    display: flex;
    margin: 48px auto 0 auto;
  }
}
@media screen and (min-width: 1600px) {
  .swiper-slide {
    transition: 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    &.grayscaled {
      filter: grayscale(1);
    }
  }
}
</style>
