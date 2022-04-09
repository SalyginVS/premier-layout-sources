 <template>
  <div class="booking-table-modal">
    <Input
      v-for="option in optionsInput"
      :key="option.id"
      :option="option"
      :placeholderUpperCase="true"
    />

    <SelectBlock
      :name="'Ресторан'"
      :options="optionsRestaurant"
      @change="restaurant = $event.value"
    />
    <SelectBlock
      :name="'Kількість гостей'"
      :options="optionsNumberGuests"
      @change="numberGuests = $event.value"
    />
    <OneDataCalendar class="choose-date" />

    <SelectBlock
      :name="'час'"
      :options="optionsTime"
      @change="time = $event.value"
    />
    <Checkbox :data="'Підписатися на Розсилку'" />
  </div>
</template>

<script>
export default {
  name: "BookingTableModal",
  data() {
    return {
      optionsInput: [
        {
          id: 0,
          type: "text",
          placeholder: "Ім'я",
        },
        {
          id: 1,
          type: "text",
          placeholder: "Телефон",
        },
      ],
      numberGuests: "",
      restaurant: "",
      time: "",

      optionsRestaurant: [
        {
          title: "Ресторан Terracotta1 ",
          value: "Ресторан Terracotta1",
        },
        {
          title: "Ресторан Terracotta2 Ресторан",
          value: "Ресторан Terracotta2 ",
        },
        {
          title: "Ресторан Terracotta3 ",
          value: "Ресторан Terracotta3 ",
        },
        {
          title: "Ресторан Terracotta4 ",
          value: "Ресторан Terracotta4 ",
        },
        {
          title: "Ресторан Terracotta5 ",
          value: "Ресторан Terracotta5 ",
        },
      ],

      optionsNumberGuests: [
        {
          title: "1-3",
          value: "1-3",
        },
        {
          title: "3-6",
          value: "3-6",
        },
        {
          title: "6-9",
          value: "6-9",
        },
        {
          title: "9-12",
          value: "9-12",
        },
        {
          title: "12-15",
          value: "12-15",
        },
      ],
      optionsTime: [
        {
          title: "1-3",
          value: "1-3",
        },
        {
          title: "3-6",
          value: "3-6",
        },
        {
          title: "6-9",
          value: "6-9",
        },
        {
          title: "9-12",
          value: "9-12",
        },
        {
          title: "12-15",
          value: "12-15",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "../../assets/scss/utils.scss";

.booking-table-modal {
  .select-wrapper {
    .description {
      opacity: 1 !important;
      font-family: AvenirNextCyrMedium;
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      line-height: 140%;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: #000000;
    }
    .arrow {
      @include max(385) {
        display: none;
      }
    }
  }
  .input-block {
    width: calc(50% - 12px);
    margin-bottom: 38px;

    @include max(sm) {
      margin-bottom: 28px;
      width: calc(50% - 6px);
    }
  }

  .one-data-calendar-wrapper {
    .description {
      opacity: 1 !important;
    }
  }
}
</style>



<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.booking-table-modal {
  width: 460px;
  margin: 56px 72px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;

  @include max(lg) {
    margin: 56px 64px;
  }

  @include max(md) {
  }

  @include max(sm) {
    width: auto;
    margin: 56px 16px;
  }

  .select-wrapper {
    width: calc(50% - 12px);
    margin-bottom: 38px;

    .description {
      overflow-x: hidden;
    }

    @include max(sm) {
      width: calc(50% - 6px);
    }

    &:nth-child(odd) {
      //margin-right: 24px;
    }

    // &:nth-child(4) {
    //   @include max() {
    //     .arrow {
    //       display: none;
    //     }
    //   }
    // }

    &:nth-child(6) {
      @include max(sm) {
        width: 100%;
      }
    }
  }

  .one-data-calendar-wrapper {
    width: calc(50% - 12px);

    @include max(sm) {
      width: 100%;
    }
  }
  .choose-date {
    margin-bottom: 38px;

    @include max(sm) {
      margin-bottom: 30px;
    }
  }
  .checkbox-container {
    margin: 0 auto 0px auto;
    text-align: center;

    @include max(lg) {
      width: 100%;
    }
  }
}
</style>
