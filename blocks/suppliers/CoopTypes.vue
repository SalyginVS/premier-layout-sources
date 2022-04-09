<template>
  <div
    class="form_coops_container"
    :class="{ 'supplier-table': supplierTable }"
  >
    <div class="main-wrapper">
      <div class="form_coops_container-wrapper container">
        <div class="table_container">
          <table>
            <tr>
              <th class="a1">
                <div class="table_content_wrapper">
                  <div class="table_content table_content_transparent">
                    Text
                  </div>
                </div>
              </th>
              <th class="a1">
                <div class="table_content_wrapper">
                  <div class="table_content">Продукція</div>
                </div>
              </th>
              <th class="a1">
                <div class="table_content_wrapper">
                  <div class="table_content">Готелі</div>
                </div>
              </th>
              <th class="a1">
                <div class="table_content_wrapper">
                  <div class="table_content">Дата проведення</div>
                </div>
              </th>
              <th class="a1">
                <div class="table_content_wrapper">
                  <div class="table_content table_content_transparent">
                    Text
                  </div>
                </div>
              </th>
            </tr>
            <tr v-for="data in table_data" :key="data.id">
              <td>
                <div class="table_content_wrapper">
                  <div class="table_content p2_light">{{ data.number }}</div>
                </div>
              </td>
              <td>
                <div class="table_content_wrapper">
                  <div class="table_content p2_light">
                    {{ data.management }}
                  </div>
                </div>
              </td>
              <td>
                <div class="table_content_wrapper">
                  <div class="table_content p2_light">{{ data.hotel }}</div>
                </div>
              </td>
              <td>
                <div class="table_content_wrapper">
                  <div class="table_content p2_light">{{ data.date }}</div>
                </div>
              </td>
              <td>
                <div class="table_content_wrapper">
                  <div class="table_content p2_light">
                    <nuxt-link to="/">Детальніше</nuxt-link>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TwoTitles from "~/blocks/globals/TwoTitles";

export default {
  name: "CoopTypes",
  components: {
    TwoTitles
  },
  props: {
    supplierTable: {
      type: Boolean,
      default: false
    },
    table_data: {
      type: Array,
      default: []
    }
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.form_coops_container-wrapper {
  margin: 140px 0;
  @include max(1439) {
    margin: 72px 0 124px 0;
  }
  @include max(1023) {
    margin: 63px 0 112px 0;
  }
  &.container {
    @include max(1439) {
      padding: 0 48px;
    }
  }
}
.coops__description {
  width: 485px;
  margin: 24px auto 96px;
  text-align: center;
}

//table
.table_container {
  background-color: #f0edea;
  padding: 10px 24px;
  @include max(1024) {
    overflow-x: scroll;
    padding:10px 12px;
  }
}
table {
  border-collapse: collapse;
}
table,
tr {
  width: 100%;
}
thead p {
  @include mb-40;
}
tr {
  border-top: 1px solid rgba(#000, 0.1);
}
tr:first-of-type {
  border-top: none;
}
th {
  text-align: left;
}
td:first-of-type .table_content {
  padding: 17px 10px;
}
.table_content_wrapper {
  padding: 10px 0;
  height: 100%;
}
.table_content {
  height: 100%;
  padding: 17px 34px;
  border-right: 1px solid rgba(#000, 0.1);
}
td {
  height: 1px;
}
td:last-of-type .table_content,
th:last-of-type .table_content {
  border-right: none;
}
.table_info_element {
  margin-bottom: 15px;
}
.table_info_element::before {
  content: "-";
  margin-right: 8px;
}
.supplier-table {
  .table_content {
    padding: 22px 40px 30px 32px;
    @include max(1439) {
      padding: 12px 20px;
    }
  }
  th:not(:first-of-type) {
    width: calc(100% / 3);
    .table_content_wrapper {
      @include max(1024) {
        width: 27.3vw;
      }
    }
  }
  th:nth-child(3) {
    width: calc(100% / 2.4);
    @include max(1024) {
      width: 270px;
    }
  }

  th:last-of-type {
    width: 216px;
  }
  td:first-of-type .table_content {
    padding-right: 48px;
    @include max(1439) {
      padding: 12px 25px 0 16px;
    }
    @include max(1023){
      padding: 12px 21px 0 10px;
    }
  }
}
.table_content_transparent {
  color: transparent;
  user-select: none;
}
</style>
