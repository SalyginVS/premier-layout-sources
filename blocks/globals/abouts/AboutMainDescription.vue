<template>
  <div class="about-nain-description">
    <p class="p1 text_description">
      <span v-html="textStripped"></span>
      <span v-if="showMoreButton" class="details" @click="showDescription">{{
        maxLength!==0?showMore?"Сховати" : "Детальніше":""
      }}</span>
    </p>
  </div>
</template>

<script>

export default {
  name: "AboutMainDescription",
  props: {
    text: {
      type: String,
      default: ""
    },
    maxLength: {
      type: Number,
      default: Number.MAX_SAFE_INTEGER
    },
    isFitnesAndSpa: {
      type: Boolean,
      default: false
    },
    breakpoint: {
      type : Number,
      default : 768
    }
  },
  data() {
    return {
      showMoreButton: false,
      showMore: false,
      textMainDesciption: ""
    };
  },

  methods: {
    sliceText(text) {
      let textArr = text.split(" ");
      if(this.maxLength===0){
        return text;
      }
      if (!this.isFitnesAndSpa) {
        return textArr.slice(0, this.maxLength).join(" ") + "...";
      } else {
        return textArr.slice(0, this.maxLength).join(" ");
      }
    },

    handleResize() {
      let breakpoint = this.breakpoint;

      this.showMoreButton = process.client && window.innerWidth <= breakpoint;
    },

    showDescription() {
      this.showMore = !this.showMore;
    }
  },

  computed: {
    textStripped() {
      return this.showMoreButton && !this.showMore
        ? this.sliceText(this.text)
        : this.text;
    }
  },

  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },

  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";

.about-nain-description {
  // width: 100%;
  .details {
    cursor: pointer;
    margin-left: 6px;
    font-weight: 600;
    display: inline-block;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: 2px;
      width: 100%;
      height: 1px;
      background: black;
      display: block;
    }
  }
}
</style>
