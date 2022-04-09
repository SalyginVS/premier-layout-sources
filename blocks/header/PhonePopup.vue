<template>
  <div id="contact_popup" class="contact_popup popup" >
    <div class="info_block">
      <p class="a1">phones booking</p>
      <a 
        href="tel:+38 044 359 08 08"
        class="a1"
        :class="{faded: isLinkFaded}"
        @mouseenter="fadeLinkOnHover"
        @mouseleave="unfadeLinkOnMouseleave"
      >
        +38 044 359 08 08
      </a>
      <a
        href="tel:+38 044 590 69 80"
        class="a1"
        :class="{faded: isLinkFaded}"
        @mouseenter="fadeLinkOnHover"
        @mouseleave="unfadeLinkOnMouseleave"
      >
        +38 044 590 69 80
      </a>
    </div>

    <div class="info_block">
      <p class="a1">hotel phone</p>
      <a
        href="tel:+38 044 590 69 71"
        class="a1"
        :class="{faded: isLinkFaded}"
        @mouseenter="fadeLinkOnHover"
        @mouseleave="unfadeLinkOnMouseleave"
      >
        +38 044 590 69 71
      </a>
      <a
        href="tel:+38 044 359 05 92 "
        class="a1"
        :class="{faded: isLinkFaded}"
        @mouseenter="fadeLinkOnHover"
        @mouseleave="unfadeLinkOnMouseleave"
      >
        +38 044 359 05 92
      </a>
    </div>

    <div class="info_block">
      <a
        href="mailto:pr@phnr.com"
        class="a1"
        :class="{faded: isLinkFaded}"
        @mouseenter="fadeLinkOnHover"
        @mouseleave="unfadeLinkOnMouseleave"
      >
        pr@phnr.com
      </a>
    </div>
    <div class="info_block info_line"></div>
    <div class="icons_wrapper socials">
      <a href="https://www.google.com.ua/" target="_blank" :class="{faded: isLinkFaded}"
        @mouseenter="fadeLinkOnHover"
        @mouseleave="unfadeLinkOnMouseleave"
      >
        <img src="~/static/images/G+_re_black.svg" alt />
      </a>
      <a href="https://www.facebook.com/" target="_blank" :class="{faded: isLinkFaded}"
        @mouseenter="fadeLinkOnHover"
        @mouseleave="unfadeLinkOnMouseleave"
      >
        <img src="~/static/images/fb_black.svg" alt />
      </a>
      <a href="https://twitter.com/" target="_blank" :class="{faded: isLinkFaded}"
        @mouseenter="fadeLinkOnHover"
        @mouseleave="unfadeLinkOnMouseleave"
      >
        <img src="~/static/images/twi_black.svg" alt />
      </a>
      <a href="https://www.instagram.com/" target="_blank" :class="{faded: isLinkFaded}"
        @mouseenter="fadeLinkOnHover"
        @mouseleave="unfadeLinkOnMouseleave"
      >
        <img src="~/static/images/insta_black.svg" alt />
      </a>
    </div>
  </div>
</template>

<script>
import fadeLinksMixin from "~/mixins/fade-link-on-hover"
export default {
    name: "PhonePopup",
    mixins: [fadeLinksMixin],
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/utils.scss';

.contact_popup {
  position: absolute;
  right: 0;
  top: calc(100% + 11px);
  // top: calc(100% + 16px);
  padding: 24px;
  padding-right: 16px;
  width: 229px;
  cursor: auto;
  a {
    display: block;
    margin-bottom: 6px;
  }
  p {
    color: #000000;
    opacity: 0.5;
    margin-bottom: 8px;
  }
}
.contact_popup::after {
  right: 16px;
  top: -5px;
}

.info_block {
  @include mb-24;
  /* rr */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  a {
    font-family: AvenirNextCyrMedium;
    transition: opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    &.faded {
      opacity: 0.6;
      &:hover {
        opacity: 1;
      }
    }
  }
  /* rr */
}
.info_line {
  height: 1px;
  background: #000000;
  opacity: 0.1;
}

.icons_wrapper {
  display: flex;
  .app_link:first-of-type {
    margin-right: 48px;
  }
  a {
    margin-bottom: 0;
  }
  .app_link {
    cursor: pointer;
    img {
      margin-right: 12px;
    }
  }
  &.socials {
    display: flex;
    justify-content: flex-start;
    a {
      display: block;
      padding: 4px;
      margin: -4px;
      margin-right: 16px;
      transition: opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      &:last-child {
        margin-right: -4px;
      }
      &.faded {
        opacity: 0.6;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
}

// .socials img {
//   margin-right: 24px;
//   cursor: pointer;
// }
</style>