<template>
  <div class="table-mob">
    <div class="table-mob__list-items">
      <div
        v-for="(elem, index) in table_data"
        class="table-mob__list-item"
        :key="index"
      >
        <div class="list-item__header">
          <div class="list-item__id a1">
            <NuxtLink to="/">{{ elem.number }}</NuxtLink>
          </div>
          <div class="list-item__date p2_light">{{ elem.date }}</div>
        </div>
        <div class="list-item__description">
          <p class="list-item__goods-title p2_light">
            Продукція: {{ elem.management }}
          </p>
          <p class="list-item__hotels-list p2_light">
            Готелі: {{ elem.hotel }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoopTypesMob",
  props: {
    table_data: {
      type: Array,
      default: () => {}
    }
  },
  created() {
    console.log(this.table_data);
  },
  updated() {
    console.log(this.table_data);
  }
};
</script>

<style lang="scss" scopped>
@import "../../assets/scss/utils.scss";
.table-mob {
  margin: 56px 0 88px 0;
  padding: 0 20px;
}
.table-mob__list-item {
  background: #f0f0f0;
  padding: 20px;
}
.table-mob__list-item + .table-mob__list-item {
  margin-top: 12px;
}
.list-item__header {
  display: flex;
  justify-content: space-between;
}
.list-item__id{
    font-size:18px;
    text-decoration-line: underline;
    line-height: 110%;
    letter-spacing: -0.02em;
}
.list-item__description {
  margin-top: 20px;
  .list-item__goods-title {
    margin-bottom: 8px;
  }
}
</style>
