<template>
  <div id="chef_wrapper" class="main-wrapper">
    <div class="chef_description">
      <p class="little_title">шеф повар</p>
      <h3>
        Виктория
        <span class="gold_text">Ончева</span>
      </h3>
      <div class="long_description">
        <AboutMainDescription :text="description" :maxLength="30" />
      </div>
    </div>
    <div class="right_image_wrapper">
      <img src="~/static/images/chief_image.jpg" alt />
    </div>
  </div>
</template>

<script>
import AboutMainDescription from "~/blocks/globals/abouts/AboutMainDescription";

export default {
  name: "Chef",
  comments: {
    AboutMainDescription,
  },
  data: () => ({
    description:
      "Ресторани готелю Premier Palace Hotel задовольнять смак найбільш вимогливих гостей. Ранок починається з кращого в Києві сніданку, романтичний вечір знову повертає гостей за столики з видом на центр міста. Ранок починається з кращого в Києві сніданку, що подається в панорамному ресторані «Теракота». Романтичний вечір знову повертає гостей за столики з видом на центр міста ресторану «Теракота».",
  }),
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

#chef_wrapper {
  margin: 140px 0;
  padding: 0 118px 0 168px;
  display: flex;
  align-items: center;
  &.main-wrapper {
    @include min(1600) {
      margin: 140px auto;
      padding: 0;
    }
  }
  @include max(lg) {
    margin: 124px 0;
    padding: 0 55px 0 134px;
  }
  @include max(md) {
    margin: 112px 0;
    padding: 0 48px;
  }
  @include max(sm) {
    margin: 80px 0;
    padding: 0 18px;
    flex-direction: column;
  }
}
.right_image_wrapper {
  width: 37.5vw;
  @include min(1441) {
    max-width: 540px;
    max-height: 724px;
  }
  @include max(lg) {
    max-width: 368px;
  }
  @include max(md) {
    width: 100%;
    height: 414px;
  }
  @include max(sm) {
    height: 430px;
    margin-bottom: 32px;
    max-width: unset;
  }

  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
}
.chef_description {
  flex-grow: 1;
  width: 461px;
  @include max(lg) {
    margin-right: 70px;
  }
  @include max(sm) {
    order: 1;
    width: 100%;
    margin-right: 0;
  }
}
.long_description {
  width: 421px;
  @include min(1441) {
    width: 70%;
  }
  @include max(lg) {
    width: 290px;
  }
  @include max(md) {
    width: 275px;
  }
  @include max(sm) {
    width: 100%;
  }
}
h3 {
  margin: 23px 0 40px;
  @include max(lg) {
    margin: 16px 0 40px;
  }
  @include max(md) {
    margin: 12px 0 32px;
  }
  @include max(sm) {
    margin: 10px 0 24px;
  }
}
</style>