
<template>
  <div class="custom_slider" :class="{ 'show-desc-mob': showDescrOnMob }">
    <div class="custom_slider_description">
      <div class="slider_description_left">
        <p class="little_title">{{ description.little_title }}</p>
        <h3 class="italic" v-html="description.big_title"></h3>
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
        />
      </div>
    </div>

    <div class="slider_container" ref="slider">
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

      <div class="slider_counter">
        <transition name="fade" mode="out-in">
          <p :key="current_slide" class="italic current_slide">
            {{
              current_slide + 1 > 9
                ? current_slide + 1
                : "0" + (current_slide + 1)
            }}
          </p>
        </transition>
        <div class="gorizontal_line"></div>
        <p class="italic slides_count">
          {{
            this.slides.length > 9
              ? this.slides.length
              : "0" + this.slides.length
          }}
        </p>
      </div>
      <div class="button_prev" @click="prevSlide"></div>
      <div class="button_next" @click="nextSlide"></div>

      <div class="big_slider_wrapper">
        <SaleLabel
          class="js_hide_cursor"
          :labelAddInfo="labelAddInfo"
          v-if="label"
          :text="labelContent"
        />

        <div class="slider_wrapper">
          <div
            class="slider_slide"
            v-for="slide in slides"
            :key="slide.id"
            :class="{
              chosed_slide: slide.id === current_slide,
              previous_slide: slide.id === previous_slide,
              next_slide: slide.id === next_slide,
            }"
          >
            <img :src="slide.image" alt />
            <slot />
          </div>
        </div>
      </div>
      <div class="slider_wrapper_little">
        <div
          class="slider_slide"
          v-for="slide in slides"
          :key="slide.id"
          :class="{
            chosed_slide: slide.id === next_slide,
            previous_slide: slide.id === current_slide,
            next_slide: slide.id === next_slide_little,
          }"
        >
          <img :src="slide.image" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlashButton from "~/components/SlashButton";
import CursorClicker from "~/plugins/cursor_clicker";
import SaleLabel from "~/components/SaleLabel";
import ClearComponent from "~/components/ClearComponent";

export default {
  name: "CustomSlider",
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
      default: "",
    },
  },
  components: {
    SlashButton,
    SaleLabel,
  },
  data: () => ({
    current_slide: 0,
    previous_slide: null,
    next_slide: 1,
    next_slide_little: 2,
    animation_runned: false,
  }),
  created() {
    this.previous_slide = this.slides.length - 1;
  },
  mounted() {
    // let slider_container = document.querySelector(".slider_container");
    let { slider } = this.$refs;
    let cursor_clicker = new CursorClicker(slider);
  },
  methods: {
    nextSlide() {
      if (this.animation_runned) return;
      this.animation_runned = true;

      if (this.slides.length > this.current_slide + 1) {
        this.current_slide++;
      } else {
        this.current_slide = 0;
      }

      if (this.slides.length > this.next_slide + 1) {
        this.next_slide++;
      } else {
        this.next_slide = 0;
      }

      if (this.slides.length > this.previous_slide + 1) {
        this.previous_slide++;
      } else {
        this.previous_slide = 0;
      }

      if (this.slides.length > this.next_slide_little + 1) {
        this.next_slide_little++;
      } else {
        this.next_slide_little = 0;
      }

      setTimeout(() => {
        this.animation_runned = false;
      }, 1000);
    },
    prevSlide() {
      if (this.animation_runned) return;
      this.animation_runned = true;

      if (this.current_slide > 0) {
        this.current_slide--;
      } else {
        this.current_slide = this.slides.length - 1;
      }

      if (this.next_slide > 0) {
        this.next_slide--;
      } else {
        this.next_slide = this.slides.length - 1;
      }

      if (this.previous_slide > 0) {
        this.previous_slide--;
      } else {
        this.previous_slide = this.slides.length - 1;
      }

      if (this.next_slide_little > 0) {
        this.next_slide_little--;
      } else {
        this.next_slide_little = this.slides.length - 1;
      }

      setTimeout(() => {
        this.animation_runned = false;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";

.custom_slider {
  background: linear-gradient(180deg, rgba(240, 237, 234, 0) 0%, #f0edea 100%);

  .slider_description_right {
    @include max(sm) {
      display: none;
    }
  }
  &.show-desc-mob {
    .custom_slider_description {
      @include max(sm) {
        flex-direction: column;
      }
    }
    .slider_description_right {
      @include max(sm) {
        display: flex;
      }
      .slider_description_text{
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
  @include max(md) {
    padding: 0 48px;
  }
  @include max(sm) {
    padding: 0 18px;
  }
  h3 {
    width: 403px;
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
  display: flex;
  align-items: center;
  padding: 112px 0 140px;
  overflow: hidden;
  position: relative;
  @include max(lg) {
    padding: 72px 0 123px;
  }
  @include max(md) {
    padding: 64px 0 112px;
  }
  
}
.slider_container > div {
  flex-shrink: 0;
}

.slider_counter {
  padding: 0 64px;
  @include max(lg) {
    padding: 0 52px;
  }
  @include max(md) {
    padding: 0 36px;
  }
  @include max(sm) {
    display: none;
  }
  p {
    font-family: Cormorant;
    font-style: italic;
    font-weight: normal;
    font-size: 24px;
    line-height: 110%;
    text-align: center;
    color: #000000;
    opacity: 0.5;
    @include max(md) {
      font-size: 20px;
    }
  }
}
.current_slide {
  opacity: 0.5;
}
.slides_count {
  opacity: 0.2;
}
.gorizontal_line {
  width: 30px;
  opacity: 0.1;
  border: 1px solid #000000;
  margin: 10px 0;
}

.big_slider_wrapper {
  position: relative;
  width: 62vw;
  height: 40.28vw;
  margin-right: 109px;
  // pointer-events: none;
  @include max(lg) {
    margin-right: 98px;
    width: 601px;
    height: 390px;
  }
  @include max(md) {
    margin-right: 48px;
    width: 534px;
    height: 346px;
  }
}
.slider_wrapper,
.slider_wrapper_little {
  position: relative;
  display: flex;
  overflow: hidden;
  pointer-events: none;
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
  }
}
.slider_slide {
  position: absolute;
  width: 100%;
  height: 100%;
  will-change: left;
  transition: left 1s ease, z-index 1s ease;
}
.slider_slide img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
.chosed_slide {
  // width: 100%;
  left: 0;
  z-index: 10;
}
.next_slide {
  left: 100%;
  z-index: 5;
}
.previous_slide {
  // width: 0;
  left: -100%;
  z-index: 5;
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
</style>
