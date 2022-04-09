<template>
  <div
    class="first_screen_bottom_bar-menu"
    :class="{
      hotel_school_page: isHotelSchoolPage,
      mob_wrapper: isMob
    }"
  >
    <div class="first_screen_bottom_bar-wrapper">
      <div
        class="first_screen_footer_container"
        :class="{
          'position-center': centerPosition
        }"
      >
        <h3 class="first_screen_footer_container-title">{{ title }}</h3>
        <div class="footer_el_wrapper" v-for="el in footer_list" :key="el.id">
          <p class="a1 active_text"  v-if="el.emit" @click="$emit(el.emit)" data-self>
            {{ el.value }}
          </p>
          <p class="a1 without_hover" v-else-if="!el.link">{{ el.value }}</p>
          <p class="a1 active_text" v-else-if="el.link_type === 'internal'">
            <nuxt-link :to="el.link">{{ el.value }}</nuxt-link>
          </p>
          <p class="a1 active_text" v-html="getLinkTag(el)"></p>
          <div class="vertical_line"></div>
        </div>
      </div>
    </div>
    <KebabFooterMob
      v-if="isMob"
      :footer_list="footer_list"
      :getLinkTag="getLinkTag"
      :title="title"
    />
  </div>
</template>

<script>
import KebabFooterMob from "~/blocks/globals/KebabFooterMob";
export default {
  name: "KebabFooter",
  components: {
    KebabFooterMob
  },
  props: {
    footer_list: {
      type: Array,
      default: () => [],
      validator: value => {
        let is_valid = true;
        for (const el of value) {
          if (el.link_type) {
            is_valid =
              ["internal", "href", "tel", "email"].indexOf(el.link_type) !== -1;
            if (!is_valid) break;
          }
        }
        return is_valid;
      }
    },
    centerPosition: {
      type: Boolean,
      default: false
    },
    isMob: {
      type: Boolean,
      default: false
    },
    isHotelSchoolPage: {
      type: Boolean,
      default: false
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
    getLinkTag(link) {
      if (link.link_type === "href") {
        return `<a href="${link.link}" target="_blank">${link.value}</a>`;
      } else if (link.link_type === "tel") {
        return `<a href="tel:${link.link}">${link.value}</a>`;
      } else if (link.link_type === "email") {
        return `<a href="mailto:${link.link}" target="_blank">${link.value}</a>`;
      }
    }
  }
};
</script>
<style>
.first_screen_footer_container a {
  /* cursor: pointer;
  opacity: 0.8; */
  color: #ffffff;
}
</style>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.first_screen_bottom_bar-menu {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mob_wrapper {
  height: 100%;
  .first_screen_bottom_bar-wrapper {
    @include max(767) {
      display: none;
    }
  }
}
.first_screen_bottom_bar-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
}
.vertical_line {
  height: 1px;
  width: 32px;
  margin: 0 24px;
  background: #ffffff;
  opacity: 0.2;
  @include max(lg) {
    margin: 0 16px;
  }
  @include max(1023) {
    width: 20px;
  }
  @include max(sm) {
    margin: 0 8px;
    width: 18px;
  }
  // @include max(375) {
  //   display: none;
  // }
}
.first_screen_footer_container-title {
  display: none;
}
.first_screen_footer_container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .without_hover {
    color: #ffffff;
  }
  .active_text {
    color: #ffffff;
    opacity: 0.6;
    cursor: pointer;
    transition: opacity .4s ease;
  }
  &.position-center {
    @include max(lg) {
      flex-direction: column;
    }
    @include max(sm) {
      flex-direction: row;
      flex-wrap: wrap;
    }
    .vertical_line {
      @include max(lg) {
        display: none;
      }
      @include max(sm) {
        display: inline-block;
      }
    }
    .a1 {
      &:not(:last-child) {
        @include max(lg) {
          margin-bottom: 8px;
        }
        @include max(sm) {
          margin-bottom: 0px;
        }
      }
    }
  }
}
.footer_el_wrapper {
  display: flex;
  align-items: center;
  &:not(:first-child) {
    // opacity: 0.6;
    transition: opacity 0.3s ease-in-out;
    .active_text:hover {
      @media (hover: hover) {
        opacity: 1;
      }
    }
    &:active {
      opacity: 1;
    }
  }
}


.footer_el_wrapper:last-of-type {
  .vertical_line {
    display: none;
  }
}
/** hotel_school_page */
.hotel_school_page {
  .first_screen_bottom_bar-wrapper {
    @include max(710) {
      display: block;
    }
    .first_screen_footer_container {
      @include max(465) {
        width: 170px;
        margin: 0 auto;
        flex-flow: row wrap;
        justify-content: center;
      }
      .footer_el_wrapper {
        .vertical_line {
          @include max(465) {
            display: none;
          }
        }
      }
      .footer_el_wrapper + .footer_el_wrapper {
        @include max(465) {
          margin-top: 16px;
        }
      }
    }
  }
}
/** hotel_school_page */
</style>
