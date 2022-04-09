<template>
  <div class="one_news_quote_block" :class="{ light }">
    <div class="quote">
      <img src="~/static/images/quote_start.svg" alt />
      <h5 class="quote__quote_text">
        Тому за багато років Супербоул перетворився на самостійну розвагу навіть
        для тих, кого футбол не дуже й цікавить. Квитки можна придбати на
        офіційному сайті, ціна стартує від 4 725 доларів.
      </h5>
      <img src="~/static/images/quote_end.svg" alt />
    </div>
    <p class="a1 quote_autor">Костянтин константинопольський</p>
  </div>
</template>

<script>
export default {
  name: "OneNewsQuoteBlock",
  props: {
    light: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";

.one_news_quote_block {
  position: relative;
  padding: 210px 258px 32px;
  background-image: url("../../../static/images/one_news.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* background: ; */
  &.light {
    &::after {
      background-color: rgba(#f0edea, 0.98);
    }
  }

  @include max(lg) {
    padding: 148px 134px 48px;
  }
  @include max(md) {
    padding: 148px 108px 24px;
  }
  @include max(sm) {
    padding: 120px 18px 24px;
  }
}
.one_news_quote_block::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(240, 237, 234, 0.98);
}

.quote {
  position: relative;
  z-index: 5;
  display: flex;
  align-items: center;
  &__quote_text {
    text-align: center;
    width: 717px;
    margin: 0 80px;
    @include max(lg) {
      margin: 0 44px;
    }
    @include max(md) {
      margin: 0 33px;
    }
    @include max(sm) {
      margin: 0;
    }
  }
  @include max(sm) {
    img {
      display: none;
    }
  }
}
.quote_autor {
  position: relative;
  text-align: center;
  margin-top: 168px;
  z-index: 5;
  opacity: 0.3;
  @include max(lg) {
    margin-top: 119px;
  }
  @include max(md) {
    margin-top: 114px;
  }
  @include max(sm) {
    margin-top: 83px;
  }
}
</style>
