<template>
  <div id="select_by_rooms_block">
    <div class="filters">
      <p
        v-for="filter in filters"
        :key="filter"
        @click="changeFilter(filter)"
        class="a1 filter-item"
        :class="{ choseFilter: selectedFilter === filter }"
      >
        {{ filter }}
        <span class="vertical_line"></span>
      </p>
      <span class="vertical_lineMob"></span>
      <AlertSaleBooking />
    </div>

    <filters-pop-up
      :visible="popUpVisible"
      @popUpClose="popUpClose"
      :data="filtersArray"
    />

    <div class="room-filters">
      <p
        v-if="selectedFilter === filters[0]"
        @click="openPopUp"
        class="filter-wrapper"
      >
        фільтри <img src="~/static/icons/filter-icon.svg" alt="icon" />
      </p>
      <p
        v-if="selectedFilter === filters[1]"
        @click="openPopUp"
        class="categorie-wrapper"
      >
        категорії:
      </p>
      <p class="hotel-name">premier palace hotel, київ</p>
    </div>

    <div class="room_wrapper">
      <template v-if="selectedFilter === filters[0]">
        <template v-for="room in rooms">
          <OneRoom
            :buttonClose="activeRoom === room.id"
            @openTariff="openTariff(room.id)"
            :key="room.id"
          />
          <template v-if="activeRoom === room.id">
            <TariffRoom
              v-for="(tariff, index) in room.tariffs"
              :tariffOptions="tariff.options"
              :key="tariff.id + 'tariff' + index"
              :tariffActive="true"
            />
            <!-- <tariff-info :key="room.id + 'tariffInfo'" :class="{'active': activeTariffMore}" /> -->
          </template>
        </template>
      </template>

      <template v-if="selectedFilter === filters[1]">
        <template
          v-for="(tariff, index) in rooms.reduce(
            (prev, cur) => [...prev, ...cur.tariffs],
            []
          )"
        >
          <TariffRoom
            :mainBlock="true"
            :buttonClose="activeTariff === tariff.id"
            :buttonCloseMore="activeTariffMore === tariff.id"
            :tariffOptions="tariff.options"
            :key="tariff.id + 'tariff' + index"
            @openRoom="openRoom(tariff.id)"
            @moreInfoTariff="moreInfoTariff(tariff.id)"
          />

          <TariffInfo
            :key="tariff.id + 'tariffInfo' + index"
            :class="{ active: activeTariffMore == tariff.id }"
          />

          <template v-if="activeTariff === tariff.id">
            <OneRoom :addBlock="true" v-for="room in rooms" :key="room.id" />
          </template>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import OneRoom from "~/blocks/select_by_room/OneRoom";
import TariffRoom from "~/blocks/select_by_room/TariffRoom";
import TariffInfo from "~/blocks/select_by_room/TariffInfo";
import FiltersPopUp from "~/components/FiltersPopUp";

export default {
  name: "Rooms",
  components: {
    OneRoom,
    TariffRoom,
    TariffInfo,
    FiltersPopUp,
  },
  data: () => ({
    //selectedFilter: null,
    selectedFilter: 1,
    filters: ["вибрати за номером", "вибрати за тарифом"],
    rooms: [
      {
        id: 0,
        tariffs: [
          {
            id: 0,
            options: {
              tariff_login: true,
              previousPrice: true,
              proposal: "Найкраща ціна",
              tariff_reg: false,
              not_available: false,
            },
          },
          {
            id: 1,
            options: {
              tariff_login: false,
              previousPrice: false,
              proposal: "",
              tariff_reg: true,
              not_available: false,
            },
          },
          {
            id: 2,
            options: {
              tariff_login: false,
              previousPrice: false,
              proposal: "",
              tariff_reg: false,
              not_available: true,
            },
          },
        ],
      },
      {
        id: 1,
        tariffs: [
          {
            id: 0,
            options: {
              tariff_login: true,
              previousPrice: true,
              proposal: "Найкраща ціна",
              tariff_reg: false,
              not_available: false,
            },
          },
          {
            id: 1,
            options: {
              tariff_login: false,
              previousPrice: false,
              proposal: "",
              tariff_reg: true,
              not_available: false,
            },
          },
          {
            id: 2,
            options: {
              tariff_login: false,
              previousPrice: false,
              proposal: "",
              tariff_reg: false,
              not_available: true,
            },
          },
        ],
      },
    ],
    filtersArray: [
      {
        id: 0,
        name: "По місту",
        filters: [
          {
            name: "Київ",
          },
          {
            name: "Дніпро",
          },
          {
            name: "Львів",
          },
          {
            name: "Полтава",
          },
        ],
      },
      {
        id: 1,
        name: "По готелях",
        filters: [
          {
            name: "Premier Palace Hotel 1",
          },
          {
            name: "Premier Palace Hotel 2",
          },
          {
            name: "Premier Palace Hotel 3",
          },
          {
            name: "Premier Palace Hotel 4",
          },
        ],
      },
    ],
    activeRoom: null,
    activeTariff: null,
    activeTariffMore: null,
    popUpVisible: false,
  }),

  methods: {
    openPopUp() {
      this.popUpVisible = true;
    },
    popUpClose(data) {
      this.popUpVisible = data.popUpVisible;
    },
    openTariff(id) {
      if (this.activeRoom === id) {
        this.activeRoom = null;
      } else {
        this.activeRoom = id;
      }
    },
    openRoom(id) {
      console.log("IDDDD");
      if (this.activeTariff === id) {
        this.activeTariff = null;
      } else {
        this.activeTariff = id;
      }
    },
    moreInfoTariff(id) {
      this.activeTariffMore = id;
    },
    changeFilter(filter) {
      this.selectedFilter = filter;
    },
  },
  mounted() {
    this.changeFilter(this.filters[0]);
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

#select_by_rooms_block {
  //background-color: aqua;
  width: 100%;
  @include pl-168;
  @include pr-168;
  margin: auto;

  @include max(lg) {
    padding: 0 134px;
  }
  @include max(1100) {
    padding: 0 80px;
  }
  @include max(md) {
    padding: 0 48px;
  }
  @include max(720) {
    padding: 0 32px;
  }
  @include max(sm) {
    padding: 0 18px;
  }
}
.filters {
  position: relative;
  @include mt-140;
  display: flex;
  justify-content: flex-start;

  @include max(lg) {
    margin-top: 78px;
  }
  @include max(md) {
    margin-top: 71px;
  }
  @include max(sm) {
    margin-top: 48px;
    width: calc(100% + 36px);
    left: -18px;
    padding: 20px 18px;
  }

  .filter-item:last-of-type {
    .vertical_line {
      display: none !important;
    }
  }
  .alert_sale_booking {
    position: absolute;
    right: -168px;
    top: 50%;
    transform: translateY(-50%);

    @include max(lg) {
      display: none;
    }
  }
  .filter-item {
    display: flex;
    align-items: center;
    opacity: 0.6;
    transition: opacity 0.3s ease-in-out;
    &.choseFilter {
      opacity: 1;

      @include max(sm) {
        width: auto;
      }
    }
    &:hover {
      opacity: 0.9;
    }
  }
  .vertical_line {
    height: 1px;
    width: 32px;
    margin: 0 24px;
    background: #000000;
    opacity: 0.3;

    @include max(sm) {
      width: 24px;
      margin: 0 12px;
    }
    @include max(385) {
      width: 14px;
      margin: 0 8px;
    }
  }
  .vertical_lineMob{

    @include min(sm){
      display: none;
    }

  }
  p {
    cursor: pointer;
  }
}
.room-filters {
  @include min(sm) {
    display: none;
  }
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 140%;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #000000;
  .filter-wrapper {
    color: #000000;
    img {
      margin-bottom: -2px;
      width: 10px;
      height: 10px;
    }
  }
  .categorie-wrapper {
    color: #000000;
    &::after {
      content: "+";
      margin-top: -1.5px;
      margin-left: 3px;
      position: absolute;
      font-size: 16px;
    }
  }
  .hotel-name {
    color: #000000;
  }
}

.room_wrapper {
  margin-top: 82px;
  @include mb-140;

  @include max(lg) {
    margin-top: 40px;
  }
  @include max(md) {
    margin-top: 32px;
  }

  .tariff-room {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
    &:last-child {
      margin-bottom: 30px;
    }
  }
}
</style>
