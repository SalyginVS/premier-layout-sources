<template>
  <div class="credit-card-slider">
    <div class="credit-card-slider__wrapper">
      <div class="swiper-container credit-card-swiper">
        <div class="swiper-wrapper">
          <div
            v-for="(card, index) in cards"
            class="swiper-slide card-item"
            :key="index"
          >
            <AddNewCardTemplate
              v-if="card.addNewCard"
              @addNewCard="addNewCard"
              :showAddCardButton="true"
            />
            <CreditCardTemplate
              v-if="!card.addNewCard"
              @closeCardTemplate="closeCardTemplate(card)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import CreditCardTemplate from "~/components/CreditCardTemplate";
import AddNewCardTemplate from "~/components/AddNewCardTemplate";
export default {
  name: "CreditCardSlider",
  data() {
    return {
      swiper: null
    };
  },
  components: {
    CreditCardTemplate,
    AddNewCardTemplate
  },
  props: {
    cardTemplate: {
      type: Array,
      default: () => {}
    },
    addNewCard: {
      type: Function,
      default: () => {}
    },
    closeCardTemplate: {
      type: Function,
      default: () => {}
    }
  },
  mounted() {
    this.swiper = new Swiper(".credit-card-swiper", {
      spaceBetween: 10,
      slidesPerView: 3,
      slidesOffsetAfter: 130,
      observer: true
    });
  },
  destroyed() {
    this.swiper.destroy();
  },
  computed: {
    cards() {
      return [...this.cardTemplate, { addNewCard: true }];
    }
  }
};
</script>
<style lang="scss" scoped>
.credit-card-slider__wrapper {
  width: 80vw;
}
.card-item {
  width: 125.99px !important;
}
</style>
