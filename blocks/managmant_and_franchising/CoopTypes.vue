<template>
  <div
    class="form_coops_container"
    :class="{ managment_and_franchising_page: isManagmentAndFranchisingPage }"
  >
    <div class="main-wrapper">
      <div class="form_coops_container-wrapper container">
        <TwoTitles
          main_title="Форми співпраці"
          little_title="співпраця"
          :isManagmentAndFranchisingPage="isManagmentAndFranchisingPage"
        />
        <p class="p1 coops__description">
          Обирайте одне із готових рішень для успішного розвитку готелю та
          отримайте максимальні переваги від співпраці з нами!
        </p>
        <div class="table_container_wrapper">
          <table-component-modal v-if="breakpoint <= 520" :data="table_data" />
          <div v-else class="table_container">
            <table>
              <tr>
                <th>
                  <div class="table_content_wrapper">
                    <div class="table_content table_content_transparent">
                      Text
                    </div>
                  </div>
                </th>
                <th class="a1">
                  <div class="table_content_wrapper">
                    <div class="table_content table_content--head-top">Контрактне управління</div>
                  </div>
                </th>
                <th class="a1">
                  <div class="table_content_wrapper">
                    <div class="table_content table_content--head-top">Франчайзинг</div>
                  </div>
                </th>
              </tr>
              <template v-for="data in table_data">
                <template v-if="data.commonEnd">
                  <tr :key="data.id + '0'">
                    <td rowspan="2">
                      <div class="table_content_wrapper">
                        <div class="table_content table_content--head p2_light">
                          {{ data.name }}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="table_content_wrapper">
                        <ul class="table_content">
                          <li
                            class="p2_light table_info_element"
                            v-for="management in data.management"
                            :key="management"
                          >
                            {{ management }}
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td>
                      <div class="table_content_wrapper">
                        <ul class="table_content">
                          <li
                            class="p2_light table_info_element"
                            v-for="franchising in data.franchising"
                            :key="franchising"
                          >
                            {{ franchising }}
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr :key="data.id + '1'">
                    <td class="td_content_one-row" colspan="2">
                      <div class="table_content_wrapper">
                        <ul class="table_content table_content_one-row">
                          <li
                            class="p2_light table_info_element"
                            v-for="common in data.commonEnd"
                            :key="common"
                          >
                            {{ common }}
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </template>

                <template v-else-if="data.commonStart">
                  <tr :key="data.id + '0'">
                    <td rowspan="2">
                      <div class="table_content_wrapper">
                        <div class="table_content table_content--head p2_light">
                          {{ data.name }}
                        </div>
                      </div>
                    </td>
                    <td colspan="2">
                      <div class="table_content_wrapper">
                        <ul class="table_content table_content_one-row">
                          <li
                            class="p2_light table_info_element"
                            v-for="common in data.commonStart"
                            :key="common"
                          >
                            {{ common }}
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr :key="data.id + '1'">
                    <td class="td_content_one-row">
                      <div class="table_content_wrapper">
                        <ul class="table_content table_content_one-row">
                          <li
                            class="p2_light table_info_element"
                            v-for="management in data.management"
                            :key="management"
                          >
                            {{ management }}
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td>
                      <div class="table_content_wrapper">
                        <ul class="table_content">
                          <li
                            class="p2_light table_info_element"
                            v-for="franchising in data.franchising"
                            :key="franchising"
                          >
                            {{ franchising }}
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </template>

                <tr v-else :key="data.id">
                  <td>
                    <div class="table_content_wrapper">
                      <div class="table_content table_content--head p2_light">{{ data.name }}</div>
                    </div>
                  </td>

                  <td>
                    <div class="table_content_wrapper">
                      <div
                        v-if="typeof data.management === 'string'"
                        class="table_content p2_light"
                      >
                        {{ data.management }}
                      </div>
                      <ul class="table_content" v-else>
                        <li
                          class="p2_light table_info_element"
                          v-for="management in data.management"
                          :key="management"
                        >
                          {{ management }}
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    <div class="table_content_wrapper">
                      <div
                        v-if="typeof data.franchising === 'string'"
                        class="table_content p2_light"
                      >
                        {{ data.franchising }}
                      </div>
                      <ul class="table_content" v-else>
                        <li
                          class="p2_light table_info_element"
                          v-for="franchising in data.franchising"
                          :key="franchising"
                        >
                          {{ franchising }}
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </template>
            </table>
          </div>
          <div v-if="line" class="line-simple"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TwoTitles from "~/blocks/globals/TwoTitles";
import TableComponentModal from "~/blocks/managmant_and_franchising/TableComponentModal";
import { globalMixin } from "~/plugins/mixins";

export default {
  name: "CoopTypes",
  mixins: [globalMixin],
  components: {
    TwoTitles,
    TableComponentModal
  },
  props: {
    line: {
      type: Boolean,
      default: false
    },
    isManagmentAndFranchisingPage: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    table_data: [
      {
        id: 0,
        name: "Принцип управління",
        management:
          "Ми підбираємо і контролюємо нашу команду менеджерів, які керують усією операційною діяльністю Вашого готелю.",
        franchising:
          "Ви самостійно керуєте своїм готелем під нашим брендом і отримуєте вигоду від використання наших інтелектуальних ресурсів."
      },
      {
        id: 1,
        name: "Для Оператора / Витрати для Власника",
        management: [
          "Вступний внесок",
          "Плата за управління від доходу",
          "Плата за управління від операційного прибутку"
        ],
        franchising: [
          "Роялті (плата за бренд)",
          "Франчайзинговий платіж від доходу номерного фонду"
        ],
        commonEnd: [
          "Плата за бронювання",
          "Плата за участь у програмі лояльності"
        ]
      },
      {
        id: 2,
        name: "Що надає оператор	",
        management: [
          "Мережеві поставки продукції, управління витратами",
          "Система бюджетування і фінансового контролю доходів і витрат",
          "Система навчання і мотивації персоналу",
          "Підтримка у впровадженні та контроль операційних стандартів",
          "Управлінські функції, включаючи підбір персоналу",
          "Стандарти управління і управлінський персонал",
          "Сприяння в підготовці маркетингового плану і бюджету, контроль діяльності"
        ],
        franchising: [
          "Мережеві поставки продукции",
          "Контроль операційної діяльності",
          "Система базового навчання персоналу",
          "Контроль над дотриманням операційних стандартів"
        ],
        commonStart: [
          "Бренд",
          "Ресурс продажів і маркетингу",
          "Підключення до всіх систем електронних продажів і бронювання",
          "Мережеві програми лояльності"
        ]
      },
      {
        id: 3,
        name: "Фінансові результати",
        management:
          "У зоні відповідальності оператора - бюджет доходів і витрат",
        franchising:
          "У зоні відповідальності власника - видаткова частина, доходи формуються за участю продажів від оператора"
      }
    ]
  }),
  computed: {
    breakpoint() {
      return this.breakpoints;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.form_coops_container {
}
.form_coops_container-wrapper {
  margin: 140px 0;
}
.coops__description {
  width: 485px;
  margin: 24px auto 96px;
  text-align: center;
  opacity: 0.5;
  @include max(768) {
    margin: 24px auto 10px;
  }
}

//table
.table_content {
  opacity: 0.7;
}

.table_content--head {
  font-family: 'AvenirNextCyrRegular';
  font-style: normal;
  font-size: 12px;
  line-height: 180%;
  letter-spacing: 0.06em;
  color: #000000;
  opacity: 1;

  &-top {
    opacity: 1;
    font-weight: 450;
  }
}

.table_container_wrapper {
  position: relative;
}
.table_container {
  width: 100%;
  height: 100%;
  padding: 10px 24px;
  position: relative;
  z-index: 1;
  background-color: #f0edea;
}
.line-simple {
  top: unset;
  left: unset;
  bottom: 100px;
  right: -185px;
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
  > td {
    position: relative;
    // border-top: 1px solid rgba(#000, 0.1);
    &::before {
      content: "";
      position: absolute;
      left: 0;
      display: block;
      width: 100%;
      height: 1px;
      background-color: rgba(#000, 0.1);
    }
    &.td_content_one-row {
      &::before {
        left: unset;
        right: 0;
        width: calc(100% - 10px);
      }
    }
  }
}
tr:first-of-type {
  > td {
    border-top: none;
    &::before {
      display: none;
    }
  }
}

th {
  text-align: center;
  &:first-of-type {
    width: 200px;
    // border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
}
td:first-of-type .table_content {
  padding: 17px 24px 17px 10px;
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
.table_content_one-row {
  padding: 17px 34px !important;
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
.table_content_transparent {
  color: transparent;
  user-select: none;
}
/*is_managment_and_franchising_page */
.managment_and_franchising_page {

  .line-simple {
    @include max(1024) {
      display: none;
    }
  }
  .form_coops_container-wrapper {
    @include max(1439) {
      margin-top: 124px;
      padding:0 56px;
    }
    @include max(1023) {
      margin-top: 80px;
      padding: 0 48px;
    }
    @include max(767){
      padding:0 18px;
      margin: 80px 0;
    }
  }
  .table_container {
    @include max(520) {
      display: none;
    }
  }
  .coops__description {
    @include max(1439) {
      max-width: 351px;
      margin-bottom:72px;
    }
    @include max(1023){
      margin-bottom:10px;
    }
    @include max(767){
      width:100%;
      margin-bottom:48px;
    }
  }
}
/*is_managment_and_franchising_page */
</style>
