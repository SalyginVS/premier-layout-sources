<template>
  <swiper ref="Swiper" :options="swiperOptions">
    <swiper-slide
      class="swiper-slide"
      v-for="city in slides"
      :key="city.id"
      :style="{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16)), url(${city.image})`
      }"
    >
      <p class="a1">{{ city.name }}</p>
      <div class="swiper_hotels_count">
        <p class="p3">{{ city.hotel_count }}</p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "CitySlider",
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    slides: {
      type: Array,
      default: () => []
    },
    isCityPage: {
      type: Boolean,
      default: false
    },
    line: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      swiperOptions: {
        freeModeMinimumVelocity: 1,
        speed: 8000,
        autoplay: {
          delay: 0,
          disableOnInteraction: false
        },
        slidesPerView: "auto",
        grabCursor: true,
        loop: true,
        freeMode: true,
        loopedSlides: this.slides.length,
      }
    };
  },
  methods: {},
  mounted() {},
  destroyed() {}
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";
.swiper-container {
  z-index: 10;
}

.line-simple {
  top: 50%;
  left: 18vw;
  transform: rotate(-60deg) translateY(-50%);

  @include max(lg) {
    width: 250px;
    top: 56%;
    left: 20vw;
  }
  @include max(md) {
    width: 200px;
  }
  @include max(sm) {
    display: none;
  }
}

.swiper-slide {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 16.1111vw !important;
  // height: 7.7778vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 2px;
  margin-right: 8px !important;
  transition: background-color 0.3s ease-in-out;
  @include max(lg) {
    width: 180px;
    height: 96px;
  }
  &:hover {
    background-color: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.64),
      rgba(0, 0, 0, 0.64)
    );
    p {
      opacity: 1;
    }
    .swiper_hotels_count {
      .p3 {
        opacity: 1;
      }
    }
  }

  p {
    color: #ffffff;
    text-align: center;
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
    @include max(lg) {
      opacity: 1;
    }
  }
  .swiper_hotels_count {
    position: absolute;
    bottom: 10px;
    width: 100%;
    .p3 {
      opacity: 0.5;
      transition: opacity 0.3s ease-in-out;
      @include max(lg) {
        opacity: 0.8;
      }
    }
  }
}
</style>
