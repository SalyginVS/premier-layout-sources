<template>
  <div id="first-screen-booking-mob">
    <Calendar class="choose-date" :options="optionsCheckin" />
    <SelectGuestBlock @nuxt:bookingFromGuestsPopup="openModal" class="guest_select" />
    <!-- <GoldButton class="reserve_btn" :text="'Зарезервувати'" /> -->
    <div @click="openModal" class="buttonGold">
      Зарезервувати
    </div>
    <p @click="showPromo" class="a1 promo_wrapper">
      <span :class="{ 'show-promo': openPromo }"
        >промо-код{{ openPromo ? ":" : "" }}</span
      >
      {{ openPromo ? "4chfe82" : "" }}
    </p>
  </div>
</template>

<script>
import GoldButton from "~/components/GoldButton";

export default {
  name: "FirstScreenBookingMob",
  components: {
    GoldButton,
  },
  created() {
    this.$nuxt.$on("bookingFromGuestsPopup", this.openModal);
  },
  data: () => ({
    optionsCheckin: {
      name: "Заїзд",
    },
    numberGuests: "",
    optionsNumberGuests: [
      {
        title: "1-3",
        value: "1-3",
      },
      {
        title: "3-6",
        value: "3-6",
      },
      {
        title: "6-9",
        value: "6-9",
      },
      {
        title: "9-12",
        value: "9-12",
      },
      {
        title: "12-15",
        value: "12-15",
      },
    ],
    isGuestPopUpVis:true,
    openPromo: false,
  }),
  methods: {
    guestPopUpClose(){
      this.isGuestPopUpVis = false
    },
    showPromo() {
      this.openPromo = !this.openPromo;
    },
  },
};
</script>

<style lang="scss" >
@import "../../assets/scss/utils.scss";
#first-screen-booking-mob {
  .calendar-wrapper {
    .selected-date {
      height: 100%;
      padding: 18px 16px 19px 16px;
      align-items: center;
      border-bottom: 0px;
      &:first-of-type {
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: -12px;
          width: 1px;
          height: calc(100% - 16px);
          background: rgba(#000000, 0.1);
        }
      }
      .description {
        position: static;
        opacity: 1;
      }
      .arrow {
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .select-wrapper {
    .description {
      left: 16px;
      top: 12px;
      width: fit-content;
      font-size: 9px;
      font-family: AvenirNextCyrMedium;
      font-style: normal;
      font-weight: 500;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      opacity: 1;
      text-align: start;
    }
    .arrow {
      position: absolute;
      right: 17px;
      top: 43%;
      transform: translateY(0%) rotate(0);
    }
    .selected-block {
      padding: 12px 16px 16px;
      border-bottom: 0;
      .arrow {
        right: 17px;
        top: 21px;
      }
    }
  }
  .reserve_btn {
    //width: 100%;
    height: 57px;
    margin-bottom: 40px;
  }
}
</style>
<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
#first-screen-booking-mob {
  width: calc(100% - 20px);
  margin: 0 auto;
  .calendar-wrapper,
  .select-wrapper {
    background-color: #ffffff;
    height: 50px;
    margin-bottom: 8px;
    border-radius: 2px;
  }
  .promo_wrapper {
    position: relative;
    width: fit-content;
    margin: 0 auto;
    color: #ffffff;
    .show-promo {
      opacity: 0.4;
    }

    &::before {
      content: "";
      position: absolute;
      bottom: -2px;
      width: 100%;
      height: 1px;
      opacity: 0.2;
      background-color: #ffffff;
    }
  }

  .guest_select{
    margin-bottom: 8px;
  }
}
</style>
