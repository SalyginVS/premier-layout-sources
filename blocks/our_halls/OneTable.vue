<template>
  <div class="one_table_container">
    <p class="table__main_titile">{{ title }}</p>
    <table class="table">
      <tr class="table_content_head_wrapper">
        <th v-for="header in headers" :key="header.name">
          <div class="table_content table_content_head" v-if="header.img">
            <img class="table__header_image" :src="header.img" alt />
            <p class="p3">{{ header.name }}</p>
          </div>
          <div class="table_content table_content_head" v-else>
            <p class="a1">{{ header.name }}</p>
          </div>
        </th>
      </tr>
      <tr v-for="value in values" :key="value.id">
        <td class="p2_light">
          <div class="table_content">{{ value.name }}</div>
        </td>
        <td class="p2_light">
          <div class="table_content">{{ value.theatre }}</div>
        </td>
        <td class="p2_light">
          <div class="table_content">{{ value.class }}</div>
        </td>
        <td class="p2_light">
          <div class="table_content">{{ value.circle_table }}</div>
        </td>
        <td class="p2_light">
          <div class="table_content">{{ value.p_table }}</div>
        </td>
        <td class="p2_light">
          <div class="table_content">{{ value.banket }}</div>
        </td>
        <td class="p2_light">
          <div class="table_content">{{ value.buffet }}</div>
        </td>
        <td class="p2_light">
          <div class="table_content">{{ value.square }}</div>
        </td>
        <td class="p2_light">
          <div class="table_content">
            {{ value.width }} / {{ value.length }} / {{ value.height }}
          </div>
        </td>
      </tr>
    </table>
  </div>
</template> 

<script>
import { headers, values } from "~/assets/js_static_data/halls_tables";

export default {
  name: "OneTable",
  data: () => ({
    title: "Конференц залы",
    headers,
    values,
  }),
};
</script>

<style lang="scss" scoped>
.one_table_container {
  padding: 0 24px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02)),
    #f0edea;
  margin-bottom: 6px;
}
table {
  border-collapse: collapse;
}
table,
tr {
  width: 100%;
}
tr {
  border-top: 1px solid rgba(#000, 0.1);
}
td {
  text-align: center;
}
th:first-of-type,
th:last-of-type,
td:first-of-type {
  text-align: left;
}
.table_content {
  padding: 20px 0;
  // margin: 10px 0;
  //  border-right: 1px solid rgba(#000, 0.1);
}

th,
td {
  height: 100%;
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 1px;
    height: calc(100% - 20px);
    background: rgba(#000, 0.1);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }
}
th:last-of-type {
  &::before {
    display: none;
  }
}
tr {
  td:last-of-type {
    &::before {
      display: none;
    }
  }
  td:first-of-type {
    .table_content {
      padding-right: 20px;
    }
  }
}
.table_content_head_wrapper {
  th {
    &:first-of-type {
      .table_content {
        padding-left: 10px;
      }
    }
    &:last-of-type {
      .table_content {
        padding-right: 0;
        text-align: start;
      }
    }
  }
}
.table_content_head {
  padding: 17px 26px;
  .p3 {
    white-space: nowrap;
  }
}
td:not(:first-of-type) .table_content {
  opacity: 0.5;
}

td:last-of-type .table_content,
th:last-of-type .table_content {
  border-right: none;
}
.table__header_image {
  max-height: 24px;
  max-width: 24px;
  margin-bottom: 8px;
}
.table__main_titile {
  font-family: Cormorant;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 130%;
  color: #000000;
  white-space: nowrap;
  padding: 32px 8px;
  width: 100%;
}
</style>