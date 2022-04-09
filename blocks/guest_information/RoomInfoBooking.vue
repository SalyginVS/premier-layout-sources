<template>
  <div class="room_info_booking">
    <div class="booking-data">
      <div class="room">
        <div class="title">
          <p class="a2">
            Стандартний номер
            <img src="~/static/icons/pen-icon.svg" alt="icon" />
          </p>
          <p class="a2 price">
            ціна:
            <span>9100 $</span>
          </p>
        </div>
        <div class="desc">
          <p class="p2_light">2 дорослих / 2 дітей</p>
          <p class="p2_light">Двоспальне ліжко / Без харчування</p>
          <p class="p2_light">Найкращий гнучкий тариф</p>
        </div>
      </div>
      <div class="booking-info" v-for="item in bookingInfo" :key="item.id">
        <div class="wrapper">
          <p class="a2">
            {{ item.title }}
            <img src="~/static/icons/cross-icon.svg" alt="icon" />
          </p>
          <p class="a2 price">
            ціна:
            <span>{{ item.price }}</span>
          </p>
        </div>
        <p class="add-info p2_light" v-if="item.info">{{ item.info }}</p>
      </div>
    </div>
    <div class="total-price">
      <p class="a2">Загальна сума <span>з ПДВ</span></p>
      <p class="a2">10 000 $</p>
    </div>
    <RoomInfoBookingTariff :bookingInfoCondition="bookingInfoCondition" />
  </div>
</template>

<script>
import RoomInfoBookingTariff from "~/blocks/guest_information/RoomInfoBookingTariff";

export default {
  name: "RoomInfoBooking",
  components: {
    RoomInfoBookingTariff,
  },
  props: {
    bookingInfo: {
      type: Array,
      default: () => [],
    },
    bookingInfoCondition: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.room_info_booking {
  width: 100%;
  display: flex;
  flex-direction: column;
  .booking-data {
    padding: 28px 32px;
    width: 100%;
    display: flex;
    flex-direction: column;

    @include max(lg) {
      padding: 26px 32px;
    }
    @include max(md) {
      padding: 27px 12px;
      padding-bottom: 24px;
    }

    .room {
      width: 100%;
      padding: 0 8px 26px 8px;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);

      @include max(lg) {
        padding: 0 0 22px;
      }
      @include max(lg) {
        padding: 0 8px 24px;
      }
      .title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;

        @include max(lg) {
          margin-bottom: 8px;
        }
        .a2 {
          width: fit-content;
          text-transform: uppercase;
          position: relative;
          &.price {
            color: rgba(0, 0, 0, 0.5);
            span {
              color: rgb(0, 0, 0);
            }
          }
          img {
            width: 18px;
            height: 18px;
            position: absolute;
            right: -32px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;

            @include max(lg) {
              right: -28px;
            }
          }
        }
      }
      .desc {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .p2_light {
          color: rgba(0, 0, 0, 0.5);
          &:not(:last-child) {
            margin-bottom: 4px;
          }
        }
      }
    }
    .booking-info {
      width: 100%;
      padding: 27px 8px 0 8px;
      display: flex;
      flex-direction: column;
      @include max(lg) {
        padding: 26px 0 0;
      }
      @include max(md) {
        padding: 26px 8px 0;
      }
      @include max(sm) {
        padding: 27px 6px 0;
      }
      &:not(:last-child) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding-bottom: 29px;

        @include max(lg) {
          padding-bottom: 26px;
        }

        @include max(sm) {
          padding-bottom: 28px;
        }
      }
      .wrapper {
        display: flex;
        justify-content: space-between;
        .a2 {
          text-transform: uppercase;
          position: relative;
          &.price {
            color: rgba(0, 0, 0, 0.5);
            span {
              color: rgb(0, 0, 0);
            }
          }
          img {
            width: 18px;
            height: 18px;
            position: absolute;
            right: -32px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
          }
        }
      }
      .add-info {
        margin-top: 12px;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  .total-price {
    width: 100%;
    padding: 18px 40px 19px 40px;
    display: flex;
    justify-content: space-between;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02)),
      #f0edea;

    @include max(sm) {
      padding: 21px 18px;
    }

    .a2 {
      text-transform: uppercase;
      span {
        opacity: 0.7;
      }
    }
  }
}
</style>
