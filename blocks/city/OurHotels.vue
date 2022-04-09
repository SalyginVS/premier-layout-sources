<template>
  <div class="our_hotels_container">
    <TitleWithDescription :data="titleData" />
    <div class="test"></div>
    <div class="test"></div>

    <div class="list_wrapper container">
      <div
        v-for="contact in hotels_contacts"
        :key="contact.id"
        class="hotel list_element"
        :style="{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.576) 80.17%),  url(${contact.img})`
        }"
        @mouseenter.self.stop="showInfo"
        @mouseleave.self.stop="hideInfo"
      >
        <div class="label_wrapper">
          <SaleLabel :text="contact.label" />
        </div>
        <div class="foreground_wrapper">
          <div class="visible_part_wrapper">
            <div class="top_descriprion_wrapper">
              <h5 class="hotel__main_title">{{ contact.title }}</h5>
              <StarsAndCity
                :star_count="contact.stars"
              />
            </div>

            <div class="hidden_part">
              <div class="top_descriprion_wrapper">
                <HotelDistance @openMapModal="openMapModal" />
              </div>
              <Button
                :big_size="true"
                :text="'перевірити ціни'"
                :link="'/rooms'"
                :whiteButton="true"
              />
              <!-- <nuxt-link to="/rooms" class="hotel__check_price a1">перевірити ціни</nuxt-link> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <transition name="fade">
      <ModalTemplate
        @closeModal="closeModal"
        :openModal="is_map_modal"
        :positionStart="true"
        :mapWrapper="true"
      >
        <OneHotelMap />
      </ModalTemplate>
    </transition>
  </div>
</template>

<script>
import { globalMixin } from "~/plugins/mixins";
import TitleWithDescription from "~/blocks/globals/TitleWithDescription";
import StarsAndCity from "~/blocks/globals/hotel_props/StarsAndCity";
import HotelDistance from "~/blocks/globals/hotel_props/HotelDistance";
import Button from "~/components/Button";

export default {
  name: "OurHotels",
  mixins: [globalMixin],
  props: {
    
  },
  components: {
    TitleWithDescription,
    HotelDistance,
    StarsAndCity,
    Button
  },

  data: () => ({
    is_map_modal: false,
    titleData: {
      little_title: "Наші готелі",
      title_gold: "Відпочиньте в",
      title_black: "наших готелях",
      text_description:
        "Отели Премьер - это профессиональный высококлассный сервис и внимание к вашим пожеланиям. Всем гостям мы предоставляем бесплатный трансфер, обслуживание на reception 24/7, доставка еды в номера с последними!"
    },
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
        phones: ["+38 (044) 244 12 00", "+38 (044) 537 45 00"]
      },
      {
        id: 1,
        img: require("~/static/images/offer_list1.jpg"),
        label: "сайт готелю",
        title: "Premier Palace Hotel",
        stars: 2,
        place: "Київ, Україна",
        distance: "1.2 км до центра міста",
        email: "reservation@premier-palace.com",
        phones: ["+38 (044) 244 12 00", "+38 (044) 537 45 00"]
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
        phones: ["+38 (044) 244 12 00", "+38 (044) 537 45 00"]
      }
    ]
  }),
  methods: {
    showInfo(e) {
      console.log(this.breakpoints);
      if (this.breakpoints <= 1200) {
        e.preventDefault();
        return;
      }
      let visible_part_wrapper = e.target.querySelector(
        ".visible_part_wrapper"
      );
      visible_part_wrapper.style.transform = `translateY(24px)`;
    },
    hideInfo(e) {
      console.log(this.breakpoints);
      if (this.breakpoints <= 1200) {
        e.preventDefault();
        return;
      }
      let visible_part_wrapper = e.target.querySelector(
        ".visible_part_wrapper"
      );
      let hidden_part = e.target.querySelector(".hidden_part");
      visible_part_wrapper.style.transform = `translateY(${hidden_part.offsetHeight}px)`;
    },
    initHoveredElements() {
      let visible_part_wrapper = document.querySelectorAll(
        ".visible_part_wrapper"
      );
      for (let el of visible_part_wrapper) {
        let hidden_part = el.querySelector(".hidden_part");
        el.style.transform = `translateY(${hidden_part.offsetHeight}px)`;
      }
    },
    openMapModal() {
      this.is_map_modal = true;
    },
    closeModal() {
      this.is_map_modal = false;
    }
  },
  mounted() {
    this.initHoveredElements();
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
@import "../../assets/scss/blocks/transformed_list.scss";
.our_hotels_container {
  margin-top: 140px;
  
    @include max(lg) {
      margin-top: 124px;
    }
    @include max(nd){
      margin-top:112px;
    }
    @include max(sm){
      margin-top:0;
    }
  .label_wrapper{
    @include max(lg){
      opacity: 1;
    }
  }
  .list_element{
    @include max(md){
      height:300px;
    }
    @include max(sm){
      width:100%;
      height: 162px;
      transform: unset;
      margin:0;
    }
  }
  .visible_part_wrapper{
    @include max(sm){
      transform: unset !important;
      display: flex;

    }
  }
}
.list_element+.list_element{
  @include max(sm){
    margin-top:18px;
  }
}
.list_wrapper {
  margin: 104px 0 140px;
  @include max(lg){
    margin:104px 0 124px;
  }
  @include max(md){
    margin:64px 0 112px;
  }
}
.foreground_wrapper {
  padding: 6px;
  padding-bottom: 24px;
  @include max(lg){
    padding:6px 16px 16px;
  }
  @include max(md){
    padding:6px 12px 12px;
  }
  @include max(sm){
    padding:6px 10px 10px;
  }
}
.hotel {
  &__main_title {
    margin-bottom: 7px;
  }
  &__check_price {
    background-color: #fff;
    padding: 20px;
    width: 100%;
    margin-top: 20px;
  }
}
.top_descriprion_wrapper {
  padding: 0 18px;
  @include max(lg) {
    padding: 5px 0;
  }
}
.hidden_part {
  padding: 6px;
  padding-top: 32px;
  @include max(768) {
    padding-top: 20px;
  }
  @include max(md){
    display: none;
  }
  .top_descriprion_wrapper {
    margin-bottom: 22px;
  }
  .simple-button {
    width: 100%;
  }
}
</style>
