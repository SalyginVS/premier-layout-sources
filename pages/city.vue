<template>
  <div id="city">
    <HeaderBlock />
    <BreadCrumbs :crumbs="crumbs" :light_style="true" />
    <SmallFirstScreen :image="first_screen.img" :title="first_screen.title" />
    <AboutBlockTypeTwo :data="about_block" />
    <SightsBlock :line="true" :isCityPage="isCityPage" />
    <OurHotels />
    <OneHotelMap />
    <LongSlider
      :slider_description="long_slider_description"
      :slides="long_slider_slides"
    />
    <CityLastScreen :line="true" :isCityPage="isCityPage" />
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";

import SmallFirstScreen from "~/blocks/globals/SmallFirstScreen";
import AboutBlockTypeTwo from "~/blocks/globals/abouts/AboutBlockTypeTwo";

import SightsBlock from "~/blocks/city/SightsBlock";
import LongSlider from "~/blocks/globals/sliders/LongSlider";
import OneHotelMap from "~/blocks/one_hotel/OneHotelMap";
import CityLastScreen from "~/blocks/city/CityLastScreen";
import OurHotels from "~/blocks/city/OurHotels";
import BreadCrumbs from "~/components/BreadCrumbs";

export default {
  components: {
    HeaderBlock,
    SmallFirstScreen,
    AboutBlockTypeTwo,
    BreadCrumbs,
    SightsBlock,
    LongSlider,
    OneHotelMap,
    CityLastScreen,
    OurHotels
  },
  data: () => ({
    isCityPage: false,
    first_screen: {
      img: require("~/static/images/city_fs.jpg"),
      title: "Київ"
    },
    crumbs: ["головна мережІ", "міста", "київ"],
    about_block: {
      left_image: require("~/static/images/city_about.jpg"),
      little_title: "про місто",
      gold_title: "внутрішню гармонію",
      black_title: "Оновіться та відчуйте",
      description:
        "Premier Palace - це готель високого рівня обслуговування та комфорту. У 2009 році він отримав шість зірок і сім смуг від системи Stars and Stripes, всесвітньо відомої організації по визнанню в індустрії гостинності, а консьєрж готелю володіє «Золотими ключами», виданими йому однією з найбільших і визнаних у світі гільдій Les Clefs d'Or . Готель входить в «ТОП найзнаменитіших готелів світу», що робить її важливим місцем на карті України. Отели Премьер - это профессиональный высококлассный сервис и внимание к вашим пожеланиям. Всем гостям мы предоставляем бесплатный трансфер, обслуживание на reception 24/7, доставка еды в номера с последними!  ",
      small_image: require("~/static/images/city_little_image.jpg")
    },
    long_slider_description: {
      little_title: "Блог та новини",
      big_title: "Новини міста",
      description:
        "Ми створюємо максимальний комфорт та турботу для кожного гостя нашої мережі. Маленькі речі, які можуть не бути видні з першого погляду, залишать. ",
      link: "всі новини",
      filters: [
        {
          id: 0,
          name: "Все",
          type: "",
          options: [
            {
              title: "all1 ",
              value: "all1"
            },
            {
              title: "all2",
              value: "all2"
            },
            {
              title: "all3",
              value: "all3"
            },
            {
              title: "all4",
              value: "all4"
            },
            {
              title: "all5",
              value: "all5"
            }
          ]
        }
      ]
    },
    long_slider_slides: [
      {
        id: 0,
        image: require("~/static/images/cook1.jpg"),
        little_title: "Київ",
        type: "Лета легка економія",
        label: "Подія"
      },
      {
        id: 1,
        image: require("~/static/images/cook2.jpg"),
        little_title: "Київ",
        type: "Ідеальна зустріч",
        label: "Подія"
      },
      {
        id: 2,
        image: require("~/static/images/cook1.jpg"),
        little_title: "Київ",
        type: "Художній куточок",
        label: "Подія"
      },
      {
        id: 3,
        image: require("~/static/images/cook2.jpg"),
        little_title: "Херсон",
        type: "Сніданки з підписами",
        label: "Подія"
      },
      {
        id: 4,
        image: require("~/static/images/cook1.jpg"),
        little_title: "Київ",
        type: "Лета легка економія",
        label: "Подія"
      },
      {
        id: 5,
        image: require("~/static/images/cook2.jpg"),
        little_title: "Київ",
        type: "Ідеальна зустріч",
        label: "Подія"
      },
      {
        id: 6,
        image: require("~/static/images/cook1.jpg"),
        little_title: "Київ",
        type: "Художній куточок",
        label: "Подія"
      },
      {
        id: 7,
        image: require("~/static/images/cook2.jpg"),
        little_title: "Херсон",
        type: "Сніданки з підписами",
        label: "Подія"
      },
      {
        id: 8,
        image: require("~/static/images/cook1.jpg"),
        little_title: "Київ",
        type: "Лета легка економія",
        label: "Подія"
      },
      {
        id: 9,
        image: require("~/static/images/cook2.jpg"),
        little_title: "Київ",
        type: "Ідеальна зустріч",
        label: "Подія"
      },
      {
        id: 10,
        image: require("~/static/images/cook1.jpg"),
        little_title: "Київ",
        type: "Художній куточок",
        label: "Подія"
      }
    ]
  }),
  mounted() {
    this.isCityPage = !this.isCityPage;
  },
  destroyed() {
    this.isCityPage = !this.isCityPage;
  }
};
</script>s
<style lang="scss" scoped>
@import "../assets/scss/utils.scss";

.long-slider {
  @include mt-140;
}
</style>
