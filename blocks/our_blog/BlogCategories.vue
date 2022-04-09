<template>
  <div class="blog_categories_container">
    <div class="blog__title-block-wrapper container">
      <TitleWithDescription :data="titleData" />
    </div>

    <div class="main-wrapper">
      <div class="blog_kinds_container">
        <div class="blog_kinds_wrapper">
          <nuxt-link
            :to="{ path: kind.link, hash: kind.hash }"
            class="a1 blog_categories_menu"
            v-for="kind in kinds"
            :key="kind.name"
            >{{ kind.name }}
          </nuxt-link>
        </div>
        <span class="line-simple"></span>
      </div>
    </div>
  </div>
</template>

<script>
import TitleWithDescription from "~/blocks/globals/TitleWithDescription";

export default {
  name: "BlogCategories",
  props: {
    titleData: {
      type: Object,
      default: () => ({
        little_title: "Premier блог",
        title_gold: "Ми дбаємо про",
        title_black: "ваш відпочинок"
      })
    }
  },
  components: {
    TitleWithDescription
  },
  data: () => ({
    kinds: [
      { name: "новини", link: "/our_blog/news" },
      { name: "Події", link: "/our_blog/events" },
      { name: "Статті", link: "/our_blog/articles" },
      {
        name: "Міські путівники",
        link: "/our_blog",
        hash: "#cityGuidebook"
      },
      { name: "Журнал Premier Club", link: "/our_blog/magazine" }
    ]
  })
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.blog_kinds_container {
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: fit-content;
  margin-left: auto;
  @include max(sm) {
    width: 100%;
    margin-left: 0;
  }
  .line-simple {
    top: unset;
    bottom: 35px;
    left: -156px;

    @include max(lg) {
      width: 300px;
      bottom: 28px;
      left: -60px;
    }
    @include max(md) {
      width: 250px;
      bottom: 35px;
      left: -34px;
    }
    @include max(sm) {
      display: none;
    }
  }
}
.blog_kinds_wrapper {
  margin-top: -66px;
  padding: 55px;
  @include pr-168;
  padding-bottom: 33px;
  background-color: #f5f4f3;
  display: flex;
  flex-wrap: wrap;
  max-width: 614px;
  position: relative;
  z-index: 1;

  @include max(lg) {
    margin-top: -41px;
    max-width: 444px;
    padding: 40px 40px 18px;
  }
  @include max(md) {
    max-width: 374px;
    padding: 32px 32px 10px;
  }
  @include max(sm) {
    min-width: 100%;
    margin-top: 32px;
    padding: 24px 60px 4px 18px;
  }

  .blog_categories_menu {
    @include mr-40;
    @include mb-22;
    display: inline-block;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
    &:hover {
      opacity: 1;
    }
    &.nuxt-link-exact-active {
      opacity: 1;
    }

    @include max(md) {
      &:last-child {
        margin-right: 0;
      }
    }
  }
}

.blog__title-block-wrapper {
  max-width: 1440px;
  margin: auto;
}
.blog__title-block-wrapper.container {
  @include max(1440) {
    padding: 0;
  }
}
</style>
