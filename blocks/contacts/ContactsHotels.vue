<template>
  <div class="contacts_hotels_container">
    <div class="main-wrapper">
      <TwoTitles
        main_title="Корпоративні контакти"
        little_title="Корпоративні"
      />

      <div class="city__search">
        <input class="search__input" type="text" placeholder="Ваше місто?" />
        <div class="search__button">
          <img src="~/static/icons/search-icon.svg" alt="" />
        </div>
      </div>

      <div class="list_wrapper container">
        <div
          v-for="contact in hotels_contacts"
          :key="contact.id"
          class="contact list_element"
          :style="{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.576) 80.17%),  url(${contact.img})`,
          }"
          @mouseenter.self.stop="showInfo"
          @mouseleave.self.stop="hideInfo"
        >
          <div class="label_wrapper">
            <SaleLabel :text="contact.label" />
          </div>
          <div class="foreground_wrapper">
            <div class="visible_part_wrapper">
              <div class="contact__preview">
                <h5 class="contact__main_title">{{ contact.title }}</h5>
                <StarsAndCity
                  :dark="isDarkVis"
                  :star_count="5"
                  :city="contact.place"
                />
              </div>
              <div class="hidden_part">
                <div class="contact__list">
                  <p class="a1 contact__mail">
                    <a href="mailto:reservation@premier-palace.com"
                      >reservation@premier-palace.com</a
                    >
                  </p>
                  <p
                    class="a1 contact__phone"
                    v-for="phone in contact.phones"
                    :key="phone"
                  >
                    <a :href="`tel:${phone}`">{{ phone }}</a>
                  </p>
                </div>

                <div class="contact__messangers">
                  <svg
                    width="18"
                    height="8"
                    fill="red"
                    viewBox="0 0 18 8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4204 8L6.88974 4.25506L0 8L7.57959 0L11.1969 3.74494L18 0L10.4204 8Z"
                      fill="white"
                    />
                  </svg>

                  <!-- <img class="messenger" src="~/static/images/viber.svg" alt /> -->

                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3805 5.03565C10.3953 3.3438 8.91564 1.79283 7.08207 1.57836C7.0456 1.57414 7.00588 1.56773 6.96382 1.56095C6.87305 1.54631 6.77917 1.53125 6.68446 1.53125C6.30866 1.53125 6.2082 1.78832 6.18176 1.94163C6.15604 2.0907 6.18057 2.21588 6.25455 2.31386C6.379 2.47865 6.59797 2.50791 6.77385 2.53135C6.8254 2.53828 6.87404 2.54473 6.91476 2.55363C8.56215 2.9121 9.11685 3.47569 9.38795 5.06632C9.39457 5.10519 9.39755 5.15308 9.40073 5.20387C9.41256 5.39401 9.4372 5.7896 9.87392 5.7896H9.87396C9.91032 5.7896 9.94939 5.78654 9.99007 5.7805C10.3968 5.72032 10.384 5.35872 10.3779 5.18498C10.3762 5.13605 10.3745 5.08976 10.3788 5.05898C10.3799 5.05123 10.3805 5.04344 10.3805 5.03565Z"
                      fill="white"
                    />
                    <path
                      d="M6.57499 0.957314C6.62379 0.960742 6.66998 0.964022 6.70844 0.969761C9.41361 1.37489 10.6577 2.62304 11.0025 5.27801C11.0083 5.32314 11.0092 5.37818 11.0102 5.43647C11.0136 5.6439 11.0207 6.07541 11.4966 6.08435L11.5114 6.0845C11.6606 6.0845 11.7793 6.04068 11.8642 5.95414C12.0124 5.80325 12.002 5.57909 11.9937 5.39894C11.9917 5.35474 11.9897 5.31311 11.9902 5.27667C12.0246 2.56132 9.611 0.0990556 6.82516 0.00749066C6.8136 0.00711799 6.80258 0.00771426 6.79144 0.00924221C6.78597 0.0100248 6.77583 0.0109938 6.75845 0.0109938C6.73067 0.0109938 6.6965 0.00864593 6.66026 0.00626085C6.61644 0.00335403 6.56677 0 6.51641 0C6.07276 0 5.98841 0.30708 5.97762 0.490135C5.95275 0.91319 6.37301 0.942966 6.57499 0.957314Z"
                      fill="white"
                    />
                    <path
                      d="M10.8737 8.70935C10.8162 8.66657 10.7567 8.6223 10.701 8.57862C10.4057 8.34715 10.0915 8.1338 9.78757 7.92745C9.7245 7.88467 9.66144 7.84185 9.5986 7.79892C9.20933 7.53265 8.85936 7.40326 8.52872 7.40326C8.08339 7.40326 7.69511 7.64288 7.37465 8.11539C7.23267 8.32487 7.06043 8.42672 6.84815 8.42672C6.72263 8.42672 6.58 8.39184 6.42429 8.32301C5.16781 7.76814 4.2706 6.91741 3.75753 5.79444C3.50951 5.25169 3.58992 4.8969 4.02641 4.60816C4.27427 4.44433 4.73564 4.13934 4.70296 3.55529C4.66595 2.89205 3.16322 0.896445 2.53006 0.669787C2.26199 0.573788 1.98033 0.572893 1.69141 0.667551C0.963534 0.905836 0.441205 1.32431 0.180748 1.87765C-0.070945 2.41232 -0.0595793 3.04012 0.213621 3.69318C1.00341 5.58135 2.11382 7.22758 3.51411 8.58607C4.88474 9.91591 6.56936 11.0052 8.52114 11.8236C8.69706 11.8974 8.8816 11.9376 9.01634 11.9669C9.06226 11.977 9.10191 11.9855 9.1308 11.9932C9.14668 11.9975 9.16306 11.9997 9.17948 11.9999L9.1949 12C9.19494 12 9.1949 12 9.19498 12C10.113 12 11.2152 11.1831 11.5537 10.2518C11.8503 9.43628 11.3088 9.0332 10.8737 8.70935Z"
                      fill="white"
                    />
                    <path
                      d="M6.98265 3.1141C6.82548 3.11797 6.4984 3.12587 6.38363 3.45028C6.32994 3.60188 6.33637 3.73351 6.40277 3.84151C6.5002 3.99997 6.68687 4.04853 6.85667 4.07517C7.47245 4.1714 7.78871 4.503 7.85196 5.11865C7.88135 5.40571 8.07985 5.60617 8.33472 5.60617H8.33476C8.35359 5.60617 8.37284 5.60509 8.39201 5.60282C8.69854 5.5673 8.84714 5.34799 8.83371 4.95102C8.83861 4.53672 8.61596 4.06638 8.23729 3.69173C7.85732 3.31593 7.39928 3.10429 6.98265 3.1141Z"
                      fill="white"
                    />
                  </svg>

                  <!-- <img
                    class="messenger"
                    src="~/static/images/telegram.svg"
                    alt
                  /> -->

                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.49349 7.9088L5.2619 11.2592C5.59324 11.2592 5.73674 11.1128 5.90883 10.937L7.46228 9.41L10.6812 11.8346C11.2715 12.173 11.6875 11.9948 11.8467 11.276L13.9596 1.09284L13.9602 1.09224C14.1474 0.194642 13.6446 -0.156356 13.0694 0.063843L0.649953 4.95442C-0.197651 5.29282 -0.184817 5.77881 0.505866 5.99901L3.68103 7.01481L11.0563 2.26823C11.4034 2.03183 11.719 2.16263 11.4594 2.39903L5.49349 7.9088Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <div class="locale">
                  <img class="pin" src="~/static/images/pin.svg" alt />
                  <img
                    class="pin_light"
                    src="~/static/images/pin_light.svg"
                    alt
                  />
                  <p class="p1">{{ contact.distance }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TwoTitles from "~/blocks/globals/TwoTitles";
import StarsAndCity from "~/blocks/globals/hotel_props/StarsAndCity.vue";
import ListBlock from "~/blocks/globals/ListBlock";

export default {
  name: "ContactsHotels",
  components: {
    TwoTitles,
    StarsAndCity,
    ListBlock,
  },
  data: () => ({
    isDarkVis : false,
    hotels_contacts: [
      {
        id: 0,
        img: require("~/static/images/offer_list1.jpg"),
        label: "сайт готелю",
        title: "Premier Palace Hotel",
        stars: 4,
        place: "Київ, Україна",
        distance: "1.2 км до центра міста",
        email: "reservation@premier-palace.com",
        phones: ["+38 (044) 244 12 00", "+38 (044) 537 45 00"],
      },
      {
        id: 1,
        img: require("~/static/images/offer_list1.jpg"),
        label: "сайт готелю",
        title: "Premier Palace Hotel",
        stars: 4,
        place: "Київ, Україна",
        distance: "1.2 км до центра міста",
        email: "reservation@premier-palace.com",
        phones: ["+38 (044) 244 12 00", "+38 (044) 537 45 00"],
      },
      {
        id: 2,
        img: require("~/static/images/offer_list1.jpg"),
        label: "сайт готелю",
        title: "Premier Palace Hotel",
        stars: 4,
        place: "Київ, Україна",
        distance: "1.2 км до центра міста",
        email: "reservation@premier-palace.com",
        phones: ["+38 (044) 244 12 00", "+38 (044) 537 45 00"],
      },
      {
        id: 3,
        img: require("~/static/images/offer_list1.jpg"),
        label: "сайт готелю",
        title: "Premier Palace Hotel",
        stars: 4,
        place: "Київ, Україна",
        distance: "1.2 км до центра міста",
        email: "reservation@premier-palace.com",
        phones: ["+38 (044) 244 12 00", "+38 (044) 537 45 00"],
      },
      {
        id: 4,
        img: require("~/static/images/offer_list1.jpg"),
        label: "сайт готелю",
        title: "Premier Palace Hotel",
        stars: 4,
        place: "Київ, Україна",
        distance: "1.2 км до центра міста",
        email: "reservation@premier-palace.com",
        phones: ["+38 (044) 244 12 00", "+38 (044) 537 45 00"],
      },
      {
        id: 5,
        img: require("~/static/images/offer_list1.jpg"),
        label: "сайт готелю",
        title: "Premier Palace Hotel",
        stars: 4,
        place: "Київ, Україна",
        distance: "1.2 км до центра міста",
        email: "reservation@premier-palace.com",
        phones: ["+38 (044) 244 12 00", "+38 (044) 537 45 00"],
      },
    ],
  }),
  methods: {
    showInfo(e) {
      if (window.innerWidth > 650) {
        let visible_part_wrapper = e.target.querySelector(
          ".visible_part_wrapper"
        );
        visible_part_wrapper.style.transform = `translateY(0)`;
      }
    },
    hideInfo(e) {
      if (window.innerWidth > 650) {
        let visible_part_wrapper = e.target.querySelector(
          ".visible_part_wrapper"
        );
        let hidden_part = e.target.querySelector(".hidden_part");
        visible_part_wrapper.style.transform = `translateY(${hidden_part.offsetHeight}px)`;
      }
    },
    initHoveredElements() {
      if (window.innerWidth > 650) {
        let visible_part_wrapper = document.querySelectorAll(
          ".visible_part_wrapper"
        );
        for (let el of visible_part_wrapper) {
          let hidden_part = el.querySelector(".hidden_part");
          el.style.transform = `translateY(${hidden_part.offsetHeight}px)`;
        }
      }
    },
    darkVisible(){
      if(window.innerWidth < 650){
        this.isDarkVis = true
      }
    }
  },
  mounted() {
    this.darkVisible()
    this.initHoveredElements();
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/blocks/transformed_list.scss";
@import "../../assets/scss/utils.scss";
a {
  color: #ffffff;
  
}

.locale,
a,
.contact__messangers,
.contact__list,
.list_element h5,
.list_element p,
.city {
  @include max(sm) {
    color: black;
  }
}

.sale_label {
  @include max(sm) {
    display: none;
  }
}
.contacts_hotels_container {
  @include mt-140;
}
.list_wrapper {
  margin-top: 96px;
  @include mb-140;



  @include max(lg) {
    margin-top: 72px;
    padding-bottom: 180px;
  }

  @include max(md) {
    margin-top: 64px;
    padding-bottom: 150px;
  }

  @include max(sm) {
    padding-bottom: 0;
    margin-top: 48px;
    margin-bottom: 80px;
    max-width: 100%;
    padding: 0;
  }
}
.locale {
  display: flex;
  align-items: center;
  .pin_light {
    @include max(sm) {
      display: none;
    }
  }
  .pin {
    @include min(sm) {
      display: none;
    }
  }
  img {
    margin-right: 12px;
  }
  p {
    font-size: 12px;
  }
}
.foreground_wrapper {
  overflow: hidden;
  padding: 24px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @include max(sm) {
    background-color: rgb(240, 237, 234);
    height: 295px;
    color: black;
    top: 333px;

    margin-right: 21px;
    width: 100%;
  }
}
.contact {
  position: relative;
  &__main_title {
    @include max(1350) {
      font-size: 27px;
    }

    @include max(lg) {
      font-size: 28px;
    }

    @include max(700) {
      font-size: 24px;
    }

    margin-bottom: 7px;

  }
  &__list {
    padding-top: 36px;
    @include mb-22;

    @include max(sm) {
      padding-top: 30px;
    }
  }
  &__messangers {
    margin-bottom: 38px;

    svg {
      margin-right: 24px;
    }
    @include max(sm) {
      margin-bottom: 30px;
      path {
        fill: black;
        fill-opacity: 0.5;
      }
    }
    @include min(sm) {
      path {
        fill: white;
      }
    }
  }
  &__mail {
    margin-bottom: 18px;
  }
  &__phone {
    margin-bottom: 8px;
    @include max(sm) {
      margin-bottom: 18px;
    }
  }
}
.list_element {
  @include max(lg) {
    width: calc(50% - 24px);
    transform: translateY(0px);
    height: 450px;
    margin-bottom: 48px;
    &:nth-of-type(3n + 1) {
      transform: translateY(0px);
    }
    &:nth-of-type(3n) {
      transform: translateY(0px);
    }
    &:nth-of-type(2n) {
      transform: translateY(50%);
    }
  }
  @include max(md) {
    width: calc(50% - 22px);
    height: 390px;
    margin-bottom: 44px;
  }
  @include max(sm) {
    width: 100%;
    height: 390px;
    margin-bottom: 286px;
    &:nth-of-type(2n) {
      transform: translateY(0%);
      margin-right: 36px;
    }
    &:nth-of-type(2n + 1) {
      margin-left: 36px;
      .foreground_wrapper {
        left: -21px;
      }
    }
    &:nth-of-type(2n + 2) {
      .foreground_wrapper {
        left: 21px;
      }
    }
    &:last-child {
      margin-bottom: 240px;
    }
  }
}
.messenger {
  padding: 8px;
  margin: -8px;
  margin-right: 16px;
  cursor: pointer;
}
.contact__phone:last-of-type {
  margin-bottom: 0;
}

.visible_part_wrapper {
  @include max(sm) {
    transform: translateY(0px);
  }
}
.hidden_part {
  @include max(sm) {
    opacity: 1;
  }
}

.city__search {
  margin: 32px auto 0;
  display: flex;
  width: 396px;
  height: 54px;

  @include min(lg) {
    display: none;
  }
  @include max(500) {
    width: 94%;
    margin: 56px auto 0;
  }
}
.search__input {
  border-radius: 2px 0 0 2px;
  padding: 16px 18px;
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  color: black;
  font-size: 20px;
  background-color: #f0edea;
  &::placeholder {
    color: black;
  }
}
.search__button {
  border-radius: 0 2px 2px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  background-color: #f0edea;

  img {
    cursor: pointer;
  }
}
</style>
