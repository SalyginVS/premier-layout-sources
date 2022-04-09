<template>
  <div class="custom_slider_foreground">
    <h4 class="js_hide_cursor main-content swiper-no-swiping">
      Стандартний номер
    </h4>
    <div class="room_description">
      <div class="room_description__row">
        <p class="p1 js_hide_cursor main-content swiper-no-swiping">
          Кімнат: 1
        </p>
        <div class="vertical_line"></div>
        <p class="p1 js_hide_cursor main-content swiper-no-swiping">
          Площа: 20 м2
        </p>
      </div>

      <div class="vertical_line"></div>
      <div class="room_description__row">
        <p class="p1 js_hide_cursor main-content swiper-no-swiping">
          До 4 осіб
        </p>
        <div class="vertical_line"></div>
        <p class="p1 js_hide_cursor main-content swiper-no-swiping">
          Двоспальне ліжко
        </p>
      </div>
    </div>
    <div class="buttons_wrapper">
      <nuxt-link
        to="/room_selection/select_by_room"
        class="check_price button_sizes js_hide_cursor main-content"
      >
        <p class="a1">перевірити ціни</p>
      </nuxt-link>
      <nuxt-link
        to="/one_room"
        class="a1 second_button menu_button js_hide_cursor main-content"
        >детальней про номер</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomSliderForeground",

  methods: {
    log(message) {
      console.error(message);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.custom_slider_foreground {
  position: absolute;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 16.05%,
    rgba(0, 0, 0, 0.512) 100%
  );
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 48px;
  z-index: 1;
  @include max(lg) {
    padding: 24px;
  }
  @include max(sm) {
    position: relative;
    top: -4px;
    height: fit-content;
    padding: 24px;
    background: #f0edea;
  }
}
h4,
p {
  color: #ffffff;
  @include max(sm) {
    color: #000000;
  }
}
.room_description {
  display: flex;
  align-items: center;
  margin: 16px 0 48px;
  @include max(lg) {
    margin: 18px 0 32px;
  }
  @include max(md) {
    margin: 12px 0 24px;
  }
  @include max(sm) {
    margin: 10px 0 0;
    flex-wrap: wrap;
  }
  &__row {
    display: flex;
    align-items: center;
    .vertical_line {
      @include max(sm) {
        display: block;
        margin: 0 8px;
        background: #000000;
      }
    }
    &:last-child {
      .vertical_line {
        @include max(sm) {
          order: 1;
        }
      }
      p {
        @include max(sm) {
          &:first-child {
            order: 2;
          }

          &:last-child {
            order: 0;
          }
        }
      }
    }
  }
  p {
    opacity: 0.7;
  }
}
.vertical_line {
  height: 14px;
  width: 1px;
  max-width: 1px;
  background: #ffffff;
  opacity: 0.4;
  margin: 0 16px;
  @include max(lg) {
    margin: 0 12px;
  }
  @include max(md) {
    margin: 0 8px;
  }
  @include max(sm) {
    display: none;
  }
}

.buttons_wrapper {
  display: flex;
  align-items: center;
  @include max(sm) {
    display: none;
  }

  .a1 {
    color: #ffffff;
  }
}
.check_price {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  pointer-events: all;
  .a1 {
    color: #000000;
  }
}
.menu_button {
  pointer-events: all;
  cursor: pointer;
}
.main-content {
  pointer-events: all;
  user-select: text;
}
</style>
