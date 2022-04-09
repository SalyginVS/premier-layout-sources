<template>
  <nuxt-link
    to="/"
    class="special-offer-card"
    :style="{
      backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 46.58%, rgba(0, 0, 0, 0.4) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 46.67%, rgba(0, 0, 0, 0.6) 70.54%), url(${card.img})`,
    }"
  >
    <SaleLabel :text="card.label" />

    <div class="card-content">
      <h6>{{ card.title }}</h6>
      <p class="p1">{{ card.description }}</p>
      <p class="p1 add-desc">{{ card.addDesc }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "SpecialOfferCard",
  props: {
    card: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.special-offer-card {
  //   width: 450px;
  position: relative;
  min-height: 590px;
  padding: 0 24px 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  @include max(1439) {
    min-height: 416px;
  }

  .sale_label {
    position: absolute;
    top: 20px;
    right: -20px;
    @include max(lg) {
      right: -10px;
      padding: 6px 21px 6px 37px;
    }

    @include max(md) {
      display: none;
    }
  }
  .card-content {
    h6,
    .p1 {
      color: #ffffff;
    }
    h6 {
      margin-bottom: 20px;

      @include max(lg) {
        font-size: 16px;
        margin-bottom: 10px;
      }
      @include max(md) {
        font-size: 12px;
        margin-bottom: 8px;
      }
    }
    .p1 {
      @include max(lg) {
        line-height: 150% !important;
      }
      @include max(md) {
        display: none;
      }
      &.add-desc {
        margin-top: 32px;
        opacity: 0.5;

        @include max(lg) {
          margin-top: 8px !important;
          font-size: 12px !important;
        }
        @include max(md) {
          display: block;
        }
        @include max(720) {
          font-size: 9px !important;
        }
      }
    }
  }
}
</style>
