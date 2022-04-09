 <template>
  <div class="request-for-chain-membership-modal">
    <Input
      v-for="option in optionsInput"
      :key="option.id"
      :option="option"
      :placeholderUpperCase="true"
    />

    <SelectBlock
      :name="'Місто'"
      :options="optionsCity"
      @change="city = $event.value"
    />
    <SelectBlock
      :name="'Кількість номерів'"
      :options="optionsNumberRooms"
      @change="numberRooms = $event.value"
    />
    <SelectBlock
      :name="'Середня площа кімнати'"
      :options="optionsRoomSquare"
      @change="roomSquare = $event.value"
    />

    <SelectBlock
      :name="'Інфраструктура готелю та послуги'"
      :options="optionsInfrastructure"
      @change="infrastructure = $event.value"
      class="select-size"
    />

    <TextArea :placeholder="'Ваше повідомлення'" />
  </div>
</template>

<script>
export default {
  name: "RequestForChainMembershipModal",
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
          type: "email",
          placeholder: "E-mail",
        },
        {
          id: 2,
          type: "text",
          placeholder: "Телефон",
        },
      ],
      numberRooms: "",
      roomSquare: "",
      city: "",
      infrastructure: "",

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

      optionsNumberRooms: [
        {
          title: "1",
          value: "1",
        },
        {
          title: "2",
          value: "2",
        },
        {
          title: "3",
          value: "3",
        },
        {
          title: "4",
          value: "4",
        },
        {
          title: "5",
          value: "5",
        },
      ],
      optionsRoomSquare: [
        {
          title: "4 м2",
          value: "4 м2",
        },
        {
          title: "5 м2",
          value: "5 м2",
        },
        {
          title: "6 м2",
          value: "6 м2",
        },
        {
          title: "7 м2",
          value: "7 м2",
        },
        {
          title: "8 м2",
          value: "8 м2",
        },
      ],
      optionsInfrastructure: [
        {
          title: "Інфраструктура1",
          value: "Інфраструктура1",
        },
        {
          title: "Інфраструктура2",
          value: "Інфраструктура2",
        },
        {
          title: "Інфраструктура3",
          value: "Інфраструктура3",
        },
        {
          title: "Інфраструктура4",
          value: "Інфраструктура4",
        },
        {
          title: "Інфраструктура5",
          value: "Інфраструктура5",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "../../assets/scss/utils.scss";
.request-for-chain-membership-modal {
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

      @include max(lg) {
        font-size: 9px;
      }
    }
    .arrow {
      display: none;
    }
  }

  .one-data-calendar-wrapper {
    .description {
      opacity: 1 !important;
    }
  }

  .textarea-block {
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
}
</style>


<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.request-for-chain-membership-modal {
  width: 702px;
  margin: 56px 0 75px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;

  @include max(lg) {
    width: 599px;
    margin: 48px 0 64px;
    //margin-bottom: 12px;
  }
  @include max(md) {
    margin: 30px 0 0;
    width: 513px;
    padding: 24px 43px 61px 45px;
    //margin-bottom: 16px;
  }
  @include max(sm) {
    padding: 0;
    width: auto;
    margin: 39px 18px 40px;
    //margin-bottom: 16px;
  }

  .select-wrapper {
    width: calc((100% - 48px) / 3);
    margin-bottom: 58px;

    @include max(lg) {
      margin-bottom: 45px;
    }
    @include max(md) {
      width: calc((100% - 12px) / 2);
      margin-bottom: 50px;
    }
    @include max(sm) {
      width: 100%;
      margin-bottom: 40px;
    }

    // &:nth-child(odd) {
    //   margin-right: 24px;
    // }
  }
  .input-block {
    width: calc((100% - 48px) / 3);
    margin-bottom: 58px;

    &:nth-child(3) {
      @include max(md) {
        margin-bottom: 50px;
      }
      @include max(sm) {
        width: 100%;
        margin-bottom: 42px;
      }
    }



    @include max(lg) {
      margin-bottom: 45px;
    }

    @include max(md) {
      width: calc((100% - 12px) / 2);
      margin-bottom: 37px;
    }

    @include max(sm) {
      margin-bottom: 29px;
    }
  }
  .select-size {
    width: calc((100% - 24px) / 2);

    margin-bottom: 0;

    @include max(md) {
      width: 100%;
      margin-bottom: 40px;
    }
  }
  .textarea-block {
    width: calc((100% - 24px) / 2);
    margin-bottom: 0;
    //margin-bottom: 38px;

    @include max(lg) {
      //margin-bottom: 48px;
    }
    @include max(md) {
      width: 100%;
      //margin-bottom: 0;
    }
  }
}
</style>
