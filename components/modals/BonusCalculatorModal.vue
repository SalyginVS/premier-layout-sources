 <template>
  <div class="bonus-calculator-modal">
    <SelectBlock
      :name="'Готель'"
      :options="optionsHotel"
      @change="hotel = $event.value"
    />
    <Input :option="optionInput" :placeholderUpperCase="true" />

    <AccountGraphPoints :data="points" :simpleGraph="true" />
  </div>
</template>

<script>
import AccountGraphPoints from "~/blocks/account/AccountGraphPoints";

export default {
  name: "BonusCalculatorModal",

  data() {
    return {
      hotel: "",
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
        id: 0,
        type: "text",
        placeholder: "вартість проживання в гривнях",
      },

      points: {
        count: "5151",
      },
    };
  },
  components: {
    AccountGraphPoints,
  },
};
</script>

<style lang="scss">
.bonus-calculator-modal {
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
  .input-block {
    width: 100%;
    margin-bottom: 72px;
  }
}
</style>
<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.bonus-calculator-modal {
  width: 460px;
  margin-top: 32px;

  margin-bottom: 34px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;

  @include max(lg) {
    width: 368px;
  }
  @include max(md) {
    width: 395px;
  }
  @include max(sm) {
    width: 85vw;
  }

  .input-block {
    @include max(lg) {
      margin-bottom: 64px;
    }
    @include max(md) {
    }
    @include max(sm) {
      margin-bottom: 56px;
    }
  }

  .select-wrapper {
    width: 100%;
    margin-bottom: 52px;

    @include max(lg) {
      margin-bottom: 48px;
    }
    @include max(md) {
    }
    @include max(sm) {
      margin-bottom: 22px;
    }
  }
  .account-graph-points {
    margin: 0 auto;
  }
}
</style>
