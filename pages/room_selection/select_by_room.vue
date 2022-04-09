<template>
  <div id="select-by-room">
    <HeaderBlock :header_ligh_style="true" />
    <NewsAlert :news="news" />
    <div class="top_distance"></div>
    <TitleWithFilterBooking
      :detailsFilter="true"
      :data="title_booking_filter"
      :lineDetails="true"
    />
    <rooms />
    <transition name="fade">
      <LogInModal @closeModal="closeModal" :openModal="openLogInModal" />
    </transition>
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";

import TitleWithFilterBooking from "~/blocks/globals/TitleWithFilterBooking";
import Rooms from "~/blocks/select_by_room/Rooms";
import { mapState } from "vuex";

export default {
  components: {
    HeaderBlock,
    TitleWithFilterBooking,
    Rooms,
  },
  data: () => ({
    news:
      'Приєднуйтесь зараз до <a href="/" >premier club</a> та отримайте 10% розпродажів на бронювання',
    title_booking_filter: {
      subtitle: "крок 3/4",
      title_gold: "Виберіть номер",
      title_black: "для бронювання",
    },
  }),
  methods: {
    closeModal() {
      this.$store.commit("setCloseLogInModal");
    },
  },
  computed: {
    ...mapState(["openLogInModal"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.title_with_description {
}
.news-alert {
  display: none;
  @include max(lg) {
    top: 77px;
  }
  @include max(md) {
    top: 76px;
  }
  @include max(sm) {
    top: 61px;
    padding: 13px 14px;
  }
}
.top_distance {
  margin-top: 280px;

  @include max(lg) {
    margin-top: 256px;
  }

  @include max(md) {
    margin-top: 243px;
  }
  @include max(sm) {
    margin-top: 112px;
  }
}
</style>
