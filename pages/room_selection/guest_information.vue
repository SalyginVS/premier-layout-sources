<template>
  <div id="guest-information">
    <HeaderBlock :header_ligh_style="true" />
    <NewsAlert :news="news" />
    <div class="top_distance"></div>
    <TitleWithFilterBooking
      :detailsAccount="true"
      :data="title_booking_filter"
    />
    <div class="guest-wrapper">
      <div class="account-wrapper">
        <GuestInfoBlock :dataInfo="titleInfoBlock" />
        <GuestTabsBlock :tabsInfo="tabsInfo" />
        <GuestPayBlock :dataInfo="titlePayBlock" />
      </div>
      <div class="account-booking-wrapper">
        <GuestBookingInfo
          :dataInfo="titleBookingBlock"
          :bookingInfo="bookingInfo"
          :bookingInfoCondition="bookingInfoCondition"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import TitleWithFilterBooking from "~/blocks/globals/TitleWithFilterBooking";
import GuestInfoBlock from "~/blocks/guest_information/GuestInfoBlock";
import GuestTabsBlock from "~/blocks/guest_information/GuestTabsBlock";
import GuestPayBlock from "~/blocks/guest_information/GuestPayBlock";
import GuestBookingInfo from "~/blocks/guest_information/GuestBookingInfo";

export default {
  components: {
    HeaderBlock,
    TitleWithFilterBooking,
    GuestInfoBlock,
    GuestTabsBlock,
    GuestPayBlock,
    GuestBookingInfo,
  },
  data: () => ({
    titleInfoBlock: {
      title: "Інформація про гостей",
      options: [
        {
          id: 0,
          text: "Бронювання для себе",
          value: 0,
        },
        {
          id: 1,
          text: "Бронювання для іншого гостя",
          value: 1,
        },
      ],
    },

    titleBookingBlock: {
      title: "Premier Palace Hotel",
      data: true,
      changeData: true,
    },
    news:
      'Приєднуйтесь зараз до <a href="/" target="_blank">premier club</a> та отримайте 10% розпродажів на бронювання',
    title_booking_filter: {
      subtitle: "крок 3/4",
      title_gold: "Виберіть номер",
      title_black: "для бронювання",
    },
    tabsInfo: [
      {
        id: 0,
        title: "Ранній заїзд та пізній виїзд",
        type: "checkboxChoice",
        options: [
          "Ранній заїзд (з 6:00) <span>340₴</span>",
          "30/5000 Пізній виїзд (до 8:00) <span>340₴</span>",
        ],
      },
      {
        id: 1,
        title: "Трансфер до готелю",
      },
      {
        id: 2,
        title: "Послуги особистого двірця",
      },
      {
        id: 3,
        title: "Додано привітання",
      },
      {
        id: 4,
        title: "Безкоштовні послуги",
        type: "blocksChoice",
        options: [
          {
            id: 0,
            title: "Фен",
          },
          {
            id: 1,
            title: "Шоколад",
            type: "radio",
            option: ["Чорний", "Молочний"],
          },
          {
            id: 2,
            title: "Зубна щітка і зубна паста",
          },
          {
            id: 3,
            title: "Терези",
          },
          {
            id: 4,
            title: "Косметичний набір",
          },
          {
            id: 5,
            title: "Набір для гоління",
          },
          {
            id: 6,
            title: "USB геймпад",
          },

          {
            id: 7,
            title: "Sony Play Station",
          },
          {
            id: 8,
            title: "Google Chrome 2",
          },
          {
            id: 9,
            title: "Акустична гітара",
          },
          {
            id: 10,
            title: "I-док-станція",
          },

          {
            id: 11,
            type: "radio",
            title: "Дитяча подушка",
            option: ["Латекс", "Пуховий", "Анатомічний"],
          },

          {
            id: 12,
            title: "Нарди",
          },
          {
            id: 13,
            title: "Шахи",
          },
          {
            id: 14,
            title: "Шашки",
          },
          {
            id: 15,
            title: "Килимок для фітнесу",
          },
          {
            id: 16,
            type: "checkbox",
            title: "Зарядний пристрій",
            option: ["Micro-USB", "USB Type-C", "Lightning"],
          },
        ],
      },
      {
        id: 5,
        title: "Мої налаштування",
      },
    ],
    titlePayBlock: {
      title: "Оплата за бронювання",
      options: [
        {
          id: 0,
          text: "Оплата карткою по прибуттю в готель",
          value: 0,
        },
        {
          id: 1,
          text: "Оплата без картки",
          value: 1,
        },
      ],
    },
    bookingInfo: [
      {
        id: 0,
        title: "Рання реєстрація",
        price: "340 $",
      },
      {
        id: 1,
        title: "Передача",
        price: "560 $",
        info: "з аеропорту Бориспіль",
      },
    ],
    bookingInfoCondition: [
      "Підпишіться, щоб отримувати пропозиції та акції Premier Hotels and Resorts електронною поштою",
      "Я прочитав і приймаю умови та політику конфіденційності",
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
#guest-information {
  @include mb-140;

  @include max (sm){
    margin-bottom: 80px;
  }
  .top_distance {
    margin-top: 281px;

    @include max (lg){
      margin-top: 256px;
    }

    @include max(sm) {
      margin-top: 112px;
    }
  }
  .guest-wrapper {
    width: 100%;
    @include pl-168;
    @include pr-168;
    display: flex;
    align-items: flex-start;

    @include max(lg) {
      padding: 0 56px;
    }
    @include max(md) {
      flex-wrap: wrap;
      padding: 0 48px;
    }
    @include max(sm) {
      flex-wrap: wrap;
      padding: 0 18px;
    }

    .account-wrapper {
      // width: 650px;
      width: calc(100% - 430px);
      margin-right: 24px;
      display: flex;
      flex-direction: column;
      @include max(lg) {
        width: calc(100% - 368px);
        margin-right: 20px;
      }
      @include max(md) {
        width: 100%;
        margin-right: 0;
      }
    }
    .account-booking-wrapper {
      position: sticky;
      top: 0px;
      width: 430px;
      @include max(lg) {
        width: 368px;
      }
      @include max(md) {
        width: 100%;
      }
    }
  }
  .title_with_description {
    @include mb-140;

    @include max (sm){
      margin-top: 48px;
      margin-bottom: 48px;
    }
  }
  .news-alert{
    @include min (lg){
      top: 87px;
    }
    @include max (lg){
      top: 77px;
    }
    @include max (sm){
      display: none;
    }
  }
}
</style>
