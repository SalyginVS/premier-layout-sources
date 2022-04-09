<template>
  <div class="slider" ref="demo_2">
    <button class="cursor-button" @click="swipePrev">
      <span>prev</span>
    </button>
    <SliderDescription
      :descr_indents="descr_indents"
      :data="slider_description"
    />
    <div ref="sw" class="flick-wrapper cursorPointer">
      <flicking
        :options="{
          gap: 10,
          collectStatistics: false,
          circular: true,
          adaptive: true,
          autoResize: true,
          align: 'center',
          deceleration: 0.005,
          defaultIndex: 0,
          duration: 1000,
          moveType: { type: 'snap', count: slides.length },
          iOSEdgeSwipeThreshold: 120
        }"
        :tag="'div'"
        :viewportTag="'div'"
        :cameraTag="'div'"
        ref="slider"
        @change="handleChange"
      >
        <div
          class="swiper-slide"
          v-for="slide in slides"
          :key="slide.id"
          :style="{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 46.58%, rgba(0, 0, 0, 0.6) 100%), url(${slide.image})`
          }"
        >
          <LittleLabel :text="slide.label" />
          <p class="p1 post_city" v-if="slide.little_title">
            {{ slide.little_title }}
          </p>
          <h6>{{ slide.type }}</h6>
        </div>
      </flicking>
    </div>

    <UnderlineButton
      class="slider-footer-button"
      :text="slider_description.link"
    />
    <button class="cursor-button cursor-button--next" @click="swipeNext">
      <span class="visually-hidden">next</span>
    </button>
  </div>
</template>

<script>
import LittleLabel from "~/components/LittleLabel";
import SliderDescription from "~/blocks/globals/SliderDescription";
import UnderlineButton from "~/components/UnderlineButton";
import { Flicking } from "@egjs/vue-flicking";

export default {
  components: {
    LittleLabel,
    Flicking,
    SliderDescription,
    UnderlineButton
  },
  props: {
    slides: {
      type: Array,
      default: () => []
    },
    descr_indents: {
      type: Boolean,
      default: false
    },
    slider_description: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    activeId: 2,
    cursorForward: "pointer"
  }),

  methods: {
    swipeNext() {
      this.$refs.slider.next();
    },
    swipePrev() {
      this.$refs.slider.prev();
    },
    handleChange(e) {
      this.activeId = e.index;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";

.slider {
  @include mt-140;
  margin-bottom: 140px;

  @include max(sm) {
    margin-bottom: 80px;
  }

  position: relative;
}

.flick-wrapper {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  @media (min-width: 1024px) {
    position: relative;
    left: -160px;
  }
}

.cursor-button {
  position: absolute;
  width: 70px;
  height: 396px;
  background-color: transparent;
  border: none;
  bottom: 0;
  z-index: 2001;
  left: 0;
  & span {
    opacity: 0;
  }
  cursor: url("~@/static/icons/arrow_back.svg"), auto;

  &--next {
    cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='67' height='60' viewBox='0 0 67 60' fill='none'%3E%3Cg opacity='1'%3E%3Ccircle opacity='1' r='29.5' transform='matrix(-1 0 0 1 37 30)' stroke='white' stroke-width='1.5'/%3E%3Crect width='40' height='1' transform='matrix(-1 0 0 1 40 29.1562)' fill='white' stroke-width='1.5'/%3E%3Cpath d='M34.3431 23.9994L40 29.6562L34.3431 35.3131' stroke='white' stroke-width='1.5'/%3E%3C/g%3E%3C/svg%3E")
        64 0,
      auto;
    left: unset;
    right: 0;
    pointer-events: all;
  }
  @include max(sm) {
    display: none;
  }
}
.cursorPointer {
  cursor: pointer;
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
.swiper-slide {
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
  @include max(lg) {
    width: 222px;
    height: 271px;
    padding: 16px 20px 16px 20px;
  }
  @include max(md) {
    width: 224px;
    height: 273px;
    padding: 8px 16px 16px 16px;
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

  // .grid {
  //   // position: absolute;
  //   width: 100%;
  //   height: 100%;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;

  //   img {
  //     position: absolute;
  //     left: 0;
  //     top: 0;
  //     width: 100%;
  //     height: 100%;
  //     opacity: 0;
  //     transition: opacity 0.3s ease;
  //     &.lazyloaded {
  //       opacity: 1;
  //     }
  //   }
  // }

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

  // .arrow-cursor {
  //   width: 65px;
  //   height: 65px;
  //   // left: -30px;
  //   // top: -30px;
  //   z-index: 100000;
  //   pointer-events: none;
  //   // opacity: 0;
  //   transition: opacity 0.3s ease-in-out;
  //   &__icon {
  //     position: absolute;
  //     left: 0;
  //     top: 0;
  //     width: 100%;
  //     height: 100%;
  //   }
  //   &__path {
  //     fill: none;
  //     stroke-linecap: round;
  //     stroke-linejoin: round;
  //     stroke-width: 1.5px;
  //   }
  //   &.hide {
  //     opacity: 0;
  //   }
  //   @include max(768) {
  //     display: none;
  //   }
  // }
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
.slider-footer-button {
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

.arrow-cursor {
  position: absolute;
  bottom: 168px;
  left: 32px;
  z-index: 2001;
  opacity: 1;
  transform: rotate(180deg);

  &--right {
    transform: unset;
    left: unset;
    right: 32px;
  }
}
</style>
