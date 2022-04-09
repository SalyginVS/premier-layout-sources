 <template>
  <div class="modal-add-registration">
    <h4>Ще не в Premier Club</h4>
    <p class="p1 header-description">Зареєструйтесь та отримайте:</p>
    <div class="registration-options_wrapper">
      <div
        class="registration-option"
        v-for="(option, index) in options"
        :key="index"
      >
        <img src="~/static/icons/check.svg" alt="icon" />
        <p class="p1">
          {{ option }}
        </p>
      </div>
    </div>
    <div class="registration-button">
      <GoldButton class="button" :text="'зареєструватися'" />
      <Button class="button" :text="'Детальніше'" />
    </div>
  </div>
</template>

<script>
import GoldButton from "~/components/GoldButton";
import Button from "~/components/Button";
export default {
  name: "ModalAddRegistration",
  components: {
    GoldButton,
    Button,
  },
  data() {
    return {
      options: [
        "Отримуй бонуси та обмінювайся подарунками",
        "Безкоштовний ранній заїзд та пізній виїзд",
        "Додаткові 10% на проживання",
        "10% знижка на послуги ресторану",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.modal-add-registration {
  h4 {
    margin-bottom: 7px;
  }
  .header-description {
    margin-bottom: 50px;
  }
  .registration-options_wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 33px;
    margin-bottom: 64px;
    .registration-option {
      display: flex;
      align-items: flex-start;

      img {
        margin-right: 14px;
        position: relative;
        top: 5px;
      }
      .p1 {
        max-width: 196px;
        color: rgba(#000000, 0.5);
      }
    }
  }
  .registration-button{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .button{
      &:not(:last-child){
        margin-right: 15px;
      }
    }
  }
}
</style>