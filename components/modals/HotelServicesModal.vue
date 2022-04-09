 <template>
  <div class="hotel-services-modal">
    <div class="options-block">
      <div
        class="options-room_wrapper"
        v-for="option in options"
        :key="option.id"
      >
        <h4 class="title" v-html="option.title"></h4>
        <div class="options-wrapper">
          <div
            class="options"
            v-for="(optionRows, index) in splitArray(option.optionItems)"
            :key="index"
          >
            <p class="p1" v-for="(option, index) in optionRows" :key="index">
              <img src="~/static/icons/check.svg" alt="icon" />
              {{ option }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotelServicesModal",
  props: {
    openModal: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    options: [
      {
        id: 0,
        title:
          'В <span class="gold_text italic">Premier Palace Hotel</span> для вас:',
        optionItems: [
          "Кабельні канали",
          "Платні ТБ-канали ",
          "Телефон у ванній кімнаті ",
          "Телефон у ванній кімнаті ",
          "Дзеркало для макіяжу",
          "Фен ",
          "Ванна",
          "Килимове покриття",
          "Сейф що вміщує ноутбук",
          "Доступні суміжні номери ",
          "Сейф",
          "Звукоізоляція",
          "Безкоштовний Wi-Fi в номері",
          "Дротовий Інтернет",
          "Підлога з підігрівом",
          "Ванна кімната",
          "Душ",
          "Туалет",
          "Система клімат контролю",
          "Робочий стіл",
          "Електричний чайник",
          "Мінібар",
          "Щітка для взуття",
          "Будильник",
          "Плазмовий телевізор",
          "Біде",
          "Туалетні приналежності",
          "Ваги",
          "Халат",
          "Опалення",
          "Телефон",
          "Індивідуально регульоване опалення",
          "Проживання з тваринами дозволено",
          'Послуга "дзвінок/будильник"',
          "Гардероб / шафа",
          "Капці",
        ],
      },
      {
        id: 1,
        title:
          'Бесплатные услуги <span class="gold_text italic">(на выбор)</span>',
        optionItems: [
          "Кабельні канали",
          "Платні ТБ-канали",
          "Телефон у ванній кімнаті",
          "Телефон у ванній кімнаті",
          "Дзеркало для макіяжу",
          "Безкоштовний Wi-Fi в номері",
          "Дротовий Інтернет",
          "Підлога з підігрівом",
          "Ванна кімната",
          "Душ",
          "Плазмовий телевізор",
          "Біде",
          "Туалетні приналежності",
          "Ваги",
          "Халат",
        ],
      },
    ],
  }),
  methods: {
    splitArray(options) {
      const rowsInCol = options.length / 3;
      const parts = Math.ceil(options.length / rowsInCol);
      const result = [];

      for (let i = 1; i <= parts; i++) {
        result.push(options.slice((i - 1) * rowsInCol, i * rowsInCol));
      }

      return result;
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.hotel-services-modal {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .options-block {
    width: 100%;
    display: flex;
    flex-direction: column;

    padding: 140px 0;

    @include max(lg) {
      padding: 106px 0;
    }
    @include max(md) {
    }
    @include max(sm) {
      padding: 76px 0;
    }

    .options-room_wrapper {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;

      @include max(lg) {
        max-width: 768px;
      }
      @include max(md) {
        max-width: 684px;
        margin: 0 40px;
      }
      @include max(sm) {
      }

      &:not(:last-child) {
        margin-bottom: 170px;

        @include max(lg) {
          margin-bottom: 124px;
        }
        @include max(md) {
          margin-bottom: 112px;
        }
        @include max(sm) {
          margin-bottom: 80px;
        }
      }
      .title {
        max-width: 360px;
        margin-bottom: 88px;

        @include max(lg) {
          max-width: 233px;
          margin-bottom: 64px;
        }
        @include max(md) {
          margin-bottom: 56px;
        }
        @include max(sm) {
          margin-bottom: 40px;
        }
      }

      .options-wrapper {
        width: auto;
        display: flex;
        @include max(sm) {
          flex-wrap: wrap;
        }

        .options {
          width: calc(100% / 3);
          display: flex;
          flex-direction: column;

          @include max(sm) {
            width: 100%;
          }

          &:not(:last-child) {
            padding-right: 40px;
            margin-right: 50px;
            border-right: 1px solid rgba(#101010, 0.05);

            @include max(lg) {
            }
            @include max(md) {
              padding-right: 40px;
              margin-right: 18px;
            }
            @include max(sm) {
              border-right: 0;
            }
          }
          .p1 {
            margin-bottom: 22px;
            display: flex;
            align-items: flex-start;
            color: rgba(#000000, 0.5);
            line-height: 132%;
            letter-spacing: 0.04em;
            img {
              margin-right: 14px;
            }
          }
        }
      }
    }
  }
}
</style>
