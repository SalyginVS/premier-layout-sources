<template>
  <div v-if="visible" class="filters_pop-up">
    <div class="pop-up_body">
      <div @click="popUpClose" class="pop-up_back">
        <svg
          width="3"
          height="5"
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

      <h3 v-if="header">{{ header }}</h3>

      <div class="pop-up_list">
        <div class="list_options" v-for="option in data" :key="option.id">
          <div class="option_title a1">{{ option.name }}</div>

          <nuxt-link :to="'/one_hotel'"
            class="p1 option_value"
            v-for="(filter, index) in option.filters"
            :key="index"
          >
            {{ filter.name }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FiltersPopUp",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    header: {
      type: String,
      default: "",
    },
    data: {
      type: Array,
      default: [],
    },
  },
  methods: {
    popUpClose() {
      this.$emit("popUpClose", { popUpvisible: false });
    },
  },

  watch: {
    visible: () => {
      console.log("OLJD");
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";

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
  background-color: #ffffff;
  width: 98%;
  height: 98%;

  padding: 32px 18px 15px;

  h3 {
    text-align: left;
    margin-top: 40px;
  }
}
.pop-up_back {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  width: 55px;

  svg {
    margin-top: 3.5px;
    margin-left: 1px;
    transform: rotate(180deg);
  }

  .a1{
    font-family: 'AvenirNextCyrMedium';
    opacity: 0.5;
  }
}
.list_options {
  .option_title {
    font-family: "AvenirNextCyrRegular";
    cursor: pointer;
    text-align: left;
    padding-top: 40px;
    padding-bottom: 5px;

    font-style: normal;
    font-weight: 600;
  }
  .option_value {
    display: table;
    padding-top: 10px;
    font-weight: 300;
    font-size: 12px;
    line-height: 180%;
    letter-spacing: 0.04em;
    color: #000000;
    opacity: 0.6;
  }
}
.filters {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-row-gap: 20px;
  background: #f5f4f3;
  padding: 48px;
  padding-top: 28px;
  padding-right: 198px;
  padding-bottom: 18px;
  position: relative;
  z-index: 1;

  @include max(xl) {
    padding: 30px;
  }

  @include max(lg) {
    grid-row-gap: 0px;
    padding: 28px 27px 27px 27px;
  }
  @include max(md) {
    padding: 20px 27px 19px 27px;
  }
}
.filter_wrapper {
  display: flex;
  img {
    margin-left: 8px;
  }
}
.filters_position {
  width: 600px;
  position: relative;
  .line-simple {
    top: unset;
    left: unset;
    bottom: 65px;
    right: 245px;

    @include max(lg) {
      bottom: 55px;
      right: 143px;
    }

    @include max(md) {
      bottom: 54px;
      right: 168px;
    }

    @include max(md) {
      bottom: 54px;
      right: 168px;
    }

    // z-index: -1;
  }

  @include max(lg) {
    width: 444px;
  }
  @include max(lg) {
    width: 436px;
  }
  @include max(sm) {
    display: none;
  }
}
</style>
