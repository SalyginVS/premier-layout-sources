<template>
  <div class="details_booking_info">
    <div class="details_booking_info-content">
      <p v-html="dataDetails" class="p1"></p>
    </div>
    <div v-if="line" class="line"></div>
  </div>
</template>

<script>
export default {
  name: "DetailsBookingInfo",
  props: {
    dataDetails: {
      type: String,
      default: "",
    },
    line: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" >
.details_booking_info {
  .p1 {
    span {
      font-weight: 600;
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";
.details_booking_info {
  position: relative;
  width: 600px;
  display: flex;

  @include max(lg) {
    width: 424px;
  }
  @include max(md) {
    width: 325px;
  }
  @include max(sm) {
    width: 100%;
  }

  .details_booking_info-content {
    width: 100%;
    padding: 48px 0 48px 48px;
    @include pr-168;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    background-color: #f5f4f3;
    position: relative;
    z-index: 1;

    @include max(lg) {
      padding: 38px 56px 38px 32px;
    }
    @include max(md) {
      padding: 36px 49px 36px 40px;
    }
    @include max(sm) {
      padding: 34px 18px;
    }
    // .p1{
    //   max-width: 382px;
    // }
  }
  .line {
    position: absolute;
    transform: rotate(-60.26deg);
    z-index: 0;
    top: 55px;
    left: -70px;
    width: 400px;
    height: 1px;
    background-color: #000000;
    opacity: 0.3;

    @include max(lg) {
      width: 250px;
      top: 83px;
      left: -80px;
    }
    @include max(md) {
      width: 240px;
      top: 75px;
      left: -48px;
    }
    @include max (sm){
      display: none;
    }
  }
}
</style>
