<template>
  <div id="resraurants_and_bars">
    <HeaderBlock />
    <BreadCrumbs :crumbs="crumbs" :light_style="true" />
    <SmallFirstScreen
      :image="first_screen.img"
      :title="first_screen.title"
      :fullScreen="true"
      :isHotelSchoolPage="isHotelSchoolPage"
    >
      <KebabFooter :footer_list="footer_list" :isHotelSchoolPage="isHotelSchoolPage" />
    </SmallFirstScreen>
    <AboutBlockTypeFour
      :image="about_image"
      :description="about_description"
      :isHotelSchoolPage="isHotelSchoolPage"
    />
    <div class="distance_block"></div>
    <div class="pinned-block__wrapper">
      <PinnedItemMob
        :data="pinned_info"
        :isHotelSchoolPage="isHotelSchoolPage"
      />
      <PinnedBlock
        :prop-class="'pinned_wrapper--top'"
        :pinned_elements="pinned_info"
        :background_type_dark="true"
      />
    </div>
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import SmallFirstScreen from "~/blocks/globals/SmallFirstScreen";
import KebabFooter from "~/blocks/globals/KebabFooter";
import PinnedBlock from "~/blocks/globals/PinnedBlock";
import PinnedItemMob from "~/blocks/globals/PinnedItemMob";
import AboutBlockTypeFour from "~/blocks/globals/abouts/AboutBlockTypeFour";

//static info
import { school_hotel } from "~/assets/js_static_data/footers_first_screens";

export default {
  components: {
    HeaderBlock,
    SmallFirstScreen,
    PinnedBlock,
    AboutBlockTypeFour,
    KebabFooter,
    PinnedItemMob
  },
  data: () => ({
    isHotelSchoolPage: false,
    footer_list: school_hotel,
    first_screen: {
      img: require("~/static/images/school_fs.jpg"),
      title: "Школа готелів"
    },
    crumbs: ["головна мережІ", "Управління та франчайзинг", "Школа готелів"],
    about_image: require("~/static/images/school_about.jpg"),
    about_description: {
      title:
        "<span class='gold_text italic'>Вища Школа Готельного Бізнесу</span> це комплексний курс навчання готельєрів, створений експертами оператора мережі готелів Premier",
      description:
        "Тренінги на вашій локації. Корпоративні (виїзні) тренінги. Можливість навчання співробітників готелю з виїздом нашого викладача на територію замовника (готель / ресторан). Всі тренінги адаптуються під побажання і потреби замовника. ",
      benefits: [
        "16-річний досвід в України та за кордоном",
        "Викладачі-практики",
        "Унікальні авторські програми",
        "Реальні кейси та практичні рекомендації",
        "Індивідуальні консультації"
      ]
    },
    pinned_info: [
      {
        id: 0,
        image: require("~/static/images/meeting_pinned1.jpg"),
        little_title: "КОНФЕРенц зали",
        title_big: {
          one_line_title: false,
          gold_title: "Вища школа",
          black_title: "готельного бізнесу"
        },
        description_text:
          "Ми підберемо для Вас максимально комфортні умови, відповідні контексту заходу, його атмосфері, кількістю очікуваних гостей, колег або бізнес-партнерів. Premier Palace Hotel може запропонувати Вам найрізноманітніший вибір локацій на будь-який смак - починаючи з Гранд Холу «Софіївський», здатним прийняти до 380 гостей, який може стати майданчиком для великої міжнародної конференції, - до vip-кімнати на представницькому поверсі для зустрічі у вузькому колі.          ",
        two_buttons: {
          gold_button: "читати більше"
        }
      },
      {
        id: 1,
        image: require("~/static/images/meeting_pinned2.jpg"),
        little_title: "Тренінги",
        title_big: {
          one_line_title: true,
          gold_title: "Тренінги",
          black_title: "для готельєрів"
        },
        two_buttons: {
          gold_button: "читати більше"
        },
        description_text:
          "Для швидкої, легкої та професійної організації будь-якої  зустрічі, конференції чи бізнес-форуму нами створено принципово нову концепцію – Ideal Meeting. Її було ретельно розроблено командою професіоналів Premier Hotels and Resorts на базі глибинного досвіду та знань, заснованих на багаторічній практичній роботі готелів з різних куточків України.  Концепція ідеального заходу, яку ми пропонуємо, сучасна, зручна, дуже легка в організації та соціально-зорієнтована завдяки чотирьом основним складовим: EASY, SMART, GREEN, FAST. Детальніше"
      }
    ]
  }),
  created() {
    this.isHotelSchoolPage = !this.isHotelSchoolPage;
  },
  destroyed() {
    this.isHotelSchoolPage = !this.isHotelSchoolPage;
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";
#pinnedBlock {
  @include max(700) {
    display: none !important;
  }
}
#pinned-item-mob {
  display: none !important;
  @include max(700) {
    display: block !important;
  }
}
.distance_block {
  @include mb-140;
  @include max(700) {
    margin-bottom: 40px;
  }
}
.pinned-block__wrapper {
  @include min(1441) {
    background-color: #f0edea;
  }
}
</style>
