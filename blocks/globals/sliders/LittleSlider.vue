<template>
  <div
    class="swiper-container one_screen_swiper"
    ref="one_screen_swiper"
    :class="{ isHallsPage: isHallsPage, isOneRoom: isOneRoom }"
  >
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="slide in slides" :key="slide.id">
        <img :src="slide.img" alt />
        <SaleLabel v-if="showSaleLabel"
          :text="slide.offers"
          :inverse="true"
        />
      </div>
    </div>

    <div class="slider_counter">
      <p class="italic">
        {{
          current_slide + 1 > 9 ? current_slide + 1 : "0" + (current_slide + 1)
        }}
      </p>
      <img src="~/static/images/slash_light.svg" alt />
      <p class="italic slides_length">
        {{
          this.slides.length > 9 ? this.slides.length : "0" + this.slides.length
        }}
      </p>
    </div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import SaleLabel from "~/components/SaleLabel";
export default {
  name: "LittleSlider",
  components: {
    SaleLabel
  },
  props: {
    slides: {
      type: Array,
      default: () => []
    },
    isHallsPage: {
      type: Boolean,
      default: false
    },
    isOneRoom: {
      type: Boolean,
      default: false
    },
    showSaleLabel:{
      type:Boolean,
      default:false
    }
  },
  data: () => ({
    current_slide: 0,
    all_slides: 0
  }),
  mounted() {
    let { one_screen_swiper } = this.$refs;
    let th = this;
    var mySwiper = new Swiper(one_screen_swiper, {
      speed: 600,
      loop: true,
      mousewheel: {
        forceToAxis: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        slideChange: function() {
          th.current_slide = this.realIndex;
        }
      }
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";

.swiper-container {
  width: calc(100% - 426px);
  // width: 678px !important;
  // min-width: 61.4% !important;
  @include min(1441) {
    //min-width: auto !important;
    width: calc(678 / 1104 * 100%);
  }
  @include max(lg) {
    min-width: auto !important;
    width: auto;
    //width: 57%;
  }
  @include max(md) {
    //width: 60%;
  }
  @include max(sm) {
    width: 100%;
    height: 292px;
  }
  &.isHallsPage {
    @include max(1024) {
      width: 58vw;
    }
    @include max(768) {
      width: 87vw;
    }
    @include max(375) {
      width: 100%;
    }
  }
  &.isOneRoom {
    @include max(lg) {
      width: calc(100% - 328px);
    }

    @include max(md) {
      width: calc(100% - 278px);
    }

    @include max(sm) {
      width: 100%;
    }
  }
}
.swiper-slide {
  position: relative;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
.swiper-button-next {
  background-image: url("../../../static/images/slider_btn_right.svg");
  right: 24px;
  @include max(md) {
    right: 18px;
  }
  @include max(sm) {
    right: 12px;
  }
}
.swiper-button-prev {
  background-image: url("../../../static/images/slider_btn_left.svg");
  left: 24px;
  @include max(md) {
    left: 18px;
  }
  @include max(sm) {
    left: 12px;
  }
}
.swiper-button-next,
.swiper-button-prev {
  width: 40px;
  height: 40px;
  background-size: 100% 100%;
  outline: none;
  @include max(md) {
    width: 36px;
    height: 36px;
  }
  @include max(sm) {
    width: 34px;
    height: 34px;
  }
}
.slider_counter {
  position: absolute;
  z-index: 10;
  width: 100%;
  bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  @include max(lg) {
    bottom: 20px;
  }
  @include max(md) {
    bottom: 16px;
  }
  @include max(sm) {
    bottom: 12px;
  }
  p {
    font-weight: normal;
    font-size: 24px;
    line-height: 110%;
    color: #ffffff;
  }
  img {
    margin: 0 8px;
    margin-bottom: -5px;
  }
  .slides_length {
    opacity: 0.4;
  }
}
.swiper-slide-active {
  @include max(375) {
    width: 100% !important;
  }
}
</style>
