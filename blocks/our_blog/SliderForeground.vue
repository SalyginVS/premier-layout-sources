<template>
  <div class="big_sleider_foreground">
    <SaleLabel text="#16 spring 2019" />
    <div class="hall_container">
      <div
        class="hall_wrapper js_hide_cursor"
      >
        <p class="h5 hall_title">{{ slide.title }}</p>
        <div class="vertical_line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import SaleLabel from "~/components/SaleLabel";

export default {
  name: "SliderForeground",
  components: {
    SaleLabel
  },
  props: {
    slide: {
      type: Object,
      default:()=>({})
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.big_sleider_foreground {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 40px 48px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 59.81%,
    rgba(0, 0, 0, 0.56) 91.97%
  );

  @include max(lg) {
    padding: 40px;
  }

  @include max(md) {
    padding: 32px 40px;
  }

  @include max(sm) {
    padding: 20px;
  }
}
h4,
p {
  color: #ffffff;
}
h4 {
  cursor: pointer;
  pointer-events: all;
  width: fit-content;
}
.hall_container,
.hall_wrapper {
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
  pointer-events: all;

  @include max(sm) {
    flex-wrap: wrap;
  }
}
.vertical_line {
  margin: 14px;
  width: 1px;
  height: 14px;
  background: #ffffff;
  opacity: 0.5;

  @include max(sm) {
    margin: 5px;
  }
}
.hall_wrapper:last-of-type {
  .vertical_line {
    display: none;
  }
}
.hall_title {
  width: 80%;
}
</style>
