<template>
  <div class="credit-card-template">
    <div class="header">
      <img class="type-card" src="~/static/icons/mastercard.svg" alt="icon" />
      <div @click="$emit('closeCardTemplate')" class="icon-delete">
        <img src="~/static/icons/cross-black.svg" alt="icon" />
      </div>
    </div>
    <div class="info">
      <div class="hide-info">
        <div class="hide1"></div>
        <div class="hide2"></div>
      </div>
      <p class="card-number a1">76** **** **** **44</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreditCardTemplate",

  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";
.credit-card-template {
  width: 157px;
  height: 102px;
  padding: 10px 10px 6px 10px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  @include max(767) {
    width: 125.99px;
    height: 81.85px;
    padding: 8.03px 8.03px 4.81px 8.03px;
  }
  .header {
    display: flex;
    align-items: center;
    position: relative;
    .type-card {
      width: 26px;
      height: 16px;
      @include max(767) {
        width: 20.86px;
        height: 12.84px;
      }
    }
    .icon-delete {
      position: absolute;
      right: 0;
      top: 0;
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f7f7f7;
      opacity: 0.8;
      border-radius: 5px;
      cursor: pointer;
      @include max(767) {
        width: 12.84px;
        height: 12.84px;
      }
      img {
        width: 8px;
        height: 8px;
      }
    }
  }
  .info {
    margin-top: auto;
    .hide-info {
      margin-bottom: 12px;
      display: flex;
      .hide1 {
        width: 40px;
        height: 10px;
        margin-right: 4px;
        background: #f7f7f7;
        opacity: 0.8;
        border-radius: 5px;
      }
      .hide2 {
        width: 51px;
        height: 10px;
        background: #f7f7f7;
        opacity: 0.8;
        border-radius: 5px;
      }
    }
    .card-number {
      @include max(767) {
        font-size: 8px;
      }
    }
  }
}
</style>
