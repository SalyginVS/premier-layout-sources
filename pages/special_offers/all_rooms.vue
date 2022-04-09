<template>
  <div id="resraurants_and_bars">
    <HeaderBlock :header_ligh_style="true" />
    <BreadCrumbs :crumbs="crumbs" />
    <div class="top_distance"></div>
    <SpecialOfferDescription :data="specialOfferData" :positionInRoom="true" />
    <AllHotelsGaleryBlock />
    <AllHotelsOffersList offer_type="rooms" />
    <DoubleSlider
      :double_slider_desc="double_slider_desc"
      :linghtBlock="true"
    />
    <transition name="fade">
      <LogInModal @closeModal="closeModal" :openModal="openLogInModal" />
    </transition>
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import BreadCrumbs from "~/components/BreadCrumbs";
import DoubleSlider from "~/blocks/globals/sliders/DoubleSliderNew";
import AllHotelsOffersList from "~/blocks/special_offers/all_hotels/AllHotelsOffersList";
import SpecialOfferDescription from "~/blocks/special_offers/all_hotels/SpecialOfferDescription";
import AllHotelsGaleryBlock from "~/blocks/special_offers/all_hotels/AllHotelsGaleryBlock";
import { mapState } from "vuex";
 

export default {
  components: {
    HeaderBlock,

    AllHotelsOffersList,
    SpecialOfferDescription,
    AllHotelsGaleryBlock,
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
        "Бронируйте с 24 февраля по 1 марта и получайте скидку до 30% на проживание в течение всего лета в городах Киев, Львов, Днепр, Полтава и Херсон. </br></br> Когда к организации мероприятия предъявляются самые высокие требования, приходит время выбрать место проведения события. Если вы хотите, чтобы ваше мероприятие оставило в памяти гостей только наилучшие впечатления, сделайте выбор в пользу места.",
      thirdDescription:
        "Карнавал походить з давньоримських язичницьких свят, перша ж документальна згадка про нього датується 1094 роком. У часи похмурого середньовіччя венеціанський карнавал був гарною нагодою зробити паузу від релігійних та моральних обмежень, сховавши обличчя під маскою. На початку ХХІ сторіччя карнавал зберіг свій невимушений характер, проте позбувся відвертої непристойності. Серед традиційних розваг лишилися костюмована хода, виступи професійних і не дуже артистів, концерти, вистави та народні гуляння. Найважливішим із них став «політ янгола»: з купола базиліки.",
    },
  }),
  methods: {
    closeModal() {
      this.$store.commit("setCloseLogInModal");
    },
  },
    computed: {
    ...mapState(["openLogInModal"])
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.top_distance {
  @include mt-227;
}
</style>