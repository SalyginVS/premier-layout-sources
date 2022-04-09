=
<template>
  <div id="our-blog_events">
    <BreadCrumbs :crumbs="crumbs" />
    <BlogCategories />
    <WeWrite :onlyArticles="true" :lightMode="true"/>
    <Subscribe /> 
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import Subscribe from "~/blocks/globals/Subscribe";
import BlogCategories from "~/blocks/our_blog/BlogCategories";
import WeWrite from "~/blocks/our_blog/WeWrite";
import BreadCrumbs from "~/components/BreadCrumbs";

export default {
  components: {
    HeaderBlock,
    BlogCategories,
    WeWrite,
    Subscribe,
    BreadCrumbs
  },
  data() {
    return {
      crumbs: ["головна мережІ", "блог"],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>