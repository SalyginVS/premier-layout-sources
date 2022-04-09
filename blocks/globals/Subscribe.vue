<template>
  <div id="subscribe" class="subscribe" :class="{ light_style }">
    <div class="main-wrapper subscribe_wrapper">
      <div class="subscribe_description">
        <h5>Підпишіться на розсилку</h5>
        <p class="p1">Підтримує за спеціальними пропозиціями</p>
      </div>
      <form>
        <div class="input_wrapper">
          <div
            class="h5 input_wrapper__placeholder"
            :class="{ hidden: !isNotInFocus || emailValue.trim() !== '' }"
            v-html="isMobile() ? 'Підпишіться на розсилку' : 'Твій емейл'"
          ></div>
          <input
            pattern="[A-Za-z]"
            type="text"
            v-model="emailValue"
            @focus="focusInput"
            @blur="blurInput"
          />
          <button class="send_button" @click="sendEmail">
            <img src="~/static/images/send_button_main.svg" alt />
          </button>
        </div>
        <p class="p3">
          Заповнивши форму, я згоден на використання моїх персональних даних
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { globalMixin } from "~/plugins/mixins";
export default {
  name: "Subscribe",
  mixins: [globalMixin],
  data() {
    return {
      emailValue: "",
      isNotInFocus: true
    };
  },
  props: {
    light_style: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    emailValue() {
      // this.emailValue = this.emailValue.replace(/[^\x00-\x7F]+/gi, "");
      this.emailValue = this.emailValue.replace(/[^A-Za-z\d\@\.]/g, "");
    }
  },
  methods: {
    sendEmail(e) {
      e.preventDefault();
    },
    isMobile() {
      return process.client && this.breakpoints < 600;
    },
    focusInput() {
      this.isNotInFocus = false;
    },
    blurInput() {
      this.isNotInFocus = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.subscribe {
  background-color: #f0edea;
  padding: 104px 0 84px;

  @include max(lg) {
    padding-top: 96px;
    padding-bottom: 83px;
  }
  @include max(md) {
    padding: 88px 48px 70px 48px;
  }
  @include max(sm) {
    padding: 80px 18px;
  }
  &_wrapper {
    @include pl-168;
    @include pr-168;
    display: flex;
    justify-content: space-between;
    @include max(md) {
      padding: 0;
    }
  }
  .p3 {
    @include max(md) {
      word-spacing: normal;
    }
  }
}
.light_style {
  background-color: #fff;
}

.subscribe_description {
  @include max(sm) {
    display: none;
  }
  h5 {
    margin-bottom: 4px;
    @include max(lg) {
      margin-bottom: 8px;
    }
  }
  .p1 {
    @include max(1920) {
      opacity: 0.5;
    }
  }
}

form {
  width: 430px;
  @include max(lg) {
    width: 290px;
  }
  @include max(md) {
    width: 260px;
  }
  @include max(sm) {
    width: 100%;
  }
  p {
    width: 390px;
    margin-top: 14px;
    opacity: 0.2;
    @include max(lg) {
      margin-top: 12px;
      width: 100%;
    }
    @include max(md) {
      margin-top: 8px;
    }
    @include max(sm) {
      margin-top: 12px;
    }
  }
}

.input_wrapper {
  position: relative;
  display: flex;
  border-bottom: 1px solid rgba(#000000, 0.1);
  padding-bottom: 10px;
  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    // position: absolute;
    // right: 0;
    // bottom: 8px;
    padding-top: 10px;
    padding-bottom: 10px;
    position: relative;
    bottom: -1px;
    // @include max(lg) {
    // bottom: 6px;
    // }
    img {
      display: block;
      @include max(lg) {
        width: 40px;
      }
    }
  }
}

input {
  background: none;
  border: none;
  outline: none;

  //border-bottom: 1px solid rgba(#000000, 0.1);
  width: 100%;
  //padding-bottom: 20px;
  //height: 54px;
  // @include max(lg) {
  //   height: 45px;
  //   padding-bottom: 16px;
  // }
}
.input_wrapper__placeholder {
  background: url("../../static/images/dark_gold.jpg");
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: absolute;
  bottom: 15px;
  left: 0;
  pointer-events: none;
  transition: 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  font-family: "CormorantRegular";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 110%;

  &.hidden {
    opacity: 0;
    visibility: hidden;
  }
}

// input::placeholder {
//   background: url("../../static/images/gold_bg.jpg");
//   background-clip: text;
//   -webkit-text-fill-color: transparent;
//   position: relative;
//   bottom: -5px;
// }

// input,
// input::placeholder {
//   font-family: CormorantRegular;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 24px;
//   line-height: 110%;
// }
input {
  font-family: CormorantRegular;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 120%;
  letter-spacing: 0.04em;
  color: #735c33;
  @include max(lg) {
    font-size: 20px;
  }
}
</style>
