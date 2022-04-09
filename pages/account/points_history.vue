<template>
  <div id="account-points-history">
    <div class="account-container">
      <div class="wrapper">
        <AccountGreet :data="greet" />
      </div>
      <AccountGraphPoints :data="points" :simpleGraph="true" />
    </div>
    <div class="account-container-info">
      <AccountSale :sale="sale" />
      <AccountBookingTable
        :tableData="tableData"
        :pagination="true"
        :isPointsHistory="isPointsHistory"
        :isSertificate="isSertificate"
      />
    </div>
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import AccountGreet from "~/blocks/account/AccountGreet";
import AccountGraphPoints from "~/blocks/account/AccountGraphPoints";
import AccountSale from "~/blocks/account/AccountSale";
import AccountBookingTable from "~/blocks/account/AccountBookingTable";

export default {
  components: {
    HeaderBlock,
    AccountGreet,
    AccountGraphPoints,
    AccountSale,
    AccountBookingTable
  },

  data: () => ({
    openModalBonus: false,
    isPointsHistory: false,
    isSertificate: true,
    greet: {
      greet: "Костянтин Костянтинов",
      accountNumber: "MA-000049328",
      cardNumber: "Amber 1503053"
    },

    points: {
      count: "1034"
    },
    sale: "51AM",
    tableData: {
      title: "Історія бонусів",
      pagination: true,
      header: [
        {
          title: "date",
          prop: "dateBonus"
        },
        {
          title: "локація",
          prop: "location"
        },
        {
          title: "зароблено: ",
          addOption: "8500",
          prop: "earned",
          tdClass: row => {
            return { earned: true };
          }
        },
        {
          title: "Витрачено: ",
          addOption: "5200",
          prop: "spent",
          tdClass: row => {
            return { spent: true };
          }
        }
      ],
      data: [
        {
          id: 0,
          dateBonus: "13 Лютого 2020",
          location: "Premier Palace Hotel,  Київ",
          earned: "800",
          spent: "800"
        },
        {
          id: 1,
          dateBonus: "13 Лютого 2020",
          location: "Premier Palace Hotel,  Київ",
          earned: "1200",
          spent: "0"
        },
        {
          id: 2,
          dateBonus: "13 Лютого 2020",
          location: "Premier Palace Hotel,  Київ",
          earned: "480",
          spent: "50"
        },
        {
          id: 3,
          dateBonus: "13 Лютого 2020",
          location: "Premier Palace Hotel,  Київ",
          earned: "250",
          spent: "500"
        },
        {
          id: 4,
          dateBonus: "13 Лютого 2020",
          location: "Premier Palace Hotel,  Київ",
          earned: "120",
          spent: "0"
        },
        {
          id: 5,
          dateBonus: "13 Лютого 2020",
          location: "Premier Palace Hotel,  Київ",
          earned: "1000",
          spent: "250"
        },
        {
          id: 6,
          dateBonus: "13 Лютого 2020",
          location: "Premier Palace Hotel,  Київ",
          earned: "480",
          spent: "50"
        },
        {
          id: 7,
          dateBonus: "13 Лютого 2020",
          location: "Premier Palace Hotel,  Київ",
          earned: "250",
          spent: "500"
        },
        {
          id: 8,
          dateBonus: "13 Лютого 2020",
          location: "Premier Palace Hotel,  Київ",
          earned: "800",
          spent: "800"
        },
        {
          id: 9,
          dateBonus: "13 Лютого 2020",
          location: "Premier Palace Hotel,  Київ",
          earned: "1200",
          spent: "0"
        },
        {
          id: 10,
          dateBonus: "13 Лютого 2020",
          location: "Premier Palace Hotel,  Київ",
          earned: "480",
          spent: "50"
        },
        {
          id: 11,
          dateBonus: "13 Лютого 2020",
          location: "Premier Palace Hotel,  Київ",
          earned: "250",
          spent: "500"
        },
        {
          id: 12,
          dateBonus: "13 Лютого 2020",
          location: "Premier Palace Hotel,  Київ",
          earned: "120",
          spent: "0"
        },
        {
          id: 13,
          dateBonus: "13 Лютого 2020",
          location: "Premier Palace Hotel,  Київ",
          earned: "1000",
          spent: "250"
        },
        {
          id: 14,
          dateBonus: "13 Лютого 2020",
          location: "Premier Palace Hotel,  Київ",
          earned: "480",
          spent: "50"
        },
        {
          id: 15,
          dateBonus: "13 Лютого 2020",
          location: "Premier Palace Hotel,  Київ",
          earned: "250",
          spent: "500"
        },
        {
          id: 16,
          dateBonus: "13 Лютого 2020",
          location: "Premier Palace Hotel,  Київ",
          earned: "250",
          spent: "500"
        },
        {
          id: 17,
          dateBonus: "13 Лютого 2020",
          location: "Premier Palace Hotel,  Київ",
          earned: "250",
          spent: "500"
        },
        {
          id: 18,
          dateBonus: "13 Лютого 2020",
          location: "Premier Palace Hotel,  Київ",
          earned: "250",
          spent: "500"
        },
        {
          id: 19,
          dateBonus: "13 Лютого 2020",
          location: "Premier Palace Hotel,  Київ",
          earned: "250",
          spent: "500"
        },
        {
          id: 20,
          dateBonus: "13 Лютого 2020",
          location: "Premier Palace Hotel,  Київ",
          earned: "250",
          spent: "500"
        }
      ]
    }
  }),
  created() {
    this.isPointsHistory = !this.isPointsHistory;
  },
  destroyed() {
    this.isPointsHistory = !this.isPointsHistory;
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
#account-points-history {
  .account-container {
    width: 100%;
    display: flex;
    align-items: flex-end;
    @include max(1023) {
      padding-right: 48px;
    }
    @include max(767) {
      align-items: flex-start;
      padding-right: 16px;
    }
    .wrapper {
      display: flex;
      flex-direction: column;
      .account-greet {
        padding-left: 100px;
        margin-bottom: 40px;
        @include max(1439) {
          padding-left: 50px;
          margin-bottom: 32px;
        }
        @include max(767) {
          padding-left: 16px;
          margin-bottom: 12px;
        }
      }
    }
    .account-graph-points {
      margin-left: auto;
      padding-bottom: 10px;
      margin-bottom: -40px;
    }
  }
  .account-container-info {
    padding-left: 84px;
    @include pb-140;
    @include max(1439) {
      padding-left: 50px;
    }
    @include max(1023) {
      padding: 0 48px 112px 48px;
    }
    @include max(767) {
      padding: 0 16px 40px 16px;
    }
    .account-sale {
      padding: 0 15px 56px 15px;
      margin-bottom: 96px;
      border-bottom: 1px solid rgba(#000000, 0.1);
      @include max(1439) {
        padding: 0 15px 42px 15px;
        margin-bottom: 72px;
      }
      @include max(1023) {
        padding: 0 15px 32px 15px;
        margin-bottom: 36px;
      }
    }
  }
}
</style>
