<template>
  <div id="about_us_main"  class="main-wrapper">
    <div class="image_left">
      <img src="~/static/images/main_about_us.jpg" alt />
    </div>
    <div class="description_right">
      <p class="block_title a1">О нас</p>
      <h3>Premier Hotels перша</h3>
      <h3 class="gold_text gold_text_header">мережа готелів в Україні</h3>

      <div class="description_text_wrapper">
        <p class="description_text p1">
          Отели Премьер - это профессиональный высококлассный сервис и внимание
          к вашим пожеланиям. Всем гостям мы предоставляем бесплатный трансфер,
          обслуживание на reception 24/7, доставка еды в номера с последними
          технологическими новинками и свежим ремонтом, тапочки по вашему
          размеру и удобства, которых вы достойны!
        </p>
        <div class="presents_wrapper">
          <img src="~/static/images/present1.png" alt />
          <img src="~/static/images/present2.png" alt />
          <img src="~/static/images/present1.png" alt />
          <img src="~/static/images/present2.png" alt />
        </div>
        <SlashButton text="Детальніше" link="/brands"/>
      </div>
    </div>

    <LittleRightImage :img="img" />
  </div>
</template>

<script >
import SlashButton from "~/components/SlashButton";
import LittleRightImage from "~/components/LittleRightImage";

export default {
  name: "AboutUs",
  data: () => ({
    img: require("~/static/images/little_about_ua.jpg"),
  }),
  components: {
    SlashButton,
    LittleRightImage,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
#about_us_main {
  margin-top: 133px;
  display: flex;
  position: relative;
  z-index: 10;
  margin-bottom: 106px;
  @include max(lg) {
    margin-top: 124px;
  }
  @include max(md) {
    margin: 112px 0;
  }
  @include max(sm) {
    margin: 80px 0 80px 0;
    flex-direction: column;
    align-items: flex-start;
  }
}
.little_img_wrapper {
  @include max(md) {
    display: none;
  }
}

.image_left {
  margin-top: 104px;
  width: 521px;
  @include max(lg) {
    width: 370px;
    margin-top: 78px;
  }
  @include max(md) {
    width: 305px;
  }
  @include max(sm) {
    margin: 0 auto;
    margin-top: 0;
    margin-bottom: 32px;
    width: calc(100% - 16px);
    position: relative;
    height: 0;
    padding-top: calc(431 / 375 * 100%);
  }
  img {
    width: 100%;
    object-fit: cover;
    @include max(lg) {
      height: 466px;
    }
    @include max(md) {
      height: 383px;
    }
    @include max(sm) {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

.description_right {
  margin-left: 94px;
  @include max(lg) {
    margin-left: 102px;
  }
  @include max(md) {
    margin-left: 36px;
  }
  @include max(sm) {
    width: 100%;
    padding: 0 16px;
    margin-left: 0;
  }
}

.block_title {
  opacity: 0.3;
  margin-bottom: 32px;
  @include max(lg) {
    margin-bottom: 24px;
  }
  @include max(sm) {
    margin-bottom: 10px;
  }
}

.gold_text {
  margin-bottom: 72px;
  font-family: CormorantRegularItalic;
  @include max(lg) {
    margin-bottom: 40px;
  }
  @include max(md) {
    margin-bottom: 32px;
  }
  @include max(sm) {
    margin-bottom: 20px;
  }
}

.description_text_wrapper {
  padding-left: 115px;
  @include max(lg) {
    padding-left: 50px;
  }
  @include max(sm) {
    padding-left: 0px;
  }

  .description_text {
    max-width: 430px;
    margin-bottom: 64px;
    @include max(lg) {
      max-width: 290px;
    }
    @include max(md) {
      max-width: 326px;
      margin-bottom: 40px;
    }
    @include max(sm) {
      max-width: unset;
      width: 100%;
      margin-bottom: 32px;
    }
  }
}

.presents_wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @include mb-80;

  img {
    margin-right: 56px;
    @include max(lg) {
      margin-right: 37px;
      width: 45px;
      height: 50px;
      object-fit: contain;
    }
    @include max(sm) {
      margin-right:40px;
    }
  }
}
</style>
