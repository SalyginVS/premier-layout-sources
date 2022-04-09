<template>
  <div class="booking-hotel-contact">
    <div class="hotel-contact">
      <h5 class="title">{{ hotelContacts.title }}</h5>
      <HotelContactBlock :contact="hotelContacts.mainContact" />
      <HotelGeneralContactBlock
        :generalContatc="hotelContacts.generalContatcs"
      />
    </div>
    <div class="notes-wrapper">
      <p class="title a2">{{ hotelContacts.notes.title }}</p>
      <p class="description p2_light">{{ hotelContacts.notes.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookingHotelContact",
  props: {
    hotelContacts: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.booking-hotel-contact {
  width: 100%;
  display: flex;
  flex-direction: column;
  .hotel-contact {
    margin-bottom: 56px;
    background-color: #f0edea;

    @include max (lg){
      margin-bottom: 0;
    }
    .title {
      padding: 32px 0 29px 40px;

      @include max(lg) {
        padding: 32px 0px 32px 32px;
      }

      @include max(md) {
        padding: 24px 0px 24px 40px;
      }

      @include max(sm) {
        padding: 24px 0px 24px 18px;
      }


    }
  }
  .notes-wrapper {
    padding: 0 40px;
    display: flex;
    flex-direction: column;

    @include max (lg){
      display: none;
    }

    @include max (sm){
      display: flex;
      padding: 0;
      margin-top: 48px;

    }
    .title {
      margin-bottom: 12px;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: #171717;
    }
  }
}
</style>
