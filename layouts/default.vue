<template>
  <div id="main-layout">
    <menuList />
    <nuxt/>
    <MessageBlock />
    <FooterBlock />
    <SvgSprite />
    <transition name="fade">
      <div
        @click="openBookingModal"
        class="button--gold"
        v-show="isButtonFixed && !isMainMenuOpen"
        :class="{
          button_fixed: isButtonFixed,
          'button-absolute-position': buttonAbsolutePosition
        }"
      >
        Зарезервувати
      </div>
    </transition>
  </div>
</template>

<script>
import FooterBlock from "~/components/FooterBlock";
import menuList from "~/components/menuList";
import SvgSprite from "~/components/SvgSprite";

import { mapState,mapMutations } from "vuex";

export default {
  components: {
    FooterBlock,
    menuList,
    SvgSprite,
  },
  data: () => ({
    isButtonFixed: false,
    buttonAbsolutePosition: false,
  }),
  created() {},
  mounted() {
    this.scrollButtonVisibility()
  },
  methods: {
    ...mapMutations("modals", {
      mOpenBookingModal: "openBookingModal"
    }),
    scrollButtonVisibility() {
      let lastScroll = 0;

      window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0 || currentScroll - lastScroll === 0 || lastScroll - currentScroll === 0) {
          return;
        }

        const windowHeight = window.innerHeight;
        const pageHeight = document.body.scrollHeight;
        const footer = document.getElementById("footer_block").clientHeight;

        const isInFooter = pageHeight - footer - windowHeight + 20 < currentScroll

        if (!isInFooter) {

          this.toggleButton(currentScroll, lastScroll)

        } else {
          this.isButtonFixed = false;
          this.$nuxt.$emit('button-hidden:in-footer', {footer, page: this.$route.name})
        }
        lastScroll = currentScroll;
      });
    },
    openBookingModal() {
      this.mOpenBookingModal();
    },
    toggleButton(currentScroll, lastScroll) {
      if (currentScroll < lastScroll) {
        const localHeigth = window.scrollY < (this.$device.isIos ? 180 : 120)
        this.isButtonFixed = this.$route.name === 'one_hotel' && localHeigth ? false : true

        this.$nuxt.$emit('button-shown', {page: this.$route.name})
      } else {
        this.isButtonFixed = false;
        this.$nuxt.$emit('button-hidden', {page: this.$route.name})
      }
    },
  },
  watch: {},
  computed: {},
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.button--gold {
  height: 53px;
  width: calc(100% - 16px);

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  /* z-index: 11; */
  z-index: 2001;
  transition-duration: 0.4s;
  background: url("../static/images/gold_for_button.svg") no-repeat 100%;
  background-size: cover;

  font-family: "AvenirNextCyrRegular";
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 140%;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #ffffff;

  @include min(sm) {
    display: none;
  }
}

.button_fixed {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 8px;

  -webkit-animation: header-animation 0.4s; /* Safari 4+ */
  -moz-animation: header-animation 0.4s; /* Fx 5+ */
  -o-animation: header-animation 0.4s; /* Opera 12+ */
  animation: header-animation 0.4s; /* IE 10+, Fx 29+ */
}

.button-absolute-position {
  position: absolute;
}

 /* .a1 {
   background: url("../static/images/gold_for_button.svg");
   background-clip: text;
   -webkit-text-fill-color: transparent;
 } */

.button_fixed {
  animation-name: button-animation;
  animation-fill-mode: forwards;
  animation-duration: 500ms;
}

@keyframes button-animation {
  0% {
    transform: translateX(-50%) translateY(200px);
  }
  100% {
    transform: translateX(-50%) translateY(0px);
  }
}
</style>
