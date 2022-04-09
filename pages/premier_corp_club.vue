<template>
  <div id="premier_corp_club ">
    <HeaderBlock />
    <BreadCrumbs :crumbs="crumbs" :light_style="true" />
    <FirstScreen :first_data="first_data" :indent="false" />
    <div class="margin_block"></div>
    <Benefits
      :goldButton="true"
      :inverse="true"
      :dataBenefits="dataBenefits"
      :indent="true"
      :line="true"
    />
    <AboutOneBrand
      :bottomBlock="false"
      :description="description"
      :style_config="style_config3"
      :isPremier_corp_club="true"
    />
    <div class="margin_block"></div>
    <DoubleSlider
      :double_slider_desc="double_slider_desc"
      :linghtBlock="true"
    />

    <Subscription :inverse="true" :description="subscription" />
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import BreadCrumbs from "~/components/BreadCrumbs";
import FirstScreen from "~/blocks/premier_club/FirstScreen";
import Benefits from "~/blocks/globals/Benefits";
import AboutOneBrand from "~/blocks/globals/brands_type/AboutOneBrand";
import DoubleSlider from "~/blocks/globals/sliders/DoubleSlider";

import Subscription from "~/blocks/globals/Subscription";

export default {
  components: {
    HeaderBlock,
    BreadCrumbs,
    FirstScreen,
    Benefits,
    AboutOneBrand,
    DoubleSlider,

    Subscription
  },
  data: () => ({
    crumbs: ["головна мережІ", "Управління та франчайзинг"],
    first_data: {
      img: require("~/static/images/premier-corp-img.jpg"),
      title: "Premier</br> Corp. Club",
      description:
        "Коли до організації заходу пред'являються найвищі вимоги, приходить час прийняти безкомпромісне рішення - вибрати місце проведення події. Якщо Ви хочете, щоб Ваш захід залишив у пам'яті гостей.",
      button: "вступити до Premier Corp. Club"
    },
    dataBenefits: {
      subtitle: "Пільги зі знижкою",
      img: require("~/static/images/premier-corp-benefit.jpg"),
      title:
        "<span class='gold_text  italic'>Premier Corporate Club </span> програма лояльності",
      description:
        "Ви будете отримувати на свій рахунок бонуси за всі ваші витрати в наших готелях. Подорожуйте в своє задоволення, отримуйте бонуси і міняйте їх на подарунки! Стати учасником просто - зареєструйтеся на нашому сайті або на стійці реєстрації в будь-якому з готелів Premier Hotels and Resorts. Як тільки Ви отримали підтвердження на адресу електронної пошти - Ви член клубу і відразу користуєтеся привілеями рівня Amber.",
      button: "вступити до Premier Corp. Club"
    },
    description: {
      image: require("~/static/images/rest_and_bars_left.jpg"),
      description:
        "Ласкаво просимо до програми Premier Corporate Club!Premier Corporate Club - це програма заохочення для спеціалістів, що займаються організацією проживання у готелях та організацією конференцій, банкетів та інших заходів. Участь у нашій програмі дасть Вам унікальну можливість працювати у своє задоволення і отримувати приємні подарунки. Зареєструйтесь у програмі Premier Corporate Club і Ви отримуватимете бонуси за кожне бронювання готелю або за кожний проведений захід у колекції Premier Hotels and Resorts.",
      title:
        "Отримані бонуси Ви зможете витрачати за своїм бажанням на різні подарунки: від ваучера на відвідання фітнес-клубу до казкового вікенду в одному з наших готелів.s",
      info: [
        {
          id: 0,
          link_type: "tel",
          value: "+38 044 359 05 92",
          link: "+38 044 359 05 92"
        },
        {
          id: 1,
          link_type: "email",
          value: "awards@phnr.com",
          link: "awards@phnr.com"
        }
      ]
    },
    style_config3: {
      dark_bg: true
    },

    subscription: {
      little_title: "Premier Corp. Club",
      big_title_normal: "Ласкаво просимо до програми",
      description:
        "Відновіть сили та відчуйте внутрішню гармонію, завітавши до Premier Palace Wellness Club.В оздоровчий комплекс Premier Palace Wellness Club входять: VIP-сауна, фінська сауна, турецька лазня, солярій, тренажерний зал із найсучаснішим обладнанням. ",
      button: "вступити до Premier Corp. Club",
      img: require("~/static/images/premier-corp-subscription.jpg")
    },
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
#premier_corp_club {
  #fitnes_and_spa_first_screen {
    .description_left {
      @include max(sm) {
        display: none;
      }
    }
  }
  #double_slider_container {
    .swiper-container_wrapper {
      background: none;
      @include max(lg) {
        background: none;
      }
      @include max(md) {
        background: none;
      }
    }
  }
  #resraurants_and_bars {
    #about_restaurant {
      .classic_description {
        @include pb-140;
      }
    }
  }
  .subscription {
    @include max(sm) {
      margin-top: 0px;
    }
  }
  #benefits {
    .gold_button {
      width: fit-content;
      padding: 0;
    }
  }
}
</style>
<style lang="scss" scoped>
@import "../assets/scss/utils.scss";
.margin_block {
  @include mt-140;
}
#premier_corp_club {
  #benefits {
    //margin-bottom: 180px;
  }
  #about_restaurant {
    margin-bottom: 0;
  }
}
</style>
