<template>
  <div class="alert-level">
    <div class="level">
      <h4 class="gold_text">{{ data.name }}</h4>
      <span class="a2"> рівень картки </span>
    </div>
    <span class="separate-line"> </span>
    <div class="need-points">
      <h4 class="gold_text">
        {{
          points.count === "4234"
            ? "Вітаємо!"
            : `${data.needPoints} балів`
        }}
      </h4>
      <span class="a2">{{
        points.count === "4234"
          ? "ви досягли мах рівня"
          : "до наступного рівня"
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertLevel",
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    points: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.alert-level {
  max-width: 600px;
  padding: 32px 64px 32px 88px;
  display: flex;
  background-color: #f5f5f5;
  @include max(1439){
    padding: 24px 40px 24px 77px;
  }
  @include max(1023){
    padding:23px 55px 23px 63px;
  }
  @include max(767){
    max-width:100%;
    padding:18px 0;
    display: flex;
    justify-content: center;
  }
  .level,
  .need-points {
    // width: calc(50% - 64px);
    padding: 3px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .gold_text {
      line-height: 110%;
      margin-bottom: 11px;
    }
    .a2 {
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: rgba(#000000, 0.3);
      @include max(1439){
        white-space: nowrap;
      }
      @include max(767){
        font-size: 8px;
      }
    }
  }
  .separate-line {
    margin: 0 64px;
    width: 1px;
    height: auto;
    display: inline-block;
    background: rgba(#000000, 0.08);
    @include max(1439){
      margin:0 52px;
    }
    @include max(1023){
      margin:0 48px;
    }
  }
}
</style>
