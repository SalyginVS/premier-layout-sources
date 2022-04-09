<template>
  <div
    class="a1 sale_label"
    :class="{
      inverse: inverse,
      'gray-status': grayStatus,
      small_label: small_label,
      'add-info': labelAddInfo,
    }"
  >
    <div class="main-shape"></div>
    <div class="shape"></div>
    <p class="sale_label__content" v-html="text"></p>
    <div
      class="question-icon"
      @click="
        () => {
          this.$emit('openRoomDetailsModal');
        }
      "
    >
      <span class="a1">?</span>
    </div>
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
    inverse: {
      type: Boolean,
      default: false,
    },
    labelAddInfo: {
      type: Boolean,
      default: false,
    },
    grayStatus: {
      type: Boolean,
      default: false,
    },
    small_label: {
      type: Boolean,
      default: false,
    },
    openRoomDetailsModal: {
      type: Function,
    },
  },
  created() {
    console.log(this.openRoomDetailsModal);
  },
};
</script>
<style lang="scss">
@import "../assets/scss/utils.scss";

.sale_label {
  .sale_label__content {
    span {
      font-size: 16px !important;
      @include max(lg) {
        font-size: 14px !important;
      }
      @include max(md) {
        font-size: 12px !important;
      }
    }
  }
  p {
    white-space: nowrap;
  }
}
</style>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";

.sale_label {
  //width: fit-content;
  /* rr */
  width: max-content;
  /* rr */
  padding: 17px 35px 15px 48px;
  position: absolute;
  right: -19px;
  top: 24px;
  z-index: 11;
  color: #ffffff;
  cursor: default;

  @include max(lg) {
    top: 16px;
    right: -10px;
    padding: 12px 21px 12px 37px;
  }
  @include max(sm) {
    padding: 10px 19px 10px 31px;
  }

  &.add-info {
    padding: 17px 59px 15px 48px;
    @include max(lg) {
      padding: 11px 38px 11px 31px;
    }
    @include max(md) {
      padding: 9px 36px 9px 29px;
    }
    .question-icon {
      position: absolute;
      top: 50%;
      right: 28px;
      transform: translateY(-50%);
      width: 17px;
      height: 17px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      background-color: rgba(#837663, 0.5);
      cursor: pointer;
      @include max(lg) {
        width: 14px;
        height: 14px;
        right: 12px;
      }
      @include max(md) {
        width: 13px;
        height: 13px;
        right: 13px;
      }
      span {
        position: absolute;
        left: 55%;
        top: 55%;
        transform: translate(-50%, -50%);
        color: white;
      }
    }
  }
  .question-icon {
    display: none;
  }

  .main-shape {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    clip-path: polygon(14% 0%, 100% 0, 100% 100%, 0 100%);
    background: linear-gradient(90deg, #d9bd94 -2.82%, #aa9474 147.7%);
  }
  .shape {
    position: absolute;
    right: 0;
    bottom: -14.5px;
    width: 20px;
    height: 15px;
    clip-path: polygon(100% 0, 0 0, 0 100%);
    background-color: #837663;
    z-index: -2;
    @include max(lg) {
      bottom: -9.5px;
      width: 10.5px;
      height: 10px;
    }
  }
  // .sale_label__content {
  //   @include max(sm) {
  //     margin-top: -6px;
  //   }
  // }
  &.inverse {
    left: -19px;

    .main-shape {
      clip-path: polygon(0 0, 86% 0%, 100% 100%, 0% 100%);
      background: linear-gradient(90deg, #d9bd94 -14.19%, #aa9474 107.49%);
    }
    .shape {
      right: unset;
      left: 0;
      clip-path: polygon(100% 0, 0 0, 100% 100%);
    }
  }
  &.gray-status {
    .main-shape {
      background: #b2b2b2;
    }
    .shape {
      background: #a5a5a5;
    }
  }
  &.small_label {
    top: 12px;
    right: -5px;
    padding: 4px 14px 4px 20px;
    .shape {
      bottom: -7.5px;
      width: 5px;
      height: 8px;
    }
  }
}
</style>
