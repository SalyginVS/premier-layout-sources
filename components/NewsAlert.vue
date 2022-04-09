<template>
  <div class="news-alert" :class="{ light_style }" v-if="showAlert">
    <div class="alert_wrapper">
      <p class="p1" v-html="news"></p>
      <svg
        class="icon-close"
        @click="closeAlert"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <rect
            width="16.1992"
            height="0.771388"
            transform="matrix(0.707108 -0.707106 0.707108 0.707106 0 11.4546)"
            fill="black"
          />
          <rect
            width="0.771388"
            height="16.1992"
            transform="matrix(0.707108 -0.707106 0.707108 0.707106 0 0.54541)"
            fill="black"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsAlert",
  props: {
    news: {
      type: String,
    },
    light_style: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showAlert: true,
    };
  },
  methods: {
    closeAlert() {
      this.showAlert = false;
    },
  },
};
</script>
<style lang="scss">
.news-alert {
  .alert_wrapper {
    a {
      position: relative;
      cursor: pointer;
      display: inline-block;
      width: fit-content;
      &:after {
        content: "";
        position: absolute;
        bottom: 2px;
        left: 0;
        width: 100%;
        height: 1px;
        display: inline-block;
        background-image: url("../static/icons/text-line.svg");
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.news-alert {
  position: absolute;
  top: 87px;
  width: calc(100%);
  padding: 13px 0 14px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f1ef;
  z-index: 50;
}
.news-alert,
.alert_wrapper {
  display: flex;
  align-items: center;
  .icon-close {
    width: 12px;
    height: 12px;
    margin: 0 8px;
    padding: 4px;
    box-sizing: content-box;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  }
}

.p1 {
  color: rgba(#000000, 0.5);
}

.light_style {
  p,
  path {
    color: #ffffff;
    stroke: #ffffff;
  }
}
</style>
