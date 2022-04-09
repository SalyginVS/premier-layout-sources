<template>
  <div id="account-reservations">
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
        :isAccountReservations="isAccountReservations"
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
    isAccountReservations: false,
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
      title: "Майбутні бронювання",
      description:
        "В рамках специфікації сучасних стандартів, незалежні держави і донині залишаються долею лібералів, які жадають бути своєчасно верифіковані. У своєму прагненні підвищити якість життя, вони забувають, що висока якість позиційних досліджень дозволяє виконати важливі завдання по розробці моделі розвитку. До речі, ретельні дослідження конкурентів, перемагаючи непросту економічну ситуацію, в рівній мірі надані самі собі. ",
      bookingOptions: [
        "Номер бронювання",
        "Терміни перебування",
        "Статус бронювання"
      ],
      pagination: true,
      header: [
        {
          title: "№",
          prop: "number"
        },
        {
          title: "Готель і місто",
          prop: "hotel"
        },
        {
          title: "Заїзд - виїзд",
          prop: "date"
        },

        {
          title: "статус",
          prop: "status",
          tdClass: row => {
            return { [row.statusType]: true };
          }
        },
        {
          title: "",
          prop: "more"
        }
      ],
      data: [
        {
          id: 0,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          date: "01 травня 12:00 - 07 травня 18:00",
          status: "Ожидают оплаты",
          statusType: "wait",
          more: "Детальніше"
        },
        {
          id: 1,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          date: "01 травня 12:00 - 07 травня 18:00",
          status: "Заброньовано",
          statusType: "done",
          more: "Детальніше"
        },
        {
          id: 2,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          date: "01 травня 12:00 - 07 травня 18:00",
          status: "Заброньовано",
          statusType: "done",
          more: "Детальніше"
        },
        {
          id: 3,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          date: "01 травня 12:00 - 07 травня 18:00",
          status: "Заброньовано",
          statusType: "done",
          more: "Детальніше"
        },
        {
          id: 4,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          date: "01 травня 12:00 - 07 травня 18:00",
          status: "Заброньовано",
          statusType: "done",
          more: "Детальніше"
        },
        {
          id: 5,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          date: "01 травня 12:00 - 07 травня 18:00",
          status: "Заброньовано",
          statusType: "done",
          more: "Детальніше"
        },
        {
          id: 6,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          date: "01 травня 12:00 - 07 травня 18:00",
          status: "Заброньовано",
          statusType: "done",
          more: "Детальніше"
        },
        {
          id: 7,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          date: "01 травня 12:00 - 07 травня 18:00",
          status: "Заброньовано",
          statusType: "done",
          more: "Детальніше"
        },
        {
          id: 8,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          date: "01 травня 12:00 - 07 травня 18:00",
          status: "Заброньовано",
          statusType: "done",
          more: "Детальніше"
        },
        {
          id: 9,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          date: "01 травня 12:00 - 07 травня 18:00",
          status: "Заброньовано",
          statusType: "done",
          more: "Детальніше"
        },
        {
          id: 10,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          date: "01 травня 12:00 - 07 травня 18:00",
          status: "Заброньовано",
          statusType: "done",
          more: "Детальніше"
        },
        {
          id: 11,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          date: "01 травня 12:00 - 07 травня 18:00",
          status: "Заброньовано",
          statusType: "done",
          more: "Детальніше"
        },
        {
          id: 12,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          date: "01 травня 12:00 - 07 травня 18:00",
          status: "Заброньовано",
          statusType: "done",
          more: "Детальніше"
        },
        {
          id: 13,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          date: "01 травня 12:00 - 07 травня 18:00",
          status: "Заброньовано",
          statusType: "done",
          more: "Детальніше"
        },
        {
          id: 14,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          date: "01 травня 12:00 - 07 травня 18:00",
          status: "Заброньовано",
          statusType: "done",
          more: "Детальніше"
        },
        {
          id: 16,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          date: "01 травня 12:00 - 07 травня 18:00",
          status: "Заброньовано",
          statusType: "done",
          more: "Детальніше"
        },
        {
          id: 17,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          date: "01 травня 12:00 - 07 травня 18:00",
          status: "Заброньовано",
          statusType: "done",
          more: "Детальніше"
        },
        {
          id: 18,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          date: "01 травня 12:00 - 07 травня 18:00",
          status: "Заброньовано",
          statusType: "done",
          more: "Детальніше"
        },
        {
          id: 19,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          date: "01 травня 12:00 - 07 травня 18:00",
          status: "Заброньовано",
          statusType: "done",
          more: "Детальніше"
        },
        {
          id: 20,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          date: "01 травня 12:00 - 07 травня 18:00",
          status: "Заброньовано",
          statusType: "done",
          more: "Детальніше"
        },
        {
          id: 21,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          date: "01 травня 12:00 - 07 травня 18:00",
          status: "Заброньовано",
          statusType: "done",
          more: "Детальніше"
        }
      ]
    }
  }),
  created(){
  this.isAccountReservations = !this.isAccountReservations;
  },
  destroyed() {
    this.isAccountReservations = !this.isAccountReservations;
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
#account-reservations {
  .account-container {
    width: 100%;
    display: flex;
    align-items: flex-end;
    @include max(1023){
      padding:0 40px;
    }
    @include max(767){
      padding:0 18px;
      align-items: flex-start;
    }
    .wrapper {
      display: flex;
      flex-direction: column;
      .account-greet {
        padding-left: 100px;
        margin-bottom: 40px;
        @include max(1439){
          padding-left:50px;
        }
        @include max(1023){
          padding:0;
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
    @include max(1439){
      padding-left:50px;
      padding-bottom:124px;
    }
    @include max(1023){
      padding:0 40px 112px 40px;
    }
    @include max(767){
      padding:0 18px 40px 18px;
    }
    .account-sale {
      padding: 0 15px 56px 15px;
      margin-bottom: 96px;
      border-bottom: 1px solid rgba(#000000, 0.1);
      @include max(1439){
        margin-bottom:72px;
        padding: 0 15px 42px 15px;
      }
      @include max(767){
        margin-bottom:48px;
      }
    }
  }
}
</style>
