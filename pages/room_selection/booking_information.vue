<template>
  <div id="booking-information">
    <HeaderBlock :header_ligh_style="true" />
    <div class="top_distance"></div>
    <TitleWithFilterBooking
      :detailsBookingReg="true"
      :lineDetails="true"
      :data="titleBookingReg"
    />

    <div class="info-wrapper">
      <div class="info-hotel-wrapper">
        <BookingInfoBlock :bookingInfo="bookingInfo" />
        <BookingInfoHotel
          :dataInfo="titleBookingInfoHotel"
          :dataRoom="dataBookingRoom"
        />
        <GuestTabsBlock :choseTabs="true" :tabsInfoChose="tabsInfoChose" />
        <BookingAllPrice :totalPrice="totalPrice" />
      </div>
      <div class="info-hotel-contact-wrapper">
        <BookingHotelContact :hotelContacts="hotelContacts" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import TitleWithFilterBooking from "~/blocks/globals/TitleWithFilterBooking";
import BookingInfoBlock from "~/blocks/booking_information/BookingInfoBlock";
import BookingInfoHotel from "~/blocks/booking_information/BookingInfoHotel";
import GuestTabsBlock from "~/blocks/guest_information/GuestTabsBlock";
import BookingAllPrice from "~/blocks/booking_information/BookingAllPrice";
import BookingHotelContact from "~/blocks/booking_information/BookingHotelContact";

export default {
  components: {
    HeaderBlock,
    TitleWithFilterBooking,
    BookingInfoBlock,
    BookingInfoHotel,
    GuestTabsBlock,
    BookingAllPrice,
    BookingHotelContact,
  },
  data: () => ({
    titleBookingReg: {
      subtitle: "Готово!",
      title_gold: "Дякуємо за",
      title_black: "бронювання",
      descDetail:
        "На електронну адресу <a target='_blank' href='mailto:kk@gmail.com'>kk@gmail.com</a> надіслано електронний лист, який підтверджує бронювання",
    },
    titleBookingInfo: {
      title_gold: "Інформація про",
      title_black: "бронювання",
    },
    bookingInfo: {
      title: "Інформація про бронювання",
      numberBooking: "#1473648132",
      statusBooking: "заброньовано",
    },
    titleBookingInfoHotel: {
      title: "Premier Hotel Rus",
      data: true,
    },
    dataBookingRoom: {
      mainInfo: [
        {
          id: 0,
          title: "Стандартний номер",
          description: "Premier Club - Бурштин, лише номер",
          price: "1560₴",
        },
        {
          id: 1,
          title: "Гість",
          description: "1 дорослий(а): Анастасія Домбровська",
        },
        {
          id: 2,
          title: "Додаткові коментарі",
          description:
            "Значимість цих проблем настільки очевидна, що базовий вектор розвитку безпосередньо залежить від стандартних підходів. Протилежна точка зору має на увазі, що деякі особливості внутрішньої політики, які представляють собою яскравий приклад континентально-європейського типу політичної культури, будуть піддані цілої серії незалежних досліджень. З іншого боку, базовий вектор розвитку однозначно фіксує необхідність існуючих фінансових і адміністративних умов!",
        },
      ],
      mainCondition: [
        {
          id: 3,
          title: "Правила та умови",
          description: "Заїзд: 15:00- Виїзд: 12:00",
        },
        {
          id: 4,
          title: "Тариф включає",
          description:
            'Тип харчування може бути обраний відповідно до Ваших переваг (сніданок "Шведський стіл" або без харчування).Відповідно до законів України туристичний збір не входить у вартість номеру та оплачується гостем самостійно в готелі. Ставка для в’їзного туризму - 47,23 грн. з людини за добу.',
          list: [
            "Ідвідування фітнес центру та басейну",
            "Wi-Fi Інтернет в номері",
            "Безкоштовний паркінг",
            "20% ПДВ",
          ],
        },
        {
          id: 5,
          title: "Стандартні умови скасування",
          description:
            "У випадку скасування бронювання в строк 1 доба до дати заїзду штраф не стягується. У випадку скасування пізніше цього строку або у випадку незаїзду стягується 100% від вартості першої доби проживання.",
        },
        {
          id: 6,
          title: "Політика гарантії",
          description:
            "У випадку, якщо не надана кредитна картка, бронювання є гарантованим до 18:00 дня прибуття і може бути скасовано після цієї години готелем. Для подовження гарантії надайте, будь ласка, дані про Вашу банківську картку або передплатіть замовлені послуги.",
        },
        {
          id: 7,
          title: "20% ПДВ",
          description: "20% ПДВ враховано у вартість.",
        },
      ],
    },
    tabsInfoChose: [
      {
        id: 0,
        title: "Ранній заїзд та пізній виїзд",
        price: "340$",
      },
      {
        id: 1,
        title: "Трансфер до готелю",
        price: "340$",
      },
    ],
    totalPrice: {
      price: "10 000 $",
      addInfo:
        "Раптово, базові сценарії поведінки користувачів, ініційовані виключно синтетично, перетворені на посміховисько, хоча саме їх існування приносить безсумнівну користь суспільству. ",
    },
    hotelContacts: {
      title: "Контактна інформація",
      mainContact: {
        img: require("~/static/images/contact-img.jpg"),
        title: "Premier Hotel Rus",
        phones: ["+38 044 359 08 08", "+38 044 256 40 00", "+38 067 434 77 79"],
        emails: ["reservation@hotelrus.kiev.ua", "info@hotelrus.kiev.ua"],
        address: "4 Hospitalna Str., Kyiv 01601, Ukraine",

        links: [
          {
            id: 0,
            link: "Переглянути на карті",
            href: "/",
          },
          {
            id: 1,
            link: "Довідник міста",
            href: "/",
          },
        ],
        socialMedia: [
          {
            id: 0,
            link: "https://www.google.com/",
            img: require("~/static/icons/G+.svg"),
          },
          {
            id: 1,
            link: "https://www.facebook.com/",
            img: require("~/static/icons/fb.svg"),
          },
          {
            id: 2,
            link: "https://twitter.com/?lang=ua",
            img: require("~/static/icons/twi.svg"),
          },
          {
            id: 3,
            link: "https://www.instagram.com/",
            img: require("~/static/icons/insta.svg"),
          },
        ],
      },
      generalContatcs: {
        title: "Центральне бюро бронювання",
        phones: ["+38 044 590 69 71", "+38 044 359 05 92 "],
        email: "pr@phnr.com",
      },
      notes: {
        title: "нотатки готелю",
        description:
          "Раптово, базові сценарії поведінки користувачів, ініційовані виключно синтетично, перетворені на посміховисько, хоча саме їх існування приносить безсумнівну користь суспільству. ",
      },
    },
  }),
};
</script>

<style lang="scss" >
@import "../../assets/scss/utils.scss";
#booking-information {
  margin-bottom: 220px;

  @include max(lg) {
    margin-bottom: 124px;
  }
  @include max(md) {
    margin-bottom: 112px;
  }
  @include max(sm) {
    margin-bottom: 80px;
  }

  .top_distance {
    @include mt-227;
    @include max (lg){
      margin-top: 256px;
    }
    @include max (md){
      margin-top: 195px;
    }
    @include max(sm) {
      margin-top: 144px;
    }
  }
  .info-wrapper {
    width: 100%;
    @include pl-168;
    @include pr-168;
    display: flex;
    align-items: flex-start;

    @include max(lg) {
      padding: 0 56px;
    }
    @include max(1000) {
      padding: 0 50px;
    }
    @include max(md) {
      padding: 0 48px;
      flex-wrap: wrap;
    }
    @include max(sm) {
      padding: 0 18px;
    }
  }
  .title_with_description {
    margin-bottom: 140px;


    .description_right {

      @include min(lg){
        margin-top: 80px;
      }

    }

    @include max(lg) {
      margin-bottom: 114px;
    }
    @include max(md) {
      margin-bottom: 70px;
    }
    @include max(sm) {
      margin-bottom: 80px;
    }
    @include max(sm) {
      display: flex;
      flex-direction: column;
      .description_left {
        display: block;
        margin-left: 18px;
        margin-bottom: 32px;
      }
    }
  }
  .info-hotel-wrapper {
    // width: 650px;
    @include min(lg) {
      width: calc(100% - 430px);
      margin-right: 24px;
      display: flex;
      flex-direction: column;


      // div {
      //   &:not(:last-child) {
      //     margin-bottom: 24px;
      //   }
      // }
    }
    @include max(lg) {
      //background-color: yellow;
      width: calc(100% - 368px);
    }
    @include max(1000) {
      width: calc(100% - 320px);
    }
    @include max(md) {
      margin-top: 24px;

      width: 100%;
    }
    @include max(sm) {
      margin-top: 0px;
    }
  }
  .info-hotel-contact-wrapper {
    position: sticky;
    top: 0px;
    width: 430px;

    @include max(lg) {
      width: 368px;
      margin-left: 20px;
    }

    @include max(1000) {
      width: 320px;
      margin-left: 20px;
    }

    @include max(md) {
      width: 100%;
      margin-left: 0px;
    }
  }
}
</style>
