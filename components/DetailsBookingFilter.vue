<template>
  <div class="details_booking_filter" :class="{ 'change-details': change }">
    <div class="booking-stage">
      <div class="stage-first">
        <p class="gold_text stage-header">Виберіть номер</p>
        <p class="stage-info">крок 1</p>
      </div>
      <div class="stage-line"></div>
      <p class="gold_text stage-next">Sapphire</p>
    </div>

    <div class="details_booking_filter_wrapper">
      <p class="a2 title">
        деталі бронювання
        <img
          class="change-icon"
          @click="changeDetails"
          src="~/static/icons/pen.svg"
          alt="icon"
        />
        <img
          @click="closeDetails"
          class="close-icon"
          src="~/static/icons/close-details-icon.svg"
          alt="icon"
        />
      </p>
      <div class="filter">
        <div class="filter_date p2_light">
          <div class="filter_date_wrapper" @click="openCalendar">
            <span>
              {{
                selectedDates ? formatDate(selectedDates.start) : "Заїзд"
              }}</span
            >
            <div class="horizontal-line"></div>
            <span>
              {{
                selectedDates ? formatDate(selectedDates.end) : "Виїзд"
              }}</span
            >
            <img
              class="arrow"
              :class="{ open: calendar }"
              src="~/static/icons/select-arrow.svg"
              alt="icon"
            />
          </div>
          <template v-if="change">
            <DataPicker
              :labelCenter="true"
              v-if="calendar"
              :value="selectedDates"
              @deleteDate="deleteDate"
              @selectedDates="handleDateChange($event)"
            />
          </template>
        </div>

        <div class="filter_person-room p2_light">
          <div class="filter_person-room_wrapper" @click="openParametersRoom">
            <span>{{ allAdults }} дорослих</span>
            /
            <span>{{ allChildren }} дітей</span>
            /
            <span>{{ rooms.length }} кімната</span>
            <img
              class="arrow"
              :class="{ open: parametersRoom }"
              src="~/static/icons/select-arrow.svg"
              alt="icon"
            />
          </div>

          <template v-if="change">
            <DropdownParametersRoom v-if="parametersRoom" />
          </template>
        </div>

        <div class="filter_hotel p2_light">
          <div class="filter_hotel_wrapper">
            <SelectBlock
              :options="optionsCity"
              :defaultValue="optionsCity[0].value"
              :disabled="!change"
            >
              <template v-slot:input="{ optionSelected }">
                <span class="city">
                  {{ optionSelected && optionSelected.title }}
                </span>
              </template>
            </SelectBlock>

            <SelectBlock
              :options="optionsHotel"
              :defaultValue="optionsHotel[0].value"
              :disabled="!change"
            >
              <template v-slot:input="{ optionSelected }">
                <span class="hotel">
                  {{ optionSelected && optionSelected.title }}
                </span>
              </template>
            </SelectBlock>
          </div>
        </div>
      </div>
    </div>

    <div class="line-simple"></div>
  </div>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";

export default {
  name: "DetailsBookingFilter",
  props: {
    line: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    change: false,
    calendar: false,
    parametersRoom: false,
    selectedDates: null,
    optionsCity: [
      {
        title: "Дніпро",
        value: "Дніпро",
      },
      {
        title: "Харків",
        value: "Харків",
      },
      {
        title: "Херсон",
        value: "Херсон",
      },
      {
        title: "Київ",
        value: "Київ",
      },
      {
        title: "Львів",
        value: "Львів",
      },
    ],
    optionsHotel: [
      {
        title: "Premier Palace Hotel",
        value: "Premier Palace Hotel",
      },
      {
        title: "Premier Hotel Rus",
        value: "Premier Hotel Rus",
      },
      {
        title: "Premier Hotel Lybid",
        value: "Premier Hotel Lybid",
      },
      {
        title: "Premier Hotel Shafran",
        value: "Premier Hotel Shafran",
      },
      {
        title: "Premier Hotel Abrin",
        value: "Premier Hotel Abrin",
      },
    ],
  }),
  methods: {
    changeDetails() {
      this.change = true;
    },
    closeDetails() {
      this.change = false;
    },
    openCalendar() {
      this.calendar = !this.calendar;
    },
    openParametersRoom() {
      this.parametersRoom = !this.parametersRoom;
    },
    deleteDate() {
      this.selectedDates = null;
    },
    handleDateChange(range) {
      this.selectedDates = range;
      this.calendar = false;
    },
    formatDate(date) {
      return moment(date).format("D MMMM");
    },

    backdropCalendarClick(e) {
      let selectClosest = e.target.closest(".filter_date");
      if (!selectClosest) {
        this.calendar = false;
      }
    },
    backdropGuestsClick(e) {
      let selectClosest = e.target.closest(".filter_person-room");
      if (!selectClosest) {
        this.parametersRoom = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.backdropCalendarClick);
    document.addEventListener("click", this.backdropGuestsClick);
  },
  destroyed() {
    document.removeEventListener("click", this.backdropCalendarClick);
    document.removeEventListener("click", this.backdropGuestsClick);
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
};
</script>
<style lang="scss">
.details_booking_filter {
  .select-wrapper {
    width: auto;
    padding: 0px 20px 4px 0px;
    border-bottom: none;

    &:not(:last-child) {
      margin-right: 20px;
    }
    &.disabled {
      &:not(:last-child) {
        margin-right: 0px;
      }
    }
    .selected-block {
      border-bottom: unset;
      padding: 0;
      margin-top: unset;
    }
    .arrow {
      right: 2px;
      top: 35%;
    }
  }
  .dropdown-parameters-room {
    left: 46%;
    transform: translateX(-50%);
    .dropdown-parameters_wrapper {
      max-height: calc(550px - 56px);
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";

.details_booking_filter {
  width: 560px;
  position: relative;
  z-index: 2;

  @include max(lg) {
    width: 424px;
  }

  @include max(md) {
    width: 326px;
  }
  @include max(sm) {
    width: 100%;
  }

  &_wrapper {
    position: relative;
    padding: 42px 0 42px 56px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    z-index: 1;
    background-color: #f5f4f3;

    @include max(lg) {
      padding: 28px 0 26px 48px;
    }

    @include max(md) {
      padding: 20px 0 18px 40px;
    }
    @include max(sm) {
      display: none;
    }
  }
  .line-simple {
    top: 50%;
    left: -116px;

    @include max(lg) {
      width: 250px;
      top: 44%;
      left: -75px;
    }

    @include max(md) {
      width: 240px;
      top: 47%;
      left: -41px;
    }
    @include max(sm) {
      display: none;
    }
  }
  .a2 {
    text-transform: uppercase;
    margin-bottom: 17px;
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);

    @include max(md) {
      margin-bottom: 14px;
      font-size: 9px;
    }

    img {
      margin-left: 14px;
      cursor: pointer;
      transition: opacity 0.2s ease-in-out;
      &:hover {
        opacity: 0.5;
      }

      @include max(lg) {
        margin-left: 29px;
      }
    }
    .change-icon {
      display: inline-block;
    }
    .close-icon {
      display: none;
    }
  }
  .p2_light {
    cursor: pointer;
    &:not(:last-child) {
      margin-bottom: 8px;

      @include max(lg) {
        margin-bottom: 4px;
      }
    }
  }
  .filter {
    .filter_date,
    .filter_person-room {
      position: relative;
      width: fit-content;

      .arrow {
        display: none;
        position: absolute;
        right: 0px;
        top: 50%;
        transform: translateY(-50%) rotate(0);
        &.open {
          transform: translateY(-50%) rotate(180deg);
        }
      }
    }
    .filter_date_wrapper,
    .filter_person-room_wrapper {
      padding: 0px 20px 0px 0;
    }
    .filter_date_wrapper {
      display: flex;
      align-items: center;
    }
    .horizontal-line {
      width: 8px;
      height: 1px;
      margin: 0 10px;
      display: inline-block;
      background-color: rgba(#000000, 0.4);
    }
    .filter_hotel_wrapper {
      display: flex;
      align-items: center;
      span:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
  &.change-details {
    .change-icon {
      display: none;
    }
    .close-icon {
      display: inline-block;
    }
    .filter {
      .filter_date,
      .filter_person-room,
      .filter_hotel {
        .arrow {
          display: inline-block;
        }
      }
      .filter_hotel_wrapper {
        span:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
  }
  .date-picker {
    width: 684px;
    position: absolute;
    top: 34px;
    left: 43%;
    transform: translateX(-50%);
    z-index: 11;
  }
}

.booking-stage {
  @include min(sm) {
    display: none;
  }
  display: flex;
  position: relative;

  left: 32vw;

  .stage-first {
    .stage-header {
      width: 168px;
      font-family: Cormorant;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
    }
    .stage-info {
      margin-top: 9px;
      margin-left: 41px;
      font-style: normal;
      font-weight: 500;
      font-size: 9px;
      line-height: 140%;
      letter-spacing: 0.24em;
      text-transform: uppercase;
    }
  }
  .stage-line {
    position: static;
    width: 68px;
    height: 1px;
    border-bottom: 1px dashed #cdcccb;
    box-sizing: border-box;
    flex-grow: 0;
    margin: 13px 16px;
  }
  .stage-next {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 110%;
    text-align: center;
  }
}
</style>
