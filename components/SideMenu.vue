<template>
  <div
    class="side-menu"
    :class="{ popup_menu: showMenuMob && breakpoint <= 1024 }"
  >
    <div class="side-menu__mob" @click="showMenu">
      <div class="side-menu__mob-wrapper">
        <div class="side-menu__mob-wrapper__title">{{ sideMenuTitle }}</div>
        <div class="side-menu__mob-wrapper__btn">
          <div class="side-menu-wrapper__mob-btn__title">
            особистий кабінет
          </div>
          <svg
            width="7"
            height="7"
            viewBox="0 0 7 7"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.29327 3.2929L3.46484 6.12133L0.636417 3.2929"
              stroke="white"
              stroke-width="0.6"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="side-menu-wrapper" :class="{ show: showMenuMob }">
      <h6 class="title">
        Premier Club
        <template v-if="showUserStatusIcon">
          <img
            v-if="!user.isInClub"
            class="account-icon"
            src="~/static/icons/account.svg"
            alt="icon"
          />
          <img
            v-if="user.isInClub"
            class="account-icon"
            src="~/static/icons/account-group.svg"
            alt="icon"
          />
        </template>
      </h6>
      <div class="menu-list">
        <nuxt-link
          class="a2"
          :to="item.href"
          :active-class="'active'"
          v-for="item in menuList"
          :key="item.id"
          >{{ item.name }}</nuxt-link
        >
      </div>
      <a class="a2 close" href="/"> вийти з кабінету </a>
      <div class="support">
        <p class="a2">{{ support.title }}</p>
        <div class="contact">
          <a
            class="a2"
            :active-class="'active'"
            v-for="item in support.contact"
            :key="item.id"
            :href="item.href"
            :target="item.type === 'email' ? '_blank' : ''"
            >{{ item.name }}</a
          >
        </div>
      </div>
      <div class="add-info">
        <a
          class="a2"
          v-for="item in addInfo"
          :key="item.id"
          :href="item.link"
          >{{ item.name }}</a
        >
        <div class="line-divider"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { globalMixin } from "~/plugins/mixins";
export default {
  name: "SideMenu",
  mixins: [globalMixin],
  props: {
    sideMenuTitle: {
      type: String,
      default: "Premier Club"
    }
  },
  data() {
    return {
      showMenuMob: false,
      menuList: [
        {
          id: 0,
          name: "особистий кабінет",
          href: "/account/profile"
        },
        {
          id: 1,
          name: "МОЇ БРОНЮВАННЯ",
          href: "/account/reservations"
        },
        {
          id: 2,
          name: "витратити бонуси",
          href: "/account/redeem_points"
        },
        {
          id: 3,
          name: "ІСТОРІЯ бонусІв",
          href: "/account/points_history"
        },
        {
          id: 4,
          name: "E-сертифікати",
          href: "/account/e_sertificate"
        },
        {
          id: 5,
          name: "Клієнтська підтримка",
          href: "/account/customer_care"
        },
        {
          id: 6,
          name: "Налаштування",
          href: "/account/setting"
        }
      ],
      support: {
        title: "Підтримка Premier Club",
        contact: [
          {
            id: 0,
            type: "email",
            name: "atmosfera@premier-palace.com",
            href: 'mailto:"atmosfera@premier-palace.com"'
          },
          {
            id: 1,
            type: "phone",
            name: "+38 044 590 69 80",
            href: 'tel:"+38 044 590 69 80"'
          }
        ]
      },
      addInfo: [
        {
          id: 0,
          name: "Правила та умови",
          link: "/"
        },
        {
          id: 1,
          name: "faq",
          link: "/"
        }
      ]
    };
  },
  methods: {
    showMenu() {
      this.showMenuMob = !this.showMenuMob;
    }
  },
  computed: {
    ...mapState(["user", "showUserStatusIcon"]),
    breakpoint() {
      if (this.breakpoints > 1024 && this.showMenuMob) {
        this.showMenuMob = !this.showMenuMob;
      }
      console.log(this.sideMenuTitle);
      return this.breakpoints;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";
.side-menu {
  width: 320px;
  height: 100%;
  padding: 58px 24px 0 24px;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  @include max(1439) {
    padding: 48px 24px 0 24px;
    width: 256px;
  }
  @include max(1023) {
    padding: unset;
    position: static;
    width: calc(100% - 12px);
    margin: 0 auto;
  }
  .side-menu__mob-wrapper {
    display: none;
    @include max(1023) {
      height: 68px;
      width: calc(100% - 84px);
      margin: 0 auto;
      display: flex;
      flex-flow:row wrap;
      justify-content: space-between;
      align-items: center;
    }
    @include max(767) {
      width: calc(100% - 28px);
      height: 55px;
    }
    &__title {
      font-size: 18px;
    }
    &__btn {
      display: flex;
      align-items: center;
      font-size: 9px;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      svg {
        margin-left: 16px;
      }
    }
  }
  .side-menu-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    @include max(1023) {
      position: absolute;
      opacity: 0;
      z-index: -1000;
    }
  }

  .title {
    margin-bottom: 32px;
    padding: 0 8px;
    position: relative;
    @include max(1439) {
      margin-bottom: 24px;
    }
    .account-icon {
      position: absolute;
      right: -42px;
      top: 50%;
      transform: translateY(-50%);
      width: 40px;
      height: 40px;
    }
  }
  .menu-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 8px 48px 8px;
    border-bottom: 1px solid rgba(#000000, 0.1);
    @include max(1439) {
      padding: 0 8px 40px 8px;
    }
    .a2 {
      &:not(:last-child) {
        margin-bottom: 22px;
        @include max(1439) {
          margin-bottom: 16px;
        }
      }
    }
  }
  .a2 {
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: #171717;
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
    &:hover {
      opacity: 1;
    }
    &.active {
      opacity: 1;
    }
    &.close {
      padding: 32px 8px;
      margin-bottom: 48px;
      border-bottom: 1px solid rgba(#000000, 0.1);
      @include max(1439) {
        margin-bottom: 40px;
      }
    }
  }
  .support {
    margin-bottom: 93px;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    .contact {
      margin-top: 22px;
      display: flex;
      flex-direction: column;
      @include max(1439) {
        margin-top: 16px;
      }
      .a2 {
        opacity: 1;

        &:hover {
          opacity: 0.8;
        }
        &:not(:last-child) {
          margin-bottom: 20px;
          @include max(1439) {
            margin-bottom: 16px;
          }
        }
      }
    }
    @include max(1439) {
      margin-bottom: 96px;
    }
  }
  .add-info {
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    .a2 {
      margin-bottom: 21px;
      @include max(1439) {
        margin-bottom: 16px;
      }
    }
    .line-divider {
      display: none;
    }
  }
}
/** popup_menu */
.side-menu {
  &.popup_menu {
    width: calc(100% - 12px);
    margin: 0 auto;
    position: relative;
    .show {
      display: flex;
      flex-flow: row wrap;
      align-content: flex-start;
      justify-content: space-between;
      padding: 48px 38px 48px 38px;
      min-height: unset;
      position: absolute;
      top: 69px;
      z-index: 1000;
      background: #f5f5f5;
      opacity: 1;
      transition: all 0.2s ease;
      border-top: 1px solid rgba(0, 0, 0, 0.1);

      @include max(767) {
        padding: 32px 16px 40px 16px;
        top: 56px;
        justify-content: center;
      }
      .title {
        display: none;
      }
      .menu-list {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @include max(1023) {
          grid-row-gap: 20px;
        }
        @include max(767) {
          grid-template-columns: 1fr;
          grid-row-gap: 18px;
          padding: 0 8px 32px 8px;
        }
      }
      .a2.close {
        width: 100%;
        height: 77px;
        margin: 0;
        @include max(767) {
          order: 3;
          border-top: 1px solid rgba(#000000, 0.1);
          text-align: center;
        }
      }
      .support {
        margin-bottom: 0px;
        padding-top: 32px;
        margin-bottom: 40px;
        @include max(1023) {
          margin-bottom: 0;
        }
        @include max(767) {
          order: 4;
          flex-flow: row wrap;
          justify-content: center;
          max-width: 575px;
        }
        .contact {
          @include max(767) {
            flex-flow: row wrap;
            justify-content: center;
          }
        }
      }
      .add-info {
        padding-top: 32px;
        margin-left: 127px;
        @include max(767) {
          height: 65px;
          order: 2;
          margin: 0;
          padding: 0;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          display: flex;
          flex-flow: row wrap;
          .a2 {
            margin: 0;
            @include max(767) {
              min-width: 126px;
            }
          }
          .a2:first-of-type {
            @include max(767) {
              order: 1;
            }
          }
          .a2:last-of-type {
            @include max(767) {
              order: 3;
              text-align: center;
            }
          }
          .line-divider {
            @include max(767) {
              display: block;
              height: 45px;
              border: 1px solid #c4c4c4;
              order: 2;
            }
          }
        }
      }
    }
  }
}

/** popup_menu */
</style>
