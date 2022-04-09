<template>
  <div class="account-info-block">
    <h6 class="font-cormorant title">{{ item.title }}</h6>
    <p class="p2_light description">{{ item.description }}</p>
    <nuxt-link class="a1 more-button" :to="item.buttonlink">{{
      item.buttonMore
    }}</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "AccountInfoBlock",
  props: {
    item: {
      type: Object,
      default: false
    }
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";

.account-info-block {
  width: 31vw;
  max-width: 446px;
  min-height: 250px;
  padding: 24px 92px 32px 32px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: #f0edea;
  @include max(1439) {
   padding:24px 32px;
  }
  @include max(1023){
    padding: 24px;
    width:41vw;
  }
  @include max(767){
    width:100%;
    padding:20px;
  }
  .title {
    margin-bottom: 12px;
  }
  .more-button {
    margin-top: auto;
    border-bottom: 1px dashed #000000;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
