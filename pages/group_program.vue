<template>
  <div id="resraurants_and_bars">
    <HeaderBlock />
    <BreadCrumbs :crumbs="crumbs" :light_style="true" />
    <SmallFirstScreen :image="first_screen.img" :title="first_screen.title">
      <KebabFooter :footer_list="footer_list" @openMap="openMap" />
    </SmallFirstScreen>
    <FitnesAbout :description="about" :image="about_gym_image" :line="true" />
    <div class="margin_block2"></div>
    <CustomSliderSwiper
      :slides="custom_slider_slides"
      :description="custom_slider_description"
      :showDescrOnMob="showDescrOnMob"
    >
      <CustomSlideForeground
        :custom_foreground_props="custom_foreground_props"
      />
    </CustomSliderSwiper>
    <LongSlider
      :slider_description="long_slider_description"
      :slides="long_slider_slides"
    />
    <div class="margin_block1"></div>
    <Subscription :description="subscription" />
    <RunningLine :runing_elements="runing_elements" />
    <transition name="fade">
      <ModalTemplate
        @closeModal="closeModal"
        :openModal="is_map_modal"
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
import SmallFirstScreen from "~/blocks/globals/SmallFirstScreen";
import FitnesAbout from "~/blocks/fitnes_layouts/FitnesAbout";
import CustomSliderSwiper from "~/blocks/globals/sliders/CustomSliderSwiper";
import CustomSlideForeground from "~/blocks/fitnes_layouts/CustomSlideForeground";
import LongSlider from "~/blocks/globals/sliders/LongSlider";
import Subscription from "~/blocks/globals/Subscription";
import RunningLine from "~/blocks/globals/RunningLine";

import KebabFooter from "~/blocks/globals/KebabFooter";
//static info
import { group_footer } from "~/assets/js_static_data/footers_first_screens";
import { globalMixin } from "~/plugins/mixins";

export default {
  mixins: [globalMixin],
  components: {
    HeaderBlock,
    SmallFirstScreen,
    FitnesAbout,
    CustomSliderSwiper,
    Subscription,
    LongSlider,
    RunningLine,
    CustomSlideForeground,
    KebabFooter
  },
  methods: {
    openMap() {
      this.is_map_modal = true;
    },
    closeModal() {
      this.is_map_modal = false;
    }
  },
  data: () => ({
    footer_list: group_footer,
    showDescrOnMob: true,
    is_map_modal: false,
    custom_foreground_props: {
      title: "Expander Training",
      button: "детальніше про програму",
      description:
        "Це силове заняття в аеробному режимі, з використанням еспандера. Еспандер - це тренажер, для розтягування (або стискання) якого необхідне певне фізичне зусилля, докладання якого сприяє розвитку всіх м'язів тіла людини. Оптимальний розподіл силових і аеробних навантажень додасть Вашому тілу пружності, покращить поставу, зменшить жировий прошарок."
    },
    first_screen: {
      img: require("~/static/images/group_programfs.jpg"),
      title: "Групові програми"
    },
    crumbs: ["Premier Palace Hotel", "Фітнес і Спа", "Групові програми"],
    about_gym_image: require("~/static/images/group_program_about.jpg"),
    about: {
      title:
        '<span class="gold_text">Наші тренери - майстри спорту</span> та учасники міжнародних змагань - постійно беруть участь у конференціях і семінарах, розробляють й удосконалюють індивідуальні програми тренувань.',
      description:
        "В оздоровчий комплекс Premier Palace Wellness Club входять: VIP-сауна, фінська сауна, турецька лазня, солярій, тренажерний зал із найсучаснішим обладнанням, зал для аеробіки та масажні кабінети. Але найбільше ми пишаємося басейном під скляним куполом, оснащеним системою протитоку, водними атракціонами та гідромасажними установками. Безпосередньо біля басейну знаходиться фітнес-бар «Лагуна», в якому можна спробувати вітамінні коктейлі та страви з Wellness, Pleasure або Japanese меню. У Premier Palace Wellness Club існує гнучка клубна система."
    },
    custom_slider_slides: [
      {
        id: 0,
        image: require("~/static/images/group_program_slider.jpg")
      },
      {
        id: 1,
        image: require("~/static/images/group_program_slider.jpg")
      },
      {
        id: 2,
        image: require("~/static/images/group_program_slider.jpg")
      }
    ],
    custom_slider_description: {
      little_title: "Групові програми",
      big_title:
        '<span class="gold_text italic">Ми дбаємо </span> про ваш відпочинок',
      description:
        "Наші тренери - майстри спорту та учасники міжнародних змагань - постійно беруть участь у конференціях і семінарах, розробляють й удосконалюють індивідуальні програми тренувань. У Premier Palace Wellness Club.",
      slash_button: null
    },
    long_slider_description: {
      little_title: "тренера",
      big_title: "Наш тренера",
      description:
        "Ми створюємо максимальний комфорт та турботу для кожного гостя нашої мережі. Маленькі речі, які можуть не бути видні з першого погляду, залишать.",
      addedInfo: "13 кращих тренерів"
    },
    long_slider_slides: [
      {
        id: 1,
        image: require("~/static/images/cook1.jpg"),
        little_title: null,
        type: "Константин Констанинопольский",
        label: "Тренажерна зала"
      },
      {
        id: 2,
        image: require("~/static/images/cook2.jpg"),
        little_title: null,
        type: "Константин Констанинопольский",
        label: "Аквазона"
      },
      {
        id: 3,
        image: require("~/static/images/cook1.jpg"),
        little_title: null,
        type: "Константин Констанинопольский",
        label: " SPA та масаж"
      },
      {
        id: 4,
        image: require("~/static/images/cook2.jpg"),
        little_title: null,
        type: "Константин Констанинопольский",
        label: " SPA та масаж"
      },
      {
        id: 5,
        image: require("~/static/images/cook1.jpg"),
        little_title: null,
        type: "Константин Констанинопольский",
        label: " Тренажерна зала"
      },
      {
        id: 6,
        image: require("~/static/images/cook2.jpg"),
        little_title: null,
        type: "Константин Констанинопольский",
        label: " Аквазона"
      },
      {
        id: 7,
        image: require("~/static/images/cook2.jpg"),
        little_title: null,
        type: "Константин Констанинопольский",
        label: "SPA та масаж"
      },
      {
        id: 9,
        image: require("~/static/images/cook2.jpg"),
        little_title: null,
        type: "Константин Констанинопольский",
        label: " SPA та масаж"
      }
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
      img_375: require("~/static/images/subscription_fitness-375.jpg")
    },
    runing_elements: [
      {
        id: 1,
        text: "SPA  ТА МАСАЖ",
        main_image: require("~/static/images/list_bar2.jpg"),
        hover_images: [
          require("~/static/images/list_bar2.jpg"),
          require("~/static/images/list_bar1.jpg"),
          require("~/static/images/list_bar3.jpg"),
          require("~/static/images/list_bar4.jpg")
        ]
      },
      {
        id: 2,
        text: "ТРЕНАЖЕРНА ЗАЛА",
        main_image: require("~/static/images/list_bar3.jpg"),
        hover_images: [
          require("~/static/images/list_bar3.jpg"),
          require("~/static/images/list_bar1.jpg"),
          require("~/static/images/list_bar2.jpg"),
          require("~/static/images/list_bar4.jpg")
        ]
      },
      {
        id: 3,
        text: "POLE DANCE STUDIO",
        main_image: require("~/static/images/list_bar4.jpg"),
        hover_images: [
          require("~/static/images/list_bar4.jpg"),
          require("~/static/images/list_bar1.jpg"),
          require("~/static/images/list_bar2.jpg"),
          require("~/static/images/list_bar3.jpg")
        ]
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";
.resraurants_and_bars {
  background: #f0edea;
}
#small_first_screen {
  @include max(sm) {
    background-position-x: 86%;
  }
}
.margin_block2 {
  margin-top: 200px; // bigger then classic - fixes form Ivan
  @include max(1023) {
    margin-top: 148px;
  }
  @include max(767) {
    margin-top: 120px;
  }
}
.long-slider {
  @include mt-140;
}
@include max(425) {
  .custom_slider-swiper {
    background: linear-gradient(
      180deg,
      rgba(240, 237, 234, 0) 0%,
      #f0edea 100%
    );
  }
}
</style>
