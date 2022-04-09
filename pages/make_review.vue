<template>
  <div id="make_reviews">
    <HeaderBlock :header_ligh_style="true" />
    <div class="top_distance"></div>
    <TitleWithFilterBooking :data="title_booking_filter" :one_line="true" />

    <div class="review-wrapper">
      <GuestInfo-reviews :dataInfo="titleInfoBlock" />
      <ReviewData :data="dataReview" />
      <div class="line-simple"></div>

      
    </div>
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";

import TitleWithFilterBooking from "~/blocks/globals/TitleWithFilterBooking";
import GuestInfoReviews from "~/blocks/make_review_page/GuestInfoReviews";
import ReviewData from "~/blocks/make_review_page/ReviewData";

export default {
  components: {
    HeaderBlock,
    TitleWithFilterBooking,
    GuestInfoReviews,
    ReviewData,
  },
  data: () => ({
    title_booking_filter: {
      title_gold: "Ваш ",
      title_black: "відгук",
    },
    titleInfoBlock: {
      title: "Інформація про ваше перебування",
      title_mob: "Інформація перебування",
    },
    dataReview: {
      title: "Скажи нам, що ти думаєш",
      review: [
        {
          id: 0,
          name: "Служба бронювання",
          valueSelect: 4,
        },
        {
          id: 1,
          name: "Процес реєстрації / виїзду",
          valueSelect: 0,
        },
        {
          id: 2,
          name: "Комфорт у кімнаті",
          valueSelect: 0,
        },
        {
          id: 3,
          name: "Персонал",
          valueSelect: 0,
        },
        {
          id: 4,
          name: "Чистота вашої кімнати",
          valueSelect: 0,
        },
      ],
    },
  }),
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";
#make_reviews {
  .top_distance {
    @include mt-227;

    @include max(lg) {
      margin-top: 201px;
    }

    @include max(md) {
      margin-top: 189px;
    }

    @include max(sm) {
      margin-top: 140px;
    }
  }
  .title_with_description {
    margin-bottom: 140px;

    @include max(lg) {
      padding-left: 134px;
      margin-bottom: 124px;
    }

    @include max(md) {
      padding-left: 48px;
      margin-bottom: 112px;
    }

    @include max(sm) {
      margin-bottom: 80px;
      padding-left: 18px;
    }
  }
  .review-wrapper {
    position: relative;
    max-width: 1104px;
    margin: 0 auto;
    // @include pr-168;
    // @include pl-168;
    @include mb-140;
    display: flex;
    align-items: flex-start;

    @include max(lg) {
      padding: 0 56px;
      margin-bottom: 124px;
      max-width: 100%;
    }

    @include max(md) {
      flex-wrap: wrap;
      padding: 0 48px;
      margin-bottom: 112px;

      flex-direction: column-reverse;
    }

    @include max(sm) {
      margin-bottom: 80px;
      padding: 0 18px;
    }

    .guest_info_reviews {
      width: 650px;
      margin-right: 24px;
      display: flex;
      flex-direction: column;
      z-index: 1;
      position: relative;

      @include max(lg) {
        width: calc(100%);
      }
    }
    .review_data {
      z-index: 1;
      min-width: 430px;
      position: relative;
      margin-bottom: 24px;
      display: flex;
      flex-direction: column;

      @include max(lg) {
        min-width: 278px;
        width: 50%;
        max-width: 368px;
      }

      @include max(md) {
        height: auto;
        min-width: 100%;
        width: 100%;
        max-width: 100%;
        margin-bottom: 24px;
      }
    }
    .line-simple {
      width: 440px;

      top: 68px;
      left: auto;
      right: 189px;

      @include max(lg) {
        top: 73px;
        left: auto;
        right: 92px;
      }

      @include max(md) {
        top: 70px;
        left: auto;
        right: 63px;

        // top: -25px;
        // left: auto;
        // right: 34px;
      }

      @include max(sm) {
        top: 70px;
        left: auto;
        right: -30px;
      }
    }
  }
}
</style>
