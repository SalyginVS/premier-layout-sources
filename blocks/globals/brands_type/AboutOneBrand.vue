<template>
  <div
    id="about_restaurant"
    :class="{
      style_config,
      inverse,
      managment_and_franchising_page: isManagmentAndFranchisingPage,
      premier_corp_club: isPremier_corp_club
    }"
  >
    <div class="main-wrapper">
      <div class="classic_description">
        <div class="left_image_wrapper">
          <div class="foreground_gradient"></div>
          <img :src="description.image" alt />
        </div>
        <div class="descripton_wrapper">
          <h4 class="top_title top_title--wide" v-html="description.title"></h4>

          <div class="second_description_wrapper">
            <!-- <p class="long_description p1">{{ description.description }} <span> Детальніше </span> </p> -->

            <AboutMainDescription
              class="long_description p1"
              :text="description.description"
              :maxLength="30"
            />

            <div
              class="contact_block"
              v-if="description.hotels"
              :class="{ details_is_open }"
            >
              <p class="a1" v-for="hotel in hotelsList" :key="hotel">
                {{ hotel }}
              </p>
            </div>

            <p
              class="a1 details"
              @click="openText"
              v-if="description.hotels && description.hotels.length > 3"
            >
              {{ detailsMsg }}
            </p>

            <div
              class="contact_block contact_block-info"
              v-if="description.info"
            >
              <p
                v-for="el in description.info"
                :key="el.id"
                class="a1 info-link"
                v-html="getLinkTag(el)"
              ></p>
            </div>

            <div class="points" v-if="description.points">
              <div
                class="point_wrapper"
                v-for="point in description.points"
                :key="point.name"
              >
                <p class="gold_text point">{{ point.count }}</p>
                <p class="point_name a1">{{ point.name }}</p>
              </div>
              <!-- <div class="point_wrapper">
              <p class="gold_text point">02</p>
              <p class="point_name a1">країни</p>
            </div>
            <div class="point_wrapper">
              <p class="gold_text point">13</p>
              <p class="point_name a1">міст</p>
            </div>
            <div class="point_wrapper">
              <p class="gold_text point">03</p>
              <p class="point_name a1">бренда</p>
            </div>-->
            </div>

            <div class="button_wrap" v-if="description.gold_button">
              <GoldButton
                :big_size="resizeGoldBtn"
                :text="description.gold_button"
              />
            </div>
          </div>
        </div>
      </div>
      <div v-if="bottomBlock" class="list_wrapper container">
        <div v-if="description.bottom_title_small" class="top_title-small a1">
          {{ description.bottom_title_small }}
        </div>
        <h4 v-html="description.bottom_title"></h4>
        <ul :class="{ checked_benefits: style_config.checked_benefits }">
          <li class="a1" v-for="benefit in description.benefits" :key="benefit">
            {{ benefit }}
          </li>
        </ul>
        <div class="button_wrap" v-if="description.gold_button">
          <GoldButton
            :big_size="resizeGoldBtn"
            :text="description.gold_button"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoldButton from "~/components/GoldButton";
import ContactsBlock from "~/blocks/globals/ContactsBlock";
import { globalMixin } from "~/plugins/mixins";

export default {
  name: "AboutOneBrand",
  mixins: [globalMixin],
  data() {
    return {
      details_is_open: false
    };
  },
  components: {
    GoldButton,
    ContactsBlock
  },
  props: {
    bottomBlock: {
      type: Boolean,
      default: true
    },
    inverse: {
      type: Boolean,
      default: false
    },
    description: {
      type: Object,
      default: () => ({})
    },
    style_config: {
      type: Object,
      default: () => ({
        reverse: false,
        gradient_bg: false,
        dark_bg: false,
        checked_benefits: false
      })
    },
    isManagmentAndFranchisingPage: {
      type: Boolean,
      default: false
    },
    isPremier_corp_club: {
      type: Boolean,
      default: false
    },
    resizeGoldBtn: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    openText() {
      this.details_is_open = !this.details_is_open;
    },
    getLinkTag(link) {
      if (link.link_type === "href") {
        return `<a href="${link.link}" target="_blank" class="info-link">${link.value}</a>`;
      } else if (link.link_type === "tel") {
        return `<a href="tel:${link.link}" class="info-link">${link.value}</a>`;
      } else if (link.link_type === "email") {
        return `<a href="mailto:${link.link}" target="_blank" class="info-link">${link.value}</a>`;
      }
    }
  },
  computed: {
    detailsMsg() {
      return this.details_is_open ? "Сховати" : "Детальніше";
    },
    hotelsList() {
      return !this.details_is_open && this.breakpoints <= 768
        ? this.description.hotels.slice(0, 4)
        : this.description.hotels;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";

/deep/br {
  @media (max-width: 600px) {
    display: none;
  }
}

#about_restaurant {
  @include pt-140;
  // padding-bottom: 120px;
  width: 100%;
  //padding-bottom: 0 !important;
  padding-bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(240, 237, 234, 0) 0%,
    #f0edea 100%
  ) !important;
  @include mb-140;

  @include max(lg) {
    padding-top: 120px;
  }
  @include max(md) {
    padding-top: 141px;
  }
  @include max(sm) {
  }

  &.inverse {
    .left_image_wrapper {
      order: 1;
      width: 45vw;
      margin-top: 60px;
      @include max(lg) {
        height: 664px;
      }
      @include max(md) {
        height: 517px;
      }

      @include max(sm) {
        order: 0;
        margin-top: 0;
        padding-left: 17px;
        padding-right: 0;
        width: auto;
      }
    }
    .top_title {
      @include min(lg) {
        margin-left: 168px;
        margin-right: -164px;
        width: 686px;
      }
      @include max(lg) {
        margin-left: 134px;
        margin-right: -164px;
        width: 601px;
      }
      @include max(md) {
        margin-left: 48px;
        margin-right: -168px;
        width: 426px;
      }
      @include max(sm) {
        margin: 0 auto;
        width: 96%;
      }

      &--wide {
        @media (min-width: 1024px) {
          width: 1000px;
        }
      }
    }
    .second_description_wrapper {
      @include min(lg) {
        width: 100%;
        padding-right: 130px;
        padding-left: 0;

        .long_description {
          margin-right: 40px;
          margin-left: 168px;
        }
      }

      @include max(lg) {
        width: 388px;
        padding-left: 0;
        margin-left: 134px;
        margin-right: auto;
      }
      @include max(md) {
        margin-left: 48px;
        width: 326px;
        //padding-right: 69px;
      }
      @include max(764) {
      }
      @include max(sm) {
        width: 94%;
        margin: 0 auto;
      }
    }
    .button_wrap {
      @include min(lg) {
        padding-left: 168px;
      }
    }
    .contact_block {
      margin: 64px 0;
      padding-left: 168px;
      background: #f0edea;
      opacity: 0.8;
      height: fit-content;
      display: grid;
      grid-template-columns: auto auto;
      width: 100%;
      @include max(lg) {
        margin: 41px 0 64px 0;
        padding: 0;
        background: none;
      }
      @include max(md) {
        grid-template-columns: auto;
      }

    }
  }
  .a1 {
        opacity: 0.8;
      }
    .top_title-small {
    opacity: 0.3;
    margin-bottom: 16px;
    width: 100%;
    @include max(sm){
      display: none;
    }
  }
}
.gradient_bg {
  background: linear-gradient(180deg, rgba(240, 237, 234, 0) 0%, #f0edea 100%);
}
.dark_bg {
  // background: #F0EDEA;
  // background: linear-gradient(180deg, #f0edea 0%, rgba(240, 237, 234, 0) 100%);
  background: linear-gradient(180deg, rgba(240, 237, 234, 0) 0%, #f0edea 100%);
}
.classic_description {
  display: flex;

  @include max(sm) {
    flex-direction: column;
  }
}
.left_image_wrapper {
  //@include mt-184;
  position: relative;

  //order: 1;
  // width: 45vw;
  // margin-top: 60px;
  margin-top: 119px;
  width: 47vw;
  @include max(1439) {
    margin-top: 100px;
    width: 41vw;
    height: 549px;
  }
  @include max(1023) {
    margin-top: 102px;
    height: 421px;
    width: 42vw;
  }
  @include max(sm) {
    align-self: center;
  }
  @include max(425) {
    align-self: flex-start;
    width: calc(100vw - 18px);
    height: 432px;
    margin-top: 0;
  }
  img {
    width: 100%;
    height: 100%;
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

  @include max(sm) {
    margin-top: 17px;
  }
}
.top_title {
  position: relative;
  width: 688px;
  margin-left: -88px;

  @include max(lg) {
    width: 540px;
  }
  @include max(md) {
    width: 426px;
  }
  @include max(sm) {
    width: 94%;
    margin: 0 auto;
  }
}
.second_description_wrapper {
  padding-left: 10vw;

  @include max(md) {
    // padding-left: 69px;
    // margin-right: 33px;

    width: 326px;
    padding-left: 9vw;
  }
  @include max(750) {
    width: 300px;
    margin-right: 38px;
  }
  @include max(sm) {
    padding: 0;
    margin: 0 auto;
    width: 96%;

    @include max(sm) {
      .button_wrap {
        display: none;
      }
    }
  }
}
.long_description {
  width: 412px;
  @include mt-80;
  margin-left: 40px;
  @include max(lg) {
    margin: 40px 0 0 0;
    width: 367px;
  }
  @include max(md) {
    width: 326px;
    margin: 32px 0 32px;
  }
  @include max(sm) {
    width: 100%;
    margin: 31px 0 0;
  }
  //@include ml-40;
}
.contact_block {
  margin: 64px 0;
  padding: 40px;
  width: 100%;
  background: #f0edea;
  opacity: 0.8;
  height: fit-content;
  display: grid;
  grid-template-columns: auto auto;

  &.contact_block-info {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02)),
      #f0edea;
    display: flex;
    align-items: flex-start;
    p:not(:last-child) {
      margin-right: 24px;
    }
  }
  // @include max(lg) {
  //   padding: 40px 0 64px;
  //   max-width: 370px;
  // }
  @include max(md) {
    display: block;
    overflow: hidden;
    background: unset;
    padding: 0;
    margin: 32px 0;
  }
  @include max(sm) {
  }

  p {
    margin-top: 22px;

    @include max(md) {
      &:first-child {
        margin-top: 0px;
      }
      margin-top: 15px;
    }
  }

  @include min(md) {
    p:nth-of-type(1),
    p:nth-of-type(2) {
      margin-top: 0;
    }
  }
}
.details {
  margin-top: 20px;
  margin-bottom: 56px;
  width: fit-content;
  font-weight: 900;
  opacity: 0.6;
  border-bottom: 1px dashed #000000;
  cursor: pointer;
  cursor: pointer;
  @include min(md) {
    display: none;
  }
  @include max(md) {
    margin-bottom: 49px;
  }
}
.details_is_open {
  overflow: auto;
  height: auto;
}
.button_wrap {
  width: fit-content;
  @include min(lg) {
    margin: 0 0 0 40px;
  }
  @include max(425) {
    width: 100%;
  }
}
.list_wrapper {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  margin-top: 135px;
  padding-bottom: 120px;

  @include max(lg) {
    flex-direction: column;
    margin-top: 96px;
    padding-bottom: 124px;
  }
  @include max(md) {
    margin-top: 87px;
    padding-bottom: 110px;
  }
  @include max(sm) {
    margin-top: 30px;
    padding-bottom: 80px;
  }
  @include min(sm) {
    .button_wrap {
      display: none;
    }
  }

  h4 {
    @include min(1300) {
      font-size: 48px;
      width: 335px;
      margin-bottom: 40px;
    }

    @media (min-width: 1220px) and (max-width: 1300px) {
      font-size: 48px;
      width: 300px;
    }

    @include max(lg) {
      width: auto;
      margin-bottom: 40px;
    }
    @include max(md) {
    }
    @include max(sm) {
      margin-bottom: 32px;
    }
  }
  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 88px;

    @include max(lg) {
      width: 558px;
      grid-column-gap: 40px;
    }
    @include max(md) {
      width: 570px;
    }
    @include max(sm) {
      width: auto;
      display: block;
      margin-bottom: 24px;
    }
  }
  li {
    @include mb-24;

    @include max(lg) {
      margin-bottom: 24px;
    }
  }
  // li:nth-of-type(2n + 1) {
  //   //margin-right: 88px;
  // }
  li::before {
    content:'\2014';
    margin-right: 8px;
  }
  .checked_benefits li {
    display: flex;
    align-items: center;
  }
  .checked_benefits li::before {
    content: url("../../../static/images/circle_check.svg");
    display: block;
    margin-right: 14px;
  }
}
.reversed {
  .classic_description {
    flex-direction: row-reverse;
    justify-content: flex-start;
  }
  .descripton_wrapper {
  }
  .second_description_wrapper {
  }
  .top_title,
  .long_description,
  .contact_block,
  .button_wrap {
    @include pl-168;
    margin-left: 0;
    box-sizing: content-box;
  }
  .top_title {
    margin-right: -88px;
  }
  .contact_block {
    width: calc(100% - 100px);
    box-sizing: border-box;
  }
}

/////chek it
.points {
  padding: 25px 110px 58px 64px;
  margin-top: 75px;
  display: flex;
  align-items: center;
  background-color: #f0edea;
}
.point {
  font-family: CormorantRegular;
  font-style: normal;
  font-weight: normal;
  font-size: 66px;
  line-height: 110%;
  text-align: center;
  @include mb-16;
}
.point_wrapper {
  // @include ml-64;
  .gold_text {
    line-height: 120%;
  }
  p {
    text-align: center;
  }
  .point_name {

    #about_restaurant & {
      opacity: 0.3;
    }
  }
}
.info-link {
  color: #171717 !important;
  opacity: 0.8;
}
/*is_managment_and_franchising_page */
#about_restaurant.managment_and_franchising_page {
  @include max(1023) {
    margin-bottom: 0;
  }
  @include max(767) {
    padding-top: 80px;
  }
  .main-wrapper {
    min-width: unset;
  }
  .list_wrapper {
    @include max(767) {
      max-width: 375px;
      margin: 80px auto 0 auto;
    }
    h4 {
      max-width: 290px;
      @include max(767) {
        max-width: 100%;
      }
    }
    .checked_benefits {
      display: grid;
      grid-column-gap: 72px;
      @include max(1439) {
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 40px;
        .a1 {
          margin-bottom: unset;
        }
      }
      @include max(1023) {
        grid-column-gap: 128px;
        grid-template-columns: repeat(2, 220px);
        grid-row-gap: 33px;
      }
      @include max(767) {
        grid-template-columns: 1fr;
        gap: 20px;
      }
    }
  }
  .left_image_wrapper {
    width: fit-content;
    margin-top: 119px;
    width: 62vw;
    @include max(1439) {
      margin-top: 150px;
      width: 57vw;
      height: 549px;
    }
    @include max(1023) {
      margin-top: 102px;
      height: 421px;
      width: 67vw;
    }
    @include max(767) {
      display: none;
    }
  }
  .top_title {
    @include max(1024) {
      font-size: 36px;
    }
    @include max(768) {
      font-size: 28px;
    }
    @include max(767) {
      margin: 0 auto;
    }
  }
  .points {
    padding: 24px 100px 40px 40px;
    @include max(1439) {
      margin-top: 40px;
    }
    @include max(1023) {
      padding: 24px 49px 40px 32px;
    }
    @include max(767) {
      justify-content: center;
    }
    .point_wrapper + .point_wrapper {
      @include ml-64;
      @include max(1440) {
        margin-left: 56px;
      }
      @include max(1100) {
        margin-left: 32px;
      }
      @include max(950) {
        margin-left: 18px;
      }
    }
    .point_wrapper {
      @include max(1100) {
        .gold_text {
          font-size: 40px;
          @include max(768) {
            font-size: 32px;
          }
        }
      }
    }
  }
  .second_description_wrapper {
    margin-left: unset;
    width: unset;
    padding-left: 122px;
    @include max(1439) {
      margin-right: unset;
      padding-left: 60px;
    }
    @include max(lg) {
      //width: 423px;
      margin-right: unset;
    }
    @include max(1023) {
      padding-left: 37px;
    }
    @include max(767) {
      padding: 0;
    }
    .long_description {
      margin-left: 64px;
      @include max(1439) {
        margin-left: 40px;
      }
      @include max(1023) {
        margin: 0 auto;
        padding: 0 18px;
      }
      @include max(767) {
        margin-top: 32px;
      }
    }
  }
}
/*is_managment_and_franchising_page */

/*is_premier_corp_club */
#about_restaurant.premier_corp_club {
  padding-top: 40px;
  padding-bottom: 140px;

  @include max(lg) {
    padding-bottom: 124px;
  }
  @include max(md) {
    padding-bottom: 112px;
  }
  @include max(sm) {
    padding-top: 0px;
    margin-bottom: 80px;
  }
  .left_image_wrapper {
    @include max(lg) {
      margin-top: 130px;
    }

    @include max(sm) {
      margin-top: 0px;
    }
  }
  .descripton_wrapper {
    @include max(sm) {
      margin-top: 32px;
    }
  }
  .top_title {
    @include max(lg) {
      font-size: 36px;
      margin-right: -134px;
    }

    @include max(md) {
      font-size: 28px;
    }

    @include max(sm) {
      font-size: 26px;
      margin: 0 18px;
      width: auto;
    }
  }
  .second_description_wrapper {
    @include max(lg) {
      margin: 0;
      width: 100%;
      padding-left: 63px;
    }

    @include max(sm) {
      margin: 0 18px;
      width: auto;
      padding-left: 0px;
    }
  }
  .long_description {
    width: 412px;
    margin-left: 40px;
    @include max(lg) {
      width: 408px;
      margin-left: 0px;
      padding-left: 40px;
    }
    @include max(md) {
      width: 325px;
      padding-left: 0;
    }
    @include max(sm) {
      width: 100%;
    }
  }
  .contact_block-info {
    padding: 40px;

    @include max(lg) {
      padding: 32px 40px 32px 54px;
    }
    @include max(md) {
      padding: 24px;
      height: auto;
    }

    @include max(sm) {
      padding: 0;
      margin: 0;
      background: none;
      font-size: 10px;
      margin-top: 32px;
    }
  }
  .info-link {
    @include max(md) {
      margin-top: 0;
    }

    @include max(sm) {
      font-size: 10px;
      opacity: 1;
    }
  }
}

.top_title {
      &--wide {
        @media (min-width: 1024px) {
          width: 740px;
        }
      }
    }

.premier_corp_club {
  & .info-link {
    color: #171717;
    font-family: "AvenirNextCyrMedium";
    opacity: 0.8;

    &:hover {
      opacity: 0.5 !important;
    }
  }
}
</style>
