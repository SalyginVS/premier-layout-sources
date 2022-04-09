 <template>
  <div class="terms-of-accommodation-modal">
    <TwoTitles
      main_title="Умови розміщення в <span class='gold_text italic'>Premier Palace Hotel</span>"
      little_title="правила та умови"
    />
    <div class="terms-of-accommodation__content">
      <LabelInfoContent :data="labelInfo" :checkTime="true" />
      <LabelInfoContent :data="labelInfoLight" :lightMode="true" />
    </div>
    <div class="terms-of-accommodation__footer">
      <p class="p2_light">
        Minimum age allowed for check-in: 18 years. Additional services are not
        automatically included in the total price and are paid separately during
        your stay. Pets are allowed. This service may be charged.
      </p>
      <div class="footer-icon">
        <a class="footer-icon__mastercard" href="/" target="_blank">
          <img src="~/static/icons/mastercard.svg" alt="icon" />
        </a>
        <a class="footer-icon__visa" href="/" target="_blank">
          <img src="~/static/icons/visa.svg" alt="icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import TwoTitles from "~/blocks/globals/TwoTitles";
import LabelInfoContent from "~/blocks/globals/LabelInfoContent";

export default {
  name: "TermsOfAccommodationModal",
  components: {
    TwoTitles,
    LabelInfoContent,
  },
  props: {
    openModal: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    labelInfo: {
      title: "Проживанне",
      description:
        "Для участников Premier Club есть возможность заказать ранний заезд, поздний выезд и предоставление номера на категорию выше*. * При условии наличия свободных номеров. Отель оставляет за собой право не предоставлять услугу в номерах «Люкс» и «Апартамент».",
      checkIn: "12:00",
      checkOut: "18:00",
    },
    labelInfoLight: {
      title: "Розміщення дітей",
      description:
        "Максимальное количество дополнительных кроватей в номере - 1.Дополнительные кровати и детские кроватки предоставляются по запросу. Требуется подтверждение со стороны отеля о предоставлении данной услуги.",
      addInfo: [
        "От 0 до 2 лет 300 UAH за ночь, размещение на детских кроватках",
        "От 2 и старше 300 UAH за ночь, Размещение на доп. кроватях",
      ],
    },
  }),
};
</script>

<style lang="scss" >
@import "../../assets/scss/utils.scss";

.terms-of-accommodation-modal {
  .two_titles_container {
    .little_title {
      margin-bottom: 23px;
      text-align: left;
    }
    .little_title,
    .main_title {
      text-align: left;
    }
  }
  .label-info-content {
    &:nth-child(2) {
      @include max(lg) {
        .description {
          margin-top: 20px;
          margin-bottom: 32px;
        }
        .add-info {
          .p2_light {
            max-width: 240px;
            margin-bottom: 16px;
            line-height: 1.3;

            //opacity: 0.4;
          }
        }
      }
    }

    &:nth-child(1) {
      @include max(sm) {
        .description {
          margin-bottom: 29px;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.terms-of-accommodation-modal {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  margin-top: 140px;

  @include max(lg) {
    margin-top: 98px;
  }
  @include max(md) {
    margin-top: 90px;
  }

  @include max(sm) {
    margin-top: 76px;
  }

  .two_titles_container {
    max-width: 542px;
    margin-bottom: 88px;
    align-items: flex-start;
    margin-left: 168px;

    @include max(lg) {
      margin-left: 108px;
      max-width: 329px;
      margin-bottom: 72px;
    }
    @include max(md) {
      max-width: 350px;
      margin-bottom: 56px;
    }
    @include max(sm) {
      margin-left: 14px;
      margin-right: 14px;

      max-width: 100%;
      margin-bottom: 56px;
    }
  }
  .terms-of-accommodation__content {
    width: 100%;
    margin-bottom: 140px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .label-info-content {
      .description {
        margin-top: 20px;
        margin-bottom: 32px;
      }

      @include max(lg) {
        padding: 53px 48px 59px 111px;
        min-height: none;
      }

      &:first-child {
        //margin-left: -142px;
        margin-right: 120px;
        width: 48.4vw;

        @include max(lg) {
          min-height: 0;
          margin-right: 93px;
        }
        @include max(lg) {
          width: 595px;
          padding-right: 71px;
          margin-right: auto;
          margin-bottom: 58px;
        }
        @include max(sm) {
          padding: 40px 14px;
          margin-right: 14px;
        }
      }
      &:nth-child(2) {
        //width: 32vw;

        max-width: 440px;
        margin-right: auto;

        @include max(lg) {
          min-height: 0;
          max-width: 370px;
          padding: 0 41px 0 0;
        }
        @include max(md) {
          max-width: 395px;
          margin-left: 111px;
          padding-right: 0;
        }
        @include max(sm) {
          padding: 0 14px;
          margin-right: 14px;
          margin-left: 0;
          max-width: 100%;
          width: 100%;
        }
      }
    }

    @include max(lg) {
      margin-bottom: 120px;
    }
    @include max(md) {
      margin-bottom: 96px;
      flex-wrap: wrap;

      div {
        width: 100%;
      }
    }
    @include max(sm) {
      margin-bottom: 56px;
      div {
        padding: 0 14px;
        margin: 0;
        margin-right: 14px;
      }
    }
  }
  .terms-of-accommodation__footer {
    //width: calc(100% + 184px);
    //margin-left: -92px;

    margin: 0 50px;
    width: -webkit-fill-available;
    padding: 32px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    @include max(lg) {
      padding: 20px 0;
    }

    @include max(md) {
          margin: 0 42px;
      padding: 18px 0;
    }

    @include max(sm) {
      margin: 0 14px;
      flex-wrap: wrap;
    }

    .p2_light {
      max-width: 667px;

      @include max(lg) {
      }

      @include max(md) {
        max-width: 463px;
      }
      @include max(sm) {
        max-width: 100%;
        margin-bottom: 18px;
      }
    }
    .footer-icon {
      display: flex;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
      }
      .footer-icon__mastercard {
        width: 40px;
        height: 24px;
        margin-right: 14px;
        display: inline-block;
      }
      .footer-icon__visa {
        width: 48px;
        height: 16px;
        display: inline-block;
      }
    }
  }
}
</style>
