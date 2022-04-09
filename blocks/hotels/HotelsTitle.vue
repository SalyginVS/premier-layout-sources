<template>
  <div id="hotel_title_container">
    <div class="main-wrapper">
      <div class="titles_and_filters">
        <div class="left_titles">
          <p class="little_title">ГОТЕЛІ premier</p>
          <h3 class="gold_text_header gold_text italic">Відпочиньте в</h3>
          <h3>наших готелях</h3>
        </div>

        <div class="filters_position">
          <div class="filters">
            <div class="filter_wrapper">
              <!-- <p class="a1">{{ filter }}</p>
            <img src="~/static/images/plus.svg" alt /> -->
              <SelectBlockWithPlus
                :name="'місто'"
                :options="optionsCity"
                @change="city = $event.value"
              />
            </div>
            <div class="filter_wrapper">
              <SelectBlockWithPlus
                :name="'Інтереси'"
                :options="optionsInterests"
                :positionRight="true"
                @change="interests = $event.value"
              />
            </div>
            <div class="filter_wrapper">
              <SelectBlockWithPlus
                :name="'Оцінка гостей'"
                :options="optionsGuestRating"
                @change="guestRating = $event.value"
              />
            </div>
            <div class="filter_wrapper">
              <SelectBlockWithPlus
                :name="'Бренд'"
                :options="optionsBrand"
                :positionRight="true"
                @change="brand = $event.value"
              />
            </div>
            <div class="filter_wrapper">
              <SelectBlockWithPlus
                :name="'Зручності'"
                :options="optionsСomfort"
                @change="comfort = $event.value"
              />
            </div>
            <div class="filter_wrapper">
              <SelectBlockWithPlus
                :name="'Рейтинг готелю'"
                :options="optionsHotelRating"
                :positionRight="true"
                @change="hotelRating = $event.value"
              />
            </div>
          </div>
          <div v-if="line" class="line-simple"></div>
        </div>
      </div>
    </div>
    <div class="hotels_container">
      <div class="main-wrapper">
        <div v-if="isPopUpVisible" class="filters_pop-up">
          <div class="pop-up_body">
            <div @click="popUpVisible" class="pop-up_back">
              <svg
                width="5"
                height="8"
                viewBox="0 0 5 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  d="M1 7.5L4 4L1 0.5"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="a1">назад</div>
            </div>

            <div class="pop-up_list">
              <div class="list_options">
                <div class="option_title">ПО МІСТУ</div>

                <div v-for="option in optionsCity" :key="option.title">
                  {{ option.title }}
                </div>
              </div>
              <div class="list_options">
                <div class="option_title">ІНТЕРЕСИ</div>

                <div v-for="option in optionsInterests" :key="option.title">
                  {{ option.title }}
                </div>
              </div>
              <div class="list_options">
                <div class="option_title">ОЦІНКА ГОСТЕЙ</div>

                <div v-for="option in optionsGuestRating" :key="option.title">
                  {{ option.title }}
                </div>
              </div>
              <div class="list_options">
                <div class="option_title">БРЕНД</div>

                <div v-for="option in optionsBrand" :key="option.title">
                  {{ option.title }}
                </div>
              </div>
              <div class="list_options">
                <div class="option_title">ЗРУЧНОСТІ</div>

                <div v-for="option in optionsСomfort" :key="option.title">
                  {{ option.title }}
                </div>
              </div>
              <div class="list_options">
                <div class="option_title">РЕЙТИНГ ГОТЕЛЮ</div>

                <div v-for="option in optionsHotelRating" :key="option.title">
                  {{ option.title }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <header class="hotels_container_header">
          <div class="left_options">
            <div @click="popUpVisible" class="filter_option">
              <p class="a1">фільтри</p>
              <img src="~/static/icons/filter-icon.svg" alt="icon" />
            </div>

            <p class="a1">Знайдено 16 готелів</p>

            <a href="/" class="a1 left_options__link main-link"
              @click.prevent="openHotelsMapModal"
              >готелі на карті
            </a>
          </div>
          <div class="sorting_wrapper">
            <a
              href="/"
              class="a1 left_options__link main-link"
              @click.prevent="openHotelsMapModal"
              >готелі на карті
            </a>

            <!-- <p class="a1">Сортувати за:</p>
          <img src="~/static/images/plus.svg" alt /> -->
            <SelectBlockWithPlus
              :name="'Сортувати за:'"
              :options="optionsSort"
              :positionRight="true"
              @change="sort = $event.value"
            />
          </div>
        </header>

        <OneHotel v-for="index in 3" :key="index" />
      </div>

      <LongDescription :description="longDescription" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import OneHotel from "~/blocks/hotels/OneHotel";

export default {
  name: "HotelsTitle",
  components: {
    OneHotel,
  },

  data: () => ({
    city: "",
    optionsCity: [
      {
        title: "Дніпро",
        value: "Дніпро",
      },
      {
        title: "Харків",
        value: "Харків",
      },
      {
        title: "Херсон",
        value: "Херсон",
      },
      {
        title: "Київ",
        value: "Київ",
      },
      {
        title: "Львів",
        value: "Львів",
      },
    ],
    interests: "",
    optionsInterests: [
      {
        title: "Інтереси1",
        value: "Інтереси1",
      },
      {
        title: "Інтереси2",
        value: "Інтереси2",
      },
      {
        title: "Інтереси3",
        value: "Інтереси3",
      },
      {
        title: "Інтереси4",
        value: "Інтереси4",
      },
      {
        title: "Інтереси5",
        value: "Інтереси5",
      },
    ],
    guestRating: "",
    optionsGuestRating: [
      {
        title: "Оцінка1",
        value: "Оцінка1",
      },
      {
        title: "Оцінка2",
        value: "Оцінка2",
      },
      {
        title: "Оцінка3",
        value: "Оцінка3",
      },
      {
        title: "Оцінка4",
        value: "Оцінка4",
      },
      {
        title: "Оцінка5",
        value: "Оцінка5",
      },
    ],
    brand: "",
    optionsBrand: [
      {
        title: "Бренд1",
        value: "Бренд1",
      },
      {
        title: "Бренд2",
        value: "Бренд2",
      },
      {
        title: "Бренд3",
        value: "Бренд3",
      },
      {
        title: "Бренд4",
        value: "Бренд4",
      },
      {
        title: "Бренд5",
        value: "Бренд5",
      },
    ],
    comfort: "",
    optionsСomfort: [
      {
        title: "Зручності1",
        value: "Зручності1",
      },
      {
        title: "Зручності2",
        value: "Зручності2",
      },
      {
        title: "Зручності3",
        value: "Зручності3",
      },
      {
        title: "Зручності4",
        value: "Зручності4",
      },
      {
        title: "Зручності5",
        value: "Зручності5",
      },
    ],
    hotelRating: "",
    optionsHotelRating: [
      {
        title: "Рейтинг1",
        value: "Рейтинг1",
      },
      {
        title: "Рейтинг2",
        value: "Рейтинг2",
      },
      {
        title: "Рейтинг3",
        value: "Рейтинг3",
      },
      {
        title: "Рейтинг4",
        value: "Рейтинг4",
      },
      {
        title: "Рейтинг5",
        value: "Рейтинг5",
      },
    ],
    sort: "",
    optionsSort: [
      {
        title: "містом",
        value: "місто",
      },
      {
        title: "Інтересами",
        value: "Інтереси",
      },
      {
        title: "Оцінкою гостей",
        value: "Оцінка гостей",
      },
      {
        title: "Брендом",
        value: "Бренд",
      },
      {
        title: "Зручностю",
        value: "Зручності",
      },
      {
        title: "Рейтингом готелю",
        value: "Рейтинг готелю",
      },
    ],

    filters: [
      "місто",
      "Інтереси",
      "Оцінка гостей",
      "Бренд",
      "Зручності",
      "Рейтинг готелю",
    ],
    longDescription: {
      title: "Про наши отели",
      description:
        "Високий рівень залучення представників цільової аудиторії є чітким доказом простого факту: реалізація намічених планових завдань вимагає від нас аналізу відповідних умов активізації. Попередні висновки невтішні: обраний нами інноваційний шлях безпосередньо залежить від нових принципів формування матеріально-технічної та кадрової бази! Повсякденна практика показує, що нова модель організаційної діяльності відіграє визначальне значення для позицій, займаних учасниками щодо поставлених завдань. Високий рівень залучення представників цільової аудиторії є чітким доказом простого факту: існуюча теорія безпосередньо залежить від моделі розвитку. Лише зроблені на базі інтернет-аналітики висновки являють собою не що інше, як квінтесенцію перемоги маркетингу над розумом і повинні бути вказані як претенденти на роль ключових факторів. Є спірна точка зору, яка говорить приблизно наступне: багато відомих осіб будуть в рівній мірі надані самі собі. Високий рівень залучення представників цільової аудиторії є чітким доказом простого факту: реалізація намічених планових завдань вимагає від нас аналізу відповідних умов активізації. Попередні висновки невтішні: обраний нами інноваційний шлях безпосередньо залежить від нових принципів формування матеріально-технічної та кадрової бази! Повсякденна практика показує, що нова модель організаційної діяльності відіграє визначальне значення для позицій, займаних учасниками щодо поставлених завдань. Високий рівень залучення представників цільової аудиторії є чітким доказом простого факту: існуюча теорія безпосередньо залежить від моделі розвитку. Лише зроблені на базі інтернет-аналітики висновки являють собою не що інше, як квінтесенцію перемоги маркетингу над розумом і повинні бути вказані як претенденти на роль ключових факторів. Є спірна точка зору, яка говорить приблизно наступне: багато відомих осіб будуть в рівній мірі надані самі собі.",
      button: "Детальніше",
    },
    isPopUpVisible: false,
    // details_is_open: false,
  }),
  props: {
    line: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    popUpVisible() {
      this.isPopUpVisible = !this.isPopUpVisible;
      if (this.isPopUpVisible == true) {
        document.body.style.overflow = "hidden";
      } else if (this.isPopUpVisible == false) {
        document.body.style.overflow = "auto";
      }
    },
    ...mapMutations('modals', {
      openHotelsMapModal: 'openHotelsMapModal'
    })
  },
  // methods: {
  //   openText() {
  //     this.details_is_open = true;
  //   },
  // },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

#hotel_title_container {
  margin-top: 110px;

  .main-wrapper {
    @include min(lg) {
      max-width: none;
      margin: 0 0 0 auto;
    }
  }

  @include max(lg) {
    margin-top: 94px;
  }
  @include max(md) {
    margin-top: 87px;
  }
  @include max(sm) {
    margin-top: 80px;
  }
}
.titles_and_filters {
  @include min(lg) {
    min-width: 1170px;
    width: 87%;
    margin-left: auto;
  }

  display: flex;
  justify-content: space-between;
}
.left_titles {
  //@include pl-168;

  @include min(lg) {
    padding-left: 0;
  }

  @include max(lg) {
    padding-left: 134px;
    padding-top: 21px;
  }

  @include max(md) {
    padding-left: 48px;
    padding-top: 25px;
  }

  @include max(690) {
    padding-left: 14px;
    padding-top: 0px;
  }
}
.little_title {
  @include mb-22;

  @include max(lg) {
    @include mb-16;
  }
}

.filters_pop-up {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10001;

  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 20;
  }
  @include min(sm) {
    display: none;
  }
}
.pop-up_body {
  overflow: auto;
  position: relative;
  z-index: 75;
  background-color: #f5f5f5;
  width: 98%;
  height: 98%;

  padding: 32px 18px 15px;
}
.pop-up_back {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  width: 55px;

  svg {
    margin-top: 1.5px;
    transform: rotate(180deg);
  }
}
.list_options {
  div {
    cursor: pointer;
    display: table;
    padding-top: 10px;
    font-size: 12px;

    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 180%;
    letter-spacing: 0.06em;
    color: #000000;
  }
  .option_title {
    cursor: pointer;
    display: inline-block;
    padding-top: 40px;
    padding-bottom: 5px;

    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 140%;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: #000000;
  }
}
.filters {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-row-gap: 20px;
  background: #f5f4f3;
  padding: 48px;
  padding-top: 28px;
  padding-right: 198px;
  padding-bottom: 18px;
  position: relative;
  z-index: 1;

  @include max(xl) {
    padding: 30px;
  }

  @include max(lg) {
    grid-row-gap: 0px;
    padding: 28px 27px 27px 27px;
  }
  @include max(md) {
    padding: 20px 27px 19px 27px;
  }
}
.filter_wrapper {
  display: flex;
  img {
    margin-left: 8px;
  }
}
.filters_position {
  width: 600px;
  position: relative;
  .line-simple {
    top: unset;
    left: unset;
    bottom: 65px;
    right: 245px;

    @include max(lg) {
      bottom: 55px;
      right: 143px;
    }

    @include max(md) {
      bottom: 54px;
      right: 168px;
    }

    @include max(md) {
      bottom: 54px;
      right: 168px;
    }

    // z-index: -1;
  }

  @include max(lg) {
    width: 444px;
  }
  @include max(lg) {
    width: 436px;
  }
  @include max(sm) {
    display: none;
  }
}

.hotels_container {
  margin: 155px auto 0;
  width: auto;
  max-width: 1104px;

  @include max(lg) {
    margin: 124px auto 0;
    max-width: 756px;
  }
  @include max(md) {
    margin: 112px 18px 0;
    width: auto;
  }
  // @include max(750) {
  //   max-width: 645px;
  // }
  @include max(sm) {
    margin: 80px 18px 0;
    width: auto;
  }
}
.hotels_container_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @include mb-80;

  @include max(sm) {
    margin-bottom: 32px;
  }
  p {
    cursor: pointer;
  }
}
.left_options {
  display: flex;

  p {
    @include mr-40;
  }
  .left_options__link {
    color: rgba(#000000, 0.5);
    &.main-link {
      border-bottom: 1px dashed rgba(#000000, 0.5);
    }

    @include max(sm) {
      display: none;
    }
  }

  @include max(sm) {
    flex-direction: column;
  }
}
.filter_option {
  display: flex;
  justify-content: space-between;
  width: 72px;
  margin-bottom: 40px;
  p {
    margin-right: 0;
  }
  img {
    margin-top: 1px;
    height: 10px;
  }
  &:hover {
    cursor: pointer;
  }

  @include min(sm) {
    display: none;
  }
}
.sorting_wrapper {
  display: flex;
  img {
    margin-left: 8px;
  }

  .left_options__link {
    margin: 10px auto 26px;
    display: none;
    color: rgba(#000000, 0.5);
    &.main-link {
      width: 109px;
      border-bottom: 1px dashed rgba(#000000, 0.5);
    }

    @include max(sm) {
      display: block;
    }
  }

  @include max(sm) {
    flex-direction: column;
  }
}
</style>
