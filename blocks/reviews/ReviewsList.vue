<template>
  <div class="review_list container">
    <div class="main-wrapper">
      <div class="filters">
        <p class="a1 filters-count-desktop">
          <span>
            Знайдено 16 відгуків
          </span>
        </p>

        <SelectBlockWithPlus
          :name="'Сортувати'"
          :options="optionsReview"
          :positionRight="true"
          @change="review = $event.value"
        />
        <!-- <p class="a1">
          Сортувати відгуки <img src="~/static/images/plus.svg" alt="" />
        </p> -->
      </div>
      <div class="table_reviews" ref="table">
        <Review v-for="i in dataTable" :key="i" />
      </div>

      <Pagination
        :total="total"
        :currentPage="currentPage"
        :perPage="perPage"
        :pagesBeforeDots="pagesBeforeDots"
        @pageChange="pageChanged($event)"
      />
    </div>
  </div>
</template>

<script>
import Review from "~/blocks/reviews/Review";
export default {
  name: "ReviewsList",
  components: { Review },
  props: {
    countBlock: {
      type: Number,
      default: 20,
    },
  },
  data() {
    return {
      currentPage: 0,
      perPage: 3,
      pagesBeforeDots: 3,
      total: this.countBlock,

      //

      review: "",
      optionsReview: [
        {
          title: "відгук 1",
          value: "відгук 1",
        },
        {
          title: "відгук 2",
          value: "відгук 2",
        },
        {
          title: "відгук 3",
          value: "відгук 3",
        },
        {
          title: "відгук 4",
          value: "відгук 4",
        },
        {
          title: "відгук 5",
          value: "відгук 5",
        },
      ],
    };
  },
  methods: {
    pageChanged(page) {
      this.currentPage = page;
      this.$refs.table.scrollIntoView({ behavior: "smooth" });
    },
  },
  computed: {
    dataTable() {
      let arr = [];
      for (let i = 0; i < this.countBlock; i++) {
        arr.push(i);
      }

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
.review_list {
  @include mt-80;
  @include mb-140;
  margin-top: 40px;
  @include max(1439) {
    margin-top: -30px;
  }
  @include max(767) {
    margin-top: 80px;
    margin-bottom: 62px;
  }
}
.table_reviews {
  scroll-margin: 80px;
}
.filters {
  display: flex;
  justify-content: space-between;
  @include mb-80;
  p {
    cursor: pointer;
  }
  .filters-count-desktop {
    display: flex;
    align-items: center;
  }
}
.review_list {
  .pagination {
    width: fit-content;
    margin: 80px auto 0 auto;
    @include max(767) {
      display: none;
    }
  }
}
</style>
