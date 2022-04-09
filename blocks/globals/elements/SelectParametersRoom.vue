<template>
  <div class="select-parameters-room">
    <div class="selected-block" @click="toggleOpen">
      <p class="a1 options">
        <span> {{ allAdults }} дорослих </span>
        <span> {{ allChildren }} дітей </span>
        <span> {{ rooms.length }} кімната </span>
      </p>
      <img class="arrow" src="~/static/icons/select-arrow.svg" alt="icon" />
    </div>

    <DropdownParametersRoom v-if="open" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SelectParametersRoom",
  props: {
    options: {
      type: Object,
      default: () => ({
        name: "Мова розсилки",
      }),
    },
  },
  data() {
    return {
      open: false,
      optionSelected: null,
    };
  },
  computed: {
    ...mapState(["filters"]),

    rooms() {
      return this.filters.rooms;
    },
    allChildren() {
      return this.rooms.reduce((accum, curr) => {
        return accum + curr.children.length;
      }, 0);
    },
    allAdults() {
      return this.rooms.reduce((accum, curr) => {
        return accum + curr.numberAdults;
      }, 0);
    },
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
      let selectClosest = e.target.closest(".select-parameters-room");
      if (!selectClosest) {
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
.select-parameters-room {
  width: 220px;
  display: flex;
  cursor: pointer;
  position: relative;
  .selected-block {
    position: relative;
    width: 100%;
    padding: 8px 0 15px 7px;
    bottom: -1px;
    display: flex;
    border-bottom: 1px solid rgba(#000000, 0.1);
    .options {
      span {
        position: relative;
        &:not(:last-child) {
          padding-right: 20px;
          margin-right: 20px;
          &::after {
            content: "";
            position: absolute;
            right: 0;
            top: 50%;
            height: 1px;
            width: 20px;
            display: flex;
            background-color: rgba(#000000, 0.1);
            transform: translateY(-50%) rotate(-59.53deg);
          }
        }
      }
    }
    .arrow {
      position: absolute;
      right: 7px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>