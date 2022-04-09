<template>
  <div class="one_room hotel_finded_el" :class="{ addBlock: addBlock }">
    <LittleSlider :slides="slides" :isOneRoom="true" />

    <SaleLabel :inverse="true" v-if="proposal" :text="proposal" />

    <div v-if="addBlock" class="description_block tariff-room">
      <h5>Номер Прем'єр на Представницькому поверсі</h5>
      <div class="icon-details">
        <img src="~/static/icons/icon-moon.svg" alt="icon" />
        <img src="~/static/icons/gift-icon.svg" alt="icon" />
      </div>

      <div class="benefits_wrapper">
        <p class="a1">
          Кімнат:
          <span>1</span>
        </p>
        <p class="a1">
          До
          <span>4</span> осіб
        </p>
        <p class="a1">
          Площа:
          <span>20 м2</span>
        </p>
      </div>

      <Select :options="selectRoom" :value="selectRoom[0].value" />
      <p class="a1 know_more">Детальніше про номер</p>

      <div class="price_wrapper">
        <div class="price">
          <h6>725 $</h6>
          <p class="p3">555 $</p>
          <span class="for-day p2_light">За ніч</span>
        </div>
        <a href="/" class="p2_light total-price">Загальна сума</a>
      </div>

      <div class="gold_wide_button">
        <p class="a1 open">заРЕЗЕРВУВАТИ</p>
      </div>
      <div class="info-more">
        <p class="p2_light">
          Ви отримаєте
          <span>600 бонусів</span>
          <a href="/">увійдіть у свій кабінет</a>
        </p>
      </div>
    </div>

    <div v-else class="description_block">
      <h5>Номер Прем'єр на Представницькому поверсі</h5>
      <div class="benefits_wrapper">
        <p class="a1">
          Кімнат:
          <span>1</span>
        </p>
        <p class="a1">
          До
          <span>4</span> осіб
        </p>
        <p class="a1">
          Площа:
          <span>20 м2</span>
        </p>
      </div>

      <Select :options="selectRoom" :value="selectRoom[0].value" />
      <p class="a1 know_more">Детальніше про номер</p>
      <div class="price_wrapper">
        <p class="p2">від</p>
        <h6>&nbsp;555 ₴</h6>
        <span class="last-chance p2_light">Залишилось лише 3</span>
      </div>

      <div
        @click="OpenTariff"
        :class="{ buttonClose: buttonClose }"
        class="gold_wide_button"
      >
        <p class="a1 open">вибрати тариф</p>
        <p class="a1 close">сховати тариф</p>
      </div>
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
  props: {
    buttonClose: {
      type: Boolean,
      default: false,
    },
    addBlock: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    OpenTariff() {
      this.$emit("openTariff");
    },
  },

  data: () => ({
    proposal: "лідер продажів",
    selectRoom: [
      {
        img: require("~/static/icons/one-bed-icon.svg"),
        title: "односпальне ліжко",
        value: "односпальне ліжко",
      },
      {
        img: require("~/static/icons/bigbed.svg"),
        title: "двоспальне ліжко",
        value: "двоспальне ліжко",
      },
    ],

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
    ],
  }),
};
</script>
<style lang="scss">
.hotel_finded_el {
  &.addBlock {
    background: rgba(0, 0, 0, 0.01) !important;
    border: 1px solid rgba(0, 0, 0, 0.04) !important;
  }
}
</style>


<style lang="scss" scoped>
@import "../../assets/scss/blocks/hotel_finded_el.scss";
.one_room {
  position: relative;

  @include max(lg) {
    height: auto;
  }

  @include max(md) {
  }

  @include max(sm) {
    flex-wrap: wrap;
  }

  .sale_label {
    position: absolute;
    left: -15px;
    background-size: 100%;
  }
}
.swiper-container {
}
.description_block {
  width: 426px;
  padding: 32px;

  @include max(lg) {
    width: 328px;
    padding: 24px 30px 34px 34px;
  }

  @include max(md) {
    width: 278px;
    padding: 24px 24px 32px;
  }

  @include max(sm) {
    padding: 24px 18px;
    width: 100%;
  }

  .icon-details {
    display: none;
  }
  h5 {
    width: 80%;

    @include max(lg) {
      width: 86%;
    }

    @include max(sm) {
      width: 90%;
    }
  }
  .select {
    height: 51px;
    margin-bottom: 28px;

    @include max(lg) {
      left: -34px;
      margin-bottom: 24px;
    }

    @include max(md) {
      left: -24px;
      width: calc(100% + 48px);
    }
    @include max(sm) {
      height: 45px;
      left: -18px;
      width: calc(100% + 36px);
    }
  }

  &.tariff-room {
    h5 {
      @include max(lg) {
        font-size: 18px;
        width: 65%;
      }
      @include max (md){
        width: 75%;
      }
    }
    .icon-details {
      display: flex;
      position: absolute;
      right: 16px;
      top: 16px;
      img {
        &:not(:last-child) {
          margin-right: 10px;
        }
      }

      @include max(md) {
        position: relative;
        margin-top: 24px;
        top: 0;
        right: 0;
      }
    }
    .price_wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      @include max(lg) {
        flex-wrap: wrap;
      }

      .price {
        display: flex;
        align-items: center;

        @include max(lg) {
          width: 100%;
          margin-bottom: 11px;
        }
        @include max(sm) {
          width: auto;
        }

        h6 {
          opacity: 0.7;
        }
        .p3 {
          display: inline-block;
          font-size: 16px;
          line-height: 110%;
          letter-spacing: -0.02em;
          color: #b91d1d;
          text-decoration: line-through;
          margin-left: 13px;
          opacity: 1;
        }
        .for-day {
          margin-left: 12px;
        }
      }
      .total-price {
        opacity: 0.5;
        text-decoration: underline;
        transition: opacity 0.3s ease-in-out;
        &:hover {
          opacity: 1;
        }
      }
    }
    .info-more {
      margin-top: 8px;
      .p2_light {
        span {
          font-weight: 600;
        }
        a {
          text-decoration: underline;
        }
      }
    }
  }
}
.benefits_wrapper {
  margin: 32px 0 0px;
  display: flex;
  flex-wrap: wrap;

  @include max(lg) {
    margin: 24px 0px 0;
  }
  @include max(md) {
    margin: 24px 0px 32px;
  }
  @include max(sm) {
    margin: 18px 0px 19px;
  }
  p {
    &:not(:last-child) {
      margin-right: 20px;
    }
    margin-bottom: 29px;
    color: rgba(0, 0, 0, 0.5);
    span {
      color: rgb(0, 0, 0);
    }

    @include max(lg) {
      margin-bottom: 24px;
      &:not(:last-child) {
        margin-right: 12px;
      }
    }

    @include max(md) {
      margin-bottom: 0px;
      &:not(:last-child) {
        margin-right: 14px;
        margin-bottom: 8px;
      }
    }
  }
}
.select-wrapper {
  margin-bottom: 28px;
}
.know_more {
  width: fit-content;
  font-weight: 900;
  opacity: 0.6;
  border-bottom: 1px dashed #000000;
  cursor: pointer;
  margin-bottom: 60px;

  @include max(lg) {
    margin-bottom: 49px;
  }
  @include max(md) {
    margin-bottom: 44px;
  }
  @include max(sm) {
    margin-bottom: 24px;
  }
}
.price_wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  p {
    opacity: 0.5;
  }
  h6 {
    opacity: 0.7;
    line-height: 5px;
  }
  .last-chance {
    color: rgba(#b91d1d, 0.8);
    margin-left: 14px;
  }

  @include max(lg) {
    margin-bottom: 16px;
  }

  @include max(md) {
    margin-bottom: 12px;
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
  .open {
    display: inline-block;
  }
  .close {
    display: none;
  }
  &.buttonClose {
    background-image: none;
    background-color: transparent;
    border: 1px solid rgba(#000000, 0.1);
    p {
      color: #000000;
    }
    .open {
      display: none;
    }
    .close {
      display: inline-block;
    }
  }

  @include max(lg) {
    height: 49px;
  }
}
.bonus_info {
  margin-top: 8px;
  opacity: 0.5;
  font-size: 12px;
}
.bonus_info {
  span {
    font-weight: 900;
    font-size: 14px;
  }
}
</style>
