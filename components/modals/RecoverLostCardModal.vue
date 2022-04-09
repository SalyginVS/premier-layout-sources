 <template>
  <div class="request-lost-points-modal">
    <div class="tab-recover">
      <RadioButton
        v-for="(item, index) in optionsRadio"
        v-model="chosenTab"
        :key="index"
        :optionText="item.text"
        :optionValue="item.value"
        name="tabs"
      />
    </div>

    <div class="tab-content" v-if="chosenTab === 0">
      <SelectBlock
        :name="'Місто'"
        :options="optionsCity"
        @change="city = $event.value"
      />
      <SelectBlock
        :name="'Готель'"
        :options="optionsHotel"
        @change="hotel = $event.value"
      />

      <Calendar class="choose-date" />
      <Input :option="optionInput" :placeholderUpperCase="true" />
      <TextArea :placeholder="'ваш коментар'" />
    </div>

    <div class="tab-content tab-content_address" v-if="chosenTab === 1">
      <SelectBlock
        :name="'країна'"
        :options="optionsCountry"
        @change="country = $event.value"
      />
      <SelectBlock
        :name="'Місто'"
        :options="optionsCity"
        @change="city = $event.value"
      />
      <Input
        v-for="option in optionsInputAddress"
        :key="option.id"
        :option="option"
        :placeholderUpperCase="true"
      />
      <TextArea :placeholder="'ваш коментар'" />
    </div>
  </div>
</template>

<script>
export default {
  name: "RequestLostPointsModal",
  data() {
    return {
      optionsRadio: [
        { text: "Візьміть картку при заїзді", value: 0 },
        { text: "Надішліть картку поштою", value: 1 },
      ],
      city: "",
      country: "",
      hotel: "",
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
          title: "Premier Palace Hotelа",
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
          title: "Premier Hotel Abri",
          value: "Premier Hotel Abri",
        },
      ],
      optionsCountry: [
        {
          title: "Україна",
          value: "Україна",
        },
        {
          title: "Росія",
          value: "Росія",
        },
        {
          title: "Білорусь",
          value: "Білорусь",
        },
        {
          title: "Польща",
          value: "Польща",
        },
        {
          title: "Грузія",
          value: "Грузія",
        },
      ],
      optionInput: {
        type: "text",
        placeholder: "номер бронювання",
      },
      optionsInputAddress: [
        {
          id: 0,
          type: "text",
          placeholder: "адреса",
        },
        {
          id: 1,
          type: "text",
          placeholder: "індекс",
        },
      ],
      chosenTab: 1,
    };
  },
};
</script>


<style lang="scss">
.request-lost-points-modal {
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
  }
  .textarea-block {
    width: calc(50% - 12px);
    textarea {
      font-family: AvenirNextCyrMedium;
      font-style: normal;
      font-weight: 450;
      font-size: 10px;
      line-height: 140%;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: #000000;
      &::placeholder {
        color: #000000;
        opacity: 1;
      }
    }
  }
  .input-block {
    width: calc(50% - 12px);
    margin-right: 24px;
    margin-bottom: 0px;
  }
  .calendar-wrapper {
    .selected-date {
      .description {
        opacity: 1;
      }
    }
  }
  .tab-recover {
    .a2 {
      font-weight: 450;
      font-size: 10px;
      line-height: 140%;
      letter-spacing: 0.24em;
      color: rgba(#000000, 0.8);
    }
    .label-container .checkmark {
      top: 2px !important;
    }
  }
}
</style>


<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.request-lost-points-modal {
  //background-color: chartreuse;

  width: 500px;
  margin: 56px 0 75px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;

  @include max(lg) {
    margin: 56px 0 64px;
  }

  @include max(sm) {
    width: -webkit-fill-available;
    margin: 56px 16px 50px;
  }

  .tab-recover {
    width: 100%;
    margin-bottom: 38px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include max(sm) {
      flex-wrap: wrap;
      margin-bottom: 42px;
    }

    .radio-wrapper {
      &:not(:last-child) {
        margin-right: 40px;
      }

      @include max(sm) {
        width: 49%;

        &:not(:last-child) {
          margin-right: 0;
        }
      }
    }
  }
  .tab-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    &.tab-content_address {
      .input-block {
        width: calc(50% - 12px);
        margin-bottom: 48px;
        margin-right: 0px;

        @include max(sm) {
          width: 100%;
          margin-bottom: 30px;
        }
      }
      .textarea-block {
        width: 100%;
        @include max(sm) {
          margin-top: 8px;
        }
      }
      .select-wrapper {
        margin-bottom: 40px;

        @include max(sm) {
          margin-bottom: 32px;
        }
      }
    }
  }
  .select-wrapper {
    width: calc(50% - 12px);
    margin-bottom: 38px;

    &:nth-child(odd) {
      margin-right: 24px;
    }
  }
  .choose-date {
    width: 100%;
    margin-top: 16px;
    margin-bottom: 48px;
  }
}
</style>
