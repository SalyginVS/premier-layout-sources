<template>
  <div class="premier-club_table">
    <h3 class="title">Знижки та переваги</h3>
    <div class="table-wrapper">
      <table>
        <tr class="header">
          <th class="content_td" v-for="header in headers" :key="header.name">
            <div class="table_content">
              <p class="a1">{{ header.name }}</p>
            </div>
          </th>
        </tr>

        <tr>
          <td class="p1">
            <div class="table_content_wrapper">
              <div class="table_content">
                Знижка на проживання у готелях від "Найкращого гнучкого тарифу"
              </div>
            </div>
          </td>
          <td
            class="content_td"
            v-for="comparision in comparisions"
            :key="comparision.id"
          >
            <div class="table_content_wrapper">
              <div class="table_content">
                <img
                  v-if="comparision.saleRoom"
                  src="~/static/images/checked.svg"
                  alt
                />
                <img v-else src="~/static/images/minus.svg" alt />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="p1">
            <div class="table_content_wrapper">
              <div class="table_content">Можливість накопичувати бонуси</div>
            </div>
          </td>
          <td
            class="content_td"
            v-for="comparision in comparisions"
            :key="comparision.id"
          >
            <div class="table_content_wrapper">
              <div class="table_content">
                <img
                  v-if="comparision.bonus"
                  src="~/static/images/checked.svg"
                  alt
                />
                <img v-else src="~/static/images/minus.svg" alt />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="p1">
            <div class="table_content_wrapper">
              <div class="table_content">
                Можливість обмінювати бонуси на подарунки
              </div>
            </div>
          </td>
          <td
            class="content_td"
            v-for="comparision in comparisions"
            :key="comparision.id"
          >
            <div class="table_content_wrapper">
              <div class="table_content">
                <img
                  v-if="comparision.bonusChange"
                  src="~/static/images/checked.svg"
                  alt
                />
                <img v-else src="~/static/images/minus.svg" alt />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="p1">
            <div class="table_content_wrapper">
              <div class="table_content">
                Знижка на послуги барів та ресторанів
              </div>
            </div>
          </td>
          <td
            class="content_td"
            v-for="comparision in comparisions"
            :key="comparision.id"
          >
            <div class="table_content_wrapper">
              <div
                v-if="typeof comparision.saleBars === 'boolean'"
                class="table_content"
              >
                <img
                  v-if="comparision.saleBars"
                  src="~/static/images/checked.svg"
                  alt
                />
                <img v-else src="~/static/images/minus.svg" alt />
              </div>
              <div v-else class="table_content">
                <p>{{ comparision.saleBars }}</p>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="p1">
            <div class="table_content_wrapper">
              <div class="table_content">Виділена лінія підтримки</div>
            </div>
          </td>
          <td
            class="content_td"
            v-for="comparision in comparisions"
            :key="comparision.id"
          >
            <div class="table_content_wrapper">
              <div class="table_content">
                <img
                  v-if="comparision.helper"
                  src="~/static/images/checked.svg"
                  alt
                />
                <img v-else src="~/static/images/minus.svg" alt />
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div class="table-status">
      <div class="status_text">
        <p class="gold_text">Amber</p>
        <p class="status-border">
          <!-- <img src="~/static/images/gold_border_image.svg" alt=""> -->
        </p>
        <p class="gold_text">Pearl</p>
      </div>
      <div class="table-list">
        <ul class="list_body">
          <li class="list_item">
            <img src="~/static/images/circle_check.svg" alt="" />
            <p>Возможность накапливать бонусы</p>
          </li>
          <li class="list_item">
            <img src="~/static/images/circle_check.svg" alt="" />
            <p>Выделенная линия службы поддержки</p>
          </li>
          <li class="list_item">
            <img src="~/static/images/circle_check.svg" alt="" />
            <p>Скидка на проживание в отелях - 10%</p>
          </li>
          <li class="list_item">
            <img src="~/static/images/circle_check.svg" alt="" />
            <p>Возможность обменивать бонусы на подарки</p>
          </li>
          <li class="list_item">
            <img src="~/static/images/circle_check.svg" alt="" />
            <p>Скидка на услуги ресторанов - 10%</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PremierClubTable",
  data: () => ({
    headers: [
      {
        name: "Привілеї та знижки",
      },
      {
        name: "Amber",
      },
      {
        name: "Pearl",
      },
      {
        name: "Sapphire",
      },
      {
        name: "Diamond",
      },
    ],
    comparisions: [
      {
        id: 0,
        saleRoom: true,
        bonus: true,
        bonusChange: true,
        saleBars: "10%",
        helper: true,
      },
      {
        id: 1,
        saleRoom: true,
        bonus: true,
        bonusChange: true,
        saleBars: "10%",
        helper: true,
      },
      {
        id: 2,
        saleRoom: false,
        bonus: false,
        bonusChange: false,
        saleBars: "15%",
        helper: false,
      },
      {
        id: 3,
        saleRoom: true,
        bonus: true,
        bonusChange: true,
        saleBars: "15%",
        helper: true,
      },
    ],
  }),

  mounted() {
    console.log(this.comparisions[0]);
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.premier-club_table {
  @include pl-168;
  @include pr-168;
  display: flex;
  align-items: center;
  flex-direction: column;

  @include max(lg) {
    padding: 0 56px;
  }

  @include max(md) {
    padding: 0 48px;
  }

  @include max(sm) {
    padding: 0 8px;
  }

  .title {
    margin-bottom: 72px;
  }
}
.table-wrapper {
  width: 100%;
  padding: 10px 24px;
  background: #f0edea;

  @include max(lg) {
    padding: 0px 24px;
  }

  @include max(md) {
    padding: 0px 16px;
  }

  @include max(sm) {
    display: none;
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
th {
  .table_content {
    padding: 22px 65px;

    @include max(lg) {
      padding: 16px 32px 17px;
    }

    @include max(lg) {
      padding: 16px 32px 17px;
    }

    @include max(md) {
      padding: 16px 22px 17px;
    }
  }
}
th:first-of-type {
  text-align: left;
  width: 340px;
  .table_content {
    padding-left: 10px;
    justify-content: flex-start;

    @include max(lg) {
      padding-left: 8px;
    }
  }

  @include max(lg) {
    padding: 8px 0px;
  }
}
th:last-child {
  .table_content {
    border-right: unset;
    padding-right: 40px;

    @include max(lg) {
      padding-right: 17px;
    }
    @include max(md) {
      padding-right: 6px;
    }
  }
}
tr {
  border-top: 1px solid rgba(#000, 0.1);
}
.header {
  border-top: none;
}
td {
  text-align: center;
  height: 1px;
}
td:first-of-type {
  text-align: left;
  .table_content {
    padding: 10px;
    justify-content: flex-start;
  }
}
.table_content_wrapper {
  height: 100%;

  padding: 10px 0 10px;
}
.table_content {
  height: 100%;
  border-right: 1px solid rgba(#000, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}
td:last-of-type .table_content {
  border-right: none;
}

.table-status {
  @include min (sm){
    display: none;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
}

.status_text {
  display: flex;
  margin: 0 5px 0 auto;
}
.gold_text {
  &:last-child {
    opacity: 0.8;
  }
}
.status-border {
  height: 12px;
  width: 68px;
  margin: 0 18px;
  border-bottom: 1px dashed #cdcccb;
}

.table-list {
  margin-top: 24px;
  background-color: white;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  padding: 32px 26px 36px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    top: -5px;
    right: 160px;

    background: white;
    transform: matrix(0.71, -0.7, 0.71, 0.71, 0, 0);
  }
}
.list_body {
}
.list_item {
  display: flex;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  p {
    opacity: 0.5;
    font-size: 12px;
    font-family: Avenir Next Cyr;
    font-style: normal;
    font-weight: 300;
    margin-left: 16px;

    margin-top: 3px;
  }
}
</style>
