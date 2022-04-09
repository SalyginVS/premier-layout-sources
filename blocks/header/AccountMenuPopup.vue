<template>
  <div id="account-menu-popup" class="account-menu_popup popup">
    <div class="account-menu__header">
      <h6 class="font-cormorant">{{ data.nameUser }}</h6>
      <p class="a2">
        Вітаємо вас в <span class="gold_text italic">{{ data.club }}</span>
      </p>
    </div>
    <div class="account-menu__info-card">
      <div class="p2_light">
        <span class="description">Номер карти: </span>
        <span class="value">{{ data.cardNumber }}</span>
      </div>
      <div class="p2_light">
        <span class="description">Номер рахунку: </span>
        <span class="value">{{ data.accountNumber }}</span>
      </div>
      <div class="p2_light">
        <span class="description">Баланс балів: </span>
        <span class="value">{{ data.balanceOfPoints }}</span>
      </div>
    </div>
    <div class="account-menu__info-link">
      <nuxt-link
        class="p2_light"
        :to="item.link"
        v-for="item in data.accountLink"
        :key="item.id"
        >{{ item.name }}</nuxt-link
      >
    </div>
    <p class="account-menu__exit p2_light">Вийти з кабінету</p>
  </div>
</template>

<script>
export default {
  name: "AccountMenuPopup",
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.account-menu_popup {
  position: absolute;
  right: 0px;
  // top: calc(100% + 16px);
  top: calc(100% + 11px);
  padding: 27px 24px 25px 24px;
  width: 300px;
  cursor: auto;
  z-index: 1;
  &::after {
    right: 21px;
    top: -5px;
  }
  > div {
    &:not(:last-child) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
}
.account-menu__header {
  padding: 0 8px 25px 8px;
  margin-bottom: 26px;
  h6 {
    margin-bottom: 12px;
  }
  .a2 {
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.5);
  }
}
.account-menu__info-card {
  padding: 0 8px 25px 8px;
  margin-bottom: 26px;
  .p2_light {
    &:not(:last-child) {
      margin-bottom: 11px;
    }
  }

  .description {
    opacity: 0.8;
  }
  .value {
    font-weight: 450;
    font-family: AvenirNextCyrMedium;
  }
}
.account-menu__info-link {
  padding: 0 8px 25px 8px;
  margin-bottom: 26px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .p2_light {
    transition: opacity 0.3s ease-in-out;
    cursor: pointer;
    padding-right: 8px;
    &:hover {
      opacity: 0.8;
    }
    &:not(:last-child) {
      margin-bottom: 11px;
    }
  }
}
.account-menu__exit {
  padding: 0 8px;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
  display: block;
  width: max-content;
  &:hover {
    opacity: 0.8;
  }
}
</style>