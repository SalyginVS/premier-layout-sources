<template>
  <div
    class="special-offer-cards-list"
    :class="{ 'profile-page': showCardsListSlider }"
  >
    <div class="special-offer-cards-list__wrapper">
      <div class="header">
        <h4>Спеціальні пропозиції</h4>
        <UnderlineButton
          text="всі пропозиції"
          link="/"
        />
      </div>
      <div class="cards">
        <SpecialOfferCard v-for="card in cards" :key="card.id" :card="card" />
      </div>
      <div class="special-offer-cards-list__bottom-btn">
        <a class="a1" href="/">всі пропозиції</a>
      </div>
    </div>
    <DoubleSliderNew :double_slider_desc="double_slider_desc" />
  </div>
</template>

<script>
import SpecialOfferCard from "~/blocks/account/SpecialOfferCard";
import DoubleSliderNew from "~/blocks/globals/sliders/DoubleSliderNew";
import UnderlineButton from "~/components/UnderlineButton";

export default {
  name: "SpecialOfferCardsList",
  props: {
    cards: {
      type: Array,
      default: () => []
    },
    double_slider_desc: {
      type: Object,
      default: () => {}
    },
    showCardsListSlider: {
      type: Boolean,
      default: false
    },
    double_slider_desc: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({}),
  components: {
    SpecialOfferCard,
    DoubleSliderNew,
    UnderlineButton
  }
};
</script>
<style lang="scss">
.profile-page {
  .swiper-container {
    background: none;
  }
}
</style>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

@include max(sm) {
  display: none;
}

.special-offer-cards-list {
  .special-offer-cards-list__wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .header {
      width: 100%;
      margin-bottom: 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @include max(767) {
        justify-content: center;
      }
      .a1 {
        margin: 0;
        @include max(767) {
          display: none;
        }
      }
    }
    .cards {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      @include max(767) {
        flex-flow: row wrap;
        justify-content: center;
      }
      .special-offer-card {
        width: calc(100% / 2);
        @include max(767) {
          width: 100%;
        }
        &:not(:last-child) {
          margin-right: 24px;
          @include max(767) {
            margin-right: 0;
          }
        }
      }
      .special-offer-card + .special-offer-card {
        @include max(767) {
          margin-top: 20px;
        }
      }
    }
    .special-offer-cards-list__bottom-btn {
      display: none;
      @include max(767) {
        display: block;
        margin-top: 32px;
        text-decoration: underline;
      }
    }
  }
}
/**account-profile*/
.special-offer-cards-list {
  &.profile-page {
    @include max(767) {
      margin-top: 48px;
    }
    .special-offer-cards-list__wrapper {
      @include max(1023) {
        display: none;
      }
    }
    #double_slider_container {
      display: none;
      @include max(1023) {
        display: block;
      }
    }
  }
}

/**account-profile*/
</style>
