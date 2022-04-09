<template>
  <div id="search-block" class="search-block">
    <input type="input" placeholder="В яке місто їдемо? " @mouseenter="mouseFocus" class="searchFont" />
    <img
      class="search-block_icon"
      src="~/static/icons/search-icon.svg"
      alt="icon"
    />
  </div>
</template>

<script>
export default {
  name: "SearchBlock",

  props: {
    option: {
      type: Object,
      default: () => ({}),
    },
  },
  methods:{
    mouseFocus(){
      this.$emit("mouseFocus");
    }
  }
};
</script>

<style lang="scss" scoped>
.search-block {
  position: relative;
  // height: 54px;
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: flex-start;
  background: #ffffff;
  border-radius: 2px;
  z-index: 1;

  input {
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    &::placeholder {
      color: #000000;
    }
  }
  .search-block_icon{
      position: absolute;
      right: 18px;
      top: 50%;
      transform: translateY(-50%);
  }
}
</style>
