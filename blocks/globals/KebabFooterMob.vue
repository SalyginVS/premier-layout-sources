<template>
  <div class="first_screen_bottom_bar-wrapper__mob">
    <div class="first_screen_footer_btn-wrapper" @click="toggleKebabMenuStatus">
      <div v-if="title" class="first_screen_footer_btn a1">{{ title }}</div>
      <svg
        width="7"
        height="7"
        viewBox="0 0 7 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.29327 3.2929L3.46484 6.12133L0.636417 3.2929"
          stroke="white"
          stroke-width="0.6"
        />
      </svg>
    </div>
    <transition name="fade">
    <div v-if="kebabMenuStatus" class="first_screen_bottom_bar-wrapper">
      <div
        class="first_screen_bottom_bar-btn-wrapper"
        @click="toggleKebabMenuStatus"
      >
        <svg
          width="7"
          height="7"
          viewBox="0 0 7 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="first_screen_bottom_bar-arrow"
        >
          <path
            d="M6.29327 3.2929L3.46484 6.12133L0.636417 3.2929"
            stroke="black"
            stroke-width="0.6"
          />
        </svg>
        <div class="first_screen_bottom_bar-btn a1">НАЗАД</div>
      </div>

      <div class="first_screen_footer_container">
        <h3 class="first_screen_footer_container-title h-three">{{ title }}</h3>
        <div class="footer_el_wrapper" v-for="el in listItem" :key="el.id">
          <p class="p1" v-if="!el.link">{{ el.value }}</p>
          <p class="p1" v-else-if="el.link_type === 'internal'">
            <nuxt-link :to="el.link">{{ el.value }}</nuxt-link>
          </p>
          <p class="p1" v-html="getLinkTag(el)"></p>
        </div>
      </div>
    </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "KebabFooterMob",
  props: {
    footer_list: {
      type: Array,
      default: () => []
    },
    getLinkTag: {
      type: Function,
      default: () => {}
    },
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      kebabMenuStatus: false
    };
  },
  methods: {
    toggleKebabMenuStatus() {
      console.log(this.footer_list);
      console.log("click");
      this.kebabMenuStatus = !this.kebabMenuStatus;
    }
  },
  computed:{
    listItem(){
      this.footer_list.map((elem)=>{
        let item=elem.value.toLowerCase().split("").map((elem,index)=>{
          if(index===0){
            return elem.toUpperCase();
          }
          return elem;
        });
        elem.value=item.join("");
        return elem;
      });

      return this.footer_list;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.first_screen_bottom_bar-wrapper__mob {
  height: 100%;
  cursor: pointer;
  display: none;
  @include max(767) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .first_screen_bottom_bar-wrapper {
    position: fixed;
    display: block;
    opacity: 1;
    width: calc(100% - 8px);
    z-index: 10000;
    top: 4px;
    left: 4px;
    right: 4px;
    bottom: 4px;
    padding: 32px 20px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.04)),
      #ffffff;
    transition: opacity 1s ease;
  }
}
.first_screen_bottom_bar-btn-wrapper {
  display: flex;
  align-items: center;
  width: fit-content;
  .first_screen_bottom_bar-btn {
    margin-left: 12px;
  }
}
.first_screen_footer_container-title {
  margin: 40px 0;
}

.first_screen_footer_btn-wrapper {
  display: none;
  @include max(767) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 18px;

    .first_screen_footer_btn {
      color: #ffffff;
      opacity: 1;
    }
  }
}
.footer_el_wrapper + .footer_el_wrapper {
    margin-top: 10px;
  }
  .first_screen_bottom_bar-arrow {
  transform: rotate(90deg) translateX(-1px);
}
</style>
