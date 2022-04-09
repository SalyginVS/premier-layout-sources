<template>
  <div id="resraurants_and_bars">
    <HeaderBlock />
    <BreadCrumbs :crumbs="crumbs" :light_style="true" />
    <SmallFirstScreen :image="first_screen.img" :title="first_screen.title" :isMob="isHallsPage">
      <KebabFooter :footer_list="footer_list" :isMob="true" :title="first_screen.title" />
    </SmallFirstScreen>
    <AboutBlockTypeOne :about_data="about_data" :isHallsPage="isHallsPage" :changeBtnSize="true" />
    <HallTables :isHallsPage="isHallsPage" />
    <AllHalls :filters="filters" :isHallsPage="isHallsPage" />
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import SmallFirstScreen from "~/blocks/globals/SmallFirstScreen";
import AboutBlockTypeOne from "~/blocks/globals/abouts/AboutBlockTypeOne";
import AllHalls from "~/blocks/our_halls/AllHalls";
import KebabFooter from "~/blocks/globals/KebabFooter";
import HallTables from "~/blocks/our_halls/HallTables";
import { footer_type_two } from "~/assets/js_static_data/footers_first_screens";

export default {
  components: {
    HeaderBlock,
    SmallFirstScreen,
    AboutBlockTypeOne,
    AllHalls,
    HallTables,
    KebabFooter
  },
  data: () => ({
    isHallsPage: false,
    footer_list: footer_type_two,
    first_screen: {
      img: require("~/static/images/halls_fs.jpg"),
      title: "Наші зали"
    },
    crumbs: ["головна мережІ", "Зустрічі та події", "Наші зали"],
    about_data: {
      image: require("~/static/images/about_halls.jpg"),
      little_title: "КОНФЕРенц зали",
      main_title:
        "Конференц зали <span class='gold_text italic'>Premier Palace Hotel</span> задовольнять смак усіх наших гостей",
      description:
        "Ми підберемо для Вас максимально комфортні умови, відповідні контексту заходу, його атмосфері, кількістю очікуваних гостей, колег або бізнес-партнерів. Premier Palace Hotel може запропонувати Вам найрізноманітніший вибір локацій на будь-який смак - починаючи з Гранд Холу «Софіївський», здатним прийняти до 380 гостей, який може стати майданчиком для великої міжнародної конференції, - до vip-кімнати на представницькому поверсі для зустрічі у вузькому колі. ",
      gold_button: "КОНФЕРЕНЦ БУКЛЕТ"
    },
    filters: [
      {
        id: 0,
        name: "По місту",
        type: "",
        options: [
          {
            title: "Дніпро",
            value: "Дніпро"
          },
          {
            title: "Харків",
            value: "Харків"
          },
          {
            title: "Херсон",
            value: "Херсон"
          },
          {
            title: "Київ",
            value: "Київ"
          },
          {
            title: "Львів",
            value: "Львів"
          }
        ]
      },
      {
        id: 1,
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
        id: 2,
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
  }),
  created() {
    this.isHallsPage = !this.isHallsPage;
  },
  destroyed() {
    this.isHallsPage = !this.isHallsPage;
  }
};
</script>

<style lang="scss" scoped></style>
