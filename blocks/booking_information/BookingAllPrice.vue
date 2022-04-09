<template>
  <div class="booking-all-price">
    <div class="header">
      <p class="a2">Загальна сума <span>з ПДВ</span></p>
      <p class="a2 price">{{ totalPrice.price }}</p>
    </div>
    <p class="p2_light">{{ totalPrice.addInfo }}</p>
  </div>
</template>

<script>
export default {
  name: "BookingAllPrice",
  props: {
    totalPrice: {
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

.booking-all-price {
  width: 100%;
  padding: 42px 40px;
  display: flex;
  flex-direction: column;
  background-color: rgba(#f0edea, 0.5);

  @include max (lg){
    margin-bottom: 0px;
    padding: 35px 32px;
  }

  @include max (md){
    margin-bottom: 24px;
  }

  @include max (sm){
    margin-bottom: 14px;
    padding: 32px 10px;
  }


  .header {
    padding-bottom: 42px;
    margin-bottom: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    @include max (lg){
      padding-bottom: 32px;
      margin-bottom: 32px;
    }

    @include max (md){
      margin-bottom: 24px;
    }
    @include max (sm){
      padding: 0px 8px 32px;
      margin-bottom: 32px;
    }

    .a2 {
      text-transform: uppercase;
      &.price{
          text-transform: initial;
          letter-spacing: 0.24em;
      }
      span {
        opacity: 0.5;
      }
    }
  }
  .p2_light{
      max-width: 68%;

      @include max (lg){
        max-width: 80%;
      }
      @include max (sm){
        padding: 0 8px;
        max-width: 100%;
      }
  }
}
</style>
