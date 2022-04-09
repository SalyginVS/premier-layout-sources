<template>
  <div id="benefits" class="main-wrapper">
    <div :class="{ inverse: inverse }" class="image_left">
      <img :src="dataBenefits.img" alt />
      <div v-if="line" class="line-simple"></div>
    </div>

    <div class="benefits_wrapper" :class="{ indent }">
      <p class="little_title">{{ dataBenefits.subtitle }}</p>

      <h3
        v-html="dataBenefits.title"
        :class="{ 'indent-title': indentTitle }"
      ></h3>
      <p class="p1 description_text">{{ dataBenefits.description }}</p>

      <div class="images_block">
        <div class="benefit" v-for="benefit in benefits" :key="benefit.id">
          <img :src="benefit.img" alt />
          <div class="a1">{{ benefit.description }}</div>
        </div>
      </div>
      <GoldButton
        v-if="goldButton"
        :big_size="true"
        :text="dataBenefits.button"
      />

      <SlashButton v-else text="Детальніше" :link="slashButtonLink"/>
    </div>
  </div>
</template>

<script>
import SlashButton from "~/components/SlashButton";
import GoldButton from "~/components/GoldButton";

export default {
  name: "Benefits",
  components: {
    SlashButton,
    GoldButton,
  },
  props: {
    goldButton: {
      type: Boolean,
      default: false,
    },
    inverse: {
      type: Boolean,
      default: false,
    },
    indent: {
      type: Boolean,
      default: false,
    },
    indentTitle: {
      type: Boolean,
      default: false,
    },
    line: {
      type: Boolean,
      default: false,
    },
    slashButtonLink: {
      type: String,
      default: null
    },
    dataBenefits: {
      type: Object,
      default: () => ({
        img: require("~/static/images/benefit_left.jpg"),
        subtitle: "Пільги зі знижкою",
        title: "<span class='gold_text  italic'>Premier club програма</span>  <span>лояльності гостей</span> ",
        description:
          "Господа, високотехнологічна концепція суспільного укладу дозволяє виконати важливі завдання по розробці як самодостатніх, так і зовні залежних концептуальних рішень.",
        button: "Детальніше",
      }),
    },
  },
  data: () => ({
    benefits: [
      {
        id: 0,
        img: require("~/static/images/benefit1.png"),
        description: "отримуй бонуси та обмінювайся подарунками",
      },
      {
        id: 1,
        img: require("~/static/images/benefit2.png"),
        description: "додаткові 10% на проживання",
      },
      {
        id: 2,
        img: require("~/static/images/benefit3.png"),
        description: "безкоштовний ранній заїзд та пізній виїзд",
      },
      {
        id: 3,
        img: require("~/static/images/benefit4.png"),
        description: "10% знижка на послуги ресторану",
      },
    ],
  }),
};
</script>

<style lang="scss">
@import "../../assets/scss/utils.scss";

#benefits {
  .gold_text {
    line-height: 100%;
    white-space: nowrap;
  }
  .gold_button {
    width: fit-content;
    min-width: 280px;
    padding: 0;

    @include max(sm) {
      width: 100%;
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
#benefits {
  @include mb-140;
  display: flex;
  align-items: center;

  @include max(lg) {
    margin-bottom: 124px;
  }
  @include max(md) {
    margin-bottom: 111px;
  }
  @include max(sm) {
    margin-bottom: 80px;
  }
}
.image_left {
  position: relative;
  display: flex;

  margin-right: 20px;

  @include max(xl) {
    max-width: 610px;
    height: 832px;
  }
  @include max(lg) {
    max-width: 423px;
    height: 638px;
  }
  @include max(md) {
    top: 0;
    max-width: 325px;
    height: 531px;
  }
  @include max(sm) {
    display: none;
  }

  img {
    object-fit: cover;
    //width: inherit;
    z-index: 1;
    position: relative;
    width: 100%;
  }
  .line-simple {
    width: 400px;
    left: unset;
    right: -146px;
    top: 140px;

    @include max(lg) {
      width: 300px;
      right: -150px;
      top: 87px;
    }
  }
  &.inverse {
    order: 1;

    .line-simple {
      width: 400px;
      top: unset;
      bottom: 95px;
      left: -270px;

      @include max(lg) {
        width: 250px;
        bottom: 83px;
        left: -151px;
      }
    }

    @include max(md) {
      display: none;
    }
  }
}
.benefits_wrapper {
  width: 560px;
  margin: 0 auto;
  @include max(lg) {
    width: 446px;
  }
  @include max(md) {
    width: 326px;
    margin-top: 0;
  }
  @include max(sm) {
    width: 100%;
    padding: 0 16px;
    margin: 0;
  }

  &.indent {
    //padding-left: 125px;
    //padding-right: 140px;

    @include max(lg) {
      width: 100%;
      max-width: 368px;
    }
    @include max(md) {
      margin: 0 auto 0 48px;
      padding: 0 18px;
      width: 428px;
      .images_block {
        display: none;
      }
      .gold_button {
        display: none;
      }
    }
    @include max(sm) {
      margin: 0;
      width: 100%;
      max-width: none;
      .images_block {
        display: flex;
      }
      .gold_button {
        display: block;
      }
      padding: 0 18px;
    }
  }
  .little_title {
    margin-bottom: 25px;
    @include max(lg) {
      margin-bottom: 7px;
    }
    @include max(md) {
      margin-bottom: 13px;
    }
    @include max(sm) {
      margin-bottom: 10px;
    }
  }
  h3 {
    &.indent-title {
      margin-bottom: 114px;

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
  }
}
.description_text {
  margin-top: 50px;
  margin-bottom: 67px;
  width: 100%;
  @include max(lg) {
    margin: 40px 0 59px;
  }
  @include max(md) {
    margin: 33px 0 51px 0;
  }
  @include max(700) {
    max-width: 300px;
  }
  @include max(sm) {
    max-width: 100%;
    margin: 20px 0 40px 0;
  }
}
.images_block {
  margin-bottom: 80px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 55px;
  grid-row-gap: 60px;
  @include max(lg) {
    grid-column-gap: 35px;
    grid-row-gap: 40px;
    margin-bottom: 64px;
  }
  @include max(md) {
    grid-column-gap: unset;
    grid-row-gap: unset;
    display: flex;
    flex-direction: column;
    margin-bottom: 52px;
  }
  @include max(sm) {
    margin-bottom: 44px;
  }
}
.benefit {
  display: flex;
  align-items: center;

  &:last-child {
    margin-bottom: 0px;
  }

  @include max(md) {
    margin-bottom: 27px;
  }
  @include max(sm) {
    margin-bottom: 30px;
  }
  &:nth-child(1) {
    @include min(md) {
      div {
        width: 100%;
        max-width: 196px;
      }
    }
  }

  div {
    display: inline-table;
    opacity: 0.5;
  }
  img {
    margin-right: 20px;
    @include max(lg) {
      width: 28px;
      height: 28px;
      margin-right: 17px;
      object-fit: contain;
    }
    @include max(md) {
      margin-right: 12px;
    }
  }
}
</style>
