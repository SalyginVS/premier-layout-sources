<template>
  <div id="meeting_and_events_page">
    <HeaderBlock />
    <BreadCrumbs :crumbs="crumbs" :light_style="true" />
    <FirstScreen :isMeetingAndEvents="isMeetingAndEvents" />
    <BigSlideSlider
      :slides="big_slider"
      :slider_description="big_slider_description"
      :line="true"
      :indent_meeting="true"
      right_button="дивитись всі"
    >
      <SliderForeground />
    </BigSlideSlider>
    <PinnedBlock
      :pinned_elements="pinned_info"
      :background_type_dark="true"
      :isMeetingAndEvents="isMeetingAndEvents"
      slashButtonLink="/premier_corp_club"
      @openModal="openContactsRequest"
    />
    <transition name="fade">
      <ModalTemplate
        @closeModal="closeModal"
        :openModal="is_contacts_request"
        :data="optionContactsRequest"
        :captcha="true"
      >
        <ContactsRequestModal />
      </ModalTemplate>
    </transition>
    <Benefits :dataBenefits="dataBenefits" slashButtonLink="/premier_corp_club" />
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
  methods: {
    openContactsRequest() {
      this.is_contacts_request = true;
    },
    closeModal() {
      this.is_contacts_request = false;
    }
  },
  data: () => ({
    is_contacts_request: false,
    dataBenefits: {
      title: "<span class='gold_text  italic'>Premier Corporate Club</span>",
      img: require("~/static/images/benefit_left.jpg"),
      subtitle: "Пільги зі знижкою",
      description:
          "Господа, високотехнологічна концепція суспільного укладу дозволяє виконати важливі завдання по розробці як самодостатніх, так і зовні залежних концептуальних рішень.",
      button: "Детальніше",
    },
    isMeetingAndEvents: false,
    crumbs: ["Premier Palace Hotel", "Зустрічі та події"],
    big_slider_description: {
      little_title: "Конференц та банкетні зали",
      big_title: "Наші зали",
      linkHref: "/halls",
      description:
        'Ми підберемо для Вас максимально комфортні умови, відповідні контексту заходу, його атмосфері <a class="meetings-events-links-active"  href="tel:+38 (044) 244 13 04" >+38 (044) 244 13 04</a>  або пишіть на <a class="meetings-events-links-active" target="_blank"  href="mailto:pr@phnr.com">pr@phnr.com</a>',
      description_mob:"Ми створюємо максимальний комфорт та турботу для кожного гостя нашої мережі. Маленькі речі, які можуть не бути видні з першого погляду, залишать.",
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
          gold_button: "Персональний запит",
          gold_button_emit: "openModal",
          second_button : "місткість залу",
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
    ],
    optionContactsRequest: {
        title: "Зробити запит",
        button: "відправляти запит",
      },
  }),
  created() {
    this.isMeetingAndEvents = !this.isMeetingAndEvents;
  },
  destroyed() {
    this.isMeetingAndEvents = !this.isMeetingAndEvents;
  }
};
</script>
<style lang="scss">
@import "../../assets/scss/utils.scss";

#meeting_and_events_page {
  .pinned_wrapper {
    @include min(1280) {
      transform: translateY(-90px);
    }
  }
  .big_slide_slider {
    .big_slider_wrapper {
      .line-simple {
        left: unset;
        right: 120px;
        top: -100px;
        @include min(1920) {
          right: 18vw;
        }
        @include max(1024) {
          display: none;
        }
      }
    }
  }
  #benefits {
    @include max(1024) {
      align-items: flex-start;
    }
    @include max(600) {
      flex-flow: row wrap;
    }
    .image_left {
      display: block;
      img {
          height: 100%;
        }
      @include max(1024) {
        height: 638px;
      }
      @include max(768) {
        height: 531px;
      }
      @include max(600) {
        max-width: calc(100% - 18px);
        height: 431px;
      }
    }
    .benefits_wrapper {
      @include max(1024) {
        margin-top: 41px;
      }
      @include max(768) {
        margin-top: 8px;
      }
      @include max(600) {
        margin-top: 40px;
      }
      .description_text {
        max-width: 367px;
        @include max(1024) {
          margin: 40px 0;
        }
        @include max(768) {
          margin: 32px 0;
        }
      }
      .images_block {
        @include max(1023) {
          max-width: 242px;
          grid-template-columns: 1fr;
        }
        @include max(767) {
          grid-row-gap: 25px;
          max-width: 308px;
        }
        @include max(sm) {
          grid-row-gap: 0;
        }
        .benefit {
          align-items:center;
          .a1 {
            margin-bottom: 0;
          }
        }
      }
    }
  }
  #pinnedBlock {
    #pinned_description {
      .button_wrapper {
        @include max(425){
          width:100%;
        }
        .gold_button {
          @include max(425) {
            width: 100%;
            // padding: 0 75px;
          }
          .gold_button__link {
            @include max(425) {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

#meeting_and_events_page {
  @include max(767) {
    // background-color: #f0edea;
  }
  #benefits {
    margin-top: 140px;
    @include max(1024) {
      margin-top: 125px;
    }
    @include max(767){
      margin-top:80px;
      margin-bottom:0;
      padding-bottom: 80px;
    }
  }
}

.margin_block {
  @include mt-140;
}
#pinnedBlock {
  // background-color: #f0edea;
}
.big_slide_slider {
  margin-bottom: 0;
  padding-bottom: 140px;
  @include max(1439) {
    padding-bottom: 124px;
  }
  @include max(1023) {
    padding-bottom: 112px;
  }
  @include max(767) {
    padding-bottom: 42px;
    background-color: #FFF;
  }
}

</style>
