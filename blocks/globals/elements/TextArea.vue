<template>
  <div class="textarea-block">
    <textarea rows="1" :placeholder="placeholder" name="text" class="p1"></textarea>
  </div>
</template>

<script>
export default {
  name: "Textarea",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.textarea-block {
  width: 100%;
  padding: 8px 0 10px 4px;
  display: flex;
  border-bottom: 1px solid rgba(#000000, 0.1);

  textarea {
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    resize: none;
  }
}
</style>