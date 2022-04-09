<template>
  <div id="account-profile">
    <div class="account-container">
      <div class="wrapper">
        <AccountGreet :data="greet" :isAccountProfile="isAccountProfile" />
        <AlertLevel :data="level" :points="points" />
      </div>
      <AccountGraphPoints :data="points" :isAccountProfile="isAccountProfile" />
    </div>
    <div class="account-container-info">
      <AccountSale :sale="sale" />
      <AccountProgramLevel :data="programLevel" />
      <div class="account-change-level">
        <Button :text="'підняти рівень'" />
        <p class="a1 button-desc">Підвищити рівень картки за 2000 балів</p>
      </div>
      <HotelBonusInfo
        @closeModal="CloseModal()"
        :data="modalBonusData"
        :openModal="openModalBonus"
      />

      <OneHotelOffersList
        @openModalBonus="OpenModalBonus()"
        :data="oneHotelOffers"
        :offers="oneHotelOffers.prizesBonus"
        :isAccountProfile="isAccountProfile"
      />

      <AccountBookingTable :tableData="tableData" />
      <SpecialOfferCardsList
        :cards="cardsData"
        :double_slider_desc="double_slider_desc"
        :showCardsListSlider="showCardsListSlider"
      />
      <AccountBookingTable :tableData="tableCertificate" :bigMargin="true" :isSertificate="true"/>
    </div>
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import HotelBonusInfo from "~/components/modals/HotelBonusInfo";
import AccountGreet from "~/blocks/account/AccountGreet";
import AlertLevel from "~/blocks/account/AlertLevel";
import AccountGraphPoints from "~/blocks/account/AccountGraphPoints";
import AccountSale from "~/blocks/account/AccountSale";
import AccountProgramLevel from "~/blocks/account/AccountProgramLevel";
import OneHotelOffersList from "~/blocks/special_offers/one_hotel/OneHotelOffersList";
import AccountBookingTable from "~/blocks/account/AccountBookingTable";

export default {
  components: {
    HeaderBlock,
    HotelBonusInfo,
    AccountGreet,
    AlertLevel,
    AccountGraphPoints,
    AccountSale,
    AccountProgramLevel,
    OneHotelOffersList,
    AccountBookingTable
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
    isAccountProfile: false,
    isSertificate:true,
    showCardsListSlider:true,
    greet: {
      greet: "Ласкаво просимо,",
      name: "Костянтин Костянтинов",
      accountNumber: "MA-000049328",
      cardNumber: "Amber 1503053"
    },
    level: {
      name: "Amber",
      needPoints: "476"
    },
    points: {
      count: "1024",
      nextLevel: "1500"
    },
    sale: "51AM",
    programLevel: [
      {
        id: 0,
        name: "Amber",
        active: true,
        options: [
          "Возможность накапливать бонусы ",
          "Возможность обменивать бонусы на подарки ",
          "Скидка на проживание в отелях - 10% ",
          "Скидка на услуги баров и ресторанов - 10% ",
          "Выделенная линия службы поддержки ",
          "Эксклюзивные предложения для участников программы ",
          "Возможность обменивать бонусы на предложения партнеров",
          "Персональный кабинет ",
          "Мобильное приложение",
          "Бесплатная вода при заезде ",
          "Срок жизни бонусов 24 мес.",
          "Специальное предложение ко дню рождения участника",
          "Участие ребенка в  Premier Kids Club (0-12 лет)",
          "Бесконечный срок жизни статуса"
        ]
      },
      {
        id: 1,
        name: "Pearl"
      },
      {
        id: 2,
        name: "Sapphire"
      },
      {
        id: 3,
        name: "Diamond"
      }
    ],
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
          button: "витратити бонуси"
        },
        {
          id: 4,
          img: require("~/static/images/offer_list5.jpg"),
          label: "500 бонусів",
          title: "Лета легка економія",
          middle_description: "Kyiv, Lviv, Kharkiv, Kherson, Odesa",
          button: "витратити бонуси"
        },
        {
          id: 5,
          img: require("~/static/images/offer_list1.jpg"),
          label: "500 бонусів",
          title: "Безкоштовна ніч у Premier Palace Hotel",
          middle_description: "Kyiv, Lviv, Kharkiv, Kherson, Odesa",
          button: "витратити бонуси"
        }
      ]
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
    },
    tableCertificate: {
      title: "E-сертифікати",
      more: "всі сертифікати",
      linkMore: "/account/e_sertificate",
      header: ["№", "Готель і місто", "назва", "діє до", "статус"],

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
          title: "назва",
          prop: "certificate"
        },
        {
          title: "діє до",
          prop: "workTo"
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
          certificate: "Сертифікат на ніч",
          workTo: "01.05 12:00",
          status: "Новий",
          statusType: "new",
          more: "Детальніше"
        },
        {
          id: 1,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          certificate: "Сертифікат на ніч",
          workTo: "01.05 12:00",
          status: "Новий",
          statusType: "new",
          more: "Детальніше"
        },
        {
          id: 2,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          certificate: "Сертифікат на ніч",
          workTo: "01.05 12:00",
          status: "Використано",
          statusType: "used",
          more: "Детальніше"
        },
        {
          id: 3,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          certificate: "Сертифікат на ніч",
          workTo: "01.05 12:00",
          status: "Використано",
          statusType: "used",
          more: "Детальніше"
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
  mounted() {
    this.$store.commit("setFooterInsta", false);
    this.$store.commit("setUserStatusIcon", true);
    this.isAccountProfile = !this.isAccountProfile;
  },
  destroyed() {
    this.$store.commit("setFooterInsta", true);
    this.$store.commit("setUserStatusIcon", false);
    this.isAccountProfile = !this.isAccountProfile;
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
#account-profile {
  @include max(767) {
    margin-top: 75px;
  }
  .account-container {
    width: 100%;
    margin-bottom: 56px;
    display: flex;
    align-items: flex-end;
    .wrapper {
      display: flex;
      flex-direction: column;
      .account-greet {
        padding-left: 100px;
        margin-bottom: 56px;
        @include max(1439) {
          padding-left: 55px;
          margin-bottom: 48px;
        }
        @include max(1023) {
          padding-left: 48px;
          margin-bottom: 34px;
        }
        @include max(767) {
          padding: 0 20px;
        }
      }
      @include max(767) {
        margin-top: 40px;
        width: 100%;
      }
    }
    .account-graph-points {
      margin-left: auto;
      padding-bottom: 10px;
      @include max(1023) {
        margin-left: 85px;
      }
      @include max(767) {
        margin-left: 0px;
      }
    }
    @include max(767) {
      flex-flow: row wrap-reverse;
      justify-content: center;
    }
  }
  .account-container-info {
    padding-left: 84px;
    @include max(1439) {
      padding-left: 50px;
    }
    @include max(1023) {
      // padding: 0 50px;
      padding:0;
      width: 100%;
    }
    @include max(767) {
      // padding: 0 10px;
      padding: 0;
    }
    .account-sale {
      padding: 0 15px 56px 15px;
      margin-bottom: 96px;
      border-bottom: 1px solid rgba(#000000, 0.1);
      @include max(1439) {
        border-bottom: none;
        margin-bottom: 0;
      }
    }
    .account-program-level {
      margin-bottom: 48px;
      @include max(1439) {
        margin-bottom: 40px;
      }
      @include max(1023){
        padding:0 50px;
      }
      @include max(767) {
        margin-bottom: 20px;
        padding: 0 10px;
      }
    }
    .account-change-level {
      padding-left: 15px;
      margin-bottom: 96px;
      display: flex;
      align-items: center;
      @include max(1023){
        padding:0 50px;
      }
      @include max(767) {
          margin-right: 0;
          padding: 0 10px;
        }
      .simple-button {
        margin-right: 40px;
      }
      .button-desc {
        color: rgba(#000000, 0.5);
        @include max(767) {
          margin-top: 23px;
        }
      }
      @include max(1023) {
        margin-bottom: 64px;
      }
      @include max(767) {
        flex-flow: row wrap;
        max-width: 300px;
        padding: 0;
        justify-content: center;
        margin: 0 auto;
      }
    }
    .offers_container {
      padding: 0 0 0 15px;
      @include max(1023){
        padding:0 50px;
      }
      @include max(767) {
        display: none;
        
      }
    }
    .account-booking-table {
      margin-bottom: 96px;
      @include max(1023) {
        margin-bottom: 64px;
        padding:0 50px;
      }
      @include max(767) {
        margin-top: 48px;
        padding: 0 10px;
      }
      &.big-margin {
        @include mb-140;
      }
    }
    .special-offer-cards-list {
      margin-bottom: 96px;
      @include max(1439) {
        margin-bottom: 72px;
      }
    }
  }
}
</style>
