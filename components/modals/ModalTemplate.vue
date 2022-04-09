 <template>
  <div
    v-if="openModal"
    class="modal-template"
    :class="{ 'slider-modal': sliderModal, 'map-wrapper': mapWrapper }"
  >
    <div class="booking-modal-wrapper">
      <div class="header-options">
        <p class="a1 close" @click="$emit('closeModal')">
          Закрити
          <img src="~/static/icons/simple-cross-black.svg" alt="icon" />
        </p>
      </div>
      <div
        class="booking-wrapper"
        :class="{
          position_center: positionCenter,
          position_start: positionStart,
        }"
      >
        <div class="booking">
          <div
            v-if="data.title || data.description"
            class="booking-header_wrapper"
          >
            <h3 v-if="data.title" class="title">{{ data.title }}</h3>
            <p
              class="p1"
              v-if="data.description"
              :class="{ 'small-description': smallDescription }"
            >
              {{ data.description }}
            </p>
          </div>

          <slot />

          <div v-if="loginNetwork" class="login-network">
            <p class="p2_light">Або увійдіть через соціальну мережу</p>
            <div class="login-network__icons">
              <a target="_blank" href="https://www.google.com/">
                <img src="~/static/icons/google-icon-wh.svg" alt="icon" />
              </a>
              <a target="_blank" href="https://www.facebook.com/">
                <img src="~/static/icons/facebook-icon-wh.svg" alt="icon"
              /></a>
            </div>
          </div>

          <Checkbox v-if="agreement" :data="agreementCheckbox" />

          <div ref="booking__button" class="booking-button">
            <img
              v-if="captcha"
              class="captcha"
              src="~/static/images/captcha.png"
              alt="icon"
            />

            <div v-if="promocode" class="promo-code">
              <p class="a1">ПРОМО-КОД</p>
            </div>

            <GoldButton v-if="data.button" :text="data.button" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoldButton from "~/components/GoldButton";

export default {
  name: "ModalTemplate",
  props: {
    openModal: {
      type: Boolean,
      default: false,
    },
    captcha: {
      type: Boolean,
      default: false,
    },
    promocode: {
      type: Boolean,
      default: false,
    },
    smallDescription: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: () => ({}),
    },
    positionCenter: {
      type: Boolean,
      default: false,
    },
    agreement: {
      type: Boolean,
      default: false,
    },
    loginNetwork: {
      type: Boolean,
      default: false,
    },
    positionStart: {
      type: Boolean,
      default: false,
    },
    sliderModal: {
      type: Boolean,
      default: false,
    },
    mapWrapper: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    GoldButton,
  },
  data() {
    return {
      agreementCheckbox:
        "Я прочитав та приймаю <a href='/'>Загальні положення та умови</a> Прем'єр-клубу, політику конфіденційності даних",

      benefits: [
        {
          id: 0,
          img: require("~/static/images/benefit1.png"),
          description: "отримуй бонуси та обмінювайся подарунками",
        },
        {
          id: 1,
          img: require("~/static/images/benefit2.png"),
          description: "додаткові 10% на проживання",
        },
        {
          id: 2,
          img: require("~/static/images/benefit3.png"),
          description: "безкоштовний ранній заїзд та пізній виїзд",
        },
        {
          id: 3,
          img: require("~/static/images/benefit4.png"),
          description: "10% знижка на послуги ресторану",
        },
      ],
    };
  },
  methods: {
    btnVis() {

      if (
        this.data.button != undefined &&
        this.promocode == true &&
        this.captcha == false
      ) {
        var bookingBtn = this.$refs.booking__button;
        bookingBtn.getElementsByTagName("DIV")[0].style.width =
          "calc(50% - 8px)";
        bookingBtn.getElementsByTagName("DIV")[1].style.width =
          "calc(50% - 8px)";
        console.log("btn" + " _and_ " + "promocode");
      } else if (
        this.data.button != undefined &&
        this.promocode == false &&
        this.captcha == true
      ) {
        var bookingBtn = this.$refs.booking__button;
        bookingBtn.getElementsByTagName("DIV")[0].style.width = "calc(100%)";

        //console.log('btn' + ' _and_ ' + 'captcha')
      } else if (
        this.data.button != undefined &&
        this.promocode == false &&
        this.captcha == false
      ) {
        var bookingBtn = this.$refs.booking__button;
        bookingBtn.getElementsByTagName("DIV")[0].style.width = "100%";

        if (window.innerWidth < 550) {
          bookingBtn.style.width = "-webkit-fill-available";
        } else {
          bookingBtn.style.width = "256px";
        }

        //console.log('btn')
      }

    },
  },
  computed: {},

  watch: {
    openModal() {
      if (this.openModal == true) {

        document.body.style.overflow = "hidden";

        setTimeout(this.btnVis, 300);

      } else if (this.openModal == false) {
        document.body.style.overflow = "auto";

      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.modal-template {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100000;
  background-color: #000000;

  &.open {
    display: flex;
  }
  &.map-wrapper {
    .booking-modal-wrapper .booking-wrapper {
      padding: 110px 96px;

      .booking {
        height: 100%;
      }

      @include max(lg) {
        padding: 0;
      }
    }
  }

  .booking-modal-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fbfbfb;
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 804px;
      height: 674px;

      background-image: url("../../static/icons/booking-background.svg");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .header-options {
      position: absolute;
      top: 34px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 2;
      .search {
        position: absolute;
        top: 0px;
        left: 36px;
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
        &:hover {
          opacity: 0.7;
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
      //padding: 143px 142px 52px 142px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow-y: auto;
      position: relative;
      z-index: 1;

      // @include max(lg) {
      //   padding: 0;
      //   padding-top: 165px;
      // }
      //  @include max(md) {
      //   padding: 0;
      //   padding-top: 210px;
      // }

      // @include max(sm) {
      //   padding: 0;
      //   padding-top: 72px;
      // }

      &.position_center {
        align-items: center;
        justify-content: center;
      }
      &.position_start {
        align-items: flex-start;
        .booking {
          padding: 0;
          margin: 0;
          width: 100%;
        }
      }
      .booking {
        padding: 180px 0;
        height: auto;
        //height: inherit;
        // width: 32vw;
        overflow: auto;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: auto;

        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none;

        &::-webkit-scrollbar {
          display: none;
        }

        @include max(lg) {
          padding: 120px 0;
        }

        @include max(md) {
          padding: 100px 0;
        }

        @include max(sm) {
          padding: 72px 0;
        }

        .booking-header_wrapper {
          //margin-bottom: 56px;
          text-align: center;
          .title {
            //max-width: 50vw;
          }
          .p1 {
            width: 639px;
            margin-top: 32px;
            margin-bottom: 0;
            //margin-bottom: 56px;

            @include max(lg) {
              width: 525px;
              margin: 32px 0 48px;
              margin-bottom: 0;
            }
            @include max(md) {
              width: 395px;
              margin: 24px 0 48px;
              margin-bottom: 0;
            }
            @include max(sm) {
              width: auto;
              margin: 24px 14px 40px;
              margin-bottom: 0;
            }

            &.small-description {
              width: 34vw;
              margin-left: auto;
              margin-right: auto;
            }
          }

          // @include max(lg) {
          //   margin-bottom: 48px;
          // }
          // @include max(md) {
          //   margin-bottom: 30px;
          // }
          // @include max(sm) {
          //   margin-bottom: 39px;
          // }

          @include max(sm) {
            //width: 240px;
            margin: 0 auto;
          }
        }
        .login-network {
          margin-bottom: 64px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          @include max(lg) {
            margin-bottom: 56px;
          }
          // @include max(md) {
          // }
          @include max(sm) {
            margin-bottom: 40px;
          }

          .p2_light {
            margin-bottom: 20px;
            color: rgba(#000000, 0.8);
          }
          .login-network__icons {
            display: flex;
            align-items: center;
            a {
              cursor: pointer;
              transition: opacity 0.3s ease-in-out;
              &:hover {
                opacity: 0.7;
              }
              &:not(:last-child) {
                margin-right: 20px;
              }
              img {
                width: 40px;
                height: 40px;
              }
            }
          }
        }
        .checkbox-container {
          margin-bottom: 40px;

          @include max(md) {
            width: 380px;
          }
          @include max(sm) {
            margin: 0 24px 40px;
            width: -webkit-fill-available;
          }
        }
        .booking-button {
          width: 460px;

          //margin-top: 75px;
          //margin-bottom: 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          div {
            width: calc(50% - 8px);
          }

          .promo-code {
            padding: 0 20px;
            //width: 223px;
            height: 61px;
            display: flex;
            justify-content: center;
            align-items: center;
            //margin-right: 15px;

            border: 1px solid rgb(226, 226, 226);

            p {
              opacity: 0.5;
              font-size: 10px;
            }
          }
          .gold_button {
            height: 61px;
            @include max(lg) {
              //width: 248px;
              height: 61px;
            }

            @include max(sm) {
              //width: 351px;
              //margin-top: 56px;
              //margin-bottom: 12px;
            }
          }
          .captcha {
            width: 50%;
            height: 58px;
            margin-right: 16px;

            @include max(lg) {
              //width: 254px;
              margin-right: 11px;
            }

            @include max(md) {
            }

            @include max(sm) {
              width: 291px;
              margin: 0 auto;
              margin-bottom: 56px;
            }
          }

          @include max(lg) {
          }

          @include max(md) {
          }

          @include max(sm) {
            width: -webkit-fill-available;
            //width: 85vw;
            margin: auto 8px 8px;
            flex-wrap: wrap;
          }
        }
        .images_block {
          display: flex;
          margin: 134px 134px 0;

          @include max(lg) {
            margin: 99px 86px 0;
          }

          @include max(md) {
            margin: 231px 32px 0;
          }

          @include max(sm) {
            display: none;
          }

          .benefit {
            display: flex;
            margin-right: 8px;
            img {
              height: 25px;
              width: 25px;
              margin-right: 16px;
            }
            p {
              opacity: 0.5;
            }
          }
        }
      }
    }
  }
  &.slider-modal {
    .booking-wrapper {
      padding: 0;
      //padding: 143px 0 52px 0 !important;
      overflow: unset !important ;
      .booking {
        padding: 0;
        margin: 0 !important;
      }
    }
  }
}
</style>
