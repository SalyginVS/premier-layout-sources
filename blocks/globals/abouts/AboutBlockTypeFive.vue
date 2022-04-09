// Block with information about one room

<template>
  <div id="about_room" class="main-wrapper">
    <div class="left_image_wrapper">
      <div class="foreground_gradient"></div>
      <img :src="description.image" alt />
      <div v-if="line" class="line-simple"></div>
    </div>
    <div class="descripton_wrapper">
      <h4 v-html="description.title"></h4>

      <div class="second_description_wrapper">
        <div class="description_block">
          <div class="benefits_wrapper">
            <div class="benefits_row">
              <p class="p1">Кімнат: <span>1</span></p>
              <p class="p1">До <span>4</span> осіб</p>
              <p class="p1">Площа: <span>20 м2</span></p>
              <p class="p1">Ванная: <span>4,1 м2</span></p>
            </div>
            <div class="benefits_row">
              <p class="p1 bed-block">
                <img src="~/static/icons/one-bed-icon.svg" alt="icon" />
                <img src="~/static/icons/one-bed-icon.svg" alt="icon" />
                два Односпальних ліжка
              </p>
              <p class="p1">Ванная: <span>1</span></p>
            </div>
            <div class="benefits_row">
              <p class="p1">
                Вид из номера:
                <span>вид на улицу или на внутренний двор или на бассейн</span>
              </p>
            </div>
          </div>
          <div class="room-details_wrapper">
            <div class="price_wrapper">
              <p class="p3">від</p>
              <h6>5550 ₴</h6>
              <p class="p3">за ніч</p>
            </div>
            <p class="p1 sale_info">
              від
              <span>29₴</span> економія зареєстрованих користувачів.
            </p>
            <div class="room-details__selects">
              <Calendar
                class="choose-date"
                :oneInput="true"
                :labelCenter="true"
              />
              <SelectBlock
                :name="'Kількість гостей'"
                :options="optionsNumberGuests"
                @change="numberGuests = $event.value"
              />
            </div>
            <div class="room-details__button">
              <input
                class="promocode-input"
                placeholder="Промо-код"
                type="text"
              />
              <!-- <Button :text="'промо-код'" /> -->
              <GoldButton :text="'Зарезервувати'" />
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
      </div>
    </div>
  </div>
</template>

<script>
import GoldButton from "~/components/GoldButton";
import Button from "~/components/Button";
import ContactsBlock from "~/blocks/globals/ContactsBlock";

export default {
  name: "AboutBlock",
  components: {
    GoldButton,
    Button,
    ContactsBlock,
  },
  props: {
    description: {
      type: Object,
      default: () => ({}),
    },
    line: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      numberGuests: "",
      optionsNumberGuests: [
        {
          title: "1-3",
          value: "1-3",
        },
        {
          title: "3-6",
          value: "3-6",
        },
        {
          title: "6-9",
          value: "6-9",
        },
        {
          title: "9-12",
          value: "9-12",
        },
        {
          title: "12-15",
          value: "12-15",
        },
      ],
    };
  },
  methods: {
    openLogin() {
      this.$store.commit("setOpenLogInModal");
    },
  },
};
</script>
<style lang="scss">
@import "../../../assets/scss/utils.scss";

#about_room {
  .room-details__selects {
    width: 100%;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .calendar-wrapper {
      width: calc(50% - 12px);
      margin-right: 24px;
      @include max(md) {
        margin-right: 22px;
      }
      .selected-date {
        width: 100%;
      }
      .description.chose-date {
        white-space: nowrap;
        overflow: hidden;
        width: calc(100% - 40px);
        text-overflow: ellipsis;
      }
      .description {
        opacity: 1;
      }
    }
    .select-wrapper {
      width: calc(50% - 12px);
      height: 34px;
      .description {
        opacity: 1;
      }
    }
  }
  .room-details__button {
    @include max(md) {
      display: flex;
      flex-direction: column;
    }

    .simple-button {
      @include max(md) {
        width: 100%;
      }
      .a2 {
        opacity: 0.5;
        @include max(sm) {
          opacity: 1;
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";
#about_room {
  @include mt-140;
  display: flex;
  width: 100%;
  @include max(sm) {
    margin-top: 0;
    flex-direction: column;
  }
}
.left_image_wrapper {
  width: 46.8vw;
  height: 885px;
  @include mt-184;
  position: relative;
  @include max(lg) {
    height: 556px;
    max-width: 422px;
  }
  @include max(md) {
    height: 475px;
    max-width: 325px;
    margin-top: 105px;
  }
  @include max(sm) {
    max-width: unset;
    width: calc(100% - 18px);
    margin-bottom: 32px;
    margin-top: 80px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 1;
  }
  .line-simple {
    top: unset;
    left: unset;
    bottom: 90px;
    right: -165px;
    @include max(lg) {
      display: none;
    }
  }
}

.foreground_gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  background: linear-gradient(
    217.78deg,
    rgba(255, 255, 255, 0.43) 0%,
    rgba(255, 255, 255, 0) 19.76%
  );
}

.descripton_wrapper {
  position: relative;
  z-index: 10;
  flex-grow: 1;
  @include max(sm) {
    padding: 0 18px;
  }
}

h4 {
  position: relative;
  width: 688px;
  margin-left: -88px;
  @include max(lg) {
    max-width: 548px;
  }
  @include max(md) {
    max-width: 492px;
  }
  @include max(sm) {
    max-width: unset;
    width: calc(100% - 16px);
    margin-left: 0;
  }
}

.second_description_wrapper {
  padding-left: 146px;
  @include max(lg) {
    padding-left: 66px;
  }
  @include max(md) {
    padding-left: 38px;
  }
  @include max(sm) {
    padding-left: 0px;
  }
  .description_block {
    width: 100%;
    padding-bottom: 14px;
    margin-top: 80px;
    @include max(lg) {
      margin-top: 48px;
    }
    @include max(md) {
      margin-top: 40px;
    }
    @include max(sm) {
      margin-top: 32px;
    }
    h4 {
      font-size: 32px;
      line-height: 130%;
    }
    //   padding: 32px;
    h5 {
      width: 80%;
    }
  }
  .benefits_wrapper {
    margin-bottom: 80px;
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    @include max(lg) {
      padding-left: 32px;
      margin-bottom: 40px;
    }

    @include max(sm) {
      padding-left: 0;
      margin-bottom: 48px;
    }
    .benefits_row {
      display: flex;
      align-items: center;
      @include max(md) {
        flex-wrap: wrap;
        max-width: 280px;
      }
      &:last-child {
        max-width: 50%;
        @include max(md) {
          max-width: 280px;
        }
      }
      > .p1 {
        margin-bottom: 16px;
        color: rgba(0, 0, 0, 0.5);
        @include max(lg) {
          margin-bottom: 8px;
        }
        @include max(sm) {
          margin-bottom: 12px;
        }
        &:not(:last-child) {
          margin-right: 26px;
          @include max(sm) {
            margin-right: 24px;
          }
        }

        span {
          color: #000000;
        }
      }
      .bed-block {
        display: flex;
        align-items: center;
        img {
          width: 14px;
          height: 13px;
          &:not(:last-child) {
            margin-right: 3px;
          }
          &:last-child {
            margin-right: 10px;
          }
        }
      }
    }
  }
  .room-details_wrapper {
    padding: 40px 168px 40px 40px;
    background-color: rgba(#f0edea, 0.5);
    @include max(lg) {
      padding: 32px 133px 32px 32px;
    }
    @include max(md) {
      padding: 32px 48px 32px 32px;
      // width: 405px;
      width: 100%;
    }
    @include max(sm) {
      padding: 0;
      background-color: unset;
      width: 100%;
    }
    .price_wrapper {
      display: flex;
      margin-bottom: 8px;
      @include max(lg) {
        margin-bottom: 10px;
      }
      @include max(md) {
        margin-bottom: 9px;
      }
      p {
        opacity: 0.5;
        margin-top: -3px;
      }
      h6 {
        opacity: 0.7;
        line-height: 5px;
        margin: 0 12px;
      }
    }
    .sale_info {
      font-size: 12px;
      opacity: 0.5;
      margin-bottom: 40px;
      @include max(lg) {
        margin-bottom: 34px;
      }
      @include max(md) {
        margin-bottom: 40px;
      }
    }
    .room-details__button {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .promocode-input {
        margin-right: 16px;
        width: 100%;
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 140%;
        letter-spacing: 0.24em;
        text-transform: uppercase;
        color: #000000;
        text-align: center;
        background: transparent;
        cursor: pointer;
        border: 1px solid rgba(#000000, 0.1);
        font-family: AvenirNextCyrMedium;
        font-style: normal;
        font-weight: 450;
        font-size: 10px;
        @include max(lg) {
          height: 49px;
          padding: 0 32px;
          //min-width: fit-content;
        }
        @include max(md) {
          padding: 0 30px;
          margin-right: 0;
          margin-bottom: 8px;
        }
        &.white-button {
          background: #ffffff;
          border: 1px solid #ffffff;
        }
        &::placeholder {
          line-height: 140%;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          font-family: AvenirNextCyrMedium;
          font-style: normal;
          font-weight: 450;
          font-size: 10px;
        }
      }
      > div {
        @include max(md) {
          width: 100%;
        }
        &:not(:last-child) {
          margin-right: 16px;
          @include max(md) {
            margin-right: 0;
            margin-bottom: 8px;
          }
        }
      }
    }
    .bonus_info {
      margin-top: 24px;
      opacity: 0.5;
      font-size: 12px;
      @include max(lg) {
        margin-top: 16px;
      }
      @include max(sm) {
        margin-top: 24px;
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
      }
    }
  }
}
</style>