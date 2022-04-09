<template>
  <div id="menu_popup">
    <div class="list_bar" :class="{'list_bar--ios': $device.isIos}">
      <p
        @click="openMenuItem(item)"
        v-for="item in links"
        :key="item.id"
        class="a1 menu-item"
        :class="{ active: mainMenuValue === item.value
        }"
      >
        {{ item.name }}

        <svg
          v-if="item.mobPopup"
          class="arrow_right"
          width="5"
          height="8"
          viewBox="0 0 5 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="1"
            d="M4 8L1 4.5L4 1"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </p>
      <div class="gorizontal_line"></div>

      <div class="additional_links">
        <nuxt-link
          v-for="link in additional_links"
          tag="a"
          :key="link.id"
          class="a1 menu-item"
          :to="link.link"
          >{{ link.name }}</nuxt-link
        >
      </div>

      <div class="gorizontal_line"></div>

      <div class="additional_links-footer">
        <nuxt-link
          v-for="link in additional_links_footer"
          tag="a"
          :key="link.id"
          class="a1 menu-item"
          :to="link.link"
          >{{ link.name }}</nuxt-link
        >
      </div>

      <div class="phone-and-currency">
        <div class="phone_wrapper">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.1018 7.15323C9.83984 6.88172 9.52392 6.73656 9.18909 6.73656C8.85697 6.73656 8.53834 6.87903 8.26562 7.15054L7.41236 7.99731C7.34215 7.95968 7.27195 7.92473 7.20444 7.88979C7.10724 7.8414 7.01543 7.7957 6.93712 7.74731C6.13787 7.24194 5.41151 6.58333 4.71486 5.73118C4.37733 5.30645 4.15052 4.94892 3.98581 4.58602C4.20722 4.38441 4.41244 4.17473 4.61225 3.97312C4.68786 3.89785 4.76346 3.81989 4.83907 3.74462C5.40611 3.18011 5.40611 2.44892 4.83907 1.88441L4.10191 1.15054C4.01821 1.0672 3.9318 0.981183 3.8508 0.895161C3.68878 0.728495 3.51867 0.556452 3.34316 0.395161C3.08124 0.137097 2.76802 0 2.43859 0C2.10917 0 1.79054 0.137097 1.52052 0.395161C1.51782 0.397849 1.51782 0.397849 1.51512 0.400538L0.597054 1.32258C0.251429 1.66667 0.0543141 2.08602 0.0111109 2.57258C-0.0536939 3.35753 0.178523 4.08871 0.356737 4.5672C0.794169 5.74194 1.44762 6.83065 2.42239 7.99731C3.60508 9.40323 5.02808 10.5134 6.6536 11.2957C7.27465 11.5887 8.10361 11.9355 9.02978 11.9946C9.08648 11.9973 9.14589 12 9.19989 12C9.82364 12 10.3475 11.7769 10.7579 11.3333C10.7606 11.328 10.766 11.3253 10.7687 11.3199C10.9091 11.1505 11.0711 10.9973 11.2412 10.8333C11.3574 10.7231 11.4762 10.6075 11.5923 10.4866C11.8596 10.2097 12 9.8871 12 9.55645C12 9.22312 11.8569 8.90323 11.5842 8.63441L10.1018 7.15323ZM11.0684 9.98387C11.0657 9.98387 11.0657 9.98656 11.0684 9.98387C10.9631 10.0968 10.8551 10.1989 10.739 10.3118C10.5635 10.4785 10.3853 10.6532 10.2179 10.8495C9.94515 11.1398 9.62382 11.2769 9.20259 11.2769C9.16209 11.2769 9.11889 11.2769 9.07838 11.2742C8.27642 11.2231 7.53117 10.9113 6.97223 10.6452C5.44391 9.9086 4.10191 8.8629 2.98673 7.53763C2.06596 6.4328 1.45032 5.41129 1.04259 4.31452C0.791469 3.64516 0.699662 3.12366 0.740165 2.63172C0.767167 2.3172 0.888676 2.05645 1.11279 1.83333L2.03356 0.916667C2.16587 0.793011 2.30628 0.725806 2.44399 0.725806C2.6141 0.725806 2.75181 0.827957 2.83822 0.913979C2.84092 0.916667 2.84362 0.919355 2.84632 0.922043C3.01103 1.07527 3.16764 1.23387 3.33236 1.40323C3.41606 1.48925 3.50247 1.57527 3.58888 1.66398L4.32603 2.39785C4.61225 2.6828 4.61225 2.94624 4.32603 3.23118C4.24773 3.30914 4.17212 3.3871 4.09381 3.46237C3.867 3.69355 3.65098 3.9086 3.41606 4.11828C3.41066 4.12366 3.40526 4.12634 3.40256 4.13172C3.17035 4.3629 3.21355 4.58871 3.26215 4.74194C3.26485 4.75 3.26755 4.75806 3.27025 4.76613C3.46197 5.22849 3.73199 5.66398 4.14242 6.1828L4.14512 6.18548C4.89037 7.09946 5.67613 7.81183 6.5429 8.35753C6.6536 8.42742 6.76701 8.48387 6.87502 8.53763C6.97223 8.58602 7.06403 8.63172 7.14234 8.68011C7.15314 8.68548 7.16394 8.69355 7.17474 8.69893C7.26655 8.74462 7.35296 8.76613 7.44206 8.76613C7.66618 8.76613 7.80659 8.62634 7.85249 8.58064L8.77596 7.66129C8.86777 7.56989 9.01358 7.45968 9.18369 7.45968C9.3511 7.45968 9.48881 7.56452 9.57252 7.65591C9.57522 7.6586 9.57522 7.6586 9.57792 7.66129L11.0657 9.14247C11.3439 9.41667 11.3439 9.69893 11.0684 9.98387Z"
              fill="black"
            />
          </svg>
          <p class="a1">контакти</p>
        </div>
        <div class="money_wrapper">
          <div class="money_content_wrapper" @click.stop="toggleLang">
            <p class="a1">ua / ₴</p>
            <svg
              width="9"
              height="6"
              viewBox="0 0 9 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path opacity="0.8" d="M8 1L4.5 4.5L1 1" stroke="black" />
            </svg>
          </div>
          <transition name="fade">
            <lang-popup v-if="is_lang_open" />
          </transition>
        </div>
      </div>

      <div class="contact">
        <p class="a1">Ми в соціальних мережах</p>

        <div class="icons_wrapper socials">
          <a href="https://www.google.com.ua/" target="_blank">
            <img src="~/static/images/G+_re_black.svg" alt />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <img src="~/static/images/fb_black.svg" alt />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src="~/static/images/twi_black.svg" alt />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src="~/static/images/insta_black.svg" alt />
          </a>
        </div>
      </div>

      <div class="booking-modal-open" @click="OpenBookingModal">
        <GoldButton :text="'Зарезервувати'" />
      </div>
    </div>

    <transition name="fade">
      <BookingModal
        @closeModal="closeModal"
        :openModal="is_booking_modal_open"
      />
    </transition>

    <div class="hovers_content">
      <MenuHotels v-if="isHotel" />
      <MenuSpecialOffers v-if="isSpecialOffers" />
      <MenuListInfo v-if="isEvents" :data="eventsList" />
      <MenuClubProgram v-if="isPremierClub" :data="clubData" />
      <MenuClubProgram
        v-if="isPremierCorpClub"
        :bigRightBlock="true"
        :data="corpClubData"
      />
      <MenuListInfo v-if="isBlog" :data="blogList" />
    </div>

    <!-- <div class="mobile_pop-ups">

      <FiltersPopUp :visible="true" />

      <FiltersPopUp :visible="true" />
      <FiltersPopUp :visible="true" />

    </div> -->
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import { MainMenuValues } from "~/helpers/conts";
import MenuHotels from "~/blocks/header/menuContents/MenuHotels";
import MenuSpecialOffers from "~/blocks/header/menuContents/MenuSpecialOffers";
import MenuListInfo from "~/blocks/header/menuContents/MenuListInfo";
import MenuClubProgram from "~/blocks/header/menuContents/MenuClubProgram";
import GoldButton from "~/components/GoldButton";
import LangPopup from "~/blocks/header/LangPopup";

export default {
  name: "MenuPopup",
  components: {
    MenuHotels,
    MenuSpecialOffers,
    MenuListInfo,
    MenuClubProgram,
    GoldButton,
    LangPopup,
  },

  data: () => ({
    //is_lang_open: false,
    is_booking_modal_open: false,
    links: [
      {
        id: 0,
        name: "Готелі",
        value: MainMenuValues.hotel,
        mobPopup: true,
      },
      {
        id: 1,
        name: "Спецпропозиції",
        value: MainMenuValues.specialOffers,
        mobPopup: false,
      },
      {
        id: 2,
        name: "Події",
        value: MainMenuValues.events,
        mobPopup: true,
      },
      {
        id: 3,
        name: "Premier Club",
        value: MainMenuValues.premierClub,
        mobPopup: false,
      },

      {
        id: 4,
        name: "Premier Corporate Club ",
        value: MainMenuValues.premierCorpClub,
        mobPopup: false,
      },
      {
        id: 5,
        name: "Блог",
        value: MainMenuValues.blog,
        mobPopup: true,
      },
    ],
    additional_links: [
      {
        id: 0,
        name: "Управління та франчайзинг",
        link: "/",
      },
      {
        id: 1,
        name: "Школа готельєрів",
        link: "/",
      },
      {
        id: 2,
        name: "Консалтинг",
        link: "/",
      },
    ],
    additional_links_footer: [
      {
        id: 0,
        name: "гарантія найкращої ставки",
        link: "/",
      },
    ],
    clubData: {
      title:
        "<span class='gold_text italic'>Premier club</span> програма лояльності гостей ",
      description:
        "Господа, високотехнологічна концепція суспільного укладу дозволяє виконати важливі завдання по розробці як самодостатніх, так і зовні залежних концептуальних рішень. Таким чином, зміцнення і розвиток внутрішньо.",
      button: "Детальніше",
      pointsList: [
        "Отримуй бонуси та обмінювайся подарунками",
        "Безкоштовний ранній заїзд та пізній виїзд",
        "Додаткові 10% на проживання",
        "10% знижка на послуги ресторану",
      ],
    },
    corpClubData: {
      title:
        "<span class='gold_text italic'>Premier Corporate Club</span> програма лояльності бізнесу ",
      description:
        "Господа, високотехнологічна концепція суспільного укладу дозволяє виконати важливі завдання по розробці як самодостатніх, так і зовні залежних концептуальних рішень. Таким чином, зміцнення і розвиток внутрішньо.",
      button: "Детальніше",
      pointsList: [
        "Отримуй бонуси та обмінювайся подарунками",
        "Безкоштовний ранній заїзд та пізній виїзд",
        "Додаткові 10% на проживання",
        "10% знижка на послуги ресторану",
      ],
    },
    eventsList: [
      {
        id: 0,
        name: "Ідеальна зустріч",
        link: "/",
      },
      {
        id: 1,
        name: "Конференц - зали",
        link: "/",
      },
      {
        id: 2,
        name: "Весілля",
        link: "/",
      },
      {
        id: 3,
        name: "Кейтеринг",
        link: "/",
      },
    ],
    blogList: [
      {
        id: 0,
        name: "Новини",
        link: "/",
      },
      {
        id: 1,
        name: "Події",
        link: "/",
      },
      {
        id: 2,
        name: "Статті",
        link: "/",
      },
      {
        id: 3,
        name: "Міські путівники",
        link: "/",
      },
      {
        id: 4,
        name: "Журнал Premier Club",
        link: "/",
      },
    ],
  }),

  mounted() {
    console.log(MainMenuValues);
  },

  methods: {
    openMenuItem(el) {
      this.$store.commit("setMainMenuValue", el.value);
    },
    toggleLang() {
      //this.is_lang_open = true;
      this.toggleLangPopup();
    },
    closePopUp() {
      this.is_lang_open = false;
    },
    OpenBookingModal() {
      console.log("hgfdsdfghjk");
      this.is_booking_modal_open = true;
    },
    closeModal() {
      this.is_booking_modal_open = false;
    },
    // closeMainMenuOnMisclick(){
    //    document.body.style.overflow = "auto";
    //    this.closeMainMenu();
    // },
    // ...mapMutations('modals',{
    //   closeMainMenu: 'closeMainMenu'
    // })
    ...mapMutations('modals', {
      toggleLang: 'toggleLangPopup'
    })
  },

  watch: {
    is_booking_modal_open() {
      if (this.is_booking_modal_open == false) {
        //document.body.style.overflow = "auto";
      } else {
        //document.body.style.overflow = "hidden";
      }
    },
  },

  computed: {
    ...mapState(["mainMenuValue"]),
    ...mapState({
      is_lang_open: state => state.modals.isLangPopupOpen
    }),

    isHotel() {
      return this.mainMenuValue == MainMenuValues.hotel;
    },
    isSpecialOffers() {
      return this.mainMenuValue == MainMenuValues.specialOffers;
    },
    isEvents() {
      return this.mainMenuValue == MainMenuValues.events;
    },
    isPremierClub() {
      return this.mainMenuValue == MainMenuValues.premierClub;
    },
    isPremierCorpClub() {
      return this.mainMenuValue == MainMenuValues.premierCorpClub;
    },
    isBlog() {
      return this.mainMenuValue == MainMenuValues.blog;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

#menu_popup {
  position: absolute;
  left: 0;
  top: 0;
  background: #fbfbfb;
  width: 100%;
  padding-top: 80px;
  top: 1px;
  display: flex;

  @include max(lg) {
    padding-top: 70px;
  }
  @include max(md) {
  }
  @include max(sm) {
    padding-top: 55px;

    //height: 100vh !important;
    height: calc(100vh - 12px) !important;
    -webkit-overflow-scrolling: touch;
    overflow: auto;
  }
}

.menuButton {
  display: none;
  margin: 0 auto;
  margin-top: 37px;
  max-width: 331px;
  width: 100%;
  min-height: 62px;
  border: 1px solid;
  -webkit-border-image: url("~@/static/images/gold_for_button.svg") 1 repeat;
  border-image: url("~@/static/images/gold_for_button.svg") 1 repeat;
  transition-duration: 0.6s;
  cursor: pointer;
  font-family: "Avenir Next Cyr";
  font-weight: 500;
  font-size: 9px;
  line-height: 140%;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #000000;

  @include max(sm) {
    display: block;
  }
}

.list_bar {
  padding: 56px 32px;
  width: 324px;
  min-width: 323.5px;
  background-color: #fbfbfb;

  @include max(lg) {
    width: 255px;
    min-width: 255px;
  }
  @include max(sm) {
    width: 100%;
    min-height: 100%;
    max-height: 100%;
    min-width: 100%;
    padding: 36px 18px 4px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    padding-bottom: 100px;
  }

  &--ios {
    padding-bottom: 150px;
  }

  .menu-item {
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
    &:hover {
      opacity: 1;
    }
    &.active {
      opacity: 1;
    }

    @include max(sm) {
      opacity: 1;
      font-family: 'CormorantMedium';
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 112%;
      color: #000000;
      margin-bottom: 20px;
      text-transform: none;
      letter-spacing: 2px;
    }
  }
  .arrow_right {
    display: none;

    @include max(sm) {
      display: inline-block;
      transform: rotate(180deg);
      height: 12px;
      margin-left: 4px;
    }
  }
  p {
    @include mb-24;
    cursor: pointer;
    width: fit-content;
  }
  p:last-of-type {
    margin-bottom: 0;
  }
}
.hovers_content {
  background-color: rgba(#000000, 0.04);
  flex-grow: 1;

  @include max(sm) {
    display: none;
  }
}
.mobile_pop-ups {
  display: none;

  @include max(sm) {
    display: block;
  }
}
.gold_button {
  @include min(sm) {
    display: none;
  }
  @include max(sm) {
    height: 53px;
    margin: 0 auto;
    width: calc(100% + 36px - 8px);
    margin-left: -14px;
    //margin-top: 100px;
  }
}
.phone-and-currency {
  @include min(sm) {
    display: none;
  }
  margin-top: 37px;
  height: 62px;
  padding: 10px 0px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 50%;
  }

  .phone_wrapper {
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    border-right: 1px solid #c4c4c4;

    svg {
      margin-right: 12px;
    }
  }

  .money_wrapper {
    .money_content_wrapper {
      display: flex;
      margin: 0 auto;

      svg {
        height: 10px;
        margin-left: 7px;
      }
    }
  }
}

.contact {
  @include min(sm) {
    display: none;
  }

  width: max-content;
  margin: 24px auto 45px;

  .icons_wrapper {
    width: max-content;
    margin: 21px auto 0;
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
  }
  .socials img {
    margin-right: 24px;
    cursor: pointer;
  }
}
.booking-modal-open {
  @include min(sm) {
    display: none;
  }
  // margin-top: auto;
  padding-bottom: 20px;
  @include max(sm){
    padding-bottom: 0;
  }
}
.gorizontal_line {
  background: #000000;
  opacity: 0.1;
  height: 1px;
  margin: 32px 0;
}
.additional_links,
.additional_links-footer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .menu-item {
    @include mb-24;
    cursor: pointer;
    width: fit-content;
  }
  .menu-item:last-of-type {
    margin-bottom: 0;
  }
}

.gorizontal_line,
.additional_links,
.additional_links-footer {
  @include max(sm) {
    display: none;
  }
}
</style>
