 <template>
  <div v-if="isBookingModalOpen" class="booking-modal">
    <div class="booking-modal-wrapper">
      <div class="header-options">
        <p class="a1 search">
          <img src="~/static/icons/zoom-out.svg" alt="icon" />
          Знайдіть бронювання
        </p>
        <p class="a1 close" @click="$emit('closeModal')">
          Закрити
          <img src="~/static/icons/simple-cross-black.svg" alt="icon" />
        </p>
      </div>
      <div class="booking-wrapper">
        <div class="booking">
          <h3 class="title">Зарезервувати</h3>
          <div class="selects">
            <SelectBlock
              :name="'Місто'"
              :options="optionsCity"
              @change="city = $event.value"
            />
            <SelectBlock
              :name="'Готель'"
              :options="optionsHotel"
              @change="hotel = $event.value"
            />
            <Calendar class="choose-date" :options="optionsCheckin" />
            <SelectParametersRoom class="choose-parameters-room" />
          </div>
          <div class="booking-buttons">
            <input
              class="promocode-input"
              placeholder="Промо-код"
              type="text"
            />
            <GoldButton :text="'заРЕЗЕРВУВАТИ'" />
          </div>
        </div>
        <BlockFooterOptions :data="footerOptins" />
      </div>
    </div>
  </div>
</template>

<script>
import GoldButton from "~/components/GoldButton";
import BlockFooterOptions from "~/blocks/booking-modal/BlockFooterOptions";
import { mapState, mapMutations } from 'vuex'

export default {
  name: "BookingModal",
  props: {
    openModal: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    GoldButton,
  },
  data() {
    return {
      hotel: "",
      city: "",

      optionsCity: [
        {
          title: "Дніпро",
          value: "Дніпро",
        },
        {
          title: "Харків",
          value: "Харків",
        },
        {
          title: "Херсон",
          value: "Херсон",
        },
        {
          title: "Київ",
          value: "Київ",
        },
        {
          title: "Львів",
          value: "Львів",
        },
      ],
      optionsHotel: [
        {
          title: "Premier Palace Hotel",
          value: "Premier Palace Hotel",
        },
        {
          title: "Premier Hotel Rus",
          value: "Premier Hotel Rus",
        },
        {
          title: "Premier Hotel Lybid",
          value: "Premier Hotel Lybid",
        },
        {
          title: "Premier Hotel Shafran",
          value: "Premier Hotel Shafran",
        },
        {
          title: "Premier Hotel Abrin",
          value: "Premier Hotel Abrin",
        },
      ],
      optionsCheckin: {
        name: "Заїзд",
      },
      optionsCheckout: {
        name: "виїзд",
      },
      footerOptins: [
        {
          id: 0,
          title: "Зареєструйтесь зараз отримати знижку 10%",
          srcImg: require("~/static/icons/sale-icon-gold.svg"),
        },
        {
          id: 1,
          title: "Заробіть очки та отримайте безкоштовні ночі",
          srcImg: require("~/static/icons/bed-icon-gold.svg"),
        },
        {
          id: 2,
          title: "Ексклюзивний Пропозиції та переваги",
          srcImg: require("~/static/icons/food-icon-gold.svg"),
        },
        {
          id: 3,
          title: "гарантія найкращої ставки",
          srcImg: require("~/static/icons/guarantee-icon-gold.svg"),
        },
      ],

    };
  },
  computed: {
    ...mapState({
      isBookingModalOpen : state => state.modals.isBookingModalOpen
    })
  },
  watch: {
    isBookingModalOpen() {
      if (this.isBookingModalOpen) {
        document.getElementsByClassName("message-block")[0].style.display =
          "none";
        document.getElementsByClassName("button--gold")[0].style.display =
          "none";

        document.body.style.overflow = "hidden";

        console.log();
      } else if (!this.isBookingModalOpen) {
        document.getElementsByClassName("message-block")[0].style.display =
          "unset";
        // document.getElementsByClassName("button--gold")[0].style.display =
        //   "flex";

        document.body.style.overflow = "";
      }
    }
  },
  methods: {
    ...mapMutations("modals", [
      "closeThanksForBookingModal",
      "openThanksForBookingModal"
    ])
  },
  mounted() {}
};
</script>

<style lang="scss">
.booking-modal {
  .select-wrapper {
    .description {
      opacity: 1 !important;
      font-family: AvenirNextCyrMedium;
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      line-height: 140%;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: #000000;
    }
  }
  .calendar-wrapper {
    .description {
      opacity: 1 !important;
    }
  }
  .booking-buttons {
    .simple-button {
      .a2 {
        color: rgba(#000000, 0.5) !important;
      }
    }
  }
  .select-parameters-room .select-parameters {
    height: 254px !important;
    .select-parameters_wrapper {
      overflow-y: auto;
      overflow-x: hidden;
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.booking-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10001;
  background-color: #000000;
  &.open {
    display: flex;
  }

  .booking-modal-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fbfbfb;
    overflow: auto;
    //background-color: aqua;

    .header-options {
      position: absolute;
      top: 34px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .search {
        position: absolute;
        top: 0px;
        left: 36px;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: opacity 0.3s ease-in-out;

        @include max(lg) {
          left: 27px;
          top: -14px;
        }
        @include max(md) {
        }
        @include max(sm) {
          left: 15px;
          top: -15px;
        }

        &:hover {
          opacity: 0.5;
        }
        &.a1 {
          color: #000000;
        }
        img {
          margin-right: 16px;
        }
      }
      .close {
        position: absolute;
        top: 0px;
        right: 36px;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: opacity 0.3s ease-in-out;

        @include max(lg) {
          right: 27px;
          top: -14px;
        }
        @include max(md) {
        }
        @include max(sm) {
          right: 15px;
          top: -15px;
        }

        &:hover {
          opacity: 0.5;
        }
        &.a1 {
          color: #000000;
        }
        img {
          margin-left: 16px;
        }
      }
    }
    .booking-wrapper {
      width: 100%;
      height: 100%;
      padding: 143px 0 52px;
      display: flex;
      flex-direction: column;
      .booking {
        //background-color: rgb(221, 169, 255);
        width: 460px;
        margin: 0 auto 134px;
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 0;

        &::before {
          content: "";
          position: absolute;
          bottom: 94px;
          left: -123px;
          top: -62px;
          background-repeat: no-repeat;
          background-size: cover;
          width: calc(460px + 56%);
          height: 111%;
          background-image: url("../../static/icons/booking-background.svg");

          @include max(lg) {
            bottom: 94px;
            left: -67px;
            top: -18px;
            width: calc(460px + 30%);
            height: 100%;
          }
          @include max(sm) {
            bottom: 0;
            left: 0;
            top: 4px;
            width: calc(100%);
            height: 63%;
          }
        }

        @include max(lg) {
          margin-bottom: 99px;
        }
        @include max(md) {
          margin-bottom: 0px;
        }
        @include max(sm) {
          width: 85vw;
        }

        .title {
          text-align: center;
          margin-bottom: 56px;
          z-index: 11;
        }
        .selects {
          width: 100%;
          margin-bottom: 72px;
          display: flex;
          flex-wrap: wrap;
          align-items: flex-end;
          justify-content: space-between;

          @include max(lg) {
            margin-bottom: 64px;
          }
          @include max(md) {
          }
          @include max(sm) {
            margin-bottom: 65px;
          }

          .select-wrapper {
            width: calc(50% - 12px);
            margin-bottom: 69px;

            &:nth-child(odd) {
              margin-right: 24px;
            }
          }
          .calendar-wrapper {
            width: 100%;
          }
          .choose-date {
            margin-bottom: 69px;
          }
          .choose-parameters-room {
            width: 100%;
          }
        }
        .booking-buttons {
          margin-bottom: 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .gold_button,
          .promocode-input {
            width: calc(50% - 8px);
          }

          @include max(sm) {
            margin: auto;
            width: max-content;

            .promocode-input {
              width: 100%;
            }
          }

          // > div {
          //   &:not(:last-child) {
          //     margin-right: 15px;
          //   }
          // }
        }
      }
      .footer-options {
        margin-top: auto;
        padding-bottom: 12px;
      }
    }
    .promocode-input {
      z-index: 11;
      height: 100%;
      min-height: 100%;
      width: 100%;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      outline: none;
      text-transform: uppercase;
      text-align: center;

      font-family: "AvenirNextCyrMedium";
      font-style: normal;
      font-weight: 300;
      font-size: 10px;
      line-height: 180%;
      letter-spacing: 0.06em;
      color: #000000;
      opacity: 0.5;

      &::-webkit-input-placeholder {
        color: #000000;
      }

      @include max(sm) {
        width: 76px !important;
        opacity: 1;
        position: relative;
        border: 0px;
        background: none;
        border-bottom: 1px solid rgba($color: #000000, $alpha: 0.2);
      }
    }
  }

  .gold_button {
    //min-width: 220px;
    padding: 0 56px;
    height: 56px;
    // background-image: url("../static/images/gold_for_button.svg");
    // background-repeat: no-repeat;
    // background-size: cover;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "AvenirNextCyrRegular";
    font-style: normal;
    font-weight: 500;
    font-size: 9px;
    line-height: 140%;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: #ffffff;

    border: 1px solid;
    border-image: url("~@/static/images/gold_for_button.svg") 1 round;

    transition-duration: 0.6s;

    @include max(900) {
      border: unset;
      background: url("~@/static/images/gold_for_button.svg");
      background-repeat: no-repeat;
      background-size: cover;
    }

    @include max(sm) {
      position: fixed;

      min-width: calc(100vw - 24px);
      left: 12px;
      bottom: 12px;
    }

    &:before {
      content: "";
      position: absolute;
      left: -1px;
      top: -1px;
      // width: 101%;
      // height: 104%;
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      background: url("~@/static/images/gold_for_button.svg");
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -1;
    }

    &:hover {
      color: #958362;
      @include min(900) {
        background: white;
        background-size: cover;
        transition-duration: 0.5s;

        .a1 {
          background: url("~@/static/images/gold_for_button.svg");
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }

    cursor: pointer;
    @include max(lg) {
      height: 49px;
      padding: 0 32px;
      //min-width: fit-content;
    }
    @include max(md) {
      padding: 0 30px;
    }
    &__link {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .a1 {
      white-space: nowrap;
    }
  }
}
</style>
