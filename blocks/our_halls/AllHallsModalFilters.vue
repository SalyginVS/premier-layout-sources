<template>
  <div v-if="isPopUpVisible" class="filters_pop-up">
    <div class="pop-up_body">
      <div @click="$emit('popUpVisible')" class="pop-up_back">
        <svg
          width="5"
          height="8"
          viewBox="0 0 5 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M1 7.5L4 4L1 0.5"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div class="a1">назад</div>
      </div>

      <div class="pop-up_list">
        <div class="list_options">
          <div class="option_title">ПО МІСТУ</div>

          <div v-for="option in optionsCity" :key="option.title">
            {{ option.title }}
          </div>
        </div>
        <div class="list_options">
          <div class="option_title">ТИП ПОДІЇ</div>

          <div v-for="option in optionsInterests" :key="option.title">
            {{ option.title }}
          </div>
        </div>
        <div class="list_options">
          <div class="option_title">ЧИСЛО ОСІБ</div>

          <div v-for="option in optionsGuestRating" :key="option.title">
            {{ option.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllHallsModalFilters",
  props: {
    isPopUpVisible: {
      type: Boolean,
      default: false
    },
    popUpVisible: {
      type: Function
    },
    filters: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    optionsCity() {
      let filter = this.filters.find(elem => {
        if (elem.name === "По місту") return elem;
      });
      return filter.options;
      
    },
    optionsInterests() {
        let filter = this.filters.find(elem => {
        if (elem.name === "тип події") return elem;
      });
      return filter.options;
    },
    optionsGuestRating() {
        let filter = this.filters.find(elem => {
        if (elem.name === "число осіб") return elem;
      });
      return filter.options;
    }
  }
};
</script>
<style lang="scss" scopped>
@import "../../assets/scss/utils.scss";
.filters_pop-up {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10001;

  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 20;
  }
  @include min(sm) {
    display: none;
  }
}
.pop-up_body {
  overflow: auto;
  position: relative;
  z-index: 75;
  background-color: #f5f5f5;
  width: 98%;
  height: 98%;

  padding: 32px 18px 15px;
}
.pop-up_back {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  width: 55px;

  svg {
    margin-top: 1.5px;
    transform: rotate(180deg);
  }
}
.list_options {
  div {
    cursor: pointer;
    display: table;
    padding-top: 10px;
    font-size: 12px;
  }
  .option_title {
    cursor: pointer;
    display: inline-block;
    padding-top: 40px;
    padding-bottom: 5px;
    font-weight: 500;
    font-size: 10px;
  }
}
</style>
