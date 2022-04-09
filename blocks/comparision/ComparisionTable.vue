<template>
  <div class="comparision_table">
    <table>
      <thead>
        <td class="a1 table_title" colspan="4">{{name}}</td>
      </thead>
      <template v-for="key in params">
        <tr class="tablet-title__container" :key="key">
          <td colspan="3" class="tablet-title__wrapper">
            <p class="p1 tablet-title">
              {{ params_name[key] }}
            </p>
          </td>
        </tr>
        <tr :key="params[key]" class="desktop-tablet-comparision">
          <td class="p1 first_column_title">
            <div class="table_content">{{ params_name[key] }}</div>
          </td>
          <td
            class="content_td"
            v-for="comparision in comparisions"
            :key="comparision.id"
          >
            <div class="table_content">
              <img
                v-if="comparision.options[key]"
                src="~/static/images/checked.svg"
                alt
              />
              <img v-else src="~/static/images/minus.svg" alt />
            </div>
          </td>
        </tr>
        <tr :key="params[key]" class="mobile-comparision">
          <td class="p1 mobile-comparision__names">
            <p
              class="table_content"
              v-for="comparision in comparisions"
              :key="comparision.id"
            >
              {{ comparision.name }}
            </p>
          </td>
          <td class="p1content_td mobile-comparision__options">
            <!-- <div class="table_content mobile_points"> -->
              <div
                class="table_content"
                v-for="comparision in comparisions"
                :key="comparision.id"
              >
                {{ comparision.options[key] ? "+" : "-" }}
              </div>
            <!-- </div> -->
          </td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
export default {
  name: "ComparisionTable",
  props: {
    comparisions: Array,
    params_name: Object,
    params: Array,
    name: String
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.comparision_table {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02)),
    #f0edea;
  padding: 40px 24px 24px;
  margin-bottom: 6px;

  @include max(lg) {
    padding: 32px 16px 16px;
  }
  @include max(sm) {
    padding: 24px 18px 18px;
  }
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

  width: 25%;
  @include max(lg) {
    width: 33.3333%;
  }
}
td:first-of-type {
  text-align: left;
}
.table_content {
  padding: 17px 0;
  margin: 10px 0;
  border-right: 1px solid rgba(#000, 0.1);
  @include max(lg) {
    padding: 20px 0;
    margin: 10px 0;
  }
  @include max(md) {
    padding: 15px 0;
    margin: 10px 0;
  }
  @include max(sm) {
    margin: 0;
    padding: 0 0 10px;
  }
}
.table_content:last-of-type {
  padding-bottom: 32px;
}
td:last-of-type .table_content {
  border-right: none;
}
.table_content:last-of-type {
  @include max(sm) {
    margin: 0;
  }
}
thead .table_title {
  @include mb-40;
  padding-bottom: 40px;

  @include max(lg) {
    text-align: center;
    padding-bottom: 32px;
  }
  @include max(sm) {
    text-align: left;
    padding-bottom: 20px;
  }
}
.first_column_title {
  @include max(lg) {
    display: none;
  }
}
.tablet-title {
  width: fit-content;
  margin: auto;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02)),
    #f0edea;
  position: relative;
  top: 10px;
  padding: 0 24px;

  @include max(md) {
    padding: 0 16px;
  }
  @include max(sm) {
    margin-left: 0;
    padding-left: 0;
  }
}
.tablet-title__container .tablet-title {
  padding-top: 22px;

  @include max(sm) {
    padding-top: 0px;
  }
}
.tablet-title__container {
  display: none;

  @include max(lg) {
    display: table-row;
  }
  @include max(sm) {
    border-top: none;
  }
}
.tablet-title__container:first-of-type {
  .tablet-title {
    padding-top: 0;
  }
  border: none;
}
.desktop-tablet-comparision {
  @include max(sm) {
    display: none;
  }
}
.mobile-comparision {
  display: none;

  @include max(sm) {
    display: table-row;
    border-bottom: none;
  }
}
.mobile-comparision__names, .mobile-comparision__options {
  @include max(sm) {
    padding: 23px 0 12px;
  }
}
.mobile-comparision__names {
  width: 66%;
}
</style>
