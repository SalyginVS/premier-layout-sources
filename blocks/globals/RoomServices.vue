<template>
  <div class="room-services-block main-wrapper" :class="{ gradient_dr }">
    <div class="options-room_wrapper" ref="options">
      <h6 class="title">Послуги в номері:</h6>
      <div class="options-wrapper">
        <div
          class="options"
          v-for="(optionRows, index) in optionsSplitted"
          :key="index"
        >
          <p class="p1" v-for="(option, index) in optionRows" :key="index">
            <img src="~/static/icons/check.svg" alt="icon" />
            {{ option }}
          </p>
        </div>
        <p class="a1 show-more" @click="showMore">всі Послуги</p>
      </div>
    </div>
    <div class="options-room_wrapper" ref="optionsFree">
      <h6 class="title">Безкоштовні послуги, які можна замовити:</h6>
      <div class="options-wrapper">
        <div
          class="options"
          v-for="(optionRows, index) in freeOptionsSplitted"
          :key="index"
        >
          <p class="p1" v-for="(option, index) in optionRows" :key="index">
            <img src="~/static/icons/check.svg" alt="icon" />
            {{ option }}
          </p>
        </div>
        <p class="a1 show-more" @click="showMoreFree">
          всі Безкоштовні Послуги
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import UnderlineButton from "~/components/UnderlineButton";
import { globalMixin } from "~/plugins//mixins";

export default {
  mixins: [globalMixin],
  name: "RoomServices",
  props: {
    gradient_dr: {
      type: Boolean,
      default: false
    }
  },
  components: {
    UnderlineButton
  },

  data: () => ({
    screenWidth: 0,

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

    showMoreOptions: false,
    showMoreFreeOptions: false
  }),
  methods: {
    splitArray(options) {
      let rowsInCol = 1;

      if (this.screenWidth > 1200) {
        rowsInCol = options.length / 3;
      } else if (this.screenWidth <= 1200 && this.screenWidth > 650) {
        rowsInCol = options.length / 2;
      } else {
        rowsInCol = options.length;
      }

      const parts = Math.ceil(options.length / rowsInCol);
      const result = [];

      if (this.screenWidth > 600) {
        for (let i = 1; i <= parts; i++) {
          result.push(options.slice((i - 1) * rowsInCol, i * rowsInCol));
        }
      } else {
        result.push(options.slice(0, 8));
      }

      return result;
    },
    showMore() {
      let { options } = this.$refs;
      this.showMoreOptions = !this.showMoreOptions;

      if (process.client) {
        window.scrollTo({
          top: options.offsetTop - 40,
          behavior: "smooth"
        });
      }
    },
    showMoreFree() {
      let { optionsFree } = this.$refs;
      this.showMoreFreeOptions = !this.showMoreFreeOptions;

      if (process.client) {
        window.scrollTo({
          top: optionsFree.offsetTop - 40,
          behavior: "smooth"
        });
      }
    }
  },

  computed: {
    optionsSplitted() {
      if (this.screenWidth >= 650) {
        return this.splitArray(this.options);
      }

      return this.showMoreOptions ? [this.options] : [this.options.slice(0, 8)];
    },

    freeOptionsSplitted() {
      if (this.screenWidth >= 650) {
        return this.splitArray(this.freeOptions);
      }

      return this.showMoreFreeOptions
        ? [this.freeOptions]
        : [this.freeOptions.slice(0, 8)];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.room-services-block {
  width: 100%;
  //padding: 100px 160px 150px 160px;
  display: flex;
  flex-direction: column;
  //background-color: #f0edea;
  // @include max(lg) {
  //   padding: 124px 134px;
  // }
  // @include max(768){
  //   padding: 60px 48px;
  // }
  // @include max(375){
  //   padding: 60px 18px;
  // }
  &.gradient_dr {
    background: linear-gradient(
      180deg,
      rgba(240, 237, 234, 0) 0%,
      #f0edea 100%
    );
  }
  .main-wrapper {
    width: 100%;
  }
  .header {
    max-width: 53vw;
    margin-bottom: 65px;
    h6 {
      margin-bottom: 16px;
    }
  }
  .options-room_wrapper {
    display: flex;
    flex-direction: column;
    &:not(:last-child) {
      margin-bottom: 70px;
      @include max(lg) {
        margin-bottom: 64px;
      }
    }
    .title {
      margin-bottom: 40px;
      @include max(lg) {
        margin-bottom: 32px;
      }
      @include max(sm) {
        margin-bottom: 24px;
      }
    }

    .options-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      margin-bottom: -22px;
      @include max(lg) {
        position: relative;
        justify-content: space-between;
      }
      @include max(sm) {
        flex-direction: column;
      }
      &::before {
        @include max(lg) {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: inherit;
          background-color: rgba(#000000, 0.05);
        }
        @include max(sm) {
          display: none;
        }
      }
      .show-more {
        display: none;

        align-items: center;
        cursor: pointer;
        width: fit-content;
        position: relative;
        @include max(sm) {
          display: flex;
        }
        &:after {
          content: "";
          position: absolute;
          background: url("../../static/images/dark_gold.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 1px;
        }
      }
      .options {
        width: calc(100% / 3);
        display: flex;
        flex-direction: column;
        // @include max(lg) {
        //   // width: calc(100% / 2);
        //   width: fit-content;
        // }
        @include max(sm) {
          width: 100%;
        }
        &:not(div:last-of-type) {
          padding-right: 40px;
          margin-right: 50px;
          border-right: 1px solid rgba(#101010, 0.05);
          @include max(lg) {
            padding-right: 0;
            margin-right: 0;
            border-right: 0px;
          }
        }
        .p1 {
          margin-bottom: 22px;
          display: flex;
          align-items: flex-start;
          color: rgba(#000000, 0.5);
          line-height: 132%;
          letter-spacing: 0.04em;
          @include max(md) {
            margin-bottom: 24px;
          }
          @include max(sm) {
            font-size: 14px;
            &:last-child {
              margin-bottom: 32px;
            }
          }
          img {
            margin-right: 14px;
          }
        }
      }
    }
  }
}
</style>
