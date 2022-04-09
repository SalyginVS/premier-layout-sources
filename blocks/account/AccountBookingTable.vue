<template>
  <div
    class="account-booking-table"
    :class="{
      'big-margin': bigMargin,
      'pagination-table': tableData.pagination,
      'hide-header': tableData.hideHeader,
      'account-reservations': isAccountReservations,
      'account-e-sertificate': isAccountESertificate,
      'points-history': isPointsHistory
    }"
  >
    <div class="main-header" :class="{ moreDetail: tableData.description }">
      <h3 class="title">{{ tableData.title }}</h3>
      <UnderlineButton :text="tableData.more" :link="tableData.linkMore" />
    </div>
    <p v-if="tableData.description" class="p2_light header_desc">
      {{ tableData.description }}
    </p>
    <div v-if="tableData.bookingOptions" class="booking_options">
      <p
        class="a1 option"
        v-for="(option, index) in tableData.bookingOptions"
        :class="[tableData.bookingOptions ? `item-${index}` : '']"
        :key="index"
      >
        {{ option }}
      </p>
    </div>

    <div class="table-wrapper" ref="table">
      <table>
        <tr class="header" v-if="!tableData.hideHeader">
          <th v-for="(header, index) in tableData.header" :key="index">
            <div class="table_content">
              <p class="a1 th-title">
                {{ header.title }}
                <span v-if="header.addOption">
                  {{ header.addOption }}
                </span>
              </p>
            </div>
          </th>
        </tr>

        <tr v-for="item in data" :key="item.id">
          <td v-for="(header, index) in tableData.header" :key="index">
            <div
              class="table_content body-table_content"
              :class="
                header.prop === 'more' ? 'body-table_content_description' : ''
              "
            >
              <img
                v-if="header.prop === 'more'"
                class="tab-button"
                src="~/static/icons/tab-button_transparent.svg"
                alt
              />
              <p
                class="p2_light"
                :class="header.tdClass && header.tdClass(item)"
              >
                <template v-if="!header.tdSlotName">{{
                  item[header.prop]
                }}</template>
                <slot
                  v-else
                  :name="header.tdSlotName"
                  v-bind:item="item"
                ></slot>
              </p>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <Pagination
      v-if="pagination"
      :total="total"
      :currentPage="currentPage"
      :perPage="perPage"
      :pagesBeforeDots="pagesBeforeDots"
      @pageChange="pageChanged($event)"
    />
    <AccountBookingTableMob
      :tableData="tableData"
      :perPage="perPage"
      :paginationMob="pagination"
      :isSertificate="isSertificate"
    />
    <div class="table-bottom-btn">
      <a class="a1" :href="tableData.linkMore">{{ tableData.more }}</a>
    </div>
  </div>
</template>

<script>
import AccountBookingTableMob from "~/blocks/account/AccountBookingTableMob";
import UnderlineButton from "~/components/UnderlineButton";

export default {
  name: "AccountBookingTable",
  components: {
    AccountBookingTableMob,
    UnderlineButton
  },
  props: {
    tableData: {
      type: Object,
      default: () => ({})
    },
    bigMargin: {
      type: Boolean,
      default: false
    },
    pagination: {
      type: Boolean,
      default: false
    },
    isAccountReservations: {
      type: Boolean,
      default: false
    },
    isAccountESertificate: {
      type: Boolean,
      default: false
    },
    isSertificate: {
      type: Boolean,
      default: false
    },
    isPointsHistory: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentPage: 0,
      perPage: 5,
      pagesBeforeDots: 3,
      total: this.tableData.data.length
    };
  },

  methods: {
    // zeroNumber(number) {
    //   return number < 10 ? `0${number}` : number;
    // },

    pageChanged(page) {
      console.log(page);
      this.currentPage = page;
      this.$refs.table.scrollIntoView({ behavior: "smooth" });
    },
    convertDate(elem) {
      let pattern = /[А-я]/g;
      let array = elem.split(" ").map(innerElem => {
        if (innerElem.search(pattern) !== -1) {
          innerElem = "05";
        }
        return innerElem;
      });
      return array.join(" ");
    }
  },

  computed: {
    data() {
      let checkData = this.tableData.data.every(
        elem => elem.date || elem.dateBonus
      );
      let tableData = [...this.tableData.data];
      if (checkData) {
        tableData.map(elem => {
          if (elem.date) {
            elem.date = this.convertDate(elem.date);
          } else if (elem.dateBonus) {
            elem.dateBonus = this.convertDate(elem.dateBonus);
          }
          return elem;
        });
      }
      return tableData.slice(
        this.currentPage * this.perPage,
        (this.currentPage + 1) * this.perPage
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.account-booking-table {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  &.pagination-table {
    .table-wrapper {
      @include mb-80;
      background-color: rgba(#f0f0f0, 0.5);
    }
  }
  .main-header {
    width: 100%;
    margin-bottom: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include max(1023) {
      margin-bottom: 32px;
    }
    @include max(767) {
      justify-content: center;
      margin-bottom: 22px;
    }
    &.moreDetail {
      margin-bottom: 20px;
    }
    .a1 {
      margin: 0;
      // text-decoration: underline;
      cursor: pointer;
      transition: opacity 0.3 ease-in-out;
      &:hover {
        opacity: 0.7;
      }
      @include max(767) {
        display: none;
      }
    }
  }
  .header_desc {
    max-width: 68%;
    margin-bottom: 56px;
    display: flex;
    margin-right: auto;
  }
  .booking_options {
    width: 100%;
    @include mb-80;
    display: flex;
    align-items: center;
    .option {
      cursor: pointer;
      transition: opacity 0.3s ease-in-out;
      &:hover {
        opacity: 0.7;
      }
      &:not(:last-child) {
        margin-right: 64px;
      }
      &::after {
        content: "+";
        display: inline-block;
        font-size: 14px;
        margin-left: 2px;
      }
    }
  }

  .table-wrapper {
    width: 100%;
    padding: 10px 24px;
    background: #f0edea;
    scroll-margin: 80px;
    @include max(1439) {
      padding: 10px 16px;
    }
    @include max(767) {
      display: none;
    }
  }

  table {
    border-collapse: collapse;
  }
  table,
  tr {
    width: 100%;
  }

  tr {
    border-top: 1px solid rgba(#000, 0.1);
  }
  .header {
    border-top: none;
    .th-title {
      span {
        opacity: 0.5;
      }
    }
    th {
      &:nth-of-type(1) {
        // width: 85px;
        width: 6vw;
      }
      &:nth-of-type(2) {
        // width: 223px;
        width: 16vw;
        @include max(1439) {
          width: 25vw;
        }
      }
      &:nth-of-type(3) {
        // width: 292px;
        width: 20.3vw;
        @include max(1439) {
          width: 24.3vw;
        }
      }
      &:nth-of-type(4) {
        // width: 171px;
        width: 12vw;
        @include max(1439) {
          width: 12vw;
        }
      }
      &:nth-of-type(5) {
        // width: 127px;
        width: 8.8vw;
      }
      .table_content {
        text-align: left;
        border-right: 1px solid rgba(#000, 0.1);
        margin-bottom: 14px;
      }
    }
  }
  td {
    text-align: left;
    //   width: 25%;
  }
  td:first-of-type {
    text-align: left;
    .p2_light {
      font-family: AvenirNextCyrMedium;
      font-style: normal;
      font-weight: 450;
      font-size: 10px;
      line-height: 140%;
      letter-spacing: 0.24em;
      text-transform: uppercase;
    }
  }
  .table_content {
    padding: 28px 10px 29px 34px;
    margin: 10px 0;
    @include max(1439) {
      padding: 0 24px 0 8px;
      min-height: 40px;
    }
    &.body-table_content {
      border-right: 1px solid rgba(#000, 0.1);
      .p2_light {
        color: rgba(0, 0, 0, 0.7);
        span {
          color: #000000;
        }
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
  }
  td:last-of-type .table_content {
    border-right: none;
  }
  .header {
    th {
      .table_content {
        @include max(1439) {
          padding: 14px;
        }
      }
    }
    th:last-of-type .table_content {
      border-right: none;
    }
  }

  .pagination {
    // width: 225px;
    padding: 0 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .arrow-left,
    .arrow-right {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }
    .arrow-left {
      left: 0;
      &.disabled {
        opacity: 0.3;
        pointer-events: none;
      }
    }
    .arrow-right {
      right: 0;
      transform: translateY(-50%) rotate(180deg);
      &.disabled {
        opacity: 0.3;
        pointer-events: none;
      }
    }
    .pages {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        opacity: 0.5;
        cursor: pointer;
        transition: opacity 0.3s ease-in-out;
        &:not(:last-child) {
          margin-right: 20px;
        }
        &:hover {
          opacity: 1;
        }
        &.active {
          opacity: 1;
        }
      }
    }
  }
  &.hide-header {
    .main-header,
    .header_desc,
    .booking_options {
      display: none;
    }
    .table-wrapper {
      padding: 0 24px;
      .header {
        display: none;
      }
      tr {
        td:nth-child(even) {
          .table_content {
            padding-top: 0;
          }
        }
      }
      .table_content {
        min-height: 86px;
        padding-top: 4px;
      }
    }
    // &:first-of-type tr {
    //   border-top: none;
    // }
    tr {
      &:first-child {
        border-top: none;
      }
      td {
        max-width: 70%;
        // display: inline-block;
        &:first-child {
          width: 240px;
        }
      }
    }
  }
  .body-table_content_description {
    @include max(1439) {
      padding: unset;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    p.p2_light {
      color: #000000 !important;
      display: block;
      @include max(1439) {
        display: none;
      }
    }
    .tab-button {
      display: none;
      @include max(1439) {
        display: block;
      }
    }
  }
  .table-bottom-btn {
    display: none;
    @include max(767) {
      display: block;
      margin-top: 40px;
      text-decoration: underline;
    }
  }
}
/**account-reservations page && account-e-sertificate */
.account-booking-table {
  &.account-reservations,
  &.account-e-sertificate {
    .booking_options {
      display: grid;
      grid-template-columns: repeat(2, auto) 1fr;
      @include max(767) {
        grid-row-gap: 48px;
      }
      .option {
        margin: 0;
        @include max(767) {
          font-size: 9px;
        }
        &:after {
          @include max(767) {
            font-size: 9px;
            margin-left: 0px;
          }
        }
      }
      .item {
        &-0 {
          order: 3;
          justify-self: end;
          opacity: 0.4;
          border-bottom: 1px solid rgba(#000, 0.1);
          @include max(767) {
            justify-self: start;
            grid-column: 1/3;
            width: 100%;
          }
          &::after {
            display: none;
          }
        }
        &-1 {
          order: 1;
        }
        &-2 {
          order: 2;
          justify-self: end;
          margin-left: 40px;
          @include max(767) {
            margin-left: 20px;
          }
        }
      }
    }
    .main-header {
      @include max(767) {
        justify-content: start;
      }
      .title {
        font-size: 48px;
        @include max(1439) {
          font-size: 36px;
        }
        @include max(767) {
          font-size: 26px;
        }
      }
    }
    .header_desc {
      @include max(1439) {
        max-width: 90%;
        margin-bottom: 48px;
      }
    }
    .pagination {
      @include max(767) {
        display: none;
      }
    }
  }
}

/** account-reservations page && account-e-sertificate */

/**points history page */
.points-history {
  .table_content {
    margin: 0 !important;
    display: flex;
    align-items: center;
    padding: 0 10px 0 8px;
    .th-title{
      padding: 32px 0 32px 34px;
    }
    /deep/p.p2_light {
      padding: 28px 0 28px 34px;
    }
  }
  .header {
    th:nth-of-type(1) {
      width: 12vw;
    }
  }
  .pagination {
    @include max(767) {
      display: none;
    }
  }
}
/**points history page */
</style>
