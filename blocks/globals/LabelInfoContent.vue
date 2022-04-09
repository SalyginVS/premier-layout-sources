<template>
  <div class="label-info-content" :class="{ 'light-mode': lightMode }">
    <h6 class="font-cormorant">{{ data.title }}</h6>
    <p class="p1 description">
      {{ data.description }}
    </p>
    <div v-if="checkTime" class="checkTime">
      <p class="a2"><span>Заїзд:</span> {{ data.checkIn }}</p>
      <div class="line"></div>
      <p class="a2"><span>виїзд:</span> {{ data.checkOut }}</p>
    </div>

    <div class="add-info">
      <div class="p2_light" v-for="(item, index) in data.addInfo" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LabelInfoContent",
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    checkTime: {
      type: Boolean,
      default: false,
    },
    lightMode: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.label-info-content {
  min-height: 370px;
  width: 48.4vw;
  padding: 72px 96px 73px 162px;
  background-color: #f0edea;
  &.light-mode {
    background-color: transparent;
    padding: 72px 0px 73px 0px;
  }
  .description {
    margin-top: 16px;
    margin-bottom: 41px;
  }
  .checkTime {
    display: flex;
    align-items: center;
    .a2 {
      text-transform: uppercase;
      span {
        color: rgba(0, 0, 0, 0.5);
      }
    }
    .line {
      width: 6px;
      height: 1px;
      margin: 0 10px;
      display: flex;
      background-color: #000000;
    }
  }
  .add-info {
    display: flex;
    flex-direction: column;
    .p2_light {
      display: flex;
      align-items: center;

      

      &:not(:last-child) {
        margin-bottom: 20px;
      }
      &::before {
        content: "";

        width: 6px;
        height: 1px;
        margin-right: 8px;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
}
</style>
