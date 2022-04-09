<template>
  <div id="account-e-sertificate">
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
        :isAccountESertificate="isAccountESertificate"
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
    isAccountESertificate: false,
    isSertificate:true,
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
      title: "E-сертифікати",
      description:
        "В рамках специфікації сучасних стандартів, незалежні держави і донині залишаються долею лібералів, які жадають бути своєчасно верифіковані. У своєму прагненні підвищити якість життя, вони забувають, що висока якість позиційних досліджень дозволяє виконати важливі завдання по розробці моделі розвитку. До речі, ретельні дослідження конкурентів, перемагаючи непросту економічну ситуацію, в рівній мірі надані самі собі. ",
      bookingOptions: ["Номер Сертифікату", "діє до", "Статус Сертифікату"],
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
          title: "назва",
          prop: "certificate"
        },
        {
          title: "діє до",
          prop: "workTo"
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
          certificate: "Сертифікат на ніч",
          workTo: "01.05 12:00",
          status: "Новий",
          statusType: "new",
          more: "Детальніше"
        },
        {
          id: 1,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          certificate: "Сертифікат на ніч",
          workTo: "01.05 12:00",
          status: "Новий",
          statusType: "new",
          more: "Детальніше"
        },
        {
          id: 2,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          certificate: "Сертифікат на ніч",
          workTo: "01.05 12:00",
          status: "Використано",
          statusType: "used",
          more: "Детальніше"
        },
        {
          id: 3,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          certificate: "Сертифікат на ніч",
          workTo: "01.05 12:00",
          status: "Використано",
          statusType: "used",
          more: "Детальніше"
        },
        {
          id: 4,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          certificate: "Сертифікат на ніч",
          workTo: "01.05 12:00",
          status: "Використано",
          statusType: "used",
          more: "Детальніше"
        },
        {
          id: 5,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          certificate: "Сертифікат на ніч",
          workTo: "01.05 12:00",
          status: "Використано",
          statusType: "used",
          more: "Детальніше"
        },
        {
          id: 6,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          certificate: "Сертифікат на ніч",
          workTo: "01.05 12:00",
          status: "Використано",
          statusType: "used",
          more: "Детальніше"
        },
        {
          id: 7,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          certificate: "Сертифікат на ніч",
          workTo: "01.05 12:00",
          status: "Використано",
          statusType: "used",
          more: "Детальніше"
        },
        {
          id: 8,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          certificate: "Сертифікат на ніч",
          workTo: "01.05 12:00",
          status: "Використано",
          statusType: "used",
          more: "Детальніше"
        },
        {
          id: 9,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          certificate: "Сертифікат на ніч",
          workTo: "01.05 12:00",
          status: "Використано",
          statusType: "used",
          more: "Детальніше"
        },
        {
          id: 10,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          certificate: "Сертифікат на ніч",
          workTo:"01.05 12:00",
          status: "Використано",
          statusType: "used",
          more: "Детальніше"
        },
        {
          id: 11,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          certificate: "Сертифікат на ніч",
          workTo: "01.05 12:00",
          status: "Використано",
          statusType: "used",
          more: "Детальніше"
        },
        {
          id: 12,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          certificate: "Сертифікат на ніч",
          workTo: "01.05 12:00",
          status: "Використано",
          statusType: "used",
          more: "Детальніше"
        },
        {
          id: 13,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          certificate: "Сертифікат на ніч",
          workTo: "01.05 12:00",
          status: "Використано",
          statusType: "used",
          more: "Детальніше"
        },
        {
          id: 14,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          certificate: "Сертифікат на ніч",
          workTo: "01.05 12:00",
          status: "Використано",
          statusType: "used",
          more: "Детальніше"
        },
        {
          id: 15,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          certificate: "Сертифікат на ніч",
          workTo: "01.05 12:00",
          status: "Використано",
          statusType: "used",
          more: "Детальніше"
        },
        {
          id: 16,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          certificate: "Сертифікат на ніч",
          workTo: "01.05 12:00",
          status: "Використано",
          statusType: "used",
          more: "Детальніше"
        },
        {
          id: 17,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          certificate: "Сертифікат на ніч",
          workTo: "01.05 12:00",
          status: "Використано",
          statusType: "used",
          more: "Детальніше"
        },
        {
          id: 18,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          certificate: "Сертифікат на ніч",
          workTo: "01.05 12:00",
          status: "Використано",
          statusType: "used",
          more: "Детальніше"
        },
        {
          id: 19,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          certificate: "Сертифікат на ніч",
          workTo: "01.05 12:00",
          status: "Використано",
          statusType: "used",
          more: "Детальніше"
        },
        {
          id: 20,
          number: "987537",
          hotel: "Premier Palace Hotel,  Київ",
          certificate: "Сертифікат на ніч",
          workTo: "01.05 12:00",
          status: "Використано",
          statusType: "used",
          more: "Детальніше"
        }
      ]
    }
  }),
  created() {
    this.isAccountESertificate = !this.isAccountESertificate;
  },
  destroyed() {
    this.isAccountESertificate = !this.isAccountESertificate;
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
#account-e-sertificate {
  .account-container {
    width: 100%;
    display: flex;
    align-items: flex-end;
    @include max(1023) {
      padding-right: 48px;
    }
    @include max(767) {
      padding-right: 18px;
      align-items: flex-start;
    }
    .wrapper {
      display: flex;
      flex-direction: column;
      .account-greet {
        padding-left: 100px;
        margin-bottom: 40px;
        @include max(1439) {
          padding-left: 50px;
        }
        @include max(767) {
          padding-left: 18px;
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
      padding-left: 34px;
      padding-bottom: 124px;
    }
    @include max(1023) {
      padding: 0 48px 112px 48px;
    }
    @include max(767) {
      padding: 0 18px 40px 18px;
    }
    .account-sale {
      padding: 0 15px 56px 15px;
      margin-bottom: 96px;
      border-bottom: 1px solid rgba(#000000, 0.1);
      @include max(1439) {
        padding: 0 15px 40px 15px;
        margin-bottom: 72px;
      }
      @include max(1023) {
        padding: 0 15px 36px 15px;
        margin-bottom: 64px;
      }
      @include max(767) {
        padding: 0 15px 32px 15px;
        margin-bottom: 48px;
      }
    }
  }
}
</style>
