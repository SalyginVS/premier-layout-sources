<template>
  <div class="first_screen_header_container">
    <div class="header_el_wrapper" v-for="el in header_list" :key="el.id">
      <p class="a1" v-if="!el.link">{{ el.value }}</p>
      <p class="a1" v-else-if="el.link_type === 'internal'">
        <nuxt-link :to="el.link">{{ el.value }}</nuxt-link>
      </p>
      <p class="a1" v-html="getLinkTag(el)"></p>
      <div class="vertical_line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KebabHeader",
  props: {
    header_list: {
      type: Array,
      default: () => [],
      validator: (value) => {
        let is_valid = true;
        for (const el of value) {
          if (el.link_type) {
            is_valid =
              ["internal", "href", "tel", "email"].indexOf(el.link_type) !== -1;
            if (!is_valid) break;
          }
        }
        return is_valid;
      },
    },
  },
  methods: {
    getLinkTag(link) {
      if (link.link_type === "href") {
        return `<a href="${link.link}" target="_blank">${link.value}</a>`;
      } else if (link.link_type === "tel") {
        return `<a href="tel:${link.link}">${link.value}</a>`;
      } else if (link.link_type === "email") {
        return `<a href="mailto:${link.link}">${link.value}</a>`;
      }
    },
  },
};
</script>


<style>

.first_screen_header_container a {
  cursor: pointer;
  opacity: 0.8;
  color: #ffffff;
  transition: opacity 0.4s ease;
}
.first_screen_header_container a:hover {
  opacity: 1;
}
</style>

<style lang="scss" scoped>

@import "../../assets/scss/utils.scss";

.vertical_line {
  height: 1px;
  width: 32px;
  margin: 0 24px;
  background: #ffffff;
  opacity: 0.2;

  @include max(lg) {
    margin: 0 16px;
  }
  @include max(md) {
  }
  @include max(sm) {

  }
}
.first_screen_header_container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  p,
  a {
    cursor: pointer;
    opacity: 0.8;
    color: #ffffff;
  }
}
.header_el_wrapper {
  display: flex;
  align-items: center;
}
.header_el_wrapper:last-of-type {
  .vertical_line {
    display: none;
  }
}
</style>
