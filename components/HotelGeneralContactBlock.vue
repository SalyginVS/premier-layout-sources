<template>
  <div class="hotel-general-contact-block">
    <h6 class="font-cormorant">{{ generalContatc.title }}</h6>
    <div class="phones-wrapper">
      <a
        :href="`tel:${phone}`"
        class="a2"
        v-for="phone in generalContatc.phones"
        :key="phone.index"
        >{{ phone }}</a
      >
    </div>
    <a class="a2" target="_blank" :href="`mailto:${generalContatc.email}`">{{
      generalContatc.email
    }}</a>
  </div>
</template>

<script>
export default {
  name: "HotelGeneralContactBlock",
  props: {
    generalContatc: {
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
@import "../assets/scss/utils.scss";
.hotel-general-contact-block {
  width: 100%;
  padding: 32px 40px 40px 40px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  @include max(lg) {
    padding: 32px 40px;
  }
  @include max(md) {
    padding: 24px 40px;
  }
  @include max(sm) {
    padding: 18px 32px 32px 18px;
  }

  h6 {
    margin-bottom: 24px;
  }
  .phones-wrapper {
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;

    @include max(sm) {
      justify-content: space-between;
      flex-direction: row;
    }

    @include max(380) {
      flex-wrap: wrap;
    }

    .a2 {
      @include max (sm){
        &:nth-child(1){
          margin-bottom: 0;
        }
      }
      @include max(380) {
        width: 100%;

        &:nth-child(1){
          margin-bottom: 12px;
        }
      }
    }
  }
  .a2 {
    letter-spacing: 0.24em;
    text-transform: uppercase;
    transition: opacity 0.3s ease-in-out;
    cursor: pointer;
    &:not(:last-child) {
      margin-bottom: 4px;

      @include max(lg) {
        margin-bottom: 16px;
      }
    }
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
