<template>
  <div class="guest_info_reviews">
    <div class="title">
      <h5>
        {{ dataInfo.title }}
      </h5>

      <h5>
        {{ dataInfo.title_mob }}
      </h5>
    </div>
    <div class="data-wrapper">
      <DataGuestBlockMore :data="data" />
    </div>
  </div>
</template>

<script>
import DataGuestBlockMore from "~/blocks/guest_information/DataGuestBlockMore";

export default {
  name: "GuestInfoReviews",
  props: {
    dataInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    DataGuestBlockMore,
  },
  data() {
    return {
      data: {
        inputOptions: [
          {
            id: 0,
            type: "text",
            placeholder: "Ім'я*",
          },
          {
            id: 1,
            type: "text",
            placeholder: "Прізвище*",
          },
          {
            id: 2,
            type: "email",
            placeholder: "E-mail*",
          },
          {
            id: 3,
            type: "text",
            placeholder: "Телефон*",
          },
        ],
        commentTitle: "Ваш Коментар",
        optionsInfo: {
          title: "Порекомендуємо готель?",
          options: [
            { text: "Так", value: 0 },
            { text: "Ні", value: 1 },
          ],
        },
        guestCardInfo: {
          description:
            "Якщо ви є учасником програми лояльності Premier Club, покладіть тут номер своєї картки та отримайте 25 балів.",
          input: {
            type: "text",
            placeholder: "Номер картки Premier Club",
          },
        },
        agreement:
          "Я прочитав та приймаю <a href='/' target='_blank'>політику конфіденційності даних</a>",
        button: "надсилати відгуки",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.guest_info_reviews {
  width: 100%;
  // margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  background-color: #f5f4f3;
  .title {
    width: 100%;
    padding: 32px 40px;
    background-color: #f0edea;

    h5 {
      &:nth-child(2) {
        display: none;
      }
    }

    @include max(lg) {
      padding: 32px;
    }

    @include max(sm) {
      padding: 24px;
      h5 {
        &:nth-child(1) {
          display: none;
        }
        &:nth-child(2) {
          display: block;
        }
      }
    }
  }
}
</style>
