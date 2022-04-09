<template>
  <div  id="menu-special-offers">
    <SpecialOfferCard v-for="card in cards" :key="card.id" :card="card" />
  </div>
</template>

<script>
import SpecialOfferCard from "~/blocks/account/SpecialOfferCard";

export default {
  name: "MenuSpecialOffers",
  components: {
    SpecialOfferCard,
  },
  data: () => ({
    cards: [
      {
        id: 0,
        img: require("~/static/images/comparison1.jpg"),
        label: "романтична вечеря",
        title: "Лета легка економія",
        description:
          "Базові сценарії поведінки користувачів, ініційовані виключно синтетично.",
        addDesc: "Київ, Premier Palace Hotel",
      },
      {
        id: 1,
        img: require("~/static/images/comparison2.jpg"),
        label: "Знижка до 15%",
        title: "Лета легка економія",
        description:
          "Базові сценарії поведінки користувачів, ініційовані виключно синтетично.",
        addDesc: "Київ, Premier Palace Hotel",
      },
    ],
  }),
};
</script>
<style lang="scss" >


#menu-special-offers {
  .special-offer-card {
    .p1 {
      font-family: AvenirNextCyrLight;
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 180%;
      letter-spacing: 0.06em;
      color: #ffffff;
      &.add-desc {
        margin-top: 24px;
        font-size: 14px;
        line-height: 196%;
        letter-spacing: 0.04em;
      }
    }
    .sale_label {
      .main-shape {
        clip-path: polygon(6% 0%, 100% 0, 100% 100%, 0 100%);
        background: linear-gradient(90deg, #d9bd94 -2.82%, #aa9474 147.7%);
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";
#menu-special-offers {
  width: 100%;
  height: auto;
  padding: 40px 40px 157px 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .special-offer-card {
    max-width: 321px;
    min-height: 349px;
    padding: 0 24px 16px 24px;

    @include max(lg){
      box-sizing: border-box;
      max-width: 218px;
      min-height: 236px;
    }

    @include max(md){
      max-width: 207px;
      min-height: 224px;
      padding: 0 12px 12px 12px;
    }

    &:not(:last-child) {
      margin-right: 8px;
    }


  }
}
</style>
