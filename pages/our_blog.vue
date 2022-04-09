<template>
  <div id="our_blog">
    <HeaderBlock :header_ligh_style="true" />
    <div class="top_distance"></div>
    <div class="our_blog-wrapper">
        <nuxt-child/>
    </div>
  </div>
</template>
<script>
export default {
  name: "OurBlog"
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/utils.scss";
    .top_distance {
  margin-top: 227px;
  @include max(lg) {
    margin-top: 236px;
  }
  @include max(md) {
    margin-top: 220px;
  }
  @include max(sm) {
    margin-top: 167px;
  }
}
</style>
