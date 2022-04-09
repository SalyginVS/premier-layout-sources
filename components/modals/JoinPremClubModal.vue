 <template>
  <div class="join-prem-club-modal">
    <Input
      v-for="option in optionsInput"
      :key="option.id"
      :option="option"
      :placeholderUpperCase="true"
    />

    <SelectBlock
      :name="'країна'"
      :options="optionsCountry"
      @change="country = $event.value"
    />
    <template v-if="jobInfo">
      <Input
        v-for="option in optionsInputJob"
        :key="option.id"
        :option="option"
        :placeholderUpperCase="true"
        class="input-size"
      />
    </template>

    <Input
      v-for="option in optionsInputPassword"
      :key="option.id"
      :option="option"
      :placeholderUpperCase="true"
      class="input-size"
    />
  </div>
</template>

<script>
export default {
  name: "JoinPremClubModal",
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
          placeholder: "Прізвище",
        },
        {
          id: 2,
          type: "text",
          placeholder: "Дата народження",
        },
        {
          id: 3,
          type: "text",
          placeholder: "телефон",
        },
        {
          id: 4,
          type: "email",
          placeholder: "E-mail",
        },
      ],
      country: "",
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
      optionsInputPassword: [
        {
          id: 5,
          type: "password",
          placeholder: "Пароль",
        },
        {
          id: 6,
          type: "password",
          placeholder: "Підтвердити пароль",
        },
      ],
      optionsInputJob: [
        {
          id: 7,
          type: "text",
          placeholder: "компанія",
        },
        {
          id: 8,
          type: "text",
          placeholder: "посада",
        },
      ],
    };
  },
  props: {
    jobInfo: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss">
@import "../../assets/scss/utils.scss";

.join-prem-club-modal {
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
      display: none;
    }
  }
}
</style>
<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.join-prem-club-modal {
  width: 702px;
  margin: 64px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;

  // @include max(lg) {
  // }
  // @include max(md) {
  // }
  // @include max(sm) {
  // }

  @include max(lg) {
    margin: 56px 0;
    width: 599px;
  }
  @include max(md) {
    width: 460px;
  }
  @include max(sm) {
    width: auto;
    margin:56px 16px 23px;
  }

  .select-wrapper {
    width: calc((100% - 48px) / 3);

    margin-bottom: 58px;

    @include max(lg) {
      margin-bottom: 29px;
    }
    @include max(md) {
      margin-top: 13px;
      margin-bottom: 36px;
      width: 100%;
    }
    @include max(sm) {
      margin-bottom: 26px;
      display: none;
    }
  }
  .input-block {
    padding: 12px 9px 4px 9px;
    width: calc((100% - 48px) / 3);
    margin-bottom: 58px;

    &:nth-last-child(1) , &:nth-last-child(2) {
      margin: 0;
    }

    @include max(lg) {
      margin-bottom: 29px;
    }
    @include max(md) {
      width: calc((50% - 12px));
      margin-bottom: 36px;
      &:nth-child(5) {
        display: none;
      }
    }

    @include max(sm) {
      width: calc((50% - 12px));
      margin-bottom: 26px;
      &:nth-child(3),
      &:nth-child(4) {
        width: 100%;
      }
    }

    &.input-size {
      width: calc((100% - 24px) / 2);

      &:nth-child(1) , &:nth-child(2){
        margin-bottom: 29px;
      }
      @include max(sm) {
        width: 100%;
        margin-bottom: 26px;
      }
    }
  }
}
</style>
