<template>
  <div id="one_hotel_first_screen">
    <div class="first_screen_text main-wrapper">
      <h1> Premier <br />
          Palace Hotel
      </h1>
      <div class="description_wrapper">
        <div class="description_left">
          <div class="stars">
            <img
              v-for="star in 5"
              :key="star"
              src="~/static/images/light_star.svg"
              alt
            />
          </div>
          <div class="vertical_line"></div>
          <p class="a1">Київ, Україна</p>
        </div>
        <div class="description_right">
          <p class="p1 first_screen_decription">
            Премьер Палас - це 5-ти зірковий готель у Києві, розташований в
            самому центрі столиці України. Нашему роскошному готується більше
            110 років і сьогодні він не теряє свого шарма і здатності оперувати
            часом.
          </p>
          <SlashButton text="заРЕЗЕРВУВАТИ" mode="light" @openModal="openBookingModal" :isLink="false"/>
        </div>
      </div>
      <FirstScreenBookingMob />
    </div>
    <div class="bottom_bar" :class="{ colorKebab }">
      <KebabFooter :footer_list="footer" @openPhotosModal="openPhotosModal" @openOneHotelMapModal="openOneHotelMapModal" @openC="openC"/>
    </div>
  </div>
</template>

<script>
import SlashButton from "~/components/SlashButton";
import KebabFooter from "~/blocks/globals/KebabFooter";
import FirstScreenBookingMob from "~/blocks/one_hotel/FirstScreenBookingMob";
import { mapMutations } from 'vuex'

export default {
  components: {
    SlashButton,
    KebabFooter,
    FirstScreenBookingMob,
  },
  data: () => ({
    footer:   [{
        id: 0,
        value: "фото",
        emit: 'openPhotosModal',
        type: 'button'
    },
    {
        id: 1,
        value: "ми на мапі",
        emit: 'openOneHotelMapModal',
        type: 'button'
    },
    {
        id: 2,
        value: "3d тур",
        emit: 'openB',
        type: 'button'
    }]
  }),
  props: {
    colorKebab: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapMutations({
      openBookingModal: 'modals/openBookingModal',
      openPhotosModal: 'modals/openPhotosModal',
      openOneHotelMapModal: 'modals/openOneHotelMapModal'
    }),
    openA(){
      console.log('open A')
    },
    openB(){
      console.log('open B')
    },
    openC(){
      console.log('open C')
    }  
  }
 
};
</script>
<style lang="scss">
#one_hotel_first_screen {
  .bottom_bar {
    &.colorKebab {
      .first_screen_footer_container {
        p,
        a {
          opacity: 1;
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
#one_hotel_first_screen {
  height: 100vh;
  position: relative;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 74.42%,
      rgba(0, 0, 0, 0.54) 100%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 55.51%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("../../static/images/one_hotel.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: soft-light, normal, normal, normal, normal;
  padding-top: 81px;
  display: flex;
  align-items: center;
  @include min(xl) {
    align-items: unset;
  }
  @include max(500) {
    min-height: 100vh;
    height: 635px;
    padding-top: 61px;
    align-items: unset;
  }
  //   position: relative;
}

.first_screen_text {
  //z-index: 0;
  padding-right: 400px;
  margin-left: auto;
  @include min(1441) {
    padding-right: 0;
  }
  @include min(xl) {
    margin-top: 165px;
  }
  @include max(1300) {
    padding-right: 150px;
  }
  @include max(950) {
    padding-right: 65px;
  }
  @include max(740) {
    padding-right: 0;
    margin: 0;
    width: 100%;
    text-align: center;
  }

  @include max(500) {
    padding-top: 85px;
  }
  h1 {
    @include mb-48;
    text-align: right;
    @include max(1300) {
      padding-right: 100px;
    }
    @include max(950) {
      padding-right: 125px;
    }
    @include max(740) {
      padding-right: 0;
      width: 100%;
      margin: 0 0 20px 0;
      text-align: center;
    }
  }
  .first_screen_decription {
    width: 356px;
    margin-bottom: 61px;
    @include max(1300) {
      width: 310px;
      margin-bottom: 40px;
    }
    @include max(950) {
      width: 290px;
      margin-bottom: 32px;
    }
  }
  #first-screen-booking-mob {
    display: none;
    margin-top: 42px;
    @include max(740) {
      display: block;
    }
  }
}

h1,
p {
  color: #ffffff;
}

.description_wrapper {
  margin-right: -170px;
  display: flex;
  justify-content: space-between;
  @include max(1300) {
    margin-right: 0;
  }
  @include max(740) {
    justify-content: center;
  }
}
.description_left {
  display: flex;
  align-items: center;
  height: fit-content;
  p {
    opacity: 0.6;
  }
}
.description_right {
  @include max(740) {
    display: none;
  }
}
.vertical_line {
  height: 1px;
  width: 32px;
  margin: 0 24px;
  background: #ffffff;
  opacity: 0.2;
  @include max(lg) {
    margin: 0 16px;
  }
}
.stars {
  img {
    width: 13px;
    &:not(:last-child) {
      margin-right: 8px;
    }
    @include max(lg) {
      width: 12px;
    }
  }
}
.bottom_bar {
  position: absolute;
  left: 55px;
  bottom: 33px;
  display: flex;
  align-items: center;
  @include max(740) {
    left: 28px;
    bottom: 25px;
  }
  p {
    cursor: pointer;
  }
  .first_screen_footer_container a {
    opacity: 1;
  }
}
</style>
