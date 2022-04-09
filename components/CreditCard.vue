<template>
  <div class="credit-card">
    <div class="card">
      <div class="card-title">
        <p class="p2">
          Номер карты - это 14-19 цифр на лицевой стороне вашей банковской карты
        </p>
      </div>
      <div class="card-number">
        <input
          v-model="cardNumber"
          type="text"
          class="p1"
          placeholder="Card number"
          name="cardNumber"
        />
      </div>
      <div class="card-date">
        <p class="a2">Expired date</p>
        <div class="wrapper">
          <div class="data">
            <input
              type="text"
              class="p1"
              placeholder="ММ"
              v-model="month"
              maxlength="2"
            />
            <span class="p2_light">/</span>
            <input
              type="text"
              class="p1"
              placeholder="ГГ"
              v-model="year"
              maxlength="2"
            />
          </div>
          <div class="card-type">
            <img src="~/static/icons/mastercard.svg" alt="icon" />
            <img src="~/static/icons/visa.svg" alt="icon" />
          </div>
          <input type="text" placeholder="CVC" class="cvc" />
        </div>
      </div>
    </div>
    <div class="card-cvc">
      <div class="line"></div>
      <input
        type="text"
        placeholder="CVC"
        class="cvc"
        v-model="cvv"
        maxlength="3"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CreditCard",
  props: {},
  components: {},
  data() {
    return {
      cardNumber: "",
      month: "",
      year: "",
      cvv: ""
    };
  },
  watch: {
    cardNumber() {
      this.cardNumber = this.cardNumber.replace(/[^0-9]/, "");
    },
    month() {
      this.month = this.month.replace(/[^0-9]/, "");
    },
    year() {
      this.year = this.year.replace(/[^0-9]/, "");
    },
    cvv() {
      this.cvv = this.cvv.replace(/[^0-9]/, "");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";
.credit-card {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @include max(md) {
    width: min-content;
  }
  @include max(sm) {
    width: fit-content;
  }

  .card {
    width: 434px;
    min-height: 294px;
    padding: 32px 24px;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    background-color: #ffffff;

    @include max(lg) {
      width: 338px;
      padding: 25px 19px;
      min-height: 229px;
    }
    @include max(sm) {
      width: 100%;
    }
    .card-title {
      width: 100%;
      padding: 8px 0 9px 14px;
      margin-bottom: 24px;
      display: flex;
      justify-content: flex-start;
      background-color: rgba(#f7f7f7, 0.8);
      @include max(lg) {
        padding: 4px 0 4px 14px;
        border-radius: 5px;
        margin-bottom: 19px;
      }
      .p2 {
        width: 60%;
        font-size: 8px;
        letter-spacing: 0.06em;
        color: #000000;

        opacity: 0.5;

        @include max(lg) {
          font-size: 8px;
        }
        @include max(1020) {
          width: 82%;
        }
      }
    }
    .card-number {
      width: 100%;
      padding-left: 14px;
      height: 44px;
      margin-bottom: 56px;
      display: flex;
      align-items: center;
      border: 1px solid #d6d6d6;
      border-radius: 2px;
      @include max(lg) {
        height: 34px;
        margin-bottom: 44px;
      }
      @include max(sm) {
        margin-bottom: 40px;
      }
      input {
        width: 100%;
        border: none;
        &::placeholder {
          color: rgba(#000000, 0.6);
        }
      }
    }
    .card-date {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .a2 {
        margin-bottom: 8px;
        text-transform: uppercase;
        letter-spacing: 0.24em;

        @include max(lg) {
          margin-left: 9px;
        }
      }
      .wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .data,
        .card-cvc__inner {
          display: flex;
          align-items: center;
          span {
            margin: 0 6px;

            @include max(lg) {
              margin: 0 4px;
            }
          }
          input {
            width: 63px;
            height: 44px;
            padding-left: 14px;
            display: flex;
            align-items: center;
            border: 1px solid #d6d6d6;
            border-radius: 2px;

            @include max(lg) {
              padding-left: 10px;
              height: 34px;
              width: 49px;
            }
          }
        }
        .card-type {
          display: flex;
          align-items: center;

          @include max(sm) {
            display: none;
          }
          img {
            &:not(:last-child) {
              margin-right: 14px;

              @include max(lg) {
                margin-right: 10px;
              }
            }
          }

          @include max(lg) {
            img {
              &:nth-child(1) {
                width: 31.16px;
                height: 18.69px;
              }
              &:nth-child(2) {
                width: 37.39px;
                height: 12.46px;
              }
            }
          }
        }
        .cvc {
          @include min(sm) {
            display: none;
          }

          background: #ffffff;
          border: 1px solid #d6d6d6;
          box-sizing: border-box;
          border-radius: 2px;
          width: 61.99px;
          height: 34px;
          padding-left: 13px;
        }
        .card-cvc__inner {
          display: none;
          @include max(767) {
            display: block;
          }
        }
      }
    }
  }
  .card-cvc {
    position: relative;
    left: -4px;
    width: 140px;
    height: auto;
    min-height: 294px;
    padding-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: #f7f7f7;
    border: 1px solid rgba(0, 0, 0, 0.04);
    border-radius: 4px;

    @include max(lg) {
      padding-top: 24px;
      min-height: 229px;
    }

    @include max(sm) {
      display: none;
    }
    // z-index: -1;
    .line {
      width: 100%;
      height: 40px;
      margin-bottom: 24px;
      background: #d6d6d6;

      @include max(lg) {
        margin-bottom: 18px;
        height: 31px;
      }
    }
    .cvc {
      width: 80px;
      height: 44px;
      padding-left: 18px;
      display: flex;
      background: #ffffff;
      border: 1px solid #d6d6d6;
      border-radius: 2px;

      @include max(lg) {
        width: 63px;
        height: 34px;
        padding-left: 12px;
      }
    }
  }
}
</style>
