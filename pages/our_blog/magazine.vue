
<template>
  <div id="our-blog_events">
    <BreadCrumbs :crumbs="crumbs" />
    <BlogCategories />
    <JournalPremierClub :onlyMagazine="true" :lightMode="true"/>
    <Subscribe /> 
  </div> 
</template>

<script>
import Subscribe from "~/blocks/globals/Subscribe";
import BlogCategories from "~/blocks/our_blog/BlogCategories";
import JournalPremierClub from "~/blocks/our_blog/JournalPremierClub";
import BreadCrumbs from "~/components/BreadCrumbs";

export default {
  components: {
    BlogCategories,
    JournalPremierClub,
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