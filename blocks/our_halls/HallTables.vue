<template>
  <div class="hall_tables_container" :class="{ halls_page: isHallsPage }">
    <div class="main-wrapper">
      <div class="hall_tables_container-wrapper container">
        <div class="hall_tables_wrapper">
          <OneTable v-for="key in 2" :key="key" />
        </div>
        <div class="line-simple"></div>
      </div>
    </div>
  </div>
</template>

<script>
import OneTable from "~/blocks/our_halls/OneTable";

export default {
  name: "HallTables",
  props:{
    isHallsPage:{
      type:Boolean,
      default:false
    }
  },
  components: {
    OneTable
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.hall_tables_container {
  background: linear-gradient(180deg, rgba(240, 237, 234, 0) 0%, #f0edea 100%);
  // @include pb-140;
  // margin-top: 180px;
  // position: relative;
  // .line-simple {
  //   left: -25px;
  //   top: 140px;
  // }
  &.halls_page{
    @include max(1439){
      display: none;
    }
  }
}
.hall_tables_container-wrapper {
  @include pb-140;
  margin-top: 180px;
  position: relative;
  .line-simple {
    left: -25px;
    top: 140px;
  }
}

.hall_tables_wrapper {
  background-color: #f0edea;
  padding: 6px;
  position: relative;
  z-index: 1;
  max-width: 1100px;
}
//
</style>
