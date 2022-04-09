<template>
  <div class="guest_pay_block">
    <InfoTitleBlock :dataInfo="dataInfo" />
    <div class="top-distance"></div>
    <div class="data-wrapper">
      <p class="pay-desc p2_light">
        Оплата проводиться в готелі по прибуттю (карта надається для гарантії).
        Повна сума стягується в день бронювання.
      </p>
      <CreditCard />
    </div>
  </div>
</template>

<script>
import InfoTitleBlock from "~/blocks/guest_information/InfoTitleBlock";

export default {
  name: "GuestPayBlock",
  props: {
    dataInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    InfoTitleBlock,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.guest_pay_block {
  width: 100%;
  //   margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  background: rgba(#f0edea, 0.5);

  @include max(md){
    margin-bottom: 24px;
  }

  @include max(sm){
    margin-bottom: 18px;
  }

  .top-distance{
    background-color: white;
    @include min(lg){
      display: none;
    }
    @include max (lg){
      height: 32px;
    }
    @include max (md){
      display: none;
    }
  }
  .data-wrapper {
    padding: 34px 40px 40px 40px;

    @include max (lg){
      padding-top: 32px;
    }
    @include max (md){
      padding: 24px 40px;
    }
    @include max (sm){
      padding: 32px 18px;
    }
    .pay-desc {
      margin-bottom: 34px;
      @include max(lg){
        margin-bottom: 32px;
      }
      @include max(md){
        margin-bottom: 24px;
      }
      @include max(sm){
        margin-bottom: 32px;
      }
      opacity: 0.5;
    }
  }
}
</style>
