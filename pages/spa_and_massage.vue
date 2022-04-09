<template>
  <div id="spa_and_massage">
    <HeaderBlock />
    <BreadCrumbs :crumbs="crumbs" :light_style="true" />
    <SmallFirstScreen :image="first_screen.img" :title="first_screen.title">
      <KebabFooter :footer_list="footer_list" />
    </SmallFirstScreen>
    <AboutBlock
      :description="about"
      :line="true"
      :isSpaAndMassage="isSpaAndMassage"
    />
    <div class="margin_block"></div>
    <CustomSliderSwiper
      :slides="custom_slider_slides"
      :description="custom_slider_description"
      :showDescrOnMob="true"
    >
      <CustomSlideForeground
        :custom_foreground_props="custom_foreground_props"
      />
    </CustomSliderSwiper>
    <Subscription :description="subscription" @openModal="openReservNow" />
    <transition name="fade">
      <ModalTemplate
        @closeModal="closeModal"
        :openModal="is_service_request_modal"
        :data="optionServiceRequestModal"
        :positionCenter="true"
      >
        <ServiceRequestModal />
      </ModalTemplate>
    </transition>
    <!-- <RunningLine :runing_elements="runing_elements" /> -->
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";

import SmallFirstScreen from "~/blocks/globals/SmallFirstScreen";
import AboutBlock from "~/blocks/globals/abouts/AboutBlock";
import CustomSliderSwiper from "~/blocks/globals/sliders/CustomSliderSwiper";
import CustomSlideForeground from "~/blocks/fitnes_layouts/CustomSlideForeground";

import Subscription from "~/blocks/globals/Subscription";
import RunningLine from "~/blocks/globals/RunningLine";

import KebabFooter from "~/blocks/globals/KebabFooter";

//static info
import { time_footer } from "~/assets/js_static_data/footers_first_screens";

export default {
  components: {
    HeaderBlock,
    SmallFirstScreen,
    AboutBlock,
    CustomSliderSwiper,
    Subscription,
    RunningLine,
    CustomSlideForeground,
    KebabFooter
  },
  methods: {
    openReservNow() {
      console.log("open");
      this.is_service_request_modal = true;
    },
    closeModal() {
      this.is_service_request_modal = false;
    }
  },
  data: () => ({
    is_service_request_modal: false,
    footer_list: time_footer,
    isSpaAndMassage: true,
    optionServiceRequestModal: {
      title: "Резервувати зараз",
      description:
        "Ми створюємо максимальний комфорт та турботу для кожного гостя нашої мережі. Маленькі речі, які можуть не бути видні з першого погляду, залишать.",
      button: "відправляти запит"
    },
    custom_foreground_props: {
      title: "СПА догляди для обличчя Alpeor",
      button: "детальніше про програму",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae incidunt voluptas reiciendis rerum, mollitia iure consequatur quidem! Beatae et officiis ea voluptatum laboriosam rerum id, dignissimos, atque blanditiis, quae repellendus?"
    },
    first_screen: {
      img: require("~/static/images/massage_first_screen.jpg"),
      title: "SPA і масаж"
    },
    crumbs: ["Premier Palace Hotel", "Фітнес і Спа", "SPA і масаж"],
    about: {
      image: require("~/static/images/about.jpg"),
      title:
        'В оздоровчий комплекс <span class="gold_text">Premier</span> <span class="gold_text">Palace</span> <span class="gold_text">Wellness</span> <span class="gold_text">Club</span> входять: VIP-сауна, фінська сауна, турецька лазня, солярій, тренажерний зал із найсучаснішим обладнанням, зал для аеробіки та масажні кабінети.',
      description:
        "Шеф-кухар Вікторія Ончева вирішила змістити акцент зі звичних італійських страв в сторону локальних продуктів та авторських інтерпретацій. Ключовою особливістю сезону стане нова інтерпритація смаків середземноморської та української кухонь. Шеф також готує авторську інтерпретацію і актуальну подачу страв, що стали візитною карткою для ресторану.",
      gold_button: "спа-меню",
      second_button: null
    },
    custom_slider_slides: [
      {
        id: 0,
        image: require("~/static/images/spa_slider.jpg")
      },
      {
        id: 1,
        image: require("~/static/images/spa_slider.jpg")
      },
      {
        id: 2,
        image: require("~/static/images/spa_slider.jpg")
      }
    ],
    custom_slider_description: {
      little_title: "Спа процедуры",
      big_title:
        '<span class="gold_text">Ми дбаємо </span>    про ваш відпочинок',
      description:
        "Кожен, хто піклується про своє здоров'я і щодня пропагує здоровий спосіб життя, знайде у нашому клубі всі можливості для підтримки краси, бадьорості духу та тіла. У Premier Palace Wellness Club існує гнучка клубна.",
      slash_button: null
    },
    subscription: {
      little_title: "спа программы",
      big_title_normal: "Дізнайтеся наші",
      big_title_italic: "спа програми",
      description:
        "Відновіть сили та відчуйте внутрішню гармонію, завітавши до Premier Palace Wellness Club. В оздоровчий комплекс Premier Palace Wellness Club входять: VIP-сауна, фінська сауна, турецька лазня, солярій, тренажерний зал із найсучаснішим обладнанням. ",
      button: "отправить запрос",
      img: require("~/static/images/subscription_massage.jpg"),
      img_375: require("~/static/images/subscription_massage-375.jpg")
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

<style lang="scss">
@import "../assets/scss/utils.scss";

#spa_and_massage {
  .margin_block {
    margin-top: 180px;
    @include max(lg) {
      margin-top: 164px;
    }
    @include max(md) {
      margin-top: 148px;
    }
    @include max(sm) {
      margin-top: 80px;
    }
  }
  .slider-container {
    @include max(sm) {
      padding: 48px 0 112px;
    }
  }
}
</style>
