<template>
  <div id="rooms_block">
    <div class="main-wrapper">
      <div class="rooms-inner-wrapper">
        <div class="filters">
          <p v-for="filter in filters" :key="filter" class="a1">{{ filter }}</p>
        </div>
        <div class="room_wrapper">
          <OneRoom @openRoomDetailsModal="openRoomDetailsModal" />
          <OneRoom @openRoomDetailsModal="openRoomDetailsModal" />
          <OneRoom @openRoomDetailsModal="openRoomDetailsModal" />
        </div>
        <RoomDetailsModal
          @closeModal="closeRoomDetailsModal"
          :openModal="isRoomDetailsModalOpen"
        />
      </div>
    </div>
  </div>
</template>

<script>
import OneRoom from "~/blocks/rooms/OneRoom";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Rooms",
  components: {
    OneRoom
  },
  data: () => ({
    filters: [
      "Все комнаты",
      "стандартные категории",
      "тематические люксы",
      "персональные апартаменты",
      "исполнительный этаж"
    ],
    openRoomDetails: false
  }),
  methods: {
    ...mapMutations("modals", ["openRoomDetailsModal", "closeRoomDetailsModal"])
    // openRoomDetailsModal() {
    //   this.openRoomDetails = true;
    // },
    // CloseModal() {
    //   this.openRoomDetails = false;
    // }
  },
  computed: {
    ...mapState('modals',{
      isRoomDetailsModalOpen: state => state.isRoomDetailsModalOpen
    })
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
#rooms_block {
  // width: 1104px;
  // margin: auto;
  // @include max(lg) {
  //   width: 100%;
  //   padding: 0 134px;
  // }
  // @include max(md) {
  //   padding: 0 48px;
  // }
  // @include max(sm) {
  //   padding: 0 18px;
  // }
}
.rooms-inner-wrapper {
  @include min(lg) {
    width: 1104px;
    margin: 0 auto;
  }
  // @include min(xl){
  //   width:100%;
  // }
}
.filters {
  @include mt-140;
  display: flex;
  justify-content: space-between;
  p {
    cursor: pointer;
  }
  @include max(lg) {
    display: none;
  }
}

.a1 {
  font-weight: 450;
  font-size: 10px;
  line-height: 140%;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #000000;
  opacity: 0.5;
  transition-property: opacity;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background-image: url("~@/static/images/gold_for_button.svg");
    left: 0;
    bottom: 0;
    opacity: 0;
    transition-property: opacity;
    transition-duration: 500ms;
    transition-timing-function: ease-in-out;
  }

  @media (hover: hover) {
    &:hover {
      opacity: 1;

      &::after {
        opacity: 1;
      }
    }
  }
}
.room_wrapper {
  margin-top: 82px;
  @include mb-140;
  @include mt-140;
  @include max(sm) {
    margin-top: 80px;
  }
}
</style>
