<template>
  <div class="one_room hotel_finded_el">
    <LittleSlider :slides="slides" />
    <div class="description_block">
      <h5>Номер Прем'єр на Представницькому поверсі</h5>
      <div class="benefits_wrapper">
        <p class="a1">Кімнат: <b>1</b></p>
        <p class="a1">До <b>4</b> осіб</p>
        <p class="a1">Площа: <b>20 м2</b></p>
        <p class="a1">Двоспальне ліжко</p>
      </div>
      <p class="a1 know_more" @click="$emit('openRoomDetailsModal')">
        Детальніше про номер
      </p>
      <div class="price_wrapper">
        <p class="p1">від</p>
        <h6>&nbsp;5550 ₴</h6>
      </div>
      <p class="p1 sale_info">
        від
        <span>29₴</span> економія зареєстрованих користувачів.
      </p>
      <div class="gold_wide_button">
        <p class="a1">перевірити ціни</p>
      </div>
      <p class="p1 bonus_info">
        Ви отримаєте
        <span class="price">600 бонусів</span>,
        <span @click="openLogin" class="open-account"
          >увійдіть у свій рахунок</span
        >
      </p>
    </div>
  </div>
</template>

<script>
import LittleSlider from "~/blocks/globals/sliders/LittleSlider";

export default {
  name: "OneRoom",
  components: {
    LittleSlider,
  },

  data: () => ({
    slides: [
      {
        id: 0,
        img: require("~/static/images/room.jpg"),
      },
      {
        id: 1,
        img: require("~/static/images/room.jpg"),
      },
      {
        id: 2,
        img: require("~/static/images/room.jpg"),
      },
      {
        id: 3,
        img: require("~/static/images/room.jpg"),
      },
      {
        id: 4,
        img: require("~/static/images/room.jpg"),
      },
    ],
  }),
  methods: {
    openLogin() {
      this.$store.commit("setOpenLogInModal");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/blocks/hotel_finded_el.scss";
.one_room {
  @include max(sm) {
    display: flex;
    flex-direction: column;
  }
}
.description_block {
  width: 426px;
  padding: 32px;
   @include min(1441) {
    width: calc(426 / 1104 * 100%);
  }
  @include max(lg) {
    padding: 24px 32px;
    width: 43%;
  }
  @include max(md) {
    padding: 24px 21px;
    width: 40%;
  }
  @include max(sm) {
    padding: 18px 20px;
    width: 100%;
  }
  h5 {
    width: 80%;
    @include max(sm) {
      width: 100%;
      font-size: 26px;
    }
  }
}
.benefits_wrapper {
  margin: 32px 0 26px;
  display: flex;
  flex-wrap: wrap;
  @include max(lg) {
    margin: 24px 0;
    width: 100%;
  }
  @include max(sm) {
    margin: 18px 0 24px;
    justify-content: space-between;
  }
  p {
    margin-right: 20px;
    margin-bottom: 14px;
    opacity: 0.5;
    @include max(lg) {
      margin-right: 10px;
      margin-bottom: 8px;
    }
    @include max(md) {
      margin-right: 12px;
    }
    @include max(sm) {
      margin-bottom: 8px;
    }
  }
}
.know_more {
  width: fit-content;
  font-weight: 900;
  opacity: 0.6;
  border-bottom: 1px dashed #000000;
  cursor: pointer;
  margin-bottom: 60px;
  @include max(lg) {
    margin-bottom: 48px;
  }
  @include max(md) {
    margin-bottom: 40px;
  }
  @include max(sm) {
    margin-bottom: 32px;
  }
}
.price_wrapper {
  display: flex;
  margin-bottom: 8px;
  @include max(lg) {
    margin-bottom: 7px;
  }
  @include max(md) {
    margin-bottom: 9px;
  }
  @include max(sm) {
    margin-bottom: 8px;
  }
  p {
    opacity: 0.5;
    margin-top: -2px;
  }
  h6 {
    opacity: 0.7;
    // line-height: 5px;
    line-height: 110%;
  }
}
.sale_info {
  font-size: 12px;
  opacity: 0.5;
  margin-bottom: 20px;
  @include max(lg) {
    margin-bottom: 17px;
  }
  @include max(md) {
    margin-bottom: 12px;
  }
  @include max(sm) {
    margin-bottom: 14px;
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
.bonus_info {
  margin-top: 8px;
  opacity: 0.5;
  font-size: 12px;
  @include max(md) {
    line-height: 100%;
  }
  @include max(sm) {
    width: 60%;
    margin-top: 16px;
  }
  .open-account {
    text-decoration: underline;
    cursor: pointer;
  }
}

.sale_info,
.bonus_info {
  .price {
    font-weight: 900;
    font-size: 14px;
    @include max(md) {
      font-size: 14px;
      font-weight: 600;
    }
  }
}
</style>