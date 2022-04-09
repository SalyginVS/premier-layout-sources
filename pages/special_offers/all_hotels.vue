<template>
  <div id="all-hotels">
    <HeaderBlock :header_ligh_style="true" />
    <BreadCrumbs :crumbs="crumbs" :arrowInverse="true" />
    <div class="top_distance"></div>
    <SpecialOfferDescription :data="specialOfferData" />
    <AllHotelsOffersList />
    <DoubleSlider :double_slider_desc="double_slider_desc" />
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import BreadCrumbs from "~/components/BreadCrumbs";
import DoubleSlider from "~/blocks/globals/sliders/DoubleSliderNew";
import AllHotelsOffersList from "~/blocks/special_offers/all_hotels/AllHotelsOffersList";

import SpecialOfferDescription from "~/blocks/special_offers/all_hotels/SpecialOfferDescription";

export default {
  components: {
    HeaderBlock,
    AllHotelsOffersList,
    SpecialOfferDescription,
    DoubleSlider,
    BreadCrumbs,
  },
  data: () => ({
    crumbs: ["назад до пропозицій"],
    double_slider_desc: {
      little_title: "НАШІ Спеціальні пропозиції",
      big_title: "Спеціальні пропозиції",
      link: "всі пропозиції",
      filters: [
        {
          id: 0,
          name: "тип",
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
        {
          id: 1,
          name: "місто",
          type: "",
          options: [
            {
              title: "Дніпро",
              value: "Дніпро",
            },
            {
              title: "Харків",
              value: "Харків",
            },
            {
              title: "Херсон",
              value: "Херсон",
            },
            {
              title: "Київ",
              value: "Київ",
            },
            {
              title: "Львів",
              value: "Львів",
            },
          ],
        },
      ],
    },
    specialOfferData: {
      subtitle: "Львов, Киев, Полтава, Херсон, Днепр",
      title: ' <span class="gold_text italic">Бронируй</span> лето зимой',
      firstDescription:
        "Бронируйте с 24 февраля по 1 марта и получайте скидку до 30% на проживание в течение всего лета в городах Киев, Львов, Днепр, Полтава и Херсон. Когда к организации мероприятия предъявляются самые высокие требования, приходит время выбрать место проведения события. Если вы хотите, чтобы ваше мероприятие оставило в памяти гостей только наилучшие впечатления, сделайте выбор в пользу места.",
      secondTitle: "Акція 3 ночі за ціною 2 діє для готелів:",
      secondDescription:
        "Карнавал походить з давньоримських язичницьких свят, перша ж документальна згадка про нього датується 1094 роком. У часи похмурого середньовіччя венеціанський карнавал був гарною нагодою зробити паузу від релігійних та моральних обмежень, сховавши обличчя під маскою. На початку ХХІ сторіччя карнавал зберіг свій невимушений характер, проте позбувся відвертої непристойності. Серед традиційних розваг лишилися костюмована хода, виступи професійних і не дуже артистів, концерти, вистави та народні гуляння. Найважливішим із них став «політ янгола»:",
      offer_list: [
        {
          id: 0,
          value: "Херсон | Premier Compass Hotel Kherson",
          all_categories: "Всі категорії номерів",
          date: "до 31 грудня 2020",
        },
        {
          id: 1,
          value: "Херсон | Premier Compass Hotel Kherson",
          all_categories: "Всі категорії номерів",
          date: "до 31 грудня 2020",
        },
        {
          id: 2,
          value: "Херсон | Premier Compass Hotel Kherson",
          all_categories: "Всі категорії номерів",
          date: "до 31 грудня 2020",
        },
      ],
      thirdDescription:
        "Карнавал походить з давньоримських язичницьких свят, перша ж документальна згадка про нього датується 1094 роком. У часи похмурого середньовіччя венеціанський карнавал був гарною нагодою зробити паузу від релігійних та моральних обмежень, сховавши обличчя під маскою. На початку ХХІ сторіччя карнавал зберіг свій невимушений характер, проте позбувся відвертої непристойності. Серед традиційних розваг лишилися костюмована хода, виступи професійних і не дуже артистів, концерти, вистави та народні гуляння. Найважливішим із них став «політ янгола»:",
    },
  }),
};
</script>

<style lang="scss">
#all-hotels {
  .image_type_description .advert__text {
    cursor: default !important;
  }
}
</style>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
#all-hotels {
  .top_distance {
    @include mt-227;
  }
}
</style>


