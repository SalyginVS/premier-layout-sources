<template>
  <div class="big_sleider_foreground">
    <h4 class="js_hide_cursor">Софіївський Гранд холл</h4>
    <div class="hall_container">
      <div
        class="hall_wrapper js_hide_cursor"
        v-for="info in infos"
        :key="info"
      >
        <p class="p1">{{ info }}</p>
        <div class="vertical_line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderForeground",
  data: () => ({
    infos: ["Кімнат: 1", "Площа: 20 м2", "Двоспальне ліжко", "До 4 осіб"]
  })
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
h4 {
  font-size: 48px;
  @include max(1439) {
    font-size: 36px;
  }
  @include max(1023) {
    font-size: 28px;
  }
  @include max(767) {
    font-size: 26px;
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
.hall_container {
  @include max(767) {
    max-width: 185px;
  }
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
  @include max(1439) {
    margin: 12px;
  }
  @include max(1023) {
    margin: 8px;
  }
  @include max(sm) {
    margin: 5px;
  }
}
.hall_wrapper {
  &:nth-of-type(2) {
    .vertical_line {
      @include max(767) {
        display: none;
      }
    }
  }
}
.hall_wrapper:last-of-type {
  .vertical_line {
    display: none;
  }
}
</style>
