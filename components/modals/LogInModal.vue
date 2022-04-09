 <template>
  <div v-if="openModal" class="log-in-modal">
    <div class="log-in-modal_wrapper">
      <div class="header-options">
        <p class="a1 close" @click="$emit('closeModal')">
          Закрити
          <img src="~/static/icons/simple-cross-black.svg" alt="icon" />
        </p>
      </div>
      <div class="log-in_wrapper">
        <div class="log-in__form">
          <div class="log-in__form_wrapper">
            <h4 class="title">Увійти в Premier Club</h4>
            <div class="log-in__form-choose-variants">
              <p class="a2">Premier Club</p>
              <div class="horizontal-line"></div>
              <p class="a2">Premier corporate Club</p>
            </div>
            <div class="log-in__form-block">
              <Input
                v-for="option in optionsInput"
                :key="option.id"
                :option="option"
                :placeholderUpperCase="true"
              />
            </div>
            <div class="log-in__form-options">
              <Checkbox :data="`Запам'ятай мене`" />
              <nuxt-link class="p2_light link-option" to="/"
                >Забули пароль?</nuxt-link
              >
            </div>
            <div class="log-in__buttons-block">
              <GoldButton class="button" :text="'авторизуватись'" />
              <Button class="button" :text="'зареєструватися'" />
            </div>
            <div class="login-network">
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
            <p class="log-in__footer-info p1">
              Ви бронюєте готелі та плануєте заходи для своєї компанії?
              Дізнайтеся про
              <nuxt-link to="/">Premier Corporate Club</nuxt-link>
            </p>
          </div>
        </div>
        <div class="log-in__right">
          <ModalMessage v-if="!registration" @noMessages="closeMessage" />
          <ModalAddRegistration v-if="registration" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoldButton from "~/components/GoldButton";
import Button from "~/components/Button";
import ModalMessage from "~/blocks/modalAddInfo/ModalMessage";
import ModalAddRegistration from "~/blocks/modalAddInfo/ModalAddRegistration";

export default {
  name: "LogInModal",
  props: {
    openModal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      optionsInput: [
        {
          id: 0,
          type: "email",
          placeholder: "email",
        },
        {
          id: 1,
          type: "password",
          placeholder: "пароль",
        },
      ],
      registration: false,
    };
  },
  components: {
    GoldButton,
    Button,
    ModalMessage,
    ModalAddRegistration,
  },
  methods: {
    closeMessage() {
      this.registration = !this.registration;
    },
  },
};
</script>

<style lang="scss">
.log-in-modal {
  .log-in__buttons-block {
    .button {
      .a2 {
        color: rgba(#000000, 0.5);
      }
    }
  }
  .log-in__footer-info {
    text-align: center;
    margin-top: auto;
    margin-bottom: 40px;
    &.p1 {
      color: rgba(#000000, 0.5);
    }
    a {
      font-family: AvenirNextCyrLight;
      font-weight: 300;
      font-size: 14px;
      line-height: 196%;
      letter-spacing: 0.04em;
      color: rgba(#000000, 0.5);
      text-decoration: underline;
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.log-in-modal {
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
  .log-in-modal_wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fbfbfb;
    overflow: hidden;
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
  .log-in_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    // flex-direction: column;
    overflow-y: auto;
    position: relative;
    z-index: 1;

    .log-in__form {
      width: 50%;
      height: max-content;
      //   padding: 151px 20px 40px 20px;
      padding: 100px 20px 40px;
      display: flex;
      justify-content: center;
      overflow-y: auto;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      Î &::-webkit-scrollbar {
        display: none;
      }

      @include max(lg) {
      }
      @include max(md) {
        width: 100%;
      }
      @include max(sm) {

      }

      .log-in__form_wrapper {
        max-width: 460px;
        display: flex;
        flex-direction: column;
        align-items: center;
        @include max(lg) {
          max-width: 393px;
        }
        @include max(md) {
          max-width: 460px;
        }
        @include max(sm) {
          width: -webkit-fill-available;
          max-width: 335px;
        }

        .title {
          margin-bottom: 32px;

          @include max(lg) {
            margin-bottom: 30px;
          }
          @include max(md) {
            margin-bottom: 32px;
          }
          @include max(sm) {
            margin-bottom: 24px;
          }
        }
        .log-in__form-choose-variants {
          margin-bottom: 60px;
          display: flex;
          align-items: center;

          @include max(lg) {
            margin-bottom: 52px;
          }
          @include max(md) {
          }
          @include max(sm) {
            margin-bottom: 44px;
          }
          .a2 {
            text-transform: uppercase;
            color: rgba(#000000, 0.6);
            letter-spacing: 0.24em;
            cursor: pointer;
            // &:not(:last-child) {
            //   &::after {
            //     content: "";
            //     width: 32px;
            //     height: 1px;
            //     margin: 0 32px;
            //     display: inline-block;
            //     background-color: rgba(#000000, 0.3);
            //   }
            // }
          }
          .horizontal-line {
            width: 32px;
            height: 1px;
            margin: 0 32px;
            display: inline-block;
            background-color: rgba(#000000, 0.3);

            @include max(lg) {
              width: 24px;
              margin: 0 16px;
            }
            @include max(md) {
            }
            @include max(sm) {
              margin: 0 10px;
            }

            @include max(400) {
              width: 14px;
              margin: 0 8px;
            }
          }
        }
        .log-in__form-block {
          margin-bottom: 16px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;

          @include max(lg) {
            margin-bottom: 24px;
          }
          @include max(md) {
            margin-bottom: 32px;
          }
          @include max(sm) {
            flex-wrap: wrap;
          }

          .input-block {
            width: calc((100% - 24px) / 2);

            @include max(sm) {
              width: 100%;

              &:nth-child(1) {
                margin-bottom: 24px;
              }
            }
          }
        }
        .log-in__form-options {
          width: 100%;
          margin-bottom: 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          @include max(lg) {
          }
          @include max(md) {
            margin-bottom: 72px;
          }
          @include max(sm) {
            margin-bottom: 64px;
          }

          .link-option {
            color: rgba(#000000, 0.8);
            text-decoration: underline;
          }
        }
        .log-in__buttons-block {
          width: 100%;
          margin-bottom: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          @include max(lg) {
            margin-bottom: 72px;
          }
          @include max(sm) {
            margin-bottom: 64px;
          }

          .gold_button,
          .button {
            width: calc(50% - 8px);

            @include max(lg) {
              &:nth-child(1) {
                order: 1;
              }
              &:nth-child(2) {
                order: 0;
              }
            }

            @include max(sm) {
              width: calc(50% - 4px);
            }
          }

          // .button {
          //   width: 50%;
          //   // &:not(:last-child) {
          //   //   margin-right: 15px;
          //   // }
          // }
        }
        .login-network {
          margin-bottom: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
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
          .log-in__footer-info {
            max-width: 72vw;
          }
        }
      }
    }
    .log-in__right {
      height: 100%;
      width: 50%;
      padding: 140px 20px 40px;
      background-color: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;

      @include max(md) {
        display: none;
      }

      .modal-message {
        align-items: center;
      }
    }
  }
}
</style>
