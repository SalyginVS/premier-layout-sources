<template>
  <div id="we_care">
    <div class="description_block container main-wrapper">
      <div class="titles" >
        <p class="little_title"> увага до деталей </p>
        <h3 v-if="isMobileScreen" > Ми дбаємо про дрібниці </h3>
        <template v-if="!isMobileScreen">
          <h3>Ми дбаємо</h3>
          <h3 class="italic">про дрібниці</h3>
        </template>


      </div>
      <p class="description_text p1">
        Початок повсякденної роботи по формуванню позиції однозначно фіксує
        необхідність експериментів, що вражають своєю масштабністю і
        грандіозності. Завдання організації, особливо ж подальший розвиток
        різних.
      </p>
    </div>

    <div class="details main-wrapper">
      <div
        class="option"
        v-for="detail in details"
        :key="detail.id"
        @mouseover="bgImageChange(detail.id)"
      >
        <nuxt-link :to="detail.href">
          <img
            class="first_gold_arrow"
            src="~/static/images/gold_arrow.png"
            alt
          />
          <h4>{{ detail.title }}</h4>
          <p class="p1 detail_description">{{ detail.description }}</p>
          <img
            class="last_gold_arrow"
            src="~/static/images/gold_arrow.png"
            alt
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeCare",
  data() {
    return {
      image_bg: undefined,
      imageIdNumber: 0,
      activeId: null,
      isMobileScreen: false,
      imageArray: [
        {
          id: 0,
          bg_image: require("~/static/images/details2.jpg"),
        },
        {
          id: 1,
          bg_image: require("~/static/images/details3.jpg"),
        },
        {
          id: 2,
          bg_image: require("~/static/images/details4.jpg"),
        },
        {
          id: 3,
          bg_image: require("~/static/images/details.jpg"),
        },
      ],
    };
  },
  props: {
    bg_image: {
      type: String,
      default: require("~/static/images/details.jpg"),
    },
    details: {
      type: Array,
      default: () => [
        {
          id: 0,
          title: "Ідеальна зустріч",
          description:
            "Початок повсякденної роботи по формуванню позиції однозначно фіксує необхідність експериментів.",
          href: "/",
        },
        {
          id: 1,
          title: "Свіжий та органічний ",
          description:
            "Початок повсякденної роботи по формуванню позиції однозначно фіксує необхідність експериментів.",
          href: "/",
        },
        {
          id: 2,
          title: "Художній куточок",
          description:
            "Початок повсякденної роботи по формуванню позиції однозначно фіксує необхідність експериментів.",
          href: "/",
        },
        {
          id: 3,
          title: "Більше послуг",
          description:
            "Початок повсякденної роботи по формуванню позиції однозначно фіксує необхідність експериментів.",
          href: "/",
        },
      ],
    },
  },
  methods: {
    bgImageChange(photoId) {
      //let activeId = 1;
      if (photoId != this.activeId) {
        console.log("photo id - " + photoId);
        console.log("active id" + this.activeId);
        this.activeId = photoId;

        document.getElementById("we_care").style.backgroundImage =
          "url('" + this.imageArray[photoId].bg_image + "')";
      }
    },
    isMobile() {
      this.isMobileScreen =  process.client && window.innerWidth < 600;
    },

  },
  computed: {
    getImage() {
      return this.image_bg;
    },

  },
  mounted() {
    this.isMobile()
    this.image_bg = this.bg_image;
    document.getElementById("we_care").style.backgroundImage =
      "url('" + this.imageArray[3].bg_image + "')";
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

#we_care {
  transition-duration: 0.8s;
  //overflow: hidden;
  position: relative;
  padding: 0 0 48px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @include max(lg) {
    padding: 0 0 64px;
  }
  @include max(md) {
    padding: 0 0 56px;
  }
  @include max(sm) {
    padding: 0 0 64px;
  }
}

.background-image {
  position: absolute;
  width: calc(100% - 2px);
  height: 140%;
  overflow: hidden;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}

p,
h3,
h6,
h4 {
  color: #ffffff;
}

.description_block {
  padding-top: 104px;
  padding-bottom: 80px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @include max(lg) {
    padding-top: 96px;
    padding-bottom: 72px;
  }
  @include max(md) {
    padding-top: 88px;
    padding-bottom: 64px;
  }
  @include max(sm) {
    padding-top: 63px;
    padding-bottom: 20px;
  }
}

.titles {
  p {
    margin-bottom: 20px;
    @include max(lg) {
      margin-bottom: 17px;
    }
    @include max(md) {
      margin-bottom: 13px;
    }
  }
}

.description_text {
  width: 436px;
  margin-left: auto;
  margin-top: -24px;
  display: flex;
  @include max(lg) {
    margin-top: -30px;
    width: 320px;
  }
  @include max(sm) {
    margin-top: 20px;
    width: 100%;
  }

  // margin-top: 138px;
}

.italic {
  font-family: CormorantRegularItalic;
}

.details {
  padding: 0 132px;
  @include max(lg) {
  }
  @include max(md) {
    padding: 0 48px;
  }
  @include max(sm) {
    padding: 0 18px;
  }
}

.detail_description {
  width: 430px;
  @include max(lg) {
    width: 300px;
  }
}

.option a {
  position: relative;
  width: 100%;
  padding: 40px 32px 40px;
  border-top: 1px solid rgba(#ffffff, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //transition: all 0.4s cubic-bezier(0.24, 0.89, 0.22, 0.99);
  @include max(lg) {
    padding: 48px 20px;
  }
  @include max(md) {
    padding: 43px 0px 46px 0;
  }
  @include max(sm) {
    padding: 64px 0 0 0;
    border-top: 0;
  }

  &:last-child {
    border-bottom: 1px solid rgba(#ffffff, 0.1);
    @include max(md) {
      border-bottom: 0px;
      padding-bottom: 0;
    }
  }

  .last_gold_arrow {
    display: none;
  }
  .first_gold_arrow {
    position: absolute;
    opacity: 0;
    transition: opacity 0.5s ease;
    width: 40px;
    @include max(lg) {
      display: none;
    }
  }
  h4 {
    transition: transform 0.5s cubic-bezier(0.24, 0.89, 0.22, 0.99);
    transform: translateX(0);
  }
  .detail_description {
    transition: all 0.5s cubic-bezier(0.24, 0.89, 0.22, 0.99);
    transform: translateX(0);
    opacity: 0;
    @include max(lg) {
      opacity: 1;
      transform: unset;
    }
    @include max(sm) {
      display: none;
    }
  }
}
.option:last-of-type {
  .last_gold_arrow {
    display: block;
    transition: transform 0.5s cubic-bezier(0.24, 0.89, 0.22, 0.99);
    @include max(md) {
      display: none;
    }
  }
  .detail_description,
  .first_gold_arrow {
    display: none;
  }
}

.option:hover {
  .first_gold_arrow {
    opacity: 1;
  }
  h4 {
    transform: translateX(60px);
    @include max(lg) {
      transform: unset;
    }
  }
  .detail_description {
    transform: translateX(-60px);
    opacity: 1;
    @include max(lg) {
      opacity: 1;
      transform: unset;
    }
  }
}
.option:last-of-type:hover {
  h4 {
    transform: translateX(0px);
  }
  .last_gold_arrow {
    transform: translateX(30px);
  }
}
</style>
