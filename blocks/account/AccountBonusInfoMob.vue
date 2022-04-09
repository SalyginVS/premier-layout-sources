<template>
  <div class="account-bonus-info__table-mob">
    <div class="account-bonus-info__table-mob__wrapper">
      <div
        v-for="(elem, index) in tableData.data"
        class="account-bonus-info__item"
        :key="index"
      >
        <div class="item-header a1">
          <p>
            {{ elem.title }} <span>{{ elem.titleValue }}</span>
          </p>
        </div>
        <div class="item-description p2_light">
          <p>
            {{ elem.description }} <span>{{ elem.descriptionValue }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountBonusInfoMob",
  props: {
    tableData: {
      type: Object,
      default: () => {}
    }
  },
  created(){
      console.log(this.data);
  }
};
</script>

<style lang="scss" scoped>
.item-description {
  margin-top: 8px;
}
.account-bonus-info__item + .account-bonus-info__item {
  margin-top: 32px;
}
</style>
