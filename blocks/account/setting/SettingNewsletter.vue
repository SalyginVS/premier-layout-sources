<template>
  <div class="setting-credit-card">
    <div class="info">
      <Input :option="option" />
      <SelectBlockWithHeader
        :name="'Мова розсилки'"
        :options="optionsLang"
        @change="lang = $event.value"
        :showHeader="true"
      />
    </div>
    <div class="save-change">
      <Button :text="'зберегти зміни'" />
    </div>
  </div>
</template>

<script>
import Button from "~/components/Button";
export default {
  name: "SettingNewsletter",
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    Button
  },
  data: () => ({
    option: {
      type: "email",
      placeholder: "E-mail для розсилки"
    },
    lang: "",
    optionsLang: [
      {
        title: "Українська",
        value: "Українська"
      },
      {
        title: "Російська",
        value: "Російська"
      },
      {
        title: "Англійська",
        value: "Англійська"
      },
      {
        title: "Іспанська",
        value: "Іспанська"
      },
      {
        title: "Французька",
        value: "Французька"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";
.setting-credit-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(#f0f0f0, 0.5);
  .info {
    padding: 31px 0 56px 40px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(#000000, 0.05);
    @include max(1439) {
      padding: 40px 0 40px 40px;
    }
    @include max(1023) {
      padding: 32px 40px;
    }
    @include max(767) {
      padding: 32px 18px;
      flex-flow: row wrap;
    }
    > div {
      &:not(:last-child) {
        margin-right: 48px;
        @include max(767) {
          margin-right: 0px;
          margin-bottom: 24px;
        }
      }
    }
    .select-wrapper {
      width: 218px;
      font-size: 12px;
      @include max(767){
        width:100%;
      }
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
      padding: 24px 20px;
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
