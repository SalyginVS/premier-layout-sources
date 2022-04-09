<template>
  <div class="review_wrapper">
    <div class="main-wrapper">
      <div class="title_with_description">
        <div class="description_left">
          <p class="little_title">відгуки відвідувачів</p>
          <h3>
            <span class="gold_text italic">Відгуки наших</span>
            гарних клієнтів
          </h3>
        </div>
        <div class="description_right">
          <p class="description_text p1">
            Отели Премьер - это профессиональный высококлассный сервис и
            внимание к вашим пожеланиям. Всем гостям мы предоставляем бесплатный
            трансфер, обслуживание на reception 24/7, доставка еды в номера с
            последними!
          </p>
          <div class="slash_wrapper">
            <SlashButton text="Написати відгук" link="/make_review" />
          </div>
        </div>
      </div>
      <div class="points">
        <div class="point_wrapper">
          <p class="gold_text point">9.5</p>
          <p class="point_name a1">Booking.com</p>
        </div>
        <div class="point_wrapper">
          <p class="gold_text point">10.0</p>
          <p class="point_name a1">наш рейтинг</p>
        </div>
        <div class="point_wrapper">
          <p class="gold_text point">9.0</p>
          <p class="point_name a1">tripadvisor</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlashButton from "~/components/SlashButton";
export default {
  name: "ReviewsPoints",
  components: {
    SlashButton
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.title_with_description {
  display: flex;
  justify-content: space-between;
  padding: 0 168px;

  // @include max(1300) {
  //   position: relative;
  // }
  @include max(1439) {
    padding: 0 134px;
  }
  @include max(1023) {
    padding: 0 48px;
  }
  @include max(767) {
    flex-flow: row wrap;
    justify-content: end;
    padding: 0 18px;
  }
  h3 {
    max-width: 420px;
    @include max(1439) {
      font-size: 40px;
      max-width: 272px;
    }
    @include max(767){
      font-size:32px;
    }
  }
}
.little_title {
  margin-bottom: 23px;
  @include max(1024) {
    margin-bottom: 14px;
  }
  @include max(375) {
    margin-bottom: 10px;
  }
}
.description_text {
  width: 430px;
  margin-top: 150px;
  @include max(1439) {
    width: 290px;
    font-size: 12px;
  }
  @include max(767){
    margin-top:24px;
  }
}
.points {
  transform: translateY(-50%);
  padding: 32px 78px 62px 0;
  width: 654px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: rgba(#f0edea, 0.5);
  @include max(1439) {
    transform: translateY(-133%);
    width: 502px;
    padding: 32px 48px 40px 0;
  }
  @include max(1023) {
    transform: translateY(-145%);
    width: 382px;
    padding: 24px 32px 32px 0;
  }
  @include max(767) {
    transform:unset;
    width: 100%;
    justify-content: center;
    margin-top: 32px;
    padding: 48px 26px;
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
  @include max(1023) {
    font-size: 40px;
  }
  @include max(767) {
    font-size: 32px;
  }
}
.point_wrapper+.point_wrapper{
@include ml-64;
  @include max(1439) {
    margin-left: 31px;
  }
  @include max(1023) {
    margin-left: 22px;
  }
}
.point_wrapper {

  p {
    text-align: center;
  }
  .point {
    @include max(1439) {
      font-size: 40px;
    }
    @include max(767) {
      font-size: 32px;
    }
  }
  .point_name {
    opacity: 0.3;
  }
}
.slash_wrapper {
  @include mt-64;
  @include max(1439) {
    margin-top: 40px;
  }
  @include max(1023) {
    margin-top: 32px;
  }
  @include max(767) {
    display: none;
  }
}
.description_left {
  @include max(768) {
    max-width: 272px;
  }
}

</style>
