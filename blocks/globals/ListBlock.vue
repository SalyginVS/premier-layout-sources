<template>
  <div
    class="restaurant_list-wrapper"
    :class="{
      'our-blog': isOurBlog,
      'our-blog-events': isOurBlogEvents,
      'restaurants-and-bars': isRestaurantsAndBars,
    }"
  >
      <div class="line-simple"></div>

    <div
      class="restaurant_list main-wrapper"
      :class="{ 'light-mode': lightMode }"
    >
      <nuxt-link
        to="/"
        class="restaurant"
        :class="{ little_info, position_images }"
        v-for="foreground in foreGroundItems"
        :key="foreground.id"
        @mouseenter.native.self.stop="showInfo"
        @mouseleave.native.self.stop="hideInfo"
      >
        <div
          class="back-img"
          :style="{
            backgroundImage: `${backImgGradient}, url(${foreground.img})`,
          }"
        ></div>
        <div class="label_wrapper">
          <SaleLabel :text="labelValue || 'Замовити столик'" v-if="label" />
        </div>

        <div class="foreground_wrapper">
          <div class="foreground">
            <div class="visible_part_wrapper">
              <h4>{{ foreground.name }}</h4>
              <div class="info_wrapper" v-if="little_info">
                <p class="p1">{{ foreground.woking_time }}</p>
                <div class="vertical_line"></div>
                <p class="p1">{{ foreground.type }}</p>
              </div>

              <div class="hidden_part" ref="hidden_part">
                <p class="p1 description_text">{{ foreground.description }}</p>
                <div class="slah_button_wrapper">
                  <SlashButton
                    text="Дізнайтеся більше"
                    :mode="isMobile ? 'dark' : 'light'"
                    :link="foreground.link"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="foreground.id === 1"
          :class="{ hide: noLine }"
          class="line-simple"
        ></div>
      </nuxt-link>

      <div v-if="!isOurBlogEvents" class="all_news_wrapper">
        <SlashButton text="всі зустрічі та події" :link="link"/>
      </div>
    </div>
    <Pagination v-if="isOurBlogEvents" :perPage="paginationInfo.perPage" :pagesBeforeDots="paginationInfo.pagesBeforeDots"/>
  </div>
</template>

<script>
import SaleLabel from "~/components/SaleLabel";
import SlashButton from "~/components/SlashButton";

export default {
  name: "RestaurantList",
  components: {
    SaleLabel,
    SlashButton,
  },
  props: {
    foregrounds: {
      type: Array,
      default: () => [],
    },
    label: {
      type: Boolean,
      default: true,
    },
    labelValue: {
      type: String,
      default: "",
    },
    little_info: {
      type: Boolean,
      default: true,
    },
    lightMode: {
      type: Boolean,
      default: false,
    },
    position_images: {
      type: Boolean,
      default: false,
    },
    noLine: {
      type: Boolean,
      default: false,
    },
    isOurBlog: {
      type: Boolean,
      default: false,
    },
    isOurBlogEvents: {
      type: Boolean,
      default: false,
    },
    isRestaurantsAndBars: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      default: null,
    },
    paginationInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    hidden_block_height: 0,
    isBlockAnimationEnabled: true,
    isMobile: true,
  }),
  methods: {
    showInfo(e) {
      if (!this.isBlockAnimationEnabled) return;
      let visible_part_wrapper = e.target.querySelector(
        ".visible_part_wrapper"
      );
      visible_part_wrapper.style.transform = `translateY(0)`;
    },
    hideInfo(e) {
      if (!this.isBlockAnimationEnabled) return;

      let visible_part_wrapper = e.target.querySelector(
        ".visible_part_wrapper"
      );
      let hidden_part = e.target.querySelector(".hidden_part");
      visible_part_wrapper.style.transform = `translateY(${hidden_part.offsetHeight}px)`;
    },

    handleResize() {
      this.isBlockAnimationEnabled = process.client && window.innerWidth > 1200;
      this.isMobile = process.client && window.innerWidth < 650;

      let visible_part_wrapper = document.querySelectorAll(
        ".visible_part_wrapper"
      );
      for (let el of visible_part_wrapper) {
        let hidden_part = el.querySelector(".hidden_part");
        el.style.transform = `translateY(${
          this.isBlockAnimationEnabled ? hidden_part.offsetHeight : 0
        }px)`;
      }
    },
  },
  computed:{
    backImgGradient(){
      return this.isOurBlog&&this.isMobile?'linear-gradient(  180deg,  rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)':'linear-gradient(  180deg,  rgba(0, 0, 0, 0) 2.6%, rgba(0, 0, 0, 0.16) 100%)';
    },
    foreGroundItems() {
      return this.isOurBlog && this.isMobile
        ? this.foregrounds.slice(0, 2)
        : this.foregrounds;
    },
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  mounted() {
    console.log(this.paginationInfo);
    console.log(this.foregrounds);
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

/* rr */
.restaurants-and-bars{
  background-color: #F0EDEA;
}
/* rr */

.restaurant_list {
  padding: 148px 0;
  @include pl-168;
  @include pr-168;
  //@include mt-140;
  // background-image: url("../../static/images/bars_bg.svg");
  background-repeat: no-repeat;
  background-position: center bottom 124px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @include min(1600) {
    padding-left: 60px;
    padding-right: 60px;
  }
  @include max(lg) {
    padding-top: 124px;
    padding-bottom: 124px;
  }
  @include max(md) {
    padding: 112px 48px;
  }
  @include max(sm) {
    padding: 80px 18px;
    flex-direction: column;
  }
}
.light-mode {
  background: transparent;
}
.restaurant {
  position: relative;
  width: calc(50% - 36px);
  height: 45.7vw;
  max-height: unset;
  margin-bottom: 72px;
  display: flex;
  z-index: 1;
  @include min(1600) {
    max-height: 658px;
  }
  @include max(lg) {
    height: 450px;
    width: calc(50% - 24px);
    margin-bottom: 48px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  @include max(md) {
    height: 390px;
    width: calc(50% - 22px);
    margin-bottom: 44px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  @include max(sm) {
    width: 100%;
    height: auto;
    margin-bottom: 48px;
    flex-direction: column;
  }

  .back-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @include max(sm) {
      position: relative;
      display: block;
      //height: 432px;
      height: calc(432 / 375 * 100vw);
      left: -18px;
    }
  }
  &:nth-of-type(odd) {
    .back-img {
      @include max(sm) {
        left: unset;
        right: -18px;
      }
    }
  }
  h4 {
    color: #ffffff;
    margin-bottom: 4px;
    @include max(lg) {
      margin-bottom: 0;
    }
    @include max(sm) {
      color: #000000;
      margin-bottom: 10px;
    }
  }
  p {
    color: #ffffff;
    @include max(sm) {
      color: #000000;
    }
  }
}

.foreground_wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @include max(lg) {
    padding: 24px 30px;
  }
  @include max(md) {
    padding: 20px 28px;
  }
  @include max(sm) {
    margin-top: -58px;
    position: relative;
    background: #ffffff;
    height: fit-content;
  }
}

.restaurant {
  &:nth-of-type(2n) {
    // transform: translateY(70px);
    transform: translateY(56%);
    @include max(sm) {
      transform: unset;
    }
  }
  .line-simple {
    top: -75px;
    left: -125px;
    z-index: -1;
    // @include max(md) {
    //   top: 20px;
    //   left: -80px;
    // }
    @include max(lg) {
      width: 250px;
      top: 20px;
      left: -75px;
    }
    @include max(sm) {
      display: none;
    }
    &.hide {
      display: none;
    }
  }
  &.position_images {
    &:nth-of-type(2n) {
      transform: translateY(70px);

      @include max(sm) {
        transform: translateY(0px);
      }
    }
  }
}

img.background {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.label_wrapper {
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
  @include max(lg) {
    display: none;
  }
}

.visible_part_wrapper {
  transition: transform 0.5s ease;
}
.hidden_part {
  opacity: 0;
  transition: opacity 0.5s ease;
  @include max(lg) {
    opacity: 1;
  }
}

.restaurant:hover {
  .label_wrapper {
    opacity: 1;
  }
  .hidden_part {
    opacity: 1;
  }
}

.info_wrapper {
  display: flex;
  align-items: center;
  @include max(lg) {
    display: none;
  }
  @include max(sm) {
    display: flex;
  }
  p {
    opacity: 0.8;
  }
}

.vertical_line {
  background: #ffffff;
  opacity: 0.4;
  margin: 0px 15px;
  width: 1px;
  height: 14px;
  @include max(sm) {
    margin: 0px 8px;
    background: #000000;
    opacity: 0.4;
  }
}

.description_text {
  padding-top: 28px;
  max-width: 390px;
  @include max(lg) {
    padding-top: 16px;
    max-width: 290px;
  }
  @include max(md) {
    padding-top: 12px;
    max-width: 100%;
  }
  @include max(sm) {
    padding-top: 20px;
    padding-right: 34px;
  }
}

.slah_button_wrapper {
  @include mt-64;
  @include max(lg) {
    margin-top: 32px;
  }
  @include max(md) {
    margin-top: 24px;
  }
}

.all_news_wrapper {
  display: none;
}
/** our blog page */
.restaurant_list-wrapper {
  position: relative;
  &.our-blog,
  &.our-blog-events {
    .restaurant {
      @include max(sm) {
      }
    }
  }
}
.restaurant_list-wrapper {
  &.our-blog,
  &.our-blog-events {
    .restaurant {
      @include max(sm) {
        height: 431px;
        display: flex;
        flex-flow:row;
        align-items: flex-end;
        margin-bottom:32px;
      }
    }
    .back-img {
      @include max(sm) {
        left: unset;
        right: unset;
        position: absolute;
        height: 100%;
      }
    }
    .foreground_wrapper{
      @include max(sm){
        background: unset;
        margin-top:0;
        color:#ffffff;
        padding:20px 20px 67px;
      }
      h4,.p1{
        @include max(sm){
          color:#ffffff;
        }
      }
      .slah_button_wrapper{
        @include max(sm){
          display: none;
        }
      }
    }
    .all_news_wrapper{
      @include max(sm){
        display: block;
        margin-top:25px;
      }
      .slash_button{
        @include max(sm){
          margin:0 auto;
        }
      }
    }
  }
}

.line-simple {
  left: auto;
  bottom: auto;
  right: 400px;
  top: 500px;

  @include max(lg) {
    right: 330px;
    top: 490px;
  }
  @include max(md) {
    right: 220px;
    top: 470px;
  }

  @include max(sm) {
    display: none;
  }
}
/** our blog page */
</style>
