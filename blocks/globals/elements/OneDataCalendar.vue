<template>
  <div class="one-data-calendar-wrapper">
    <div class="choose-date">
      <div class="selected-date" @click="toggleOpen()">
        <p class="a1 description" :class="{ 'chose-date': selectedOneDate }">
          {{ selectedOneDate ? formatDate(selectedOneDate) : "Дата" }}
        </p>
        <img class="arrow" src="~/static/icons/select-arrow.svg" alt="icon" />
      </div>
    </div>
    <DataPicker
      :value="selectedOneDate"
      @selectedOneDate="handleDateChange($event)"
      @deleteDate="deleteDate"
      v-if="open"
      :oneData="true"
    />
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "OneDataCalendar",
  props: {
    options: {
      type: Object,
      default: () => ({
        name: "Дата",
      }),
    },
  },
  data() {
    return {
      open: false,
      optionSelected: null,

      selectedOneDate: null,
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
    handleDateChange(date) {
      this.selectedOneDate = date;
        this.open = false;
    },
    deleteDate() {
      this.selectedOneDate = null;
    },

    backdropClick(e) {
      let selectClosest = e.target.closest(".one-data-calendar-wrapper");

      if (!selectClosest) {
         this.open = false;
      }
    },

    formatDate(date) {
      return moment(date).format("D MMMM");
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
<style lang="scss">
.one-data-calendar-wrapper {
  .date-picker {
    .vc-arrows-container {
      width: 170px !important;
    }
    .vc-grid-cell:last-of-type {
      & .vc-weeks {
        padding-left: unset !important;
      }
      & .vc-title-wrapper {
        left: 50% !important;
        transform: translateX(-50%)!important;
        padding-left: 0!important;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.one-data-calendar-wrapper {
  width: 220px;
  display: flex;
  cursor: pointer;
  position: relative;
  .description {
    position: absolute;
    left: 7px;
    top: -2px;
    opacity: 0.3;
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
    .selected-date {
      position: relative;
      width: 100%;
      padding: 8px 0 15px 7px;
      bottom: -1px;
      display: flex;
      border-bottom: 1px solid rgba(#000000, 0.1);
      .arrow {
        position: absolute;
        right: 7px;
        top: 0px;
        // top: 50%;
        // transform: translateY(-50%);
      }
    }
  }

  .date-picker {
    //   position: absolute;
    //   top: 0;

    width: 344px;
    position: absolute;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 30;
  }
}
</style>
