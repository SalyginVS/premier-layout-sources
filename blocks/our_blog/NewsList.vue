<template>
  <div class="news_list_container_wrapper">
    <div class="news_list_container" ref="table">
      <nuxt-link
        to="/"
        class="one_news"
        v-for="index in dataTable"
        :key="index"
      >
        <div class="one_news__image_wrapper">
          <img src="~/static/images/our_blog_news.jpg" alt />
          <SaleLabel :text="data.label" :small_label="true" />
        </div>
        <p class="a1 one_news__main_title">Сніданки з підписами</p>
        <p class="p2_light one_news__secondary_title">
          Київ, Premier Palace Hotel
        </p>
      </nuxt-link>
    </div>

    <Pagination
      v-if="pagination"
      :total="total"
      :currentPage="currentPage"
      :perPage="perPage"
      :pagesBeforeDots="pagesBeforeDots"
      @pageChange="pageChanged($event)"
    />
  </div>
</template>

<script>
export default {
  name: "NewsList",
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    countBlock: {
      type: Number,
      default: 34,
    },
    pagination: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentPage: 0,
      perPage: 6,
      pagesBeforeDots: 3,
      total: this.countBlock,
    };
  },
  methods: {
    pageChanged(page) {
      this.currentPage = page;
      this.$refs.table.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  },
  computed: {
    dataTable() {
      let arr = [];
      for (let i = 0; i < this.countBlock; i++) {
        arr.push(i);
      }
      console.log(this.data);
       console.log(arr);
       console.log(this.countBlock);
      return arr.slice(
        this.currentPage * this.perPage,
        (this.currentPage + 1) * this.perPage
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.news_list_container_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.news_list_container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.one_news {
  cursor: pointer;
  margin-bottom: 74px;
  width: calc(33.33333% - 27px);

  @include max(lg) {
    width: calc(50% - 20px);
    margin-bottom: 48px;
  }
  @include max(md) {
    width: calc(50% - 17px);
    margin-bottom: 40px;
  }
  @include max(sm) {
    width: 100%;
    margin-bottom: 32px;
  }

  &__image_wrapper {
    height: 15.38vw;
    margin-bottom: 18px;
    position: relative;

    @include max(lg) {
      height: 230px;
    }
    @include max(lg) {
      height: 220px;
    }

    img {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
    }
  }
  &__main_title {
    margin-bottom: 3px;
  }
  &__secondary_title {
    opacity: 0.5;
  }
}
.one_news:nth-of-type(1),
.one_news:nth-of-type(2),
.one_news:nth-of-type(3) {
  margin-top: 0;
}
.pagination {
  width: 223px;
  margin: auto;
  margin-bottom: 140px;
  margin-top: 12px;
  display: flex;
  justify-content: space-between;

  @include max(lg) {
    margin: 18px 0 124px;
  }
  @include max(md) {
    margin: 20px 0 112px;
  }
  @include max(sm) {
    margin: 16px 0 80px;
  }
}
</style>
