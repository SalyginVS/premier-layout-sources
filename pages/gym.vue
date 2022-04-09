<template>
  <div id="gym">
    <HeaderBlock />
    <BreadCrumbs :crumbs="crumbs" :light_style="true" />
    <SmallFirstScreen :image="first_screen.img" :title="first_screen.title">
      <KebabFooter :footer_list="footer_list"  />
    </SmallFirstScreen>
    <FitnesAbout
      :description="screenWidth > 1439 ? about : aboutMob"
      :image="about_gym_image"
    />
    <BigSlideSlider
      :slides="big_slider"
      :config="big_slider_config"
      :indent="true"
    >
      <HallSliderForeground :styleSubtitle="true" />
    </BigSlideSlider>
    <Subscription :description="subscription" />
    <RunningLine :runing_elements="runing_elements" />
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";

import SmallFirstScreen from "~/blocks/globals/SmallFirstScreen";
import FitnesAbout from "~/blocks/fitnes_layouts/FitnesAbout";
import Subscription from "~/blocks/globals/Subscription";
import RunningLine from "~/blocks/globals/RunningLine";
import BigSlideSlider from "~/blocks/globals/sliders/BigSlideSlider";

import HallSliderForeground from "~/blocks/globals/HallSliderForeground";
import KebabFooter from "~/blocks/globals/KebabFooter";

//static info
import { time_footer } from "~/assets/js_static_data/footers_first_screens";
import { globalMixin } from "~/plugins//mixins";

export default {
  components: {
    HeaderBlock,
    SmallFirstScreen,
    FitnesAbout,
    BigSlideSlider,
    Subscription,
    RunningLine,
    HallSliderForeground,
    KebabFooter
  },
  mixins: [globalMixin],
  data: () => ({
    footer_list: time_footer,
    first_screen: {
      img: require("~/static/images/gym_first_screen.jpg"),
      title: "Тренажерна зала"
    },
    crumbs: ["Premier Palace Hotel", "Фітнес і Спа", "Тренажерна зала"],
    about_gym_image: require("~/static/images/about_gym.jpg"),
    about: {
      title:
        "<span class='gold_text'>Фітнес</span> - це чудово, адже завдяки подібним активностям і спорту загалом наше тіло стає здоровим і більш досконалим. Зона  силові тренажери, а також зона вільної ваги, <span class='gold_text'>кардіотренажерів</span>",
      description:
        "В оздоровчий комплекс Premier Palace Wellness Club входять: VIP-сауна, фінська сауна, турецька лазня, солярій, тренажерний зал із найсучаснішим обладнанням, зал для аеробіки та масажні кабінети. Але найбільше ми пишаємося басейном під скляним куполом, оснащеним системою протитоку, водними атракціонами та гідромасажними установками. Безпосередньо біля басейну знаходиться фітнес-бар «Лагуна», в якому можна спробувати вітамінні коктейлі та страви з Wellness, Pleasure або Japanese меню. У Premier Palace Wellness Club існує гнучка клубна система."
    },
    aboutMob: {
      title:
        "<span class='gold_text'>Фітнес</span> - це чудово, адже завдяки подібним активностям і спорту загалом наше тіло стає здоровим і більш досконалим. </span>",
      description:
        "В оздоровчий комплекс Premier Palace Wellness Club входять: VIP-сауна, фінська сауна, турецька лазня, солярій, тренажерний зал із найсучаснішим обладнанням, зал для аеробіки та масажні кабінети. Але найбільше ми пишаємося басейном під скляним куполом, оснащеним системою протитоку, водними атракціонами та гідромасажними установками."
    },
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
    ],
    big_slider: [
      {
        id: 0,
        image: require("~/static/images/gym_big_slider.jpg")
      },
      {
        id: 1,
        image: require("~/static/images/gym_big_slider.jpg")
      },
      {
        id: 2,
        image: require("~/static/images/gym_big_slider.jpg")
      }
    ],
    big_slider_config: {
      gradient_bg: true,
      three_d_tour: true,
      pagination: true,
    }
  }),
};
</script>

<style lang="scss">
@import "../assets/scss/utils.scss";

#gym {
  .big_slide_slider{
    margin-bottom: 0;
    .swiper-slide{
      @include max(767){
        height:223px;
      }
    }
  }
  #fitnes-about{
    .left_image_wrapper{
      @include max(1023){
        margin-top:77px;
      }
      @include max(767){
        margin-top:0;
      }
    }
    .description_wrapper{
      h4{
        @include max(1023){
          max-width:423px;
        }
      }
    }
  }
}
</style>
