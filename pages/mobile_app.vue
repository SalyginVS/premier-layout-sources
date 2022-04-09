<template>
  <div id="resraurants_and_bars">
    <HeaderBlock />
    <BreadCrumbs :crumbs="crumbs" :light_style="true" />
    <SmallFirstScreen :image="first_screen.img" :title="first_screen.title" />
    <AboutMobileApp :data="about_block" :line="true" />
    <VideoMobileApp />
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import BreadCrumbs from "~/components/BreadCrumbs";

import SmallFirstScreen from "~/blocks/globals/SmallFirstScreen";
import FitnesAbout from "~/blocks/fitnes_layouts/FitnesAbout";
import AboutMobileApp from "~/blocks/mobile_app/AboutMobileApp";
import VideoMobileApp from "~/blocks/mobile_app/VideoMobileApp";

export default {
  components: {
    HeaderBlock,
    BreadCrumbs,
    SmallFirstScreen,
    AboutMobileApp,
    VideoMobileApp
  },
  data: () => ({
    first_screen: {
      img: require("~/static/images/mobile_app_fs.jpg"),
      title: "мобільний додаток"
    },
    crumbs: ["Головна мережі", "мобільний додаток"],
    about_block: {
      left_image: require("~/static/images/mobile_app_about.png"),
      little_title: "про місто",
      black_title: "Premier Hotels перша",
      gold_title: "мережа готелів в Україні ",
      description:
        "Але дії представників опозиції функціонально рознесені на незалежні елементи. Сучасні технології досягли такого рівня, що згуртованість команди професіоналів створює необхідність включення у виробничий план цілої низки позачергових заходів з урахуванням комплексу системи навчання кадрів, відповідної нагальним потребам. Господа, синтетичне тестування.",
      // "Premier Palace - це готель високого рівня обслуговування та комфорту. У 2009 році він отримав шість зірок і сім смуг від системи Stars and Stripes, всесвітньо відомої організації по визнанню в індустрії гостинності",
      list: [
        "рамках специфікації сучасних стандартів",
        "Таким чином, згуртованість команди",
        "Кожен з нас розуміє очевидну річ"
      ],
      small_image: require("~/static/images/mobile_right_small.jpg")
    }
  })
  //
};
</script>

<style lang="scss" scoped></style>
