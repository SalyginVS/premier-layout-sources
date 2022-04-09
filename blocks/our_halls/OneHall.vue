<template>
  <div
    class="one_hall_container hotel_finded_el"
    :class="{ halls_page: isHallsPage }"
  >
    <LittleSlider :slides="hall.slides" :isHallsPage="isHallsPage" />
    <div class="one_hall">
      <h5 class="one_hall__main_title">Софіївський Гранд холл</h5>
      <div class="one_hall__statistic statistic">
        <p class="a1 statistic__field">
          <span class="statistic__name">Площа:</span>
          <span class="statistic__value">350, м²</span>
        </p>
        <p class="a1 statistic__field">
          <span class="statistic__name">місткість:</span>
          <span class="statistic__value">до 250</span>
        </p>
      </div>
      <p class="p1 one_hall__description">
        Поруч з Софіївським Гранд Холом розташовані два невеликих зали з
        вікнами, що вихо-дять на бульвар Тараса Шевченка. Ці приміщення також
        можуть знайти широке застосування.
      </p>
      <div class="one_hall__schemes">
        <img
          class="one_hall__schema"
          src="~/static/images/hall_scheme_1.svg"
          alt
        />
        <img
          class="one_hall__schema"
          src="~/static/images/hall_scheme_2.svg"
          alt
        />
        <img
          class="one_hall__schema"
          src="~/static/images/hall_scheme_3.svg"
          alt
        />
      </div>
      <p class="a1 one_hall__detail_button">детально про зал</p>
      <div class="gold_wide_button">
        <p class="a1">перевірити ціни</p>
      </div>
    </div>
  </div>
</template>

<script>
import LittleSlider from "~/blocks/globals/sliders/LittleSlider";

export default {
  name: "OneHall",
  props: {
    hall: {
      type: Object,
      default: () => ({
        slides
      })
    },
    isHallsPage: {
      type: Boolean,
      default: false
    }
  },
  components: {
    LittleSlider
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/blocks/hotel_finded_el.scss";
@import "../../assets/scss/utils.scss";

.one_hall_container {
  background: #f0edea;
  &.halls_page {
    // @include max(1024) {
    //   min-height: 466px;
    //   // height: 466px;
    // }
    @include max(1023) {
      min-height: 432px;
    }
    @include max(767) {
      flex-flow: row wrap;
    }

    // max-width:1104px;
    // margin:0 auto;
    .one_hall {
      @include max(1024) {
        background-color: #ffffff;
        padding: 24px 32px 32px 32px;
        @include max(768) {
          padding: 24px;
        }
        &__main_title {
          @include max(375) {
            margin-bottom: 24px;
          }
        }
        &__statistic {
          margin-bottom: 24px;
          @include max(375) {
            margin-bottom: 18px;
          }
        }
        &__description {
          margin-bottom: 25px;
        }
        &__schemes {
          margin-bottom: 25px;
        }
        &__detail_button {
          margin-bottom: 43px;
          @include max(375) {
            margin-bottom: 24px;
          }
        }
      }
      @include max(768) {
        &__statistic {
          flex-flow: row wrap;
          .statistic__field + .statisticc__field {
            margin-top: 8px;
          }
        }
        &__schemes {
          @include max(768) {
            .one_hall__schema + .one_hall__schema {
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
  &.halls_page + &.halls_page {
    margin-top: 24px;
  }
}
.one_hall {
  width: 426px;
  padding: 32px 40px 40px;
  flex-grow: 1;
  height: fit-content;
  &__main_title {
    margin-bottom: 20px;
  }
  &__main_title {
    margin-bottom: 20px;
  }
  &__statistic {
    margin-bottom: 34px;
    display: flex;
  }
  &__description {
    margin-bottom: 31px;
  }
  &__schemes {
    margin-bottom: 38px;
  }
  &__schema {
    @include mr-40;
  }
  &__detail_button {
    border-bottom: 1px dashed #000000;
    width: fit-content;
    cursor: pointer;
    margin-bottom: 64px;
    transition: opacity 0.5s ease;

    &:hover {
      opacity: 0.5;
    }
  }
}
.statistic {
  &__name {
    opacity: 0.5;
  }
  &__field {
    margin-right: 20px;
  }
}
.gold_wide_button {
  width: 100%;
  margin: auto;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    background-image: url("../../static/images/gold_for_button.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    transition: opacity 0.5s ease;
  }

  p {
    color: #ffffff;
    transition: all 0.5s ease;
    position: relative;
    z-index: 2;
  }

  &:hover {
    @include min(900) {
      background: white;
      background-size: cover;
      transition-duration: 0.5s;

      .a1 {
        background: url("../../static/images/gold_for_button.svg");
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      &:hover:before {
        opacity: 0;
      }
    }
  }


}
</style>
