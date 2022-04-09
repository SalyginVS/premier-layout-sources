<template>
  <div class="tile_block_container">
    <BigSlideSlider class="slider" :slides="offers">
      <template v-slot="{slide}">
        <SliderForeground :slide="slide"/>
      </template>
    </BigSlideSlider>
    <div class="list_wrapper">
      <nuxt-link
        to="/"
        v-for="offer in offers"
        :key="offer.id"
        class="offer list_element"
        :style="{
          backgroundImage: ` linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.576) 80.17%), url(${offer.image})`
        }"
      >
      <div class="bottom-description__wrapper" :style="{'border-image':`url(${offer.border}) 1`}"></div>
        <div class="label_wrapper">
          <SaleLabel :text="offer.label" />
        </div>
        <h5>{{ offer.title }}</h5>
        <p class="p1 bottom_description">{{ offer.middle_description }}</p>
        
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import BigSlideSlider from "~/blocks/globals/sliders/BigSlideSlider";
import SliderForeground from "~/blocks/our_blog/SliderForeground";

export default {
  name: "TileBlock",
  props:{
    isOurBlog:{
      type:Boolean,
      default:false
    }
  },
  components: {
    BigSlideSlider,
    SliderForeground
  },
  data: () => ({
    offers: [
      {
        id: 0,
        image: require("~/static/images/offer_list1.jpg"),
        border:require("~/static/images/new_gold.png"),
        label: "#17 SUMMER 2019",
        title: "Premier Club Magazine",
        middle_description:
          "Сервіс на вищому рівні завжди майже непомітний, але залишає теплі емоції від місця, яке Ви відвідали. ",
        bottom_description: "Кількість готелів беруть участь в акції:  3"
      },
      {
        id: 1,
        image: require("~/static/images/offer_list2.jpg"),
        border:require("~/static/images/new_gold.png"),
        label: "#16 SPRING 2019",
        title: "Premier Club Magazine",
        middle_description:
          "Сервіс на вищому рівні завжди майже непомітний, але залишає теплі емоції від місця, яке Ви відвідали. ",
        bottom_description:
          "Premier Palace Hotel, Premier Hotel Rus, Premier Hotel Odesa, Premier Hotel Palazzo"
      },
      {
        id: 2,
        image: require("~/static/images/offer_list3.jpg"),
        border:require("~/static/images/new_gold.png"),
        label: "#15 WINTER 2019",
        title: "Premier Club Magazine",
        middle_description:
          "Сервіс на вищому рівні завжди майже непомітний, але залишає теплі емоції від місця, яке Ви відвідали. ",
        bottom_description: "Київ, Одеса, Полтава"
      }
    ]
  })
};
</script>
<style lang="scss">
.tile_block_container{
  .big_slide_slider{
    .bottom-description__wrapper {
  border: 1px solid;
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 4px;
  width: calc(100% - 8px);
}
  }
}
</style>
<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
@import "../../assets/scss/blocks/transformed_list.scss";

.offer {
  padding: 20px 20px 28px;
  cursor: pointer;
@include max(1023){
  padding: 16px 16px 24px;
}
  @include max(sm) {
    display: none;
  }
}
.slider {
  @include min(sm) {
    display: none;
  }
  &.all_offers {
    display: none;
  }
}
.offer {
  .label_wrapper {
    opacity: 1;
  }
}
.bottom_description {
  margin-top: 8px;
  @include max(1439){
    display:none;
  }
}
.bottom-description__wrapper{
  border: 1px solid;
  position:absolute;
  top:4px;
  bottom:4px;
  left:4px;
  width: calc(100% - 8px);
}
</style>
