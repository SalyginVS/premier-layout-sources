<template>
  <div id="account-customer-care">
    <div class="account-container">
      <div class="wrapper">
        <AccountGreet :data="greet" />
      </div>
      <AccountGraphPoints :data="points" :simpleGraph="true" />
    </div>
    <div class="account-container-info">
      <AccountSale :sale="sale" />
      <AccountInfoBlocks :data="customerCare" />
    </div>
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import AccountGreet from "~/blocks/account/AccountGreet";
import AccountGraphPoints from "~/blocks/account/AccountGraphPoints";
import AccountSale from "~/blocks/account/AccountSale";
import AccountInfoBlocks from "~/blocks/account/customer_care/AccountInfoBlocks";

export default {
  components: {
    HeaderBlock,
    AccountGreet,
    AccountGraphPoints,
    AccountSale,
    AccountInfoBlocks,
  },

  data: () => ({
    openModalBonus: false,
    greet: {
      greet: "Костянтин Костянтинов",
      accountNumber: "MA-000049328",
      cardNumber: "Amber 1503053",
    },

    points: {
      count: "1034",
    },
    sale: "51AM",
    customerCare: {
      title: "Клієнтська підтримка",
      info: [
        {
          id: 0,
          title: "Переклад балів",
          description:
            "Заробляйте бонусні очки на своєму рахунку Premier Club за всі покупки (тобто проживання, бари, ресторани, фітнес-центр, міні-бар, пральня та готельний транспорт), оплачені під час.",
          buttonMore: "Трансферні бали",
          buttonlink: "/",
        },
        {
          id: 1,
          title: "Запит втраченої картки",
          description:
            "Заробляйте бонусні очки на своєму рахунку Premier Club за всі покупки (тобто проживання, бари, ресторани, фітнес-центр, міні-бар, пральня та готельний транспорт), оплачені під час.",
          buttonMore: "Попросити нову картку",
          buttonlink: "/",
        },
        {
          id: 2,
          title: "Запит втрачених балів",
          description:
            "Заробляйте бонусні очки на своєму рахунку Premier Club за всі покупки (тобто проживання, бари, ресторани, фітнес-центр, міні-бар, пральня та готельний транспорт), оплачені під час.",
          buttonMore: "Пошук балів",
          buttonlink: "/",
        },
        {
          id: 3,
          title: "Калькулятор балів",
          description:
            "Заробляйте бонусні очки на своєму рахунку Premier Club за всі покупки (тобто проживання, бари, ресторани, фітнес-центр, міні-бар, пральня та готельний транспорт), оплачені під час.",
          buttonMore: "вичислить бали",
          buttonlink: "/",
        },
        {
          id: 4,
          title: "Зверніться до координатора",
          description:
            "Заробляйте бонусні очки на своєму рахунку Premier Club за всі покупки (тобто проживання, бари, ресторани, фітнес-центр, міні-бар, пральня та готельний транспорт), оплачені під час.",
          buttonMore: "Відправляти запит",
          buttonlink: "/",
        },
      ],
    },
  }),
 
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
#account-customer-care {
  .account-container {
    width: 100%;
    display: flex;
    align-items: flex-end;
    @include max(767){
      align-items:flex-start;
    }
    .wrapper {
      display: flex;
      flex-direction: column;
      .account-greet {
        padding-left: 100px;
        margin-bottom: 40px;
        @include max(1439){
          padding-left:50px;
          margin-bottom:32px;
        }
        @include max(767){
          padding-left:18px;
          margin-bottom:24px;
        }
      }
    }
    .account-graph-points {
      margin-left: auto;
      padding-bottom: 10px;
      margin-bottom: -40px;
      @include max(1023){
        margin-right: 48px;
      }
      @include max(767){
        margin-right:18px;
      }
    }
  }
  .account-container-info {
    padding-left: 84px;
     @include pb-140;
     @include max(1439){
       padding-left:34px;
       padding-bottom:124px;
     }
     @include max(1023){
       padding:0 48px 112px 48px;
     }
     @include max(767){
       padding:0 18px 80px 18px;
     }
    .account-sale {
      padding: 0 15px 56px 15px;
      margin-bottom: 96px;
      border-bottom: 1px solid rgba(#000000, 0.1);
      @include max(1439){
        padding:0 0 41px 0;
        margin-bottom: 64px;
      }
    }
  }
}
</style>