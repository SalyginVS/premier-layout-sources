<template>
  <div id="suppliers" class="suppliers">
    <HeaderBlock />
    <BreadCrumbs :crumbs="crumbs" :light_style="true" />
    <SmallFirstScreen :image="first_screen.img" :title="first_screen.title">
      <KebabFooter :footer_list="footer_list" />
    </SmallFirstScreen>
    <AboutBlockTypeOne
      :about_data="about_data"
      :contactsBlock="contactsBlock"
      :isSuppliersPage="isSuppliersPage"
      :line="true"
      :changeBtnSize="true"
    />
    <div class="gradient-wrapper">
      <TitleWithDescription
        :data="titleData"
        :htmlTitle="true"
        :isSuppliersPage="isSuppliersPage"
      />
      <CoopTypes :supplierTable="true" :table_data="table_data" />
      <CoopTypesMob :table_data="table_data" />
    </div>
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import SmallFirstScreen from "~/blocks/globals/SmallFirstScreen";
import KebabFooter from "~/blocks/globals/KebabFooter";
import PinnedBlock from "~/blocks/globals/PinnedBlock";
import AboutBlockTypeOne from "~/blocks/globals/abouts/AboutBlockTypeOne";
import TitleWithDescription from "~/blocks/globals/TitleWithDescription";
import CoopTypes from "~/blocks/suppliers/CoopTypes";
import CoopTypesMob from "~/blocks/suppliers/CoopTypesMob";

//static info
import { suppliers } from "~/assets/js_static_data/footers_first_screens";

export default {
  components: {
    HeaderBlock,
    SmallFirstScreen,
    PinnedBlock,
    AboutBlockTypeOne,
    KebabFooter,
    TitleWithDescription,
    CoopTypes,
    CoopTypesMob
  },
  data: () => ({
    isSuppliersPage: false,
    footer_list: suppliers,
    first_screen: {
      img: require("~/static/images/main-suppliers.jpg"),
      title: "постачальникам"
    },
    crumbs: ["головна мережІ", "Управління та франчайзинг", "Школа готелів"],
    about_data: {
      image: require("~/static/images/about_halls.jpg"),
      main_title:
        "Ми <span class='gold_text'>представляємо</span> інтереси готелів мережі <span class='gold_text'>Premier</span> у закупці товарів.",
      description:
        "Наші відносини з постачальниками товарів, які необхідні для функціонування готелю та ресторану, базуються на прозорості та дотриманні всіх обговорених домовленостей. Ми відкриті до нових пропозицій та з задоволенням розглянемо всі запити від потенційних партнерів.",
      gold_button: "Запит на тендер"
    },
    contactsBlock: {
      title: "Центральний відділ постачання",
      email: "seliseev@phnr.com",
      number: "+38 (044) 590 69 85"
    },
    titleData: {
      little_title: "тендери",
      title_gold: " ",
      title_black:
        "<span class='gold_text italic'>Поточні</span> тендери </br> для <span class='gold_text italic'>Premier</span>",
      text_description:
        "Для отримання доступу до документів по тендерам, які вас цікавлять, та інформацію з актуальних закупівель необхідно відправити запит на участь у тендері. Протягом двох робочих днів на вашу електронну пошту прийде повідомлення з усією необхідною документацією і технічним завданням."
    },
    table_data: [
      {
        id: 0,
        number: "001",
        management: "Постіль (сатин, бязь) і махрова продукція на 2017.",
        hotel:
          "Прем'єр Палас (Київ), Харків Палас (Харків), Аврора (Харків), Дністер (Львів), Русь (Київ), Либідь (Київ), Женева (Одеса), Шафран (Суми) ",
        date: "17/01/20"
      },
      {
        id: 1,
        number: "002",
        management: "Міні сейфи 30 шт. Розмір 191 * 354 * 432.",
        hotel: "Прем'єр Палас (Київ)",
        date: "15/02/20"
      }
    ]
  }),
  created() {
    this.isSuppliersPage = !this.isSuppliersPage;
  },
  mounted() {
    this.$store.commit("setFooterInsta", false);
  },
  destroyed() {
    this.$store.commit("setFooterInsta", true);
    this.isSuppliersPage = !this.isSuppliersPage;
  }
};
</script>
<style lang="scss">
@import "../assets/scss/utils.scss";
// #suppliers {
//   .about-type-one {
//     .about-image_wrapper .line-simple {
//       top: unset;
//       right: -150px;
//       bottom: 40px;
//     }
//   }
// }
.gradient-wrapper {
  padding-top: 180px;
  padding-bottom: 1px;
  background-image: linear-gradient(180deg, rgba(240, 237, 234, 0) 0%, #F0EDEA 100%);
}
#suppliers {
  .footer_wrapper {
    .first_screen_bottom_bar-menu {
      @include max(375) {
        max-width: 170px;
      }
    }
    .first_screen_footer_container {
      @include max(375) {
        flex-flow: row wrap;
        justify-content: center;
      }
      .footer_el_wrapper {
        @include max(375) {
          display: block;
        }
      }
      .footer_el_wrapper+.footer_el_wrapper{
        @include max(375){
          margin-top:16px;
        }
      }
    }
  }
}
</style>

<style lang="scss">
@import "../assets/scss/utils.scss";
#suppliers {
  .main-title {
    width: 100%;
  }
  .distance_block {
    margin-bottom: 180px;
    @include max(1439) {
      margin-bottom: 72px;
    }
    @include max(1023) {
      margin-bottom: 63px;
    }
  }
  .form_coops_container {
    display: block;
    @include max(375) {
      display: none;
    }
  }
  .table-mob {
    display: none;
    @include max(375) {
      display: flex;
    }
  }
  #small_first_screen {
    .main-title {
      @include max(375) {
        font-size: 34px;
      }
    }
  }
}
</style>
