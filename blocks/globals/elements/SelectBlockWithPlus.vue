<template>
  <div
    @click="toggleOpen()"
    class="select-wrapper"
    :class="{
      'open-dropdown': open,
      'selected-option': optionSelected && optionSelected.title,
      'position-right': positionRight,
    }"
  >
    <p
      class="a1 description"
      :class="{
        description_position__open: optionSelected,
      }"
      v-if="!hideHeader"
    >
      {{ name }}
    </p>

    <img class="image-plus" src="~/static/images/plus.svg" alt="" />

    <img class="image-minus" src="~/static/images/minus.svg" alt="" />

    <div class="selected-block">
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
  name: "SelectBlockWithPlus",
  props: {
    hideHeader: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "Мова розсилки",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    positionRight: {
      type: Boolean,
      default: false,
    },

    defaultValue: null,

    options: {
      type: Array,
      default: () => [
        {
          title: "Українська",
          value: "Українська",
        },
        {
          title: "Російська",
          value: "Російська",
        },
        {
          title: "Англійська",
          value: "Англійська",
        },
        {
          title: "Іспанська",
          value: "Іспанська",
        },
        {
          title: "Французька",
          value: "Французька",
        },
      ],
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

::-webkit-scrollbar {
  width: 1px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.5);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.7);
}

.select-wrapper {
  position: relative;
  height: 32px;
  padding: 8px 20px 8px 8px;
  margin-right: -20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 10;

  &:hover {
    .image-plus {
      transition-duration: 0.6s;
      transform: rotate(180deg);
    }
  }

  @include max(lg) {
    padding-right: 14px;
    margin-right: -14px;
  }
  // &::before {
  //   content: "+";
  //   position: absolute;
  //   right: 0;
  //   top: 5px;
  //   height: 10px;
  //   @include max(lg) {
  //     font-size: 14px;
  //   }
  // }

  .image-plus {
    height: 8px;
    width: 8px;
    margin-top: 0.7px;
    margin-left: 8px;
    /* rr */
    order: 1;
    /* rr */
  }
  .image-minus {
    width: 8px;
    margin-top: -1px;
    margin-left: 8px;
    display: none;
    /* rr */
    order: 1;
    /* rr */
  }
  &.open-dropdown {
    z-index: 12;
    .image-plus {
      display: none;
    }
    .image-minus {
      display: unset;
    }
  }
  &.selected-option {
    .selected-block {
      display: flex;
    }
  }
  &.position-right {
    .select {
      left: unset;
      right: -13px;

      &:before {
        left: unset;
        right: 24px;
      }
    }
  }
}
.description {
  position: relative;
  @include max(lg) {
    font-size: 10px;
    line-height: 140%;
  }
  &.description_position__open {
    top: -10px;
    left: 8px;
    position: absolute;
    /* rr */
    display: none;
    /* rr */
  }
}
.selected-block {
  display: none;
  left: -10px;
  order: 0;
  .p1 {
    width: 100%;
    /* rr */
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    // max-width: 90px;
    // white-space: nowrap;
    // overflow: hidden;
    // text-overflow: ellipsis;
    // @include max(lg) {
    //   max-width: 45px;
    // }
    /* rr */
    &:first-letter {
      text-transform: uppercase;
    }
  }
}
.select {
  position: absolute;
  bottom: -148px;
  left: 0;
  width: 233px;
  height: 148px;
  padding: 16px;
  //display: none;
  display: flex;
  background-color: #ffffff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  z-index: 110;
  // Properties to animate
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    .a1 {
      color: #aaaaaa;
      transition: 0.3s;
      &:hover {
        color: #3e3c3c;
      }
    }
    .active {
      color: #171717;
    }

    // -ms-overflow-style: none;
    // scrollbar-width: none;

    // &::-webkit-scrollbar {
    //   display: none;
    // }

    .a1 {
      &:not(:last-child) {
        margin-bottom: 12px;
      }
    }
  }
  @include max(lg) {
    bottom: -146px;
  }
  &.open {
    //display: flex;
    visibility: visible;
    opacity: 1;
    pointer-events: all;
  }
}
</style>
