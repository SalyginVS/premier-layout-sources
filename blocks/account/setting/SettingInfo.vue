<template>
  <div class="setting-info" :class="{ open: openedTab }">
    <div class="tab-header" @click="openTab">
      <h6 class="font-cormorant">{{ data.title }}</h6>
      <img class="tab-button" src="~/static/icons/tab-button.svg" alt />
    </div>
    <div v-if="openedTab && breakpoints>768" class="tab-content">
      <slot />
    </div>
    <div v-else-if="breakpoints<=768" class="tab-content">
      <slot />
    </div>
  </div>
</template>

<script>
import { globalMixin } from "~/plugins/mixins";
export default {
  name: "SettingInfo",
  mixins: [globalMixin],
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      openedTab: false
    };
  },
  methods: {
    openTab(e) {
      if (this.breakpoints <= 768) {
        e.preventDefault();
        return;
      }
      this.openedTab = !this.openedTab;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";
.setting-info {
  width: 100%;
  display: flex;
  flex-direction: column;

  .tab-header {
    width: 100%;
    padding: 32px 40px 33px 40px;
    background-color: #f0f0f0;
    position: relative;
    cursor: pointer;
    @include max(767) {
      padding: 24px 18px;
    }
    .tab-button {
      position: absolute;
      right: 40px;
      top: 50%;
      transform: translateY(-50%) rotate(180deg);
      width: 38px;
      height: 38px;
      transition: transform 0.3s ease-in-out;
      cursor: pointer;
      @include max(767) {
        display: none;
      }
    }
  }
  &.open {
    .tab-header {
      .tab-button {
        transform: translateY(-50%) rotate(0deg);
      }
    }
  }
}
</style>
