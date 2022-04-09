<template>
  <div class="personal-info">
    <div class="info">
      <p class="a1">
        {{ data.name }}
      </p>
      <p class="p2_light">
        {{ data.helper }}
        <a class="email" :href="'mailto:' + data.email">{{ data.email }}</a>
      </p>
      <div class="info-fields">
        <Input
          v-for="option in data.fields"
          :key="option.id"
          :option="option"
          :value="user[option.field]"
          @input="
            $store.commit('user/update', { field: option.field, value: $event })
          "
        />
      </div>
    </div>
    <div class="authorization">
      <p class="a1" v-for="(item, index) in data.authorization" :key="index">
        {{ item }} <span>+</span>
      </p>
    </div>
    <div class="save-change">
      <Button :text="'зберегти зміни'" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Button from "~/components/Button";
export default {
  name: "PersonalInfo",
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    ...mapState(["user"])
  },
  components: {
    Button
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";
.personal-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(#f0f0f0, 0.5);
  .info {
    padding: 42px 40px 56px 40px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgba(#000000, 0.05);
    @include max(1439) {
      padding: 40px;
    }
    @include max(1023) {
      padding: 32px 0 32px 40px;
    }
    @include max(767) {
      padding: 32px 18px;
    }
    .a1 {
      margin-bottom: 13px;
      @include max(767) {
        margin-bottom: 8px;
      }
    }
    .p2_light {
      max-width: 360px;
      // margin-bottom: 40px;
      // @include max(1023){
      //   margin-bottom:32px;
      // }
      .email {
        font-weight: 600;
      }
      @include max(767) {
        max-width: 262px;
        word-break: break-all;
      }
    }
    .info-fields {
      display: flex;
      flex-wrap: wrap;
      .input-block {
        margin-top: 28px;
        @include max(1023) {
          margin-top: 13px;
        }
        @include max(767) {
          margin-top: 6px;
        }
        &:nth-child(odd) {
          margin-right: 48px;
          @include max(1439) {
            margin-right: 31px;
          }
          @include max(767) {
            margin-right: 0px;
          }
        }
      }
      // .input-block + .input-block {
      //   margin-top: 40px;
      //   @include max(1439) {
      //     margin-top: 31px;
      //   }

      // }
    }
  }
  .authorization {
    padding: 56px 0 56px 48px;
    display: flex;
    border-bottom: 1px solid rgba(#000000, 0.05);
    @include max(1439) {
      padding: 40px 0 48px 40px;
    }
    @include max(1023) {
      padding: 32px 0 32px 48px;
    }
    @include max(767) {
      padding: 32px 0 32px 18px;
    }
    .a1 {
      cursor: pointer;
      transition: opacity 0.3s ease-in-out;
      &:hover {
        opacity: 0.7;
      }
      &:not(:last-child) {
        margin-right: 48px;
      }
      span {
        font-size: 14px;
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
        min-width: 303px;
      }
    }
  }
}
</style>
