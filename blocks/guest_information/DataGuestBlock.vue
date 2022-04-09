<template>
  <div class="data_guest_block">
    <h6>{{ data.title }}</h6>

    <div v-if="data.type === 'textarea'" class="textarea">
      <TextArea :placeholder="data.textarea.placeholder" />
    </div>
    <div class="data">
      <Input
        v-for="option in data.inputOptions"
        :option="option"
        :key="option.id"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DataGuestBlock",
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.data_guest_block {
  width: 100%;
  padding: 64px 40px 44px 40px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(#000000, 0.05);

  @include max(lg) {
    padding: 40px;
  }
  @include max(md) {
    padding: 32px 40px ;
  }
  @include max(sm) {
    padding: 32px 18px;
  }
  h6 {
    font-weight: normal;
    margin-bottom: 24px;

    @include max(lg) {
      margin-bottom: 20px;
    }
    @include max(md) {
      margin-bottom: 12px;
    }
  }
  .data {
    display: flex;
    flex-wrap: wrap;
    .input-block {
      width: calc(50% - 24px);
      margin-bottom: 28px;

      @include max(lg) {
        width: 100%;
        margin-bottom: 0px;
        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }
      @include max(md) {
        width: calc(50% - 20px);
        &:not(:last-child) {
          margin-bottom: 12px;
        }

        &:nth-last-child(1),
        &:nth-last-child(2) {
          margin-bottom: 0px;
        }
      }
      @include max (sm){
        width: 100%;
        margin-bottom: 0px;
        &:not(:last-child){
          margin-bottom: 12px;
        }
      }
      &:nth-child(odd) {
        margin-right: 48px;

        @include max(lg) {
          margin-right: 0px;
        }
        @include max(md) {
          margin-right: 40px;
        }
      }
    }
    .textarea {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
