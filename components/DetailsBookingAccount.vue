<template>
  <div class="details_booking_account">
    <div class="booking-stage">
      <p class="gold_text stage-next">Pearl</p>
      <div class="stage-line"></div>
      <div class="stage-first">
        <p class="gold_text stage-header">Деталі бронювання</p>
        <p class="stage-info">крок 2</p>
      </div>
      <div class="stage-line"></div>
      <p class="gold_text stage-next">Sapphire</p>
    </div>

    <div class="details_booking_account_wrapper">
      <h6 class="title">У вас є акаунт Premier Club?</h6>
      <div class="info">
        Приєднуйтесь зараз до <b> premier club </b> та отримайте 10% розпродажів
        на бронювання
      </div>
      <div class="filter">
        <p class="a2">авторизуватись</p>
        <p class="a2">зареєструватися</p>
      </div>
    </div>

    <div class="line-simple"></div>
  </div>
</template>

<script>
export default {
  name: "DetailsBookingAccount",
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";

.details_booking_account {
  position: relative;

  @include max (lg){
    margin-top: 86px;
  }

  @include max (sm){
    margin-top: 0px;
  }
  &_wrapper {
    width: 560px;
    padding: 65px 0 70px 56px;
    position: relative;
    z-index: 1;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    background-color: #f5f4f3;

    @include max(lg) {
      width: 424px;
      padding: 40px 0 44px 40px;
    }
    @include max(md) {
      width: 344px;
      padding: 41px 0 45px 40px;
    }
    @include max(sm) {
      width: 100vw;
      padding: 41px 33px 45px 18px;
      max-width: none;
    }
  }
  .line-simple {
    top: 100px;
    left: -105px;

    @include max(lg) {
      width: 250px;
      top: 70px;
      left: -71px;
    }

    @include max(md) {
      width: 250px;
      top: 66px;
      left: -32px;
    }

    @include max(sm) {
      display: none;
    }
  }
  .title {
    margin-bottom: 32px;

    @include max(lg) {
      margin-bottom: 20px;
    }
    @include max(md) {
      margin-bottom: 24px;
    }
    @include max(sm) {
      margin-bottom: 0px;
    }
  }
  .info {
    @include min(sm) {
      display: none;
    }
    margin-top: 16px;
    margin-bottom: 30px;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 196%;
    letter-spacing: 0.04em;
    color: #000000;
    opacity: 0.8;
  }
  .filter {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .a2 {
      text-transform: uppercase;
      color: #000000;
      opacity: 0.5;
      transition: opacity 0.3s ease-in-out;
      position: relative;
      cursor: pointer;
      &:hover {
        &::before {
          content: "";
          position: absolute;
          width: 100%;
          bottom: -3px;
          height: 1px;
          background: url("../static/images/gold_test.png");
        }
        opacity: 0.9;
        //background: url('../static/images/gold_bg.jpg');
        //border-bottom: 1px solid url('../static/images/gold_bg.jpg');
      }
      &:not(:last-child) {
        margin-right: 32px;
      }
      &.active {
        opacity: 0.9;
        text-decoration: underline;
      }
    }
  }
}
.booking-stage {
  @include min(sm) {
    display: none;
  }
  margin-bottom: 72px;
  display: flex;
  position: relative;
  left: -5%;
  .stage-first {
    .stage-header {
      width: 168px;
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
