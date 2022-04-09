<template>
  <div class="main-wrapper">
    <div
      class="special_offer_description_container"
      :class="{ positionInRoom }"
    >
      <div class="text_type_description">
        <p class="a1 text_type_description__city_list" v-if="data.subtitle">
          {{ data.subtitle }}
        </p>

        <h1
          class="h_three text_type_description__main_title"
          v-html="data.title"
          v-if="data.title"
        ></h1>

        <div class="description__image">
          <img
            class="image_type_description__image"
            src="~/static/images/offer_right_block.jpg"
            alt
          />
        </div>

        <p
          class="p1 text_type_description__long_description"
          v-if="data.firstDescription"
          v-html="data.firstDescription"
        ></p>

        <div class="description__advert" v-if="!positionInRoom">
          <div class="advert">
            <p class="a1 advert__text">Дати бронювання:</p>
            <p class="a1 advert__text">з 24 лютого по 1 березня 2020</p>
            <div class="advert__subblock">
              <p class="a1 advert__text">Період проживання:</p>
              <p class="a1 advert__text">з 1 червня 2020 по 31 серпня 2020</p>
            </div>
          </div>
          <div class="socials">
            <p class="a1">поділитися:</p>
            <a
              href="https://twitter.com/"
              class="socials__icon"
              target="_blank"
            >
              <img src="~/static/images/twi_black.svg" alt
            /></a>
            <a
              href="https://www.facebook.com/"
              class="socials__icon"
              target="_blank"
              ><img src="~/static/images/fb_black.svg" alt />
            </a>
          </div>
        </div>

        <div class="text_type_description__other-info">
          <div
            class="image_type_description__advert left-data"
            v-if="positionInRoom"
          >
            <div class="advert">
              <p class="a1 advert__text">Дати бронювання:</p>
              <p class="a1 advert__text">з 24 лютого по 1 березня 2020</p>
              <div class="advert__subblock">
                <p class="a1 advert__text">Період проживання:</p>
                <p class="a1 advert__text">з 1 червня 2020 по 31 серпня 2020</p>
              </div>
            </div>
            <div class="socials">
              <p class="a1">поділитися:</p>
              <a
                href="https://twitter.com/"
                target="_blank"
                class="socials__icon"
              >
                <img src="~/static/images/twi_black.svg" alt
              /></a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="socials__icon"
                ><img src="~/static/images/fb_black.svg" alt />
              </a>
            </div>
          </div>
          <h6
            class="text_type_description__secondary_title"
            v-if="data.secondTitle"
          >
            {{ data.secondTitle }}
          </h6>
          <p
            class="p1 text_type_description__long_description"
            v-if="data.secondDescription"
          >
            {{ data.secondDescription }}
          </p>
          <ul class="offer_list" v-if="data.offer_list">
            <li
              v-for="offer in data.offer_list"
              :key="offer.id"
              class="one_offer"
            >
              <p
                class="p2_light one_offer__description one_offer__description_line"
              >
                –
              </p>
              <p class="p2_light one_offer__description">
                {{ offer.value }}
                <br />
                <span class="one_offer__date">{{ offer.date }}</span>
              </p>
            </li>
          </ul>
          <p
            v-if="data.thirdDescription"
            class="p1 text_type_description__long_description"
          >
            {{ data.thirdDescription }}
          </p>
        </div>
      </div>

      <div class="image_type_description">
        <div class="image_type_description__image_wrapper">
          <img
            class="image_type_description__image"
            src="~/static/images/offer_right_block.jpg"
            alt
          />
        </div>

        <div
          class="image_type_description__advert right-data"
          v-if="!positionInRoom"
        >
          <div class="advert">
            <p class="a1 advert__text">Дати бронювання:</p>
            <p class="a1 advert__text">з 24 лютого по 1 березня 2020</p>
            <div class="advert__subblock">
              <p class="a1 advert__text">Період проживання:</p>
              <p class="a1 advert__text">з 1 червня 2020 по 31 серпня 2020</p>
            </div>
          </div>
          <div class="socials">
            <p class="a1">поділитися:</p>
            <a
              href="https://twitter.com/"
              class="socials__icon"
              target="_blank"
            >
              <img src="~/static/images/twi_black.svg" alt
            /></a>
            <a
              href="https://www.facebook.com/"
              class="socials__icon"
              target="_blank"
              ><img src="~/static/images/fb_black.svg" alt />
            </a>
          </div>
        </div>
      </div>

      <div class="description__image">
        <img
          class="image_type_description__image"
          src="~/static/images/offer_right_block.jpg"
          alt
        />
      </div>

      <div class="other-info">
        <div
          class="image_type_description__advert left-data"
          v-if="positionInRoom"
        >
          <div class="advert">
            <p class="a1 advert__text">Дати бронювання:</p>
            <p class="a1 advert__text">з 24 лютого по 1 березня 2020</p>
            <div class="advert__subblock">
              <p class="a1 advert__text">Період проживання:</p>
              <p class="a1 advert__text">з 1 червня 2020 по 31 серпня 2020</p>
            </div>
          </div>
          <div class="socials">
            <p class="a1">поділитися:</p>
            <a
              href="https://twitter.com/"
              target="_blank"
              class="socials__icon"
            >
              <img src="~/static/images/twi_black.svg" alt
            /></a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              class="socials__icon"
              ><img src="~/static/images/fb_black.svg" alt />
            </a>
          </div>
        </div>
        <h6
          class="text_type_description__secondary_title"
          v-if="data.secondTitle"
        >
          {{ data.secondTitle }}
        </h6>
        <p
          class="p1 text_type_description__long_description"
          v-if="data.secondDescription"
        >
          {{ data.secondDescription }}
        </p>

        <ul class="offer_list" v-if="data.offer_list">
          <li
            v-for="offer in data.offer_list"
            :key="offer.id"
            class="one_offer"
          >
            <p
              class="p2_light one_offer__description one_offer__description_line"
            >
              –
            </p>
            <p class="p2_light one_offer__description">
              <span class="one_offer__description__header">
                {{ offer.value }}
              </span>
              <span class="one_offer__description__categories">
                {{ offer.all_categories }}
              </span>

              <br />
              <span class="one_offer__date">{{ offer.date }}</span>
            </p>
          </li>
        </ul>
        <p
          v-if="data.thirdDescription"
          class="p1 text_type_description__long_description"
        >
          {{ data.thirdDescription }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpecialOfferDescription",
  data: () => ({}),
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    positionInRoom: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    console.log(this.data.offer_list);
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";
@import "../../../assets/scss/blocks/right_advert.scss";
.special_offer_description_container {
  display: flex;
  flex-wrap: wrap;
  @include pl-168;
  @include mb-140;

  @include max(sm) {
    padding-left: 0;
  }
}

.text_type_description {
  padding-top: 64px;
  //width: 622px;
  width: 49%;

  @include max(lg) {
    height: 100%;
    width: 49%;
    padding-top: 0;
    width: auto;
    margin-bottom: 116px;
  }
  @include max(md) {
    margin-top: 24px;
    width: 49%;
    margin-bottom: 0;
  }
  @include max(sm) {
    width: 96%;
    margin: 0 auto;
  }

  &__city_list {
    opacity: 0.3;
    @include mb-16;
  }
  &__main_title {
    @include mb-40;

    @include max(sm) {
      margin-bottom: 56px;
    }
  }
  &__long_description {
    margin-top: 24px;
    @include max(lg) {
      max-width: 445px;
    }
    @include max(md) {
      max-width: 534px;
    }
    @include max(sm) {
      margin-top: 32px;
      max-width: 100%;
    }
  }
  &__secondary_title {
    @include mt-80;

    @include max(lg) {
      margin-top: 72px;
    }
    @include max(md) {
      margin-top: 64px;
    }
    @include max(sm) {
      margin-top: 48px;
    }
  }
  &__other-info {
    @include max(lg) {
      display: none;
    }
  }
  .description__image {
    display: none;

    @include max(sm) {
      width: 100%;
      display: block;
      padding-right: 0;
    }
  }
}

.image_type_description {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  &__image_wrapper {
    margin-left: auto;

    @include max(lg) {
      width: 100%;
      height: 100%;
      display: none;
    }
    @include max(md) {
      display: block;
    }
  }
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .advert {
    margin-top: 104px;
    width: 500px;
    &__text {
      color: rgba(#171717, 0.8);
    }
    @include max(lg) {
      padding: 34px 34px 23px 34px;
      width: 100%;
    }
    @include max(md) {
      display: none;
    }
  }
  .socials {
    @include max(lg) {
      margin-top: 32px;
    }
  }
  @include min(xl) {
    margin-left: 20px;
  }
  @include max(lg) {
    //max-width: 323px;
  }
  @include max(md) {
    margin-left: 20px;
    width: 47%;
  }
  @include max(sm) {
    display: none;
  }
}

.offer_list {
  margin: 40px 0;
}
.one_offer {
  display: flex;
  @include mb-24;
  &__description {
    @include max(sm) {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 18px;
    }
    color: rgba(0, 0, 0, 0.9);
    line-height: 132%;
    &__header {
      @include max(sm) {
        margin-bottom: 24px;
        font-size: 18px;
        max-width: 220px;
        line-height: 23px;
      }
    }
    br {
      @include max(sm) {
        display: none;
      }
    }
    &__categories {
    }
    &_line {
      opacity: 0.5;
      margin-right: 8px;

      @include max(sm) {
        display: none;
      }
    }
  }
  &__date {
    opacity: 0.6;
    @include min(sm) {
      line-height: 30px;
    }

    @include max(sm) {
      margin-top: 6px;
    }
  }

  @include max(sm) {
    background-color: #f0edea;
  }
}

.advert {
  p {
    line-height: 188%;
    color: rgba(#171717, 0.8);
  }
}
.left-data {
  display: none;
}
.right-data {
  display: block;

  @include max(md) {
    display: none;
  }
}
.socials {
  align-items: baseline;
  .socials__icon {
    height: fit-content;
  }
}
.positionInRoom {
  .left-data {
    display: block;
  }
  .right-data {
    display: none;
  }

  .image_type_description__advert {
    .advert {
      width: calc(100% + 40px + 25%);
      margin-left: -40px;
    }
  }
  .text_type_description__long_description {
    max-width: 450px;
    margin-bottom: 64px;
    &:last-of-type {
      max-width: unset;
      width: calc(100% + 50px);
      margin-top: 140px;
    }
  }
  .socials {
    padding-left: 0;
    margin-top: 60px;

    @include max(lg) {
      margin-top: 32px;
    }
  }
}

.description__image {
  display: none;

  @include max(lg) {
    display: block;
    width: 100%;
    height: 445px;
    padding-right: 114px;

    img {
      height: 100%;
      object-fit: cover;
    }
  }
  @include max(md) {
    display: none;
  }
  @include max(sm) {
    height: 431px;
  }
}
.description__advert {
  display: none;
  @include max(md) {
    display: block;
  }
  .advert {
    @include max(md) {
      max-width: 326px;
      margin-top: 40px;
      padding: 0;
      background: none;
    }
    @include max(sm) {
      margin-top: 32px;
    }
  }
  .socials {
    @include max(md) {
      margin-top: 32px;
      padding-left: 0;
    }
    @include max(sm) {
      display: none;
    }
  }
}
.other-info {
  display: none;
  @include max(lg) {
    display: block;
  }

  @include max(sm) {
    width: 96%;
    margin: 0 auto;
  }
}
</style>
