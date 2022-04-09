<template>
  <div id="about_restaurant" class="main-wrapper">
    <div class="left_image_wrapper">
      <div class="foreground_gradient"></div>
      <img :src="description.image" alt />
      <div v-if="line" class="line-simple"></div>
    </div>
    <div class="descripton_wrapper">
      <h4 v-html="description.title"></h4>

      <div class="second_description_wrapper">
        <div class="long_description">
          <AboutMainDescription
            :text="description.description"
            :maxLength="maxLength"
          />
        </div>
        <ContactsBlock />
        <div class="buttons_wrapper">
          <GoldButton :text="description.gold_button" />

          <template v-if="description.second_button">
            <p class="second_button">
              {{ description.second_button }}
            </p>
            <Button :text="description.second_button" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoldButton from "~/components/GoldButton";
import Button from "~/components/Button";
import ContactsBlock from "~/blocks/globals/ContactsBlock";
import AboutMainDescription from "~/blocks/globals/abouts/AboutMainDescription";

export default {
  name: "AboutBlock",
  components: {
    GoldButton,
    ContactsBlock,
    AboutMainDescription,
    Button
  },
  props: {
    description: {
      type: Object,
      default: () => ({})
    },
    line: {
      type: Boolean,
      default: false
    },
    isSpaAndMassage: {
      type: Boolean,
      default: false
    }
  },
  computed:{
    maxLength(){
      return this.isSpaAndMassage?0:28;
    }
  }
};
</script>
<style lang="scss">
@import "../../../assets/scss/utils.scss";

#about_restaurant {
  .buttons_wrapper {
    > div {
      @include max(700) {
        width: 100%;
        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }
    .gold_button {
      @include max(700) {
        width: 100%;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";

.customWidth {
  width: 120%;
  @include min(1920) {
    width: 140%;
  }
}

#about_restaurant {
  @include mt-140;
  display: flex;
  width: 100%;
  // overflow: hidden;
  @include min(1920) {
    overflow: unset;
  }
  @include max(700) {
    flex-direction: column;
    margin-top: 80px;
  }
  .contact_block {
    padding: 32px 120px 32px 32px;
    @include max(700) {
      padding: 0;
    }
  }
}
.left_image_wrapper {
  width: 46.8vw;
  @include mt-184;
  position: relative;
  @include max(lg) {
    max-width: 424px;
    height: 550px;
  }
  // @include max(1024) {
  //   margin-top: 104px;
  //   height: 520px;
  // }
  @include max(md) {
    min-width: 325px;
    max-width: 326px;
    height: 477px;
    margin-top: 170px;
  }
  @include max(700) {
    width: calc(100% - 18px);
    min-width: unset;
    max-width: unset;
    height: 430px;
    margin-bottom: 32px;
    margin-top: 80px;
  }
  @include max(sm) {
    margin-top: 0px;
  }

  img {
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 1;
    object-fit: cover;
    @include min(1441) {
      max-height: 885px;
    }
    @include max(md) {
      height: 100%;
    }
  }
  .line-simple {
    top: unset;
    left: unset;
    bottom: 90px;
    right: -165px;
    @include max(1024) {
      bottom: -42px;
      right: -83px;
    }
    @include max(768) {
      bottom: -13px;
    }
    @include max(sm) {
      display: none;
    }
  }
}

.foreground_gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  background: linear-gradient(
    217.78deg,
    rgba(255, 255, 255, 0.43) 0%,
    rgba(255, 255, 255, 0) 19.76%
  );
}

.descripton_wrapper {
  position: relative;
  z-index: 10;
  flex-grow: 1;
  @include max(700) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 18px;
  }
}

h4 {
  position: relative;
  width: 688px;
  margin-left: -88px;
  @include max(lg) {
    max-width: 548px;
    margin-left: -80px;
  }
  @include max(md) {
    max-width: 492px;
    margin-left: -100px;
  }
  @include max(768) {
    max-width: 411px;
    margin-left: -120px;
  }
  @include max(700) {
    max-width: unset;
    width: 100%;
    margin-left: 0;
  }
}

.second_description_wrapper {
  padding-left: 146px;
  @include max(lg) {
    padding-left: 60px;
  }
  @include max(md) {
    padding-left: 37px;
  }
  @include max(700) {
    padding-left: 0;
  }
}

.long_description {
  width: 412px;
  @include mt-80;
  @include ml-40;
  @include max(lg) {
    margin-top: 48px;
    max-width: 366px;
  }
  @include max(md) {
    margin-top: 32px;
    max-width: 326px;
  }
  @include max(768) {
    margin-top: 39px;
  }
  @include max(700) {
    margin-top: 24px;
    margin-left: 0;
    max-width: unset;
    width: 100%;
  }
}
.buttons_wrapper {
  display: flex;
  @include mt-64;
  align-items: center;
  padding-left: 40px;
  @include max(md) {
    padding-left: 32px;
    align-items: flex-start;
    flex-direction: column;
  }
  @include max(700) {
    margin-top: 48px;
    padding-left: 0;
  }
}
.second_button {
  opacity: 0.5;
  @include max(lg) {
    margin-left: 32px;
  }
  @include max(md) {
    margin-left: 0px;
    margin-top: 32px;
  }
  @include max(700) {
    display: none;
  }
}
.simple-button {
  display: none;
  @include max(700) {
    display: flex;
  }
}
</style>
