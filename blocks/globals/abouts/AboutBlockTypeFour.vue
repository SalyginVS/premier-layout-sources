<template>
  <div id="about_restaurant">
    <div class="main-wrapper">
      <div
        class="about_restaurant-wrapper"
        :class="{
          hotel_school_page: isHotelSchoolPage,
          consulting_page: isConsultingPage
        }"
      >
        <div class="left_image_wrapper">
          <div class="foreground_gradient"></div>
          <img :src="image" alt />
        </div>
        <div class="descripton_wrapper">
          <h4 v-html="description.title"></h4>

          <div class="second_description_wrapper">
            <p class="long_description p1">{{ description.description }}</p>
            <ul class="benefits_wrapper">
              <li
                class="benefit a1"
                v-for="benefit in description.benefits"
                :key="benefit"
              >
                {{ benefit }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutBlockTypeFour",
  props: {
    image: {
      type: String,
      default: ""
    },
    description: {
      type: Object,
      default: () => ({})
    },
    isHotelSchoolPage: {
      type: Boolean,
      default: false
    },
    isConsultingPage: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";

#about_restaurant {
}
.about_restaurant-wrapper {
  @include mt-140;
  display: flex;
  width: 100%;
}
.left_image_wrapper {
  width: 46.8vw;
  @include mt-184;
  position: relative;

  img {
    width: 100%;
  }
}

.foreground_gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  background: linear-gradient(
    217.78deg,
    rgba(255, 255, 255, 0.43) 0%,
    rgba(255, 255, 255, 0) 19.76%
  );
}

.descripton_wrapper {
  position: relative;
  z-index: 10;
  flex-grow: 1;
}

h4 {
  position: relative;
  width: 650px;
  margin-left: -88px;
}

.second_description_wrapper {
  padding-left: 146px;
}

.long_description {
  width: 420px;
  @include mt-80;
  @include ml-40;
  padding-left: 0;
}
.benefits_wrapper {
  @include mt-64;
  padding: 54px;
  width: 100%;
  background: #f0edea;
}
.benefit {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.benefit:last-of-type {
  margin-bottom: 0px;
}
.benefit::before {
  content: url("../../../static/images/circle_check.svg");
  display: block;
  margin-right: 14px;
  margin-bottom: -2px;
}
/*hotel_school_page && consulting_page*/
.hotel_school_page,
.consulting_page {
  @include max(700) {
    flex-flow: row wrap;
    justify-content: center;
  }
  @include max(1050) {
    margin-top: 111px;
  }
  @include max(767){
    margin-top:80px;
  }
  .left_image_wrapper {
    
    @include max(1439) {
      margin-top: 132px;
      height:638px;
      width:41.5vw;
    }
    @include max(1023) {
      height: 531px;
      width:44vw;
    }
    @include max(767) {
      display: none;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .second_description_wrapper {
    @include max(1220) {
      padding-left: 67px;
    }
    @include max(1023) {
      padding-left: 37px;
    }
    @include max(767) {
      padding-left: unset;
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
    }
    .long_description {
      margin-left: 32px;
      @include max(1023) {
        max-width: 326px;
        margin-top: 40px;
      }
      @include max(767){
        margin-left:0;
        margin-top:32px;
      }
    }
  }
  .descripton_wrapper {
    @include max(767) {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
    }
    h4 {
      @include max(1050) {
        width: 544px;
        margin-left: -136px;
        font-size: 36px;
      }
      @include max(980) {
        width: 373px;
        font-size: 28px;
      }
      @include max(767) {
        width: calc(100% - 40px);
        margin-left: 0;
      }
    }
  }
  .benefits_wrapper {
    @include max(1023) {
      padding: 34px 41px 33px 32px;
    }
    .benefit {
      @include max(1023) {
        margin-bottom: 15px;
      }
    }
  }
}
.consulting_page {
  @include max(700) {
    flex-flow: row wrap-reverse;
  }
  .left_image_wrapper {
     margin-top: 200px;
    @include max(1439) {
      margin-top: 150px;
    }
    
  }
  .descripton_wrapper {
    @include max(980) {
      max-width: 444px;
    }
    @include max(375) {
      margin-top: 0;
    }
    h4 {
      @include max(768) {
        margin-left: -90px;
      }
      @include max(700) {
        margin: 0 auto;
      }
    }
  }
}
/*hotel_school_page && consulting_page*/
</style>
