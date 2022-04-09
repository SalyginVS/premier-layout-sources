<template>
  <div class="tariff-room-info">
    <h6 v-if="!tariffActive">
      Найкраща гнучка ставка -
      <span class="italic gold_text">включений сніданок</span>
    </h6>
    <h6 v-else>Найкраща гнучка ставка - включений сніданок</h6>

    <ul class="condition">
      <li class="a2">кошти не повертається</li>
      <li class="a2">безкоштовний сніданок</li>
    </ul>
    <p class="p1 description">
      {{ text }}

      <span class="details" @click="openMoreInfoTariff">
        {{ isOpenMoreInfoTariff ? "Сховати" : "Детальніше" }}</span
      >
    </p>
    <div class="breakfast-options">
      <RadioButton
        v-for="data in radioOption"
        :key="data.id"
        :optionText="data.text"
        :optionValue="data.value"
        name="tariff"
      />
    </div>
  </div>
</template>

<script>
import AboutMainDescription from "~/blocks/globals/abouts/AboutMainDescription";
import TariffDetails from "~/blocks/select_by_room/TariffDetails";
export default {
  name: "TariffRoomInfo",
  props: {
    radioOption: {
      type: Array,
      default: [],
    },
    tariffActive: {
      type: Boolean,
      default: false,
    },
    buttonCloseMore: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpenMoreInfoTariff: false,
      text:
        "Тариф включає: - використання фітнес-центру та басейну, Wi-Fi Інтернет в номері, безкоштовна парковка, 20% ПДВ, телевізор, супутникові канали, ванна кімната, кондиціонер.Тариф включає: - використання фітнес-центру та басейну, Wi-Fi Інтернет в номері, безкоштовнар.",
    };
  },

  components: {
    AboutMainDescription,
    TariffDetails,
  },
  methods: {
    openMoreInfoTariff() {
      this.isOpenMoreInfoTariff = !this.isOpenMoreInfoTariff;
      this.$emit("MoreInfoTariff", { openValue: this.isOpenMoreInfoTariff });
      console.log("CHILD");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/blocks/hotel_finded_el.scss";
.tariff-room-info {
  width: 100%;
  padding-right: 75px;
  padding-bottom: 23px;
  position: relative;

  @include max(lg) {
    padding-right: 32px;
    padding-bottom: 0px;
  }

  @include max(sm) {
    padding-bottom: 24px;
    padding-right: 0px;
  }

  &::before {
    content: "";
    position: absolute;
    right: 0;
    top: -23px;
    width: 1px;
    height: calc(100% + 23px);
    display: inline-block;
    background-color: rgba(#000000, 0.1);

    @include max(lg) {
      top: 0px;
    }

    @include max(sm) {
      content: "";
      top: unset;
      bottom: 0;
      position: absolute;
      left: -4px;
      right: 0px;
      width: calc(100% + 8px);
      height: 1px;
      display: inline-block;
    }
  }
  h6 {
    margin-bottom: 24px;

    @include max(lg) {
      width: 80%;
      margin-bottom: 17px;
    }

    @include max(md) {
      margin-bottom: 12px;
    }

    @include max(sm) {
      margin-bottom: 18px;
    }
  }
  .details {
    cursor: pointer;
    margin-left: 6px;
    font-weight: 600;
    display: inline-block;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: 2px;
      width: 100%;
      height: 1px;
      background: black;
      display: block;
    }
  }
  .condition {
    width: 100%;
    margin-bottom: 24px;
    display: flex;
    justify-content: flex-start;

    @include max(md) {
      flex-wrap: wrap;
    }

    @include max(sm) {
      margin-bottom: 18px;
    }

    .a2 {
      text-transform: uppercase;
      color: rgba(#000000, 0.48);
      display: flex;
      align-items: center;

      &:not(:last-child) {
        margin-right: 14px;
        &::after {
          content: "";
          display: inline-block;
          width: 1px;
          height: 14px;
          margin-left: 14px;
          background-color: #000000;
          opacity: 0.2;

          @include max(md) {
            display: none;
          }
        }
        @include max(md) {
          margin-bottom: 8px;
        }
      }

      @include max(md) {
        width: 100%;
      }
    }
  }
  .description {
    margin-bottom: 50px;

    @include max(lg) {
      margin-bottom: 40px;
    }
    @include max(md) {
      margin-bottom: 32px;
    }
    .button-more {
      font-weight: 600;
      text-decoration: underline;
      cursor: pointer;
      transition: opacity 0.3s ease-in-out;
      &:hover {
        opacity: 0.7;
      }
      .open {
        display: inline-block;
      }
      .close {
        display: none;
      }
      &.buttonCloseMore {
        .open {
          display: none;
        }
        .close {
          display: inline-block;
        }
      }
    }
  }
  .breakfast-options {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @include max(lg) {
      flex-wrap: wrap;

      div {
        width: 100%;
      }
    }
    .radio-wrapper:not(:last-child) {
      margin-right: 40px;

      @include max(lg) {
        margin-bottom: 16px;
        margin-right: 0;
      }
      @include max(md) {
        margin-bottom: 12px;
        margin-right: 0;
      }
      @include max(sm) {
        margin-bottom: 24px;
        margin-right: 0;
      }
    }
  }
}
</style>
