<template>
  <div class="interesting_place container">
    <h6 class="interesting_place__title">
      {{interesting_place.title}}
      <span class="interesting_place__place">{{interesting_place.place}}</span>
    </h6>
    <p class="p1 interesting_place__description_text">{{interesting_place.description}}</p>

    <ul class="benefition_list" v-if="interesting_place.list">
      <li
        class="a1 benefition_list__benefition"
        v-for="benefition in interesting_place.list"
        :key="benefition"
      >– {{benefition}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "InterestingPlace",
  props: {
    interesting_place: {
      type: Object,
      default: () => ({
        title: "",
        place: "",
        description: "",
        list: null
      })
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/utils.scss';

.interesting_place {
  margin-top: 96px;
  &__title {
    @include mb-24;
  }
  &__place {
    opacity: 0.5;
  }
  &__description_text {
    width: 656px;
  }
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.benefition_list {
  margin-top: 40px;
  &__benefition {
    opacity: 0.8;
    @include mb-24;
  }
}

.benefition_list__benefition:last-of-type {
  margin-bottom: 0px;
}
</style>