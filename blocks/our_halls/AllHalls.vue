<template>
  <div class="all_halls_container" :class="{ halls_page: isHallsPage }">
    <div class="main-wrapper">
      <div class="all_halls_container-wrapper">
        <div class="filters">
          <p class="a1">Знайдено 8 залів</p>
          <div class="filters__wrapper">
            <div @click="popUpVisible" class="filter_option">
              <p class="a1">фільтри</p>
              <img src="~/static/icons/filter-icon.svg" alt="icon" />
            </div>
            <!-- <p class="a1 filters__one_filter">По місту</p>
        <p class="a1 filters__one_filter">тип події</p>
        <p class="a1 filters__one_filter">кількість осіб</p> -->
            <div class="filter__inner-wrapper">
              <SelectBlockWithPlus
                v-for="item in filters"
                :key="item.id"
                :name="item.name"
                :options="item.options"
                @change="item.type = $event.value"
              />
            </div>
            <AllHallsModalFilters
              :isPopUpVisible="isPopUpVisible"
              :filters="filters"
              @popUpVisible="popUpVisible"
            />
          </div>
        </div>
        <OneHall
          v-for="key in 5"
          :key="key"
          :hall="hall"
          :isHallsPage="isHallsPage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import OneHall from "~/blocks/our_halls/OneHall";
import AllHallsModalFilters from "~/blocks/our_halls/AllHallsModalFilters";
export default {
  name: "AllHalls",
  components: {
    OneHall,
    AllHallsModalFilters
  },
  data: () => ({
    isPopUpVisible: false,
    hall: {
      slides: [
        {
          id: 0,
          img: require("~/static/images/room.jpg"),
          offers: "РОМАНТИЧНА ВЕЧЕРЯ"
        },
        {
          id: 1,
          img: require("~/static/images/room.jpg"),
          offers: "РОМАНТИЧНА ВЕЧЕРЯ"
        },
        {
          id: 2,
          img: require("~/static/images/room.jpg"),
          offers: "РОМАНТИЧНА ВЕЧЕРЯ"
        }
      ]
    }
  }),
  props: {
    filters: {
      type: Array,
      default: () => []
    },
    isHallsPage: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    popUpVisible() {
      this.isPopUpVisible = !this.isPopUpVisible;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.all_halls_container-wrapper {
  margin: 140px auto;

  // padding: 140px 0;
  // @include pl-168;
  // @include pr-168;
}

.filters {
  display: flex;
  justify-content: space-between;
  @include mb-80;
  &__wrapper {
    display: flex;
    @include mr-40;
  }
  &__one_filter {
    @include ml-64;
    cursor: pointer;
  }
  .filters__wrapper {
    .select-wrapper {
      &:not(:last-child) {
        margin-right: 64px;
      }
    }
  }
}
/** halls page */
.all_halls_container {
  &.halls_page {
    .filter__inner-wrapper {
      display: flex;
    }
    @include max(1024) {
      background-color: #f0edea;
    }
    .filters__wrapper {
      @include max(1920) {
        margin-right: 0;
      }
      @include max(767) {
        .filter__inner-wrapper {
          display: none;
        }
      }
    }
    .all_halls_container-wrapper {
      max-width: 1104px;
      @include max(1439) {
        max-width: 756px;
        padding: 125px 0;
        margin: 0 auto;
      }
      @include max(1023) {
        padding: 113px 0;
        max-width: 672px;
      }
      @include max(767) {
        max-width: 339px;
        padding: 80px 0;
      }
      .filters {
        align-items:center;
        @include max(767) {
          margin-bottom: 32px;
        }
      }
    }
    .filter_option {
      display: none;
      justify-content: space-between;
      width: 72px;
      p {
        margin-right: 0;
      }
      img {
        margin-top: 1px;
        height: 10px;
      }
      &:hover {
        cursor: pointer;
      }

      @include max(767) {
        display: flex;
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
  }
}
/** halls page */
</style>
