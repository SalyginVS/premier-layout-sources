<template>
  <div class="about_premier-bonus_container">
    <div class="left_titles container">
      <p class="little_title">Як заробити бали</p>
      <h3>
        Ви отримаєте бонус на
        <span class="gold_text_header gold_text italic"
          >ваш рахунок за кожні:</span
        >
      </h3>
    </div>
    <div class="points_container">
      <div class="points_wrapper">
        <div class="points">
          <div class="point_wrapper">
            <p class="gold_text point">20₴</p>
            <p class="point_name a1">premier compass hotels</p>
          </div>
          <div class="point_wrapper">
            <p class="gold_text point">25₴</p>
            <p class="point_name a1">premier hotels</p>
          </div>
          <div class="point_wrapper">
            <p class="gold_text point">30₴</p>
            <p class="point_name a1">premier palace hotels</p>
          </div>
        </div>
        <div v-if="line" class="line-simple"></div>
      </div>

      <p class="p1 point_description">
        Ранні заїзди, догляд за вашими речами, кращі акційні пропозиції, знижки
        та, звичайно ж, ночі в подарунок! Ви будете отримувати на свій рахунок
        бонуси за всі ваші витрати в наших готелях.
        <!-- Подорожуйте в своє
        задоволення, отримуйте бонуси і міняйте їх на подарунки! -->
      </p>
    </div>
    <p class="a1 add-description">
      * У готелі Premier Compass Олександрія ви не можете скористатися знижками,
      в цьому готелі не нараховуються бали.
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutPremierBonus",
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
.about_premier-bonus_container {
  background: linear-gradient(
    180deg,
    rgba(240, 237, 234, 0) 0%,
    #f0edea 129.58%
  );
  margin: 192px 0 0px;
  padding-bottom: 32px;

  @include max (lg){
    margin: 164px 0 0;
  }

  @include max (md){
    margin: 120px 0 0;
  }

  @include max (md){
    margin-top: 80px;
  }


}
.left_titles {
  max-width: 970px;

  @include max(lg) {
    max-width: 650px;
  }

  @include max(md) {
    max-width: 448px;
  }
  @include max(sm) {
    max-width: 380px;
  }
}
.little_title {
  @include mb-22;

  @include max(lg) {
    margin-bottom: 9px;
  }

  @include max(md) {
    margin-bottom: 6px;
  }
}

.points_container {
  //border: 1px solid black;
  display: flex;
  align-items: center;
  @include pr-168;
  justify-content: space-between;
  @include mt-88;

  @include max(lg) {
    padding-right: 0;
    margin-top: 64px;
  }

  @include max(md) {
    margin-top: 56px;
  }

  @include max(sm) {
    flex-wrap: wrap;
  }
}
.points_wrapper {
  width: min-content;
  //width: fit-content;
  height: min-content;
  //height: fit-content;
  margin-right: 125px;
  position: relative;
  .line-simple {
    width: 400px;
    top: 130px;
    left: 79px;
    @include max(lg) {
      top: 91px;
      left: 61px;
      width: 300px;
    }
    @include max(md) {
      top: 83px;
      left: 0px;
      width: 250px;
    }
    @include max(sm) {
      display: none;
    }
  }

  @include max(1300){
    margin-right: 60px;
  }
  @include max(lg) {
    margin-right: 30px;
  }
  @include max(sm) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 32px;
  }
}
.points {
  padding: 16px 90px 44px 0;
  @include pl-168;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  // background: rgba(#f0edea, 0.5);
  background: #F0EDEA;
  position: relative;
  z-index: 1;

  @include max(lg) {
    padding: 10px 48px 36px 134px;
  }
  @include max(md) {
    padding: 8px 50px 32px 48px;
  }
  @include max(sm) {
    align-items: flex-start;
    padding: 12px 68px 16px 60px;
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
}
.point_wrapper {
  &:not(:last-child) {
    margin-right: 75px;

    @include max(md) {
      margin-right: 56px;
    }

    @include max(sm) {
      margin-right: 37px;
    }
  }
  .gold_text {
    line-height: 120%;

    @include max(lg) {
      font-size: 40px;
    }
    @include max(md) {
      font-size: 32px;
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
  //display: table;
  width: 430px;

  @include max(lg) {
    display: block;
    margin: 0 auto;
    width: 310px;
  }

  @include max(md) {
    margin: 0 auto;
    width: 34%;
    max-width: 257px;
  }

  @include max(sm) {
    margin: 0 18px;
    max-width: none;
    width: -webkit-fill-available;
  }
}
.add-description {
  margin-top: 170px;
  width: 100%;
  display: flex;
  justify-content: center;
  opacity: 0.3;

  @include max(lg) {
    width: -webkit-fill-available;
    margin: 164px 134px 0;
  }

  @include max(md) {
    margin: 148px 48px 0;
  }

  @include max(sm) {
    margin: 80px 18px 0;
  }
}
</style>
