<template>
  <div id="about_hotel">
    <div class="main-wrapper">
      <div class="about_hotel_top">
        <div class="image_left">
          <img
            class="image_left_desc"
            src="~/static/images/about_one_hotel.png"
            alt
          />
          <img
            class="image_left_mob"
            src="~/static/images/about_one_hotel-mob.png"
            alt
          />
          <img
            class="image_left_1920"
            src="~/static/images/about_one_hotel_1920.png"
            alt
          />
        </div>
        <div class="hotel_description">
          <p class="little_title">про готель</p>
          <h3>Premier Palace Hotel</h3>
          <h3 class="gold_text italic">розкіш в кожній деталі</h3>
          <div class="text_description_wrapper">
            <p class="p1 text_description">
              <AboutMainDescription :text="mainDescription" :maxLength="27" :breakpoint="600" />


            </p>

            <div class="buttons_wrapper">
              <GoldButton text="послуги готелю" />
              <p class="know_more second_button a1">правила готелю</p>
            </div>
          </div>
        </div>
      </div>
      <Rating class="rating-block" />
      <div class="about_hotel_wrapper">
        <div class="about_hotel_bottom">
          <p class="a1">
            <a target="_blank" href="mailto:reservation@premier-palace.com"
              >reservation@premier-palace.com</a
            >
          </p>
          <p class="a1">
            <a href="tel:+38 044 359 08 08">+38 044 359 08 08</a>
            <a href="tel:+38 044 590 69 80">+38 044 590 69 80</a>
          </p>
          <p class="a1">
            <a href="https://goo.gl/maps/EnuuTZJEmsM1yDm68" target="_blank"
              >бул. Т. Шевченко / ул. Пушкинская, 5-7/29, Киев</a
            >
          </p>
          <div class="socials">
            <a href="https://www.google.com/" target="_blank"
              ><img src="~/static/images/G+_gold.svg" alt
            /></a>
            <a href="https://www.facebook.com/" target="_blank"
              ><img src="~/static/images/fb_gold.svg" alt
            /></a>
            <a href="https://twitter.com/" target="_blank"
              ><img src="~/static/images/twi_gold.svg" alt
            /></a>
            <a href="https://www.instagram.com/" target="_blank"
              ><img src="~/static/images/insta_gold.svg" alt
            /></a>
          </div>
        </div>
        <div class="buttons_wrapper_mob">
          <GoldButton text="послуги готелю" />
          <Button :text="'правила готелю'" />
        </div>
        <!-- <div> -->
        <img
          class="litlle_right_image"
          src="~/static/images/about_one_hotel_little.jpg"
          alt
        />
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import GoldButton from "~/components/GoldButton";
import Button from "~/components/Button";
import Rating from "~/blocks/one_hotel/Rating";
import AboutMainDescription from "~/blocks/globals/abouts/AboutMainDescription.vue"

export default {
  name: "AboutHotel",
  components: {
    GoldButton,
    Button,
    Rating,
    AboutMainDescription
  },
  data(){
    return{
      mainDescription: "Premier Palace - це готель високого рівня обслуговування та" +
              "комфорту. У 2009 році він отримав шість зірок і сім смуг від" +
              "системи Stars and Stripes, всесвітньо відомої організації по" +
              "визнанню в індустрії гостинності, а консьєрж готелю володіє" +
              "«Золотими ключами», виданими йому однією з найбільших і визнаних у" +
              "світі гільдій Les Clefs d'Or . Готель входить в «ТОП" +
              "найзнаменитіших готелів світу», що робить її важливим місцем на" +
              "карті України."
    }
  }
};
</script>
<style lang="scss">
#about_hotel {
  .buttons_wrapper_mob {
    .gold_button {
      width: 100%;
      margin-bottom: 9px;
    }
    .simple-button {
      width: 100%;
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

#about_hotel {
  @include pt-140;
  background-color: #fbfbfb;
  @include max(md) {
    margin-bottom: 112px;
  }
  @include max(sm) {
    padding-top: 80px;
    margin-bottom: 80px;
  }
}
.about_hotel_top {
  display: flex;
  position: relative;
  z-index: 10;
  @include max(sm) {
    flex-direction: column;
  }
}
.image_left {
  width: 41.7vw;
  margin-bottom: -205px;
  position: relative;

  @include min(1441) {
    width: 610px;
  }
  @include max(1919) {
    clip-path: polygon(100% 0, 100% 70%, 60% 100%, 0 100%, 0 0);
  }
  @include max(lg) {
    width: 424px;
    margin-bottom: -100px;
  }
  @include max(md) {
    width: 309px;
    margin-bottom: -20px;
  }
  @include max(sm) {
    width: 100%;
    height: 282px;
    margin-bottom: 32px;
  }
  &_desc {
    @include max(sm) {
      display: none;
    }
    @include min(xl) {
      display: none;
    }
  }
  &_mob {
    display: none;
    @include max(sm) {
      display: block;
    }
  }
  &_1920 {
    display: none;
    @include min(1920) {
      display: block;
      position: absolute;
      left: -13vw;
    }
  }
  img {
    margin-top: 58px;
    @include max(1920) {
      width: 46vw;
    }
    @include max(1919) {
      width: 100%;
    }
    @include max(lg) {
      margin-top: 68px;
    }
    @include max(md) {
      margin-top: 118px;
    }
    @include max(sm) {
      margin-top: 0;
      height: 100%;

      object-fit: cover;
      width: calc(100% - 50px);
      margin: 0 auto;
    }
  }
}
.hotel_description {
  padding-left: 26px;
  height: fit-content;
  @include max(lg) {
    padding-left: 50px;
  }
  @include max(md) {
    padding-left: 37px;
  }
  @include max(sm) {
    padding: 0 18px;
  }
}
.little_title {
  margin-bottom: 32px;
  @include max(lg) {
    margin-bottom: 20px;
  }
  @include max(md) {
    margin-bottom: 24px;
  }
  // margin:
}
.text_description_wrapper {
  padding-left: 115px;
  @include max(lg) {
    padding-left: 50px;
  }
  @include max(sm) {
    padding-left: 0;
    width: 100%;
  }
}
.text_description {
  margin: 80px 0 60px;
  width: 435px;
  @include max(lg) {
    margin: 40px 0 58px;
    width: 367px;
  }
  @include max(md) {
    margin: 32px 0 56px;
    width: fit-content;
    max-width: 326px;
  }
  @include max(sm) {
    margin: 32px 0;
    max-width: 100%;
  }
}
.buttons_wrapper {
  display: flex;
  align-items: center;
  @include max(sm) {
    display: none;
  }
}
.buttons_wrapper_mob {
  display: none;
  @include max(sm) {
    display: block;
    width: 100%;
  }
}

.know_more {
  cursor: pointer;
  @include max(lg) {
    display: none;
  }
}
.rating-block {
  display: none;
  @include max(sm) {
    display: flex;
    margin-bottom: 32px;
  }
}

.about_hotel_wrapper {
  // margin-top: -205px;
  display: flex;
  justify-content: space-between;
  @include max(sm) {
    flex-direction: column;
    padding: 0 16px 0 18px;
  }
  @include min(xl) {
    margin-top: 12px;
  }
  @include max(1920) {
    margin-top: 186px;
  }
  @include max(1440) {
    margin-top: 0;
  }
  .litlle_right_image {
    width: 343px;
    @include max(lg) {
      width: 269px;
      height: 302px;
    }
    @include max(md) {
      display: none;
    }
    @include min(xl) {
      margin-left: 20px;
    }
  }
}

.about_hotel_bottom {
  width: 64.16vw;
  padding: 80px;
  background-color: rgba(#f0edea, 0.5);
  // opacity: 0.5;
  height: fit-content;
  @include min(xl) {
    width: 49vw;
  }
  @include max(lg) {
    padding: 40px;
    width: 100%;
    max-width: 628px;
  }
  @include max(md) {
    padding: 32px;
    max-width: 475px;
  }
  @include max(sm) {
    max-width: 100%;
    padding: 0;
    background-color: transparent;
  }
  p {
    @include mb-24;
    text-align: right;
    @include max(sm) {
      text-align: left;
      margin-bottom: 24px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  a {
    color: rgba(#171717, 0.5);
    display: inline-block;
    margin-left: 16px;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: rgba(#171717, 0.3);
    }
  }
  a:first-of-type {
    margin-left: 0;
  }
}
.socials {
  display: flex;
  justify-content: flex-end;
  @include max(sm) {
    display: none;
  }

  > a {
    margin: 0;
    opacity: 0.4;
    transition: opacity 0.3s ease-in-out;
    &:hover {
      opacity: 1;
    }
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
}
</style>
