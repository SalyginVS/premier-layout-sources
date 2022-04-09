<template>
  <div class="input-block">
    <span
      class="p1 placeholder"
      :class="{
        active: focus || value,
        placeholder_uppercase: placeholderUpperCase
      }"
    >
      {{ option.placeholder }}
    </span>
    <input
      @focus="focusInput"
      @input="input($event)"
      :type="option.type"
      :value="option.value"
      class="p1"
      ref="input"
    />
    <div
      class="eye"
      v-if="option.type === 'password'"
      @click="togglePasswordDisplay"
    >
      <img src="@/static/icons/eye.svg" alt="eye" v-if="passwordIsShown" />
      <img src="@/static/icons/eye-off.svg" alt="eye" v-else />
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",

  props: {
    option: {
      type: Object,
      default: () => ({})
    },
    placeholderUpperCase: {
      type: Boolean,
      default: false
    },
    value: null
  },
  data() {
    return {
      focus: false,
      passwordIsShown: false
    };
  },
  methods: {
    focusInput() {
      this.focus = true;
    },
    focusOutInput() {
      this.focus = false;
    },
    input(e) {
      this.$emit("input", e.target.value);
    },
    togglePasswordDisplay() {
      this.passwordIsShown = !this.passwordIsShown;
      this.passwordIsShown
        ? (this.$refs.input.type = "text")
        : (this.$refs.input.type = "password");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";
.input-block {
  position: relative;
  height: 48px;
  width: 265px;
  padding: 12px 0 4px 9px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(#000000, 0.1);
  z-index: 1;
  @include max(767) {
    width: 100%;
  }

  .placeholder {
    width: calc(100% - 10px);
    position: absolute;
    top: 14px;
    opacity: 0.6;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    z-index: -1;
    @include max(767) {
      top: 19px;
    }
    &.placeholder_uppercase {
      top: 22px;
      left: 10px;
      font-family: AvenirNextCyrMedium;
      font-style: normal;
      font-weight: 450;
      font-size: 10px;
      line-height: 14px;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: #000000;
      opacity: 1;
    }
    &.active {
      top: -2px;
      font-family: AvenirNextCyrMedium;
      font-style: normal;
      font-weight: 450;
      font-size: 8px;
      line-height: 14px;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: #000000;
      @include max(767) {
        top: 2px;
      }
    }
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
  }
}
</style>
