<template>
  <div class="news_block_container news container">
    <div class="main-wrapper">
      <div class="filters">
        <p class="a1">Знайдено 8 новин</p>
        <div class="filters__wrapper">
          <SelectBlockWithPlus
            v-for="item in filters"
            :key="item.id"
            :name="item.name"
            :options="item.options"
            @change="item.type = $event.value"
          />
        </div>
      </div>
      <NewsList :data="dataTile" :pagination="pagination" />
    </div>
  </div>
</template>

<script>
import NewsList from "~/blocks/our_blog/NewsList";

export default {
  name: "NewsBlock",
  components: {
    NewsList,
  },
  props: {
    filters: {
      type: Array,
      default: () => [],
    },
    dataTile: {
      type: Object,
      default: () => [],
    },
    pagination: {
      type: Boolean,
      default: false,
    },
    positionRight: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss">
@import "../../../assets/scss/utils.scss";
.news_block_container {
  .select-wrapper:not(:last-child) {
    margin-right: 44px;
    @include max(md){
      margin-right:24px;
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";
.news_block_container {
  @include mt-140;
}
.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include mb-80;

  @include max(lg) {
    margin-bottom: 64px;
  }
  @include max(md) {
    margin-bottom: 56px;
  }
  @include max(sm) {
    margin-bottom: 32px;
  }

  &__wrapper {
    display: flex;
  }
  &__one_filter {
    @include ml-64;
    cursor: pointer;
  }
  .a1{
    @include max(sm){
      display: none;
    }
  }
}
</style>
