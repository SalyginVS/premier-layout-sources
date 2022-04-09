<template>
  <div class="about_mobile_app_container">
    <div class="main-wrapper">
      <div class="about_mobile_app_container-wrapper">
        <div class="left_image_wrapper">
          <img class="left_img" :src="data.left_image" alt />
          <div class="qr_wrapper">
            <img class="qr" src="~static/images/qr2.svg" alt />
          </div>
          <div v-if="line" class="line-simple"></div>
        </div>
        <div class="spa_description">
          <p class="little_title">{{ data.little_title }}</p>
          <h3>{{ data.black_title }}</h3>
          <h3 class="italic gold_text gold_text_header">
            {{ data.gold_title }}
          </h3>
          <div class="description_wrapper">
            <p class="text_description p1">{{ data.description }}</p>
            <div class="left_image_wrapper text_description-inner-img">
              <img class="left_img" :src="data.left_image" alt />
            </div>
            <ul>
              <li
                v-for="item in data.list"
                :key="item"
                class="a1 mobile_app__benefits"
              >
                <img
                  class="mobile_app__checkpoint"
                  src="~/static/images/circle_check.svg"
                  alt
                />
                <p class="mobile_app__benefit_text">{{ item }}</p>
              </li>
            </ul>
            <GoldButton
              class="app_button"
              :text="data.gold_button"
              v-if="data.gold_button"
            />

            <div class="stores" v-if="shopMobImg">
              <img
                class="stores__link"
                src="~/static/images/google_play.jpg"
                alt
              />
              <img
                class="stores__link"
                src="~/static/images/app_store.png"
                alt
              />
            </div>
          </div>
        </div>
        <LittleRightImage
          :img="data.small_image"
          :isAboutMobileApp="isAboutMobileApp"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ContactsBlock from "~/blocks/globals/ContactsBlock";
import LittleRightImage from "~/components/LittleRightImage";
import GoldButton from "~/components/GoldButton";

export default {
  name: "AboutMobileApp",
  data() {
    return {
      isAboutMobileApp: false,
    };
  },
  props: {
    data: {
      type: Object,
      default: () => ({
        left_image: "",
        little_title: "",
        gold_title: "",
        black_title: "",
        description: "",
        list: [],
        small_image: "",
      }),
    },
    shopMobImg: {
      type: Boolean,
      default: true,
    },
    line: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ContactsBlock,
    LittleRightImage,
    GoldButton,
  },
  created() {
    this.isAboutMobileApp = !this.isAboutMobileApp;
  },
  destroyed() {
    this.isAboutMobileApp = !this.isAboutMobileApp;
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.about_mobile_app_container {
  padding-bottom: 311px;
  padding-top: 164px;

  @include max(lg) {
    padding-top: 124px;
    padding-bottom: 125px;
  }

  @include max(md) {
    padding-top: 112p;
    padding-bottom: 112px;
  }

  @include max(sm) {
    padding-top: 80px;
    padding-bottom: 48px;
  }
}
.about_mobile_app_container-wrapper {
  position: relative;
  display: flex;
}
.left_image_wrapper {
  position: relative;
  display: flex;
  padding: 61px 0 0 100px;

  @include max(lg) {
    padding: 36px 0 0 90px;
    img {
      width: 32vw;

      @include max(730) {
        width: 36vw;
      }
    }
  }
  @include max(md) {
    padding: 36px 72px 0 48px;
  }
  @include max(730) {
    padding: 36px 30px 0 30px;
  }
  @include max(sm) {
    display: none;
  }

  //margin-right: 30px;

  .line-simple {
    top: unset;
    left: unset;
    right: -71px;
    bottom: 40px;

    @include max(lg) {
      width: 270px;
      right: -31px;
      bottom: 70px;
    }

    @include max(md) {
      width: 217px;
      right: -17px;
      bottom: 75px;
    }

    @include max(730) {
      width: 217px;
      right: -54px;
      bottom: 75px;
    }
  }
}
.qr_wrapper {
  z-index: 20;
  margin: auto 0 90px 0;
  padding: 18px 18px 18px 32px;
  background: #f0edea;

  @include max(lg) {
    padding: 13px 13px 13px 20px;
  }

  @include max(md) {
    display: none;
  }

  img {
    @include max(lg) {
      width: 46px;
      height: 46px;
    }
  }
}
.spa_description {
  width: 630px;

  h3 {
    @include max(1300) {
      font-size: 56px;
    }

    @include max(lg) {
      font-size: 40px;
    }

    @include max(md) {
      font-size: 32px;
    }

    @include max(sm) {
      margin-left: 18px;
    }
    //
  }
}
.little_title {
  margin-bottom: 32px;

  @include max(lg) {
    margin-bottom: 23px;
  }

  @include max(md) {
    margin-bottom: 12px;
  }

  @include max(sm) {
    margin-left: 18px;
    margin-bottom: 16px;
  }
}
.description_wrapper {
  max-width: 422px;
  margin: 0 auto;

  @include max(lg) {
    max-width: 368px;
    margin: 0;
    margin-left: 50px;
  }

  @include max(md) {
    max-width: 326px;
    margin: 0;
    margin-left: 20px;
  }

  @include max(sm) {
    max-width: none;
    width: -webkit-fill-available;
    margin: 0 18px;
  }

  .left_image_wrapper {
    display: none;

    @include max(sm) {
      display: block;
      padding: 0;
      width: min-content;
      margin: 0 auto;
      margin-bottom: 48px;

      img {
        height: 600px;
        width: auto;
      }
    }
  }
}
.text_description {
  margin: 72px auto 42px;

  @include max(lg) {
    margin: 40px auto 42px;
  }

  @include max(sm) {
    margin: 20px auto 32px;
  }
}
.mobile_app__benefits {
  display: flex;

  &:not(:last-child) {
    margin-bottom: 24px;

    @include max(lg) {
      margin-bottom: 20px;
    }
  }

  @include max(md) {
    width: 256px;
  }

  @include max(sm) {
    width: 100%;
  }
}
.mobile_app__checkpoint {
  margin-right: 14px;

  @include max(lg) {
    margin-right: 10px;
  }

  @include max(md) {
    margin-right: 16px;
  }

  @include max(sm) {
    margin-right: 14px;
  }
}
.mobile_app__benefit_text {
  margin-top: 2px;
}
.app_button {
  width: fit-content;
  margin-top: 66px;

  @include max(lg) {
    display: none;
  }
}
.stores {
  img {
    &:not(:last-child) {
      margin-right: 17px;
    }
  }
  @include min(lg) {
    display: none;
  }



  margin-top: 65px;

  @include max(md) {
    margin-top: 56px;
  }

  @include max(sm) {
    margin-top: 48px;
  }
}
.little_img_wrapper {
  transform: translateY(50%);
  @include max(lg) {
    display: none;
  }
}
</style>


