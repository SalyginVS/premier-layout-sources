<template>
  <div class="two_titles_container" :class="{managment_and_franchising_page:isManagmentAndFranchisingPage}">
    <p class="a1 little_title">{{little_title}}</p>
    <h3 class="main_title" v-html="main_title"></h3>
  </div>
</template>

<script>
export default {
  name: "TwoTitles",
  props: {
    main_title: {
      type: String,
      default: ""
    },
    little_title: {
      type: String,
      default: ""
    },
    isManagmentAndFranchisingPage:{
      type:Boolean,
      default:false
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/utils.scss';

.little_title {
    @include mb-16;
}
.little_title, .main_title {
    text-align: center;
}
</style>