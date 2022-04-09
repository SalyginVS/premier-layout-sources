<template>
  <div
    id="restaurant_description"
    class="main-wrapper"
    :class="{ 'position-indet': positionIndet, isWeddingPage: isWeddingPage }"
  >
    <div class="about-image_wrapper">
      <img :src="data.image" alt />
      <div v-if="line" class="line-simple"></div>
    </div>
    <div class="rest_and_bars_description">
      <div class="top_description">
        <h4 v-html="data.title"></h4>
        <AboutMainDescription :text="data.description" :maxLength="30" />
      </div>
      <div class="about_hotel_wrapper">
        <ContactsBlock v-if="has_contacts" />
        <ul v-if="data.options" class="options_wrapper">
          <li class="option a1" v-for="option in data.options" :key="option.id">
            <p
              @click="toggleItem(option)"
              class="title"
              :class="{ 'open-title': activeOption == option }"
            >
              {{ option.title }}
            </p>
            <div class="description" :class="{ open: activeOption == option }">
              <p class="p2_light">{{ option.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ContactsBlock from "~/blocks/globals/ContactsBlock";
import AboutMainDescription from "~/blocks/globals/abouts/AboutMainDescription";

export default {
  name: "AboutBlockTypeThree",
  props: {
    data: {
      type: Object,
      default: () => ({
        image: "",
        title: "",
        description: "",
      }),
    },
    has_contacts: {
      type: Boolean,
      default: false,
    },
    line: {
      type: Boolean,
      default: false,
    },
    positionIndet: {
      type: Boolean,
      default: false,
    },
    isWeddingPage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeOption: null,
    };
  },
  components: {
    ContactsBlock,
    AboutMainDescription,
  },
  methods: {
    toggleItem(option) {
      if (this.activeOption == option) {
        this.activeOption = null;
        return;
      }
      this.activeOption = option;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";
.isWeddingPage {
}
#restaurant_description {
  display: flex;
  align-items: center;
  @include mt-140;
  background-color: #fbfbfb;
  @include max(sm) {
    flex-direction: column;
    align-items: flex-start;
  }
  &.position-indet {
    align-items: flex-start;
    .rest_and_bars_description {
      //padding-top: 122px;
    }
  }
}
.about-image_wrapper {
  position: relative;
  @include max(sm) {
    margin-bottom: 32px;
  }
  img {
    width: 42.36vw;
    position: relative;
    z-index: 1;
    object-fit: cover;
    @include min(1441) {
      width: 610px;
    }
    @include max(lg) {
      max-width: 576px;
    }
    @include max(sm) {
      max-width: unset;
      width: calc(100% - 18px);
      height: 430px;
    }
  }
  .line-simple {
    left: unset;
    right: -240px;
    top: 100px;
    @include max(lg) {
      right: -150px;
      top: 160px;
    }
    @include max(md) {
      right: -120px;
      top: 60px;
    }
    @include max(sm) {
      display: none;
    }
  }
}

.rest_and_bars_description {
  padding-left: 105px;
  @include max(lg) {
    padding-left: 60px;
  }
  @include max(md) {
    padding-left: 37px;
  }
  @include max(sm) {
    padding: 0 18px;
  }
}
h4 {
  @include mb-40;
}

.about_hotel_wrapper {
  display: flex;
  justify-content: space-between;
  .litlle_right_image {
    width: 343px;
  }
}

.top_description {
  padding-right: 164px;
  padding-left: 40px;
  @include max(lg) {
    padding-right: 136px;
  }
  @include max(md) {
    padding-left: 32px;
    padding-right: 49px;
  }
  @include max(sm) {
    padding: 0;
  }
  .details {
    margin-left: 6px;
    font-weight: 600;
    display: inline-block;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: 2px;
      width: 100%;
      height: 1px;
      background: black;
      display: block;
    }
  }
  h4 {
    @include max(sm) {
      margin-bottom: 18px;
    }
  }
}

.options_wrapper {
  @include mt-64;
  padding: 54px;
  width: 100%;
  background: #f0edea;

  @include max(lg) {
    background: none;
    margin-top: 40px;
    padding: 0 40px;
  }

  @include max(md) {
    padding: 0 32px;
    margin-top: 32px;
  }

  @include max(sm) {
    margin-top: 24px;
    padding: 0;
  }

  .option {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 29px;
    opacity: 0.8;
    overflow: hidden;

    @include max(lg) {
      margin-bottom: 20px;
    }

    @include max(md) {
      &:nth-child(even) {
        margin-bottom: 24px;
      }
    }

    @include max(sm) {
      margin-bottom: 24px;
    }

    &:last-of-type {
      margin-bottom: 0px;
    }
    .title {
      padding-left: 20px;
      cursor: pointer;
      position: relative;
      display: flex;
      align-items: center;

      @include max(sm) {
        padding-left: 16px;
      }

      &::before {
        content: "+";
        position: absolute;
        left: 0;
        top: 45%;
        text-align: center;
        transform: translateY(-50%);
        font-size: 14px;
        transition-property: transform;
        transition-duration: 500ms;
        transform-origin: 41% 56%;
      }

      &:hover::before {
        transform: translateY(-50%) rotate(180deg);
      }
      &.open-title {
        &::before {
          content: "";
          top: 46.5%;
          left: 1.5px;
          width: 7px;
          height: 1.5px;
          background-color: #000000;
          transition: none;
        }
        &:hover::before {
          transform: translateY(-50%);
        }
      }
    }
    .description {
      margin-top: 0;
      padding-left: 20px;
      max-width: 76%;
      text-transform: initial;
      opacity: 0.8;
      max-height: 0;
      overflow: hidden;
      transition-property: max-height, margin-top;
      transition-duration: 500ms, 0s;
      transition-delay: 0ms, 300ms;
      &.open {
        margin-top: 12px;
        max-height: 100vh;
        transition-delay: 0ms, 0ms;
      }
    }
  }
}
</style>
