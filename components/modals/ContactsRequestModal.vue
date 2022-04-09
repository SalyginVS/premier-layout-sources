 <template>
  <div class="contacts-request-modal">
    <Input
      v-for="option in optionsInput"
      :key="option.id"
      :option="option"
      :placeholderUpperCase="true"
    />

    <SelectBlock
      :name="'Готель'"
      :options="optionsHotel"
      @change="hotel = $event.value"
    />
    <TextArea :placeholder="'Прокоментуйте'" />
  </div>
</template>

<script>
export default {
  name: "ContactsRequestModal",
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
      hotel: "",

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
    };
  },
};
</script>
<style lang="scss">
.contacts-request-modal {
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
    width: calc(50% - 12px);
    margin-bottom: 38px;
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

.contacts-request-modal {
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
    width: 100%;
    margin-bottom: 38px;
  }
  .textarea-block {
    width: 100%;
  }
  .input-block {
    @include max(sm) {
      width: 100%;

      &:nth-child(1) {
        margin-bottom: 28px;
      }
    }
  }
}
</style>
