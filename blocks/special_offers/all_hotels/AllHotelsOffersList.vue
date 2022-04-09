<template>
  <div class="all_hotels_offer_list_container container">
    <div class="main-wrapper">
      <div class="hotels_wrapper" v-if="offer_type === 'hotels'">
        <h6 class="offer_list__title">
          Вибирайте готель і дати вашого проживання:
        </h6>
        <OneHotel v-for="key in 3" :key="key" />
      </div>
      <div class="rooms_wrapper" v-else>
        <h6 class="offer_list__title">Вибирайте Номери</h6>
        <OneRoom v-for="key in 3" :key="key" />
      </div>
    </div>
  </div>
</template>

<script>
import OneHotel from "~/blocks/hotels/OneHotel";
import OneRoom from "~/blocks/rooms/OneRoom";

export default {
  name: "OffersList",
  components: {
    OneHotel,
    OneRoom
  },
  props: {
    offer_type: {
      type: String,
      default: "hotels"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";
.all_hotels_offer_list_container {
  @include mb-140;
}
.offer_list__title {
  margin-bottom: 72px;
}
</style>
