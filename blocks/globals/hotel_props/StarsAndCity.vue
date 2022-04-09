<template>
  <div class="stars_and_city" :class="{ dark }">
    <div class="stars">
      <img
        v-for="star in star_count"
        :key="star"
        src="~/static/images/light_star.svg"
        alt
      />
    </div>
    <div class="horizontal_line"></div>
    <p class="city a1">{{ city }}</p>
  </div>
</template>

<script>
export default {
  name: "StarsAndCity",
  props: {
    star_count: {
      type: Number,
      default: 5,
    },
    city: {
      type: String,
      default: "default",
    },
    dark: {
      type: Boolean,
      default: false
    },
    isCityPage: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";
.stars_and_city {
  display: flex;
  justify-content: flex-end;
  flex-direction: row-reverse;
  align-items: center;
  @include max(1024) {
    flex-flow: row-reverse;
    justify-content: flex-end;
  }

  .city {
    opacity: 0.5;
    color: #ffffff;
  }
}
.dark {
  .city {
    color: #000;
  }
  .horizontal_line {
    background: #000;
  }
}
.stars {
  @include max(1024) {
    display: flex;
  }
  img {
    width: 13px;
    margin-right: 8px;

    @include max(lg) {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }

    &:last-child {
      margin-right: 0px;
    }
  }
}
.horizontal_line {
  width: 32px;
  height: 1px;
  //margin: 0 20px;
  background: #ffffff;
  opacity: 0.2;
  @include max(1024) {
    width: 26px;
    margin: 0 16px;
  }
  @include max(768) {
    width: 20px;
    margin: 0 12px;
  }
}
</style>
