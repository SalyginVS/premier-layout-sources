<template>
  <div id="account-profile">
    <div class="account-container">
      <div class="wrapper">
        <AccountGreet :data="greet" />
      </div>
      <AccountGraphPoints :data="points" :simpleGraph="true" />
    </div>

    <div class="account-container-info">
      <AccountBonusInfo :data="bonusInfo">
        <template v-slot:title="{ item }">
          <p>
            {{ item.title }}
            <span v-if="item.titleValue">{{ item.titleValue }}</span>
          </p>
        </template>
        <template v-slot:description="{ item }">
          <p>
            {{ item.description }}
            <span v-if="item.descriptionValue">{{
              item.descriptionValue
            }}</span>
          </p>
        </template>
      </AccountBonusInfo>
      <AccountBookingTable :tableData="tableData" />

      <HotelBonusInfo
        @closeModal="CloseModal()"
        :data="modalBonusData"
        :openModal="openModalBonus"
      />

      <OneHotelOffersList
        @openModalBonus="OpenModalBonus()"
        :data="oneHotelOffers"
        :offers="oneHotelOffers.prizesBonus"
        :isProfileCorporateClub="isProfileCorporateClub"
      />

      <SpecialOfferCardsList
        :cards="cardsData"
        :showCardsListSlider="showCardsListSlider"
        :double_slider_desc="double_slider_desc"
      />
    </div>
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import HotelBonusInfo from "~/components/modals/HotelBonusInfo";
import AccountGreet from "~/blocks/account/AccountGreet";
import AccountGraphPoints from "~/blocks/account/AccountGraphPoints";
import OneHotelOffersList from "~/blocks/special_offers/one_hotel/OneHotelOffersList";
import AccountBonusInfo from "~/blocks/account/AccountBonusInfo";

export default {
  components: {
    HeaderBlock,
    HotelBonusInfo,
    AccountGreet,
    AccountGraphPoints,
    OneHotelOffersList,
    AccountBonusInfo
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
    isProfileCorporateClub: false,
    showCardsListSlider: true,
    greet: {
      greet: "Костянтин Костянтинов",
      accountNumber: "MA-000049328",
      cardNumber: "Amber 1503053"
    },
    points: {
      count: "1034"
    },

    oneHotelOffers: {
      title: "Призи за бонуси",
      more: "всі Призи",
      linkMore: "/account/redeem_points",
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
    bonusInfo: {
      subtitle: "Як заробити бали",
      title: "Ви отримаєте 1 бонус за кожну ніч",
      titleHotel: "в готелях Premier Hotels and Resorts",
      description:
        "Ранні заїзди, догляд за вашими речами, кращі акційні пропозиції, знижки та, звичайно ж, ночі в подарунок! Ви будете отримувати на свій рахунок бонуси за всі ваші витрати в наших готелях. Подорожуйте в своє задоволення, отримуйте та бонуси!",
      tableData: {
        hideHeader: true,
        header: [
          {
            tdSlotName: "title"
          },
          {
            tdSlotName: "description"
          }
        ],
        data: [
          {
            id: 0,
            title: "1 бонус за кожні ",
            titleValue: "100 грн",
            description:
              "Від фінального бюджета заходу, конференції або банкета в ",
            descriptionValue:
              "Premier Hotel Palazzo, Premier Geneva Hotel, Premier Compass Hotel Kherson, Premier Hotel Pochaiv"
          },
          {
            id: 1,
            title: "1 бонус за кожні ",
            titleValue: "200 грн",
            description:
              "Від фінального бюджета заходу, конференції або банкета в готелях гостиницах ",
            descriptionValue: "Premier Hotel Aurora,  Premier Hotel Cosmopolit"
          },
          {
            id: 2,
            title: "1 бонус за кожні ",
            titleValue: "300 грн",
            description:
              "Від фінального бюджета заходу, конференції або банкета в готелях ",
            descriptionValue:
              "Premier Hotel Dnister,  Premier Hotel Shafran, Premier Hotel Abri"
          },
          {
            id: 3,
            title: "1 бонус за кожні ",
            titleValue: "400 грн",
            description:
              "Від фінального бюджета заходу, конференції або банкета в готелі ",
            descriptionValue: "Premier Hotel Lybid"
          },
          {
            id: 4,
            title: "1 бонус за кожні ",
            titleValue: "500 грн",
            description:
              "Від фінального бюджета заходу, конференції або банкета в готелях ",
            descriptionValue: "Premier Palace Hotel и Premier Hotel Rus"
          }
        ]
      }
    },
    tableData: {
      title: "Майбутні бронювання",
      more: "всі бронювання",
      linkMore: "/account/reservations",
      header: [
        {
          title: "№",
          prop: "number"
        },
        {
          title: "Готель і місто",
          prop: "hotel"
        },
        {
          title: "Заїзд - виїзд",
          prop: "date"
        },
        {
          title: "статус",
          prop: "status",
          tdClass: row => {
            return { [row.statusType]: true };
          }
        },
        {
          title: "",
          prop: "more"
        }
      ],
      data: [
        {
          id: 0,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          date: "01 травня 12:00 - 07 травня 18:00",
          status: "Ожидают оплаты",
          statusType: "wait",
          more: "Детальніше"
        },
        {
          id: 1,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          date: "01 травня 12:00 - 07 травня 18:00",
          status: "Заброньовано",
          statusType: "done",
          more: "Детальніше"
        },
        {
          id: 2,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          date: "01 травня 12:00 - 07 травня 18:00",
          status: "Заброньовано",
          statusType: "done",
          more: "Детальніше"
        },
        {
          id: 3,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          date: "01 травня 12:00 - 07 травня 18:00",
          status: "Заброньовано",
          statusType: "done",
          more: "Детальніше"
        }
      ]
    },

    cardsData: [
      {
        id: 0,
        img: require("~/static/images/comparison1.jpg"),
        label: "романтична вечеря",
        title: "Лета легка економія",
        description:
          "Базові сценарії поведінки користувачів, ініційовані виключно синтетично, оголошені такими, що порушують.",
        addDesc: "Київ, Premier Palace Hotel"
      },
      {
        id: 1,
        img: require("~/static/images/comparison2.jpg"),
        label: "Знижка до 15%",
        title: "Лета легка економія",
        description:
          "Базові сценарії поведінки користувачів, ініційовані виключно синтетично, оголошені такими, що порушують.",
        addDesc: "Київ, Premier Palace Hotel"
      }
    ],
    modalBonusData: {
      title: "Безкоштовна ніч у ",
      hotelName: "Premier Palace Hotel",
      location: "Kyiv, Lviv, Kharkiv, Kherson, Odesa",
      description:
        "Ви будете отримувати на свій рахунок бонуси за всі ваші витрати в наших готелях. Подорожуйте в своє задоволення.",
      price: "Стоимость услуги: 450 бонусоів",
      button: "обміняти 450 бонусів"
    },
    double_slider_desc: {
      little_title: "НАШІ Спеціальні пропозиції",
      big_title: "Спеціальні пропозиції",
      link: "всі пропозиції",
      filters: [
        {
          id: 0,
          name: "тип спецпропозиції",
          type: "",
          options: [
            {
              title: "Event1 ",
              value: "Event1"
            },
            {
              title: "Event2",
              value: "Event2"
            },
            {
              title: "Event3",
              value: "Event3"
            },
            {
              title: "Event4",
              value: "Event4"
            },
            {
              title: "Event5",
              value: "Event5"
            }
          ]
        }
      ]
    }
  }),
  mounted() {
    this.$store.commit("setFooterInsta", false);
    this.$store.commit("user/setUserClub", true);
    this.$store.commit("setUserStatusIcon", true);
    this.isProfileCorporateClub = !this.isProfileCorporateClub;
  },
  destroyed() {
    this.$store.commit("setFooterInsta", true);
    this.$store.commit("user/setUserClub", false);
    this.$store.commit("setUserStatusIcon", false);
    this.isProfileCorporateClub = !this.isProfileCorporateClub;
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
#account-profile {
  .account-container {
    width: 100%;
    display: flex;
    align-items: flex-end;
    margin-bottom: 56px;
    @include max(1439) {
      margin-bottom: 40px;
    }
    @include max(1023) {
      margin-bottom: 32px;
    }
    @include max(767) {
      align-items: flex-start;
    }
    .wrapper {
      display: flex;
      flex-direction: column;
      .account-greet {
        padding-left: 100px;
        margin-bottom: 56px;
        @include max(1023) {
          padding-left: 48px;
        }
        @include max(767) {
          padding-left: 18px;
          margin-bottom: 33px;
        }
      }
    }
    .account-graph-points {
      margin-left: auto;
      padding-bottom: 10px;
      @include max(1023) {
        margin-right: 48px;
      }
      @include max(767) {
        margin-right: 18px;
      }
    }
  }
  .account-container-info {
    padding-left: 84px;
    @include max(1023) {
      padding: 0;
    }

    .account-bonus-info {
      padding-top: 96px;
      margin-bottom: 96px;
      border-top: 1px solid rgba(#000000, 0.1);
      @include max(1439) {
        margin-bottom: 72px;
      }
      @include max(1023) {
        padding-top: 64px;
        width: calc(100vw - 96px);
        margin: 0 auto 64px auto;
      }
      @include max(767) {
        padding-top: 48px;
        width: calc(100vw - 36px);
        margin-bottom: 48px;
      }
    }
    .offers_container {
      &.container {
        padding: 0;
        @include max(1023) {
          width: calc(100vw - 96px);
          margin-left: auto;
          margin-right: auto;
        }
        @include max(767) {
          width: calc(100vw - 36px);
        }
      }
    }
    .account-booking-table {
      margin-bottom: 96px;
      @include max(1439) {
        margin-bottom: 72px;
      }
      @include max(1023) {
        width: calc(100vw - 96px);
        margin: 0 auto 64px auto;
      }
      @include max(767) {
        width: calc(100vw - 36px);
        margin: 0 auto;
      }
      &.big-margin {
        @include mb-140;
      }
    }
    .special-offer-cards-list {
      margin-bottom: 140px;
      @include max(1439) {
        margin-bottom: 124px;
      }
      @include max(1023) {
        margin-bottom: 0;
      }
      @include max(767) {
        margin-bottom: 112px;
      }
    }
  }
}
</style>
