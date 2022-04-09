<template>
  <div id="oneHotelMap" :class="{ 'hotel-mob': isHotelMap }">
    <!-- <div id="oneHotelMapWrapper"></div> -->
    <app-google-map class="apartment__map" />
    <div type="text controls" class="a1" id="pac-input">Що поблизу?</div>
  </div>
</template>

<script>
import GoogleMap from "~/blocks/globals/GoogleMap";

export default {
  name: "OneHotelMap",
  props: {
    isHotelMap: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    AppGoogleMap: GoogleMap,
  },
  computed: {
    // mapExist() {
    //   let map = this.apartment.map;
    //   if (!map || JSON.parse(map).length === 0) return false;
    //   return true;
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

#oneHotelMap {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
}
#oneHotelMapWrapper {
  height: 90vh;
}
#pac-input {
  position: absolute;
  top: 56px;
  right: 56px;
  // position: relative;
  background: #ffffff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  width: 348px;
  height: 61px;
  padding: 24px;
  border: none;
  // margin: 56px;
  @include max(lg) {
    // top: 32px;
    // left: 34px;

    top: 16px;
    left: 16px;

    //right: 34px;
    width: 288px;
    height: 55px;
  }
  @include max(md) {
    // top: 24px;
    // right: 24px;
    width: 288px;
    height: 55px;
    padding: 21px 24px;
  }
  @include max(sm) {
    top: auto;
    bottom: 0px;
    left: 8px;
    right: 8px;
    width: calc(100% - 14px);
    height: 55px;
    padding: 21px 24px;
  }
  &::before {
    content: "+";
    position: absolute;
    top: 49%;
    right: 25px;
    transform: translateY(-50%);
    font-size: 18px;
  }
}

.hotel-mob {
  #pac-input {
    @include max(sm) {
      bottom: unset;
      top: 20px;
    }
  }
}
</style>
