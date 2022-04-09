 <template>
  <div class="request-lost-points-modal">
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
    <TextArea :placeholder="'Прокоментуйте'" />
  </div>
</template>

<script>
export default {
  name: "RequestLostPointsModal",
  data() {
    return {
      hotel: "",
      city: "",
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

      optionInput: {
        type: "text",
        placeholder: "номер бронювання",
      },
    };
  },
};
</script>
<style lang="scss">
@import "../../assets/scss/utils.scss";

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
    width: 100%;
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
    width: 100%;
    margin-bottom: 38px;
  }
  .calendar-wrapper {
    .choose-date {
      @include max(sm) {
        flex-wrap: wrap;
      }
    }
    .selected-date {
      @include max(sm) {
        width: 100%;

        &:not(:last-child) {
          margin-bottom: 38px;
        }
      }

      .description {
        opacity: 1;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.request-lost-points-modal {
  width: 460px;
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

  .select-wrapper {
    width: calc(50% - 12px);
    margin-bottom: 46px;

    &:nth-child(odd) {
      //margin-right: 24px;
    }

    @include max(sm) {
      width: 100%;
      margin-bottom: 38px;
    }
  }
  .choose-date {
    width: 100%;
    //margin-top: 22px;
    margin-bottom: 38px;

    @include max(sm) {
      margin-bottom: 24px;
    }
  }
  .input-block {
    @include max(sm) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 34px;
    }
  }

  .textarea-block {
    @include max(sm) {
      width: 100%;
    }
  }
}
</style>
