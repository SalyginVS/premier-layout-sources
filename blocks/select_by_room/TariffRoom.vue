<template>
  <div class="tariff-room" :class="{ mainBlock: mainBlock }">
    <div class="room-main-details">
      <TariffRoomInfo
        :tariffActive="tariffActive"
        :buttonCloseMore="buttonCloseMore"
        @MoreInfoTariff="openMoreInfoTariff"
        :radioOption="radioOption"
      />

      <TariffRoomDetails
        @openRoom="$emit('openRoom')"
        :tariffActive="tariffActive"
        :tariffOptions="tariffOptions"
        :buttonClose="buttonClose"
      />
      <SaleLabel v-if="tariffOptions.proposal" :text="tariffOptions.proposal" />
    </div>

    <TariffDetails :isOpen="isOpenMoreInfoTariff" />
  </div>
</template>

<script>
import TariffRoomInfo from "~/blocks/select_by_room/TariffRoomInfo";
import TariffRoomDetails from "~/blocks/select_by_room/TariffRoomDetails";

export default {
  name: "TariffRoom",
  components: {
    TariffRoomInfo,
    TariffRoomDetails,
  },
  props: {
    tariffOptions: {
      type: Object,
      default: () => ({}),
    },
    tariffActive: {
      type: Boolean,
      default: false,
    },
    buttonClose: {
      type: Boolean,
      default: false,
    },
    buttonCloseMore: {
      type: Boolean,
      default: false,
    },
    mainBlock: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    openMoreInfoTariff(data) {
      // openValue
      console.log(data);
      this.isOpenMoreInfoTariff = data.openValue;
    },
  },
  data: () => ({
    isOpenMoreInfoTariff: false,
    radioOption: [
      {
        id: 0,
        text: "Без сніданку",
        value: 0,
      },
      {
        id: 1,
        text: 'Сніданок "шведський стіл" <span>+ 20 євро<span>',
        value: 1,
      },
    ],
  }),
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/blocks/hotel_finded_el.scss";
.tariff-room {
  .room-main-details {
    position: relative;
    width: 100%;
    padding: 42px 34px 19px 42px;
    display: flex;
    background: rgba(0, 0, 0, 0.01);
    border: 1px solid rgba(0, 0, 0, 0.06);

    @include max(lg) {
      padding: 33px 30px 30px 32px;
    }
    @include max(md) {
      padding: 33px 18px 30px 32px;
    }
    @include max(sm) {
      padding: 24px 13px 16px 13px;
      flex-wrap: wrap;
      div {
        &:nth-child(2) {
          width: 100%;
        }
      }
    }
  }
  &.mainBlock {
    background-color: #f0edea;
    .sale_label {
      position: absolute;
      right: -21px;
      background-position: unset;
      height: unset;
      background-size: 100% 100%;

      @include max(sm) {
        right: -12px;
        top: unset;
        bottom: 160px;
        height: 20px;
      }

      // @include max(379) {
      //   bottom: 246px;
      // }
    }
  }
  .sale_label {
    position: absolute;
    right: -21px;
    background-position: unset;
    // background: url("../../static/icons/icon-triangle.svg") no-repeat;
    height: unset;
    background-size: 100% 100%;

    @include max(sm) {
      right: -12px;
      top: unset;
      bottom: 226px;
      height: 20px;
    }

    @include max(379) {
      bottom: 246px;
    }
  }
}
</style>
