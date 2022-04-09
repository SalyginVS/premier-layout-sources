<template>
  <div
    class="hotel_bonus_info"
    @click="backdropClick"
    :class="{ open: openModal }"
  >
    <p class="a1 close" @click="$emit('closeModal')">
      Закрити
      <img src="~/static/icons/simple-cross.svg" alt="icon" />
    </p>

    <div class="info">
      <img class="main-image" src="~/static/images/room.jpg" alt="image" />
      <div class="content">
        <h5 class="title">
          {{ data.title }}
          <h5 class="italic">{{ data.hotelName }}</h5>
        </h5>
        <p class="a1">{{ data.location }}</p>
        <p class="p2_light">
          {{ data.description }} <span>{{ data.price }}</span>
        </p>
        <GoldButton :text="data.button" />
      </div>
    </div>
  </div>
</template>

<script>
import GoldButton from "~/components/GoldButton";

export default {
  name: "HotelBonusInfo",
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    openModal: {
      type: Boolean,
      default: false
    }
  },
  components: {
    GoldButton
  },
  methods: {
    backdropClick(e) {
      if (e.target.closest(".info")) {
        return;
      }
      this.$emit("closeModal");
    }
  },
  data() {
    return {
      //   openModal: null,
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.hotel_bonus_info {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 10001;
  background-color: rgba(#000000, 0.72);
  &.open {
    display: flex;
  }
  .close {
    position: absolute;
    top: 40px;
    right: 42px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    @include max(767) {
      opacity: 0.5;
    }
    @include max(425) {
      top: 133px;
    }
    &:hover {
      opacity: 0.7;
    }
    &.a1 {
      color: white;
    }
    img {
      margin-left: 16px;
    }
  }
  .info {
    display: flex;
    min-height: 535px;
    max-width: 876px;
    width: 61vw;
    background-color: #f0edea;
    @include max(1439) {
      width: 74vw;
      min-height: 460px;
    }
    @include max(1023) {
      width: 87.5vw;
      min-height: 409px;
    }
    @include max(425) {
      flex-flow: row wrap;
      min-height: 627px;
      width: calc(100vw - 8px);
    }
    .main-image {
      width: 50%;
      object-fit: cover;
      @include max(1439) {
        width: 51.3%;
      }
      @include max(425) {
        width: 100%;
      }
    }
    .content {
      width: 50%;
      padding: 108px 40px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      @include max(1439) {
        padding: 71px 32px;
      }
      @include max(1023) {
        padding: 62px 30px;
      }
      @include max(425) {
        padding: 40px 8px 8px 8px;
        width: 100%;
      }
      .title {
        margin-bottom: 20px;
        @include max(1439) {
          margin-bottom: 16px;
        }
      }
      .a1 {
        color: rgba(#000000, 0.5);
        margin-bottom: 34px;
        @include max(1439) {
          margin-bottom: 32px;
        }
        @include max(1023) {
          margin-bottom: 24px;
        }
        @include max(767) {
          margin-bottom: 32px;
        }
      }
      .p2_light {
        margin-bottom: 56px;
        @include max(1439) {
          margin-bottom: 48px;
        }
        @include max(1023) {
          margin-bottom: 40px;
        }
        @include max(767) {
          margin-bottom: 56px;
        }
        span {
          font-weight: 600;
        }
      }
      .gold_button {
        width: 100%;
        margin-top: auto;
      }
    }
  }
}
</style>
