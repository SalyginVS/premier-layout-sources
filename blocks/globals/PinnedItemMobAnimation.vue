<template>
  <div
    id="pinned-item-mob"
    :class="{ hotel_school_page: isHotelSchoolPage }"
    ref="pinnedContainerHeight"
  >
    <div class="pinned-item-mob__list">
      <div class="pin-overlay" :style="pinOverlay">
        <div
          class="pinned-item_content"
          ref="pinnedHeader"
          :style="stop ? styles : ''"
          :class="{ fixedHeader: scrolled, stop: stop }"
        >
          <p class="little_title">{{ newData[active].little_title }}</p>
          <h3 class="title">
            <span class="gold_text italic">{{
              newData[active].title_big.gold_title
            }}</span>
            {{ newData[active].title_big.black_title }}
          </h3>
          <p class="p1 description">
            {{ newData[active].description_text }}
          </p>
          <SlashButton
            v-show="
              newData[active].details_button ||
                newData[active].two_buttons.gold_button
            "
            :text="
              newData[active].details_button ||
                newData[active].two_buttons.gold_button
            "
            :link="
              newData[active].details_button_href ||
                newData[active].two_buttons.gold_button_href
            "
          />
        </div>
      </div>

      <div
        class="pinned-item-mob__list-item"
        v-for="(elem, index) in newData"
        :key="index"
      >
        <img
          class="pinned-item_img"
          :src="elem.image_mob || elem.image"
          :alt="elem.title_big.gold_title"
          ref="images"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SlashButton from "~/components/SlashButton";

export default {
  name: "PinnedItemMob",
  components: {
    SlashButton
  },
  props: {
    data: {
      type: [Object, Array]
    },
    isHotelSchoolPage: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.pinnedOverlay = this.$refs.pinnedHeader?.clientHeight;
    this.breakpoints = this.$refs.images.map(item => {
      return item.offsetTop;
    });
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data: () => ({
    active: 0,
    scrolled: false,
    stop: false,
    pinnedOverlay: 0,
    // currentScroll: 25,
    breakpoints: null,
    H: null
  }),
  computed: {
    newData() {
      if (this.data.length) {
        return this.data;
      } else {
        return [this.data];
      }
    },
    pinOverlay() {
      return {
        height: `${this.pinnedOverlay}px`
      };
    },
    styles() {
      return {
        position: "relative",
        top: `${this.H}px`
      };
    }
  },
  methods: {
    handleScroll() {
      const { pinnedContainerHeight, images } = this.$refs;
      const start = pinnedContainerHeight?.offsetTop;
      const currentScroll = window.pageYOffset;
      const diffH = this.breakpoints[0] - start;
      this.H =
        pinnedContainerHeight?.clientHeight -
        images[2]?.clientHeight -
        this.pinnedOverlay;

      const imgChangeContentArea = this.$refs.images[0].clientHeight / 4 + 4;

      if (currentScroll >= start) {
        this.scrolled = true;

        if (currentScroll + diffH >= this.breakpoints[2]) {
          this.stop = true;
        } else {
          this.stop = false;
        }
      } else {
        this.scrolled = false;
      }

      if (
        currentScroll + diffH >= this.breakpoints[1] - imgChangeContentArea &&
        currentScroll + diffH <= this.breakpoints[2] - imgChangeContentArea
      ) {
        this.active = 1;
      } else if (currentScroll + diffH >= this.breakpoints[2] - imgChangeContentArea) {
        this.active = 2;
      } else {
        this.active = 0;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.pin-overlay {
  position: relative;
}
.fixedHeader {
  // position: absolute;
  // position: sticky;
  position: fixed;
  top: 0;
  background: #fff;
  z-index: 20;
}

.stop {
  position: relative;
}

/**hotel_school_page */
.hotel_school_page {
  .pinned-item-mob__list-item {
    @include max(700) {
      display: flex;
      flex-flow: row wrap-reverse;
    }
  }
}
/**hotel_school_page */
#pinned-item-mob {
  display: flex;
  flex-direction: column;
  background-color: #fbfbfb;
  .pinned-item_content {
    height: 420px;
    display: flex;
    flex-direction: column;
    padding: 40px 18px 40px 18px;
    .little_title {
      margin-bottom: 10px;
    }
    .title {
      margin-bottom: 20px;
    }
    .description {
      margin-bottom: 68px;
    }
  }
  .pinned-item_img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
}
</style>
