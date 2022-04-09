<template>
  <div class="table-mobile">
    <div class="table-mobile-wrapper">
      <div
        class="table-mobile-elem"
        v-for="(elem, index) in getData"
        :key="index"
      >
        <div class="table-mobile-elem__header a1">{{ elem.mainTitle }}</div>
        <div class="table-mobile-elem__description">
          {{ elem.principals.value }}
        </div>
        <div
          v-if="isShowMore && getShownData.mainTitle === elem.mainTitle"
          class="table-mobile-elem__features-list"
        >
          <div
            class="table-mobile-elem__features"
            v-for="(elem, index) in getShownData.value"
            :key="index"
          >
            <div class="table-mobile-elem__features-title p2_light">
              {{ elem.innerTitle }}
            </div>
            <div
              class="table-mobile-elem__features-list"
              v-for="(elem, index) in elem.value"
              :key="index"
            >
              <div class="features-list__item p2_ligh">{{ elem }}</div>
            </div>
          </div>
        </div>
        <div class="toggle-btn a1" @click="showMore(elem.mainTitle)">
          {{
            isShowMore && getShownData.mainTitle === elem.mainTitle
              ? "ЗГОРНУТИ"
              : "ДІЗНАТИСЬ БІЛЬШЕ"
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableComponentModal",
  data() {
    return {
      isShowMore: false,
      showMenuTitle: null
    };
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  methods: {
    showMore(value) {
      this.isShowMore = !this.isShowMore;
      this.showMenuTitle = value;
    },
    convertData(val) {
      let principals = this.data.find(elem => {
        if (elem.name === "Принцип управління") {
          return elem;
        }
      });
      let marketingData = this.data.map(elem => {
        let value = [];
        if (elem.name === "Принцип управління") {
          return;
        }
        if (typeof elem[val] === "string") {
          value.push(elem[val]);
        } else {
          value = [...elem[val]];
        }
        if (elem.hasOwnProperty("commonEnd")) {
          value = [...value, ...elem[val]];
        } else if (elem.hasOwnProperty("commonStart")) {
          value = [...value, ...elem[val]];
        }
        return {
          innerTitle: elem.name,
          value: value,
          id: elem.id
        };
      });
      return {
        mainTitle:
          val === "franchising" ? "Франчайзінг" : "Контрактне управління",
        value: marketingData.filter(elem => elem),
        principals: {
          title: principals.name,
          value: "franchising" ? principals.franchising : principals.management
        }
      };
    }
  },
  computed: {
    getData() {
      return [this.convertData("franchising"), this.convertData("management")];
    },
    getShownData() {
      if (!this.showMenuTitle) {
        return;
      }
      return this.getData.find(elem => {
        if (elem.mainTitle === this.showMenuTitle) {
          return elem;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.table-mobile-elem {
  padding: 18px;
  background-color: #f0edea;
}
.table-mobile-elem + .table-mobile-elem {
  margin-top: 10px;
}
.features-list__item {
  font-size: 12px;
}
.features-list__item::before {
  content: "-";
  margin-right: 8px;
}
.table-mobile-elem__description {
  margin: 18px 0 40px 0;
}
.table-mobile-elem__features + .table-mobile-elem__features {
  margin-top: 26px;
}
.table-mobile-elem__features-title {
  margin-bottom: 12px;
}
.features-list__item + .features-list__item {
  margin-bottom: 8px;
}
.toggle-btn {
  border-bottom: 1px dashed #000000;
  margin-top: 40px;
  width: fit-content;
}
</style>
