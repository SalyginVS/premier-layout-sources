<template>
  <div class="contacts_central_department_container general_contacts">
    <div class="main-wrapper">
      <h3 class="general_contacts__main_title container">
        Центральний
        <span class="italic gold_text"> <br />відділ бронювання </span>
      </h3>
      <div class="contacts_description">
        <div class="advert__wrapper">
          <div class="advert">
            <div class="advert__contacts">
              <p class="a1 advert__head">Час роботи: 11:00 - 23:00</p>
              <div class="advert__value_wrapper">
                <p class="a1 advert__value">Тел:</p>
                <p class="a1 advert__value">+38 044 359 08 08</p>
                <p class="a1 advert__value">Mоб:</p>
                <p class="a1 advert__value">+38 044 590 69 80</p>
                <p class="a1 advert__value">E-mail:</p>
                <p class="a1 advert__value">pr@phnr.com</p>
              </div>
            </div>
            <div class="advert__vertical_line"></div>
            <div class="advert__chat_bots">
              <p class="a1 advert__head">чат-боты</p>
              <p class="a1 advert__value">messenger</p>
              <p class="a1 advert__value">telegram</p>
              <p class="a1 advert__value">viber</p>
            </div>
          </div>
          <div class="line-simple"></div>
        </div>
        <div class="description_block">
          <p class="p1 description_block__text">
            Господа, високотехнологічна концепція суспільного укладу дозволяє
            виконати важливі завдання по розробці як самодостатніх, так і зовні
            залежних концептуальних рішень. Таким чином, зміцнення і розвиток
            внутрішньо.
          </p>
          <SlashButton text="залишити запит" />
        </div>

        <SlashButton text="залишити запит" />
      </div>
    </div>
  </div>
</template>

<script>
import SlashButton from "~/components/SlashButton";

export default {
  name: "ContactsCentralDepartment",
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.general_contacts {
  margin-top: 192px;

  @include max(lg) {
    margin-top: 124px;
  }
  @include max(md) {
    margin-top: 112px;
  }
  @include max(sm) {
    margin-top: 80px;
  }
}
.advert__wrapper {
  position: relative;

  .line-simple {
    top: 130px;
    left: 150px;

    @include max(lg) {
      display: none;
    }
    @include max(md) {
      width: 330px;
      display: block;
      top: 106px;
      left: 69px;
    }
    @include max(sm) {
      display: none;
    }
  }

  @include max(sm) {
    width: 100%;
    order: 1;
  }
}
.advert {
  padding: 32px 64px 32px 0;
  @include pl-168;

  width: fit-content;
  display: flex;
  height: fit-content;
  // background: rgba(#f0edea, 0.5);
  background: #f2f1f0;
  position: relative;
  z-index: 1;

  @include max(lg) {
    padding: 26px 41px;
  }

  @include max(md) {
    padding: 18px 41px;
    width: 405px;
  }
  @include max(sm) {
    width: 100%;
    padding: 13px 42px 13px 18px;
  }

  &__vertical_line {
    width: 1px;
    min-height: 100%;
    background: #000000;
    opacity: 0.08;
    margin: 0 64px;

    @include max(lg) {
      margin: 0 48px;
    }
    @include max(md) {
      margin: 0 32px;
    }
    @include max(sm) {
      margin: 0 auto;
    }
  }
  &__head {
    opacity: 0.5;
  }
  &__value_wrapper {
    display: grid;
    grid-template-columns: auto auto;
  }
  &__value {
    margin-top: 22px;
    cursor: pointer;
  }
  &__contacts,
  &__chat_bots {
    padding: 15px 0;
  }
}
.contacts_description {
  @include mt-88;
  display: flex;
  justify-content: space-between;
  @include pr-168;
  @include max(lg) {
    margin-top: 64px;
  }
  @include max(md) {
    margin-top: 56px;
    padding-right: 48px;
  }
  @include max(sm) {
    margin-top: 24px;
    padding-right: 0;
    flex-wrap: wrap;
  }

  .slash_button {
    display: none;
    @include max(sm) {
      margin: 48px 18px 0;
      width: 100%;
      display: block;
      order: 3;
    }
  }
}
.description_block {
  width: 430px;

  &__text {
    margin-bottom: 64px;
    @include max(lg) {
      margin-bottom: 40px;
    }
    @include max(sm) {
      margin-bottom: 32px;
    }
  }

  @include max(lg) {
    width: 310px;
  }

  @include max(md) {
    margin-left: 10px;
    width: 257px;
  }
  @include min(sm) {
    .slash_button {
      display: block;
    }
  }
  @include max(sm) {
    margin: 0 18px;
    width: 100%;

    .slash_button {
      display: none;
    }
  }
}
.advert__value:nth-of-type(2n + 1) {
  padding-right: 0px;
}
</style>
