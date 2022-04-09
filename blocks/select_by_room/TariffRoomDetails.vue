<template>
  <div>
    <template v-if="!tariffActive">
      <div
        v-if="tariffOptions.not_available"
        class="tariff-room-details not_available"
      >
        <h6 class="title">Недоступно</h6>
        <p class="p1 descr">
          Немає місця на 2 дні, але є кімната на 3 дні ціною двох
        </p>
        <p class="see-more a1">Переглянути</p>
      </div>

      <div v-else class="tariff-room-details tariffActive">
        <div class="price-wrap">
          <span class="for-price p2_light">Від</span>
          <h6>725 $</h6>
          <span class="for-day p2_light">За ніч</span>
        </div>

        <p class="p1 added-info">
          <span>29₴</span> економія для
          <a href="/">зареєстрованих</a> користувачів.
        </p>
        <p class="p1 best-price">Найкраща ціна</p>

        <div @click="openRoom">
          <GoldButton
            v-if="!isRoomOpen"
            :forwardedFromReview="true"
            :text="'показати кімнати'"
          />

          <Button
            v-else
            :forwardedFromReview="true"
            :text="'сховати кімнати'"
          />
        </div>

        <!-- <div @click="openRoom" :class="{ closeButton: buttonClose }">
          <span>
            {{ buttonClose ? 'сховати кімнати' : 'показати кімнати' }}
          </span>
        </div> -->
        <!-- <Button
          @click="openRoom"
          :text="buttonClose ? 'сховати кімнати' : 'показати кімнати'"
          :class="{ closeButton: buttonClose }"
        /> -->
      </div>
    </template>

    <template v-else>
      <div
        v-if="tariffOptions.not_available"
        class="tariff-room-details not_available"
      >
        <h6 class="title">Недоступно</h6>
        <p class="p1 descr">
          Немає місця на 2 дні, але є кімната на 3 дні ціною двох
        </p>
        <p class="see-more a1">Переглянути</p>
      </div>

      <div v-else class="tariff-room-details">
        <div class="price-wrap">
          <h6>725 $</h6>
          <p
            class="p2"
            :class="{ 'previous-price': tariffOptions.previousPrice }"
          >
            555 $
          </p>
          <span class="for-day p2_light">За ніч</span>
        </div>
        <p @click="openAlert()" class="a1 button-more">
          Переглянути загальну суму
        </p>
        <tariff-info-alert :open="openTariffAlert" />

        <div class="icon-details">
          <img src="~/static/icons/icon-moon.svg" alt="icon" />
          <img src="~/static/icons/gift-icon.svg" alt="icon" />
        </div>

        <GoldButton class="registartion-button" :text="'заРЕЗЕРВУВАТИ'" />

        <div class="info-more">
          <p v-if="tariffOptions.tariff_login" class="p2_light">
            <span> Ви отримаєте </span>
            <span class="bonus_value">600 бонусів</span>
            <span @click="openLogin" class="open-account p2_light"
              >увійдіть у свій кабінет</span
            >
          </p>
          <p v-if="tariffOptions.tariff_reg" class="p2_light">
            <span>29₴</span> економія для
            <a href="/">зареєстрованих</a> користувачів.
          </p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import GoldButton from "~/components/GoldButton";
import Button from "~/components/Button";
import TariffInfoAlert from "~/blocks/select_by_room/TariffInfoAlert";
export default {
  name: "TariffRoomDetails",
  data() {
    return {
      openTariffAlert: false,
      isRoomOpen: false,
    };
  },
  components: {
    GoldButton,
    Button,
    TariffInfoAlert,
  },
  props: {
    tariffOptions: {
      type: Object,
      default: () => ({}),
    },
    tariffActive: {
      type: Boolean,
      default: false,
    },
    buttonClose: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    openRoom() {
      this.isRoomOpen = !this.isRoomOpen;

      this.$emit("openRoom" , { roomOpen : this.isRoomOpen } );

      console.log("Open tariff room");
    },
    openAlert() {
      this.openTariffAlert = !this.openTariffAlert;
    },
    openLogin() {
      this.$store.commit("setOpenLogInModal");
    },
  },
};
</script>


<style lang="scss">
.tariff-room-details {
  .registartion-button {
    .gold_button {
      width: 100%;
    }
  }
}
.gold_button {
  &.closeButton {
    p {
      color: #000000;
    }
  }
}
</style>


<style lang="scss" scoped>
@import "../../assets/scss/blocks/hotel_finded_el.scss";
.tariff-room-details {
  width: 386px;
  height: 100%;
  padding-left: 40px;
  display: flex;
  flex-direction: column;

  @include max(lg) {
    padding-left: 33px;
    width: 293px;
  }
  @include max(md) {
    padding-left: 24px;
    width: 254px;
  }
  @include max(sm) {
    width: 100%;
    padding-top: 26px;
    padding-left: 0px;
  }

  .price-wrap {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    .for-price {
      margin-right: 12px;
    }
    h6 {
      opacity: 0.7;
    }
    .p2 {
      display: none;
      &.previous-price {
        display: inline-block;
        font-size: 16px;
        line-height: 110%;
        letter-spacing: -0.02em;
        color: #b91d1d;
        text-decoration: line-through;
        margin-left: 13px;
      }
    }

    .for-day {
      margin-left: 14px;
      opacity: 0.5;
    }
  }
  .button-more {
    width: fit-content;
    margin-bottom: 27px;
    text-transform: uppercase;
    border-bottom: 1px dashed #000000;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    &:hover {
      opacity: 0.7;
    }

    @include max(sm) {
      margin-bottom: 18px;
    }
  }
  .simple-button {
    width: 100%;
  }
  .icon-details {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img {
      width: 32px;
      height: 32px;
      &:not(:last-child) {
        margin-right: 8px;
      }
    }

    @include max(sm) {
      margin-bottom: 32px;
    }
  }
  .registartion-button {
    width: 100%;
    margin-top: auto;
    margin-bottom: 7px;

    @include max(sm) {
      margin-top: 0;
      margin-bottom: 24px;
    }
  }
  .info-more {
    .p2_light {
      span {
        opacity: 0.5;
      }
      .bonus_value {
        font-weight: 600;
      }
      .open-account {
        text-decoration: underline;
        cursor: pointer;
        font-weight: 300;

        @include max(lg) {
          text-decoration: none;
          &:before {
            content: "";
            display: block;
          }
        }

        @include max(sm) {
          border-bottom: 1px solid black;

          &:before {
            content: "";
            display: none;
          }
        }
      }
    }
  }
  &.not_available {
    height: 100%;
    padding-bottom: 23px;
    .title {
      opacity: 0.7;
      margin-bottom: 12px;
    }
    .descr {
      max-width: 246px;
      line-height: 148%;
    }
    .see-more {
      width: fit-content;
      margin-top: auto;
      border-bottom: 1px dashed #000000;
      cursor: pointer;
    }
  }
  &.tariffActive {
    .added-info {
      text-transform: lowercase;
      color: rgba(0, 0, 0, 0.5);

      span {
        font-weight: 600;
      }
      a {
        opacity: 0.5;
        font-weight: 400;
        text-decoration: underline;
        transition: opacity 0.3s ease-in-out;
        &:hover {
          opacity: 0.9;
        }
      }
    }
    .best-price {
      margin-bottom: 9px;
      margin-top: auto;

      @include max(sm) {
        margin-bottom: 32px;
      }
    }
    .gold_button {
      margin-top: unset;
      &.closeButton {
        background-image: unset;
        background-color: transparent;
        border: 1px solid rgba(#000000, 0.1);
        p {
          color: #000000;
        }
      }
    }
  }
  .tariff-info-alert {
    width: calc(100% - 154px);
    position: absolute;
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
