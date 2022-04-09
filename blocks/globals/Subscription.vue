<template>
  <div
    class="subscription"
    :style="{
      backgroundImage: img
    }"
  >
    <div class="description_block main-wrapper">
      <div class="titles">
        <p class="little_title">{{ description.little_title }}</p>
        <template v-if="inverse">
          <h3 class="italic">{{ description.big_title_italic }}</h3>
          <h3>{{ description.big_title_normal }}</h3>
        </template>

        <template v-else>
          <h3>{{ description.big_title_normal }}</h3>
          <h3 class="italic">{{ description.big_title_italic }}</h3>
        </template>
      </div>
      <div class="descriptions">
        <p class="description_text p1">{{ description.description }}</p>
        <SlashButton
          @openModal="openModal"
          mode="light"
          :isLink="!!description.link"
          :link="description.link"
          :text="description.button"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SlashButton from "~/components/SlashButton";

export default {
  name: "Subscription",
  props: {
    description: {
      type: Object,
      default: () => ({})
    },
    inverse: {
      type: Boolean,
      default: false
    }
  },
  components: {
    SlashButton
  },
  data() {
    return {
      breakpoint: 0
    };
  },
  computed: {
    img() {
      if (this.description.img_375 && this.breakpoint <= 425) {
        return `url(${this.description.img_375})`;
      } else {
        return `linear-gradient(0deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)),  url(${this.description.img})`;
      }
    }
  },
  methods: {
    openModal() {
      this.$emit("openModal");
    },
    resizeImg() {
      this.breakpoint = window.innerWidth;
    }
  },
  mounted() {
    this.resizeImg();
    window.addEventListener("resize", this.resizeImg);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeImg);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.subscription {
  padding: 180px 0;
  @include pl-168;
  @include pr-168;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @include max(lg) {
    padding: 130px 134px;
  }
  @include max(md) {
    padding: 136px 48px;
  }
  @include max(sm) {
    padding: 100px 18px;
  }
}
.description_block {
  display: flex;
  justify-content: space-between;
  @include max(690) {
    flex-direction: column;
  }
}
.little_title {
  opacity: 0.5;
}
p,
h3 {
  color: #ffffff;
}

.titles {
  p {
    margin-bottom: 23px;
    @include max(lg) {
      margin-bottom: 16px;
    }
    @include max(md) {
      margin-bottom: 12px;
    }
  }
}

.description_text {
  width: 430px;
  margin-top: 138px;
  margin-bottom: 72px;
  @include max(lg) {
    width: 310px;
    margin-bottom: 40px;
    margin-top: 77px;
  }
  @include max(md) {
    width: 326px;
    margin-bottom: 32px;
    margin-top: 64px;
  }
  @include max(sm) {
    width: 100%;
    margin-bottom: 32px;
    margin-top: 20px;
  }
}
</style>
