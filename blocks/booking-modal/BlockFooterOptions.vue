<template>
  <div class="footer-options">
    <div class="option" v-for="item in data" :key="item.id">
      <img :src="item.srcImg" alt="icon" />
      <span class="a1">{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockFooterOptions",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.footer-options {
  margin: 0 auto;
  width: 100%;
  max-width: 1149px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include max(lg) {
    max-width: 839px;
  }
  @include max(md) {
    margin: 0 27px;
    max-width: fit-content;
  }
  @include max(720) {
    display: none;
  }

  .option {
    margin-right: 10px;
    display: flex;
    align-items: center;
    img {
      margin-right: 16px;
    }
    .a1 {
      color: rgba(#000000, 0.3);
    }
  }
}
</style>
