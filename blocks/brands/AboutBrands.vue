<template>
  <div class="about_brands_container">
    <div class="main-wrapper">
      <div class="left_titles container">
        <p class="little_title">про нас</p>
        <h3>Premier Hotels and Resorts</h3>
        <h3 class="gold_text_header gold_text italic">
          готелі, що створюють емоції
        </h3>
      </div>
      <div class="points_container">
        <div class="points_container_wrapper">
          <div class="points">
            <div class="point_wrapper">
              <p class="gold_text point">17</p>
              <p class="point_name a1">готелів</p>
            </div>
            <div class="point_wrapper">
              <p class="gold_text point">02</p>
              <p class="point_name a1">країни</p>
            </div>
            <div class="point_wrapper">
              <p class="gold_text point">13</p>
              <p class="point_name a1">міст</p>
            </div>
            <div class="point_wrapper">
              <p class="gold_text point">03</p>
              <p class="point_name a1">бренда</p>
            </div>
          </div>

          <div v-if="line" class="line-simple"></div>
        </div>

        <p class="p1 point_description">
          Сервіс на вищому рівні завжди майже непомітний, але залишає теплі
          емоції від місця, яке Ви відвідали. Він проявляється у теплій
          посмішці, вишуканій кухні, технологічних новинках та зручностях,
          щирому піклуванні – таких маленьких, але дуже важливих деталях.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutBrands",
  props: {
    line: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.about_brands_container {
  margin: 192px 0 68px;

  @include max(lg) {
    margin-top: 124px;
  }
  @include max(md) {
    margin-top: 112px;
  }
  @include max(sm) {
    margin-top: 80px;
  }
}
.little_title {
  @include mb-22;
  opacity:.3;
}
.points_container {
  display: flex;
  @include pr-168;
  justify-content: space-between;
  @include mt-88;

  @include max(lg) {
    margin-top: 63px;
    padding-right: 111px;
  }
  @include max(md) {
    margin-top: 56px;
    padding-right: 48px;
  }
  @include max(sm) {
    flex-direction: column;
    margin-top:32px;
    padding-right: 0px;
  }
}
.points_container_wrapper {
  position: relative;
  @include max(lg) {
    padding-right: 20px;
  }
  @include max(md) {
  }
  @include max(sm) {
    padding-right: 0px;
  }
  .line-simple {
    position: absolute;
    top: unset;
    bottom: 60px;
    left: 110px;
    @include max(lg) {
      width: 300px;
      bottom: 35px;
      left: -17px;
    }
    @include max(md) {
      width: 250px;
      bottom: 65px;
      left: -10px;
    }
    @include max(sm) {
      display: none;
    }
  }
}
.points {
  padding: 32px 88px 62px 0;
  @include pl-168;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #f5f4f3;
  position: relative;
  z-index: 1;

  @include max(lg) {
    padding: 24px 45px 48px 0;
    width: 502px;
    height: 141px;
  }
  @include max(md) {
    padding: 24px 32px 40px 0;
    width: 359px;
    height: 123px;
  }
  @include max(sm) {
    height: 106px;
    padding: 18px 37px 34px;
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
  }
}
.point {
  font-family: CormorantRegular;
  font-style: normal;
  font-weight: normal;
  font-size: 66px;
  line-height: 110%;
  text-align: center;
  @include mb-16;

  @include max(md) {
    margin-bottom: 12px;
  }
  @include max(sm) {
  }
}
.point_wrapper {
  @include ml-64;
  @include max(lg) {
    margin-left: 52px;
  }
  @include max(md) {
    margin-left: 32px;
  }
  @include max(sm) {
    margin-left:0;
  }
  .gold_text {
    line-height: 120%;

    @include max(lg) {
      font-size: 40px;
    }
    @include max(md) {
      font-size: 28px;
    }
    @include max(sm) {
    }
  }
  p {
    text-align: center;
  }
  .point_name {
    opacity: 0.3;
  }
}
.point_description {
  width: 430px;

  @include min(lg) {
    margin-left: 20px;
  }

  @include max(lg) {
    width: 313px;
    height: 141px;
  }
  @include max(md) {
    width: 257px;
    height: 152px;
  }
  @include max(sm) {
    height: auto;
    width: 94%;
    margin: 31px auto 0;
  }
}
</style>
