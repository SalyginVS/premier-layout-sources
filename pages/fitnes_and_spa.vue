<template>
  <div id="fitnes_and_spa">
    <HeaderBlock />
    <BreadCrumbs :crumbs="crumbs" :light_style="true" />
    <FirstScreen :colorKebab="true" :openMap="openMap" />
    <AboutBlockTypeTwo
      :data="about_block"
      :has_contacts="true"
      :maxLength="maxLength"
      :isFitnesAndSpa="isFitnesAndSpa"
    />
    <ListBlock :foregrounds="spas" :label="false" :little_info="false" />
    <LongSlider
      :slider_description="slider_description"
      :slides="long_slider_slides"
    />
    <div class="margin_block"></div>

    <Subscription :description="subscription" />
    <transition name="fade">
      <ModalTemplate
        @closeModal="closeModal"
        :openModal="is_map_modal_open"
        :positionStart="true"
        :mapWrapper="true"
      >
        <OneHotelMap />
      </ModalTemplate>
    </transition>
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import BreadCrumbs from "~/components/BreadCrumbs";
import FirstScreen from "~/blocks/fitnes_and_spa/FirstScreen";
import AboutBlockTypeTwo from "~/blocks/globals/abouts/AboutBlockTypeTwo";
import ListBlock from "~/blocks/globals/ListBlock";
import LongSlider from "~/blocks/globals/sliders/LongSlider";
import Subscription from "~/blocks/globals/Subscription";

export default {
  components: {
    HeaderBlock,
    FirstScreen,
    AboutBlockTypeTwo,
    ListBlock,
    LongSlider,
    Subscription,
    BreadCrumbs,
  },
  data: () => ({
    isFitnesAndSpa: false,
    is_map_modal_open:false,
    crumbs: ["Premier Palace Hotel", "Фітнес і Спа"],
    slider_description: {
      fitnes_and_spa : true,
      little_title: "тренера",
      big_title: "Нашi тренера",
      description:
        "Ми створюємо максимальний комфорт та турботу для кожного гостя нашої мережі. Маленькі речі, які можуть не бути видні з першого погляду, залишать.",
      addedInfo: "13 кращих тренерів",
    },
    about_block: {
      left_image: require("~/static/images/fitnes_and_spa_about.jpg"),
      little_title: "про Фітнес і Спа",
      black_title: "Оновіться та відчуйте",
      gold_title: "внутрішню гармонію",
      description:
        "В оздоровчий комплекс Premier Palace Wellness Club входять: VIP-сауна, фінська сауна, турецька лазня, солярій, тренажерний зал із найсучаснішим обладнанням, зал для аеробіки та масажні кабінети. Але найбільше ми пишаємося басейном під скляним куполом, оснащеним системою протитоку, водними атракціонами та гідромасажними установками. Безпосередньо біля басейну знаходиться фітнес-бар «Лагуна», в якому можна спробувати вітамінні коктейлі та страви з Wellness, Pleasure або Japanese меню.",
      small_image: require("~/static/images/little_right_image.jpg"),
    },
    long_slider_slides: [
      {
        id: 0,
        image: require("~/static/images/cook1.jpg"),
        little_title: null,
        type: "Константин Констанинопольский",
        label: "Тренажерна зала",
      },
      {
        id: 1,
        image: require("~/static/images/cook2.jpg"),
        little_title: null,
        type: "Константин Констанинопольский",
        label: "Аквазона",
      },
      {
        id: 2,
        image: require("~/static/images/cook1.jpg"),
        little_title: null,
        type: "Константин Констанинопольский",
        label: "SPA та масаж",
      },
      {
        id: 3,
        image: require("~/static/images/cook2.jpg"),
        little_title: null,
        type: "Константин Констанинопольский",
        label: "SPA та масаж",
      },
      {
        id: 4,
        image: require("~/static/images/cook1.jpg"),
        little_title: null,
        type: "Константин Констанинопольский",
        label: "SPA та масаж",
      },
      {
        id: 5,
        image: require("~/static/images/cook2.jpg"),
        little_title: null,
        type: "Константин Констанинопольский",
        label: "SPA та масаж",
      },
      {
        id: 6,
        image: require("~/static/images/cook1.jpg"),
        little_title: null,
        type: "Константин Констанинопольский",
        label: "SPA та масаж",
      },
      {
        id: 7,
        image: require("~/static/images/cook2.jpg"),
        little_title: null,
        type: "Константин Констанинопольский",
        label: "SPA та масаж",
      },
      {
        id: 8,
        image: require("~/static/images/cook1.jpg"),
        little_title: null,
        type: "Константин Констанинопольский",
        label: "SPA та масаж",
      },
      {
        id: 9,
        image: require("~/static/images/cook2.jpg"),
        little_title: null,
        type: "Константин Констанинопольский",
        label: "SPA та масаж",
      },
      {
        id: 10,
        image: require("~/static/images/cook1.jpg"),
        little_title: null,
        type: "Константин Констанинопольский",
        label: "SPA та масаж",
      },
    ],
    spas: [
      {
        id: 0,
        name: "Аквазона",
        img: require("~/static/images/spa1.jpg"),
        description:
          "Наші тренери - майстри спорту та учасники міжнародних змагань - постійно беруть участь у конференціях і семінарах, розробляють й удосконалюють індивідуальні програми тренувань.",
      },
      {
        id: 1,
        name: "SPA та масаж",
        img: require("~/static/images/spa2.jpg"),
        link: "/spa_and_massage",
        description:
          "Наші тренери - майстри спорту та учасники міжнародних змагань - постійно беруть участь у конференціях і семінарах, розробляють й удосконалюють індивідуальні програми тренувань.",
      },
      {
        id: 2,
        name: "Дитячий фітнес",
        img: require("~/static/images/spa3.jpg"),
        description:
          "Наші тренери - майстри спорту та учасники міжнародних змагань - постійно беруть участь у конференціях і семінарах, розробляють й удосконалюють індивідуальні програми тренувань.",
      },
      {
        id: 3,
        name: "Тренажерна зала",
        img: require("~/static/images/spa4.jpg"),
        link: "/gym",
        description:
          "Наші тренери - майстри спорту та учасники міжнародних змагань - постійно беруть участь у конференціях і семінарах, розробляють й удосконалюють індивідуальні програми тренувань.",
      },
      {
        id: 4,
        name: "Групові програми",
        img: require("~/static/images/spa5.jpg"),
        link: "/group_program",
        description:
          "Наші тренери - майстри спорту та учасники міжнародних змагань - постійно беруть участь у конференціях і семінарах, розробляють й удосконалюють індивідуальні програми тренувань.",
      },
    ],
    subscription: {
      little_title: "абонемент та гостьові візити",
      big_title_normal: "Клубна система",
      big_title_italic: "Premier Palace Hotel",
      description:
        "Відновіть сили та відчуйте внутрішню гармонію, завітавши до Premier Palace Wellness Club. В оздоровчий комплекс Premier Palace Wellness Club входять: VIP-сауна, фінська сауна, турецька лазня, солярій, тренажерний зал із найсучаснішим обладнанням.",
      button: "Детальніше",
      link: "/premier_club",
      img: require("~/static/images/subscription_fitness.jpg"),
      img_375: require("~/static/images/subscription_fitness-375.jpg"),
    },
  }),
  computed: {
    maxLength() {
      let endPosIndex = this.about_block.description.indexOf(".");
      return this.about_block.description.slice(0, endPosIndex + 1).split(" ")
        .length;
    },
  },
  methods:{
    openMap(){
      console.log(open)
      this.is_map_modal_open=!this.is_map_modal_open
    },
    closeModal(){
      this.is_map_modal_open=!this.is_map_modal_open
    }
  },
  created() {
    this.isFitnesAndSpa = !this.isFitnesAndSpa;
  },
  destroyed() {
    this.isFitnesAndSpa = !this.isFitnesAndSpa;
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";
.margin_block {
  @include mt-140;
}
.long-slider {
  @include mt-140;
}
#fitnes_and_spa {
  overflow-x: hidden;
  .restaurant_list-wrapper {
    background-color: #f0edea;
    @include max(sm) {
      background-color: #f0edea;
    }
  }
}
</style>
