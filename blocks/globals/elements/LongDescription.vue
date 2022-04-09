<template>
  <div class="long-description">
    <div class="main-wrapper">
      <h2 class="h4">{{ description.title }}</h2>
      <div class="text_wrapper" :class="{ details_is_open }">
        <div class="text_foreground"></div>
        <p class="long_description p2_light">
          {{ description.description }}
        </p>
      </div>
      <p class="a1 details" @click="openText" v-if="!details_is_open">
        {{ description.button }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LongDescription",

  data() {
    return {
      details_is_open: false,
    };
  },
  props: {
    description: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    openText() {
      this.details_is_open = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";

.long-description {
  padding: 140px 168px;
  // @include min(1441){
  //   background-color: white;
  // }
  @include max(lg) {
    padding: 124px 134px;
  }
  @include max(md) {
    padding: 88px 48px;
  }
  @include max(sm) {
    padding: 80px 18px;
  }
}
.text_wrapper {
  width: 759px;
  height: 199px;
  overflow: hidden;
  position: relative;
  @include min(1441) {
    width: 100%;
  }
  @include max(md) {
    width: 100%;
  }
}
.text_foreground {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: linear-gradient(
    180deg,
    rgba(251, 251, 251, 0) 78.32%,
    rgba(251, 251, 251, 0.9) 97.32%,
    #fbfbfb 100%
  );
  z-index: 10;
}
.long_description {
  line-height: 200%;
}
.details_is_open {
  overflow: hidden;
  height: auto;
  .text_foreground {
    background: transparent;
  }
}
.details {
  margin-top: 20px;
  width: fit-content;
  font-weight: 900;
  opacity: 0.6;
  border-bottom: 1px dashed #000000;
  cursor: pointer;
  cursor: pointer;
}
.h4 {
  @include mb-24;
  font-size: 36px;
  text-transform: capitalize;

  @include max(lg) {
    display: none;
  }

  @include max(sm) {
    display: block;
  }

  @include max(sm) {
    font-size: 26px;
    margin-bottom: 16px;
  }
}
</style>
