<template>
  <div class="account-booking-table-mob" ref="tableMob">

    <div class="account-booking-table-mob__wrapper">
      <div
        v-for="(elem, index) in dataTable"
        class="account-booking-table__item"
        :key="index"
      >
        <div class="item-header">
          <div v-if="isSertificate" class="item-header__id a1 link">
            <NuxtLink to="/">№{{ elem.number || elem.id }}</NuxtLink>
          </div>
          <div v-else class="item-header__id a1">
            №{{ elem.number || elem.id }}
          </div>
          <div class="item-header__status p2_light" :class="elem.statusType">
            {{ elem.status }}
          </div>
        </div>
        <div class="item-description">
          <div class="item-hotel p2_light">
            {{ elem.hotel || elem.location }}
          </div>
          <div class="item-date p2_light">{{ elem.date || elem.workTo }}</div>
          <div v-if="elem.certificate" class="item-certificate p2_light">
            {{ elem.certificate }}
          </div>
          <div v-if="elem.earned" class="item-points__earned p2_light">
            Зароблено: <span class="p2_light earned">{{ elem.earned }}</span>
          </div>
          <div v-if="elem.spent" class="item-poins__spent p2_light">
            Витрачено <span class="p2_light spent">{{ elem.spent }}</span>
          </div>
        </div>
      </div>
    </div>
    <Pagination
      v-if="paginationMob"
      :total="total"
      :currentPage="currentPage"
      :perPage="perPage"
      :pagesBeforeDots="pagesBeforeDots"
      @pageChange="pageChanged($event)"
    />
  </div>
</template>
<script>
import Pagination from "~/blocks/globals/elements/Pagination";
export default {
  name: "AccountBookingTableMob",
  components: {
    Pagination
  },
  props: {
    tableData: {
      type: Object,
      default: () => ({})
    },
    perPage: {
      type: Number,
      default: 8
    },
    paginationMob: {
      type: Boolean,
      default: false
    },
    isSertificate: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      currentPage: 0,
      pagesBeforeDots: 3,
      total: this.tableData.data.length,
      pagination: true
    };
  },
  computed: {
    dataTable() {
      console.log(this.isProfileCorporateClub);
      console.log(this.tableData);
      return this.tableData.data.slice(
        this.currentPage * this.perPage,
        (this.currentPage + 1) * this.perPage
      );
    }
  },
  methods: {
    pageChanged(page) {
      this.currentPage = page;
      this.$refs.tableMob.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>
<style lang="scss" scopped>
@import "../../assets/scss/utils.scss";
.account-booking-table-mob {
  display: none;
  @include max(767) {
    display: block;
    width: 100%;
  }
  .pagination {
    @include max(767) {
      max-width: 190px;
      margin: 48px auto 0 auto;
      padding: 0 24px;
    }
  }
}
.account-booking-table__item + .account-booking-table__item {
  margin-top: 10px;
}
.account-booking-table__item {
  background: #f0f0f0;
  padding: 18px;
  opacity: 0.5;
}
.item-header {
  display: flex;
  justify-content: space-between;
  &__id {
    @include max(767) {
      font-size: 18px;
      letter-spacing: -0.02em;
      font-weight: 450;
    }
    &.link {
      text-decoration: underline;
    }
  }
}
.item-description {
  margin-top: 18px;
  .p2_light + .p2_light {
    margin-top: 8px;
  }
}
.p2_light {
  &.wait,
  &.used {
    color: #b9841d;
    font-weight: 600;
  }
  &.done,
  &.new,
  &.earned {
    color: #0a622f;
    font-weight: 600;
  }
  &.spent {
    color: #b91d1d;
    font-weight: 600;
  }
}
</style>
