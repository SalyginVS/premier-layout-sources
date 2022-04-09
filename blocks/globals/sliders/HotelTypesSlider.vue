<template>
  <div id="hotel_types">
    <!-- Image in mask -->
    <div class="hotel_types__images">
      <picture class="hotel_types__image">
        <img
        width="824"
        height="790"
          src="~/static/images/hotel-type-mask-1920.png"
          alt="hotel photo"
          :class="{ scale: isHotelImageScale }"
        />
      </picture>
      <!-- <svg
        width="824"
        height="723"
        viewBox="0 0 672 723"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <clipPath
          id="image-mask"
          clipPathUnits="objectBoundingBox"
          transform="scale(0.0012135922330097 0.0013831258644537)"
        >
          <path d="M19.8166 759.013L21.5205 613.919L9.25229 605.303L20.4471 601.643L22.151 456.004L0 444.988L8.72408 438.893L9.2182 398.644H24.0253L25.2351 298.821L4.6517 285.473L12.0978 281.829L12.609 239.264H27.382L28.4555 150.73L21.2309 138.625L44.6939 128.954L43.8419 98.9203L53.6225 95.3448L55.9568 106.224L158.363 63.9662L158.465 53.1037L165.877 49.375L170.767 51.7927L171.926 59.0287L290.212 14.455V6.02715L298.919 0L308.7 4.81832L306.178 13.3312L428.86 32.6216L436.272 25.3856L443.616 31.4297L441.146 37.4569L515.829 89.3177L525.694 85.7082L535.526 89.3347L531.794 97.8476C531.794 98.6478 589.864 137.143 591.193 137.143C592.522 137.143 602.729 134.828 602.729 134.828L609.306 139.05L606.341 143.017L659.589 179.946L668.108 178.244L674.362 183.743L671.056 187.642L713.194 216.586L723.741 214.883L728.342 218.782L726.638 223.635L764.874 248.322L775.421 247.352L780.363 252.562L776.086 253.532L777.381 270.422L794.539 282.459L787.945 290.257V348.519L810.403 361.238L817.679 361.578L815.719 395.511L824 400.721L786.292 402.662V474.851L816.741 486.327L817.406 524.294H788.252L788.115 769.177L589.643 776.175L590.222 611.739C590.222 611.739 594.311 529.675 563.76 529.658C531.539 529.658 536.497 605.627 536.497 605.627C536.497 605.627 535.73 781.368 535.73 780.38C535.73 779.393 346.05 790 346.05 790L19.8166 759.013Z" />
        </clipPath>
      </svg> -->
    </div>
    <!-- ----- -->
    
    <div class="main-wrapper position-right">
      <Splide
        :options="options"
        @splide:click="handleClick"
        @splide:move="handleMove"
      >
        <SplideSlide>
          <div class="stars_wrapper">
            <img
              class="stars-logos"
              v-for="star in 4"
              :key="star"
              src="~/static/images/Star.svg"
              alt
            />
          </div>
          <h4>Premier Palace Hotels</h4>
        </SplideSlide>
        <SplideSlide>
          <div class="stars_wrapper">
            <img
              class="stars-logos"
              v-for="star in 3"
              :key="star"
              src="~/static/images/Star.svg"
              alt
            />
          </div>
          <div class="stars_wrapper">
            <img
              class="stars-logos"
              v-for="star in 4"
              :key="star"
              src="~/static/images/Star.svg"
              alt
            />
          </div>
          <h4>Premier Hotels</h4>
        </SplideSlide>
        <SplideSlide>
          <div class="stars_wrapper">
            <img
              class="stars-logos"
              v-for="star in 5"
              :key="star"
              src="~/static/images/Star.svg"
              alt
            />
          </div>
          <h4>Premier Compass Hotels</h4>
        </SplideSlide>
        <SplideSlide>
          <div class="stars_wrapper">
            <img
              class="stars-logos"
              v-for="star in 5"
              :key="star"
              src="~/static/images/Star.svg"
              alt
            />
          </div>
          <h4>Premier Compass</h4>
        </SplideSlide>
        <SplideSlide>
          <div class="stars_wrapper">
            <img
              class="stars-logos"
              v-for="star in 5"
              :key="star"
              src="~/static/images/Star.svg"
              alt
            />
          </div>
          <h4>Premier Compass</h4>
        </SplideSlide>
        <SplideSlide>
          <div class="stars_wrapper">
            <img
              class="stars-logos"
              v-for="star in 5"
              :key="star"
              src="~/static/images/Star.svg"
              alt
            />
          </div>
          <h4>Premier Compass</h4>
        </SplideSlide>
      </Splide>

      <div class="description_block">
        <transition name="fade" mode="out-in">
          <div class="description_wrapper" :key="current_hotel">
            <p class="description_text p1">
              {{ hotels_info[current_hotel].text }}
            </p>

            <div class="hotels_list">
              <div
                class="one_hotel_wrapper"
                v-for="(hotel, index) in hotels_info[current_hotel].hotels"
                :key="index"
              >
                <nuxt-link
                  :to="hotel.link"
                  class="a1 one_hotel"
                  @mouseenter.native="hoverHotelLink"
                  @mouseleave.native="mouseleaveHotelLink"
                >
                  {{ hotel.name }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </transition>
        <div class="button_wrapper">
          <SlashButton text="Детальніше" :link="detailsHref"/>
        </div>
      </div>
      <!-- <img class="side_img" src="~/static/images/hotel_type.png" alt /> -->
    </div>
  </div>
</template>

<script>
import SlashButton from "~/components/SlashButton";

export default {
  name: "HotelTypesSlider",
  components: {
    SlashButton
  },
  props: {
    detailsHref:{
      type: String,
      default: '/'
    }
  },
  data: () => ({
    current_hotel: 0,
    hotels_info: [
      {
        id: 0,
        text:
          "Господа, високотехнологічна концепція суспільного укладу дозволяє виконати важливі завдання по розробці як самодостатніх, так і зовні залежних концептуальних рішень. Таким чином, зміцнення і розвиток внутрішньо.",
        hotels: [
          {
            name: "Premier Geneva Hotel",
            link: '/one_hotel'
          },
          {
            name: "Premier Hotel Abri",
            link: '/one_hotel'
          },
          {
            name: "Premier Hotel Aurora",
            link: '/one_hotel'
          },
          {
            name: "Premier Geneva Hotel",
            link: '/one_hotel'
          },
          {
            name: "Premier Hotel Abri",
            link: '/one_hotel'
          },
          {
            name: "Premier Hotel Aurora",
            link: '/one_hotel'
          },
          {
            name: "Premier Geneva Hotel",
            link: '/one_hotel'
          },
          {
            name: "Premier Hotel Abri",
            link: '/one_hotel'
          },
          {
            name: "Premier Hotel Aurora",
            link: '/one_hotel'
          },
          // "Premier Geneva Hotel",
          // "Premier Hotel Abri",
          // "Premier Hotel Aurora",
          // "Premier Geneva Hotel",
          // "Premier Hotel Abri",
          // "Premier Hotel Aurora",
          // "Premier Geneva Hotel",
          // "Premier Hotel Abri",
          // "Premier Hotel Aurora",
          // "Premier Geneva Hotel",
          // "Premier Hotel Abri",
          // "Premier Hotel Aurora",
        ],
      },
      {
        id: 1,
        text:
          "Господа, високотехнологічна концепція Таким чином, зміцнення і розвиток внутрішньо.",
        hotels: [
          {
            name: "Premier Geneva Hotel",
            link: '/one_hotel'
          },
          {
            name: "Premier Hotel Abri",
            link: '/one_hotel'
          },
          {
            name: "Premier Hotel Aurora",
            link: '/one_hotel'
          },
          {
            name: "Premier Hotel Aurora",
            link: '/one_hotel'
          },
          // "Premier Geneva Hotel",
          // "Premier Hotel Abri",
          // "Premier Hotel Aurora",
          // "Premier Hotel Aurora",
        ],
      },
      {
        id: 2,
        text:
          "Господа,  розробці як самодостатніх, так і зовні залежних концептуальних рішень. Таким чином, зміцнення і розвиток внутрішньо.",
        hotels: [
          {
            name: "Premier Geneva Hotel",
            link: '/one_hotel'
          },
          {
            name: "Premier Hotel Abri",
            link: '/one_hotel'
          },
          {
            name: "Premier Hotel Aurora",
            link: '/one_hotel'
          },
          // "Premier Geneva Hotel",
          // "Premier Hotel Abri",
          // "Premier Hotel Aurora",
        ],
      },
      {
        id: 3,
        text:
          "Господа, високотехнологічна концепція Таким чином, зміцнення і розвиток внутрішньо.Господа, високотехнологічна концепція Таким чином, зміцнення і розвиток внутрішньо.",
        hotels: [
          
          {
            name: "Premier Geneva Hotel",
            link: '/one_hotel'
          },
          {
            name: "Premier Hotel Abri",
            link: '/one_hotel'
          },
          {
            name: "Premier Hotel Aurora",
            link: '/one_hotel'
          },
          {
            name: "Premier Hotel Aurora",
            link: '/one_hotel'
          },
          // "Premier Geneva Hotel",
          // "Premier Hotel Abri",
          // "Premier Hotel Aurora",
          // "Premier Hotel Aurora",
        ],
      },
      {
        id: 4,
        text:
          "Господа, високотехнологічна концепція Таким чином, зміцнення і розвиток внутрішньо.Господа, високотехнологічна концепція Таким чином, зміцнення і розвиток внутрішньо.",
        hotels: [
          {
            name: "Premier Geneva Hotel",
            link: '/one_hotel'
          },
          {
            name: "Premier Hotel Abri",
            link: '/one_hotel'
          },
          {
            name: "Premier Hotel Aurora",
            link: '/one_hotel'
          },
          {
            name: "Premier Hotel Aurora",
            link: '/one_hotel'
          },
          // "Premier Geneva Hotel",
          // "Premier Hotel Abri",
          // "Premier Hotel Aurora",
          // "Premier Hotel Aurora",
        ],
      },
      {
        id: 5,
        text:
          "Господа, високотехнологічна концепція Таким чином, зміцнення і розвиток внутрішньо.Господа, високотехнологічна концепція Таким чином, зміцнення і розвиток внутрішньо.",
        hotels: [
          {
            name: "Premier Geneva Hotel",
            link: '/one_hotel'
          },
          {
            name: "Premier Hotel Abri",
            link: '/one_hotel'
          },
          {
            name: "Premier Hotel Aurora",
            link: '/one_hotel'
          },
          {
            name: "Premier Hotel Aurora",
            link: '/one_hotel'
          },
          // "Premier Geneva Hotel",
          // "Premier Hotel Abri",
          // "Premier Hotel Aurora",
          // "Premier Hotel Aurora",
        ],
      },
    ],
    isHotelImageScale: false,
    timerId: null,
    options: {
      type: "loop",
      arrows: false,
      pagination: false,
      perPage: 2.7,
      gap: "164px",
      autoWidth: true,
      breakpoints: {
        // 900:{
        //   perPage: 2.3
        // },
        1023: {
          perPage: 2.3,
          gap: "110px"
        },
        1439: {
          perPage: 2,
          gap: "252px"
        }
      }
    }
  }),
  methods: {
    hoverHotelLink() {
      this.isHotelImageScale = true
    },
    mouseleaveHotelLink() {
      if (this.timerId) {
        clearTimeout(this.timerId);
      }
      this.isHotelImageScale = false;
    },
    // handleChange(i) {
    //   this.current_hotel = i;
    // },
    handleClick(splide, next) {
      next.slide.classList.add('is-active')
      next.slide.classList.add('is-visible')
      splide.go(next.index);
    },
    handleMove(splide, i) {
      this.current_hotel = i;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";

.splide {
  padding-left: 168px;
  @include max(1250) {
    padding-left: 134px;
  }
  @include max(900) {
    padding-left: 48px;
  }
}

/deep/ .splide__track {
  z-index: 100;
  background: transparent;
  width: 100vw;
}

.splide__slide {
  //opacity: 0.2;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: opacity 0.5s ease;
  cursor: pointer;
  h4 {
    // transition: opacity 0.5s ease, filter 0.5s ease;
    filter: contrast(20%);
    opacity: 0.4;
    color: #000000;
  }
  .stars-logos {
    // transition: opacity 0.5s ease, filter 0.5s ease;
    filter: contrast(20%);
    opacity: 0.4;
  }
}

.splide__slide.is-visible.is-active {
  opacity: 1;
  h4 {
    opacity: 1;
    filter: unset;
    color: #000000;
  }
  .stars-logos {
    opacity: 1;
    filter: unset;
  }
}

#hotel_types {
  background-color: #f0edea;
  padding-top: 92px;
  height: 784px;
  position: relative;
  box-sizing: content-box;
  overflow: hidden;
  &:before {
    // content: "";
    display: block;
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 88%;
    background-position: 100% 100%;
    background-size: contain;
    background-repeat: no-repeat;
    @include max(1440) {
      height: 86%;
      background-image: url("../../../static/images/hotel_type.png");
    }
    @include max(1120) {
      background-position-x: calc(100% + 150px);
    }
    @include max(1024) {
      top: 56px;
      bottom: 62px;
    }
    @include max(983) {
      opacity: 0.2;
    }
    @include max(870) {
      top: 56px;
      bottom: 62px;
    }
    @include min(1441) {
      background-position-x: calc(100% - 88px);
      background-image: url("../../../static/images/hotel_type_1920.png");
    }
  }
  @include max(lg) {
    padding-top: 80px;
    height: 714px;
  }
  @include max(md) {
    padding-top: 60px;
    min-height: 760px;
    height: auto;
  }
  @include max(sm) {
    display: none;
  }
}
.hotel_types {
  &__images {
    position: absolute;
    // left: calc(50vw + (1008 - 1920 / 2) / 1920 * 100vw);
    right: -44px;
    top: 122px;
    width: 824px;
    height: 790px;
    @include max(1439) {
      width: 616px;
      height: 590px;
      // left: calc(50vw + (628 - 1024 / 2) / 1024 * 100vw);
      top: unset;
      bottom: 0;
    }
    @include max(1023) {
      width: 628px;
      height: 602px;
      // left: calc(50vw + (290 - 768 / 2) / 768 * 100vw);
      top: 56px;
      bottom: unset;
      opacity: 0.04;
    }
    svg {
      position: absolute;
      pointer-events: none;
      opacity: 0;
    }
  }
  &__image {
    display: block;
    width: 100%;
    height: 100%;
    clip-path: url('#image-mask');
    filter: grayscale(1);
    img  {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      transition: 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      &.scale {
        transform: scale(1.05);
      }
    }
  }
}

.swiper-container {
  position: relative;
  z-index: 100;
  background: transparent;
  @include min(1441) {
    width: 100vw;
    margin-left: 168px;
  }
}
.swiper-wrapper {
  background: transparent;
}
.swiper-slide {
  //opacity: 0.2;
  width: fit-content;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  user-select: none;
  transition: opacity 0.5s ease;
  cursor: pointer;
  h4 {
    filter: contrast(20%);
    opacity: 0.4;
    color: #000000;
  }
  .stars-logos {
    filter: contrast(20%);
    opacity: 0.4;
  }
}

.swiper-slide-active {
  //opacity: 1;
  h4 {
    filter: unset;
    opacity: 1;
    color: #000000;
  }
  .stars-logos {
    opacity: 1;
    filter: unset;
  }
}

.slider-container {
  position: relative;
  padding-left: 168px;
  z-index: 100;
  background: transparent;
  @include min(1441) {
    width: 100vw;
    padding-left: 168px;
  }
  @include min(1441) {
    //padding-left: 0;
  }

  @include max(lg) {
    padding-left: 134px;
  }
  @include max(md) {
    padding: 48px 0 90px 0;
    @include pl-168;
  }
}

.slide {
  opacity: 0.4;
  width: fit-content;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  user-select: none;
  transition: opacity 0.5s ease;
  cursor: pointer;
  h4 {
    filter: contrast(20%);
    color: #000000;
  }
  .stars-logos {
    filter: contrast(20%);
  }
}

.stars_wrapper {
  // margin-bottom: 10px;

  .stars-logos{
    margin-right: 9px;
    &:last-child{
      margin-right: 0px;
    }

    @include max (lg){
      margin-right: 6.53px;
    }
  }

  // img {
  //   @include max(lg) {
  //     margin-right: 6px;
  //   }
  // }
}
.stars_wrapper:last-of-type {
  margin-bottom: 13px;
  @include max(lg) {
    margin-bottom: 8px;
  }
}

.description_block {
  padding: 56px 0 133px 0;
  @include pl-168;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @include min(1441) {
    //padding-left: 0;
  }

  @include min(1220) {
    //padding-left: 120px;
  }
  @include max(md) {
    padding: 48px 0 90px 0;
    @include pl-168;
  }
}
.description_wrapper {
  flex-grow: 1;
}

.description_text {
  @include mb-80;
  opacity: 0.5;
  width: 443px;
  @include max(lg) {
    width: 368px;
    opacity: 0.5;
  }
  @include max(md) {
    width: 290px;
    opacity: 0.4;
  }
}
.hotels_list {
  @include mb-80;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 500px;
  @include max(lg) {
    width: 420px;
  }
  @include max(md) {
    width: 398px;
  }
}

a.one_hotel{
  display: block;
}

.one_hotel, a.one_hotel {
  margin-bottom: 22px;
  opacity: 0.5;
  transition: opacity 0.4s ease;
  width: fit-content;
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
  }
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  @include max(lg) {
    margin-bottom: 20px;
  }
}

.side_img {
  position: absolute;
  right: 0;
  bottom: 0;
}
.button_wrapper {
  //z-index: 11111;
  /* rr */
  z-index: 0;
  /* rr */
  padding-bottom: 76px;
  @include max(md) {
    padding-bottom: 0;
  }
}
</style>
