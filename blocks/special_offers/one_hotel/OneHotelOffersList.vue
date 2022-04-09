<template>
  <div
    class="offers_container container"
    :class="{
      account_profile: isAccountProfile,
      account_redeem_points: isAccountRedeemPoints,
      profile_corporate_club: isProfileCorporateClub,
      special_offers: isSpecialOffers
    }"
  >
    <div class="main-wrapper">
      <div v-if="isPopUpVisible" class="filters_pop-up">
        <div class="pop-up_body">
          <div @click="popUpVisible" class="pop-up_back">
            <svg
              width="5"
              height="8"
              viewBox="0 0 5 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M1 7.5L4 4L1 0.5"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="a1">назад</div>
          </div>

          <div class="pop-up_list">
            <div class="list_options">
              <div class="option_title">ПО МІСТУ</div>

              <div v-for="option in optionsCity" :key="option.title">
                {{ option.title }}
              </div>
            </div>
            <div class="list_options">
              <div class="option_title">ПО ГОТЕЛЯХ</div>

              <div v-for="option in optionsHotel" :key="option.title">
                {{ option.title }}
              </div>
            </div>
            <div class="list_options">
              <div class="option_title">ПО КАТЕГОРІЯМ</div>

              <div v-for="option in optionsСategory" :key="option.title">
                {{ option.title }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="header" :class="{ 'more-bonus': moreBonus }" v-if="data">
        <h4 class="title">{{ data.title }}</h4>
        <UnderlineButton :text="data.more" :link="data.linkMore" v-if="data.more" />

        <div v-if="data.optionsBonus" class="options-bonus">
          <div class="options">
            <p
              class="a1 option"
              v-for="(option, index) in data.optionsBonus"
              :key="index"
            >
              {{ option }}
            </p>
          </div>
          <div class="simple-graph-bonus">
            <p class="a1 start">
              {{ data.bonus.start }}
            </p>
            <div class="graph">
              <svg
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect opacity="0.5" y="2" width="8" height="1" fill="black" />
                <rect opacity="0.5" x="7" width="1" height="2" fill="black" />
                <rect opacity="0.1" x="7" width="1" height="2" fill="black" />
                <rect
                  opacity="0.1"
                  x="7"
                  y="3"
                  width="1"
                  height="2"
                  fill="black"
                />
                <rect
                  opacity="0.5"
                  x="7"
                  y="3"
                  width="1"
                  height="2"
                  fill="black"
                />
              </svg>
            </div>
            <p class="a1 end">
              {{ data.bonus.end }}
            </p>
          </div>
        </div>
      </div>

      <div v-if="filter" class="filters_wrapper">
        <p class="a1 offer_counter">Знайдено 8 пропозицій</p>
        <div @click="popUpVisible" class="filter_option">
          <p class="a1">фільтри</p>
          <img src="~/static/icons/filter-icon.svg" alt="icon" />
        </div>
        <div class="filters">
          <SelectBlockWithPlus
            :name="'категорія'"
            :options="optionsСategory"
            @change="category = $event.value"
          />
          <SelectBlockWithPlus
            :name="'По місту'"
            :options="optionsCity"
            @change="city = $event.value"
          />
          <SelectBlockWithPlus
            :name="'По готелях'"
            :options="optionsHotel"
            @change="hotel = $event.value"
          />
        </div>
      </div>

      <div class="list_wrapper">
        <div
          @click="$emit('openModalBonus')"
          v-for="offer in offersData"
          :key="offer.id"
          class="offer list_element"
          :style="{
            backgroundImage: ` linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.576) 80.17%), url(${offer.img})`
          }"
        >
          <div class="label_wrapper">
            <SaleLabel :text="offer.label" :grayStatus="offer.grayStatus" />
          </div>
          <h5>{{ offer.title }}</h5>
          <p class="p1 middle_description">{{ offer.middle_description }}</p>
          <p v-if="offer.bottom_description" class="p1 bottom_description">
            {{ offer.bottom_description }}
          </p>
          <a href=" / " class="a1 button" v-if="offer.button">{{
            offer.button
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { globalMixin } from "~/plugins/mixins";
import UnderlineButton from "~/components/UnderlineButton";
export default {
  name: "OffersList",
  mixins: [globalMixin],
  components: {
    UnderlineButton
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    filter: {
      type: Boolean,
      default: false
    },
    offers: {
      type: Array,
      default: () => ({})
    },
    moreBonus: {
      type: Boolean,
      default: false
    },
    isAccountProfile: {
      type: Boolean,
      default: false
    },
    isAccountRedeemPoints: {
      type: Boolean,
      default: false
    },
    isProfileCorporateClub: {
      type: Boolean,
      default: false
    },
    isSpecialOffers: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    city: "",
    hotel: "",
    category: "",
    optionsCity: [
      {
        title: "Дніпро",
        value: "Дніпро"
      },
      {
        title: "Харків",
        value: "Харків"
      },
      {
        title: "Херсон",
        value: "Херсон"
      },
      {
        title: "Київ",
        value: "Київ"
      },
      {
        title: "Львів",
        value: "Львів"
      }
    ],
    optionsHotel: [
      {
        title: "Premier Palace Hotelа",
        value: "Premier Palace Hotel"
      },
      {
        title: "Premier Hotel Rus",
        value: "Premier Hotel Rus"
      },
      {
        title: "Premier Hotel Lybid",
        value: "Premier Hotel Lybid"
      },
      {
        title: "Premier Hotel Shafran",
        value: "Premier Hotel Shafran"
      },
      {
        title: "Premier Hotel Abri",
        value: "Premier Hotel Abri"
      }
    ],
    optionsСategory: [
      {
        title: "категорія1",
        value: "категорія1"
      },
      {
        title: "категорія2",
        value: "категорія2"
      },
      {
        title: "категорія3",
        value: "категорія3"
      },
      {
        title: "категорія4",
        value: "категорія4"
      },
      {
        title: "категорія5",
        value: "категорія5"
      }
    ],
    isPopUpVisible: false
  }),
  methods: {
    popUpVisible() {
      this.isPopUpVisible = !this.isPopUpVisible;
      if (this.isPopUpVisible == true) {
        document.body.style.overflow = "hidden";
      } else if (this.isPopUpVisible == false) {
        document.body.style.overflow = "auto";
      }
    }
  },
  computed: {
    offersData() {
      if (
        (this.isProfileCorporateClub || this.isAccountProfile) &&
        this.breakpoints == 768
      ) {
        return this.offers.slice(0, 3);
      } else {
        return this.offers;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/blocks/transformed_list.scss";
@import "../../../assets/scss/utils.scss";

.offers_container {
  margin-bottom: 170px;

  @include max(lg) {
    margin-bottom: 124px;
  }
  @include max(md) {
    margin-bottom: 112px;
  }
  @include max(sm) {
    margin-bottom: 104px;
  }

  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.more-bonus {
      margin-bottom: 64px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      .title {
        margin-bottom: 40px;
      }
      .options-bonus {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;
        .options {
          display: flex;
          align-items: center;
          .option {
            text-decoration: none;
            cursor: pointer;
            transition: opacity 0.3s ease-in-out;
            &:hover {
              opacity: 0.7;
            }
            &:not(:last-child) {
              margin-right: 64px;
            }
            &::after {
              content: "+";
              display: inline-block;
              font-size: 14px;
              margin-left: 2px;
            }
          }
        }
        .simple-graph-bonus {
          display: flex;
          align-items: center;
          .start {
            margin-right: 12px;
            text-decoration: none;
          }
          .end {
            margin-left: 12px;
            text-decoration: none;
          }
          .graph {
            width: 102px;
            height: 1px;
            display: flex;
            position: relative;
            background: rgba(#000000, 0.1);
            svg {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              left: 0;
            }
          }
        }
      }
    }
    .a1 {
      margin: 0;
      // text-decoration: underline;
    }
  }

  .button {
    text-transform: uppercase;
    color: #ffffff;
    text-decoration: underline;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    &:hover {
      opacity: 0.7;
    }
  }
}
.filters_wrapper {
  display: flex;
  justify-content: space-between;
}
.filters {
  display: flex;
  margin-top: -10px;
  margin-bottom: 88px;
  .select-wrapper {
    &:not(:last-child) {
      margin-right: 44px;
    }
  }

  @include max(lg) {
    margin-bottom: 56px;
  }
  @include max(md) {
    margin-bottom: 49px;
  }
  @include max(sm) {
    margin-bottom: 24px;
    display: none;
  }
}

.filter_option {
  display: flex;
  justify-content: space-between;
  width: 72px;
  margin-bottom: 40px;
  p {
    margin-right: 0;
  }
  img {
    margin-top: 1px;
    height: 10px;
  }
  &:hover {
    cursor: pointer;
  }

  @include min(sm) {
    display: none;
  }
}
.filters_pop-up {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10001;

  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 20;
  }
  @include min(sm) {
    display: none;
  }
}
.pop-up_body {
  overflow: auto;
  position: relative;
  z-index: 75;
  background-color: #f5f5f5;
  width: 98%;
  height: 98%;

  padding: 32px 18px 15px;
}
.pop-up_back {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  width: 55px;

  svg {
    margin-top: 1.5px;
    transform: rotate(180deg);
  }
}
.list_options {
  div {
    cursor: pointer;
    display: table;
    padding-top: 10px;
    font-size: 12px;
  }
  .option_title {
    cursor: pointer;
    display: inline-block;
    padding-top: 40px;
    padding-bottom: 5px;
    font-weight: 500;
    font-size: 10px;
  }
}

.label_wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.offer {
  padding: 16px 24px;
  margin: 0 0 20px;
  cursor: pointer;

  @include max(lg) {
    height: 469px;
    //width: 368px;
    width: 48%;
  }
  @include max(md) {
    height: 416px;
    //width: 326px;
  }
  @include max(sm) {
    margin: 0 auto 18px;
    height: 431px;
    width: 96%;

    &:last-child {
      margin: 0 auto;
    }
    //width: 326px;
  }
  @include max(425) {
    margin: 0 0 18px;
    width: 100%;
  }
}
.offer:hover {
  .label_wrapper {
    opacity: 1;
  }
}
.middle_description {
  margin: 8px 0 40px;
  @include max(1023) {
    max-width: 291px;
    margin: 8px 0 25px;
  }
}
.bottom_description {
  opacity: 0.5;
}

.list_element:nth-of-type(3n + 1) {
  transform: translateY(0px);
  @include min(1220) {
    transform: translateY(30px);
  }
}
.list_element:nth-of-type(3n) {
  transform: translateY(0px);
  @include min(1220) {
    transform: translateY(50px);
  }
}

.list_element:nth-of-type(2n + 1) {
  @media screen and (max-width: 1220px) and (min-width: 650px) {
    transform: translateY(0%);
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.list_element:nth-of-type(2n) {
  @media screen and (max-width: 1220px) and (min-width: 650px) {
    transform: translateY(50%);
  }
}
/** account-profile && .account_redeem_points && corporate club profile && special offers page*/
.account_profile,
.account_redeem_points,
.profile_corporate_club {
  @include max(1439) {
    margin-bottom: 110px;
  }
  @include max(1023) {
    margin-bottom: 64px;
  }
  .header {
    margin-bottom: 48px;
  }
  .offer {
    @include max(1439) {
      padding: 16px;
    }
    @include max(767) {
      padding: 16px 0 32px 24px;
    }
  }
  .list_element {
    height: 27.8vw;
    @include max(1439) {
      width: calc((100% / 3) - 16px);
      height: 26.5vw;
    }
    @include max(1023) {
      height: 39vw;
    }
    @include max(767) {
      width: 339px;
      height: 451px;
    }
    &:nth-of-type(2n) {
      @include max(1439) {
        transform: unset;
      }
    }
    &:nth-of-type(3n) {
      @include max(1439) {
        transform: translateY(20px);
      }
      @include max(767) {
        transform: unset;
      }
    }
    &:nth-of-type(3n + 1) {
      @include max(1439) {
        transform: translateY(20px);
      }
      @include max(767) {
        transform: unset;
      }
    }
    h5 {
      @include max(1439) {
        font-size: 20px;
      }
    }
    .label_wrapper {
      opacity: 1;
    }
    .middle_description {
      opacity: 0.5;
      @include max(1439) {
        margin: 8px 0 24px;
      }
    }
  }
  .options-bonus {
    @include max(767) {
      flex-flow: row wrap;
    }

    .simple-graph-bonus {
      @include max(767) {
        margin-top: 50px;
      }
    }
  }
  .sale_label {
    top: 20px;
    @include max(1439) {
      top: 16px;
    }
    @include max(1023) {
      top: 12px;
    }
  }
}
.account_redeem_points {
  .header {
    &.more-bonus {
      margin-bottom: 36px;
      .title {
        margin-bottom: 32px;
      }
      .options-bonus {
        .options {
          .option {
            &:not(:last-child) {
              @include max(767) {
                margin-right: 20px;
              }
            }
          }
        }
      }
    }
  }
}
.profile_corporate_club {
  margin-bottom: 136px;
  @include max(1439) {
    margin-bottom: 72px;
  }
  @include max(1023) {
    margin-bottom: 64px;
  }
  @include max(767) {
    display: none;
  }
  .header {
    margin-top: 40px;
  }
}
.special_offers {
  .label_wrapper {
    @include max(767) {
      opacity: 1;
    }
  }
}
/** account-profile && .account_redeem_points && corporate club profile && special offers pages */
</style>
