<template>
  <div class="account-info-blocks">
    <h4 class="title">{{ data.title }}</h4>
    <div class="info-blocks">
      <AccountInfoBlock v-for="item in data.info" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import AccountInfoBlock from "~/blocks/account/customer_care/AccountInfoBlock";
export default {
  name: "AccountInfoBlocks",
  components: {
    AccountInfoBlock
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";

.account-info-blocks {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @include max(1439) {
    padding-left: 16px;
  }
  @include max(1023) {
    padding-left: 0;
  }
  .title {
    @include mb-48;
  }
  .info-blocks {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    .account-info-block {
      margin-bottom: 24px;
      margin-right: 24px;
      @include max(1439) {
        margin-bottom: 16px;
        margin-right: 16px;
      }
      @include max(767) {
        margin-right: 0;
        margin-bottom:10px;
      }
    }
  }
}
</style>
