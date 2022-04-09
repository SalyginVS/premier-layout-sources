<template>
  <div id="resraurants_and_bars">
    <HeaderBlock />
    <FirstScreen />
    <AboutBlockTypeThree
      :data="about_block"
      :has_contacts="true"
      :line="true"
    />
    <ListBlock :isRestaurantsAndBars="true" :foregrounds="restaurants" />
    <PinnedBlock :pinned_elements="pinned_info" :slideLine="true" />
    <PinnedItemMob :data="pinned_info[1]" />

    <DoubleSlider :double_slider_desc="double_slider_desc" />
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import FirstScreen from "~/blocks/restaurants_and_bars/FirstScreen";
import AboutBlockTypeThree from "~/blocks/globals/abouts/AboutBlockTypeThree";
import ListBlock from "~/blocks/globals/ListBlock";
import PinnedBlock from "~/blocks/globals/PinnedBlock";
import PinnedItemMob from "~/blocks/globals/PinnedItemMob";
import DoubleSlider from "~/blocks/globals/sliders/DoubleSliderNew";

export default {
  components: {
    HeaderBlock,
    FirstScreen,
    PinnedBlock,
    PinnedItemMob,
    DoubleSlider,
    AboutBlockTypeThree,
    ListBlock,
  },
  data: () => ({
    about_block: {
      image: require("~/static/images/rest_and_bars_left.jpg"),
      title:
        "Ресторани готелю  <span class='gold_text'>Premier Palace Hotel</span> задовольнять смак усіх наших гостей",
      description:
        "Ранок починається з кращого в Києві сніданку, що подається в панорамному ресторані «Теракота». Романтичний вечір знову повертає гостей за столики з видом на центр міста ресторану «Теракота». Тут вас очікують кулі-нарні шедеври Середземномор'я, з великою любов'ю приготовані з бездоганно якісних натуральних автентичних продуктів. З квітня по листопад гості насолоджуються найкращим відкритим рестораном Києва - «Атмосфера», відвідування якого входить до must have будь-якого поважаючого себе гурмана.",
    },
    pinned_info: [
      {
        id: 0,
        image: require("~/static/images/rest_pinned1.jpg"),
        little_title: "Ресторани та бари",
        title_big: {
          one_line_title: false,
          gold_title: "Свіжий органічний",
          black_title: "традиційний",
        },
        description_text:
          "Тут вас очікують кулі-нарні шедеври Середземномор'я, з великою любов'ю приготовані з бездоганно якісних натуральних автентичних продуктів. З квітня по листопад гості насолоджуються найкращим відкритим рестораном Києва - «Атмосфера», відвідування якого входить до must have будь-якого поважаючого себе гурмана.          ",
      },
      {
        id: 1,
        image: require("~/static/images/restaurants_and_bars_fs.png"),
        image_mob: require("~/static/images/img-pinned-mob.png"),
        little_title: "Ресторани та бари",
        title_big: {
          one_line_title: true,
          gold_title: "Breakfast",
          black_title: "go",
        },
        description_text:
          "Отели Премьер - это профессиональный высококлассный сервис и внимание к вашим пожеланиям. Всем гостям мы предоставляем бесплатный трансфер, обслуживание на reception 24/7, доставка еды в номера с последними технологическими новинками и свежим ремонтом, тапочки по вашему размеру и удобства, которых вы достойны!",
      },
    ],
    restaurants: [
      {
        id: 0,
        name: "Представницький Лаунж",
        woking_time: "Час роботи: 11:00 - 23:00",
        type: "Китайська кухня",
        img: require("~/static/images/list_bar3.jpg"),

        description:
          "Представницький Лаунж - це вишуканий ресторан з акцентом на середземноморську та українську кухні. Сезон 2019/2020 стане самим експериментальним в 10-річній історії ресторану Terracotta.",
      },
      {
        id: 1,
        name: "Ресторан Atmosfera",
        woking_time: "Час роботи: 11:00 - 23:00",
        type: "Китайська кухня",
        img: require("~/static/images/list_bar2.jpg"),

        description:
          "Ресторан Atmosfera - це вишуканий ресторан з акцентом на середземноморську та українську кухні. Сезон 2019/2020 стане самим експериментальним в 10-річній історії ресторану Terracotta.",
      },
      {
        id: 2,
        name: "Ресторан Terracotta",
        woking_time: "Час роботи: 11:00 - 23:00",
        type: "Китайська кухня",
        img: require("~/static/images/list_bar1.jpg"),
        description:
          "Ресторан Terracotta - це вишуканий ресторан з акцентом на середземноморську та українську кухні. Сезон 2019/2020 стане самим експериментальним в 10-річній історії ресторану Terracotta.",
      },
      {
        id: 4,
        name: "FanFest Sport Bar",
        woking_time: "Час роботи: 11:00 - 23:00",
        type: "Китайська кухня",
        img: require("~/static/images/list_bar4.jpg"),
        description:
          "FanFest Sport Bar - це вишуканий ресторан з акцентом на середземноморську та українську кухні. Сезон 2019/2020 стане самим експериментальним в 10-річній історії ресторану Terracotta.",
      },
      {
        id: 5,
        name: "Ресторан Ikigai",
        woking_time: "Час роботи: 11:00 - 23:00",
        type: "Китайська кухня",
        img: require("~/static/images/list_bar5.jpg"),
        description:
          "Ресторан Ikigai - це вишуканий ресторан з акцентом на середземноморську та українську кухні. Сезон 2019/2020 стане самим експериментальним в 10-річній історії ресторану Terracotta.",
      },
    ],
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

<style lang="scss" >
@import "../assets/scss/utils.scss";

#resraurants_and_bars {
  #first_screen_text {
    @include max(lg) {
      padding-right: 130px;
      margin-left: auto;
    }
    @include max(md) {
      padding-right: 100px;
    }
    @include max(sm) {
      padding: 0 16px;
      margin-left: unset;
      margin-right: auto;
      align-items: flex-start;
      text-align: left;
    }
    h1 {
      @include max(lg) {
        padding-right: 147px;
      }
      @include max(md) {
        padding-right: 156px;
      }
      @include max(sm) {
        padding-right: 0;
        margin-bottom: 20px;
        text-align: left;
      }
    }
  }
  #pinned-item-mob {
    .description {
      @include max(sm) {
        margin-bottom: 30px;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@import "../assets/scss/utils.scss";

#resraurants_and_bars {
  background-color: #fbfbfb;
  overflow: hidden;
  #pinnedBlock {
    background-color: rgba(255,255,255,0);
    @include max(sm) {
      display: none;
    }
  }
  #pinned-item-mob {
    display: none;
    @include max(sm) {
      display: flex;
      margin-bottom: 80px;
    }
  }
  #double_slider_container {
    @include max(sm) {
      margin-bottom: 80px;
    }
  }
  .restaurants-and-bars{
    margin-top: 140px;
    @include max(1439){
      margin-top: 124px;
    }
    @include max(1023){
      margin-top: 112px;
    }
    @include max(767){
      margin-top: 80px;
    }
  }
}
</style>
