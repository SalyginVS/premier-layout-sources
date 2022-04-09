<template>
  <div class="account-bonus-info">
    <p class="a1 subtitle">{{ data.subtitle }}</p>
    <h4 class="title">
      {{ data.title }}
      <br />
      <span class="gold_text italic">
        {{ data.titleHotel }}
      </span>
    </h4>

    <p class="p1 description">
      {{ data.description }}
    </p>
    <AccountBookingTable :tableData="data.tableData">
      <template v-for="(index, name) in $scopedSlots" v-slot:[name]="data">
        <slot :name="name" v-bind="data"/>
      </template>
    </AccountBookingTable>
    <AccountBonusInfoMob :tableData="data.tableData"/>
  </div>
</template>

<script>
import AccountBookingTable from "~/blocks/account/AccountBookingTable";
import AccountBonusInfoMob from "~/blocks/account/AccountBonusInfoMob";

export default {
  name: "AccountBonusInfo",
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({}),
  components:{
      AccountBookingTable,
      AccountBonusInfoMob
  },
  created(){
    console.log(this.data);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.account-bonus-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .subtitle {
    margin-bottom: 23px;
    opacity: 0.3;
  }
  .title {
    margin-bottom: 32px;
    @include max(1439){
      margin-bottom:24px;
    }
    .gold_text {
      margin-bottom: 3px;
    }
  }
  .description {
    max-width: 70%;
    margin-bottom: 48px;
    @include max(1439){
      margin-bottom:40px;
    }
    @include max(767){
      max-width:100%;
      margin-bottom:32px;
    }
  }
  .account-booking-table{
    display: block;
    @include max(767){
      display: none;
    }
  }
  .account-bonus-info__table-mob{
    display:none;
    @include max(767){
      display: block;
    }
  }
}
</style>