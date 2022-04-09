<template>
  <div v-if="isOpen" class="tariff__details">
    <div class="details_include">
      <div>
        <p class="details_header" >Тариф включає</p>
        <p class="p1">
          Включены Wi-Fi Интернет в номере и парковка. При условии проживания
          минимум 2 суток - бесплатный обратный трансфер, если выезд в
          воскресенье или понедельник. Тип питания может быть выбран согласно
          Вашим предпочтениям: завтрак "шведский стол", полупансион: завтрак
          «шведский стол» и ужин по специальному меню или без питания. Цены
          включают НДС. Согласно законодательству Украины туристический сбор не
          входит в стоимость номера и оплачивается гостем самостоятельно в
          отеле. Ставка для внутреннего туризма - 18,89 грн., для въездного
          туризма - 47,23 грн. с человека в сутки.
        </p>
      </div>

      <div class="details_rools">
        <div>
          <p class="details_header" >Правила та умови</p>
          <p class="p1">Заїзд: 15:00 - Виїзд: 12:00</p>
        </div>

        <div>
          <p class="details_header">20% ПДВ</p>
          <p class="p1">20% ПДВ враховано у вартість.</p>
        </div>
      </div>
    </div>

    <div class="details_politic">
      <div class="details_rools">
        <div>
          <p class="details_header">Правила та умови</p>
          <p class="p1">Заїзд: 15:00 - Виїзд: 12:00</p>
        </div>

        <div>
          <p class="details_header">20% ПДВ</p>
          <p class="p1">20% ПДВ враховано у вартість.</p>
        </div>
      </div>

      <div>
        <p class="details_header">Стандартні умови скасування</p>
        <p class="p1">
          У разі скасування бронювання в термін 1 доби до дати заїзду штраф не
          стягується. У разі скасування пізніше цього терміну або у разі
          незаїзду стягується 100% від вартості першої ночі проживання.
        </p>
      </div>

      <div>
        <p class="details_header">Політика гарантії</p>
        <p class="p1">
          У разі, якщо не надана кредитна карта, бронювання гарантовано до 18:00
          дня заїзду і може бути скасовано після цього часу готелем. Для
          продовження гарантії повідомте, будь ласка, дані про Вашу банківській
          картці або оплатіть заброньовані послуги.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TariffDetails",

  props: {
    text: {
      type: String,
      default: "",
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/utils.scss";

.tariff__details {
  background-color: rgba(240, 240, 240, 1);
  padding: 64px 72px;
  display: flex;
  justify-content: space-between;

  @include max(lg) {
    flex-wrap: wrap;
    padding: 40px 48px;
  }

  @include max(md) {
    flex-wrap: wrap;
    padding: 33px 40px;
  }

  @include max(sm) {
    flex-wrap: wrap;
    padding: 32px 18px;
  }

  .details_header {
    font-family: AvenirNextCyrMedium;
    font-style: normal;
    font-weight: 450;
    font-size: 10px;
    line-height: 180%;
    color: #000000;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    margin-bottom: 12px;

    @include max(lg) {
      margin-bottom: 8px;
    }
    @include max(sm) {
      font-size: 9px;
    }
  }
  p {
    font-size: 12px;
    //width: 438px;
    line-height: 180%;
  }
}
.details_include {
  @include max(lg) {
    margin-bottom: 48px;
  }
  @include max(md) {
    margin-bottom: 40px;
  }

  .details_rools {
    margin-top: 56px;
    display: flex;
    justify-content: space-between;

    @include max(lg) {
      display: none;
    }
  }
}
.details_politic {
  div {
    @include min(lg) {
      &:not(:last-child) {
        margin-bottom: 48px;
      }
    }
    @include max(lg) {
      &:not(:first-child) {
        margin-bottom: 48px;
      }
    }
    @include max(md) {
      &:not(:first-child) {
        margin-bottom: 40px;
      }
    }
  }

  .details_rools {
    @include min(lg) {
      display: none;
    }

    @include max(lg) {
      display: flex;
      justify-content: space-between;
      div {
        margin-bottom: 0;
      }
    }
    @include max(sm) {
      flex-wrap: wrap;
      div {
        width: 100%;
        margin-bottom: 0;

        &:not(:last-child){
          margin-bottom: 40px;
        }
      }
    }
  }

  @include max(lg) {
    display: flex;
    flex-direction: column-reverse;
  }
}

.details_politic,
.details_include {
  width: calc(50% - 42px);

  @include max(lg) {
    width: 62%;
  }
  @include max(md) {
    width: 77%;
  }
  @include max(sm) {
    width: 100%;
  }
}
</style>

