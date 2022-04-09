<template>
  <div id="pinned-item-mob" :class="{ hotel_school_page: isHotelSchoolPage }">
    <div class="pinned-item-mob__list">
      <div
        class="pinned-item-mob__list-item"
        v-for="(elem, index) in newData"
        :key="index"
      >
        <div class="pinned-item_content">
          <p class="little_title">{{ elem.little_title }}</p>
          <h3 class="title">
            <span class="gold_text italic">{{
              elem.title_big.gold_title
            }}</span>
            {{ elem.title_big.black_title }}
          </h3>
          <p class="p1 description">
            {{ elem.description_text }}
          </p>
          <SlashButton v-if="elem.details_button" :text="elem.details_button" :link="elem.details_button_href"/>
        </div>
        <img
          class="pinned-item_img"
          :src="elem.image_mob || elem.image"
          :alt="elem.title_big.gold_title"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SlashButton from "~/components/SlashButton";

export default {
  name: "PinnedItemMob",
  components: {
    SlashButton
  },
  props: {
    data: {
      type: [Object, Array]
    },
    isHotelSchoolPage: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    newData() {
      console.log(this.data);
      if (this.data.length) {
        return this.data;
      } else {
        console.log("Object");
        return [this.data];
      }
    }
  },
  created() {
    console.log(this.data);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
/**hotel_school_page */
.hotel_school_page{
  .pinned-item-mob__list-item{
    @include max(700){
      display: flex;
      flex-flow:row wrap-reverse;
    }
  }
}
/**hotel_school_page */
#pinned-item-mob {
  display: flex;
  flex-direction: column;
  background-color: #fbfbfb;
  .pinned-item_content {
    display: flex;
    flex-direction: column;
    padding: 40px 18px;
    .little_title {
      margin-bottom: 10px;
    }
    .title {
      margin-bottom: 20px;
    }
    .description {
      margin-bottom: 68px;
    }
  }
  .pinned-item_img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
}
</style>
