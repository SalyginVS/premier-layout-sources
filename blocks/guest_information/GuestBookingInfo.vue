<template>
  <div class="guest_booking_info">
       <InfoTitleBlock :dataInfo="dataInfo"/>
        <div class="info-wrapper">
            <RoomInfoBooking :bookingInfo="bookingInfo" :bookingInfoCondition="bookingInfoCondition"/> 
        </div>
  </div>
</template>

<script>
import RoomInfoBooking from "~/blocks/guest_information/RoomInfoBooking";
export default {
  name: "GuestBookingInfo",
  props: {
      dataInfo:{
          type: Object,
          default:()=>({})
      },
      bookingInfo:{
          type: Array,
          default:()=>([])
      },
      bookingInfoCondition:{
           type: Array,
          default:()=>([])
      }
     
  },
  components: {
      RoomInfoBooking,
  },
  data() {
    return {
    }
  },
};
</script>

<style lang="scss" scoped>
.guest_booking_info{
  width: 100%;
  .info-wrapper{
      display: flex;
      flex-direction: column;
      background-color: rgba(#F0EDEA, 0.5);
  }

}
</style>