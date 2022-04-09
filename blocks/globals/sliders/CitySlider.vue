<template>
  <div class="city-slider__wrapper" :class="{ isCityPage: isCityPage }">
    <div class="swiper-container map_slider">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="city in slider_cities"
          :key="city.id"
          :style="{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16)), url(${city.image})`
          }"
        >
          <p class="a1">{{ city.name }}</p>
          <div class="swiper_hotels_count">
            <p class="p3">{{ city.hotel_count }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <Flicking
      class="map_slider"
      :options="{
        gap: 8,
        collectStatistics: false,
        circular: true,
        moveType: 'freeScroll',
        adaptive: true,
        autoResize: true,
        duration: 500,
        animating: true,
        easing: 'easeInSine'
      }"
      :plugins="plugins"
      :tag="'div'"
      :viewportTag="'div'"
      :cameraTag="'div'"
      ref="slider"
    >
      <div
        class="swiper-slide"
        v-for="city in slider_cities"
        :key="city.id"
        :style="{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16)), url(${city.image})`
        }"
      >
        <p class="a1">{{ city.name }}</p>
        <div class="swiper_hotels_count">
          <p class="p3">{{ city.hotel_count }}</p>
        </div>
      </div>
    </Flicking> -->
    <div v-if="line" class="line-simple"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
// import { Flicking } from "@egjs/vue-flicking";
// import { AutoPlay } from "@egjs/flicking-plugins";

export default {
  name: "CitySlider",
  components: {

  },
  props: {
    isCityPage: {
      type: Boolean,
      default: false
    },
    line: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    swiper: null,
    slider_cities: [
      {
        id: 0,
        image: require("~/static/images/slider_map1.jpg"),
        name: "Львів",
        hotel_count: "1 готель"
      },
      {
        id: 1,
        image: require("~/static/images/slider_map1.jpg"),
        name: "Львів",
        hotel_count: "1 готель"
      },
      {
        id: 2,
        image: require("~/static/images/slider_map1.jpg"),
        name: "Львів",
        hotel_count: "1 готелі"
      },
      {
        id: 3,
        image: require("~/static/images/slider_map3.jpg"),
        name: "Львів",
        hotel_count: "1 готель"
      },
      {
        id: 4,
        image: require("~/static/images/slider_map1.jpg"),
        name: "Львів",
        hotel_count: "1 готель"
      },
      {
        id: 5,
        image: require("~/static/images/slider_map2.jpg"),
        name: "Львів",
        hotel_count: "1 готелі"
      },
      {
        id: 6,
        image: require("~/static/images/slider_map3.jpg"),
        name: "Львів",
        hotel_count: "1 готель"
      },
      {
        id: 7,
        image: require("~/static/images/slider_map1.jpg"),
        name: "Львів",
        hotel_count: "1 готель"
      },
      {
        id: 8,
        image: require("~/static/images/slider_map2.jpg"),
        name: "Львів",
        hotel_count: "1 готелі"
      }
    ],
    plugins: []
  }),
  methods: {
    initSwiper() {
      this.swiper = new Swiper(".map_slider", {
        speed: 8000,
        slidesPerView: "auto",
        loop: true,
        freeMode: true,
        grabCursor: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: false
        }
      });
    }
  },
  mounted() {
    this.initSwiper();
    // this.plugins = [
    //   new AutoPlay({ duration: 100, direction: "NEXT", stopOnHover: true })
    // ];
    // this.$refs.slider.plugins = [ new AutoPlay(2000, "NEXT")];
    // this.$refs.slider.addPlugins([plugins]);
    // console.log("SLIDER",this.$refs.slider);
  },
  destroyed() {
    this.swiper.destroy();
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";
// /deep/.eg-flick-viewport {
//   -webkit-transition-timing-function: linear !important;
//   transition-timing-function: linear !important;
// }

.city-slider__wrapper {
  position: relative;
  &.isCityPage {
    .line-simple {
      left: 10vw;
    }
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
  .map_slider {
    width: 100%;
    z-index: 10;

    .swiper-wrapper {
    -webkit-transition-timing-function: linear !important;
    transition-timing-function: linear !important;
    }
    .swiper-slide {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      width: 16.1111vw !important;
      height: 7.7778vw;
      display: flex;
      justify-content: center;
      flex-direction: column;
      border-radius: 2px;
      // cursor: pointer;
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
  }
}

// .swiper-wrapper {
//   transition-timing-function: linear;
// }
</style>
