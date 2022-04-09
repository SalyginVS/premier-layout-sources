<template>
  <div class="booking_info_room">
    <div v-for="item in data.mainInfo" :key="item.id" class="main-info">
      <div class="header">
        <p class="a2">{{ item.title }}</p>
        <p v-if="item.price" class="a2 price">{{ item.price }}</p>
      </div>
      <p class="p2_light">{{ item.description }}</p>
    </div>
    <div
      class="main-condition"
      v-for="condition in data.mainCondition"
      :key="condition.id"
    >
      <p class="a2">{{ condition.title }}</p>
      <p class="p2_light">{{ condition.description }}</p>
      <ul class="list" v-if="condition.list">
        <li class="p2_light" v-for="item in condition.list" :key="item.index">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookingInfoRoom",
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {};
  },
};
</script>
<style lang="scss">


.booking_info_room {
  .price {
    color: rgba(0, 0, 0, 0.5);
  }
}
</style>
<style lang="scss" scoped>

@import "../../assets/scss/utils.scss";

.booking_info_room {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(#f0edea, 0.5);

  @include max (lg){
    margin-bottom: 24px;
  }

  @include max (sm){
    margin-bottom: 42px;
  }
  .main-info {
    width: 100%;
    padding: 36px 40px 33px 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    @include max (lg){
      padding: 32px 40px;
    }
    @include max (md){
      padding: 24px 40px;

      &:first-child{
        padding-top: 32px;
      }
    }
    @include max (sm){
      padding: 32px 18px;
    }
    .header {
      width: 100%;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .a2 {
        text-transform: uppercase;
        .price {
          text-transform: initial;
          color: rgba(#f0edea, 0.5);
        }
      }
    }
  }
  .main-condition {
    width: 100%;
    padding: 33px 130px 44px 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @include max (lg){
      padding: 32px 78px 0px 40px;
      &:last-child{
        padding-bottom: 48px;
      }
    }

    @include max (md){
      padding: 32px 100px 0px 40px;
      &:last-child{
        padding-bottom: 40px;
      }
    }

    @include max (sm){
      padding: 24px 18px 0px 18px;
      &:first-child{
        padding-top: 32px;
      }
      &:last-child{
        padding-bottom: 32px;
      }
    }

    .a2 {
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .list {
      margin-top: 24px;
      li {
        &:not(:last-child) {
          margin-bottom: 10px;
        }
        &::before {
          content: "-";
          margin-right: 8px;
          display: inline-block;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
