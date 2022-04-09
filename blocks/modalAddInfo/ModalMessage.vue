 <template>
  <div class="modal-message">
    <h4>Повідомлення</h4>
    <div
      class="modal-message__info"
      v-for="item in modalMessage"
      :key="item.id"
    >
      <img
        @click="closeMessage(item)"
        class="close-icon"
        src="~/static/icons/simple-cross-black.svg"
        alt="icon"
      />

      <img :src="item.img" alt="icon" />
      <div class="modal-message__info-description">
        <p class="a1">
          {{ item.title }}
        </p>
        <p class="p2_light">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalMessage",
  data() {
    return {
      modalMessage: [
        {
          id: 0,
          img: require("~/static/icons/gift-icon.svg"),
          title: "Ми гарантуємо кращу ціну!",
          description:
            "Увійдіть в програмі Premier Club і отримаєте додатково 10% знижки від «Найкращого гнучкого тарифу». Варіантів дешевше ви не знайдете!",
        },
        {
          id: 1,
          img: require("~/static/icons/icon-moon.svg"),
          title: "Ми гарантуємо кращу ціну!",
          description:
            "Увійдіть в програмі Premier Club і отримаєте додатково 10% знижки від «Найкращого гнучкого тарифу». Варіантів дешевше ви не знайдете!",
        },
      ],
    };
  },
  methods: {
    closeMessage(el) {
      this.modalMessage = this.modalMessage.filter((e) => {
        return e != el;
      });
      if (this.modalMessage.length === 0) {
        this.$emit('noMessages');
      }
    },
  },
};
</script>



<style lang="scss" scoped>
.modal-message {
  display: flex;
  flex-direction: column;

  h4 {
    margin-bottom: 40px;
  }
  .modal-message__info {
    max-width: 436px;
    padding: 24px 28px 24px 24px;
    display: flex;
    align-items: flex-start;
    background-color: #ffffff;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
    border-radius: 2px;
    position: relative;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
    .close-icon {
      position: absolute;
      top: 16px;
      right: -6px;
      width: 12px;
      height: 12px;
      cursor: pointer;
    }
    img {
      margin-right: 20px;
    }
    .modal-message__info-description {
      .a1 {
        margin-bottom: 10px;
      }
      .p2_light {
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
}
</style>