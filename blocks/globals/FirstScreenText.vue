<template>
  <div
    id="first_screen_text"
    :class="{
      managment_and_franchising_page: isManagmentAndFranchisingPage,
    }"
  >
    <h1 v-html="title"></h1>
    <SearchBlock v-if="homePage"  @mouseFocus="mouseFocus" />
    <FiltersPopUp :visible="popUpVis" :header="header" :data="filtersArray" @popUpClose="popUpClose" />
    <p class="p1 first_screen_decription">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "FirstScreenText",
  props: {
    title: {
      type: String,
      required: true,
    },
    header: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      required: true,
    },
    filtersArray: {
      type: Array,
      default: () => [],
    },
    isManagmentAndFranchisingPage: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    homePage: true,
    popUpVis: false,
  }),
  methods:{

    popUpClose(data){
      this.popUpVis = data.popUpvisible
    },

    mouseFocus(){
      this.popUpVis = true
    }

  },
  mounted() {
    this.$route.path == "/" ? (this.homePage = true) : (this.homePage = false);
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

#first_screen_text {
  padding-right: 400px;
  @include max(lg) {
    padding-right: 178px;
  }
  @include max(md) {
    padding-right: 69px;
  }
  @include max(750) {
    padding-right: 30px;
  }
  @include max(sm) {
    padding: 0 41px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  #search-block {
    display: none;
    @include max(sm) {
      display: block;
      width: calc(100% + 56px);
      margin-left: -28px;
      margin-bottom: 32px;
    }
  }
  h1 {
    @include mb-48;
    text-align: right;
    @include max(lg) {
      padding-right: 82px;
    }
    @include max(750) {
      padding-right: 30px;
    }
    @include max(sm) {
      padding-right: 0px;
      text-align: center;
    }
  }
  p {
    margin-left: 840px;
    // margin-left: auto;
    margin-right: -170px;

    @include max(lg) {
      margin-left: auto;
      margin-right: 0;
    }
    @include max(sm) {
      margin: 0;
    }
  }
  .first_screen_decription {
    width: 380px;
    @include max(lg) {
      width: 300px;
    }
    @include max(md) {
      width: 275px;
    }
    @include max(sm) {
      width: 100%;
    }
  }
}

h1,
p {
  color: #ffffff;
}
/*is_managment_and_franchising_page */
#first_screen_text {
  position: relative;
  &.managment_and_franchising_page {
    display: flex;
    flex-flow: column;
    @include max(767) {
      justify-content: center;
      max-width: 375px;
      padding: 0 18px;
    }
    h1 {
      text-align: center;
      @media (min-width: 1440px) {
        padding-right: 134px;
      }
      @include max(767) {
        font-size: 40px;
        text-align: left;
      }
    }
    .first_screen_decription {
      @media (min-width: 1440px) {
        position: absolute;
        top: 250px;
        right: 228px;
        margin-left: unset;
      }
      margin-left: 58vw;

      margin-right: unset;
      // @include min(1920) {
      //   margin-left: 49vw;
      // }
      @include max(767) {
        text-align: left;
        margin: 0 auto;
        max-width: 339px;
      }
    }
  }
}

/*is_managment_and_franchising_page */
</style>
