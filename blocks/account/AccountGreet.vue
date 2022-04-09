<template>
  <div class="account-greet" :class="{ account_profile: isAccountProfile }">
    <h4 class="title">
      {{ data.greet }}<br />
      <span class="gold_text italic">{{ data.name }}</span>
    </h4>
    <div class="personal-data">
      <p class="p2_light">
        Номер рахунку:
        <span>
          {{ data.accountNumber }}
        </span>
      </p>
      <p class="p2_light">
        Номер карти:
        <span>
          {{ data.cardNumber }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountGreet",
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    isAccountProfile: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.account-greet {
  display: flex;
  flex-direction: column;
  .title {
    margin-bottom: 24px;
    @include max(1439) {
      font-size: 36px;
      margin-bottom:8px;
    }
    @include max(1023) {
      font-size: 28px;
    }
    @include max(767) {
      margin-bottom: 12px;
    }
  }
  .personal-data {
    display: flex;
    align-items: center;
    @include max(767) {
      flex-flow: row wrap;
      justify-content: center;
    }
    @include max(375) {
      justify-content: end;
    }
    .p2_light {
      letter-spacing: 0.06em;
      color: rgba(#000000, 0.8);
      > span {
        color: #000000;
        font-weight: 600;
      }
      &:not(:last-child) {
        margin-right: 14px;
        @include max(767) {
          margin-right: 0;
        }
        &::after {
          content: "|";
          margin-left: 14px;
          color: rgba(#000000, 0.2);
          font-size: 14px;
          @include max(767) {
            display: none;
          }
        }
      }
    }
  }
  
}
/**account-profile page */
  .account_profile {
    @include max(767){
      align-items: center;
    }
    .title {
      margin-bottom: 24px;
    }
    .personal-data{
      @include max(767) {
      justify-content: center;
    }
    }
  }
  /**account-profile page */
</style>
