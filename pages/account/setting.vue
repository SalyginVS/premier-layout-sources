<template>
  <div id="account-setting">
    <div class="account-container">
      <div class="wrapper">
        <AccountGreet :data="greet" />
      </div>
      <AccountGraphPoints :data="points" :simpleGraph="true" />
    </div>
    <div class="account-container-info">
      <AccountSale :sale="sale" />
      <h4 class="setting-title">Налаштування</h4>
      <SettingInfo :data="personalInfo">
        <PersonalInfo :data="personalInfo.info" />
      </SettingInfo>

      <SettingInfo :data="passwordInfo">
        <SettingPassword />
      </SettingInfo>

      <SettingInfo :data="cardInfo">
        <SettingCreditCard />
      </SettingInfo>

      <SettingInfo :data="newsletter"> <SettingNewsletter /></SettingInfo>

      <SettingInfo :data="wishList">
        <SettingWishList :data="wishList.list"
      /></SettingInfo>
    </div>
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import AccountGreet from "~/blocks/account/AccountGreet";
import AccountGraphPoints from "~/blocks/account/AccountGraphPoints";
import AccountSale from "~/blocks/account/AccountSale";
import SettingInfo from "~/blocks/account/setting/SettingInfo";

import PersonalInfo from "~/blocks/account/setting/PersonalInfo";
import SettingPassword from "~/blocks/account/setting/SettingPassword";
import SettingCreditCard from "~/blocks/account/setting/SettingCreditCard";
import SettingNewsletter from "~/blocks/account/setting/SettingNewsletter";
import SettingWishList from "~/blocks/account/setting/SettingWishList";

export default {
  components: {
    HeaderBlock,
    AccountGreet,
    AccountGraphPoints,
    AccountSale,
    SettingInfo,

    PersonalInfo,
    SettingPassword,
    SettingCreditCard,
    SettingNewsletter,
    SettingWishList
  },

  methods: {
    OpenModalBonus() {
      this.openModalBonus = true;
    },
    CloseModal() {
      this.openModalBonus = false;
    }
  },

  data() {
    return {
      openModalBonus: false,
      greet: {
        greet: "Костянтин Костянтинов",
        accountNumber: "MA-000049328",
        cardNumber: "Amber 1503053"
      },

      points: {
        count: "1034"
      },
      sale: "51AM",
      personalInfo: {
        title: "Личная информация",
        info: {
          name: "Anastasiya Dombrovskaya",
          helper:
            "Если Вам нужно поменять имя, фамилию или email, пожалуйста, напишите запрос на",
          email: "reservation@phnr.com",
          fields: [
            {
              id: 0,
              placeholder: "E-mail",
              type: "email",
              field: "email"
            },
            {
              id: 1,
              placeholder: "телефон",
              type: "text",
              field: "phone"
            },
            {
              id: 2,
              placeholder: "Дата народження",
              type: "text",
              field: "dateBirth"
            },
            {
              id: 3,
              placeholder: "Країна",
              type: "text",
              field: "country"
            }
          ],
          authorization: ["Facebook", "Google"]
        }
      },
      passwordInfo: {
        title: "Налаштування пароля"
      },
      cardInfo: {
        title: "Інформація про кредитні картки"
      },
      newsletter: {
        title: "Налаштування розсилки"
      },
      wishList: {
        title: "Мої побажання",
        list: {
          description:
            "В рамках специфікації сучасних стандартів, незалежні держави і донині залишаються долею лібералів, які жадають бути своєчасно верифіковані. У своєму прагненні підвищити якість життя, вони забувають. ",
          options: [
            "Конференц / Банкетний зал",
            "Чайник/кавоварка в номері",
            "Бізнес-центр",
            "Обслуговування номерів",
            "Конференц / Банкетний зал",
            "Критий басейн (цілий рік)",
            "Сауна",
            "Мінібар в номері",
            "Дитяче меню",
            "Критий басейн (цілий рік)",
            "Трансфер (за запитом)",
            "Пральня",
            "Фітнес-центр",
            "Приватна парковка",
            "Трансфер (за запитом)"
          ]
        }
      }
    };
  }
};
</script>
<style lang="scss">
@import "../../assets/scss/utils.scss";
#account-setting {
  .account-container-info {
    .tab-header {
      h6 {
        @include max(1439) {
          font-size: 28px;
        }
        @include max(1023) {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
#account-setting {
  .account-container {
    width: 100%;
    display: flex;
    align-items: flex-end;
    @include max(1023) {
      width: calc(100% - 96px);
      margin: 0 auto;
    }
    @include max(767) {
      width: calc(100% - 36px);
      align-items: flex-start;
    }
    .wrapper {
      display: flex;
      flex-direction: column;
      .account-greet {
        padding-left: 100px;
        margin-bottom: 40px;
        @include max(1439) {
          padding-left: 42px;
        }
        @include max(1023) {
          padding-left: 0;
        }
        @include max(767) {
          margin-bottom: 24px;
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
      padding-left: 42px;
      padding-bottom: 124px;
    }
    @include max(1023) {
      padding: 0 60px 112px 48px;
    }
    @include max(767) {
      padding: 0 18px 80px 18px;
    }

    .account-sale {
      padding: 0 15px 56px 15px;
      margin-bottom: 96px;
      border-bottom: 1px solid rgba(#000000, 0.1);
      @include max(1439) {
        margin-bottom: 72px;
      }
      @include max(1023) {
        padding: 0 0 40px 0;
      }
      @include max(767) {
        margin-bottom: 48px;
        padding: 0 0 32px 0;
      }
    }
    .setting-title {
      margin-bottom: 48px;
      @include max(1439) {
        font-size: 36px;
      }
      @include max(1023) {
        font-size: 28px;
      }
      @include max(767) {
        font-size: 26px;
        margin-bottom: 32px;
      }
    }
    .setting-info {
      &:not(:last-child) {
        margin-bottom: 24px;
        @include max(1023) {
          margin-bottom: 42px;
        }
        @include max(767) {
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
