<template>
  <div v-if="showAddCardButton" class="add-card" @click="$emit('addNewCard')">
    <p class="a1">додати карту</p>
  </div>
</template>

<script>
export default {
  name: "AddNewCardTemplate",
  props:{
      showAddCardButton:{
          type:Boolean,
          default:false
      }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";
.add-card {
  width: 157px;
  height: 102px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f7f7;
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  cursor: pointer;
  @include max(767) {
    width: 125.99px;
    height: 81.85px;
  }
}
</style>
