<template>
  <div class="setting-password">
    <div class="password-wrapper">
      <Input v-for="option in passwords" :key="option.id" :option="option" @input="handleInput($event,option.id)" />
    </div>
    <div class="save-change">
      <Button :text="'зберегти зміни'" />
    </div>
  </div>
</template>

<script>
import Button from "~/components/Button";
export default {
  name: "SettingPassword",
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    Button
  },
  data() {
    return {
      passwords: [
        {
          id: 0,
          placeholder: "Поточний пароль",
          type: "password"
        },
        {
          id: 1,
          placeholder: "Новий пароль",
          type: "password"
        },
        {
          id: 2,
          placeholder: "Повторити пароль",
          type: "password"
        }
      ]
    };
  },
  methods:{
    handleInput(e, id){
      this.passwords.find(obj => obj.id === id).value = e;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";
.setting-password {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(#f0f0f0, 0.5);
  .password-wrapper {
    padding: 30px 40px 56px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(#000000, 0.05);
    @include max(1439) {
      flex-flow: row wrap;
      padding: 40px;
    }
    @include max(1023) {
      padding: 32px 40px 32px 40px;
    }
    @include max(767) {
      padding: 32px 20px 32px 18px;
    }
    .input-block:first-of-type {
      @include max(1439) {
        margin-right: 56px;
      }
      @include max(767) {
        margin-right: 0px;
      }
    }
    .input-block {
      margin-top: 14px;
      @include max(767) {
        margin-top: 6px;
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
      padding: 24px 18px;
    }
    .simple-button {
      min-width: 243px;
      @include max(767) {
        min-width: 303px;
      }
    }
  }
}
</style>
