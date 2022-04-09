<template>
  <div id="rating">
    <div class="rating_wrapper">
      <div class="rating">
        <div class="mark_wrapper">
          <h3 class="gold_text mark">9.5</h3>
          <p class="a1 mark_description">Booking.com</p>
        </div>
        <div class="mark_wrapper">
          <h3 class="gold_text mark">10</h3>
          <p class="a1 mark_description">наш рейтинг</p>
        </div>
        <div class="mark_wrapper">
          <h3 class="gold_text mark">9.0</h3>
          <p class="a1 mark_description">tripadvisor</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rating",
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.rating_wrapper {
  padding: 61px 0 89px;
  background-color: #f0edea;
  @include max(lg) {
    padding: 48px 0 64px;
  }
  @include max(md) {
    padding: 40px 0 56px;
  }
  @include max(sm) {
    padding: 48px 26px;
    width: 100%;
  }
}
.rating {
  width: 614px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  @include max(lg) {
    width: fit-content;
    justify-content: center;
  }
  @include max(sm) {
    width: 100%;
    justify-content: space-between;
  }
 
  .mark_wrapper {
    &:not(:last-child) {
      @include max(lg) {
        margin-right: 104px;
      }
      @include max(md) {
        margin-right: 72px;
      }
      @include max(sm) {
        margin-right: 8px;
      }
    }
  }
  p,
  h3 {
    text-align: center;
  }
  p {
    opacity: 0.3;
  }
  h3 {
    @include mb-16;
    @include max(lg) {
      margin-bottom: 19px;
    }
    @include max(md) {
      font-size: 40px;
      margin-bottom: 12px;
    }
    @include max(sm) {
      font-size: 32px;
      margin-bottom: 10px;
    }
  }
}
</style>