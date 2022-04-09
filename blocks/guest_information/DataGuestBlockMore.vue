<template>
  <div class="data_guest_block_more">
    <div class="guest-info">
      <div class="data">
        <Input
          v-for="option in data.inputOptions"
          :option="option"
          :key="option.id"
        />
      </div>
      <Calendar />
      <TextArea :placeholder="data.commentTitle" />

      <div class="choose_data">
        <p class="p1 title">{{ data.optionsInfo.title }}</p>
        <RadioButton
          v-for="(data, index) in data.optionsInfo.options"
          :key="index"
          :optionText="data.text"
          :optionValue="data.value"
          name="chooseData"
        />
      </div>
    </div>
    <div class="guest-card">
      <p class="p2_light">{{ data.guestCardInfo.description }}</p>
      <Input :option="data.guestCardInfo.input" />
    </div>
    <div class="guest-agreement">
      <Checkbox :data="data.agreement" />
      <div class="captcha_wrapper">
        <img src="~/static/images/captcha.png" alt="icon" />
        <GoldButton :big_size="true" :text="data.button" />
      </div>
    </div>
  </div>
</template>

<script>
import GoldButton from "~/components/GoldButton";
export default {
  name: "DataGuestBlockMore",
  components: {
    GoldButton,
  },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
<style lang="scss" >
@import "../../assets/scss/utils.scss";

.data_guest_block_more {
  .calendar-wrapper {
    margin-top: 12px;
    margin-bottom: 20px;

    @include max(lg) {
      margin-top: 0;
      margin-bottom: 16px;
    }

    .choose-date {
      @include max(sm) {
        flex-wrap: wrap;
      }
      .selected-date {
        width: calc(50% - 24px);

        @include max(lg) {
          width: calc(50% - 16px);
        }

        @include max(md) {
          width: calc(50% - 6px);
        }
        @include max(sm) {
          width: calc(100%);
          &:nth-child(1) {
            margin-bottom: 18px;
          }
        }

        .description {
          font-family: AvenirNextCyrLight;
          font-style: normal;
          font-weight: 300;
          font-size: 14px;
          letter-spacing: 0.04em;
          color: rgba(#000000, 0.6);
          text-transform: capitalize;
          opacity: 1;
        }
      }
    }
  }
  .radio-wrapper {
    .label-container {
      .a2 {
        font-family: AvenirNextCyrLight;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 196%;
        letter-spacing: 0.04em;
        color: rgba(#000000, 0.6);
        text-transform: capitalize !important;
      }
      .checkmark {
        top: 50% !important;
        transform: translateY(-50%);
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.data_guest_block_more {
  width: 100%;
  padding-top: 56px;
  display: flex;
  flex-direction: column;

  @include max(lg) {
    padding-top: 40px;
  }

  @include max(md) {
    padding-top: 28px;
  }

  .guest-info {
    width: 100%;
    padding: 0px 40px 56px 40px;
    margin-bottom: 56px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgba(#000000, 0.05);

    @include max(lg) {
      padding: 0px 40px 40px 40px;
      margin-bottom: 40px;
    }

    @include max(sm) {
      padding: 0px 24px 40px;
      margin-bottom: 40px;
    }

    h6 {
      font-weight: normal;
      margin-bottom: 24px;
    }
    .data {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .input-block {
        width: calc(50% - 24px);
        margin-bottom: 28px;

        @include max(lg) {
          &:nth-child(1),
          &:nth-child(2) {
            margin-bottom: 14px;
          }

          width: calc(50% - 16px);
          margin-bottom: 16px;
        }

        @include max(md) {
          width: calc(50% - 6px);
        }

        @include max(sm) {
          width: calc(100%);
          &:nth-child(1),
          &:nth-child(2) {
            margin-bottom: 14px;
          }

          &:nth-child(4) {
            margin-bottom: 18px;
          }

          margin-bottom: 14px;
        }

        // &:nth-child(odd) {
        //   margin-right: 48px;

        //   @include max(lg) {
        //     margin-right: 32px;
        //   }
        // }
      }
    }
    .textarea-block {
      margin-bottom: 40px;
    }
    .choose_data {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .title {
        margin-right: 32px;
      }
      .radio-wrapper {
        &:not(:last-child) {
          margin-right: 32px;
        }
      }
    }
  }

  .guest-card {
    width: 100%;
    padding: 0px 40px 56px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @include max(lg) {
      padding: 40px;
      padding-top: 0;
    }

    @include max(sm) {
      padding: 0 24px 40px;
    }

    .p2_light {
      max-width: 380px;
      margin-bottom: 20px;
    }
    .input-block {
      width: 100%;
    }
  }
  .guest-agreement {
    width: 100%;
    padding: 56px 130px 56px 40px;
    display: flex;
    flex-direction: column;
    background-color: #f0edea;

    @include max(lg) {
      padding: 40px;
    }
    .checkbox-container {
      margin-bottom: 32px;

      @include max(md) {
        margin-bottom: 24px;
      }

      @include max(sm) {
        margin-bottom: 32px;
      }
    }
  }
  .captcha_wrapper {
    display: flex;
    align-items: center;

    @include max(md) {
      max-width: 440px;
    }

    @include max(sm) {
      max-width: 100%;
      flex-wrap: wrap;
    }

    img {
      width: calc(50% - 16px);
      height: 49px;
      margin-right: 16px;

      @include max(lg) {
        width: calc(50% - 12px);
        margin-right: 12px;
      }

      @include max(sm) {
        height: 69px;
        width: 100%;
        max-width: 291px;
        margin: 0 auto 32px;
      }
    }

    .gold_button {
      width: 252px;
      padding: 0;

      .big_size {
        margin: 0 auto;
      }

      @include max(sm) {
        width: calc(100%);
      }
    }
  }
}
</style>
