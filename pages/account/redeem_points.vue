<template>
  <div id="account-redeem_points">
    <div class="account-container">
      <div class="wrapper">
        <AccountGreet :data="greet" />
      </div>
      <AccountGraphPoints :data="points" :simpleGraph="true" />
    </div>
    <div class="account-container-info">
      <AccountSale :sale="sale" />
      <HotelBonusInfo
        @closeModal="CloseModal()"
        :data="modalBonusData"
        :openModal="openModalBonus"
      />
      <OneHotelOffersList
        @openModalBonus="OpenModalBonus()"
        :data="oneHotelOffers"
        :offers="oneHotelOffers.prizesBonus"
        :moreBonus="true"
        :isAccountRedeemPoints="isAccountRedeemPoints"
      />
    </div>
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import AccountGreet from "~/blocks/account/AccountGreet";
import AccountGraphPoints from "~/blocks/account/AccountGraphPoints";
import AccountSale from "~/blocks/account/AccountSale";
import OneHotelOffersList from "~/blocks/special_offers/one_hotel/OneHotelOffersList";
import HotelBonusInfo from "~/components/modals/HotelBonusInfo";

export default {
  components: {
    HeaderBlock,
    AccountGreet,
    AccountGraphPoints,
    AccountSale,
    OneHotelOffersList,
    HotelBonusInfo
  },
  methods: {
    OpenModalBonus() {
      this.openModalBonus = true;
    },
    CloseModal() {
      this.openModalBonus = false;
    }
  },

  data: () => ({
    openModalBonus: false,
    isAccountRedeemPoints: false,
    greet: {
      greet: "Костянтин Костянтинов",
      accountNumber: "MA-000049328",
      cardNumber: "Amber 1503053"
    },

    points: {
      count: "1034"
    },
    sale: "51AM",
    oneHotelOffers: {
      title: "Призи за бонуси",
      optionsBonus: ["тип пропозиції", "По готелях"],
      bonus: {
        start: "0",
        end: "5000"
      },
      prizesBonus: [
        {
          id: 0,
          img: require("~/static/images/offer_list1.jpg"),
          label: "500 бонусів",
          title: "Безкоштовна ніч у Premier Palace Hotel",
          middle_description: "Kyiv, Lviv, Kharkiv, Kherson, Odesa",
          button: "витратити бонуси"
        },
        {
          id: 1,
          img: require("~/static/images/offer_list2.jpg"),
          label: "500 бонусів",
          title: "Лета легка економія",
          middle_description: "Kyiv, Lviv, Kharkiv, Kherson, Odesa",
          button: "витратити бонуси"
        },
        {
          id: 2,
          img: require("~/static/images/offer_list3.jpg"),
          label: "500 бонусів",
          title: "Безкоштовна ніч у Premier Palace Hotel",
          middle_description: "Kyiv, Lviv, Kharkiv, Kherson, Odesa",
          button: "витратити бонуси"
        },
        {
          id: 3,
          img: require("~/static/images/offer_list4.jpg"),
          label: "500 бонусів",
          title: "Безкоштовна ніч у Premier Palace Hotel",
          middle_description: "Kyiv, Lviv, Kharkiv, Kherson, Odesa",
          button: "витратити бонуси",
          grayStatus: true
        },
        {
          id: 4,
          img: require("~/static/images/offer_list5.jpg"),
          label: "500 бонусів",
          title: "Лета легка економія",
          middle_description: "Kyiv, Lviv, Kharkiv, Kherson, Odesa",
          button: "витратити бонуси",
          grayStatus: true
        },
        {
          id: 5,
          img: require("~/static/images/offer_list1.jpg"),
          label: "500 бонусів",
          title: "Безкоштовна ніч у Premier Palace Hotel",
          middle_description: "Kyiv, Lviv, Kharkiv, Kherson, Odesa",
          button: "витратити бонуси",
          grayStatus: true
        }
      ]
    },
    modalBonusData: {
      title: "Безкоштовна ніч у ",
      hotelName: "Premier Palace Hotel",
      location: "Kyiv, Lviv, Kharkiv, Kherson, Odesa",
      description:
        "Ви будете отримувати на свій рахунок бонуси за всі ваші витрати в наших готелях. Подорожуйте в своє задоволення.",
      price: "Стоимость услуги: 450 бонусоів",
      button: "обміняти 450 бонусів"
    }
  }),
  created() {
    this.isAccountRedeemPoints = !this.isAccountRedeemPoints;
  },
  destroyed() {
    this.isAccountRedeemPoints = !this.isAccountRedeemPoints;
  }
};
</script>

<style lang="scss">
#account-redeem_points {
  .offers_container {
    margin-bottom: 0;
    &.container {
      padding: 0;
    }
  }
}
</style>
<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
#account-redeem_points {
  .account-container {
    width: 100%;
    display: flex;
    align-items: flex-end;
    @include max(1023){
      padding-right:48px;
    }
    @include max(767){
      align-items:flex-start;
      padding-right: 18px;
    }
    .wrapper {
      display: flex;
      flex-direction: column;
      .account-greet {
        padding-left: 100px;
        margin-bottom: 40px;
        @include max(1439) {
          padding-left: 50px;
          margin-bottom: 32px;
        }
        @include max(767){
          padding-left:18px;
          margin-bottom:12px;
        }
      }
    }
    .account-graph-points {
      margin-left: auto;
      padding-bottom: 10px;
      margin-bottom: -40px;
    }
  }
  .account-container-info {
    padding-left: 84px;
    @include pb-140;
    @include max(1439){
      padding-left:50px;
      padding-bottom:124px;
    }
    @include max(1023){
      padding-bottom:112px;
      padding-right:48px;
    }
    @include max(767){
      padding:0 18px 80px 18px;
    }
    .account-sale {
      padding: 0 15px 56px 15px;
      margin-bottom: 96px;
      border-bottom: 1px solid rgba(#000000, 0.1);
      @include max(1439){
        padding:0 15px 40px 15px;
        margin-bottom:72px;
      }
      @include max(1023){
        margin-bottom:64px;
      }
    }
  }
}
</style>
