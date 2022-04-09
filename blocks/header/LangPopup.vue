<template>
  <div id="lang_popup" class="popup">
    <div @click="closeLangPopup" class="pop-up_back">
      <svg
        width="5"
        height="8"
        viewBox="0 0 5 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.3"
          d="M1 7.5L4 4L1 0.5"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div class="a1">назад</div>
    </div>

    <div class="language a1">мова</div>
    <div class="country_wrapper">
      <div class="lang" v-for="lang in langs" :key="lang.id" @click="selectLanguage(lang.id)">
        <p class="a1 lang_key">{{ lang.key }}</p>
        <p class="a2 lang_value">{{ lang.name }}</p>
      </div>
    </div>
    <div class="horizontal_line"></div>

    <div class="currency a1">валюта</div>
    <div class="money_wrapper">
      <div class="money" v-for="money in moneys" :key="money.id" @click="selectCurrency(money.id)">
        <p class="a1 lang_key">{{ money.key }}</p>
        <p class="a2 lang_value">{{ money.name }}</p>
      </div>
    </div>
    <div class="popup__back" @click.self="closeLangPopup">
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: "LangPopup",

  data: () => ({
    langs: [
      {
        id: 0,
        key: "Ua",
        name: "Украинский",
      },
      {
        id: 1,
        key: "ru",
        name: "Русский",
      },
      {
        id: 2,
        key: "En",
        name: "English",
      },
      {
        id: 3,
        key: "Ua",
        name: "Украинский",
      },
      {
        id: 4,
        key: "汉语",
        name: "中国人",
      },
      {
        id: 5,
        key: "Ua",
        name: "Украинский",
      },
      {
        id: 6,
        key: "ru",
        name: "Русский",
      },
      {
        id: 7,
        key: "En",
        name: "English",
      },
      {
        id: 8,
        key: "Ua",
        name: "Украинский",
      },
      {
        id: 9,
        key: "Ua",
        name: "Украинский",
      },
    ],
    moneys: [
      {
        id: 0,
        key: "₽",
        name: "Росийский рубль",
      },
      {
        id: 1,
        key: "₴",
        name: "Украинская гривна",
      },
      {
        id: 2,
        key: "$",
        name: "Доллар США",
      },
      {
        id: 3,
        key: "$",
        name: "Доллар США",
      },
      {
        id: 4,
        key: "$",
        name: "Доллар США",
      },
      {
        id: 5,
        key: "$",
        name: "Доллар США",
      },
      {
        id: 6,
        key: "$",
        name: "Доллар США",
      },
      {
        id: 7,
        key: "$",
        name: "Доллар США",
      },
      {
        id: 8,
        key: "лв",
        name: "Болгарский лев",
      },
      {
        id: 9,
        key: "$",
        name: "Доллар США",
      },
      {
        id: 10,
        key: "$",
        name: "Доллар США",
      },
    ],
    currenCurrency: '₴',
    currentLanguage: 'UA',
  }),

  methods:{
    // closePopUp(){
    //   this.$emit('closePopUp')
    // },
    selectCurrency(id) {
      let currency = this.moneys.find(money => money.id == id)
      this.setCurrentCurrency(currency.key)
    },
    selectLanguage(id) {
      let lang = this.langs.find(lang => lang.id == id)
      this.setCurrentLanguage(lang.key)
    },
    ...mapMutations({
      setCurrentLanguage: 'setCurrentLanguage',
      setCurrentCurrency: 'setCurrentCurrency',
    }),
    ...mapMutations('modals', {
      closeLangPopup: 'closeLangPopup',
    }),
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

#lang_popup {
  position: absolute;
  padding: 32px 20px;
  // top: 24px;
  // left: -32px;
  //top: 51px;
  top: 28px;
  //left: -14px;
  right: 100px;
  transform: translateX(100%);
  width: 488px;
  @include min(1024) {
    //top: 28px;
    //left: -35px;
  }
  @include max(md) {
    top: 52px;
    right: 115px;
  }
  @include max(sm) {
    //left: 0px;
    width: 100%;
    right: 0;
    transform: translateX(0);
    //height: 100%;
  }
}
.popup::after {
  left: 56px;
  top: -5px;

  @include max(sm) {
    display: none;
  }
}
.horizontal_line {
  height: 1px;
  background: #000000;
  opacity: 0.1;
  @include mb-22;
  margin-top: 6px;

  @include max(sm){
    display: none;
  }
}
.pop-up_back {
  @include min(sm) {
    display: none;
  }
  @include max(sm) {
    margin-bottom: 40px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    width: 55px;

    svg {
      margin-top: 1.5px;
      transform: rotate(180deg);
    }
  }
}

.language{
  @include min(sm){
    display: none;
  }
  @include max(sm){
    margin-bottom: 15px;
  }
}
.country_wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @include max(sm){
    display: flex;
    flex-direction: column;
  }
}


.lang,
.money {
  display: flex;
  align-items: center;
  @include mb-16;
  cursor: pointer;
  width: fit-content;
  p {
    color: #aaaaaa;
    transition: color 0.5s ease;

    @include max(sm){
      font-size: 12px;
    }
  }
}
.lang:hover,
.money:hover {
  p {
    color: #000000;
  }
}
.lang_key {
  padding-right: 8px;
}

.currency{
  @include min(sm){
    display: none;
  }
  @include max(sm){
    margin-top: 40px;
    margin-bottom: 15px;
  }
}
.money_wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @include max(sm){
    display: flex;
    flex-direction: column;
  }
}
.popup__back {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
</style>
