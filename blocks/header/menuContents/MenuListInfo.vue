<template>
  <div id="menu-list-info">
    <div
      class="menu-list-info_wrapper"
      v-for="(items, index) in splitArray(data)"
      :key="index"
    >
      <nuxt-link
        class="h6 font-cormorant"
        :to="item.link"
        tag="a"
        v-for="item in items"
        :key="item.key"
        >{{ item.name }}</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuListInfo",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },

  data: () => ({}),
  methods: {
    splitArray(options) {
      const rowsInCol = 6;
      const parts = Math.ceil(options.length / rowsInCol);
      const result = [];

      for (let i = 1; i <= parts; i++) {
        result.push(options.slice((i - 1) * rowsInCol, i * rowsInCol));
      }

      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";
#menu-list-info {
  width: 100%;
  height: 100%;
  padding: 58px 74px 176px 74px;
  display: flex;

  @include max(lg) {
    padding: 46px 57px 57px 57px;
  }

  @include max(md) {
    padding: 32px 40px 32px 40px;
  }

  .menu-list-info_wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    &:not(:last-child) {
      margin-right: 88px;
    }
    .h6 {
      width: fit-content;
      line-height: 132%;
      transition: opacity 0.3s ease-in-out;

      @include max(lg) {
        font-size: 22px;
        line-height: 132%;
      }

      @include max(md) {
        font-size: 20px;
      }

      &:not(:last-child) {
        margin-bottom: 24px;
      }
      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>
