<template>
  <div id="managmant_and_franchising">
    <HeaderBlock />
    <BreadCrumbs :crumbs="crumbs" :light_style="true" />
    <ManagmentFirstScreen
      :isManagmentAndFranchisingPage="isManagmentAndFranchisingPage"
    />
    <AboutOneBrand
      :description="description"
      :style_config="style_config1"
      :isManagmentAndFranchisingPage="isManagmentAndFranchisingPage"
    />
    <CoopTypes
      :line="true"
      :isManagmentAndFranchisingPage="isManagmentAndFranchisingPage"
    />
    <ReviewsSlider
      background_type="background_type__dark"
      :simpleReview="true"
    />
    <AboutBlockTypeOne
      :about_data="about_data"
      :line="true"
      :changeBtnSize="isManagmentAndFranchisingPage"
      :isManagmentAndFranchisingPage="isManagmentAndFranchisingPage"
    />
    <div class="margin_block"></div>
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import ManagmentFirstScreen from "~/blocks/managmant_and_franchising/ManagmentFirstScreen";
import AboutBlockTypeOne from "~/blocks/globals/abouts/AboutBlockTypeOne";
import AboutOneBrand from "~/blocks/globals/brands_type/AboutOneBrand";
import ReviewsSlider from "~/blocks/globals/sliders/ReviewsSlider";
import CoopTypes from "~/blocks/managmant_and_franchising/CoopTypes";

export default {
  components: {
    HeaderBlock,
    ManagmentFirstScreen,
    AboutOneBrand,
    ReviewsSlider,
    CoopTypes,
    AboutBlockTypeOne
  },
  data: () => ({
    isManagmentAndFranchisingPage: false,
    crumbs: ["головна мережІ", "Управління та франчайзинг"],
    about_data: {
      image: require("~/static/images/managmant_last_screen.jpg"),
      main_title:
        "В рамках специфікації сучасних стандартів, незалежні держави.",
      description:
        "В рамках специфікації сучасних стандартів, незалежні держави і донині залишаються долею лібералів, які жадають бути своєчасно верифіковані. У своєму прагненні підвищити якість життя, вони забувають, що висока якість позиційних досліджень дозволяє виконати важливі завдання по розробці моделі розвитку. До речі, ретельні дослідження конкурентів, перемагаючи непросту економічну ситуацію, в рівній мірі надані самі собі. З урахуванням сформованої міжнародної обстановки, високоякісний прототип!",
      gold_button: "конференц буклет"
    },
    description: {
      image: require("~/static/images/management_brand.jpg"),
      name: "Premier Palace Hotels",
      description:
        "Ми забезпечуємо професійне управління мережевими і незалежними готелями, оптимізовуємо операційні витрати та збільшуємо прибутки, надаємо всебічну консультаційну підтримку власникам готельних об’єктів на кожному етапі розвитку бізнесу",
      title:
        '<span class="gold_text gold_text--italic gold_text--letter-spacing">Premier Hotels and Resorts</span>  («Прем\'єр <br> Інтернешнл») - перший готельний оператор в Україні, визнаний лідер на ринку гостинності.',
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
      points: [
        {
          id: 0,
          name: "років успіху",
          count: "16"
        },
        {
          id: 1,
          name: "готелів мережі",
          count: "17"
        },
        {
          id: 2,
          name: "туристичних напрямків",
          count: "12"
        },
        {
          id: 3,
          name: "учасників premier club",
          count: "40к"
        }
      ],
      bottom_title: `Чому <span class="italic gold_text"> потрібно </span> <span class="italic gold_text">  вибрати </span> нас?`
    },
    style_config1: {
      gradient_bg: true,
      checked_benefits: true
    }
  }),
  created() {
    this.isManagmentAndFranchisingPage = !this.isManagmentAndFranchisingPage;
  },
  destroyed() {
    this.isManagmentAndFranchisingPage = !this.isManagmentAndFranchisingPage;
  }
};
</script>
<style lang="scss">
@import "../assets/scss/utils.scss";
  #managmant_and_franchising{
    #reviews{
      @include max(768){
        background:unset;
      }
      @include max(620){
        display:none;
      }
    }
  }
</style>
<style lang="scss" scoped>
@import "../assets/scss/utils.scss";

.margin_block {
  @include mt-140;
}
</style>
