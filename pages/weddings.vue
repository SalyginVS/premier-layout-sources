<template>
  <div id="weddings">
    <HeaderBlock />
    <BreadCrumbs :crumbs="crumbs" :light_style="true" />
    <SmallFirstScreen :image="first_screen.img" :title="first_screen.title" />
    <AboutBlockTypeThree
      :data="about_block"
      :line="true"
      :isWeddingPage="isWeddingPage"
    />
    <OurHalls
      :slider_description="big_slider_description"
      :line="true"
      :isWeddingPage="isWeddingPage"
    />
    <WeddingGalery />
    <DoubleSlider
      :double_slider_desc="double_slider_desc"
      :linghtBlock="true"
      :isWeddingPage="isWeddingPage"
    />
    <Subscription :description="subscription" />
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import SmallFirstScreen from "~/blocks/globals/SmallFirstScreen";
import AboutBlockTypeThree from "~/blocks/globals/abouts/AboutBlockTypeThree";
import WeddingGalery from "~/blocks/weddings/WeddingGalery";
import OurHalls from "~/blocks/weddings/OurHalls";
import Subscription from "~/blocks/globals/Subscription";
import DoubleSlider from "~/blocks/globals/sliders/DoubleSliderNew";
import BreadCrumbs from "~/components/BreadCrumbs";

export default {
  components: {
    HeaderBlock,
    SmallFirstScreen,
    AboutBlockTypeThree,
    WeddingGalery,
    OurHalls,
    Subscription,
    BreadCrumbs,
    DoubleSlider
  },
  data: () => ({
    isWeddingPage: false,
    first_screen: {
      img: require("~/static/images/one_hotel_care.jpg"),
      title: "Весілля"
    },
    crumbs: ["головна мережІ", "міста", "київ"],
    about_block: {
      image: require("~/static/images/wedding_about.jpg"),
      title:
        "Ресторани готелю   <span class='gold_text'>Premier Palace Hotel</span> задовольнять смак усіх наших гостей",
      description:
        "В оздоровчий комплекс Premier Palace Wellness Club входять: VIP-сауна, фінська сауна, турецька лазня, солярій, тренажерний зал із найсучаснішим обладнанням, зал для аеробіки та масажні кабінети. Але найбільше ми пишаємося басейном під скляним куполом, оснащеним системою протитоку, водними атракціонами та гідромасажними установками. Безпосередньо біля басейну знаходиться фітнес-бар «Лагуна», в якому можна спробувати вітамінні коктейлі та страви з Wellness, Pleasure або Japanese меню. У Premier Palace Wellness Club існує гнучка клубна система. В оздоровчий комплекс Premier Palace Wellness Club входять: VIP-сауна, фінська сауна, турецька лазня, солярій, тренажерний зал із найсучаснішим. "
    },
    subscription: {
      little_title: "Зустрічі та події",
      big_title_normal: "Замовте зал ",
      big_title_italic: "для вашого заходу",
      description:
        "Відновіть сили та відчуйте внутрішню гармонію, завітавши до Premier Palace Wellness Club. В оздоровчий комплекс Premier Palace Wellness Club входять: VIP-сауна, фінська сауна, турецька лазня, солярій, тренажерний зал із найсучаснішим обладнанням.",
      button: "забронювати подію",
      img: require("~/static/images/subscribe_wedding.jpg")
    },
    big_slider_description: {
      little_title: "Конференц та банкетні зали",
      big_title: "Наші зали",
      description:
        'Ми підберемо для Вас максимально комфортні умови, відповідні контексту заходу, його атмосфері <a  href="tel:+38 (044) 244 13 04" >+38 (044) 244 13 04</a>  або пишіть на <a target="_blank"  href="mailto:pr@phnr.com">pr@phnr.com</a>',
      link: "дивитись всі",
      filters: [
        {
          id: 0,
          name: "тип події",
          type: "",
          options: [
            {
              title: "Event1 ",
              value: "Event1"
            },
            {
              title: "Event2",
              value: "Event2"
            },
            {
              title: "Event3",
              value: "Event3"
            },
            {
              title: "Event4",
              value: "Event4"
            },
            {
              title: "Event5",
              value: "Event5"
            }
          ]
        },
        {
          id: 1,
          name: "число осіб",
          type: "",
          options: [
            {
              title: "1",
              value: "1"
            },
            {
              title: "2",
              value: "2"
            },
            {
              title: "3",
              value: "3"
            },
            {
              title: "4",
              value: "4"
            },
            {
              title: "5",
              value: "5"
            }
          ]
        }
      ]
    },
    double_slider_desc: {
      little_title: "НАШІ Спеціальні пропозиції",
      big_title: "Спеціальні пропозиції",
      link: "всі пропозиції"
    }
  }),
  created() {
    this.isWeddingPage = !this.isWeddingPage;
  },
  destroyed() {
    this.isWeddingPage = !this.isWeddingPage;
  }
};
</script>

<style lang="scss">
@import "../assets/scss/utils.scss";
#weddings {
  .big_slide_slider {
    @include max(1920) {
      padding-bottom: 140px;
    }
    @include max(1024) {
      padding-bottom: 124px;
    }
    @include max(768) {
      padding-bottom: 112px;
    }
    .big_slider_wrapper {
      .line-simple {
        left: unset;
        right: 120px;
        top: -100px;
      }
    }
  }
  #double_slider_container {
    @include max(375) {
      margin-bottom: 79px;
    }
  }
}
</style>
