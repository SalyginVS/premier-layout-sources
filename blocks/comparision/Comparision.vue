<template>
  <div class="comparision_container container">
    <div class="main-wrapper">
      <div class="tables_container">
        <table class="hotels_table">
          <tr class="tables_container_wrapper">
            <th class="empty_column"></th>
            <th v-for="hotel in hotels" :key="hotel.id" class="hotel_container">
              <img
                src="/images/remove_comparision.svg"
                alt=""
                class="remove__button"
              />
              <div
                class="hotel_wrapper"
                :style="{
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%), url(${hotel.img})`,
                }"
              >
                <div class="description_top">
                  <h5 class="hotel__name">{{ hotel.name }}</h5>
                  <div class="stars_and_place">
                    <div class="stars_wrapper">
                      <img
                        src="~/static/images/one_star.svg"
                        v-for="star in hotel.stars"
                        :key="star"
                        alt
                      />
                    </div>
                    <div class="horizontal_line"></div>
                    <p class="p1 hotel__place">{{ hotel.place }}</p>
                  </div>
                </div>
                <div class="description_bottom">
                  <div class="description_bottom_wrapper">
                    <p class="p1" v-html="hotel.price"></p>
                    <div class="coming">
                      <p class="p1">{{ hotel.come_in }}</p>
                      <div class="vertical_line"></div>
                      <p class="p1">{{ hotel.come_out }}</p>
                    </div>
                    <a target="_blank" href="/" class="distance_block">
                      <img src="~/static/images/pin_light.svg" alt />
                      <p class="p1">{{ hotel.distance }}</p>
                    </a>
                  </div>
                  <button class="a1 button_check">перевірити ціни</button>
                </div>
              </div>
              <p class="a1 remove_button" @click="removeHolet(hotel)">remove</p>
            </th>
          </tr>
        </table>
        <ComparisionTable
          v-for="comparision in comparisions"
          :comparisions="comparision.comparision"
          :params_name="comparision.params_name"
          :params="comparision.params"
          :name="comparision.name"
          :key="comparision.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ComparisionTable from "~/blocks/comparision/ComparisionTable";

export default {
  name: "Comparision",
  components: {
    ComparisionTable,
  },
  data: () => ({
    hotels: [
      {
        id: 0,
        img: require("~/static/images/comparison1.jpg"),
        name: "Premier Palace Hotel",
        stars: 3,
        place: "Київ, Україна",
        price: "Від <b>4700 ₴</b>   за ніч",
        come_in: "Заїзд: 15:00",
        come_out: "Виїзд: 12:00",
        distance: "1.2 км до центра міста",
      },
      {
        id: 2,
        img: require("~/static/images/hotel2_comparision.jpg"),
        name: "Premier Palace Hotel",
        stars: 3,
        place: "Київ, Україна",
        price: "Від  <b>4700 ₴</b>  за ніч",
        come_in: "Заїзд: 15:00",
        come_out: "Виїзд: 12:00",
        distance: "1.2 км до центра міста",
      },
      {
        id: 3,
        img: require("~/static/images/comparison1.jpg"),
        name: "Premier Palace Hotel",
        stars: 3,
        place: "Київ, Україна",
        price: "Від  <b>4700 ₴</b> за ніч",
        come_in: "Заїзд: 15:00",
        come_out: "Виїзд: 12:00",
        distance: "1.2 км до центра міста",
      },
    ],

    comparisions: [
      {
        id: 0,
        name: "Їжа та напої",
        comparision: [
          {
            id: 0,
            name: "Premier Palace Hotel",
            options: {
              restaurant: true,
              bars: true,
              keeping: true,
              coffe: true,
              minibar: true,
              kids_menu: true,
            },
          },
          {
            id: 1,
            name: "Premier Hotel Rus:",
            options: {
              restaurant: true,
              bars: false,
              keeping: true,
              coffe: true,
              minibar: true,
              kids_menu: true,
            },
          },
          {
            id: 2,
            name: "Premier Hotel Lybid",
            options: {
              restaurant: true,
              bars: true,
              keeping: true,
              coffe: true,
              minibar: true,
              kids_menu: true,
            },
          },
        ],
        params_name: {
          restaurant: "Ресторан",
          bars: "Бар",
          keeping: "Обслуговування номерів",
          coffe: "Чайник/кавоварка в номері",
          minibar: "Мінібар в номері",
          kids_menu: "Дитяче меню",
        },
        params: [
          "restaurant",
          "bars",
          "keeping",
          "coffe",
          "minibar",
          "kids_menu",
        ],
      },
      {
        id: 1,
        name: "Басейн та SPA",
        comparision: [
          {
            id: 0,
            name: "Premier Palace Hotel",
            options: {
              pool: true,
              sauna: true,
              fitnes: true,
            },
          },
          {
            id: 1,
            name: "Premier Hotel Rus:",
            options: {
              pool: true,
              sauna: true,
              fitnes: true,
            },
          },
          {
            id: 2,
            name: "Premier Hotel Lybid",
            options: {
              pool: true,
              sauna: true,
              fitnes: true,
            },
          },
        ],
        params_name: {
          pool: "Критий басейн (цілий рік)",
          sauna: "Сауна",
          fitnes: "Фітнес-центр",
        },
        params: ["pool", "sauna", "fitnes"],
      },
      {
        id: 2,
        name: "Транспорт",
        comparision: [
          {
            id: 0,
            name: "Premier Palace Hotel",
            options: {
              parking: true,
              transfer: false,
            },
          },
          {
            id: 1,
            name: "Premier Hotel Rus:",
            options: {
              parking: false,
              transfer: false,
            },
          },
          {
            id: 2,
            name: "Premier Hotel Lybid",
            options: {
              parking: false,
              transfer: false,
            },
          },
        ],
        params_name: {
          parking: "Приватна парковка",
          transfer: "Трансфер (за запитом)",
        },
        params: ["parking", "transfer"],
      },
    ],
  }),
  methods: {
    removeHolet(el) {
      this.hotels = this.hotels.filter((e) => e !== el);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.p1 {
  @include max(md) {
    font-size: 10px;
  }
}
.comparision_container {
  @include mb-140;

  @include max(lg) {
    padding: 0 56px;
  }
  @include max(md) {
    padding: 0 48px;
  }
  @include max(sm) {
    padding: 0 18px;
  }
}
.tables_container {
  background-color: #f0edea;
  padding: 28px 4px 4px;
  @include max(lg) {
    padding: 16px 4px 4px;
  }
  @include max(lg) {
    padding: 8px 4px 2px;
  }
}
.tables_container_wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @include max(lg) {
    justify-content: space-between;
  }
  @include max(sm) {
    flex-direction: column;
  }
}
.empty_column {
  @include max(lg) {
    display: none;
  }
}
.hotels_table {
  width: 100%;
  padding: 0 24px 0;
  @include max(lg) {
    padding: 0 16px 0;
  }
  @include max(lg) {
    padding: 0 8px 0;
  }
}
.hotel_wrapper {
  padding: 10px 4px 4px;
  height: 24.4vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .hotel__name,
  p {
    color: white;
  }
  @include max(lg) {
    height: 407px;
  }
  @include max(md) {
    height: 295px;
    padding: 14px 4px 4px;
  }
  @include max(md) {
    height: 300px;
    padding: 18px 5px 5px;
  }
}

.description_top,
.description_bottom_wrapper {
  padding: 0 14px;
  @include max(md) {
    padding: 0 10px;
  }
}
.stars_and_place {
  display: flex;
  align-items: center;
}
.horizontal_line {
  width: 32px;
  height: 1px;
  background: #ffffff;
  margin: 0 20px;
  opacity: 0.3;

  @include max(lg) {
    width: 20px;
    margin: 0 16px;
  }
  @include max(md) {
    margin: 0 9px;
  }
}
.stars_wrapper {
  img {
    width: 10px;
    margin-right: 6px;
    @include max(md) {
      width: 9px;
      margin-right: 5px;
    }
  }
  img:last-of-type {
    margin-right: 0px;
  }
}
.description_top {
  .hotel__name {
    font-size: 24px;
    margin-bottom: 4px;
    @include max(lg) {
      margin-bottom: 8px;
    }
    @include max(md) {
      font-size: 20px;
      margin-bottom: 6px;
    }
    @include max(md) {
      margin-bottom: 8px;
    }
  }
}

.coming {
  display: flex;
  align-items: center;
  margin: 2px 0 26px;

  @include max(lg) {
    margin: 8px 0 33px;
  }
  @include max(md) {
    margin: 0px 0 23px;
  }
  @include max(sm) {
    margin: 8px 0 33px;
  }

  p {
    opacity: 0.8;
  }
  .vertical_line {
    width: 1px;
    height: 12px;
    background: #ffffff;
    margin: 0 12px;
    opacity: 0.4;

    @include max(md) {
      margin: 0 10px;
    }
  }
}
.distance_block {
  display: flex;
  @include mb-16;
  transition: opacity ease-in-out 0.3s;

  @include max(lg) {
    margin-bottom: 22px;
  }

  @include max(md) {
    margin-bottom: 13px;
  }

  @include max(md) {
    margin-bottom: 23px;
  }

  &:hover {
    opacity: 0.8;
  }
  img {
    margin-right: 12px;
  }
}
.button_check {
  width: 100%;
  background-color: #fff;
  padding: 16px 0;
  text-align: center;
}
.hotel_container {
  width: calc((100% - 17px * 3) / 4);
  text-align: left;
  display: inline-block;
  position: relative;

  @include max(lg) {
    width: calc((100% - 17px * 2) / 3);
  }
  @include max(md) {
    width: calc((100% - 13px * 2) / 3);
  }
  @include max(sm) {
    width: 100%;
    margin-bottom: 7px;
  }

  &:not(:last-child) {
    margin-right: 17px;
    @include max(md) {
      margin-right: 13px;
    }
    @include max(sm) {
      margin-right: 0;
    }
  }
  &:first-child {
    margin-right: 12px;
  }

  .remove_button {
    width: fit-content;
    border-bottom: 1px dashed #000000;
    opacity: 0.4;
    margin: 20px auto 36px;
    cursor: pointer;

    @include max(lg) {
      margin: 32px auto;
    }
    @include max(md) {
      margin: 24px auto;
    }
    @include max(sm) {
      display: none;
    }
  }
}
.remove__button {
  display: none;
  @include max(sm) {
    display: block;
    position: absolute;
    top: 16px;
    right: 16px;
  }
}
</style>
