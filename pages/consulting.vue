<template>
  <div id="consulting">
    <HeaderBlock />
    <BreadCrumbs :crumbs="crumbs" :light_style="true" />
    <SmallFirstScreen
      :image="first_screen.img"
      :title="first_screen.title"
    ></SmallFirstScreen>
    <AboutBlockTypeFour
      :image="about_image"
      :description="about_description"
      :isConsultingPage="isConsultingPage"
    />
    <OurProjects :line="true" :isConsultingPage="isConsultingPage" />
    <AboutBlockTypeOne
      :about_data="about_data"
      :line="true"
      :isConsultingPage="isConsultingPage"
    />
    <div class="margin_block"></div>
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import SmallFirstScreen from "~/blocks/globals/SmallFirstScreen";
import OurProjects from "~/blocks/consulting/OurProjects";
import PinnedBlock from "~/blocks/globals/PinnedBlock";
import AboutBlockTypeOne from "~/blocks/globals/abouts/AboutBlockTypeOne";

export default {
  components: {
    HeaderBlock,
    SmallFirstScreen,
    OurProjects,
    AboutBlockTypeOne
  },
  data: () => ({
    isConsultingPage: false,
    first_screen: {
      img: require("~/static/images/consulting.png"),
      title: "Консалтинг"
    },
    crumbs: ["головна мережІ", "Управління та франчайзинг", "Консалтинг"],
    about_image: require("~/static/images/about-consulting.jpg"),
    about_description: {
      title:
        "<span class='gold_text'>Premier Hospitality Consulting</span> -  підрозділ оператора мережі готелів, який надає готельним об'єктам консультаційну та технічну підтримку повного циклу.",
      description:
        "Команда наших експертів з багаторічним досвідом ефективно вирішує стратегічні питання на будь-якому етапі розвитку готельного проєкту.",
      benefits: [
        "Дослідження ринку готельних послуг",
        "Розробка концепції та бізнес-плану",
        "Аудит операційної діяльності",
        "Фінансовий прогноз з очікуваного прибутку",
        "Контроль якості/сервісу",
        "Розробка маркетингової стратегії",
        "Створення ефективної організаційної структури"
      ]
    },
    about_data: {
      image: require("~/static/images/managmant_last_screen.jpg"),
      main_title:
        "В рамках специфікації сучасних стандартів, незалежні держави.",
      description:
        "В рамках специфікації сучасних стандартів, незалежні держави і донині залишаються долею лібералів, які жадають бути своєчасно верифіковані. У своєму прагненні підвищити якість життя, вони забувають, що висока якість позиційних досліджень дозволяє виконати важливі завдання по розробці моделі розвитку. До речі, ретельні дослідження конкурентів, перемагаючи непросту економічну ситуацію, в рівній мірі надані самі собі. З урахуванням сформованої міжнародної обстановки, високоякісний прототип!",
      gold_button: "перейти до консалтингу"
    }
  }),
  created() {
    this.isConsultingPage = !this.isConsultingPage;
  },
  mounted() {
    this.$store.commit("setFooterInsta", false);
  },
  destroyed() {
    this.$store.commit("setFooterInsta", true);
    this.isConsultingPage = !this.isConsultingPage;
  }
};
</script>
<style lang="scss">
#consulting {
  .big_slide_slider {
    .big_slider_wrapper {
      .line-simple {
        left: unset;
        right: 160px;
        top: 20px;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";
#consulting {
  @include max(375) {
    background: white;
  }
}
.margin_block {
  @include mt-140;
}
</style>
