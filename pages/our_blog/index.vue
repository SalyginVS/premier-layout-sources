<template>
  <div id="our-blog__all">
    <BreadCrumbs :crumbs="crumbs" />
    <BlogCategories :titleData="titleData"/>
    <OurNews :link="links.newsPage"/>
    <div class="top_distance-140"></div>
    <TitleWithDescription :data="descrListBlock" />
    <ListBlock
      :foregrounds="spas"
      :labelValue="'17 february 2020'"
      :little_info="false"
      :lightMode="true"
      :position_images="true"
      :noLine="true"
      :isOurBlog="isOurBlog"
      :link="links.eventsPage"
    />
    <WeWrite :articlesToShow="articlesToShow" :link="links.articlesPage"/>
    <CityGuidebook :line="true" id="cityGuidebook" ref="guidebook" />
    <JournalPremierClub :isOurBlog="isOurBlog" :link="links.magazinePage"/>
    <Subscribe :light_style="true" />
  </div>
</template>

<script>
import OurNews from "~/blocks/our_blog/OurNews";
import WeWrite from "~/blocks/our_blog/WeWrite";
import CityGuidebook from "~/blocks/our_blog/CityGuidebook";
import JournalPremierClub from "~/blocks/our_blog/JournalPremierClub";
import BlogCategories from "~/blocks/our_blog/BlogCategories";
import ListBlock from "~/blocks/globals/ListBlock";
import Subscribe from "~/blocks/globals/Subscribe";
import BreadCrumbs from "~/components/BreadCrumbs";
import { globalMixin } from "~/plugins/mixins";

export default {
  components: {
    BlogCategories,
    OurNews,
    WeWrite,
    CityGuidebook,
    JournalPremierClub,
    ListBlock,
    Subscribe,
    BreadCrumbs
  },
  mixins: [globalMixin],
  data: () => ({
    crumbs: ["головна мережІ", "блог"],
    isOurBlog:true,
    links:{
      newsPage:"/our_blog/news",
      eventsPage:"/our_blog/events",
      articlesPage:"/our_blog/articles",
      magazinePage:"/our_blog/magazine"
    },
    spas: [
      {
        id: 0,
        name: "Аквазона",
        img: require("~/static/images/list_bar1.jpg"),
        description:
          "Наші тренери - майстри спорту та учасники міжнародних змагань - постійно беруть участь у конференціях і семінарах, розробляють й удосконалюють індивідуальні програми тренувань."
      },
      {
        id: 1,
        name: "Тренажерна зала",
        img: require("~/static/images/list_bar2.jpg"),
        description:
          "Ресторан Terracotta - це вишуканий ресторан з акцентом на середземноморську та українську кухні. Сезон 2019/2020 стане самим експериментальним в 10-річній історії ресторану Terracotta."
      },
      {
        id: 2,
        name: "SPA та масаж",
        img: require("~/static/images/list_bar3.jpg"),
        description:
          "Ресторан Terracotta - це вишуканий ресторан з акцентом на середземноморську та українську кухні. Сезон 2019/2020 стане самим експериментальним в 10-річній історії ресторану Terracotta."
      },
      {
        id: 3,
        name: "Тренажерна зала",
        img: require("~/static/images/list_bar2.jpg"),
        description:
          "Ресторан Terracotta - це вишуканий ресторан з акцентом на середземноморську та українську кухні. Сезон 2019/2020 стане самим експериментальним в 10-річній історії ресторану Terracotta."
      }
    ],
    descrListBlock: {
      title_gold: "Ми дбаємо про",
      title_black: "ваш відпочинок",
      text_description:
        "Premier Palace - це готель високого рівня обслуговування та комфорту. У 2009 році він отримав шість зірок і сім смуг від системи Stars and Stripes, всесвітньо відомої організації по визнанню в індустрії гостинності, а консьєрж готелю.",
      buttonText: "всі Зустрічі та події"
    },
    titleData: {
      little_title: "Premier блог",
      title_gold: "Надихаємо",
      title_black: "на подорожі",
    },
  }),
  computed: {
    articlesToShow() {
      console.log(this.breakpoints);
      return this.breakpoints <= 650 ? 3 : 5;
    }
  }
};
</script>
<style lang="scss">
@import "../../assets/scss/utils.scss";
#our-blog__all {
  .label_wrapper {
    @include max(1200) {
      display: block;
      opacity: 1;
    }
  }
  #title_with_description {
    .description_right {
      @include max(sm) {
        display: none;
      }
    }
  }
  .restaurant_list {
    @include max(sm) {
      padding: 48px 18px 80px 18px;
    }
  }
  .city_guidebook_container {
    .blog_kinds_wrapper {
      @include max(sm) {
        padding-right: 79px;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
#our-blog__all {
  .subscribe {
    @include max(1439) {
      background-color: #f0edea;
    }
    @include max(sm) {
      background-color: #fff;
    }
  }
}
.top_distance-140 {
  @include max(lg) {
    margin-top: 124px;
  }
  @include max(md) {
    margin-top: 112px;
  }
}
.restaurant_list {
  margin-top: 0;
  padding-top: 120px;
}

.top_distance-140 {
  @include mt-140;
}
</style>
