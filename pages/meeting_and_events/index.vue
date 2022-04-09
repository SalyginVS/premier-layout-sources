<template>
  <div id="meeting_and_events">
    <HeaderBlock />
    <BreadCrumbs :crumbs="crumbs" :light_style="true" />
    <FirstScreen :isMeetingAndEvents="isMeetingAndEvents" />
    <BigSlideSlider
      :slides="big_slider"
      :slider_description="big_slider_description"
      :line="true"
      :indent_meeting="true"
      :meetingFilterMore="true"
    >
      <SliderForeground />
    </BigSlideSlider>
    <PinnedBlock :meeting_and_events="true" :pinned_elements="pinned_info" :background_type_dark="true" />
    <Benefits :dataBenefits="dataBenefits" :indentTitle="true" slashButtonLink="/premier_corp_club" />
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import FirstScreen from "~/blocks/meeting_and_events/FirstScreen";
import BigSlideSlider from "~/blocks/globals/sliders/BigSlideSlider";
import SliderForeground from "~/blocks/meeting_and_events/SliderForeground";
import PinnedBlock from "~/blocks/globals/PinnedBlock";
import Benefits from "~/blocks/globals/Benefits";

export default {
  components: {
    HeaderBlock,
    FirstScreen,
    BigSlideSlider,
    PinnedBlock,
    Benefits,
    SliderForeground
  },
  data: () => ({
    isMeetingAndEvents: false,
    crumbs: ["Premier Palace Hotel", "Зустрічі та події"],
    big_slider_description: {
      little_title: "Конференц та банкетні зали",
      big_title: "Наші зали",
      description: "",
      filters: [
        {
          id: 0,
          name: "тип",
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
          name: "місто",
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
    },
    dataBenefits: {
      subtitle: "Пільги зі знижкою",
      img: require("~/static/images/benefit_left.jpg"),
      title: "<span class='gold_text  italic'>Premier Corporate Club </span>",
      description:
        "Ви будете отримувати на свій рахунок бонуси за всі ваші витрати в наших готелях. Подорожуйте в своє задоволення, отримуйте бонуси і міняйте їх на подарунки! Стати учасником просто - зареєструйтеся на нашому сайті або на стійці реєстрації в будь-якому з готелів Premier Hotels and Resorts. Як тільки Ви отримали підтвердження на адресу електронної пошти - Ви член клубу і відразу користуєтеся привілеями рівня Amber."
    },
    pinned_info: [
      {
        id: 0,
        image: require("~/static/images/meeting_pinned1.jpg"),
        little_title: "КОНФЕРенц зали",
        title_big: {
          one_line_title: false,
          gold_title: "Конференц та",
          black_title: "банкетні зали"
        },
        description_text:
          "Ми підберемо для Вас максимально комфортні умови, відповідні контексту заходу, його атмосфері, кількістю очікуваних гостей, колег або бізнес-партнерів. Premier Palace Hotel може запропонувати Вам найрізноманітніший вибір локацій на будь-який смак - починаючи з Гранд Холу «Софіївський», здатним прийняти до 380 гостей, який може стати майданчиком для великої міжнародної конференції, - до vip-кімнати на представницькому поверсі для зустрічі у вузькому колі.          ",
        two_buttons: {
          gold_button: "Детальніше",
          gold_button_href: "/halls"
        }
      },
      {
        id: 1,
        image: require("~/static/images/meeting_pinned2.jpg"),
        little_title: "увага до деталей",
        title_big: {
          one_line_title: true,
          gold_title: "Ideal",
          black_title: "Meeting"
        },
        description_text:
          "Для швидкої, легкої та професійної організації будь-якої  зустрічі, конференції чи бізнес-форуму нами створено принципово нову концепцію – Ideal Meeting. Її було ретельно розроблено командою професіоналів Premier Hotels and Resorts на базі глибинного досвіду та знань, заснованих на багаторічній практичній роботі готелів з різних куточків України. Концепція ідеального заходу, яку ми пропонуємо, сучасна, зручна, дуже легка в організації та соціально-зорієнтована завдяки чотирьом основним складовим: EASY, SMART, GREEN, FAST. Детальніше"
      },
      {
        id: 2,
        image: require("~/static/images/meeting_pinned3.jpg"),
        little_title: "Весілля",
        title_big: {
          one_line_title: false,
          gold_title: "Романтична",
          black_title: "весільна церемонія"
        },
        description_text:
          "Після того як Ви вибрали свою ідеальну другу половинку, найвишуканішу каблучку і весільне вбрання, прийшов час зупинити свій вибір на бездоганному заході. Premier Palace Hotel допоможе створити саме пам'ятне торжество у Вашому житті - з хвилини зустрічі весільного кортежу до відходу останнього гостя. Розрахований на урочистість до 200 гостей у випадку фуршету та до 100 гостей у випадку банкету. ",
        details_button: "до весілля",
        details_button_href: "/weddings"
      }
    ],
    big_slider: [
      {
        id: 0,
        image: require("~/static/images/meet_big_slider.jpg")
      },
      {
        id: 1,
        image: require("~/static/images/meet_big_slider.jpg")
      },
      {
        id: 2,
        image: require("~/static/images/meet_big_slider.jpg")
      }
    ]
  }),

  methods: {
    handleResize() {
      if (window.innerWidth < 650) {
        this.big_slider_description.description =
          "Ми підберемо для Вас максимально комфортні умови, відповідні контексту заходу, його атмосфері ";
      } else {
        this.big_slider_description.description =
          'Ми підберемо для Вас максимально комфортні умови, відповідні контексту заходу, його атмосфері  <a  href="tel:+38 (044) 244 13 04" >+38 (044) 244 13 04</a>  або пишіть на <a target="_blank"  href="mailto:pr@phnr.com">pr@phnr.com</a>';
      }
    }
  },
  created() {
    this.isMeetingAndEvents = !this.isMeetingAndEvents;
    console.log(this.isMeetingAndEvents);
  },
  destroyed() {
    this.isMeetingAndEvents = !this.isMeetingAndEvents;
  },
  mounted() {
    this.handleResize();
  }
};
</script>
<style lang="scss">
@import "../../assets/scss/utils.scss";
#meeting_and_events {
  #pinnedBlock {
    #pinned_description {
      .button_wrapper {
        .gold_button {
          @include max(425) {
            width: 100%;
            padding: 0 75px;
            display: flex;
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
#meeting_and_events {
  #benefits {
    margin-top: 140px;

    @include max(lg) {
      margin-top: 124px;
    }
    @include max(md) {
      margin-top: 112px;
    }
    @include max(sm) {
      margin-top: 80px;
    }
  }
}
.margin_block {
  @include mt-140;
}
</style>
