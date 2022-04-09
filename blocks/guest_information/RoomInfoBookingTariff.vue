<template>
  <div class="room_info_booking_tariff">
    <p
      class="p1 desc"
    >Тариф включає: - використання фітнес-центру та басейну, Wi-Fi Інтернет в номері, безкоштовна парковка, 20% ПДВ, телевізор, супутникові канали, ванна кімната, кондиціонер.Тариф включає: - використання.</p>
    <div class="conditions">
      <Checkbox v-for="data in bookingInfoCondition" :key="data.key" :data="data"/>
    </div>
    <GoldButton  :text="'підтвердити бронювання'"/>
  </div>
</template>

<script>
import GoldButton from "~/components/GoldButton";
export default {
  name: "RoomInfoBookingTariff",
  props: {
    bookingInfoCondition: {
      type: Array,
      default: () => ([]),
    },
  },
  components:{
      GoldButton
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.room_info_booking_tariff {
  width: 100%;
  padding: 32px 32px 40px 32px;
  background-color: #f0edea;

  @include max (lg){
    padding-bottom: 61px;
  }
  @include max (md){
    padding: 24px 40px 32px;
  }
  @include max (sm){
    padding: 24px 18px;
  }
  .desc {
    width: 100%;
    padding: 0 8px 32px 8px;
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    @include max(lg){
      padding: 0 0 32px;
    }
    @include max(md){
      padding: 0 8px 24px;
    }
  }
  .conditions {
    padding: 24px 8px 0 8px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;

    @include max(lg){
      padding: 24px 0 0;
      margin-bottom: 34px;
    }

    @include max(md){
      margin-bottom: 32px;
    }

    @include max(sm){
      margin-bottom: 48px;
    }

    .checkbox-container{
        &:not(:last-child){
            margin-bottom: 24px;

            @include max (lg){
              margin-bottom: 19px;
            }

            @include max (md){
              margin-bottom: 24px;
            }
            @include max (sm){
              margin-bottom: 18px;
            }
        }
    }
  }
  .gold_button{
      width: 100%;

      @include max(md){
        width: fit-content;
      }

      @include max(500){
        width: 100%;
      }
  }
}
</style>
