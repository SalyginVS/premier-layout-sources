<template>
  <div id="main_page_hotels">

      <HeaderBlock />
      <FirstScreen />
      <AboutUs />
      <HotelMap />
      <DoubleSliderNew
        :double_slider_desc="double_slider_desc"
        :is_backline="true"
      />





      <WeCare />

      <div class="margin_block1"></div>
      <Benefits :line="true" :isMainPageHotels="isMainPageHotels" slashButtonLink="/premier_club"/>
      <HotelTypesSlider detailsHref="/brands"/>

      <LongSlider
        :slider_description="slider_description"
        :descr_indents="true"
        :slides="long_slider_slides"
      />
      <Subscribe />

  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import FirstScreen from "~/blocks/main/FirstScreen";
import AboutUs from "~/blocks/main/AboutUs";
import DoubleSliderNew from "~/blocks/globals/sliders/DoubleSliderNew";
// import DoubleSliderNew from "~/blocks/globals/sliders/DoubleSliderNew";
import WeCare from "~/blocks/globals/WeCare";
import Benefits from "~/blocks/globals/Benefits";
import HotelTypesSlider from "~/blocks/globals/sliders/HotelTypesSlider";
import HotelMap from "~/blocks/main/HotelMap";
import LongSlider from "~/blocks/globals/sliders/LongSlider";
import Subscribe from "~/blocks/globals/Subscribe";

import { globalMixin } from "~/plugins//mixins";

export default {
  mixins: [globalMixin],
  components: {
    HeaderBlock,
    FirstScreen,
    AboutUs,
    DoubleSliderNew,
    WeCare,
    Benefits,
    HotelMap,
    HotelTypesSlider,
    LongSlider,
    Subscribe
    // DoubleSliderNew
  },
  data: () => ({
    slider_description: {
      little_title: "Блог та новини",
      big_title: "Наш блог",
      description:
        "Ми створюємо максимальний комфорт та турботу для кожного гостя нашої мережі. Маленькі речі, які можуть не бути видні з першого погляду, залишать.",
      link: "всі новини",
      linkHref: '/our_blog',
      filters: [
        {
          id: 0,
          name: "все",
          type: "",
          options: [
            {
              title: "Premier Palace Hotelа",
              value: "Premier Palace Hotel"
            },
            {
              title: "Premier Hotel Rus",
              value: "Premier Hotel Rus"
            },
            {
              title: "Premier Hotel Lybid",
              value: "Premier Hotel Lybid"
            },
            {
              title: "Premier Hotel Shafran",
              value: "Premier Hotel Shafran"
            },
            {
              title: "Premier Hotel Abri",
              value: "Premier Hotel Abri"
            }
          ]
        },
        {
          id: 1,
          name: "місто",
          type: "",

          options: [
            {
              title: "Дніпро",
              value: "Дніпро"
            },
            {
              title: "Харків",
              value: "Харків"
            },
            {
              title: "Херсон",
              value: "Херсон"
            },
            {
              title: "Київ",
              value: "Київ"
            },
            {
              title: "Львів",
              value: "Львів"
            }
          ]
        }
      ]
    },
    long_slider_slides: [
      {
        id: 0,
        image: require("~/static/images/our_blog1.jpg"),
        little_title: "Київ",
        type: "Сніданки з підписами",
        label: "Подія"
      },
      {
        id: 1,
        image: require("~/static/images/our_blog2.jpg"),
        little_title: "Київ",
        type: "Лета легка економія",
        label: "Подія"
      },
      {
        id: 2,
        image: require("~/static/images/our_blog1.jpg"),
        little_title: "Київ",
        type: "Лета легка економія",
        label: "Подія"
      },
      {
        id: 3,
        image: require("~/static/images/our_blog2.jpg"),
        little_title: "Київ",
        type: "Ідеальна зустріч",
        label: "Подія"
      },
      {
        id: 4,
        image: require("~/static/images/our_blog2.jpg"),
        little_title: "Київ",
        type: "Ідеальна зустріч",
        label: "Подія"
      },
      {
        id: 5,
        image: require("~/static/images/our_blog2.jpg"),
        little_title: "Київ",
        type: "Ідеальна зустріч",
        label: "Подія"
      },
      {
        id: 6,
        image: require("~/static/images/our_blog2.jpg"),
        little_title: "Київ",
        type: "Ідеальна зустріч",
        label: "Подія"
      },
      {
        id: 7,
        image: require("~/static/images/our_blog2.jpg"),
        little_title: "Київ",
        type: "Ідеальна зустріч",
        label: "Подія"
      },
      {
        id: 8,
        image: require("~/static/images/our_blog2.jpg"),
        little_title: "Київ",
        type: "Ідеальна зустріч",
        label: "Подія"
      },
      {
        id: 9,
        image: require("~/static/images/our_blog2.jpg"),
        little_title: "Київ",
        type: "Ідеальна зустріч",
        label: "Подія"
      },
      {
        id: 10,
        image: require("~/static/images/our_blog2.jpg"),
        little_title: "Київ",
        type: "Ідеальна зустріч",
        label: "Подія"
      }
    ],
    double_slider_desc: {
      little_title: "НАШІ Спеціальні пропозиції",
      big_title: "Спеціальні пропозиції",
      link: "всі пропозиції",
      linkMob: "пропозиції",
      linkHref: '/special_offers/one_hotel',
      filters: [
        {
          id: 0,
          name: "тип",
          type: "",
          options: [
            {
              title: "Premier вікендиа ",
              value: "Premier вікендиа"
            },
            {
              title: "Premier весілля",
              value: "Premier весілля"
            },
            {
              title: "тривалі проживання",
              value: "тривалі проживання"
            },
            {
              title: "конференції і банкети",
              value: "конференції і банкети"
            },
            {
              title: "кращі знижки",
              value: "кращі знижки"
            }
          ]
        },
        {
          id: 1,
          name: "місто",
          type: "",
          options: [
            {
              title: "Дніпро",
              value: "Дніпро"
            },
            {
              title: "Харків",
              value: "Харків"
            },
            {
              title: "Херсон",
              value: "Херсон"
            },
            {
              title: "Київ",
              value: "Київ"
            },
            {
              title: "Львів",
              value: "Львів"
            },
            {
              title: "Львів1",
              value: "Львів1"
            }
          ]
        }
      ]
    },
    isMainPageHotels: false
  }),

  mounted() {
    this.$store.commit("setFooterInsta", true);
    this.isMainPageHotels = !this.isMainPageHotels;
  },
  destroyed() {
    this.$store.commit("setFooterInsta", false);
    this.isMainPageHotels = !this.isMainPageHotels;
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";
#main_page_hotels {
  background-color: #fbfbfb;
  overflow-x: hidden;
}
#map,
#we_care {
  @include max(sm) {
   display: none;
  }
}

#benefits{
  @include max(sm) {
    margin-bottom: 61px;
  }
}

.long-slider {
  @include mt-140;
  @include mb-140;
  @include max(lg) {
    margin-top: 130px;
  }
  @include max(md) {
    margin-top: 112px;
  }
  @include max(sm) {
    margin-top: 61px;
    margin-bottom: 80px;
  }
}
</style>
