<template>
  <div class="review_data">
    <div class="title">
      <h5>
        {{ data.title }}
      </h5>
    </div>
    <div class="data-wrapper">
      <div class="review" v-for="item in data.review" :key="item.id">
        <p class="a1">
          {{ item.name }}
        </p>
        <StarRating />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewData",
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      stars: [1, 2, 3, 4, 5],

      chosenStar: null,
    };
  },
  methods: {
    changeRating(value) {
      this.chosenStar = value;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.review_data {
  //width: 430px;
  display: flex;
  flex-direction: column;

  @include max(md) {
    margin-bottom: 24px;
  }

  @include max(sm) {
    margin-bottom: 16px;
  }

  .title {
    width: 100%;
    padding: 32px 40px;
    background-color: #f0edea;

    @include max(lg) {
      padding: 32px;
    }
  }
  .data-wrapper {
    padding: 40px 40px 44px 40px;
    display: flex;
    flex-direction: column;
    background-color: #f5f4f3;

    @include max(lg) {
      padding: 40px 32px;
    }

    @include max(md) {
      flex-wrap: wrap;
      display: flex;
      flex-direction: row;
    }

    @include max(md) {
      padding: 40px 24px;
    }

    .review {
      &:not(:last-child) {
        margin-bottom: 42px;

        @include max(lg) {
          margin-bottom: 32px;
        }
      }

      @include max(md) {
        margin-right: 102px;
      }

      @include max(550) {
        width: 100%;
      }

      &:nth-child(even) {
        @include max(709) {
          margin-right: 0;
        }
      }


      .a1 {
        margin-bottom: 16px;
      }
      .review_icons {
        display: flex;
        align-items: center;
        .star {
          width: 20px;
          height: 20px;
          display: flex;
          background-color: rgba(#000000, 0.2);
          clip-path: polygon(
            50% 0%,
            61% 35%,
            98% 35%,
            68% 57%,
            79% 91%,
            50% 70%,
            21% 91%,
            32% 57%,
            2% 35%,
            39% 35%
          );
          transition: background-image 0.5s ease-in-out;
          cursor: pointer;

          &:not(:last-child) {
            margin-right: 12px;
          }
          &:hover {
            background-image: url(/_nuxt/static/images/gold_for_button.svg);
            background-color: unset;
            background-size: cover;
          }
          &.active {
            background-image: url(/_nuxt/static/images/gold_for_button.svg);
            background-color: unset;
            background-size: cover;
          }
        }
      }
    }
  }
}
</style>
