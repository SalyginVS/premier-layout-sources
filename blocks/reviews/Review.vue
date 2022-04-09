<template>
  <div class="reviw_container">
    <div class="a1 sale_label">
      <p class="a1">
        оцінка:
        <span>10</span>
      </p>
      <img class="star" src="~/static/images/review_star.svg" alt />
      <img class="triangle" src="~/static/images/triangle.svg" />
    </div>
    <div class="descriptions">
      <div class="writer_info">
        <p class="a1">Світлана</p>
        <div class="vertical_line"></div>
        <p class="a1">6.01.2020</p>
        <div class="vertical_line"></div>
        <p class="a1">Україна</p>
      </div>
      <div class="text_description" :class="{ open: detailsShow }">
        <h6>Стриманий інтер'єр, професійний персонал</h6>
        <p class="p1 main_description">
          Також як розуміння суті ресурсозберігаючих технологій в значній мірі
          обумовлює важливість поетапного і послідовного розвитку суспільства.
          Але підприємці в мережі інтернет піддані цілої серії незалежних
          досліджень. Ось вам яскравий приклад сучасних тенденцій - висока
          якість позиційних досліджень вимагає від нас аналізу глибокодумних
          міркувань! Ось вам яскравий приклад сучасних тенденцій - підвищення
          рівня громадянської свідомості вимагає від нас аналізу зміцнення
          моральних цінностей. Також як розуміння суті ресурсозберігаючих
          технологій в значній мірі обумовлює важливість поетапного і
          послідовного розвитку суспільства. Але підприємці в мережі інтернет
          піддані цілої серії незалежних досліджень. Ось вам яскравий приклад
          сучасних тенденцій - висока якість позиційних досліджень вимагає від
          нас аналізу глибокодумних міркувань! Ось вам яскравий приклад сучасних
          тенденцій - підвищення рівня громадянської свідомості вимагає від нас
          аналізу зміцнення моральних цінностей.
        </p>
        <div class="answer-block">
          <p class="a1">відповідь адміністратора</p>
          <span class="p1">
            Також як розуміння суті ресурсозберігаючих технологій в значній мірі
            обумовлює важливість поетапного і послідовного розвитку суспільства.
            Але підприємці в мережі інтернет піддані цілої серії незалежних
            досліджень. Ось вам яскравий приклад сучасних тенденцій - висока
            якість позиційних досліджень вимагає від нас аналізу глибокодумних
            міркувань!
          </span>
        </div>
      </div>
      <div class="buttons_wrapper">
        <GoldButton
          @click.native="OpenDetails"
          :forwardedFromReview="forwardedFromReview"
          :text="detailsShow ? 'сховати' : 'Детальніше'"
        />

        <div v-if="!detailsShow" class="second_button">
          <img src="~/static/images/admin_ansver.svg" alt />
          <p>є відповідь адміністратора</p>
        </div>
      </div>
      <div class="mark_wrapper">
        <p class="a1">
          оцінка:
          <span>10</span>
        </p>
        <img class="star" src="~/static/images/review_gold_star.svg" alt />
      </div>
    </div>

    <div class="points">
      <div
        class="point_wrapper"
        v-for="point in detailsShow ? pointItems : pointItems.slice(0, 4)"
        :key="point.id"
      >
        <p class="a1">
          {{ point.name }}:
          <span
            class="point_value"
            :class="{
              color_green: point.value >= 7,
              color_yellow: point.value < 7 && point.value >= 4,
              color_red: point.value < 4
            }"
          >
            {{ point.value }}</span
          >
        </p>
        <div class="wide_line">
          <div class="full_line full_line_1"></div>
        </div>
      </div>
    </div>
    <div class="buttons_wrapper-mobile-scr">
      <GoldButton
        @click.native="OpenDetails"
        :forwardedFromReview="forwardedFromReview"
        :text="detailsShow ? 'сховати' : 'Детальніше'"
      />
    </div>
  </div>
</template>

<script>
import Button from "~/components/Button";
import GoldButton from "~/components/GoldButton";
export default {
  name: "Review",
  components: {
    Button,
    GoldButton
  },
  data() {
    return {
      detailsShow: false,
      pointItems: [
        { id: 0, name: "Персонал", value: 9.7 },
        { id: 1, name: "Комфорт", value: 6.4 },
        { id: 2, name: "Cервис", value: 2.3 },
        { id: 3, name: "Персонал", value: 9.7 },
        { id: 4, name: "Комфорт", value: 6.4 },
        { id: 5, name: "Cервис", value: 2.3 },
        { id: 6, name: "Персонал", value: 9.7 },
        { id: 7, name: "Комфорт", value: 6.4 },
        { id: 8, name: "Cервис", value: 2.3 }
      ],
      forwardedFromReview: true
    };
  },
  methods: {
    OpenDetails() {
      this.detailsShow = !this.detailsShow;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.reviw_container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  background: #f0edea;
  padding: 6px;
  @include mb-24;
  position: relative;
  z-index: 0;
  @include max(767){
    margin-bottom:18px;
    padding:0;
    grid-template-columns: 1fr;
  }
}
.sale_label {
  padding: 17px 35px 15px 48px;
  background: url("../../static/images/label_part.png") no-repeat;
  background-size: 100% 100%;
  background-position: right;
  position: absolute;
  // height: 61px;
  right: -15px;
  top: 24px;
  z-index: 500;
  display: flex;
  align-items: center;
  @include max(705) {
    padding: 17px 25px 15px 35px;
  }
  @include max(660) {
    display: none;
  }

  p {
    color: #ffffff;
    letter-spacing: 0.16em;
  }
  span {
    font-size: 16px;
  }
  .star {
    margin-left: 12px;
  }

  .triangle {
    position: absolute;
    right: 0;
    bottom: -14.5px;
  }
}
.descriptions {
  padding: 40px;
  @include max(1023){
    padding:32px 0 32px 32px;
  }
  @include max(767){
    padding:24px 20px;
  }
}
.writer_info {
  display: flex;
  align-items: center;
  p {
    opacity: 0.48;
  }
}
.vertical_line {
  margin: 0 12px;
  height: 14px;
  width: 1px;
  background: #000000;
  opacity: 0.2;
}

.text_description {
  margin-bottom: 56px;
  padding-right: 80px;
  height: 271px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @include max(1439){
    padding-right:60px;
    margin-bottom:48px;
  }
  @include max(1023){
    padding-right:41px;
    margin-bottom:40px;
  }
  @include max(767){
    padding-right:0;
  }
  &.open {
    height: auto;
  }
  @include max(650) {
    margin-bottom: 24px;
  }

  h6 {
    margin: 24px 0;
  }
  .main_description {
    margin-bottom: 48px;
    @include max(767){
      margin-bottom:18px;
    }
  }
  .answer-block {
    display: flex;
    flex-direction: column;
    .a1 {
      margin-bottom: 19px;
      @include max(767){
        margin-bottom:12px;
      }
    }
  }
}
.buttons_wrapper {
  display: flex;
  align-items: center;
  .gold_button{
    width:unset;
  }
  @include max(1439){
    flex-flow:row wrap;
  }
  @include max(767) {
    display: none;
  }
}
.mark_wrapper {
  display: none;
  font-size: 10px;
  @include max(650) {
    display: flex;
    align-items: center;
    height: 53px;
    border-top: 1px solid rgba(155, 136, 136, 0.1);
    border-bottom: 1px solid rgba(155, 136, 136, 0.1);
    .star {
      margin-left: 14px;
      width: 15px !important;
      height: 15px;
    }
  }
}
.second_button {
  display: flex;
  margin-left: 56px;
  @include max(1439){
    margin-left:0;
    width:100%;
    margin-top:24px;
  }
  img {
    margin-right: 12px;
    width: 18px;
  }
  p {
    opacity: 0.48;
  }
}
.points {
  background: rgba(0, 0, 0, 0.02);
  padding: 106px 72px;
  @include max(1439) {
    padding: 106px 40px;
  }
  @include max(1023) {
    padding: 106px 30px;
  }
  @include max(767) {
    padding: 0 20px;
    background:none;
  }
}
.point_wrapper {
  margin-bottom: 44px;
  @include max(650) {
    margin-bottom: 24px;
  }

  p {
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 10px;
  }
  span {
    color: #000000;
  }
  .point_value {
    &.color_green {
      color: #0a5a0a;
    }
    &.color_yellow {
      color: #bb7c05;
    }
    &.color_red {
      color: #c70b0b;
    }
  }
}
.point_wrapper:last-of-type {
  margin-bottom: 0;
}
.wide_line {
  position: relative;
  height: 8px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.08);
}
.full_line {
  position: absolute;
  left: -1px;
  top: -1px;
  border-radius: 4px;
  height: calc(100% + 2px);
  width: 70%;
  background: #a3a19f;
}
.buttons_wrapper-mobile-scr {
  display: none;
  @include max(767) {
    margin-top: 32px;
    margin-bottom: 25px;
    display: block;
    @include max(767) {
      padding: 0 20px;
    }
    .gold_button {
      margin: 0 auto;
      @include max(375) {
        width: 100%;
      }
    }
  }
}
</style>
