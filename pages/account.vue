<template>
  <div id="account" :class="{ profile_page: isProfilePage }">
    <HeaderBlock :header_ligh_style="true" />
    <div class="top_distance"></div>
    <div class="account-wrapper">
      <SideMenu :sideMenuTitle="sideMenuTitle" />
      <div class="main-content">
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";

export default {
  components: {
    HeaderBlock
  },

  methods: {},
  data: () => ({
    sideMenuTitle: "",
    isProfilePage: false
  }),
  mounted() {
    this.changeSideMenuTitle(this.$router);
    this.checkProfilePage(this.$router);
  },
  updated() {
    this.changeSideMenuTitle(this.$router);
    this.checkProfilePage(this.$router);
  },
  methods: {
    changeSideMenuTitle(params) {
      let {
        history: {
          current: { name }
        }
      } = params;
      if (name === "account-profile_corporate_club") {
        this.sideMenuTitle = "Premier Corporate Club";
      } else {
        this.sideMenuTitle = "Premier Club";
      }
    },
    checkProfilePage(params) {
      console.log("change");
      let {
        history: {
          current: { name }
        }
      } = params;
      if (
        name === "account-profile_corporate_club" ||
        name === "account-profile"
      ) {
        this.isProfilePage = true;
      } else {
        this.isProfilePage = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";
#account {
  .top_distance {
    display: none;
  }
  .account-wrapper {
    width: 100%;
    display: flex;
    align-items: flex-start;
    position: relative;
    padding-top: 87px;
    
    @include max(1023) {
      flex-flow: row wrap;
      padding-top:83px;
    }
    @include max(650){
      padding-top:66px;
    }
    .side-menu {
      @include min(1024) {
        position: sticky;
        top: 6px;
      }
    }
    .main-content {
      display: flex;
      flex-direction: column;
      width: calc(100% - 320px);
      margin-top: 54px;
      padding-right: 84px;
      @include max(1439) {
        padding-right: 62px;
        margin-top: 40px;
        width: calc(100% - 256px);
      }
      @include max(1023) {
        width: 100vw;
        padding: unset;
      }
      @include max(767) {
        margin-top: 32px;
      }
    }
  }
  &.profile_page {
    .main-content {
      margin-top: 91px;
      @include max(1439){
        margin-top:72px;
      }
      @include max(1023){
        margin-top:37px;
      }
    }
  }
}
</style>
