<template>
  <label class="checkbox-container">
    <!-- <p class="a2" v-html="data"></p> -->
    <p class="p2_light" :class="special" v-html="data"></p>
    <input type="checkbox" />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    data: {
      type: String,
      default: "",
    },
    special:{
      type: String,
      default: ''
    }
  },
};
</script>
<style lang="scss">
@import "../../../assets/scss/utils.scss";

.checkbox-container {
  .a2 {
    span {
      color: rgba(#000000, 0.48);
      //color: red;
    }
  }
  .p2_light {
    color: rgba(0, 0, 0, 0.6);

    @include max(sm) {
      color: black;
    }
    > span {
      color: rgba(0, 0, 0, 1);
      font-weight: 450;
    }
    > a {
      text-decoration: underline;

      @include max(sm) {
        text-decoration: none;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.checkbox-container {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 21px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 5px;
    left: 0;
    height: 11px;
    width: 11px;
    background-color: transparent;
    border: 1px solid rgba(#000000, 0.24);
    border-radius: 1px;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 3px;
    top: 0px;
    width: 4px;
    height: 7px;
    border: 1px solid #000000;
    border-width: 0 1px 1px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
</style>
