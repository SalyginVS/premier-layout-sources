<template>
  <div class="one_room">
    <LittleSlider :slides="slides" />

    <div class="description_block">
      <div class="description_block_top">
        <div class="description_first_line">
          <StarsAndCity :star_count="5" city="Київ, Україна" :dark="true" />
          <img src="~/static/images/scales.svg" alt />
        </div>
        <h5>Premier Compass Hotel Oleksandriya</h5>
        <a
          href="https://www.google.com.ua/maps/@50.4851493,30.4721233,14z?hl=ua"
          target="_blank"
          class="locale"
        >
          <img src="~/static/images/pin.svg" alt />
          <p class="p1">1.2 км до центра міста</p>
        </a>
      </div>

      <div class="hotel_points">
        <div class="point_wrapper">
          <img class="point_logo" src="~/static/images/owl.svg" alt />
          <div class="points">
            <img
              v-for="point in 5"
              :key="point"
              src="~/static/images/green_point.svg"
              alt
            />
          </div>
        </div>
        <div class="point_wrapper">
          <img class="point_logo" src="~/static/images/P.svg" alt />
          <div class="points">
            <img
              v-for="point in 5"
              :key="point"
              src="~/static/images/black_point_low_radius.svg"
              alt
            />
          </div>
        </div>
      </div>
      <div class="description_block_bottom">
        <p class="a1 know_more">детально про готель</p>
        <div class="price_wrapper">
          <p class="p2">від</p>
          <h6>
            &nbsp;5550 ₴
            <span>5550 ₴</span>
          </h6>
        </div>
        <p class="premier_club_notification">Тариф для членів Premier Club</p>
        <div class="gold_wide_button">
          <p class="a1">Перегляд номерів</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import StarsAndCity from "~/blocks/globals/hotel_props/StarsAndCity.vue";
import LittleSlider from "~/blocks/globals/sliders/LittleSlider";

export default {
  name: "OneHotel",
  components: {
    StarsAndCity,
    LittleSlider,
  },
  data() {
    return {
      slides: [
        {
          id: 0,
          img: require("~/static/images/one_hotel_slider.jpg"),
        },
        {
          id: 1,
          img: require("~/static/images/one_hotel_slider.jpg"),
        },
        {
          id: 2,
          img: require("~/static/images/one_hotel_slider.jpg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.one_room {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 533px;
  background-color: #f0edea;

  &:last-child {
    margin-bottom: 0px;
  }

  @include mb-24;

  @include max(lg) {
    height: 474px;
    margin-bottom: 24px;
  }
  @include max(md) {
    height: 441px;
  }

  @include max(sm) {
    margin-bottom: 18px;
    height: 711px;
    flex-wrap: wrap;
  }
}

.description_block {
  width: 426px;
  h5 {
    width: 80%;
    margin-bottom: 14px;

    @include max(lg) {
      width: 100%;
      margin-top: 14px;
      margin-bottom: 13px;
    }

    @include max(md) {
      max-width: 196px;
    }
  }

  @include max(lg) {
    min-width: 328px;
    max-width: 328px;
  }

  @include max(md) {
    min-width: 278px;
    max-width: 278px;
  }
  @include max(sm) {
    //height: 419px;
    min-width: 100%;
  }
}

.description_block_top {
  padding: 32px;

  @include max(lg) {
    padding: 24px 50px 24px 31px;
  }
  @include max(md) {
    padding: 25px 24px 24px;
  }
  @include max(sm) {
    padding: 25px 20px 18px;
  }
}
.description_block_bottom {
  padding: 32px;
  padding-top: 28px;
  @include max(lg) {
    padding: 24px 31px 32px 31px;
  }

  @include max(md) {
    padding: 24px;
  }
}
.description_first_line {
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include max(lg) {
    & img {
      display: none;
    }
  }
}
.locale {
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
  img {
    margin-right: 12px;
  }
  p {
    font-size: 12px;
  }
}
.hotel_points {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02)),
    #f0edea;
  display: flex;
  align-items: center;
  padding: 18px 40px;
  max-height: 51px;

  @include max(lg) {
    padding: 15px 32px;
  }

  @include max(md) {
    padding: 15px 24px;
  }
}
.point_wrapper {
  @include mr-40;
  display: flex;
  align-items: center;

  @include max(md) {
    margin-right: 26px;

    &:last-child {
      margin-right: 16px;
    }
  }
}
.point_logo {
  margin-right: 10px;
}
.points img {
  &:last-child {
    margin-right: 0px;
  }
  margin-right: 2px;
}
.know_more {
  width: fit-content;
  font-weight: 900;
  opacity: 0.6;
  border-bottom: 1px dashed #000000;
  cursor: pointer;
  margin-bottom: 60px;

  @include max(lg) {
    margin-bottom: 41px;
  }
  @include max(md) {
    margin-bottom: 33px;
  }
  @include max(md) {
    margin-bottom: 19px;
  }
}
.price_wrapper {
  display: flex;
  margin-bottom: 8px;
  p {
    opacity: 0.5;
  }
  h6 {
    opacity: 0.7;
    line-height: 5px;
  }
  span {
    text-decoration: line-through;
    font-family: AvenirNextCyrMedium;
    font-style: normal;
    font-weight: 450;
    font-size: 16px;
    line-height: 110%;
    letter-spacing: -0.02em;
    color: #000000;
    opacity: 0.3;
    margin-left: 13px;
  }

  @include max(lg) {
    p {
      line-height: 16.3px;
      font-size: 12px;
    }
  }
}
.premier_club_notification {
  font-family: AvenirNextCyrRegular;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 200%;
  letter-spacing: 0.06em;
  color: #000000;
  opacity: 0.5;
  margin: 7px 0 19px;

  @include max(lg) {
    margin: 9px 0 16px;
  }
}
.gold_wide_button {
  width: 100%;
  margin: auto;
  background-image: url("../../static/images/gold_for_button.svg");
  background-position: center;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: cover;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: #ffffff;
  }
}
</style>

