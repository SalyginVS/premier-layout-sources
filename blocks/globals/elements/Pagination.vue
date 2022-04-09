<template>
  <div
    class="pagination"
    :class="{ 'one-page': pageCount === 1, 'two-page': pageCount === 2 }"
  >
    <div
      v-if="pageCount > pagesBeforeDots"
      class="arrow-left__double"
      @click="changePage(0)"
    >
      <img
        class="arrow-left"
        :class="{ disabled: currentPage === 0 }"
        src="~/static/icons/arrow-left.svg"
        alt="icon"
      />
      <img
        class="arrow-left"
        :class="{ disabled: currentPage === 0 }"
        src="~/static/icons/arrow-left.svg"
        alt="icon"
      />
    </div>
    <div
      v-if="pageCount > pagesBeforeDots"
      class="arrow-right__double"
      @click="changePage(pageCount - 1)"
    >
      <img
        class="arrow-right"
        :class="{ disabled: currentPage + 1 === pageCount }"
        src="~/static/icons/arrow-left.svg"
        alt="icon"
      />
      <img
        class="arrow-right"
        :class="{ disabled: currentPage + 1 === pageCount }"
        src="~/static/icons/arrow-left.svg"
        alt="icon"
      />
    </div>
    <img
      class="arrow-left"
      :class="{ disabled: currentPage === 0 }"
      @click="changePage(currentPage - 1)"
      src="~/static/icons/arrow-left.svg"
      alt="icon"
    />
    <img
      class="arrow-right"
      :class="{ disabled: currentPage + 1 === pageCount }"
      @click="changePage(currentPage + 1)"
      src="~/static/icons/arrow-left.svg"
      alt="icon"
    />
    <div class="pages a1">
      <template v-if="pageCount > pagesBeforeDots + 1">
        <p v-if="currentPage + 1 >= pagesBeforeDots">...</p>
        <p
          v-for="page in pageNumbersVisible"
          @click="changePage(page)"
          :key="page"
          :class="{ active: page == currentPage }"
        >
          {{ zeroNumber(page + 1) }}
        </p>
        <p v-if="pageCount - (currentPage + 1) >= pagesBeforeDots">...</p>

        <p
          @click="changePage(pageCount - 1)"
          :class="{ active: pageCount == currentPage + 1 }"
        >
          {{ zeroNumber(pageCount) }}
        </p>
      </template>

      <template v-else>
        <p
          v-for="page in pageNumbers"
          :key="page"
          :class="{ active: page == currentPage }"
          @click="changePage(page)"
        >
          {{ zeroNumber(page + 1) }}
        </p>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",

  props: {
    currentPage: {
      type: Number,
      default: 0
    },
    perPage: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 1
    },
    pagesBeforeDots: {
      type: Number,
      default: 3
    }
  },

  methods: {
    zeroNumber(number) {
      return number < 10 ? `0${number}` : number;
    },

    changePage(page) {
      this.$emit("pageChange", page);
    }
  },

  computed: {
    pageCount() {
      return Math.ceil(this.total / this.perPage);
    },

    pageNumbers() {
      console.log(this.pageCount);
      return Array.from({ length: this.pageCount }, (x, i) => i);
    },

    pageNumbersVisible() {
      if (this.currentPage <= 1) {
        return this.pageNumbers.slice(0, this.pagesBeforeDots);
      }

      if (this.pageCount - this.currentPage <= this.pagesBeforeDots) {
        return this.pageNumbers.slice(
          this.pageCount - this.pagesBeforeDots - 1,
          this.pageCount - 1
        );
      }

      return this.pageNumbers.slice(
        this.currentPage - 1,
        this.currentPage + this.pagesBeforeDots - 1
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";

.pagination {
  // width: 225px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .arrow-left,
  .arrow-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .arrow-left {
    left: 0;
    &.disabled {
      opacity: 0.3;
      pointer-events: none;
    }
  }
  .arrow-right {
    right: 0;
    transform: translateY(-50%) rotate(180deg);
    &.disabled {
      opacity: 0.3;
      pointer-events: none;
    }
  }
  .arrow-left__double,
  .arrow-right__double {
    display: flex;
    position: absolute;
    top: 50%;
    .arrow-left,
    .arrow-right {
      position: relative;
    }
  }
  .arrow-left__double {
    left: -15%;
  }
  .arrow-right__double {
    right: -15%;
  }
  .pages {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      opacity: 0.5;
      cursor: pointer;
      transition: opacity 0.3s ease-in-out;
      &:not(:last-child) {
        margin-right: 20px;
        @include max(767) {
          margin-right: 0;
        }
      }
      &:hover {
        opacity: 1;
      }
      &.active {
        opacity: 1;
      }
    }
  }
  &.one-page {
    .arrow-left,
    .arrow-right {
      opacity: 0.3;
      pointer-events: none;
    }
    .pages {
      justify-content: center;
    }
  }
  &.two-page {
    .pages {
      justify-content: center;
    }
  }
}
</style>
