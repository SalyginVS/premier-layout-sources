<template>
  <nuxt-link :to="linkTo" class="underline-button a1">
    <span>{{ text }}</span>
  </nuxt-link>
</template>

<script>
export default {
  name: "UnderlineButton",
  props: {
    text: {
      type: String,
    },
    mode: {
      type: String,
      default: "dark",
    },
    link: {
      type: String,
      default: null
    }
  },
  computed: {
    linkTo(){
      if(this.link){
        return this.link;
      }else{
        return '/'
      }
    }
  },
  mounted() {
    console.log(this.mode);
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";

.underline-button {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  position: relative;
  margin: 0 auto;
  white-space: nowrap;

  @media (hover: hover) {
    &:hover {
      &:after {
        width: 35%;
        transition-duration: 0.5s;
      }
      @include max(sm) {
        width: 100%;
      }
    }
  }

  &:after {
    content: "";
    pointer-events: none;
    position: absolute;
    background: url("../static/images/dark_gold.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    transition-duration: 0.5s;
  }

}
</style>
