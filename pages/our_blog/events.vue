<template>
  <div id="our-blog_events">
    <BreadCrumbs :crumbs="crumbs" />
    <BlogCategories />
    <ListBlock
      :foregrounds="dataSpas"
      :labelValue="'17 february 2020'"
      :little_info="false"
      :lightMode="true"
      :position_images="true"
      :noLine="true"
      :isOurBlogEvents="isOurBlogEvents"
      :paginationInfo="paginationInfo"
    />

    <Subscribe />
  </div>
</template>

<script>
import Subscribe from "~/blocks/globals/Subscribe";
import BlogCategories from "~/blocks/our_blog/BlogCategories";
import ListBlock from "~/blocks/globals/ListBlock";
import BreadCrumbs from "~/components/BreadCrumbs";

export default {
  components: {
    BlogCategories,
    ListBlock,
    Subscribe,
    BreadCrumbs
  },
  data() {
    return {
      isOurBlogEvents:true,
      perPage:6,
      pagesBeforeDots:3,
      crumbs: ["головна мережІ", "блог"],
      spas: [
        {
          id: 0,
          name: "Аквазона",
          img: require("~/static/images/list_bar1.jpg"),
          description:
            "Наші тренери - майстри спорту та учасники міжнародних змагань - постійно беруть участь у конференціях і семінарах, розробляють й удосконалюють індивідуальні програми тренувань.",
        },
        {
          id: 1,
          name: "Тренажерна зала",
          img: require("~/static/images/list_bar2.jpg"),
          description:
            "Ресторан Terracotta - це вишуканий ресторан з акцентом на середземноморську та українську кухні. Сезон 2019/2020 стане самим експериментальним в 10-річній історії ресторану Terracotta.",
        },
        {
          id: 2,
          name: "SPA та масаж",
          img: require("~/static/images/list_bar3.jpg"),
          description:
            "Ресторан Terracotta - це вишуканий ресторан з акцентом на середземноморську та українську кухні. Сезон 2019/2020 стане самим експериментальним в 10-річній історії ресторану Terracotta.",
        },
        {
          id: 3,
          name: "Тренажерна зала",
          img: require("~/static/images/list_bar2.jpg"),
          description:
            "Ресторан Terracotta - це вишуканий ресторан з акцентом на середземноморську та українську кухні. Сезон 2019/2020 стане самим експериментальним в 10-річній історії ресторану Terracotta.",
        },
      ],
    };
  },
  computed:{
    paginationInfo(){
      return {
        perPage:this.perPage,
        pagesBeforeDots:this.pagesBeforeDots
      }
    },
    dataSpas(){
      return new Array(12).fill(null).map(elem=>{return elem=[...this.spas]});
    }
  }
};
</script>

<style lang="scss" scoped>
.restaurant_list{
    margin-top: 40px;
}
</style>