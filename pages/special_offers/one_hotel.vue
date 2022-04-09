<template>
  <div id="special_offers">
    <HeaderBlock :header_ligh_style="true" />
    <BreadCrumbs :crumbs="crumbs" />
    <div class="top_distance"></div>
    <TitleWithDescription :data="titleData" />

    <div class="margin_block1"></div>
    <OneHotelOffersList :filter="true" :offers="offers" :isSpecialOffers="isSpecialOffers"/>
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";

import TitleWithDescription from "~/blocks/globals/TitleWithDescription";
import OneHotelOffersList from "~/blocks/special_offers/one_hotel/OneHotelOffersList";

export default {
  components: {
    HeaderBlock,
    TitleWithDescription,
    OneHotelOffersList,
  },
  data: () => ({
    isSpecialOffers:false,
    crumbs: ["головна мережі", "Спеціальні пропозиції"],
    offers: [
      {
        id: 0,
        img: require("~/static/images/offer_list1.jpg"),
        label: "романтична вечеря",
        title: "Лета легка економія",
        middle_description:
          "Сервіс на вищому рівні завжди майже непомітний, але залишає теплі емоції від місця, яке Ви відвідали. ",
        bottom_description: "Кількість готелів беруть участь в акції:  3",
      },
      {
        id: 1,
        img: require("~/static/images/offer_list2.jpg"),
        label: "романтична вечеря",
        title: "Лета легка економія",
        middle_description:
          "Сервіс на вищому рівні завжди майже непомітний, але залишає теплі емоції від місця, яке Ви відвідали. ",
        bottom_description:
          "Premier Palace Hotel, Premier Hotel Rus, Premier Hotel Odesa, Premier Hotel Palazzo",
      },
      {
        id: 2,
        img: require("~/static/images/offer_list3.jpg"),
        label: "романтична вечеря",
        title: "Лета легка економія",
        middle_description:
          "Сервіс на вищому рівні завжди майже непомітний, але залишає теплі емоції від місця, яке Ви відвідали. ",
        bottom_description: "Київ, Одеса, Полтава",
      },
      {
        id: 3,
        img: require("~/static/images/offer_list4.jpg"),
        label: "рромантична вечеря",
        title: "Лета легка економія",
        middle_description:
          "Сервіс на вищому рівні завжди майже непомітний, але залишає теплі емоції від місця, яке Ви відвідали. ",
        bottom_description: "Кількість готелів беруть участь в акції:  3",
      },
      {
        id: 4,
        img: require("~/static/images/offer_list5.jpg"),
        label: "романтична вечеря",
        title: "Лета легка економія",
        middle_description:
          "Сервіс на вищому рівні завжди майже непомітний, але залишає теплі емоції від місця, яке Ви відвідали. ",
        bottom_description: "Кількість готелів беруть участь в акції:  3",
      },
      {
        id: 5,
        img: require("~/static/images/offer_list1.jpg"),
        label: "романтична вечеря",
        title: "Лета легка економія",
        middle_description:
          "Сервіс на вищому рівні завжди майже непомітний, але залишає теплі емоції від місця, яке Ви відвідали. ",
        bottom_description: "Кількість готелів беруть участь в акції:  3",
      },
      {
        id: 6,
        img: require("~/static/images/offer_list4.jpg"),
        label: "рромантична вечеря",
        title: "Лета легка економія",
        middle_description:
          "Сервіс на вищому рівні завжди майже непомітний, але залишає теплі емоції від місця, яке Ви відвідали. ",
        bottom_description: "Кількість готелів беруть участь в акції:  3",
      },
      {
        id: 7,
        img: require("~/static/images/offer_list5.jpg"),
        label: "романтична вечеря",
        title: "Лета легка економія",
        middle_description:
          "Сервіс на вищому рівні завжди майже непомітний, але залишає теплі емоції від місця, яке Ви відвідали. ",
        bottom_description: "Кількість готелів беруть участь в акції:  3",
      },
      {
        id: 8,
        img: require("~/static/images/offer_list1.jpg"),
        label: "вромантична вечеря",
        title: "Лета легка економія",
        middle_description:
          "Сервіс на вищому рівні завжди майже непомітний, але залишає теплі емоції від місця, яке Ви відвідали. ",
        bottom_description: "Кількість готелів беруть участь в акції:  3",
      },
    ],
    titleData: {
      little_title: "Спеціальні пропозиції",
      title_gold: "Наші Спеціальні",
      title_black: "пропозиції",
      text_description:
        "Отели Премьер - это профессиональный высококлассный сервис и внимание к вашим пожеланиям. Всем гостям мы предоставляем бесплатный трансфер, обслуживание на reception 24/7, доставка еды в номера с последними!  ",
    },
  }),
  mounted() {
  this.isSpecialOffers=!this.isSpecialOffers;
},
destroyed() {
  this.isSpecialOffers=!this.isSpecialOffers;
},
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.top_distance {
  @include mt-227;
  @include max(768){
    margin-top:167px;
  }
}

#special_offers {
  &.margin_block1 {
    @include max(lg) {
      margin-top: 124px;
    }
    @include max(md) {
      margin-top: 112px;
    }
    @include max(sm) {
      margin-top: 80px;
    }
  }
}
</style>
