<template>
  <div class="title_with_description">
    <!-- <div class="booking-stage">
      <div class="stage-first">
        <p class="gold_text stage-header">Виберіть номер</p>
        <p class="stage-info">крок 1</p>
      </div>

      <div class="stage-line"></div>

      <p class="gold_text stage-next">Pearl</p>
    </div> -->

    <div class="description_left">
      <p class="little_title">{{ data.subtitle }}</p>

      <h3 v-if="one_line">
        <span class="gold_text italic">{{ data.title_gold }}</span>
        {{ data.title_black }}
      </h3>

      <h3 v-else>
        <span class="gold_text italic">{{ data.title_gold }}</span>
        <br />
        {{ data.title_black }}
      </h3>
    </div>
    <div class="description_right">
      <DetailsBookingFilter :line="lineDetails" v-if="detailsFilter" />
      <DetailsBookingAccount v-if="detailsAccount" />
      <DetailsBookingInfo
        :line="true"
        v-if="detailsBookingReg"
        :dataDetails="data.descDetail"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TitleWithFilterBooking",
  props: {
    lineDetails: {
      type: Boolean,
      default: false,
    },
    one_line: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: () => ({
        subtitle: "",
        title_gold: "",
        title: "",
      }),
    },
    detailsFilter: {
      type: Boolean,
      default: false,
    },
    detailsAccount: {
      type: Boolean,
      default: false,
    },
    detailsBookingReg: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.title_with_description {
  display: flex;
  justify-content: space-between;
  padding-left: 158px;
  margin-top: 94px;

  @include max(lg) {
    padding-left: 134px;
  }

  @include max(md) {
    padding-left: 48px;
  }

  @include max(sm) {
    padding-left: 0px;
    position: relative;
    overflow-x: hidden;
  }
}
.little_title {
  margin-bottom: 23px;

  @include max(lg) {
    margin-bottom: 16px;
  }

  @include max(md) {
    margin-bottom: 12px;
  }
}
.description_text {
  width: 430px;
  margin-top: 150px;
}
.description_left {
  @include max(sm) {
    display: none;
  }
}
.description_right {
  @include max(sm) {
  }
  .details_booking_account {
    position: relative;
    //bottom: -32px;
  }
}
.description_right {
  .details_booking_info {
    position: relative;
  }
}

.booking-stage {
  @include min(sm) {
    display: none;
  }
  display: flex;
  position: relative;
  left: 22%;
  .stage-first {
    .stage-header {
      width: 140px;
      font-family: Cormorant;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
    }
    .stage-info {
      margin-top: 9px;
      margin-left: 41px;
      font-style: normal;
      font-weight: 500;
      font-size: 9px;
      line-height: 140%;
      letter-spacing: 0.24em;
      text-transform: uppercase;
    }
  }
  .stage-line {
    position: static;
    width: 68px;
    height: 1px;
    border-bottom: 1px dashed #cdcccb;
    box-sizing: border-box;
    flex-grow: 0;
    margin: 13px 16px;
  }
  .stage-next {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 110%;
    text-align: center;
  }
}
</style>
