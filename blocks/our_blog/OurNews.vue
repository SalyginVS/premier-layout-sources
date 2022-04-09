<template>
  <div class="our_news_container">
    <div class="main-wrapper">
      <h3>Наші новини</h3>

      <div class="news_wrapper container">
        <nuxt-link
          to="/"
          class="one_new"
          v-for="one_new in newsItems"
          :key="one_new.id"
        >
          <SaleLabel :text="one_new.label" :small_label="true" />
          <div
            class="one_new_wrapper"
            :style="{
              backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%),  url(${one_new.img})`,
            }"
          >
            <div class="inside_description_wrapper">
              <h5>{{ one_new.title }}</h5>
              <p class="p1">{{ one_new.description }}</p>
            </div>
          </div>
          <div class="outside_description_wrapper">
            <p class="a1 outside_title">{{ one_new.title }}</p>
            <p class="p2">{{ one_new.description }}</p>
          </div>
        </nuxt-link>
      </div>
      <div class="all_news_wrapper">
        <SlashButton text="всі новини" :link="link"/>
      </div>
    </div>
  </div>
</template>

<script>
import SlashButton from "~/components/SlashButton";
import { globalMixin } from '~/plugins/mixins';
export default {
  name: "OurNews",
  mixins:[globalMixin],
  props:{
    link:{
      type:String,
      default:null
    }
  },
  components: {
    SlashButton,
  },
  data: () => ({
    news: [
      {
        id: 0,
        title: "Лета легка економія",
        description: "Київ, Premier Palace Hotel",
        label: "17 feb 2020",
        img: require("~/static/images/news1.jpg"),
      },
      {
        id: 1,
        title: "Лета легка економія",
        description: "Київ, Premier Palace Hotel",
        label: "17 feb 2020",
        img: require("~/static/images/news2.jpg"),
      },
      {
        id: 2,
        title: "Сніданки з підписами",
        description: "Київ, Premier Palace Hotel",
        label: "17 feb 2020",
        img: require("~/static/images/news3.jpg"),
      },
      {
        id: 3,
        title: "Сніданки з підписами",
        description: "Київ, Premier Palace Hotel",
        label: "17 feb 2020",
        img: require("~/static/images/news4.jpg"),
      },
      {
        id: 4,
        title: "Лета легка економія",
        description: "Київ, Premier Palace Hotel",
        label: "17 feb 2020",
        img: require("~/static/images/news5.jpg"),
      },
    ],
  }),
  computed:{
    newsItems(){
      return this.breakpoints<=414?this.news.slice(0,1):this.news;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.our_news_container {
  background: linear-gradient(180deg, rgba(240, 237, 234, 0) 0%, #f0edea 100%);
  @include pb-140;

  @include max(lg) {
    padding-bottom: 68px;
  }
  @include max(md) {
    padding-bottom: 63px;
  }
  @include max(sm) {
    padding-bottom: 70px;
  }
}
h3 {
  margin-top: 180px;
  text-align: center;
  @include mb-80;

  @include max(lg) {
    margin: 165px 0 64px;
  }
  @include max(md) {
    margin: 148px 0 32px;
  }
  @include max(md) {
    margin: 81px 0 32px;
  }
}
.news_wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.one_new {
  width: calc(33.33333% - 26px);
  height: 15.13vw;
  @include mb-40;
  position: relative;

  .p2 {
    opacity: 0.5;
    font-size: 12px;
  }

  @include max(lg) {
    width: calc(33.33333% - 20px);
    min-height: 155px;
  }
  @include max(md) {
    min-height: 137px;
  }
  @include max(sm) {
    margin-bottom: 90px;
    min-height: 220px;
    width: 100%;

    &:last-child{
      margin-bottom: 0;
    }
  }

  @include min(sm) {
    &.one_new:nth-of-type(5n + 1),
    &.one_new:nth-of-type(5n + 2) {
      width: calc(50% - 20px);
      height: 23.8888vw;
      .inside_description_wrapper {
        display: block;
        h5,
        p {
          color: #ffffff;
        }
      }
      .outside_description_wrapper {
        display: none;
      }

      @include max(lg) {
        min-height: 238px;
      }
      @include max(md) {
        min-height: 212px;
      }
    }
  }
}

.one_new_wrapper {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: 24px 32px;
  .inside_description_wrapper {
    display: none;
  }
  .outside_description_wrapper {
    display: block;
  }

  @include max(lg) {
    padding: 16px 20px;
  }
  @include max(md) {
    padding: 12px 21px;
  }
}
.outside_title {
  margin: 18px 0 4px;
}

.all_news_wrapper {
  margin-top: 82px;
  display: flex;
  justify-content: center;
  @include max(sm) {
    margin-top: 103px;
  }
}
</style>
