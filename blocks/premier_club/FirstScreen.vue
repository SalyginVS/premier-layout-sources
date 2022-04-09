<template>
  <div
    id="fitnes_and_spa_first_screen"
    :style="`background-image: url('${first_data.img}')`"
  >
    <div class="first_screen_text" :class="{ indent }">
      <h1 v-html="first_data.title"></h1>
      <div class="description_wrapper">
        <div class="description_left">
          <KebabHeader v-if="kebubHeader" :header_list="header_list" />
        </div>
        <div class="description_right">
          <p class="p1 first_screen_decription">{{ first_data.description }}</p>

          <div class="first_screen_button">
            <svg
              width="20"
              height="30"
              viewBox="0 0 17 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                opacity="1"
                x1="0.565878"
                y1="28.7519"
                x2="16.5659"
                y2="0.75193"
                stroke="white"
              />
            </svg>
            <p class="p1">
              {{ first_data.button }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlashButton from "~/components/SlashButton";
import KebabHeader from "~/blocks/globals/KebabHeader";
//static info
import { header_type_one } from "~/assets/js_static_data/headers_first_screens";

export default {
  props: {
    first_data: {
      type: Object,
      default: () => ({}),
    },
    kebubHeader: {
      type: Boolean,
      default: false,
    },
    indent: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    SlashButton,
    KebabHeader,
  },
  data: () => ({
    header_list: header_type_one,
  }),
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

#fitnes_and_spa_first_screen {
  height: 100vh;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 74.42%,
      rgba(0, 0, 0, 0.54) 100%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 55.51%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: soft-light, normal, normal, normal, normal;
  padding-top: 81px;
  display: flex;
  align-items: center;
  justify-content: center;
  //   position: relative;

  @include max(lg) {
    min-height: 768px;
  }

  @include max(md) {
    min-height: 640px;
  }

  @include max(sm) {
    min-height: 635px;
  }
}

.first_screen_text {
  // padding-left: 199px;
  width: 937px;
  margin: 0 auto;
  //padding-right: 400px;
  margin-left: auto;
  &.indent {
    h1 {
      text-align: right;
      margin-bottom: 47px;
    }
  }
  h1 {
    max-width: 80vw;
    text-align: left;
    margin-bottom: 47px;

    @include max(lg) {
      margin-bottom: 40px;
    }
    @include max(md) {
      margin-bottom: 32px;
    }
    @include max(sm) {
      max-width: 100%;
      width: 100%;
      margin-bottom: 24px;
      margin-right: 0;
    }
  }
  .first_screen_decription {
    width: 356px;
    margin-bottom: 61px;
    margin-right: -170px;
  }

  @include max(lg) {
    padding-right: 0;
    width: 702px;
    margin: 0 auto;
  }

  @include max(md) {
    width: 567px;
  }

  @include max(sm) {
    width: -webkit-fill-available;
    margin: 0 18px;
  }
}
h1,
p {
  color: #ffffff;
}
.description_wrapper {
  display: flex;
  justify-content: space-between;

  @include max(sm) {
    flex-wrap: wrap;
  }
}
.description_left {
  display: flex;
  align-items: center;
  height: fit-content;

  @include max(lg) {
  }

  @include max(md) {
    display: none;
  }

  @include max(sm) {
    display: block;
    margin-bottom: 24px;
  }
}
.description_right {
  .first_screen_decription {
    margin-right: 0;
    @include max(lg) {
      width: 290px;
      margin-bottom: 56px;
    }
    @include max(md) {
      width: 281px;
      margin-bottom: 32px;
    }
    @include max(sm) {
      width: 100%;
      margin-bottom: 0px;
    }
  }
  .first_screen_button {
    cursor: pointer;
    @include min(lg) {
      display: none;
    }
    @include max(lg) {
      display: inline-flex;
      .p1 {
        margin-left: 18px;
        margin-top: 4px;
      }
    }
    @include max(md) {
      .p1 {
        margin-left: 12px;
      }
    }
    @include max(sm) {
      display: none;
    }
  }

  @include max(lg) {
    margin-left: auto;
  }
  @include max(sm) {
    margin-left: 0;
  }
}
.stars {
  img {
    width: 13px;
    margin-right: 8px;
  }
}
.bottom_bar {
  position: absolute;
  left: 55px;
  bottom: 33px;
  display: flex;
  align-items: center;
  p {
    cursor: pointer;
  }
}
</style>
