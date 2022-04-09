<template>
  <div class="guest_tabs_block">
    <div class="main-tab" @click="OpenTabs" :class="{ open: openedTabs }">
      <h5>Додаткові послуги</h5>
      <img
        v-if="!choseTabs"
        class="tab-button"
        src="~/static/icons/tab-button.svg"
        alt
      />
    </div>

    <div v-if="!choseTabs" class="tabs" :class="{ open: openedTabs }">
      <div class="tab" v-for="item in tabsInfo" :key="item.id">
        <p class="a2" @click="OpenTabOption(item.id)">{{ item.title }}</p>

        <div v-if="isTabSelected(item.id)" class="tab-options">
          <div class="option-checkbox" v-if="item.type === 'checkboxChoice'">
            <Checkbox
              v-for="option in item.options"
              :key="option.index"
              :data="option"
            />
          </div>
          <template v-if="item.type === 'blocksChoice'">
            <div class="option-blocks active">
              <div
                class="block-choice a2"
                :class="{ open: isOptionSelected(option) }"
                v-for="option in item.options"
                :key="option.id"
                @click="chooseOption(option)"
              >
                {{ option.title }}
              </div>
            </div>
            <template v-for="option in optionsSelected">
              <div
                class="selected-option"
                v-if="option.option"
                :key="option.id"
              >
                <p class="a2">{{ option.title }}</p>
                <div class="option" v-if="option.type === 'radio'">
                  <RadioButton
                    :addStyle="true"
                    v-for="item in option.option"
                    :key="item.index"
                    :data="item"
                  />
                </div>
                <div class="option" v-if="option.type === 'checkbox'">
                  <Checkbox
                    v-for="item in option.option"
                    :key="item.index"
                    :data="item"
                  />
                </div>
              </div>
            </template>
          </template>
        </div>
      </div>
    </div>
    <div v-else class="chose-tabs">
      <div class="tab" v-for="item in tabsInfoChose" :key="item.id">
        <p class="a2 name">
          {{ item.title }}
          <img src="~/static/icons/cross-icon.svg" alt="icon" />
        </p>
        <p class="a2 price">{{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuestTabsBlock",
  props: {
    tabsInfo: {
      type: Array,
    },
    tabsInfoChose: {
      type: Array,
    },
    choseTabs: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      openedTabs: null,
      //openedTabs: true,
      optionsSelected: [],
      optionTabSelected: [],
    };
  },
  methods: {
    OpenTabs() {
      if (!this.choseTabs) {
        this.openedTabs = !this.openedTabs;
      }
    },
    isOptionSelected(option) {
      return this.optionsSelected.find((e) => e.id === option.id);
    },

    chooseOption(option) {
      if (this.isOptionSelected(option)) {
        this.optionsSelected = this.optionsSelected.filter((e) => e !== option);
      } else {
        this.optionsSelected.push(option);
      }
    },

    isTabSelected(id) {
      return this.optionTabSelected.includes(id);
    },
    OpenTabOption(id) {
      if (this.isTabSelected(id)) {
        this.optionTabSelected = this.optionTabSelected.filter((e) => e !== id);
      } else {
        this.optionTabSelected.push(id);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.guest_tabs_block {
  width: 100%;
  margin-top: 24px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  background: rgba(#f0edea, 0.5);

  @include max (lg){
    margin-top: 0;
    margin-bottom: 24px;
  }
  @include max (sm){
    margin-bottom: 18px;
  }
  .main-tab {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    background-color: #f0edea;
    cursor: pointer;


    &.open {
      .tab-button {
        transform: translateY(-50%) rotate(0deg);
      }
    }
    h5 {
      width: 100%;
      padding: 32px 0 29px 40px;
      display: flex;

      @include max(lg) {
        padding: 32px 0px 32px 40px;
      }

      @include max(md) {
        padding: 27px 0px 22px 40px;
      }
      @include max(sm) {
        padding: 24px 0px 25px 18px;
      }
    }
    .tab-button {
      position: absolute;
      right: 40px;
      top: 50%;
      transform: translateY(-50%) rotate(180deg);
      width: 38px;
      height: 38px;
      transition: transform 0.3s ease-in-out;

      @include max(lg) {
        width: 32px;
        height: 32px;
        right: 29px;
      }
      @include max(md) {
        right: 32px;
      }
      @include max(sm) {
        right: 18px;
      }
    }
  }
  .tabs {
    width: 100%;
    padding: 0 32px 42px 32px;
    display: none;
    flex-direction: column;

    @include max(lg) {
      padding: 8px 32px 8px 32px;
    }
    @include max(md) {
      padding: 11px 32px 9px 32px;
    }
    @include max(sm) {
      padding: 8px 10px;
    }

    &.open {
      display: flex;
    }
    .tab {
      position: relative;
      width: 100%;
      padding: 42px 8px 36px 8px;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid rgba(#000000, 0.1);

      &:last-child {
        border: 0px;
      }

      @include max(lg) {
        padding: 32px 8px 32px 8px;
      }

      @include max(md) {
        padding: 25px 8px 24px 8px;
      }

      @include max(sm) {
        padding: 24px 8px 24px 8px;
      }

      .a2 {
        text-transform: uppercase;
        cursor: pointer;
        &::before {
          content: "+";
          font-size: 14px;
          display: inline-block;
          position: absolute;
          right: 20px;
          top: 44px;
          cursor: pointer;

          @include max(lg) {
            top: 32px;
          }
          @include max(md) {
            top: 24px;
          }
        }
      }
      .tab-options {
        .option-checkbox {
          margin-top: 27px;
          width: 100%;
          .checkbox-container {
            &:not(:last-child) {
              align-items: flex-start;
              padding-bottom: 16px;
              margin-bottom: 16px;
              border-bottom: 1px dashed rgba(#000000, 0.1);
            }
          }
        }
        .option-blocks {
          margin-top: 20px;
          display: flex;
          flex-wrap: wrap;
          &.active {
            padding-bottom: 32px;
            border-bottom: 1px dashed rgba(#000000, 0.1);
            // .block-choice {
            //   background-color: #ffffff;
            // }
          }
          .block-choice {
            display: flex;
            padding: 9px 14px;
            margin: 0 8px 8px 0;
            background-color: rgba(240, 237, 234, 0.3);
            border-radius: 4px;
            border: 1px solid rgba(0, 0, 0, 0.1);
            text-transform: uppercase;
            color: rgba(#000000, 0.6);
            transition: background-color 0.3s ease-in-out;
            &.open {
              background-color: #ffffff;
            }
            &:hover {
              background-color: #ffffff;
            }
          }
        }
        .selected-option {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding-top: 27px;
          &:not(:last-child) {
            padding-bottom: 27px;
            border-bottom: 1px dashed rgba(#000000, 0.1);
          }

          .a2 {
            text-transform: uppercase;
            margin-bottom: 20px;
          }
          .option {
            display: flex;
            align-items: center;
            .checkbox-container,
            .radio-wrapper {
              &:not(:last-child) {
                margin-right: 32px;
              }
            }
          }
        }
      }
    }
  }
  .chose-tabs {
    width: 100%;
    padding: 0 32px 42px 32px;
    display: flex;
    flex-direction: column;

    @include max (lg){
      padding: 8px 32px 8px 32px;
    }
    @include max (sm){
      padding: 0px 10px 1px 10px;
    }
    .tab {
      position: relative;
      width: 100%;
      padding: 42px 8px 36px 8px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgba(#000000, 0.1);

      @include max (lg){
        padding: 34px 8px;
        &:last-child{
          border-bottom: 0px;
        }
      }
      @include max (md){
        padding: 26px 8px;
      }
      @include max (sm){
        padding: 27px 8px;
      }
      .a2 {
        text-transform: uppercase;
        &.name {
          position: relative;
          img {
            position: absolute;
            right: -32px;
            top: 50%;
            transform: translateY(-50%);
            width: 18px;
            height: 18px;
            cursor: pointer;
          }
        }
        &.price {
          text-transform: initial;
          opacity: 0.5;
          letter-spacing: 0.24em;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.guest_tabs_block {
  .selected-option {
    .option {
      .checkbox-container,
      .radio-wrapper {
        .a2,
        .p2_light {
          color: rgba(0, 0, 0, 0.6);
          font-family: AvenirNextCyrLight;
          text-transform: initial;
          font-style: normal;
          font-weight: 300;
          font-size: 12px;
          line-height: 180%;
          letter-spacing: 0.06em;
        }
      }
    }
  }
}
</style>
