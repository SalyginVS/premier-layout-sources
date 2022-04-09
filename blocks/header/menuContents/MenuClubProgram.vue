<template>
  <div id="menu-club-program">
    <div
      class="menu-club-program__info"
      :class="{ 'big-right-block': bigRightBlock }"
    >
      <h5 v-html="data.title"></h5>
      <p class="p1 description">
        {{ data.description }}
      </p>
      <SlashButton :text="data.button" />
    </div>
    <div class="menu-club-program__points">
      <p
        class="p1 point"
        v-for="(option, index) in data.pointsList"
        :key="index"
      >
        <img src="~/static/icons/check.svg" alt="icon" />
        {{ option }}
      </p>
    </div>
  </div>
</template>

<script>
import SlashButton from "~/components/SlashButton";

export default {
  name: "MenuClubProgram",
  components: {
    SlashButton,
  },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    bigRightBlock: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";
#menu-club-program {
  width: 100%;
  height: 100%;
  padding: 56px 89px 56px 89px;
  display: flex;

  @include max(lg) {
    padding: 97px 100px 110px 99px;
  }

  @include max(md) {
    padding: 32px 39px 237px;
    flex-direction: column;
  }

  .menu-club-program__info {
    height: fit-content;
    width: 50%;
    padding-right: 107px;
    padding-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-right: 1px solid rgba(#101010, 0.05);

    @include max(lg) {
      padding-right: 40px;
    }

    @include max(md) {
      padding-right: 18px;
      padding-bottom: 55px;

      width: 100%;
      border-right: 0px;
      border-bottom: 1px solid rgba(#101010, 0.05);
    }

    &.big-right-block {
      padding-right: 84px;

      @include max(lg) {
        padding-right: 40px;
      }

      @include max(md) {
        padding-right: 18px;
        padding-bottom: 55px;

        width: 100%;
        border-right: 0px;
        border-bottom: 1px solid rgba(#101010, 0.05);
      }
    }
    h5 {
      margin-bottom: 24px;
      line-height: 110%;

      @include max(lg) {
        margin-bottom: 16px;
      }
      @include max(md) {
        width: 307px;
      }
    }
    .description {
      max-width: 345px;
      margin-bottom: 67px;

      @include max(lg) {
        margin-bottom: 48px;
      }
      @include max(md) {
        max-width: 411px;
        margin-bottom: 40px;
      }
    }
  }
  .menu-club-program__points {
    height: fit-content;
    width: 50%;
    padding-left: 84px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @include max(lg) {
      padding-left: 23px;
    }
    @include max(md) {
      width: 90%;
      padding-top: 48px;
      padding-left: 0px;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .point {
      max-width: 229px;
      display: flex;
      align-items: flex-start;

      @include max(md) {
        max-width: 46%;
        width: 100%;
      }

      &:not(:last-child) {
        margin-bottom: 23px;

        @include max(lg) {
          margin-bottom: 16px;
        }
        @include max(md) {
          margin-bottom: 24px;
        }
      }
      img {
        margin-right: 14px;
        position: relative;
        top: 6px;
      }
    }
  }
}
</style>
