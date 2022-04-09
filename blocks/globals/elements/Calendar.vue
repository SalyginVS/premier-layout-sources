<template>
  <div class="calendar-wrapper" :class="{ openCalendar: open }">
    <div v-if="oneInput" class="selected-date" @click="toggleOpen()">
      <p class="a1 description" :class="{ 'chose-date': selectedDates }">
        {{ selectedDates ? formatDate(selectedDates.start) : "заїзд" }} /
        {{ selectedDates ? formatDate(selectedDates.end) : "виїзд" }}
      </p>
      <img class="arrow" src="~/static/icons/select-arrow.svg" alt="icon" />
    </div>

    <div v-else class="choose-date">
      <div class="selected-date" @click="toggleOpen()">
        <p class="a1 description" :class="{ 'chose-date': selectedDates }">
          {{ selectedDates ? formatDate(selectedDates.start) : "заїзд" }}
        </p>
        <img class="arrow" src="~/static/icons/select-arrow.svg" alt="icon" />
      </div>
      <div class="selected-date" @click="toggleOpen()">
        <p class="a1 description" :class="{ 'chose-date': selectedDates }">
          {{ selectedDates ? formatDate(selectedDates.end) : "виїзд" }}
        </p>
        <img class="arrow" src="~/static/icons/select-arrow.svg" alt="icon" />
      </div>
    </div>

    <DataPicker
      :value="selectedDates"
      @selectedDates="handleDateChange($event)"
      @deleteDate="deleteDate"
      @mobilePopUpClose="popUpClose"
      v-if="open"
      :labelCenter="labelCenter"
    />
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Calendar",
  props: {
    options: {
      type: Object,
      default: () => ({
        name: "Заїзд",
      }),
    },
    oneInput: {
      type: Boolean,
      default: false,
    },
    labelCenter: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      open: false,
      optionSelected: null,

      selectedDates: null,
    };
  },
  methods: {
    toggleOpen() {
      this.open = !this.open;
    },
    popUpClose() {
      this.open = false;
    },
    onChange(option) {
      this.optionSelected = option;

      this.$emit("change", this.optionSelected);
      this.open = false;
    },
    handleDateChange(range) {
      this.selectedDates = range;
      console.log(range);
      this.open = false;
    },
    deleteDate() {
      this.selectedDates = null;
      //this.open = false;
    },
    backdropClick(e) {
      let selectClosest = e.target.closest(".calendar-wrapper");

      if (!selectClosest) {
        this.open = false;
      }
    },
    formatDate(date) {
      return moment(date).format("D MMMM");
    },
  },

  // watch: {
  //   open() {
  //     if (this.open == true) {
  //       document.body.style.overflow = "hidden";
  //     } else {
  //       document.body.style.overflow = "auto";
  //     }
  //   },
  // },

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

.calendar-wrapper {
  //   width: 220px;
  display: flex;
  cursor: pointer;

  @include max(sm) {
    cursor: unset;
  }
  position: relative;
  &.openCalendar {
    z-index: 30;
  }
  .description {
    // position: absolute;
    // left: 10px;
    // top: 8px;
    // opacity: 0.3;
    &.chose-date {
      opacity: 1;
    }
  }
  .choose-date {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // .a1{
    //   font-weight: 600;
    // }
  }
  .selected-date {
    position: relative;
    width: calc(50% - 12px);
    padding: 8px 40px 14px 7px;
    bottom: -1px;
    display: flex;
    border-bottom: 1px solid rgba(#000000, 0.1);
    .arrow {
      position: absolute;
      right: 7px;
      top: 9px;
    }
    @include max(767){
      padding-bottom: 10px;
    }
  }
  .date-picker {
    @include min(sm) {
      position: absolute;
      top: 0;

      width: 684px;
      position: absolute;
      top: 32px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }

    // @include max(sm){
    //   width: 96%;
    //   height: 96%;
    //   top: 20px;
    //   position: fixed;
    // }
  }
}
</style>
