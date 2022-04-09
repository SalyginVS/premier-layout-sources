<template>
  <div class="slider-description main-wrapper" :class="{ descr_indents , 'fitnes_and_spa' : data.fitnes_and_spa }">
    <p v-if="data.little_title" class="little_title">{{ data.little_title }}</p>
    <div class="slider_description">
      <div class="filters">
        <!-- <p class="a1" v-for="filter in description.filters" :key="filter">
          {{ filter }}
        </p> -->
        <div class="add-info" v-if="data.addedInfo">
          <p class="a1">13 кращих тренерів</p>
        </div>
        <div class="select-blocks" v-if="data.filters">
          <template v-if="breakpoints > 770">
            <SelectBlockWithPlus
              v-for="item in data.filters"
              :key="item.id"
              :name="item.name"
              :options="item.options"
              @change="item.type = $event.value"
            />
          </template>

          <template v-else>
            <SelectBlockWithPlus
              :name="'фільтри'"
              @change="item.type = $event.value"
            />
          </template>
        </div>
      </div>

      <h3 v-if="data.big_title">{{ data.big_title }}</h3>

      <div v-if="data.link || data.linkNoDesktop" class="go_to_button_wrapper">
        <UnderlineButton
          v-if="breakpoints > 770"
          :text="data.link"
          :link="data.linkHref"
          class="go_to_button"
        />

        <UnderlineButton
          v-else
          :text="data.linkMob || data.link"
          :link="data.linkHref"
          class="go_to_button"
        />
        <!-- UnderLineButton breakpoints was '<1200' set to '<1920' '>600' set to '>375' to make the component visible on screen 375 -->

        <UnderlineButton
          v-if="breakpoints > 600"
          :text="data.linkNoDesktop"
          :link="data.linkHref"
          class="go_to_button"
        />


        <!-- <nuxt-link
          to="/"
          v-if="breakpoints > 770"
          class="button_all_button a1 go_to_button"
          >{{ data.link }}</nuxt-link
        > -->
        <!-- <nuxt-link to="/" v-else class="button_all_button a1 go_to_button">
          {{ data.linkMob || data.link }}
        </nuxt-link> -->
      </div>
    </div>
    <p
      v-if="data.description"
      class="p1 text_description"
      v-html="description"
    ></p>
  </div>
</template>

<script>
import { globalMixin } from "~/plugins//mixins";
import UnderlineButton from "~/components/UnderlineButton";

export default {
  name: "SliderDescription",
  mixins: [globalMixin],
  components: {
    UnderlineButton,
  },

  props: {
    data: Object,

    meetingFilterMore: {
      type: Boolean,
      default: false,
    },
    descr_indents: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    description() {
      return this.data.description_mob
        ? this.breakpoints <= 767
          ? this.data.description_mob
          : this.data.description
        : this.data.description;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
//fitnes and spa styles

.slider-description {
  position: relative;

  &.descr_indents {
    .text_description {
      @include max(lg) {
        margin-bottom: 40px;
      }
      @include max(sm) {
        margin-bottom: 32px;
      }
    }
  }
}
.little_title {
  text-align: center;
  margin-bottom: 20px;
  @include max(lg) {
    margin-bottom: 17px;
  }
  @include max(md) {
    margin-bottom: 13px;
  }
  @include max(sm) {
    margin-bottom: 10px;
  }
}
.slider_description {
  grid-template-columns: 300px 1fr 300px;
  @include mb-24;
  @include max(lg) {
    grid-template-columns: 200px 1fr 200px;
    margin-bottom: 32px;
  }
  @include max(md) {
    grid-template-columns: 140px 1fr 140px;
    padding: 0 48px;
  }
  @include max(sm) {
    grid-template-columns: 0px 1fr 0px;
    padding: 0 18px;
    margin-bottom: 20px;
  }
  .select-blocks {
    position: absolute;
    display: flex;
    width: fit-content;
    z-index: 10;
    /* rr */
    flex-wrap: wrap;
    max-width: 300px;
    @include max(lg) {
      max-width: 280px;
    }
    /* rr */
    @include max(sm) {
      display: none;
    }
  }
  .go_to_button_wrapper {
    justify-self: end;
    @include max(sm) {
      display: none;
    }
  }
  .select-wrapper {
    width: fit-content;
    // min-width: 65px;

    &:not(:last-child) {
      margin-right: 36px;
      @include max(lg) {
        margin-right: 27px;
      }
    }
    .description.description_position_V3 {
      white-space: nowrap;
    }
  }
}
.filters p {
  font-weight: 600;
}
.add-info {
  @include max(sm) {
    display: none;
  }
  .a1 {
    font-weight: 400;
  }
}
.text_description {
  // opacity: 0.5;
  color: rgba($color: #000000, $alpha: 0.5);
  margin: auto;
  width: 557px;
  /* rr */
  word-break: normal;
  width: 639px;
  /* rr */
  @include mb-80;
  text-align: center;
  @include max(lg) {
    width: 500px;
    margin-bottom: 40px;
  }
  @include max(1024) {
    word-break: break-all;
    width: 350px;
    margin-bottom: 32px;
  }
  @include max(sm) {
    padding: 0 16px;
    width: 100%;
  }
}


.go_to_button {
  position: relative;
  white-space: nowrap;
}
</style>
