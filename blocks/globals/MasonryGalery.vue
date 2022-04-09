<template>
    <no-ssr>
      <div
        v-masonry
        transition-duration="0s"
        item-selector=".item"
        destroy-delay="1000"
        class="masonry-container galery"
      >
        <div
          v-masonry-tile
          class="item"
          v-for="image in images"
          :key="image"
        >
        <img
          class="galery__image"
          :src="image"
          alt
        />
        </div>
        <!-- <img
          v-masonry-tile
          class="item galery__image"
          v-for="image in images"
          :key="image"
          :src="image"
          alt
        /> -->
      </div>
    </no-ssr>
</template>

<script>
import NoSSR from "vue-no-ssr";
export default {
  name: "MasonryGalery",
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  components: {
    "no-ssr": NoSSR
  },
  methods: {
    // setImagesTranlsting() {
    //   let images = document.querySelectorAll(".masonry-container img");
    //   var first_column = !images[0] || images[0].style.left;
    //   var second_column = !images[1] || images[1].style.left;
    //   var third_column = !images[2] || images[2].style.left;
    //   console.log(second_column);
    //   for (const image of images) {
    //     if (image.style.left === second_column) {
    //       image.classList.add("second_column");
    //     } else if (image.style.left === third_column) {
    //       image.classList.add("third_column");
    //     }
    //   }
    // }
  },
  mounted() {
    if (typeof this.$redrawVueMasonry === "function") {
      this.$redrawVueMasonry();
    }
    // setTimeout(() => {
    // this.setImagesTranlsting();
    // }, 1000);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.masonry-container {
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
}
.item {
  width: calc(33.3% - 24px);
  margin-left: 12px;
  margin-right: 12px;

  @include max(md) {
    margin-left: 6px;
    margin-right: 6px;
  }
}


.galery {
  &__image {
    width:100%;
    @include mb-24;
  }
}
// .second_column {
//   transform: translateY(-30px);
// }
// .third_column {
//   transform: translateY(20px);
// }
</style>
