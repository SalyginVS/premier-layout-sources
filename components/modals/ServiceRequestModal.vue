 <template>
  <div class="service-request-modal">
    <Input
      v-for="option in optionsInput"
      :key="option.id"
      :option="option"
      :placeholderUpperCase="true"
    />

    <SelectBlock
      :name="'сервіс'"
      :options="optionsService"
      @change="service = $event.value"
    />
  </div>
</template>

<script>
export default {
  name: "ServiceRequestModal",
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
      service: "",

      optionsService: [
        {
          title: "сервіс1",
          value: "сервіс1",
        },
        {
          title: "сервіс2",
          value: "сервіс2",
        },
        {
          title: "сервіс3",
          value: "сервіс3",
        },
        {
          title: "сервіс4",
          value: "сервіс4",
        },
        {
          title: "сервіс5",
          value: "сервіс5",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "../../assets/scss/utils.scss";

.service-request-modal {
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
}
</style>
<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.service-request-modal {
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
    margin-bottom: 30px;

    &:nth-child(2) {
      margin-bottom: 38px;
    }

    @include max(lg) {
      margin-bottom: 20px;

      &:nth-child(2) {
        margin-bottom: 32px;
      }
    }

    @include max(sm) {
      margin-bottom: 12px;

      &:nth-child(2) {
        margin-bottom: 24px;
      }
    }
  }

  .select-wrapper {
    width: 100%;
  }
}
</style>
