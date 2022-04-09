 <template>
  <div class="request-points-modal">
    <Input
      v-for="option in optionsInput"
      :key="option.id"
      :option="option"
      :placeholderUpperCase="true"
    />
  </div>
</template>

<script>
export default {
  name: "RequestPointsModal",
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
          placeholder: "номер картки",
        },
        {
          id: 3,
          type: "text",
          placeholder: "кількість балів",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "../../assets/scss/utils.scss";

.request-points-modal {
  .input-block {
    width: calc(50% - 12px);
    margin-bottom: 38px;

    @include max(sm) {
      width: calc(50% - 6px);
      margin-bottom: 20px;
    }

    &:nth-last-child(1),
    &:nth-last-child(2) {
      margin-bottom: 0;

      @include max(sm) {
        width: 100%;

        &:nth-last-child(2) {
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.request-points-modal {
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
}
</style>
