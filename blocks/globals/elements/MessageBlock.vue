<template>
  <div v-if="!isPopupShown" class="message-block" ref="btn" :class="{ 'fixed-position': fixedPosition, 'button-shown-below': isButtonShown }">
    <div class="wrapper">
      <img src="~/static/icons/message.svg" alt="icon" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "MessageBlock",

  props: {},
  data() {
    return {
      fixedPosition: false,
      isButtonShown: false
    };
  },
  computed: {
    ...mapState({
      isPopupShown: state => state.modals.isMainMenuOpen,
    })
  },
  methods: {
    setTopByPage(pageName, footer, body) {
      switch(pageName) {
        case 'one_hotel':
          return (body - footer + 310)
        case 'resraurants_and_bars':
          return (body - footer - 190)
        case 'one_restaurant':
          return (body - footer - 190)
        default:
          return (body - footer - 80)
      }
    },
    scrollHeaderVis() {

        let bodyHeight = document.body.clientHeight

        this.$nuxt.$on('button-hidden:in-footer', ({footer, page}) => {
          if (window.innerWidth < 1024) {
            this.fixedPosition = true

            this.$refs.btn.style.top = this.setTopByPage(page, footer, bodyHeight) + 'px'
          }
        })

        this.$nuxt.$on('button-shown', ({page}) => {
          if (window.innerWidth < 1024) {
            this.fixedPosition = false
            const localHeigth = window.scrollY < (this.$device.isIos ? 180 : 120)
            this.isButtonShown = page === 'one_hotel' && localHeigth ? false : true
            this.$refs.btn.style = ''
          }
        })

        this.$nuxt.$on('button-hidden', () => {
          if (window.innerWidth < 1024) {
            this.isButtonShown = false
          }
        })

    },
  },
  mounted() {
    this.scrollHeaderVis();

    if ( window.innerWidth >= 1024 ) {
      this.$refs.btn.classList.add('desktop-button')
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";

.message-block {
  position: fixed;
  right: 23px;
  top: calc(100vh - 90px);
  width: 67px;
  height: 67px;
  padding: 9px;
  display: flex;
  border: 1px solid rgba(#ffffff, 0.16);
  border-radius: 100%;
  cursor: pointer;
  transition: transform 0.3s linear;
  z-index: 10000;
  mix-blend-mode: difference;
  @include max(lg) {
    right: 16px;
    top: unset;
    bottom: 50px;
    width: 56px;
    height: 56px;
    padding: 7px;
  }
  &:hover {
    transform: scale(1.2);
  }
  .wrapper {
    width: 100%;
    height: 100%;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    background-color: rgba(#ffffff, 0.24);
    border-radius: 100%;
    img {
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      @include max(lg) {
        width: 16px;
        height: 15px;
      }
    }
  }
}
.fixed-position {
  position: absolute;
}

.button-shown-below {
  bottom: 65px;
  top: unset;
}

.desktop-button {
  bottom: 25px;
}
</style>
