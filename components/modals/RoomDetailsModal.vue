<template>
  <div class="room-details-modal" :class="{ open: openModal }">
    <div class="wrapper">
      <p class="a1 close" @click="$emit('closeModal')">
        Закрити
        <img src="~/static/icons/cross.svg" alt="icon" />
      </p>

      <div class="info">
        <div class="info-wrapper">
          <RoomsSlider :slides="slides" />
          <div class="description_block">
            <h4>Номер Прем'єр на Представницькому поверсі</h4>
            <div class="benefits_wrapper">
              <p class="a1">Кімнат: <span>1</span></p>
              <p class="a1">До <span>4</span> осіб</p>
              <p class="a1">Площа: <span>20 м2</span></p>
              <p class="a1 bed-block">
                <img src="~/static/icons/one-bed-icon.svg" alt="icon" />
                <img src="~/static/icons/one-bed-icon.svg" alt="icon" />
                два Односпальних ліжка
              </p>
            </div>
            <div class="price_wrapper">
              <p class="p3">від</p>
              <h6>&nbsp;5550 ₴</h6>
              <p v-if="isPriceLabel" class="p3">за ніч</p>
            </div>
            <p class="p1 sale_info">
              від
              <span>29₴</span> економія зареєстрованих користувачів.
            </p>
            <div class="room-details__selects">
              <Calendar class="choose-date" :oneInput="true" />
              <SelectBlock
                :name="'Kількість гостей'"
                :options="optionsNumberGuests"
                :is-description-block="true"
                @change="numberGuests = $event.value"
              />
            </div>

            <div class="room-details__wrapper">
              <input
                class="promocode-input"
                placeholder="Промо-код"
                type="text"
                v-if="roomDetailsModalActive || isPromoButton"
              />
              <!-- <Button
                v-if="roomDetailsModalActive || isPromoButton"
                text="ПРОМО-КОД"
              /> -->
              <GoldButton text="перевірити ціни" />

              <!-- <p class="a1">перевірити ціни</p> -->
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
      <div class="options-block">
        <div class="header">
          <h6>Про номер:</h6>
          <p class="p1">
            Изысканно простой двухкомнатный люкс в строгом исполнении. Обои
            золотистого цвета, стильные гардины, удобная и оригинальная мягкая
            мебель. Назван именем великого постояльца Отеля, известнейшего певца
            Александра Вертинского, посетившего Отель в 1955 г.
          </p>
        </div>
        <div class="room-services">
          <RoomServices />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoldButton from "~/components/GoldButton";
import Button from "~/components/Button";
import RoomsSlider from "~/blocks/globals/sliders/RoomsSlider";
import RoomServices from "~/blocks/globals/RoomServices";
export default {
  name: "RoomDetailsModal",
  props: {
    openModal: {
      type: Boolean,
      default: false
    },
    roomDetailsModalActive: {
      type: Boolean,
      default: false
    }
  },
  components: {
    GoldButton,
    RoomServices,
    Button,
    RoomsSlider
  },
  mounted() {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 3000);
  },
  data: () => ({
    numberGuests: "",
    optionsNumberGuests: [
      {
        title: "1-3",
        value: "1-3"
      },
      {
        title: "3-6",
        value: "3-6"
      },
      {
        title: "6-9",
        value: "6-9"
      },
      {
        title: "9-12",
        value: "9-12"
      },
      {
        title: "12-15",
        value: "12-15"
      }
    ],
    slides: [
      {
        id: 0,
        img: require("~/static/images/room.jpg")
      },
      {
        id: 1,
        img: require("~/static/images/room.jpg")
      },
      {
        id: 2,
        img: require("~/static/images/room.jpg")
      }
    ],
    options: [
      "Кабельні канали",
      "Платні ТБ-канали ",
      "Телефон у ванній кімнаті ",
      "Телефон у ванній кімнаті ",
      "Дзеркало для макіяжу",
      "Фен ",
      "Ванна",
      "Килимове покриття",
      "Сейф що вміщує ноутбук",
      "Доступні суміжні номери ",
      "Сейф",
      "Звукоізоляція",
      "Безкоштовний Wi-Fi в номері",
      "Дротовий Інтернет",
      "Підлога з підігрівом",
      "Ванна кімната",
      "Душ",
      "Туалет",
      "Система клімат контролю",
      "Робочий стіл",
      "Електричний чайник",
      "Мінібар",
      "Щітка для взуття",
      "Будильник",
      "Плазмовий телевізор",
      "Біде",
      "Туалетні приналежності",
      "Ваги",
      "Халат",
      "Опалення",
      "Телефон",
      "Індивідуально регульоване опалення",
      "Проживання з тваринами дозволено",
      'Послуга "дзвінок/будильник"',
      "Гардероб / шафа",
      "Капці"
    ],
    freeOptions: [
      "Кабельні канали",

      "Платні ТБ-канали",
      "Телефон у ванній кімнаті",
      "Телефон у ванній кімнаті",
      "Дзеркало для макіяжу",
      "Безкоштовний Wi-Fi в номері",
      "Дротовий Інтернет",
      "Підлога з підігрівом",
      "Ванна кімната",
      "Душ",
      "Плазмовий телевізор",
      "Біде",
      "Туалетні приналежності",
      "Ваги",
      "Халат"
    ],
    windowWidth: 5000
  }),
  watch: {
    openModal() {
      this.openModal
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto");
    }
  },
  computed: {
    isPriceLabel() {
      return this.windowWidth < 1440 ? true : false;
    },
    isPromoButton() {
      return this.windowWidth < 1024 ? true : false;
    }
  },
  methods: {
    splitArray(options) {
      const rowsInCol = options.length / 3;
      const parts = Math.ceil(options.length / rowsInCol);
      const result = [];

      for (let i = 1; i <= parts; i++) {
        result.push(options.slice((i - 1) * rowsInCol, i * rowsInCol));
      }

      return result;
    },
    openLogin() {
      this.$store.commit("setOpenLogInModal");
    },
    resizeWindow() {
      this.windowWidth = window.innerWidth;
    }
  },
  mounted() {
    window.addEventListener("resize", this.resizeWindow);
    this.windowWidth = window.innerWidth;
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resizeWindow);
  }
};
</script>
<style lang="scss">
.room-details-modal {
  .room-details__selects {
    .calendar-wrapper {
      .selected-date {
        width: 100%;
        .description {
          opacity: 1;
        }
      }
      .description.chose-date {
        white-space: nowrap;
        overflow: hidden;
        width: calc(100% - 40px);
        text-overflow: ellipsis;
      }
    }
    .select-wrapper {
      .description {
        opacity: 1;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.room-details-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100vw - 18px);
  height: calc(100vh - 18px);
  display: none;
  z-index: 10001;
  overflow: auto;
  background-color: #fbfbfb;
  background-image: linear-gradient(
    180deg,
    rgba(240, 237, 234, 0) 0%,
    #f0edea 100%
  );
  @include max(1439) {
    width: 100vw;
    height: 100vh;
  }
  @include max(767) {
    left: 0;
    top: 0;
    transform: translate(0, 0);
    width: 100vw;
    height: 100vh;
    z-index: 12000;
  }
  &.open {
    display: flex;
  }
  .close {
    position: absolute;
    top: 40px;
    right: 42px;
    display: flex;
    align-items: center;
    cursor: pointer;

    transition: opacity 0.3s ease-in-out;
    &:hover {
      opacity: 0.7;
    }
    &.a1 {
      color: #000000;
    }
    img {
      margin-left: 16px;
    }
    @include max(767) {
      right: 18px;
    }
  }
  .wrapper {
    /* Добавил max-width и margin, чтобы на больших экранах модальное окно не было сильно растянуто */
    //height: 100%;
    max-width: 1428px;
    width: 100%;
    margin: 0 auto;
    // width: 100%;
    display: flex;
    flex-direction: column;
    //overflow-y: auto;
    //overflow-x: hidden;
    position: relative;

    .info {
      width: 100%;
      height: fit-content;
      padding: 134px 136px 0px;
      display: flex;
      // @include min(768) {
      //   padding: 119px 56px 8px 56px;
      // }
      // @include max(767){
      //   padding: 81px 18px 74px 18px;
      // }
      @include max(1439) {
        padding: 120px 56px 0;
      }
      @include max(1023) {
        padding: 112px 48px 0;
      }
      @include max(767) {
        padding: 80px 18px 0;
      }
      .info-wrapper {
        //max-height: 520px;
        height: 520px;
        display: flex;
        align-items: center;
        width: 100%;
        @include max(1439) {
          height: auto;
          min-height: 458px;
        }
        @include max(1023) {
          min-height: 445px;
        }
        @include max(767) {
          flex-flow: row wrap;
          justify-content: center;
          width: 100%;
          min-height: unset;
          //height: auto;
        }
        .swiper-container {
          height: 100%;
          flex: 1 1 calc(678 / 1440 * 100vw);
          // width: 48vw !important;
          // min-width: 58.4% !important;
          // @media (min-width: 1920px) {
          //   /* Выровнял изображение с текстом на одном уровне. При разрешении 1920 px изображение прыгало вверх */
          //   max-width: 678px;
          //   height: 518px;
          // }
          // @include max(1132) {
          //   min-width: 46.4% !important;
          //   height: 457px;
          // }
          // @include min(768) {
          //   min-width: 44% !important;
          // }
          // @include max(767) {
          //   min-width: 100% !important;
          //   height: 292px;
          // }
          // @include max(446){
          //   min-width:70% !important;
          // }
          // @include max(375){
          //   min-width:100% !important;
          // }
          @include max(1439) {
            flex: 1 1 calc(466 / 1024 * 100vw);
          }
          @include max(1023) {
            flex: 1 1 calc(327 / 768 * 100vw);
          }
          @include max(767) {
            flex: 1 1 100%;
            height: calc(292 / 375 * 100vw);
          }
        }
        .description_block {
          width: 100%;
          margin-left: 108px;
          max-width: 358px;
          //padding: 38px 0 14px 0;
          @include max(1439) {
            margin-left: 78px;
            max-width: 368px;
          }
          @include max(1023) {
            margin-left: 20px;
            max-width: 326px;
          }
          // @include min(768) {
          //   margin-left: 20px;
          // }
          @include max(767) {
            margin-left: 0;
            padding-top: 24px;
            padding-bottom: 0;
            max-width: unset;
          }
          h4 {
            font-size: 32px;
            line-height: 130%;
            @include max(1024) {
              font-size: 28px;
            }
            @include max(768) {
              font-size: 24px;
            }
          }
          //   padding: 32px;
          h5 {
            width: 80%;
          }
        }
        .benefits_wrapper {
          //margin: 28px 0 60px;
          margin: 40px 0 48px;
          display: flex;
          flex-wrap: wrap;
          @include max(1024) {
            margin: 24px 0 50px;
          }
          @include max(767) {
            margin-top: 18px;
            margin-bottom: 48px;
          }
          > .a1 {
            margin-right: 20px;
            margin-bottom: 14px;
            color: rgba(0, 0, 0, 0.5);
            span {
              color: #000000;
            }
            @include max(767) {
              margin-bottom: 12px;
            }
          }
          .bed-block {
            display: flex;
            align-items: center;
            &:last-child {
              margin-bottom: 0;
            }
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

        .price_wrapper {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          @include max(1439) {
            margin-bottom: 11px;
            align-items: flex-end;
          }
          @include max(1439) {
            margin-bottom: 8px;
            align-items: center;
          }
          p {
            opacity: 0.5;
          }
          h6 {
            opacity: 0.7;
            //line-height: 5px;
            line-height: 110%;
            font-size: 24px;
            & + p {
              display: inline-block;
              margin-left: 12px;
              @include max(1024) {
                margin-left: 8px;
              }
            }
          }
        }
        .sale_info {
          font-size: 12px;
          opacity: 0.5;
          margin-bottom: 32px;
          line-height: 200%;
          @include max(1439) {
            margin-bottom: 24px;
          }
          @include max(1023) {
            margin-bottom: 32px;
          }
        }
        // .gold_wide_button {
        //   width: 100%;
        //   margin: auto;
        //   background-image: url("../../static/images/gold_for_button.svg");
        //   background-position: center;
        //   cursor: pointer;
        //   background-repeat: no-repeat;
        //   background-size: cover;
        //   height: 54px;
        //   display: flex;
        //   justify-content: center;
        //   align-items: center;
        //   p {
        //     color: #ffffff;
        //   }
        // }
        .bonus_info {
          margin-top: 24px;
          opacity: 0.5;
          font-size: 12px;
          line-height: 200%;
          @include max(1439) {
            margin-top: 17px;
          }
          @include max(1023) {
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
    .options-block {
      width: 100%;
      padding: 100px 160px 106px 160px;
      display: flex;
      flex-direction: column;
      // background: linear-gradient(
      //   180deg,
      //   rgba(240, 237, 234, 0) 0%,
      //   #f0edea 100%
      // );
      @include max(1439) {
        padding: 90px 134px 72px;
      }
      @include max(1023) {
        padding: 88px 48px 64px;
      }
      @include max(767) {
        padding: 74px 18px 95px;
      }
      .header {
        max-width: 53vw;
        margin-bottom: 65px;
        @include max(768) {
          display: none;
        }
        h6 {
          margin-bottom: 16px;
        }
      }
      .options-room_wrapper {
        display: flex;
        flex-direction: column;
        &:not(:last-child) {
          margin-bottom: 70px;
        }
        .title {
          margin-bottom: 40px;
        }

        .options-wrapper {
          width: 100%;
          display: flex;
          .options {
            width: calc(100% / 3);
            display: flex;
            flex-direction: column;
            &:not(:last-child) {
              padding-right: 40px;
              margin-right: 50px;
              border-right: 1px solid rgba(#101010, 0.05);
            }
            .p1 {
              margin-bottom: 22px;
              display: flex;
              align-items: flex-start;
              color: rgba(#000000, 0.5);
              line-height: 132%;
              letter-spacing: 0.04em;
              img {
                margin-right: 14px;
              }
            }
          }
        }
      }
    }
  }
  .room-details__selects {
    width: 100%;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @include max(1023) {
      margin-bottom: 24px;
    }
    .calendar-wrapper {
      width: calc(50% - 12px);
      margin-right: 24px;
      .choose-date {
        @include max(767) {
          display: none;
        }
      }
    }
    .select-wrapper {
      width: calc(50% - 12px);
      height: 34px;
      @include max(767) {
        height: auto;
      }
    }
  }
}

.room-details__wrapper {
  width: 100%;
}
.gold_button {
  width: 100%;
  margin-top: 10px;
}
.simple-button {
  display: none;
  @include max(1023) {
    display: block;
    width: 100%;
  }
}

.promocode-input {
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
</style>
