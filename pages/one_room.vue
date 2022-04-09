<template>
  <div id="one_room">
    <HeaderBlock />
    <BreadCrumbs :crumbs="crumbs" :light_style="true" />
    <OneRoomFirstScreen
      :image="first_screen.img"
      :title="screenWidth < 700 ? first_screen.titleMob : first_screen.title"
      :footerExtraInfo="first_screen.price"
    >
    </OneRoomFirstScreen>
    <AboutBlockTypeFive :line="true" :description="about" />
    <BigSlideSlider
      :slides="big_slider"
      :config="big_slider_config"
      :indent="true"
      :light_image="true"
    >
      <HallSliderForeground :data="big_slider_title" />
    </BigSlideSlider>
    <div class="room-services">
      <RoomServices />      
    </div>


    <RunningLine :runing_elements="runing_elements" />
    <transition name="fade">
      <LogInModal @closeModal="closeModal" :openModal="openLogInModal" />
    </transition>
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";

import OneRoomFirstScreen from "~/blocks/one_room/OneRoomFirstScreen";
import AboutBlockTypeFive from "~/blocks/globals/abouts/AboutBlockTypeFive";
import BigSlideSlider from "~/blocks/globals/sliders/BigSlideSlider";
import RunningLine from "~/blocks/globals/RunningLine";
import HallSliderForeground from "~/blocks/globals/HallSliderForeground";
import RoomServices from "~/blocks/globals/RoomServices";
//static_info
import { one_restaurant } from "~/assets/js_static_data/footers_first_screens";

import { mapState } from "vuex";
import { globalMixin } from "~/plugins//mixins";

export default {
  mixins: [globalMixin],
  components: {
    HeaderBlock,
    OneRoomFirstScreen,
    AboutBlockTypeFive,
    BigSlideSlider,
    RunningLine,
    HallSliderForeground,
    RoomServices,
  },
  computed: {
    ...mapState(["openLogInModal"])
  },

  data: () => ({
    first_screen: {
      img: require("~/static/images/main-one-room.jpg"),
      title: "Номер Прем'єр на Представницькому поверсі",
      titleMob: "Номер Прем'єр для Президента",
      price: "5550 ₴"
    },
    crumbs: [
      "Premier Palace Hotel",
      "номери",
      "Номер Прем'єр на Представницькому поверсі"
    ],
    about: {
      image: require("~/static/images/room.jpg"),

      title:
        '<span class="gold_text italic">Изысканно простой </span>  двухкомнатный люкс в строгом исполнении. Обои золотистого цвета, стильные гардины, удобная и оригинальная мягкая мебель.'
    },
    runing_elements: [
      {
        id: 0,
        text: "Номер Прем'єр на Представницькому поверсі",
        main_image: require("~/static/images/list_bar1.jpg"),
        hover_images: [
          require("~/static/images/list_bar1.jpg"),
          require("~/static/images/list_bar2.jpg"),
          require("~/static/images/list_bar3.jpg"),
          require("~/static/images/list_bar4.jpg")
        ]
      },
      {
        id: 1,
        text: "Классический двухместный",
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
        text: "Номер Прем'єр на Представницькому поверсі",
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
        text: "Классический двухместный",
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
        image: require("~/static/images/one_rest_slider.jpg")
      },
      {
        id: 1,
        image: require("~/static/images/one_rest_slider.jpg")
      },
      {
        id: 2,
        image: require("~/static/images/one_rest_slider.jpg")
      },
      {
        id: 3,
        image: require("~/static/images/one_rest_slider.jpg")
      },
      {
        id: 4,
        image: require("~/static/images/one_rest_slider.jpg")
      },
      {
        id: 5,
        image: require("~/static/images/one_rest_slider.jpg")
      },
      {
        id: 6,
        image: require("~/static/images/one_rest_slider.jpg")
      },
      {
        id: 7,
        image: require("~/static/images/one_rest_slider.jpg")
      },
      {
        id: 8,
        image: require("~/static/images/one_rest_slider.jpg")
      }
    ],
    big_slider_config: {
      gradient_bg: true,
      three_d_tour: true
    },
    big_slider_title: "Спальня"
  }),
  methods: {
    closeModal() {
      this.$store.commit("setCloseLogInModal");
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/utils.scss";

#one_room {
  #small_first_screen {
    @include max(lg) {
      flex-direction: column;
    }
    .main-title {
      width: 80%;
      padding-bottom: 0px;
      margin-bottom: 64px;
      @include max(lg) {
        width: calc(100% - 48px);
        margin-bottom: 60px;
      }
      @include max(sm) {
        width: calc(100% - 108px);
        margin-bottom: 40px;
      }
    }
  }
  .footer_wrapper {
    @include max(lg) {
      position: static;
    }
    h6 {
      @include max(lg) {
        font-size: 24px;
      }
      @include max(md) {
        font-size: 22px;
      }
      @include max(sm) {
        font-size: 18px;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@import "../assets/scss/utils.scss";

#one_room {
  background-color: #fbfbfb;
}
#small_first_screen {
  height: 95vh;
  @include max(sm) {
    height: 100vh;
  }
}
.three_d_tour_options {
  //padding-bottom: 130px;
  padding-bottom: 90px;
  @include max(sm) {
    margin-bottom: 144px;
  }
}
//.room-services-block {
  // @include max(lg) {
  //   padding: 74px 134px 124px 134px;
  // }
  // @include max(md) {
  //   padding: 54px 48px 112px 48px;
  // }
  // @include max(sm) {
  //   padding: 14px 18px 80px 18px;
  // }
//}
.big_slide_slider {
  margin-bottom: unset;
}
.room-services{
  padding: 0 168px;
  padding-top: 140px;
  padding-bottom: 148px;
  background-color: #F0EDEA;
  @include max(1439) {
    padding: 124px 134px;
  }
  @include max(1023) {
    padding: 112px 48px;
  }
  @include max(767) {
    padding: 80px 18px;
  }
}
</style>
