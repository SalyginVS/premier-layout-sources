<template>
  <div
    @click="toggleOpen()"
    class="select-wrapper"
    :class="{
      'open-dropdown': open,
      'selected-option': optionSelected && optionSelected.title,
    }"
  >
    <p  class="a1 description">
      {{ name }}
    </p>
    <img class="arrow" src="~/static/icons/select-arrow.svg" alt="icon" />

    <div class="selected-block" >
      <slot name="input" v-bind:optionSelected="optionSelected">
        <p class="p1">
          {{ optionSelected && optionSelected.title }}
        </p>
      </slot>
    </div>
    <div class="select" :class="{ open: open, positionLable: disabled }">
      <div class="options">
        <p
          v-for="option in options"
          :key="option.value"
          @click.stop="onChange(option)"
          class="a1"
          :class="{ active: option === optionSelected }"
        >
          {{ option.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectBlockWithHeader",
  props: {
    name: {
      type: String,
      default: "Мова розсилки",
    },
    disabled: {
      type: Boolean,
      default: false,
    },

    defaultValue: null,

    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      open: false,
      optionSelected: this.options.find((x) => x.value === this.defaultValue),
    };
  },
  methods: {
    toggleOpen() {
      if (this.disabled) {
        this.open = false;
        return;
      }
      this.open = !this.open;
    },
    onChange(option) {
      this.optionSelected = option;

      this.$emit("change", this.optionSelected);
      this.open = false;
    },

    backdropClick(e) {
      let selectClosest = e.target.closest(".select-wrapper");
      let selects = [];
      while (selectClosest) {
        selects.push(selectClosest);
        selectClosest = selectClosest.parentElement.closest(".select-wrapper");
      }
      if (selects.every((d) => d != this.$el)) {
        this.open = false;
      }
    },
  },

  computed: {},

  mounted() {
    document.addEventListener("click", this.backdropClick);
  },
  destroyed() {
    document.removeEventListener("click", this.backdropClick);
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";

.select-wrapper {
  min-height: 32px;
  max-height: 48px;
  padding: 8px 40px 9px 7px;
  display: flex;
  cursor: pointer;
  position: relative;
  z-index: 10;
  border-bottom: 1px solid rgba(#000000, 0.1);
  margin-top: auto;
  &.selected-option {
      padding-bottom: 6px;
    .selected-block {
      display: flex;
    }
    .description {
      position: absolute;
      top: -2px;
      font-style: normal;
      font-size: 8px;
      line-height: 14px;
      opacity: 0.3;
    }
    .arrow{
        top: 50%;
    }
  }

  .description {
    display: flex;
    white-space: nowrap;
    width: 100%;
    position: relative;
    opacity: 0.6;
    margin-top: auto;
  }
  .selected-block {
    position: relative;
    width: 100%;
    display: none;

    .p1 {
      width: calc(100% - 20px);
    }
  }
  .arrow {
    position: absolute;
    right: 7px;
    top: 43%;
    transform: translateY(-50%);
  }
  .select {
    position: absolute;
    bottom: -148px;
    left: 0;
    width: 233px;
    height: 148px;
    padding: 16px;
    display: none;
    flex-direction: column;
    background-color: #ffffff;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
    border-radius: 2px;
    z-index: 1;
    @include max(lg) {
      bottom: -146px;
    }
    &.open {
      display: flex;
    }

    &::before {
      content: "";
      position: absolute;
      top: -7px;
      left: 30px;
      width: 12px;
      height: 7px;
      display: block;
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      background-color: #ffffff;
    }

    .options {
      height: 100%;
      overflow-y: auto;
      .a1 {
        cursor: pointer;
        transition: opacity 0.3s ease-in-out;
        &.active {
          font-weight: 600;
        }
        &:not(:last-child) {
          margin-bottom: 10px;
        }
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
}
</style>