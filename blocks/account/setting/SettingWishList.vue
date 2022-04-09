<template>
  <div class="setting-wish-list">
    <div class="info">
      <p class="p2_light description">{{ data.description }}</p>
      <div class="list">
        <div
          class="options"
          v-for="(optionRows, index) in splitArray(data.options)"
          :key="index"
        >
          <Checkbox
            v-for="(option, index) in optionRows"
            :key="index"
            :data="option"
            :special="['specialStyle']"
          />
        </div>
      </div>
    </div>
    <div class="save-change">
      <Button :text="'зберегти зміни'" />
    </div>
  </div>
</template>

<script>
import Button from "~/components/Button";
import { globalMixin } from "~/plugins/mixins";
export default {
  name: "SettingWishList",
  mixins: [globalMixin],
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    Button
  },
  methods: {
    splitArray(options) {
      let rowsInCol = 5;
      if (this.breakpoints <= 1024 && this.breakpoints > 768) {
        rowsInCol = 8;
      } else if (this.breakpoints <= 768) {
        rowsInCol = options.length;
      }
      const parts = Math.ceil(options.length / rowsInCol);
      const result = [];
      for (let i = 1; i <= parts; i++) {
        result.push(options.slice((i - 1) * rowsInCol, i * rowsInCol));
      }
      return result;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";
/deep/.specialStyle{
  color: #000000;
}
.setting-wish-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(#f0f0f0, 0.5);
  .info {
    padding: 31px 40px 56px 40px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    border-bottom: 1px solid rgba(#000000, 0.05);
    @include max(1023) {
      padding: 32px 40px;
    }
    @include max(767) {
      padding: 32px 18px;
    }
    .description {
      width: 55%;
      max-width: 480px;
      margin-bottom: 42px;
      @include max(1439) {
        width: 69%;
      }
      @include max(1023) {
        width: 82%;
      }
      @include max(767) {
        width: 100%;
      }
    }
    .list {
      width: 100%;
      display: flex;
      align-items: flex-start;
      .options {
        max-width: 200px;
        &:not(:last-child) {
          margin-right: 72px;
        }
        .checkbox-container {
          &:not(:last-child) {
            margin-bottom: 24px;
            @include max(767) {
              margin-bottom: 10px;
            }
          }
          .p2_light {
            font-family: AvenirNextCyrLight;
            font-weight: 300;
            font-size: 14px;
            line-height: 196%;
            letter-spacing: 0.04em;
          }
        }
      }
    }
  }
  .save-change {
    padding: 40px 0 40px 40px;
    display: flex;
    align-items: flex-start;
    @include max(1439) {
      padding: 32px 0 32px 40px;
    }
    @include max(767) {
      padding: 24px 18px;
    }
    .simple-button {
      min-width: 243px;
      @include max(767) {
        min-width: 301px;
      }
    }
  }
}
</style>
