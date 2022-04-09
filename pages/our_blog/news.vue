<template>
  <div id="our-blog_news">
    <BreadCrumbs :crumbs="crumbs"/>
    <BlogCategories />

    <NewsBlock
      :filters="filters"
      :dataTile="dataTile"
      :pagination="true"
    />

    <Subscribe />
  </div>
</template>

<script>
import Subscribe from "~/blocks/globals/Subscribe";
import BlogCategories from "~/blocks/our_blog/BlogCategories";
import NewsBlock from "~/blocks/our_blog/one_category/NewsBlock";
import BreadCrumbs from "~/components/BreadCrumbs";

export default {
  components: {
    BreadCrumbs,
    BlogCategories,
    NewsBlock,
    Subscribe,
  },
  data() {
    return {
      crumbs: ["головна мережІ", "блог"],
      filters: [
        {
          id: 0,
          name: "По місту",
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
        {
          id: 1,
          name: "дата",
          type: "",
          options: [
            {
              title: "дата1 ",
              value: "дата1",
            },
            {
              title: "дата2",
              value: "дата2",
            },
            {
              title: "дата3",
              value: "дата3",
            },
            {
              title: "дата4",
              value: "дата4",
            },
            {
              title: "дата5",
              value: "дата5",
            },
          ],
        },
      ],
      dataTile: {
        label: "17 feb 2020",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
