<template>
  <div
    id="pinnedBlock"
    :class="{ background_dark, meeting_and_events: meeting_and_events }"
    class="main-wrapper"
  >
    <div class="pinned_wrapper" id="pinned_description" ref="descriptionWrapper" :class="{[propClass]: propClass}">
      <div ref="imageDescription" class="pinned_description">
        <transition name="fade" mode="out-in">
          <div class="description_block" :key="current_block">
            <p class="little_title">{{ currentBlock.little_title }}</p>

            <div
              class="title_big_wrapper"
              v-if="currentBlock.title_big.one_line_title"
            >
              <h3
                :class="{
                  italic: !currentBlock.title_big.one_line_title_no_italic,
                }"
              >
                <span
                  class="gold_text"
                  :class="{
                    italic: currentBlock.title_big.one_line_title_no_italic,
                  }"
                  >{{ currentBlock.title_big.gold_title }}</span
                >
                {{ currentBlock.title_big.black_title }}
              </h3>
            </div>
            <div class="title_big_wrapper" v-else>
              <h3 class="gold_text italic">
                {{ currentBlock.title_big.gold_title }}
              </h3>
              <h3>{{ currentBlock.title_big.black_title }}</h3>
            </div>

            <p class="p1 text_description">
              {{ currentBlock.description_text }}
            </p>
            <BenefitsOptions v-if="currentBlock.option" />

            <div class="button_wrapper" v-if="currentBlock.two_buttons">
              <GoldButton
                :big_size="resizeGoldBtn"
                :text="currentBlock.two_buttons.gold_button"
                :link="currentBlock.two_buttons.gold_button_href"
                @buttonClick="buttonClick(currentBlock.two_buttons.gold_button_emit)"
              />
              <p class="a1 second_button">
                {{
                  isMobile
                    ? currentBlock.two_buttons.second_button_adap
                    : currentBlock.two_buttons.second_button
                }}
              </p>
            </div>
            <SlashButton
              v-if="currentBlock.details_button"
              :text="currentBlock.details_button"
              :link="currentBlock.details_button_href"
            />
          </div>
        </transition>
      </div>
    </div>

    <div class="scrolled_image_wrapper">
      <div
        ref="dishes"
        class="dishes"
        v-for="el in pinned_elements"
        :key="el.id"
      >
        <img :src="el.image" :data-id="el.id" ref="scrollimage" />
        <div v-if="el.id === 0 && slideLine" class="line-simple"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Deferred } from "~/helpers/deferred";
import GoldButton from "~/components/GoldButton";
import SlashButton from "~/components/SlashButton";
import BenefitsOptions from "~/blocks/globals/BenefitsOptions";

export default {
  name: "PinnedBlock",
  components: {
    GoldButton,
    SlashButton,
    BenefitsOptions,
  },
  props: {
    propClass: {
      type: String,
      default: ''
    },
    pinned_elements: {
      type: Array,
      default: {},
    },
    slideLine: {
      type: Boolean,
      default: false,
    },

    background_dark: {
      type: Boolean,
      default: false,
    },
    meeting_and_events: {
      type: Boolean,
      default: false,
    },
    isMeetingAndEvents: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    current_block: 0,
    windowWidth: null,
    images: [],
  }),
  methods: {
    buttonClick(emit) {
      this.$emit(emit);
    },
    imagesLoaded(images) {
      const deferred = new Deferred();

      let imagesLoadedCount = 0;
      let imageLoaded = () => {
        imagesLoadedCount++;

        if (imagesLoadedCount === images.length) {
          deferred.resolve();
        }
      };

      if (images.length > 0) {
        images.forEach((img) => {
          if (img.complete) {
            imageLoaded();
          } else {
            img.onload = () => imageLoaded();
            img.onerror = () => imageLoaded();
          }
        });
      } else {
        deferred.resolve();
      }

      return deferred.promise;
    },

    async initBlockPinning() {
      const { imageDescription, dishes } = this.$refs;

      const images = dishes
        .map((x) => x.querySelector("img"))
        .filter((x) => !!x);
      await this.imagesLoaded(images);

      this.images = images
    },
  },
  computed: {
    currentBlock() {
      if (this.windowWidth > 650) {
        return this.pinned_elements[this.current_block];
      } else {
        return this.pinned_elements[0];
      }
    },
    isMobile() {
      return this.windowWidth <= 1200;
    },
    resizeGoldBtn() {
      console.log(this.windowWidth);
      return this.windowWidth <= 425 ? true : false;
    },
  },
  mounted() {
    this.$refs.descriptionWrapper.style = `top: ${window.innerHeight / 4}px`

    this.initBlockPinning();

    if (process.client) {
      this.windowWidth = window.innerWidth;
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });


      window.addEventListener("scroll", () => {
        this.images.forEach((image, i) => {
          if (image.getBoundingClientRect().top < 550) {
            this.current_block = i
          }
        })
      });
    }
  },
  destroyed() {
    window.removeEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.45s ease;
}
#pinnedBlock {
  padding-left: 168px;
  padding-bottom: 131px;
  display: flex;
  justify-content: space-between;
  background-color: #f0edea;
  &.background_dark {
    background-color: #f0edea;
  }
  @include max(lg) {
    padding-left: 134px;
    padding-bottom: 124px;
  }
  @include max(md) {
    padding-left: 48px;
    padding-bottom: 112px;
  }
  @include max(sm) {
    padding: 0;
    margin: 0;
    flex-direction: column;
    background-color: unset;
  }
}
.pinned_wrapper {
  margin-top: 325px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &--top {
    margin-top: 225px;
  }


  @include max(md) {
    padding-right: 88px;
  }
  @include max(md) {
    padding-right: 0;
  }

  @media (min-width: 769px) {
    margin-bottom: 152px;
    position: sticky;
  }
}

#pinned_description {

  @include max(lg) {
    margin-top: 121px;
  }
  @include max(md) {
    margin-top: 112px;
  }
  @include max(sm) {
    margin-top: 0;
  }
}
.pinned_description {
  height: auto;
  @include max(sm) {
    width: 100%;
  }
}
.description_block {
  @include max(lg) {
    width: 368px;
  }
  @include max(md) {
    width: 257px;
  }
  @include max(sm) {
    padding: 32px 18px 32px;
    display: none;

    &:first-child {
      width: 100%;
      display: block;
    }
    display: none;
  }
}
.little_title {
  margin-bottom: 23px;
  @include max(lg) {
    margin-bottom: 16px;
  }
}
.text_description {
  width: 444px;
  margin-top: 40px;
  @include max(lg) {
    width: 360px;
  }
  @include max(md) {
    width: 100%;
    // max-height: 88px;
    // overflow: auto;
    margin-top: 32px;
  }
  @include max(md) {
    margin-top: 10px;
  }
}
.second_button {
  opacity: 0.5;
  @include max(md) {
    margin-left: 0;
    margin-top: 24px;
  }
}
.button_wrapper {
  display: flex;
  align-items: center;
  margin-top: 60px;
  @include max(lg) {
    margin-top: 64px;
  }
  @include max(md) {
    margin-top: 56px;
    flex-direction: column;
    align-items: flex-start;
  }
  @include max(sm) {
    width: fit-content;
    margin: 32px 0 0;
    align-items: center;
  }
  @include max(425) {
    width: 100%;
  }
}
.slash_button {
  margin-top: 72px;
}
.scrolled_image_wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .dishes {
    position: relative;
    @include mt-140;
    .line-simple {
      top: 130px;
      left: -175px;

      @include max(1024) {
        top: 78px;
        left: -117px;
      }
      @include max(768) {
        top: 60px;
        left: -100px;
      }
    }
    &:nth-child(1) {
      padding-right: 72px;
      @include max(lg) {
        margin-top: 121px;
      }
      @include max(md) {
        margin-top: 112px;
        padding-right: 48px;
      }
      @include max(sm) {
        margin-top: 0;
        width: 100%;
        padding-right: 0;
      }
    }
    &:nth-child(2) {
      padding-right: 56px;
      @include max(lg) {
        margin-top: 96px;
      }
      @include max(md) {
        margin-top: 88px;
        padding-right: 18px;
      }
      @include max(sm) {
        display: none;
      }
      img {
        max-width: 540px;
        max-height: 724px;
        min-width: 100%;
        height: 100%;

        @include max(lg) {
          min-width: 100%;
          max-width: 335px;
          height: 100%;
          max-height: 458px;
        }
        @include max(md) {
          max-width: 326px;
          max-height: 414px;
        }
      }
    }
    &:nth-child(3) {
      padding-right: 134px;
      @include max(lg) {
        padding-right: 89px;
        margin-top: 96px;
      }
      @include max(md) {
        padding-right: 48px;
        margin-top: 88px;
      }
      @include max(sm) {
        display: none;
      }
      img {
        height: 100%;
        min-width: 100%;
        max-width: 540px;
        max-height: 724px;
        @include max(lg) {
          max-width: 335px;

          max-height: 458px;
        }
        @include max(md) {
          max-width: 311px;
          max-height: 414px;
        }
      }
    }
    img {
      position: relative;
      z-index: 1;
      object-fit: cover;
      //display: block;
      //max-height: 90vw;
      max-width: 586px;
      max-height: 786px;
      transition: filter 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      @include max(lg) {
        max-width: 368px;
        max-height: 498px;
      }
      @include max(md) {
        max-width: 326px;
        max-height: 414px;
      }
      @include max(sm) {
        max-height: 375px;
        min-width: 100%;
      }
    }

    // img:nth-of-type(1) {
    //   padding-right: 72px;
    // }
    // img:nth-of-type(2) {
    //   padding-right: 56px;
    // }
    // img:nth-of-type(3) {
    //   padding-right: 134px;
    // }
  }
}

.chb_bg {
  filter: brightness(0.5);
}
.chb_bg {
  filter: grayscale(1) brightness(0.5);
}

.meeting_and_events {
  .button_wrapper {
    @include max(sm) {
      width: 100%;
    }
  }

}
.pinned_wrapper .gold_button {
  @include max(sm) {
    min-height: 100%;
  }
}
</style>
