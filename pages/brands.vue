<template>
  <div id="brands">
    <HeaderBlock />
    <BreadCrumbs :crumbs="crumbs" :light_style="true" />
    <SmallFirstScreen :image="first_screen.img" :title="first_screen.title">
      <KebabFooter :footer_list="footer_list" />
    </SmallFirstScreen>
    <AboutBrands :line="true" />
    <AboutOneBrand
      :description="brandsDescription"
      :style_config="style_config1"
      :resizeGoldBtn="resizeGoldBtn"
    />
    <AboutOneBrand
      :description="description2"
      :inverse="true"
      :style_config="style_config2"
      :resizeGoldBtn="resizeGoldBtn"
    />
    <AboutOneBrand
      :description="brandsDescription3"
      :style_config="style_config3"
      :resizeGoldBtn="resizeGoldBtn"
    />
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import SmallFirstScreen from "~/blocks/globals/SmallFirstScreen";
import AboutBrands from "~/blocks/brands/AboutBrands";
import AboutOneBrand from "~/blocks/globals/brands_type/AboutOneBrand";
import KebabFooter from "~/blocks/globals/KebabFooter";

//static info
import { lux_footer } from "~/assets/js_static_data/footers_first_screens";
import { globalMixin } from "~/plugins/mixins";

export default {
  mixins: [globalMixin],
  components: {
    HeaderBlock,
    SmallFirstScreen,
    AboutBrands,
    AboutOneBrand,
    KebabFooter
  },
  data: () => ({
    footer_list: lux_footer,
    first_screen: {
      img: require("~/static/images/brands_fs.jpg"),
      title: "бренди"
    },
    crumbs: ["Premier Palace Hotel", "бренди"],
    description: {
      image: require("~/static/images/brand_palace.jpg"),
      name: "Premier Palace Hotels",
      description:
        "Premier Palace Hotels - розкішна класика серед готелів, кожен з яких унікальний своєю історією і славиться своїм розташуванням та архітектурою. Тут продумана кожна деталь, яка створює неповторну атмосферу шикарного п'ятизіркового готелю. Ретельно реставровані історичні інтер'єри, концептуальні номери, ресторани високої кухні, вишукані спа, кращі локації для проведення ділових зустрічей і пишних урочистостей - в цих готелях є все, щоб насолодитися розкішним життям.",
      gold_button: "придбати франшизу",
      title:
        '<span class="italic gold_text">Premier Palace Hotel</span>  <span>це готель високого рівня обслуговування та комфорту. У 2009 році він отримав шість зірок і сім смуг від системи Stars and Stripes, всесвітньо',
      benefits: [
        "Розташування в центрі мегаполісу",
        "Доступ до бізнес-послуг 24/7",
        "Розкішні готельні номери",
        "Лобі бар 24/7",
        "Ресторани високої кухні",
        "обслуговування в номерах 24/7",
        "Fresh Organic Traditional",
        "Представницький поверх",
        "Преміальний конференц-сервіс",
        "Паркінг під охороною",
        "фітнес-центр з басейном і спа",
        "Послуги дворецького"
      ],
      bottom_title: `В <span class="italic gold_text"> Premier Palace Hotel </span> для вас:`,
      bottom_title_small: "ІНШІ МІСТА",
      hotels: ["Premier Palace Hotel"]
    },
    style_config1: {
      gradient_bg: true
    },
    description2: {
      image: require("~/static/images/brands_hotels.jpg"),
      name: "Premier Hotels",
      description:
        "Premier Hotels – это бизнес-класс среди отелей для активных людей, которые часто путешествуют и ценят свое время. Premier Hotels – идеальные места для путешествий и лучших событий в вашей жизни.",
      gold_button: "придбати франшизу",
      title:
        '<span class="italic gold_text">Premier Hotels</span> – это бизнес-класс среди отелей для активных людей, которые часто. Центральное расположение, комфортабельные',
      benefits: [
        "Розташування в центрі мегаполісу",
        "Доступ до бізнес-послуг 24/7",
        "Розкішні готельні номери",
        "Лобі бар 24/7",
        "Ресторани високої кухні",
        "обслуговування в номерах 24/7",
        "Fresh Organic Traditional",
        "Представницький поверх",
        "Преміальний конференц-сервіс",
        "Паркінг під охороною",
        "фітнес-центр з басейном і спа",
        "Послуги дворецького"
      ],
      hotels: [
        "Premier Palace Hotel",
        "Premier Hotel Abri",
        "Premier Hotel Shafran",
        "Premier Palace Hotel1",
        "Premier Hotel Abri1",
        "Premier Hotel Shafran1",
        "Premier Palace Hotel2",
        "Premier Hotel Abri2",
        "Premier Hotel Shafran2",
        "Premier Palace Hotel3",
        "Premier Hotel Abri3",
        "Premier Hotel Shafran3"
      ],
      bottom_title: `В <span class="italic gold_text"> Premier Hotels </span> для вас`,
      bottom_title_small: "ІНШІ МІСТА"
    },
    style_config2: {
      reversed: true
    },
    description3: {
      image: require("~/static/images/brands_hotels.jpg"),
      name: "Premier Сompass Hotels",
      description:
        "Premier Palace Hotels - розкішна класика серед готелів, кожен з яких унікальний своєю історією і славиться своїм розташуванням та архітектурою. Тут продумана кожна деталь, яка створює неповторну атмосферу шикарного п'ятизіркового готелю. Ретельно реставровані історичні інтер'єри, концептуальні номери, ресторани високої кухні, вишукані спа, кращі локації для проведення ділових зустрічей і пишних урочистостей - в цих готелях є все, щоб насолодитися розкішним життям. ",
      gold_button: "придбати франшизу",
      title:
        '<span class="italic gold_text">Premier Palace Hotel</span>  <span>це готель високого рівня обслуговування та комфорту. У 2009 році він отримав шість зірок і сім смуг від системи Stars and Stripes, всесвітньо',
      benefits: [
        "Розташування в центрі мегаполісу",
        "Доступ до бізнес-послуг 24/7",
        "Розкішні готельні номери",
        "Лобі бар 24/7",
        "Ресторани високої кухні",
        "обслуговування в номерах 24/7",
        "Fresh Organic Traditional",
        "Представницький поверх",
        "Преміальний конференц-сервіс",
        "Паркінг під охороною",
        "фітнес-центр з басейном і спа",
        "Послуги дворецького"
      ],
      hotels: [
        "Premier Compas Hotel Kherson",
        "Premier Compass Hotel Oleksandriya"
      ],
      bottom_title: `В <span class="italic gold_text"> Premier Сompass Hotels</span> для вас`,
      bottom_title_small: "ІНШІ МІСТА"
    },
    style_config3: {
      dark_bg: true
    }
  }),
  methods: {
    changeDescription(data, breakpoint) {
      let lastIndexToSlice = data.title.lastIndexOf(",");
      let title =
        breakpoint <= 1024 ? data.title.slice(0, lastIndexToSlice) : data.title;
      let description =
        breakpoint <= 768
          ? data.description
              .split(".")
              .slice(0, 2)
              .join(". ")
          : data.description;
      return { ...data, title: title, description: description };
    }
  },
  computed: {
    brandsDescription() {
      return this.changeDescription(this.description, this.breakpoints);
    },
    brandsDescription3() {
      return this.changeDescription(this.description3, this.breakpoints);
    },
    resizeGoldBtn() {
      return this.breakpoints <= 768 ? true : false;
    }
  }
};
</script>
<style lang="scss">
@import "../assets/scss/utils.scss";
#brands {
  #about_restaurant {
    &:last-child {
      .contact_block {
        grid-template-columns: auto;
        @include max(lg) {
          background: none;
          width: 300px;
          margin: 0;
          padding: 40px 0;
        }
        @include max(md){
          padding:0 0 56px 0;
        }
        @include max(sm){
          padding: 32px 0 50px 0;
        }
        .a1 + .a1 {
          margin-top: 22px;
          @include max(lg) {
            margin-top: 20px;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";

#brands {
  #about_restaurant {
    margin-bottom: 0;
    @include pt-140;

    @include max(sm) {
      padding-top: 80px;
    }

    &:nth-child(even) {
      background: transparent !important;
    }
    &:last-child {
      margin-bottom: 0;
      background: linear-gradient(
        180deg,
        #f0edea 0%,
        rgba(240, 237, 234, 0) 100%
      ) !important;
    }
  }
  .about_brands_container {
    margin-bottom: 0;
    .list_wrapper {
      padding-bottom: 0;
    }
  }
}
</style>
