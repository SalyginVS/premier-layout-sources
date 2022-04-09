<template>
<div>
  <!-- <div class="runing_line_container" ref="runing_line_container">
    <div class="runing_line_wrapper">
      <div class="another_one_wrapper">
        <h3
          class="js_runned_el"
          v-for="(el, index) in runing_elements"
          :key="el.id"
          :data-id="index"
          ref="js_runned_el"
        >
          <span
            >{{ el.text }}
            <img src="~/static/images/slash_dark.svg" />
          </span>
        </h3>
      </div>
    </div>
    <div class="positions-images" ref="positionsImages">
      <img
        class="hover_images"
        v-for="img in runing_elements[hovered_index].hover_images"
        :src="img"
        :key="img"
        alt
      />
    </div>
  </div> -->
  </div>
</template>

<script>
// export default {
//   name: "RunningLine",
//   props: {
//     runing_elements: {
//       type: Array,
//       default: () => []
//     }
//   },
//   data: () => ({
//     hovered_index: 0,
//     runLine: null,
//     stop_animation: false,
//     positionClass: null,
//     intervalId: null
//   }),
//   methods: {
//     showImages(e) {
//       let { positionsImages } = this.$refs;
//       this.hovered_index = e.target.parentNode.dataset.id;
//       let hover_images = document.querySelectorAll(
//         ".runing_line_container .hover_images"
//       );
//       let hover_textes = document.querySelectorAll(".runing_line_container h3");
//       this.positionClass = `position-${Math.floor(Math.random() * 3) + 1}`;

//       positionsImages.classList.add(this.positionClass);

//       for (let el of hover_images) {
//         el.style.opacity = 0.1;
//       }

//       for (let el of hover_textes) {
//         el.style.opacity = 0.3;
//       }

//       e.target.parentNode.style.opacity = 1;
//       this.stop_animation = true;
//     },
//     showImagesOnTime() {
//       let { positionsImages } = this.$refs;
//       if (!positionsImages.classList) {
//         return;
//       }
//       this.positionClass = `position-${Math.floor(Math.random() * 3) + 1}`;
//       positionsImages.style.opacity = "0";
//       setTimeout(() => {
//         [...positionsImages.classList]
//           .filter(c => c.startsWith("position-"))
//           .forEach(c => positionsImages.classList.remove(c));

//         positionsImages.classList.add(this.positionClass);
//         positionsImages.style.opacity = "1";
//       }, 500);
//     },
//     hideImages() {
//       const positionClass = this.positionClass;
//       let { positionsImages } = this.$refs;
//       let hover_images = document.querySelectorAll(
//         ".runing_line_container .hover_images"
//       );
//       let hover_textes = document.querySelectorAll(".runing_line_container h3");

//       for (let el of hover_images) {
//         el.style.opacity = 0;
//       }
//       for (let el of hover_textes) {
//         el.style.opacity = 1;
//       }

//       this.stop_animation = false;
//       requestAnimationFrame(this.runLine);

//       setTimeout(() => {
//         positionsImages.classList.remove(positionClass);
//       }, 310);
//     },
//     runingAnimation(el, reverse = -1) {
//       let runing_element = el.querySelector(
//         ".another_one_wrapper .js_runned_el"
//       );
//       let all_runing_elements = el.querySelectorAll(
//         ".another_one_wrapper .js_runned_el"
//       );
//       let partners = el.querySelector(".another_one_wrapper");
//       let runing_line_width = partners.offsetWidth;
//       let koef = Math.ceil(el.offsetWidth / partners.offsetWidth);
//       console.log(all_runing_elements);
//       console.log(partners);
//       console.log(runing_element);
//       console.log(el);
//       for (let i = 0; i < koef + 1; i++) {
//         for (const el of all_runing_elements) {
//           partners.appendChild(el.cloneNode(true));
//         }
//       }
//       let translating = 0;

//       this.runLine = () => {
//         translating += 1 * reverse;

//         if (Math.abs(translating) >= runing_line_width) {
//           translating = 0;
//         }
//         if (reverse === 1) {
//           partners.style.transform = `translateX(${translating -
//             runing_element.offsetWidth * koef * all_runing_elements.length}px)`;
//         } else {
//           partners.style.transform = `translateX(${translating}px)`;
//         }
//         if (this.stop_animation) {
//           cancelAnimationFrame(this.runLine);
//           return;
//         }
//         requestAnimationFrame(this.runLine);
//       };
//       requestAnimationFrame(this.runLine);
//     }
//   },
//   mounted() {
//     let { runing_line_container } = this.$refs;
//     this.runingAnimation(runing_line_container);

//     let js_runned_el = document.querySelectorAll(".js_runned_el span");

//     if (window.innerWidth > 1200) {
//       for (let el of js_runned_el) {
//         el.addEventListener("mouseenter", this.showImages);
//         el.addEventListener("mouseleave", this.hideImages);
//       }
//     } else {
//       this.intervalId = setInterval(() => {
//         this.showImagesOnTime();
//         // this.hideImages();
//       }, 4000);
//     }

//     let running_span = document.querySelectorAll(".js_runned_el");
//     for (let el of running_span) {
//       el.setAttribute(
//         "style",
//         `display: inline-block;
//         color: black;
//         background: url(${this.runing_elements[el.dataset.id].main_image});
//         background-clip: text;
//         -webkit-background-clip: text;
//         -webkit-text-fill-color: transparent;
//         line-height: 120%;
//         transition: opacity 0.5s ease;
//       `
//       );
//     }
//   },
//   destroyed() {
//     if (this.intervalId) {
//       clearInterval(this.intervalId);
//     }
//   }
// };
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.runing_line_container {
  padding: 100px 0;
  position: relative;
  overflow: hidden;
  @include max(lg) {
    padding: 0;
  }
}
.runing_line_wrapper {
  position: relative;
  z-index: 10;
  padding-left: 0;
  padding-right: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 197px 0;
  @include max(lg) {
    padding: 264px 0;
  }
  @include max(md) {
    padding: 213px 0;
  }
  @include max(sm) {
    padding: 160px 0;
  }

  h3 {
    white-space: nowrap;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    span {
      display: block;
      cursor: pointer;
    }
    img {
      height: 57px;
      margin: 0 48px -10px 48px;
      @include max(1439) {
        height: 40px;
      }
      @include max(1023) {
        height: 35px;
        margin:0 24px -10px 24px;
      }
      @include max(767){
        margin:0 16px -10px 16px;
      }
    }
  }
}
.another_one_wrapper {
  display: flex;
}

h3 {
  // color: black;
  // background: url("../../static/images/list_bar1.jpg");
  background-clip: text;
  // -webkit-text-fill-color: transparent;
  // line-height: 120%;
  // transition: opacity 0.5s ease;
}
.positions-images {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.5s ease-in-out;
  & img,
  &.position-1 img {
    &:nth-child(1) {
      top: 30%;
      left: 5%;
      @include max(sm) {
        top: 72px;
        left: 0;
      }
    }
    &:nth-child(2) {
      top: 18%;
      left: 27%;
      @include max(sm) {
        top: unset;
        left: unset;
        bottom: 80px;
        right: 100px;
      }
    }
    &:nth-child(3) {
      bottom: 15%;
      right: 29%;
      @include max(sm) {
        bottom: unset;
        left: unset;
        top: 72px;
        right: 0;
      }
    }
    &:nth-child(4) {
      top: 15%;
      right: 5%;
    }
  }
  &.position-2 img {
    &:nth-child(1) {
      top: 33%;
      left: unset;
      right: 29%;
      @include max(sm) {
        top: unset;
        left: unset;
        bottom: 70px;
        right: 100px;
      }
    }
    &:nth-child(2) {
      top: unset;
      bottom: 11%;
      left: 31%;
      @include max(sm) {
        bottom: unset;
        left: unset;
        top: 72px;
        right: 0;
      }
      @include max(375) {
        top: 50px;
      }
    }
    &:nth-child(3) {
      bottom: unset;
      top: 15%;
      left: 5%;
      right: unset;
      @include max(sm) {
        top: 72px;
        left: 0;
      }
    }
    &:nth-child(4) {
      top: unset;
      bottom: 15%;
      right: 5%;
    }
  }
  &.position-3 img {
    &:nth-child(1) {
      top: unset;
      bottom: 7%;
      left: 46%;
      right: unset;
      @include max(sm) {
        bottom: unset;
        left: unset;
        top: 100px;
        left: 20px;
      }
    }
    &:nth-child(2) {
      top: unset;
      bottom: 23%;
      left: 6%;
      @include max(sm) {
        top: unset;
        left: unset;
        bottom: 40px;
        right: 150px;
      }
    }
    &:nth-child(3) {
      bottom: unset;
      top: 7%;
      right: 6%;
      left: unset;
      @include max(sm) {
        bottom: unset;
        left: unset;
        top: 100px;
        right: 0;
      }
    }
    &:nth-child(4) {
      top: 7%;
      left: 19%;
      right: unset;
    }
  }
  .hover_images {
    position: absolute;
    opacity: 0;
    // transition: all 0.3s ease;
    max-width: 20vw;
    max-height: 50vh;
    object-fit: cover;
    filter: gray; /* IE6-9 */
    -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
    filter: grayscale(1);

    @include max(lg) {
      opacity: 0.1;
    }
    @include max(sm) {
      max-width: unset;
      max-height: unset;
    }

    &:nth-child(1) {
      width: 209px;
      height: 249px;
      @include max(lg) {
        width: 170px;
        height: 204px;
      }
      @include max(md) {
        width: 126px;
        height: 150px;
      }
      @include max(sm) {
        width: 93px;
        height: 120px;
      }
    }
    &:nth-child(2) {
      width: 146px;
      height: 164px;
      @include max(lg) {
        width: 262px;
        height: 166px;
      }
      @include max(md) {
        width: 193px;
        height: 122px;
      }
      @include max(sm) {
        width: 142px;
        height: 90px;
      }
    }
    &:nth-child(3) {
      width: 377px;
      height: 239px;
      @include max(lg) {
        width: 100px;
        height: 114px;
      }
      @include max(md) {
        width: 75px;
        height: 84px;
      }
      @include max(sm) {
        width: 55px;
        height: 62px;
      }
    }
    &:nth-child(4) {
      width: 247px;
      height: 294px;
      @include max(lg) {
        width: 145px;
        height: 173px;
      }
      @include max(md) {
        width: 107px;
        height: 127px;
      }
      @include max(sm) {
        width: 93px;
        height: 120px;
        display: none;
      }
    }
  }
}
</style>
