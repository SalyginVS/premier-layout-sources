<template>
  <div class="radio-wrapper" :class="{ addStyle: addStyle }">
    <label class="label-container">
      <p class="a2" v-html="optionText"></p>
      <input
        type="radio"
        :name="name"
        :value="optionValue"
        :checked="value === optionValue"
        @input="$emit('input', optionValue)"
      />
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    name: {
      type: String,
      default: "",
    },
    optionText: {
      type: String,
      default: "",
    },
    optionValue: "",

    value: null,

    addStyle: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
@import "../../../assets/scss/utils.scss";

.a2 {
  span {
    color: rgba(#000000, 0.48);

    // @include max(700) {
    //   &:before {
    //     content: "";
    //     margin-top: 5px;
    //     display: block;
    //   }
    // }

    @include max(sm) {
      &:before {
        content: "";
        margin-top: 5px;
        display: none;
      }


    }
  }
}
</style>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";

.radio-wrapper {
  position: relative;
  display: flex;
  cursor: pointer;

  .label-container {
    padding-left: 17px;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    .a2 {
      text-transform: uppercase;

      @include max (sm){
        font-size: 9px;
      }
    }
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 9px;
      width: 9px;
      background-color: transparent;
      border: 1px solid rgba(#000000, 0.16);
      border-radius: 50%;
      transition: all 0.3s ease-in-out;
    }
    &:hover input ~ .checkmark {
      background-color: rgba(#000000, 0.05);
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
      position: absolute;
      top: 1px;
      left: 1px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: rgba(#000000, 0.8);
    }
  }

  &.addStyle {
    .label-container {
      .checkmark {
        top: 5px;
        width: 11px;
        height: 11px;
        &:after {
          width: 7px;
          height: 7px;
        }
      }
    }
  }
}
</style>
