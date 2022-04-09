<template>
  <div class="account-program-level">
    <h4 class="title">Рівні програми</h4>
    <div class="level-wrapper">
      <div class="level" v-for="item in data" :key="item.id">
        <h6 class="gold_text font-cormorant" :class="{ active: item.active }">
          {{ item.name }}
          <span class="a2" v-if="item.active"> Ви тут </span>
        </h6>
        <span class="line"></span>
      </div>
    </div>
    <div class="options-wrapper" v-if="data[0].options">
      <div
        class="options"
        v-for="(optionRows, index) in splitArray(data[0].options)"
        :key="index"
      >
        <p class="p1" v-for="(option, index) in optionRows" :key="index">
          <img src="~/static/icons/check.svg" alt="icon" />
          {{ option }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountProgramLevel",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    splitArray(options) {
      const rowsInCol = 5;
      const parts = Math.ceil(options.length / rowsInCol);
      const result = [];

      for (let i = 1; i <= parts; i++) {
        result.push(options.slice((i - 1) * rowsInCol, i * rowsInCol));
      }

      return result;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.account-program-level {
  width: 100%;
  display: flex;
  flex-direction: column;
  @include max(767) {
    position: relative;
    overflow-x: hidden;
  }
  .title {
    margin-bottom: 48px;
    @include max(1023) {
      margin-bottom: 32px;
    }
    @include max(767) {
      margin-bottom: 79px;
      text-align: center;
    }
  }
  .level-wrapper {
    width: 100%;
    margin-bottom: 23px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include max(767) {
      position: absolute;
      top: 40px;
      left: 47%;
      width: unset;
    }
    .level {
      position: relative;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      &:not(:last-child) {
        width: calc(100% / 3);
        @include max(767) {
          width: 170px;
        }
        .line {
          display: inline-block;
          width: 100%;
          margin: 0 24px;
          height: 1px;
          border-bottom: 1px dashed #cdcccb;
          @include max(1439) {
            margin: 0 16px;
          }
        }
      }
      .gold_text {
        display: flex;
        flex-direction: column;
        &.active {
          position: relative;
          top: 10px;
        }
        .a2 {
          margin-top: 10px;
          text-transform: uppercase;
          color: rgba(#000000, 0.4);
        }
      }
    }
  }
  .options-wrapper {
    width: 100%;
    padding: 52px 41px;
    display: flex;
    background-color: #ffffff;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
    border-radius: 2px;
    position: relative;
    .options {
      width: calc(100% / 3);
      display: flex;
      flex-direction: column;
      &:not(:last-child) {
        padding-right: 40px;
        margin-right: 40px;
        border-right: 1px solid rgba(#101010, 0.05);
        @include max(767) {
          border-right: none;
          margin: 0;
          padding: 0;
        }
      }
      .p1 {
        margin-bottom: 22px;
        display: flex;
        align-items: flex-start;
        color: rgba(#000000, 0.5);
        line-height: 132%;
        letter-spacing: 0.04em;
        @include max(767) {
          margin-bottom: 10px;
        }
        img {
          margin-right: 14px;
        }
      }
      @include max(767) {
        width: 100%;
        margin: 0;
        padding: 0;
      }
    }
    &::before {
      content: "";
      position: absolute;
      top: -5px;
      left: 10px;
      width: 10px;
      height: 10px;
      background-color: #ffffff;
      transform: rotate(45deg);
      @include max(767) {
        left: 50%;
      }
    }
    @include max(767) {
      flex-flow: row wrap;
      padding: 26px 26px;
    }
  }
}
</style>
