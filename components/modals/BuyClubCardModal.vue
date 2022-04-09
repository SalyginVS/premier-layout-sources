 <template>
  <div class="buy-club-card-modal">
    <Input
      v-for="option in optionsInput"
      :key="option.id"
      :option="option"
      :placeholderUpperCase="true"
    />

    <SelectBlock
      :name="'Термін передплати'"
      :options="optionsSubscriptionTerm"
      @change="subscriptionTerm = $event.value"
    />
  </div>
</template>

<script>
export default {
  name: "BuyClubCardModal",
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
      subscriptionTerm: "",

      optionsSubscriptionTerm: [
        {
          title: "1-2 дні",
          value: "1-2 дні",
        },
        {
          title: "2-3 дні",
          value: "2-3 дні",
        },
        {
          title: "3-4 дні",
          value: "3-4 дні",
        },
        {
          title: "4-5 дні",
          value: "4-5 дні",
        },
        {
          title: "5-6 дні",
          value: "5-6 дні",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.buy-club-card-modal {
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
    margin-bottom: 38px;
  }
}
</style>
<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.buy-club-card-modal {
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

  .input-block {
    width: 100%;

    margin-bottom: 38px;

    &:nth-child(2) {
      margin-bottom: 48px;
    }

    @include max(lg) {
      margin-bottom: 32px;

      &:nth-child(2) {
        margin-bottom: 42px;
      }
    }
    @include max(sm) {
      width: calc((100% - 13px) / 2);
      margin-bottom: 30px;

      &:nth-child(2) {
        margin-bottom: 30px;
      }
    }
  }
  .select-wrapper {
    width: 100%;
  }
}
</style>
