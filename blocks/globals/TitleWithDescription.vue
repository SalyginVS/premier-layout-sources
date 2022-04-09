<template>
  <div
    class="main-wrapper"
    id="title_with_description"
    :class="{
      isCityPage: isCityPage,
      isVideoMobileApp: isVideoMobileApp,
      suppliers_page: isSuppliersPage
    }"
  >
    <div class="description_left">
      <p class="little_title" v-if="data.little_title">
        {{ data.little_title }}
      </p>

      <h3 v-if="htmlTitle" v-html="data.title_black">
        <!-- <span class="gold_text">{{data.title_gold}}</span> <br>
        {{data.title_black}} -->
      </h3>

      <h3 v-else>
        <span class="gold_text italic">{{ data.title_gold }}</span> <br />
        {{ data.title_black }}
      </h3>
    </div>
    <div class="description_right">
      <p class="description_text p1">
        {{ data.text_description }}
      </p>

      <SlashButton v-if="data.buttonText" :text="data.buttonText" />
      <SelectBlock
        v-if="!isCityPage && showSelect"
        :options="optionsRooms"
        :defaultValue="optionsRooms[0].value"
      />
    </div>
  </div>
</template>

<script>
import SlashButton from "~/components/SlashButton";

export default {
  name: "TitleWithDescription",
  components: {
    SlashButton
  },
  props: {
    isSuppliersPage: {
      type: Boolean,
      default: false
    },
    isVideoMobileApp: {
      type: Boolean,
      default: false
    },
    isCityPage: {
      type: Boolean,
      deafut: false
    },
    showSelect: {
      type: Boolean,
      default: true
    },
    data: {
      type: Object,
      default: () => ({})
    },
    htmlTitle: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    optionsRooms: [
      {
        title: "Все комнаты",
        value: "Все комнаты"
      },
      {
        title: "стандартные категории",
        value: "стандартные категории"
      },
      {
        title: "тематические люксы",
        value: "тематические люксы"
      },
      {
        title: "персональные апартаменты",
        value: "персональные апартаменты"
      },
      {
        title: "исполнительный этаж",
        value: "исполнительный этаж"
      }
    ]
  })
};
</script>

<style lang="scss">
@import "../../assets/scss/utils.scss";

#title_with_description {
  .select-wrapper {
    width: fit-content;
    margin-top: 52px;
    display: none;
    @include max(lg) {
      display: flex;
    }
    @include max(md) {
      margin-top: 44px;
    }
    @include max(sm) {
      margin-top: 36px;
    }
    .selected-block {
      border-bottom: 0;
      .p1 {
        width: auto;
        font-family: AvenirNextCyrMedium;
        font-style: normal;
        font-weight: 500;
        font-size: 9px;
        letter-spacing: 0.24em;
        text-transform: uppercase;
      }
      .arrow {
        right: -16px;
        top: 14px;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

#title_with_description {
  display: flex;
  justify-content: space-between;
  padding-right: 173px;
  padding-left: 158px;
  // margin-top: 94px;
  @include min(1600) {
    padding: 0;
  }
  @include max(lg) {
    padding: 0 134px;
  }
  @include max(md) {
    padding: 0 48px;
  }
  @include max(sm) {
    flex-direction: column;
    padding: 0 18px;
  }
  .description_right {
    .selected-option {
      display: none;

      @include min(lg){
        margin-top: 66px;
        display: flex;
      }
    }
  }
}
.little_title {
  margin-bottom: 23px;
  @include max(lg) {
    margin-bottom: 17px;
  }
  @include max(md) {
    margin-bottom: 13px;
  }
  @include max(sm) {
    margin-bottom: 10px;
  }
}
.description_text {
  width: 430px;
  margin-top: 150px;
  @include max(lg) {
    width: 289px;
    margin-top: 70px;
  }
  @include max(md) {
    width: 326px;
    margin-top: 63px;
  }
  @include max(sm) {
    width: 100%;
    margin-top: 20px;
  }
}
/**city page && videoMibileApp && suppliers page */
.main-wrapper {
  &.isCityPage {
    .description_right {
      @include max(375) {
        display: none;
      }
    }
  }
  &.isVideoMobileApp {
    @include max(630) {
      .little_title {
        display: none;
      }
    }
  }
}
#title_with_description {
  &.suppliers_page {
    @include min(1441) {
      padding-right: 173px;
      padding-left: 158px;
    }
  }
}

.gold_text.italic {
  letter-spacing: 1.3px;
}
/**city page && videoMibileApp && suppliers page */
</style>
