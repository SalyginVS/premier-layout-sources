<template>
  <div class="tariff-info-alert" v-if="open">
    <div class="header">
      <p class="p2_light night">Кількість ночей: 7</p>
      <p class="a1">сума по днях</p>
      <p class="p2_light sum">Загальна сума: 4700$</p>
    </div>
    <div class="main-conteiner">
      <div class="option" v-for="option in optionsPrice" :key="option.id">
        <p class="a1 date" v-html="option.date"></p>
        <div class="price">
          <p class="p2_light">{{ option.price }}</p>
          <span v-if="option.oldPrice" class="a2 old-price">{{
            option.oldPrice
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TariffInfoAlert",

  props: {
    open: {
      type: Boolean,
      default: false,
    },
    optionsPrice: {
      type: Array,
      default: () => [
        {
          id: 0,
          date: "02 <span>Квiт 2020</span>",
          price: "470 $",
          oldPrice: "555 $",
        },
        {
          id: 1,
          date: "03  <span>Квiт 2020</span>",
          price: "470 $",
        },
        {
          id: 2,
          date: "04  <span>Квiт 2020</span>",
          price: "470 $",
        },
        {
          id: 3,
          date: "05  <span>Квiт 2020</span>",
          price: "470 $",
        },
        {
          id: 4,
          date: "06  <span>Квiт 2020</span>",
          price: "0 $",
          oldPrice: "470 $",
        },
        {
          id: 5,
          date: "07  <span>Квiт 2020</span>",
          price: "0 $",
          oldPrice: "470 $",
        },
      ],
    },
  },
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/blocks/hotel_finded_el.scss";
.tariff-info-alert {
  position: relative;
  width: 100%;
  padding: 36px 40px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  &::before {
    content: "";
    position: absolute;
    top: -7px;
    right: 200px;
    width: 12px;
    height: 7px;
    display: block;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    background-color: #ffffff;
  }

  .header {
    width: 100%;
    padding-bottom: 32px;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    .p2_light {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      &.night {
        left: 0;
      }
      &.sum {
        right: 0;
      }
    }
  }
  .main-conteiner {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .option {
      padding: 8px 32px 8px 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      

      &:not(:last-child) {
        margin-right: 32px;
        border-right: 1px solid rgba(0, 0, 0, 0.1);
      }
      .date {
        margin-bottom: 16px;
        span {
          opacity: 0.6;
        }
      }
      .price {
        position: relative;
        display: flex;
        align-items: center;
        .old-price {
          margin-left: 8px;
          text-decoration-line: line-through;
          color: #b91d1d;
        }
      }
    }
  }
}
</style>