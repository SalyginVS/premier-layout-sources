<template>
  <div id="fitnes-about" class="main-wrapper">
    <div class="left_image_wrapper">
      <div class="foreground_gradient"></div>
      <img :src="image" alt />
      <div v-if="line" class="line-simple"></div>
    </div>
    <div class="descripton_wrapper">
      <h4 v-html="description.title"></h4>

      <div class="second_description_wrapper">
        <p class="long_description p1">{{ description.description }}</p>
        <ContactsBlock />
      </div>
    </div>
  </div>
</template>

<script>
import ContactsBlock from "~/blocks/globals/ContactsBlock";

export default {
  name: "FitnesAbout",
  props: {
    image: {
      type: String,
      default: "",
    },
    description: {
      type: Object,
      default: () => ({}),
    },
    line: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ContactsBlock,
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
#fitnes-about {
  @include mt-140;
  display: flex;
  width: 100%;
  @include max(1439) {
    margin-top: 120px;
  }
  @include max(1023) {
    margin-top: 114px;
  }
  @include max(767) {
    flex-direction: column;
    margin-top: 80px;
  }
}

.left_image_wrapper {
  @include mt-184;
  position: relative;
  @include max(1439) {
    height: 638px;
    margin-top: 136px;
  }
  @include max(1023) {
    margin-top: 144px;
    height: 530px;
  }
  @include max(767) {
    width: calc(100% - 18px);
    margin-top: 0;
    margin-bottom: 32px;
  }
  .line-simple {
    background: rgba(0, 0, 0, 0.3);
    width: 400px;
    position: absolute;
    z-index: 0;
    top: unset;
    left: unset;
    bottom: 90px;
    right: -165px;

    @include max (lg){
      display: none;
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: relative;
    z-index: 2;
    @include max(767) {
      object-fit: contain;
    }
    @include max(425) {
      object-fit: cover;
    }
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
  @include max(767) {
    padding: 0 18px;
  }
}

h4 {
  position: relative;
  width: 688px;
  margin-left: -88px;
  @include max(1439) {
    width: 100%;
    max-width: 542px;
    margin-left: -80px;
  }
  @include max(1023) {
    max-width: 423px;
    margin-left: -44px;
  }
  @include max(767) {
    max-width: unset;
    margin-left: 0;
  }
}

.second_description_wrapper {
  padding-left: 146px;
  @include max(lg) {
    padding-left: 60px;
  }
  @include max(md) {
    padding-left: 40px;
  }
  @include max(sm) {
    padding-left: 0;
  }
}

.long_description {
  width: 420px;
  @include mt-80;
  @include ml-40;
  padding-left: 0;
  // @include max(lg) {
  //   width: 100%;
  //   max-width: 368px;
  //   margin-top: 60px;
  //   margin-left: 40px;
  // }
  // @include max(md) {
  //   max-width: 326px;
  //   margin-top: 33px;
  //   margin-left: 30px;
  // }
  
  @include max(1439) {
    margin-top: 48px;
    max-width: 367px;
  }
  @include max(1023) {
    margin-top: 40px;
    max-width: 325px;
  }
  @include max(767) {
    max-width: 100%;
    margin-top: 24px;
    margin-left: 0;
  }
}
.contact_block {
  @include max(lg) {
    margin-top: 56px;
  }
  @include max(1024) {
    margin-top: 40px;
  }
  @include max(md) {
    margin-top: 48px;
  }
  @include max(768) {
    margin-top: 32px;
  }
}
</style>
