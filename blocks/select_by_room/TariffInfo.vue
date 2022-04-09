<template>
  <div class="tariff-info">
    <div class="information">
      <div class="item">
        <p class="a2">Тариф включає</p>
        <ul class="p2_light list">
          <li>
            Включены Wi-Fi Интернет в номере и парковка.
            При условии проживания минимум 2 суток - бесплатный обратный трансфер, если выезд в воскресенье или понедельник.
          </li>
          <li>Тип питания может быть выбран согласно Вашим предпочтениям: завтрак "шведский стол", полупансион: завтрак «шведский стол» и ужин по специальному меню или без питания.</li>
          <li>Цены включают НДС. Согласно законодательству Украины туристический сбор не входит в стоимость номера и оплачивается гостем самостоятельно в отеле. Ставка для внутреннего туризма - 18,89 грн., для въездного туризма - 47,23 грн. с человека в сутки.</li>
        </ul>
      </div>
      <div class="items-wrapper">
        <div class="item">
          <p class="a2">Стандартні умови скасуванняє</p>
          <ul class="p2_light list">
            <li>У разі скасування бронювання в термін 1 доби до дати заїзду штраф не стягується. У разі скасування пізніше цього терміну або у разі незаїзду стягується 100% від вартості першої ночі проживання.</li>
          </ul>
        </div>
        <div class="item">
          <p class="a2">Політика гарантії</p>
          <ul class="p2_light list">
            <li>У разі, якщо не надана кредитна карта, бронювання гарантовано до 18:00 дня заїзду і може бути скасовано після цього часу готелем. Для продовження гарантії повідомте, будь ласка, дані про Вашу банківській картці або оплатіть заброньовані послуги.</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="condition">
      <div class="item">
        <p class="a2">Правила та умови</p>
        <span class="p2_light list">
          Заїзд: 15:00
          - Виїзд: 12:00
        </span>
      </div>
      <div class="item">
        <p class="a2">20% ПДВ</p>
        <span class="p2_light list">20% ПДВ враховано у вартість.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TariffInfo",

  props: {},
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/blocks/hotel_finded_el.scss";
.tariff-info {
  position: relative;
  width: 100%;
  padding: 64px 72px;
  margin-bottom: 24px;
  display: none;
  flex-direction: column;
  background: rgba(#f0f0f0, 0.3);
  &.active{
      display: flex;
  }
  
  .information {
    width: 100%;
    margin-bottom: 56px;
    display: flex;
    justify-content: space-between;
    .items-wrapper {
      .item {
        &:not(:last-child) {
          margin-bottom: 48px;
        }
      }
    }
    .item {
      display: flex;
      flex-direction: column;
      max-width: 32vw;

      .a2 {
        margin-bottom: 12px;
        text-transform: uppercase;
      }
      .list {
        li:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
  }
  .condition {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      &:not(:last-child) {
        margin-right: 78px;
      }
      .a2 {
        text-transform: uppercase;
        margin-bottom: 12px;
      }
    }
  }
}
</style>