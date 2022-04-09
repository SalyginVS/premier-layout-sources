<template>
  <div id="menu-hotels">
    <div class="menu-hotels__item" v-for="item in menuHotels" :key="item.id">
      <p class="a2">{{ item.city }}</p>
      <div class="menu-hotels__item-hotels">
        <nuxt-link
          class="p2_light"
          tag="a"
          :to="hotel.link"
          v-for="hotel in item.hotels"
          :key="hotel.id"
          :class="{faded: isLinkFaded}"
          @mouseenter.native="mouseEnterMenuLink"
          @mouseleave.native="mouseLeaveMenuLink"
        >
          {{ hotel.name }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuHotels",
  data: () => ({

    menuHotels: [
      {
        id: 0,
        city: "КИЇВ",
        hotels: [
          {
            id: 0,
            name: "Premier Palace Hotel",
            link: "/",
          },
          {
            id: 1,
            name: "Premier Hotel Lybid",
            link: "/",
          },
          {
            id: 2,
            name: "Premier Hotel Rus",
            link: "/",
          },
        ],
      },
      {
        id: 1,
        city: "одесса",
        hotels: [
          {
            id: 0,
            name: "Premier Hotel Odesa",
            link: "/",
          },
          {
            id: 1,
            name: "Premier Geneva Hotel",
            link: "/",
          },
        ],
      },
      {
        id: 2,
        city: "ХАРКІВ",
        hotels: [
          {
            id: 0,
            name: "Premier Hotel Aurora",
            link: "/",
          },
          {
            id: 1,
            name: "Premier Hotel Cosmopolit",
            link: "/",
          },
        ],
      },
      {
        id: 3,
        city: "СУМИ",
        hotels: [
          {
            id: 0,
            name: "Premier Hotel Shafran",
            link: "/",
          },
        ],
      },
      {
        id: 4,
        city: "ДНІПРО",
        hotels: [
          {
            id: 0,
            name: "Premier Hotel Abri",
            link: "/",
          },
        ],
      },
      {
        id: 5,
        city: "МІШКОЛЬЦ (УГОРЩИНА)",
        hotels: [
          {
            id: 0,
            name: "Premier Hotel Miskolc",
            link: "/",
          },
        ],
      },
      {
        id: 6,
        city: "ПОЛЯНИЦЯ (БУКОВЕЛЬ)",
        hotels: [
          {
            id: 0,
            name: "Premier Resort Hotel",
            link: "/",
          },
        ],
      },
      {
        id: 7,
        city: "ОЛЕКСАНДРІЯ",
        hotels: [
          {
            id: 0,
            name: "Premier Compass Hotel Oleksandriya",
            link: "/",
          },
        ],
      },
      {
        id: 8,
        city: "ЛЬВІВ",
        hotels: [
          {
            id: 0,
            name: "Premier Hotel Dnister",
            link: "/",
          },
        ],
      },
      {
        id: 9,
        city: "ПОЛТАВА",
        hotels: [
          {
            id: 0,
            name: "Premier Hotel Palazzo",
            link: "/",
          },
        ],
      },
      {
        id: 10,
        city: "ПОЧАЇВ",
        hotels: [
          {
            id: 0,
            name: "Premier Hotel Pochaiv",
            link: "/",
          },
        ],
      },
      {
        id: 11,
        city: "ХЕРСОН",
        hotels: [
          {
            id: 0,
            name: "Premier Compass Hotel Kherson",
            link: "/",
          },
        ],
      },
    ],
    isLinkFaded: false
  }),
  methods: {
    mouseEnterMenuLink(event) {
      this.isLinkFaded = true
      // let links = [...this.$refs['header-link'], this.$refs['header-link-button']]
      // gsap.to(links.filter(el => el !== event.target), {
      //   autoAlpha: 0.4,
      //   duration: 0.5,
      // })
    },
    mouseLeaveMenuLink() {
      this.isLinkFaded = false
      // let links = [...this.$refs['header-link'], this.$refs['header-link-button']]
      // gsap.to(links, {
      //   autoAlpha: 1,
      //   duration: 0.5,
      //   clearProps: true
      // })
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";
#menu-hotels {
  width: 100%;
  height: 100%;
  padding: 56px 92px 178px 64px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 44px;
  grid-row-gap: 48px;

  @include max(lg) {
    padding: 40px 48px 61px 48px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    grid-column-gap: 0px;
    grid-row-gap: 40px;

    .menu-hotels__item {
      width: 100%;
      max-width: 30%;
    }
  }
  @include max(md) {
    padding: 32px 40px 64px 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    grid-column-gap: 0px;
    grid-row-gap: 40px;

    .menu-hotels__item {
      width: 100%;
      max-width: 44%;
    }
  }
  @include max(720) {
    padding: 32px 30px 64px 30px;
    grid-column-gap: 0px;
    grid-row-gap: 30px;

    .menu-hotels__item {
      max-width: 42%;
    }
  }

}
.menu-hotels__item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .a2 {
    text-transform: uppercase;
    letter-spacing: 0.24em;
    margin-bottom: 16px;

    @include max(lg){
      line-height: 132%;
    }
    @include max(md) {
      font-size: 9px;
      white-space: nowrap;
    }
    @include max(720) {
      font-size: 9px;
      line-height: 160%;
      white-space: unset;
    }
  }
  .menu-hotels__item-hotels {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .p2_light {
      white-space: nowrap;
      transition: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      &.faded {
        opacity: 0.5;
        &:hover {
          opacity: 1;
        }
      }
      &:not(:last-child) {
        margin-bottom: 8px;
      }

      @include max(lg) {
        font-size: 10px;
        white-space: unset;
      }

      @include max(md) {
        white-space: unset;
      }
    }
  }
}
</style>
