<template>
  <div id="fitnes_and_spa_first_screen">
    <div class="main-wrapper">
      <div class="first_screen_text">
        <h1>Фітнес і Спа</h1>
        <div class="description_wrapper">
          <div class="description_left">
            <p class="a1">Час роботи: 11:00 - 23:00</p>
          </div>
          <div class="description_right">
            <p class="p1 first_screen_decription">
              В оздоровчий комплекс Premier Palace Wellness Club входять:
              VIP-сауна, фінська сауна, турецька лазня, солярій, тренажерний зал
              із найсучаснішим обладнанням, зал для аеробіки та масажні
              кабінети.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom_bar" :class="{ colorKebab }">
      <KebabFooter :footer_list="footer_list" @openMap="openMap" />
    </div>
  </div>
</template>

<script>
import SlashButton from "~/components/SlashButton";
import KebabFooter from "~/blocks/globals/KebabFooter";
//static info
import { footer_type_one } from "~/assets/js_static_data/footers_first_screens";

export default {
  components: {
    SlashButton,
    KebabFooter
  },
  data: () => ({
    footer_list: footer_type_one
  }),
  props: {
    colorKebab: {
      type: Boolean,
      default: false
    },
    openMap:{
      type:Function,
      default:()=>{}    
      }
  }
};
</script>
<style lang="scss">
#fitnes_and_spa_first_screen {
  .bottom_bar {
    &.colorKebab {
      .first_screen_footer_container {
        p,
        a {
          opacity: 1;
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
#fitnes_and_spa_first_screen {
  height: 100vh;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 74.42%,
      rgba(0, 0, 0, 0.54) 100%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 55.51%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("../../static/images/fitnes_and_spa_first.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: soft-light, normal, normal, normal, normal;
  padding-top: 81px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  // @include max(md) {
  //   height: 75vh;
  // }
  @include max(sm) {
    height: 100vh;
  }
}

.first_screen_text {
  // padding-left: 199px;
  margin-top: 68px;
  // margin-left: auto;
  // padding-right: 80px;
  width: 911px;
  @include max(1439) {
    // margin-top: 110px;
    width: 67vw;
    margin-top: 90px;
  }
  @include max(1023) {
    width: 79vw;
  }
  @include max(767) {
    margin: 0 auto;
    padding: 0 18px;
    width: 375px;
  }
  h1 {
    // padding-right: 90px;
    text-align: left;
    @include mb-48;
    @include max(1024) {
      white-space: nowrap;
    }
    @include max(767){
      font-size:40px;
    }
  }
  .first_screen_decription {
    width: 356px;
    margin-bottom: 61px;
    @include max(lg) {
      width: 273px;
    }
    @include max(md) {
      width: 260px;
    }
    @include max(sm) {
      width: 296px;
      margin-bottom: 0;
    }
  }
}

h1,
p {
  color: #ffffff;
}

.description_wrapper {
  // margin-right: -170px;
  display: flex;
  justify-content: space-between;
@include max(767){
  flex-flow:row wrap;
}
  // @include max(lg) {
  //   margin-right: -100px;
  // }
  // @include max(md) {
  //   margin-right: -140px;
  // }
  // @include max(767) {
  //   margin-right: 0px;
  //   flex-direction: column;
  // }
  // @include max(750) {
  //   margin-right: -60px;
  // }
}
.description_left {
  display: flex;
  align-items: center;
  height: fit-content;
  @include max(767) {
    margin-bottom: 18px;
  }
}
.stars {
  img {
    width: 13px;
    margin-right: 8px;
  }
}
.bottom_bar {
  position: absolute;
  left: 55px;
  bottom: 33px;
  display: flex;
  align-items: center;
  @include max(md) {
    left: 48px;
    bottom: 24px;
  }
  @include max(sm) {
    left: 18px;
    bottom: 28px;
  }
  p {
    cursor: pointer;
  }
}
</style>
