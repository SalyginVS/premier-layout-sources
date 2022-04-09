<template>
  <div class="contacts_corporative_container container">
    <div class="main-wrapper">
      <TwoTitles
        main_title="Корпоративні контакти"
        little_title="Корпоративні"
      />
      <div class="contacts">
        <div
          class="contacts__container"
          ref="contacts__container"
          v-for="index in 5"
          :key="index"
        >
          <div class="contacts__description">
            <svg
              @click="infoOpen(index - 1)"
              ref="btn"
              width="4"
              height="9"
              viewBox="0 0 5 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7.5L4 4L1 0.5"
                stroke="rgb(120,119,117)"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h6 class="contacts__main_title">Premier Hotels and Resorts</h6>
            <p class="p2_light contacts__address">
              Адреса: Вул. Госпітальна 4а, Київ 01601, Україна
            </p>
          </div>
          <div class="contacts__values" ref="contacts__values">
            <div class="contacts__gorizontal_line"></div>
            <div class="contacts__values_wrapper">
              <p class="a1 contacts__value">
                <a href="tel:+38 044 590 69 69">+38 044 590 69 69</a>
              </p>
              <p class="a1 contacts__value">
                <a href="mailto:pr@phnr.com">pr@phnr.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TwoTitles from "~/blocks/globals/TwoTitles";
export default {
  name: "ContactsCorporative",
  data() {
    return {
      isInfoVis: false,
    };
  },
  components: {
    TwoTitles,
  },
  methods: {
    infoOpen(index) {
      console.log(
        this.$refs.contacts__values[index].classList.toggle(
          "contacts__values_active"
        )
      );
      console.log(this.$refs.btn[index].classList.toggle("btn__active"));

      this.isInfoVis = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.contacts_corporative_container {
  margin-top: 208px;

  @include max(lg) {
    margin-top: 164px;
  }
  @include max(md) {
    margin-top: 148px;
  }
  @include max(sm) {
    margin-top: 80px;
  }



}
a {
  color: black;
}
.departament_wrapper {
  margin-top: 96px;
  display: grid;
}
.contacts {
  &__container {
    background: #f0edea;
    padding: 24px;
    margin-bottom: 9px;

    @include max(lg) {
    }
    @include max(md) {
      width: 49%;
    }
    @media screen and (min-width: 650px) and (max-width: 900px) {
      &:last-child {
        width: 100%;
        display: flex;
        flex-direction: row;

        .contacts__description {
          width: 51%;
        }

        .contacts__values {
          width: 49%;
          display: flex;
          justify-content: space-between;
          border-left: 1px solid rgba(0, 0, 0, 0.08);
          .contacts__gorizontal_line {
            order: 1;
            width: 1px;
          }
          .contacts__values_wrapper {
            margin-left: 40px;
            order: 0;
            display: inline;
          }
        }
      }
    }
    @include max(sm) {
      padding: 18px;
      width: 100%;
    }
  }
  &__main_title {
    margin-bottom: 20px;

    @include max(lg) {
      margin-bottom: 8px;
    }
    @include max(md) {
    }
    @include max(sm) {
    }
  }
  &__gorizontal_line {
    height: 1px;
    background: #000000;
    opacity: 0.08;
    margin: 56px 0 32px;

    @include max(lg) {
      margin: 40px 0 24px;
    }
    @include max(md) {
      margin: 60px 0 24px;
    }
    @include max(sm) {
    }
  }
  &__values_wrapper {
    //padding: 8px;
  }
  &__description {
    position: relative;
    svg {
      @include min(sm) {
        display: none;
      }
      cursor: pointer;
      transform: rotate(90deg);
      position: absolute;
      right: 0;
      top: 0;
    }
    .btn__active {
      transform: rotate(270deg);
    }
    //padding: 8px;
  }
  &__address {
    max-width: 250px;
  }
  &__values {
    @include max(sm) {
      display: none;
    }
  }
  &__values_active {
    @include max(sm) {
      display: block;
    }
  }

  @include min(md) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 9px;
    margin-top: 96px;
  }
  @include max(lg) {
    margin-top: 72px;
  }
  @include max(md) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
  @include max(sm) {
    margin-top: 48px;
  }
}
.contacts__value:first-of-type {
  margin-bottom: 12px;
}
</style>
