<template>
  <div class="booking_info_hotel">
    <InfoTitleBlock :dataInfo="dataInfo" />
    <BookingInfoRoom :data="dataRoom" />
  </div>
</template>

<script>
import BookingInfoRoom from "~/blocks/booking_information/BookingInfoRoom";

export default {
  name: "BookingInfoHotel",
  props: {
    dataInfo: {
      type: Object,
      default: () => ({}),
    },
    dataRoom: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    BookingInfoRoom,
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.booking_info_hotel {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  @include max (sm){
    margin-top: 0;
  }
}
</style>
