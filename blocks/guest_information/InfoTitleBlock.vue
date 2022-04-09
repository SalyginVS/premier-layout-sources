<template>
  <div class="info_title_block">
    <template v-if="dataInfo.data">
      <h5 class="booking-title">
        {{ dataInfo.title }}
        <img
          v-if="dataInfo.changeData"
          src="~/static/icons/pen-icon.svg"
          alt="icon"
        />
      </h5>
      <div class="filter-booking filter-booking-date">
        <div class="date">
          <p class="a2">
            01 травня
            <span>12:00</span>
          </p>
          <p class="a2">
            07 травня
            <span>18:00</span>
          </p>
        </div>
        <p class="day p2_light">7 ночей</p>
        <img
          v-if="dataInfo.changeData"
          class="button-change"
          src="~/static/icons/pen-icon.svg"
          alt="icon"
        />
      </div>
    </template>

    <template v-else>
      <h5>{{ dataInfo.title }}</h5>
      <div v-if="dataInfo.options" class="filter-booking">
        <RadioButton
          v-for="data in dataInfo.options"
          :key="data.id"
          :optionText="data.text"
          :optionValue="data.value"
          name="guestInfoTitle"
        />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "infoTitleBlock",
  props: {
    dataInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.info_title_block {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f0edea;
  h5 {
    width: 100%;
    padding: 32px 0 29px 40px;
    display: flex;
    position: relative;

    @include max(lg) {
      padding: 32px 0 32px 40px;
    }
    @include max(md) {
      padding: 24px 0 23px 41px;
    }

    @include max(sm) {
      padding: 24px 0 23px 18px;
    }

    &.booking-title {
      width: fit-content;

      @include max(md) {
        width: 100%;
      }
    }
    img {
      position: absolute;
      right: -44px;
      top: 50%;
      transform: translateY(-50%);
      width: 24px;
      height: 24px;
      cursor: pointer;

      @include max(md) {
        right: 40px;
      }
    }
  }
  .filter-booking {
    width: 100%;
    height: 51px;
    padding: 18px 0 19px 40px;
    display: flex;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02)),
      #f0edea;
    @include max(lg) {
      height: auto;
      //height: 45px;
      padding: 18px 40px;
      padding-right: 0;
    }
    @include max(md) {
      //height: 37px;
      padding: 14px 40px;
      padding-right: 0;
    }
    @include max(sm) {
      padding: 20px 18px;
      padding-right: 0;
      flex-wrap: wrap;
    }
    &.filter-booking-date {
      padding: 18px 40px 19px 40px;

      @include max(lg) {
        padding: 12px 0px 12px 32px;
      }
      @include max(md) {
        //padding: 20px 0px 20px 18px;
        padding: 20px 0px 20px 40px;
      }
      @include max(sm) {
        padding: 20px 0px 20px 18px;
      }

      .date {
        display: flex;
        align-items: center;
        margin-right: 10px;
        @include max(lg) {
          margin-right: 16px;
        }
        .a2 {
          text-transform: uppercase;
          span {
            opacity: 0.5;
          }
          &:not(:last-child) {
            &::after {
              content: "-";
              margin: 0 10px;
              display: inline-block;
              font-size: 14px;
            }
          }
        }
      }
      .day {
        color: rgba(0, 0, 0, 0.3);
        margin-left: auto;

        @include max(lg) {
          margin-left: 0;
        }

        @include max(500) {
          order: 2;
          width: 100%;
        }
      }
      .button-change {
        width: 18px;
        height: 18px;
        margin-left: 15px;
        cursor: pointer;

        @include max(lg) {
          margin-top: 3px;
        }
        @include max(md) {
          margin-left: auto;
          margin-right: 40px;
        }
        @include max(500) {
          order: 1;
        }
      }
    }
    .radio-wrapper {
      &:not(:last-child) {
        margin-right: 40px;

        @include max(lg) {
          margin-right: 24px;
        }
        @include max(md) {
          margin-right: 14px;
        }
        @include max(sm) {
          margin-right: 0;
          margin-bottom: 24px;
        }
      }
      @include max(sm) {
        width: 100%;
      }
    }
  }
}
</style>
