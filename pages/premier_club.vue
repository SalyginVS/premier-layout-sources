<template>
  <div id="premier_club">
    <HeaderBlock />
    <BreadCrumbs :crumbs="crumbs" :light_style="true" />
    <FirstScreen :first_data="first_data" :kebubHeader="true" />
    <div class="margin_block"></div>

    <Benefits :goldButton="true" :dataBenefits="dataBenefits" :line="true" />
    <AboutPremierBonus :line="true" />
    <div class="margin_block"></div>
    <PremierClubTable />
    <AboutBlockTypeThree :data="about_block" :line="true" />
    <div class="margin_block"></div>

    <DoubleSliderNew :double_slider_desc="double_slider_desc" :darkBlock="true" />
    <AboutMobileApp :data="mob_about" :shopMobImg="true" :line="true" />
    <PinnedBlock :pinned_elements="pinned_info" :background_dark="true" />
    <Subscription :inverse="true" :description="subscription" />
    <RunningLine :runing_elements="runing_elements" />
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import BreadCrumbs from "~/components/BreadCrumbs";
import FirstScreen from "~/blocks/premier_club/FirstScreen";
import Benefits from "~/blocks/globals/Benefits";
import AboutPremierBonus from "~/blocks/premier_club/AboutPremierBonus";
import PremierClubTable from "~/blocks/premier_club/PremierClubTable";
import AboutBlockTypeThree from "~/blocks/globals/abouts/AboutBlockTypeThree";
import DoubleSliderNew from "~/blocks/globals/sliders/DoubleSliderNew";
import AboutMobileApp from "~/blocks/mobile_app/AboutMobileApp";
import PinnedBlock from "~/blocks/globals/PinnedBlock";
import Subscription from "~/blocks/globals/Subscription";
import RunningLine from "~/blocks/globals/RunningLine";

export default {
  components: {
    HeaderBlock,
    BreadCrumbs,
    FirstScreen,
    Benefits,
    AboutPremierBonus,
    PremierClubTable,
    AboutBlockTypeThree,
    DoubleSliderNew,
    AboutMobileApp,
    PinnedBlock,
    Subscription,
    RunningLine
  },
  data: () => ({
    crumbs: ["головна мережІ", "Управління та франчайзинг"],
    first_data: {
      img: require("~/static/images/premier-club-main.jpg"),
      title: "Premier Club",
      description:
        "В оздоровчий комплекс Premier Palace Wellness Club входять: VIP-сауна, фінська сауна, турецька лазня, солярій, тренажерний зал із найсучаснішим обладнанням, зал для аеробіки та масажні кабінети.",
      button: "вступити до premier club"
    },
    dataBenefits: {
      subtitle: "Пільги зі знижкою",
      img: require("~/static/images/benefit_left.jpg"),
      title:
        "<span class='gold_text  italic'>Premier club програма</span> лояльності гостей",
      description:
        "Ви будете отримувати на свій рахунок бонуси за всі ваші витрати в наших готелях. Подорожуйте в своє задоволення, отримуйте бонуси і міняйте їх на подарунки! Стати учасником просто - зареєструйтеся на нашому сайті або на стійці реєстрації в будь-якому з готелів Premier Hotels and Resorts. Як тільки Ви отримали підтвердження на адресу електронної пошти - Ви член клубу і відразу користуєтеся привілеями рівня Amber.",
      button: "вступити до premier club"
    },
    about_block: {
      image: require("~/static/images/about-premier-club.jpg"),
      title: "Як витратити",
      description:
        "Заробляйте бонусні очки на своєму рахунку Premier Club за всі покупки (тобто проживання, бари, ресторани, фітнес-центр, міні-бар, пральня та готельний транспорт), оплачені під час перебування. Послуги, що надаються третіми особами, не мають права на очки. Бронювання, здійснене через сторонні веб-сайти, турфірми або інші посередники, не підлягає отриманню бонусних балів.",
      options: [
        {
          id: 0,
          title: "Оновлення статусу членства",
          description:
            "Вы можете подарить себе замечательные выходные, обменяв накопленные бонусы на проживание в одном из наших отелей. Чтобы обменять бонусы на проживание, обратитесь, пожалуйста, к координатору программы лояльности за подтверждением, так как проживание в обмен на бонусы предоставляется только при условии предварительного бронирования, а также при наличии свободных номеров."
        },
        {
          id: 1,
          title: "Безкоштовне проживання",
          description:
            "Вы можете подарить себе замечательные выходные, обменяв накопленные бонусы на проживание в одном из наших отелей. Чтобы обменять бонусы на проживание, обратитесь, пожалуйста, к координатору программы лояльности за подтверждением, так как проживание в обмен на бонусы предоставляется только при условии предварительного бронирования, а также при наличии свободных номеров."
        },
        {
          id: 2,
          title: "Ресторан",
          description:
            "Вы можете подарить себе замечательные выходные, обменяв накопленные бонусы на проживание в одном из наших отелей. Чтобы обменять бонусы на проживание, обратитесь, пожалуйста, к координатору программы лояльности за подтверждением, так как проживание в обмен на бонусы предоставляется только при условии предварительного бронирования, а также при наличии свободных номеров."
        },
        {
          id: 3,
          title: "Оновлення кімнати",
          description:
            "Вы можете подарить себе замечательные выходные, обменяв накопленные бонусы на проживание в одном из наших отелей. Чтобы обменять бонусы на проживание, обратитесь, пожалуйста, к координатору программы лояльности за подтверждением, так как проживание в обмен на бонусы предоставляется только при условии предварительного бронирования, а также при наличии свободных номеров."
        },
        {
          id: 4,
          title: "Спа-центр та оздоровлення",
          description:
            "Вы можете подарить себе замечательные выходные, обменяв накопленные бонусы на проживание в одном из наших отелей. Чтобы обменять бонусы на проживание, обратитесь, пожалуйста, к координатору программы лояльности за подтверждением, так как проживание в обмен на бонусы предоставляется только при условии предварительного бронирования, а также при наличии свободных номеров."
        }
      ]
    },
    mob_about: {
      left_image: require("~/static/images/mobile_app_about.jpg"),
      little_title: "про місто",
      black_title: "Premier Hotels перша",
      gold_title: "мережа готелів в Україні ",
      description:
        "Але дії представників опозиції функціонально рознесені на незалежні елементи. Сучасні технології досягли такого рівня, що згуртованість команди професіоналів створює необхідність включення у виробничий план цілої низки позачергових заходів з урахуванням комплексу системи навчання кадрів, відповідної нагальним потребам. Господа, синтетичне тестування.",
      list: [
        "рамках специфікації сучасних стандартів",
        "Таким чином, згуртованість команди",
        "Кожен з нас розуміє очевидну річ"
      ],
      gold_button: "читати більше",
      small_image: require("~/static/images/mobile_right_small.jpg")
    },

    pinned_info: [
      {
        id: 0,
        image: require("~/static/images/kid-premier-club.jpg"),
        little_title: "КОНФЕРенц зали",
        title_big: {
          one_line_title: true,
          one_line_title_no_italic: true,
          gold_title: "Premier club",
          black_title: "kids"
        },
        description_text:
          "Ми підберемо для Вас максимально комфортні умови, відповідні контексту заходу, його атмосфері, кількістю очікуваних гостей, колег або бізнес-партнерів. Premier Palace Hotel може запропонувати Вам найрізноманітніший вибір локацій на будь-який смак - починаючи з Гранд Холу «Софіївський», здатним прийняти до 380 гостей, який може стати майданчиком для великої міжнародної конференції, - до vip-кімнати на представницькому поверсі для зустрічі у вузькому колі.",
        two_buttons: {
          gold_button: "читати більше"
        }
      },
      {
        id: 1,
        image: require("~/static/images/meeting_pinned2.jpg"),
        little_title: "програма лояльності ",
        title_big: {
          one_line_title: true,
          one_line_title_no_italic: true,
          gold_title: "Premier Corp.",
          black_title: "Club"
        },
        description_text:
          "Господа, високотехнологічна концепція суспільного укладу дозволяє виконати важливі завдання по розробці як самодостатніх, так і зовні залежних концептуальних рішень.",
        two_buttons: {
          gold_button: "читати більше"
        },
        option: "true"
      }
    ],
    subscription: {
      little_title: "Premier Club",
      big_title_italic: "Premier club програма ",
      big_title_normal: "лояльності гостей ",
      description:
        "Відновіть сили та відчуйте внутрішню гармонію, завітавши до Premier Palace Wellness Club. В оздоровчий комплекс Premier Palace Wellness Club входять: VIP-сауна, фінська сауна, турецька лазня, солярій, тренажерний зал із найсучаснішим обладнанням.",
      button: "вступити до premier club",
      img: require("~/static/images/subscription-premier-club.jpg")
    },
    runing_elements: [
      {
        id: 1,
        text: "Premier Corporate Club",
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
        text: "Premier Corporate ClubА",
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
        text: "Premier Corporate Club",
        main_image: require("~/static/images/list_bar4.jpg"),
        hover_images: [
          require("~/static/images/list_bar4.jpg"),
          require("~/static/images/list_bar1.jpg"),
          require("~/static/images/list_bar2.jpg"),
          require("~/static/images/list_bar3.jpg")
        ]
      }
    ],
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
        }
      ]
    }
  })
};
</script>

<style lang="scss">
@import "../assets/scss/utils.scss";

#premier_club {
  .about-image_wrapper .line-simple {
    top: unset;
    bottom: 70px;
    right: -185px;
  }
  #benefits {
    .gold_button {
      @include max(lg) {
        display: none;
      }
      @include max(md) {
      }
      @include max(sm) {
        display: block;
      }
    }
    .image_left {
      @include max(md) {
        display: none;
      }
    }
    .benefits_wrapper {
      @include max(md) {
        width: 50%;
        margin: 0 48px 0 31px;
        .images_block {
          display: none;
        }
        .description_text {
          margin-bottom: 0;
        }
      }

      @include max(sm) {
        width: 100%;
        margin: 0;
        .images_block {
          display: flex;
        }
        .description_text {
          margin-bottom: 40px;
        }
      }
    }

    @include max(md) {
      justify-content: space-between;
      align-self: center;
      .images_block_right-tablet {
        display: block;
        .images_block {
          margin-bottom: 0;
        }
      }
    }

    @include max(sm) {
      .images_block_right-tablet {
        display: none;
        .images_block {
          margin-bottom: 0;
        }
      }
    }
  }
  #restaurant_description {
    align-items: center;

    .line-simple {
      @include max(lg) {
        display: none;
      }
    }
  }
  .subscription {
    @include max(sm) {
      margin-top: 80px;
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";
.margin_block {
  @include mt-140;
}
</style>
