<template>
  <div id="rooms">
    <HeaderBlock :header_ligh_style="true" />
    <BreadCrumbs :crumbs="crumbs" />
    <div class="top_distance"></div>
    <HotelsTitle :line="true" />
    <transition name="fade">
      <ModalTemplate
        :openModal="is_hotels_map_modal_open"
        :positionStart="true"
        :mapWrapper="true"
        @closeModal="closeModal"
      >
        <OneHotelMap />
      </ModalTemplate>
    </transition>

  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import HeaderBlock from "~/components/HeaderBlock";
import HotelsTitle from "~/blocks/hotels/HotelsTitle";
import ModalTemplate from "~/components/modals/ModalTemplate";
import OneHotelMap from "~/blocks/one_hotel/OneHotelMap";

export default {
  components: {
    HeaderBlock,
    HotelsTitle,
    ModalTemplate,
    OneHotelMap,
  },
  data: () => ({
    crumbs: ["Premier Palace Hotel", "ГОТЕЛІ"],
  }),
  computed: {
    ...mapState({
      is_hotels_map_modal_open: state => state.modals.isHotelsMapModalOpen,
    }),
  },
  methods: {
     closeModal() {
       console.log('close')
      this.closeHotelsMapModal()
    },
    ...mapMutations('modals', {
      closeHotelsMapModal: 'closeHotelsMapModal'
    })
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";
.top_distance {
  margin-top: 243px;

  @include max(lg) {
    margin-top: 214px;
  }

  @include max(md) {
    margin-top: 202px;
  }
  @include max(sm) {
    margin-top: 175px;
  }
}
</style>
