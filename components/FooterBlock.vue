<template>
  <div id="footer_block">
    <div class="main-wrapper">
      <div class="footer_top">
        <div class="insta_block" v-if="footerInstaBlock">
          <div class="insta_image_wrapper" v-for="img in 13" :key="img">
            <div class="insta_info" v-if="img === 3">
              <p class="p1">
                <img src="~/static/icons/heart.svg" alt="" />
                150
              </p>
              <p class="p1">
                <img src="~/static/icons/msg.svg" alt="" />
                25
              </p>
            </div>
            <a href="/" class="a1 insta_link" v-if="img === 10">
              @premierhotels
            </a>
            <img :src="require(`~/static/footer-img/foo${img}.jpg`)" alt />
          </div>
        </div>

        <div class="footer_middle_block">
          <div class="footer_middle__left">
            <div class="footer_premier footer_column">
              <div class="block_wrapper">
                <p class="middle_title a1">PREMIER</p>
                <nuxt-link
                  v-for="link in premier"
                  tag="a"
                  class="p1 link_in_column"
                  :key="link.id"
                  :to="link.link"
                  >{{ link.name }}</nuxt-link
                >
              </div>

              <div class="bottom_block_wrapper bottom_block_wrapper-app">
                <p class="middle_title a1">мобільний додаток</p>
                <div class="icons_wrapper">
                  <p class="p1 app_link">
                    <img src="~/static/images/apple_icon.svg" alt />
                    IOS
                  </p>
                  <p class="p1 app_link">
                    <img src="~/static/images/android_icon.svg" alt />
                    Android
                  </p>
                </div>
                <nuxt-link to="/mobile_app" class="more_about_app p1">
                  Більше про додаток
                </nuxt-link>
              </div>
            </div>
            <div class="footer_contacts footer_column">
              <div class="block_wrapper">
                <p class="middle_title a1">КОНТАКТИ</p>
                <nuxt-link
                  v-for="link in contacts"
                  tag="a"
                  class="p1 link_in_column"
                  :key="link.id"
                  :to="link.link"
                  >{{ link.name }}</nuxt-link
                >
              </div>

              <div class="bottom_block_wrapper">
                <p class="middle_title a1">Ми в соціальних мережах</p>
                <div class="icons_wrapper socials">
                  <a
                    href="https://www.google.com.ua/"
                    target="_blank"
                    :class="{ faded: isLinkFaded }"
                    @mouseenter="fadeLinkOnHover"
                    @mouseleave="unfadeLinkOnMouseleave"
                  >
                    <img src="~/static/images/google_icon.svg" alt />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    :class="{ faded: isLinkFaded }"
                    @mouseenter="fadeLinkOnHover"
                    @mouseleave="unfadeLinkOnMouseleave"
                  >
                    <img src="~/static/images/fb_red copy.svg" alt />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    :class="{ faded: isLinkFaded }"
                    @mouseenter="fadeLinkOnHover"
                    @mouseleave="unfadeLinkOnMouseleave"
                  >
                    <img src="~/static/images/twi_red copy.svg" alt />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    :class="{ faded: isLinkFaded }"
                    @mouseenter="fadeLinkOnHover"
                    @mouseleave="unfadeLinkOnMouseleave"
                  >
                    <img src="~/static/images/insta_red copy.svg" alt />
                  </a>
                </div>
              </div>
            </div>
            <div class="footer_business footer_column">
              <div class="block_wrapper">
                <p class="middle_title a1">ДЛЯ БІЗНЕСУ</p>
                <nuxt-link
                  v-for="link in business"
                  tag="a"
                  class="p1 link_in_column"
                  :key="link.id"
                  :to="link.link"
                  >{{ link.name }}</nuxt-link
                >
              </div>
            </div>
            <div class="footer_business footer_column footer_column__mob">
              <p class="middle_title a1">соціальні мережі</p>
              <div class="icons_wrapper socials">
                <a href="https://www.google.com.ua/" target="_blank">
                  <img src="~/static/images/google_icon.svg" alt />
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                  <img src="~/static/images/fb_red copy.svg" alt />
                </a>
                <a href="https://twitter.com/" target="_blank">
                  <img src="~/static/images/twi_red copy.svg" alt />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  <img src="~/static/images/insta_red copy.svg" alt />
                </a>
              </div>
            </div>
            <div
              class="footer_business footer_column footer_column__mob footer_column__mob-app"
            >
              <p class="middle_title a1">мобільний додаток</p>

              <nuxt-link to="/mobile_app" class="more_about_app p1">
                Більше про додаток
              </nuxt-link>
              <div class="icons_wrapper">
                <a href="/">
                  <img src="~/static/icons/googlePlay.svg" alt />
                  <span> IOS </span>
                </a>
                <a href="/">
                  <img src="~/static/icons/appStore.svg" alt />
                  <span> Android </span>
                </a>
              </div>
            </div>
          </div>

          <div class="footer_middle__right">
            <div class="image_wrapper">
              <div class="image_wrapper_foreground">
                <p class="a1">premier club magazine #17 summer 2019</p>
                <img
                  class="left-img-logo"
                  src="~/static/icons/premier-logo-footer.svg"
                  alt="icon"
                />
              </div>
            </div>
            <div class="download_shop">
              <nuxt-link to="/" class="p1">Завантажити</nuxt-link>
              <nuxt-link to="/" class="p1">Відкрити</nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <div class="footer_bottom">
        <p class="p3">
          © 2003–2019, Готелі та курорти PREMIER.
          <span>Політика конфіденційності</span>
        </p>
        <a href="https://thefirstthelast.agency/" class="footer_developer_link">
          <img src="~/static/images/tftl.svg" alt="the first the last" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import fadeLinksMixin from "~/mixins/fade-link-on-hover";

export default {
  name: "FooterBlock",
  mixins: [fadeLinksMixin],
  props: {},
  data: () => ({
    premier: [
      {
        id: 0,
        name: "Про нас",
        link: "/"
      },
      {
        id: 1,
        name: "Бренди",
        link: "/brands"
      },
      {
        id: 2,
        name: "Блог",
        link: "/our_blog"
      },
      {
        id: 3,
        name: "Брендові продукти",
        link: "/"
      },
      {
        id: 4,
        name: "Соціальна відповідальність",
        link: "/"
      }
    ],
    contacts: [
      {
        id: 0,
        name: "Зв'язатиcя з нами",
        link: "/contacts"
      },
      {
        id: 1,
        name: "Змінити бронювання",
        link: "/"
      },
      {
        id: 2,
        name: "Залишити відгук",
        link: "/make_review"
      },
      {
        id: 3,
        name: "Кар'єра",
        link: "/"
      },
      {
        id: 4,
        name: "Постачальникам",
        link: "/suppliers"
      }
    ],
    business: [
      {
        id: 0,
        name: "Управління та франчайзинг",
        link: "/managmant_and_franchising"
      },
      {
        id: 1,
        name: "Консалтинг",
        link: "/consulting"
      },
      {
        id: 2,
        name: "Школа готельєрів",
        link: "/hotel_school"
      }
    ]
  }),
  computed: {
    ...mapState(["footerInstaBlock"])
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";

#footer_block {
  background-image: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 68.93%),
    linear-gradient(0deg, rgba(16, 16, 16, 0.98), rgba(16, 16, 16, 0.98)),
    url("../static/images/footer_bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 0 58px;
  @include max(md) {
    padding: 0 48px;
  }
  @include max(sm) {
    padding: 0 16px;
  }

  .main-wrapper {
    max-width: 1920px;
  }
}
.footer_top {
  padding: 58px 0 91px;
  @include max(lg) {
    padding: 48px 0 70px;
  }
  @include max(md) {
    padding: 40px 0 64px;
  }
  @include max(sm) {
    padding: 48px 0;
  }
}
.insta_block {
  height: 264px;
  width: 100%;
  margin-bottom: 104px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-auto-rows: minmax(131px, auto);
  grid-template-areas:
    "cl-1 cl-3 cl-3  cl-4 cl-6 cl-8 cl-10 cl-10 cl-13 cl-13"
    "cl-2 cl-3 cl-3  cl-5 cl-7 cl-9 cl-11 cl-12 cl-13 cl-13 ";
  @include max(lg) {
    height: 220px;
    margin-bottom: 95px;
    grid-template-columns: repeat(8, 1fr);
    grid-auto-rows: minmax(110px, auto);
    grid-template-areas:
      "cl-1 cl-3 cl-3  cl-4 cl-6  cl-10 cl-10 cl-8"
      "cl-2 cl-3 cl-3  cl-5 cl-7  cl-11 cl-12 cl-9 ";
  }
  @include max(md) {
    height: 220px;
    margin-bottom: 88px;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: minmax(110px, auto);
    grid-template-areas:
      "cl-1 cl-3 cl-3  cl-4  cl-10 cl-10 "
      "cl-2 cl-3 cl-3  cl-5  cl-11 cl-12 ";
  }
  @include max(sm) {
    display: none;
  }

  .insta_image_wrapper {
    position: relative;
    overflow: hidden;
    cursor: pointer;

    // width: 10%;
    border: 1px solid rgba(0, 0, 0, 0);
    &:nth-child(1) {
      grid-area: cl-1;
    }
    &:nth-child(2) {
      grid-area: cl-2;
    }
    &:nth-child(3) {
      grid-area: cl-3;
      display: flex;
      align-items: center;
      justify-content: center;
      .insta_info {
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        @include max(lg) {
          display: none;
        }
        .p1 {
          display: flex;
          align-items: center;
          color: white;
          &:not(:last-child) {
            margin-right: 24px;
          }
          img {
            position: static;
            width: 11px;
            height: 10px;
            margin-right: 10px;
          }
        }
      }
    }
    &:nth-child(4) {
      grid-area: cl-4;
    }
    &:nth-child(5) {
      grid-area: cl-5;
    }
    &:nth-child(6) {
      grid-area: cl-6;
      @include max(md) {
        display: none;
      }
    }
    &:nth-child(7) {
      grid-area: cl-7;
      @include max(md) {
        display: none;
      }
    }
    &:nth-child(8) {
      grid-area: cl-8;
      @include max(md) {
        display: none;
      }
    }
    &:nth-child(9) {
      grid-area: cl-9;
      @include max(md) {
        display: none;
      }
    }
    &:nth-child(10) {
      grid-area: cl-10;
      filter: gray; /* IE6-9 */
      -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
      filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
      display: flex;
      align-items: center;
      justify-content: center;
      .insta_link {
        z-index: 1;
        color: #ffffff;
      }
    }
    &:nth-child(11) {
      grid-area: cl-11;
    }
    &:nth-child(12) {
      grid-area: cl-12;
    }
    &:nth-child(13) {
      grid-area: cl-13;
      @include max(lg) {
        display: none;
      }
    }

    &:hover {
      img {
        transform: scale(1.1);
        transition-duration: 0.65s;
        will-change: transform;
      }
    }
    img {
      will-change: transform;
      transition-duration: 0.65s;
      transform: scale(1);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}

.footer_middle_block,
.footer_middle__left {
  display: flex;
}

.footer_middle_block {
  justify-content: space-between;

  p,
  a {
    color: #ffffff;
  }
  a {
    display: block;
  }
}

.link_in_column {
  opacity: 0.5;
  margin-bottom: 8px;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  @media (hover: hover) {
    &:hover {
      opacity: 1;
    }
  }

  @include max(lg) {
    opacity: 0.8;
    color: red;
  }
  @include max(md) {
    opacity: 0.5;
    color: red;
  }
}
.footer_middle__left {
  width: 70%;
  @include max(lg) {
    width: 80%;
  }
  @include max(md) {
    width: 100%;
  }
  @include max(sm) {
    flex-wrap: wrap;
  }
}
.footer_column {
  // width: 33.33333%;
  padding-left: 90px;
  @include max(lg) {
    padding-left: 80px;
  }
  @include max(md) {
    padding-left: 89px;
  }
  @include max(sm) {
    padding-left: 25px;
    width: 50%;
  }
  &.footer_column__mob {
    display: none;
    @include max(sm) {
      display: block;
    }
    &.footer_column__mob-app {
      width: 100%;
      .more_about_app {
        margin-bottom: 24px;
      }
      .icons_wrapper {
        margin-bottom: 0;
        a {
          width: 131px;
          height: 40px;
          &:not(:last-child) {
            margin-right: 20px;
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
.footer_column:first-of-type {
  padding-left: 0;
}
.footer_column:nth-of-type(odd) {
  @include max(sm) {
    padding-left: 0;
  }
}
.footer_column {
  @include max(sm) {
    margin-bottom: 48px;
  }
  &:last-of-type,
  &:nth-last-of-type(2) {
    @include max(sm) {
      margin-bottom: 0;
    }
  }
}
.middle_title {
  @include mb-24;
}
.bottom_block_wrapper {
  margin-top: 57px;
  @include max(lg) {
    margin-top: 46px;
  }
  @include max(md) {
    margin-top: 40px;
  }

  @include max(sm) {
    display: none;
  }
}
.icons_wrapper {
  display: flex;
  margin-bottom: 8px;
  span {
    @include max(md) {
      display: none;
    }
  }
  .app_link:first-of-type {
    margin-right: 48px;
    @include max(lg) {
      margin-right: 24px;
    }
  }
  .app_link {
    cursor: pointer;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
    img {
      margin-right: 12px;
      @include max(lg) {
        margin-right: 8px;
      }
    }
  }
  p {
    color: rgba(255, 255, 255, 0.5);

    @include max(lg) {
      color: rgba(255, 255, 255, 0.8);
    }

    @include max(md) {
      color: rgba(255, 255, 255, 0.5);
    }
  }
}
.socials {
  //margin-right: 24px;
  //cursor: pointer;
  //transition: opacity 0.3s ease-in-out;
  // &:hover {
  //   opacity: 0.5;
  // }
  // @include max(lg) {
  //   margin-right: 20px;
  // }
  a {
    padding: 4px;
    margin: -4px;
    margin-right: 16px;
    transition: opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    &:last-child {
      margin-right: 0;
    }
    &.faded {
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }
  }
}

.footer_middle__right {
  width: 232px;
  border-image: url("../static/images/footer_side.jpg") 30 round;
  @include max(lg) {
    width: 164px;
    height: 215px;
  }
  @include max(md) {
    display: none;
  }
  .image_wrapper_foreground {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url("../static/images/gold_border_image.svg");
    padding: 14px 21px;
    cursor: pointer;
    @include max(lg) {
      padding: 6px 10px;
      background-size: cover;
    }

    .left-img-logo {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      @include max(lg) {
        width: 58.72px;
        height: 29.81px;
      }
    }
  }
  .image_wrapper {
    width: 100%;
    height: 307px;
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 8.21%,
        rgba(0, 0, 0, 0) 37.62%
      ),
      linear-gradient(0deg, rgba(0, 0, 0, 0.5) 4.91%, rgba(0, 0, 0, 0) 31.6%),
      linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url("../static/images/footer_side.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    box-shadow: 0px 2px 18px rgba(0, 0, 0, 0.06);
    transition: background-size 0.3s ease-in-out;
    @include max(lg) {
      height: 217px;
    }
    &:hover {
      background-size: 120%;
    }
  }
}
.download_shop {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  @include max(lg) {
    margin-top: 12px;
  }
  .p1 {
    color: #ffffff;
    margin: 0 10px;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
    @include max(lg) {
      margin: 0 9px;
    }
    &:hover {
      opacity: 1;
    }
  }
}
.footer_bottom {
  width: 100%;
  margin: auto;
  //padding: 16px 0 12px;
  padding: 14px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @include max(lg) {
    //padding: 19px 0;
    padding: 15px 0 25px;
  }
  @include max(md) {
    //padding: 15px 0;
    padding: 12px 0;
  }

  @include max(sm) {
    padding: 14px 0;
  }
  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% + 96px);
    height: 1px;
    background-color: rgba(#ffffff, 0.2);
    @include max(lg) {
      width: 100%;
    }
    @include max(md) {
      width: calc(100% + 16px);
    }
    @include max(sm) {
      width: calc(100% + 4px);
    }
  }
  img {
    @include max(lg) {
      width: 64px;
      height: 22px;
    }
  }

  p {
    color: rgba(255, 255, 255, 0.2);
    //opacity: 0.2;
    @include max(sm) {
      width: 64%;
    }
  }

  span {
    // text-decoration: underline;
    border-bottom: 1px solid rgba(255, 255, 255, 0.16);
    cursor: pointer;
    transition: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    &:hover {
      color: rgba(255, 255, 255, 0.6);
    }
  }
}
.more_about_app {
  cursor: pointer;
  opacity: 0.5;
  /* rr */
  font-weight: 300;
  transition: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  /* rr */
  &:hover {
    opacity: 1;
  }
}
.footer_developer_link {
  display: block;
  max-width: 81px;
  max-height: 26px;
  opacity: 0.8;
  transition: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    opacity: 1;
  }
  @include max(1439) {
    max-width: 65px;
    max-height: 22px;
    height: 22px;
  }
  & > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: right center;
  }
}
</style>
