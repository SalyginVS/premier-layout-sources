<template>
  <div class="setting-credit-card">
    <div class="card-wrapper">
      <div class="setting">
        <div class="setting-wrapper">
          <CreditCardTemplate
            v-for="template in cardTemplate"
            :key="template"
            @closeCardTemplate="closeCardTemplate(template)"
          />
          <AddNewCardTemplate
            :showAddCardButton="showAddCardButton"
            @addNewCard="addNewCard"
          />
        </div>
        <CreditCardSlider
          :cardTemplate="cardTemplate"
          :addNewCard="addNewCard"
          :closeCardTemplate="closeCardTemplate"
        />
      </div>
      <CreditCard />
    </div>

    <div class="save-change">
      <Button :text="'зберегти зміни'" />
    </div>
  </div>
</template>

<script>
import Button from "~/components/Button";
import CreditCardSlider from "~/blocks/globals/sliders/CreditCardSlider";
import AddNewCardTemplate from "~/components/AddNewCardTemplate";
import { globalMixin } from "~/plugins/mixins";
export default {
  name: "SettingCreditCard",
  mixins: [globalMixin],
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    cardTemplate: [],
    showAddCardButton: true
  }),

  components: {
    Button,
    CreditCardSlider,
    AddNewCardTemplate
  },
  methods: {
    addNewCard() {
      if (this.cardTemplate.length < 3) {
        this.cardTemplate.push(this.cardTemplate.length);
      }
      if (
        this.cardTemplate.length >= 3 
        // &&
        // this.breakpoints <= 1024 && this.breakpoints >= 375
      ) {
        this.showAddCardButton = !this.showAddCardButton;
      }
    },
    closeCardTemplate(el) {
      this.cardTemplate = this.cardTemplate.filter(e => e !== el);
      if (this.cardTemplate.length < 3 && !this.showAddCardButton) {
        this.showAddCardButton = !this.showAddCardButton;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";
.setting-credit-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(#f0f0f0, 0.5);
  .card-wrapper {
    padding: 56px 0 56px 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 1px solid rgba(#000000, 0.05);
    @include max(1439) {
      padding: 40px 0 40px 40px;
    }
    @include max(1023) {
      padding: 32px 0 32px 40px;
    }
    @include max(767) {
      padding: 18px 18px 36px 18px;
      overflow-x: hidden;
    }
    .setting {
      margin-bottom: 16px;
      @include max(767) {
        margin-bottom: 40px;
      }
      .credit-card-slider {
        display: none;
        @include max(767) {
          display: block;
        }
      }
    }
    .setting-wrapper {
      display: flex;
      align-items: center;
      > div {
        &:not(:last-child) {
          margin-right: 10px;
        }
      }
      .credit-card-template {
        @include max(767) {
          display: none;
        }
      }
      .add-card {
        @include max(767) {
          display: none;
        }
      }
      // .add-card {
      //   width: 157px;
      //   height: 102px;
      //   display: flex;
      //   align-items: center;
      //   justify-content: center;
      //   background: #f7f7f7;
      //   border: 1px solid rgba(0, 0, 0, 0.04);
      //   border-radius: 4px;
      //   cursor: pointer;
      //   @include max(767) {
      //     width: 125.99px;
      //     height: 81.85px;
      //   }
      // }
    }
    .credit-card {
      justify-content: flex-start;
    }
  }

  .save-change {
    padding: 40px 0 40px 40px;
    display: flex;
    align-items: flex-start;
    @include max(1439) {
      padding: 32px 0 32px 40px;
    }
    @include max(767) {
      padding: 24px 18px;
    }
    .simple-button {
      min-width: 243px;
      @include max(767) {
        min-width: 301px;
      }
    }
  }
}
</style>
