<template>
  <div class="a1 sale_label">
    {{ text }}
    <img src="~/static/images/little_triangle.svg" />
  </div>
</template>

<script>
export default {
  name: "SaleLabel",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";

.sale_label {
  padding: 3px 14px 3px 20px;
  background: url("../static/images/little_label.png") no-repeat;
  background-size: 100% 100%;
  background-position: right;
  position: absolute;
  right: -5px;
  top: 14px;
  z-index: 500;
  @include max(lg) {
    padding: 4px 9px 4px 19px;
  }
  img {
    position: absolute;
    right: 0;
    bottom: -8px;
  }
}
h6,
p,
.sale_label {
  color: #ffffff;
}
</style>