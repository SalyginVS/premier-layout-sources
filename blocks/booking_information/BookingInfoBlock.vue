<template>
  <div class="booking-info-block">
    <div class="booking-info-wrapper">
      <h5>{{ bookingInfo.title }}</h5>
      <div class="booking-action">
        <img src="~/static/icons/download.svg" alt="icon" />
        <img src="~/static/icons/print.svg" alt="icon" />
      </div>
      <div class="booking-status">
        <p class="p2_light number">
          Бронювання:
          <span>{{ bookingInfo.numberBooking }}</span>
        </p>
        <p class="p2_light status">
          Статус:
          <span>{{ bookingInfo.statusBooking }}</span>
        </p>
      </div>
    </div>
    <div class="booking-change">
      <a class="p2_light" href="/">Скасувати бронювання</a>
      <a class="p2_light" href="/">Змінити бронювання</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookingInfoBlock",
  props: {
    bookingInfo: {
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
.booking-info-block {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f0edea;

  @include max(lg) {
    margin-bottom: 24px;
  }

  @include max(sm) {
    margin-bottom: 10px;
  }
  .booking-info-wrapper {
    position: relative;
    padding: 32px 40px 0 40px;

    @include max(lg) {
      padding: 24px 18px 0 18px;
    }

    h5 {
      margin-bottom: 16px;

      @include max(sm) {
        width: 60%;
      }
    }
    .booking-action {
      position: absolute;
      right: 40px;
      top: 37px;
      display: flex;
      align-items: center;
      @include max(1000) {
        right: 20px;
      }
      @include max(sm) {
        right: 24px;
      }
      img {
        width: 32px;
        height: 32px;
        &:not(:last-child) {
          margin-right: 10px;
        }
      }
    }
    .booking-status {
      display: flex;
      align-items: center;
      margin-bottom: 28px;

      @include max(lg) {
        margin-bottom: 40px;
      }
      @include max(md) {
        margin-bottom: 24px;
      }
      @include max(sm) {
        flex-wrap: wrap;
        p {
          width: 100%;
        }
      }
      p:not(:last-child) {
        margin-right: 14px;
        &::after {
          content: "|";
          font-size: 14px;
          color: rgba(#000000, 0.2);
          display: inline-block;
          margin-left: 14px;
          @include max(sm) {
            display: none;
          }
        }

        @include max(sm) {
          margin-right: 0;
          margin-bottom: 8px;
        }
      }
      .number {
        display: flex;
        span {
          font-weight: 600;
        }
      }
      .status {
        span {
          font-weight: 600;
          color: green;
        }
      }
    }
  }
  .booking-change {
    width: 100%;
    padding: 14px 0 15px 40px;
    display: flex;
    align-items: center;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02)),
      #f0edea;

    @include max(lg) {
      padding-bottom: 20px;
    }
    @include max(md) {
      padding-bottom: 14px;
    }
    @include max(sm) {
      padding: 18px;
      flex-wrap: wrap;
    }
    .p2_light {
      text-decoration: underline;
      &:not(:last-child) {
        margin-right: 32px;

        @include max(sm) {
          margin-right: 0px;
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
