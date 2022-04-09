<template>
  <div class="one_restaurant">
    <HeaderBlock />
    <BreadCrumbs :crumbs="crumbs" :light_style="true" />
    <SmallFirstScreen title="Ресторан Terracotta">
      <KebabFooter :footer_list="footer_list" :centerPosition="true" />
    </SmallFirstScreen>
    <AboutBlock :description="$device.isMobile ? aboutMobile : about" />
    <BigSlideSlider
      :slides="big_slider"
      :config="big_slider_config"
      :indent="true"
    >
      <HallSliderForeground />
    </BigSlideSlider>
    <Chef />
    <DoubleSlider
      :double_slider_desc="double_slider_desc"
      :linghtBlock="true"
    />
    <Order />
    <RunningLine :runing_elements="runing_elements" />
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";

import SmallFirstScreen from "~/blocks/globals/SmallFirstScreen";
import AboutBlock from "~/blocks/globals/abouts/AboutBlock";
import BigSlideSlider from "~/blocks/globals/sliders/BigSlideSlider";
import Chef from "~/blocks/restaurant/Chef";
import DoubleSlider from "~/blocks/globals/sliders/DoubleSliderNew";
import Order from "~/blocks/restaurant/Order";
import RunningLine from "~/blocks/globals/RunningLine";
import HallSliderForeground from "~/blocks/globals/HallSliderForeground";
import KebabFooter from "~/blocks/globals/KebabFooter";
//static_info
import { one_restaurant } from "~/assets/js_static_data/footers_first_screens";

export default {
  components: {
    HeaderBlock,
    SmallFirstScreen,
    AboutBlock,
    BigSlideSlider,
    Chef,
    DoubleSlider,
    Order,
    RunningLine,
    HallSliderForeground,
    KebabFooter,
  },
  data: () => ({
    footer_list: one_restaurant,
    crumbs: [
      "Premier Palace Hotel",
      "Ресторани та бари",
      "Ресторан Terracotta",
    ],
    about: {
      image: require("~/static/images/one_rest_about.jpg"),
      title:
        '<span class="gold_text">Ресторан Terracotta</span>  - це вишуканий ресторан з акцентом на середземноморську та українську кухні. Сезон 2019/2020 стане самим експериментальним в 10-річній історії ресторану Terracotta.',
      description:
        "Шеф-кухар Вікторія Ончева вирішила змістити акцент зі звичних італійських страв в сторону локальних продуктів та авторських інтерпретацій. Ключовою особливістю сезону стане нова інтерпритація смаків середземноморської та української кухонь. Також є <span class='text-medium'>безкоштовна парковка</span>. Шеф також готує авторську інтерпретацію і актуальну подачу страв. ",
      gold_button: "забронювати столик",
      second_button: "Меню Terracotta",
    },
    aboutMobile: {
      image: require("~/static/images/one_rest_about.jpg"),
      title:
        '<span class="gold_text">Ресторан Terracotta</span>  - це вишуканий ресторан з акцентом на середземноморську та українську кухні. Сезон 2019/2020 стане самим експериментальним в 10-річній історії ресторану Terracotta.',
      description:
        "Шеф-кухар Вікторія Ончева вирішила змістити акцент зі звичних італійських страв в сторону локальних продуктів та авторських інтерпретацій. Ключовою особливістю сезону стане нова інтерпритація смаків середземноморської та української кухонь. Також є <span class='text-medium'>безкоштовна парковка</span>. Шеф також готує авторську інтерпретацію і актуальну подачу страв. ",
      gold_button: "Меню",
      second_button: "забронювати столик"
    },
    runing_elements: [
      {
        id: 0,
        text: "ПРЕДСТАВНИЦЬКИЙ ЛАУНДЖ",
        main_image: require("~/static/images/list_bar1.jpg"),
        hover_images: [
          require("~/static/images/list_bar1.jpg"),
          require("~/static/images/list_bar2.jpg"),
          require("~/static/images/list_bar3.jpg"),
          require("~/static/images/list_bar4.jpg"),
        ],
      },
      {
        id: 1,
        text: "ЛАУНДЖ",
        main_image: require("~/static/images/list_bar2.jpg"),
        hover_images: [
          require("~/static/images/list_bar2.jpg"),
          require("~/static/images/list_bar1.jpg"),
          require("~/static/images/list_bar3.jpg"),
          require("~/static/images/list_bar4.jpg"),
        ],
      },
      {
        id: 2,
        text: "ПРЕДСТАВНИЦЬКИЙ",
        main_image: require("~/static/images/list_bar3.jpg"),
        hover_images: [
          require("~/static/images/list_bar3.jpg"),
          require("~/static/images/list_bar1.jpg"),
          require("~/static/images/list_bar2.jpg"),
          require("~/static/images/list_bar4.jpg"),
        ],
      },
      {
        id: 3,
        text: "test",
        main_image: require("~/static/images/list_bar4.jpg"),
        hover_images: [
          require("~/static/images/list_bar4.jpg"),
          require("~/static/images/list_bar1.jpg"),
          require("~/static/images/list_bar2.jpg"),
          require("~/static/images/list_bar3.jpg"),
        ],
      },
    ],
    big_slider: [
      {
        id: 0,
        image: require("~/static/images/one_rest_slider.jpg"),
      },
      {
        id: 1,
        image: require("~/static/images/one_rest_slider.jpg"),
      },
      {
        id: 2,
        image: require("~/static/images/one_rest_slider.jpg"),
      },
    ],
    big_slider_config: {
      gradient_bg: true,
      three_d_tour: true,
      pagination: true,
    },
    double_slider_desc: {
      little_title: "НАШІ Спеціальні пропозиції",
      big_title: "Спеціальні пропозиції",
      link: "всі пропозиції",
      filters: [
        {
          id: 0,
          name: "тип спецпропозиції",
          type: "",
          options: [
            {
              title: "Event1 ",
              value: "Event1",
            },
            {
              title: "Event2",
              value: "Event2",
            },
            {
              title: "Event3",
              value: "Event3",
            },
            {
              title: "Event4",
              value: "Event4",
            },
            {
              title: "Event5",
              value: "Event5",
            },
          ],
        },
      ],
    },
  }),
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";

.one_restaurant {
  background-color: #fbfbfb;
  #double_slider_container {
    @include max(sm) {
      margin-bottom: 80px;
    }
  }
}
</style>
