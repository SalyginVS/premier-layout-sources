<template>
  <div class="select">
    <p v-if="name" class="p1 description">
      {{name }}
    </p>
    <div class="selected-block" @click="toggleOpen()">
      <p class="a1">
        <img
          v-if="optionSelected && optionSelected.img"
          :src="optionSelected.img"
          alt="icon"
        />
        <span>{{ optionSelected && optionSelected.title }}</span>
      </p>
      <img class="arrow" src="~/static/icons/select-arrow.svg" alt="icon" />
    </div>
    <div class="select" :class="{ open }">
      <div class="wrapper">
        <div class="options">
          <p
            v-for="option in options"
            :key="option.value"
            @click="onChange(option)"
            class="a1"
            :class="{ active: option === optionSelected }"
          >
            {{ option.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    value: null,
    name: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      open: false,
      optionSelected: this.value
        ? this.options.find((o) => o.value == this.value)
        : null,
    };
  },
  methods: {
    toggleOpen() {
      this.open = !this.open;
    },
    onChange(option) {
      this.optionSelected = option;

      this.$emit("change", this.optionSelected);
      this.open = false;
    },

    backdropClick(e) {
      let selectClosest = e.target.closest(".select");
      let selects = [];

      while (selectClosest) {
        selects.push(selectClosest);
        selectClosest = selectClosest.parentElement.closest(".select");
      }

      if (selects.every((d) => d != this.$el)) {
        this.open = false;
      }
    },
  },

  mounted() {
    document.addEventListener("click", this.backdropClick);
  },
  destroyed() {
    document.removeEventListener("click", this.backdropClick);
  },
};
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  left: -32px;
  height: 48px;
  width: calc(100% + 64px);
  display: flex;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02)),
    #f0edea;
  display: flex;
  cursor: pointer;
  .description {
    position: absolute;
    left: 7px;
    top: 14px;
    opacity: 0.6;
    &.description_position {
      top: 22px;
    }
    &.description_position__open {
      top: 0px;
      font-family: AvenirNextCyrMedium;
      font-style: normal;
      font-weight: 450;
      font-size: 8px;
      line-height: 14px;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: #000000;
    }
  }
  .selected-block {
    position: relative;
    width: 100%;
    padding: 16px 40px;
    display: flex;

    .a1 {
      display: flex;
      align-items: center;
      img {
        margin-right: 16px;
      }
    }
    .arrow {
      position: absolute;
      right: 40px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .select {
    position: absolute;
    bottom: -70px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 80px);
    height: auto;
    padding: 16px;
    display: none;
    flex-direction: column;
    background-color: #ffffff;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
    border-radius: 2px;
    z-index: 1;

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
    .wrapper {
      overflow: hidden;
      .options {
        height: 100%;
        overflow-y: auto;
        .a1 {
          cursor: pointer;
          transition: opacity 0.3s ease-in-out;
          color: #aaaaaa;
          transition: color 0.3s ease-in-out;
          &:hover {
            color: #000000;
          }
          &.active {
            color: #000000;
            font-weight: 500;
          }
          &:not(:last-child) {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>