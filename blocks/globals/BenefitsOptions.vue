<template>
  <div id="benefitsOptions">
    <div class="images_block">
      <div class="options" v-for="option in benefitsOptions" :key="option.id">
        <img :src="option.img" alt />
        <p class="a1">{{option.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BenefitsOptions",

  data: () => ({
    benefitsOptions: [
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

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
#benefitsOptions {
  display: flex; 
  align-items: center;
  margin-top: 67px;
}

.images_block {
  display: grid;
  grid-row-gap: 53px;
  grid-template-columns: 1.05fr 1fr;
}
.options {
  display: flex;
  align-items: center;
  p {
    opacity: 0.5;
  }
  img {
    margin-right: 20px;
  }
}

.benefit:nth-of-type(2n) {
  padding-left: 51px;
}
.gold_text {
  margin-bottom: -10px;
}
</style>