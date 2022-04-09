<template>
  <div class="contact_block" :class="[{ normal_mode }, classes]">
    <template v-if="contactsBlock">
      <p class="a1">
        <span>{{ contactsBlock.title }}</span>
      </p>
      <p class="a1">
        <a class="hovered_link" target="_blank" :href="`mailto:${contactsBlock.email}`">{{
          contactsBlock.email
        }}</a>
      </p>
      <p class="a1">
        <a class="hovered_link" :href="`tel:${contactsBlock.number}`">{{ contactsBlock.number }}</a>
      </p>
    </template>
    <template v-else>
      <p class="a1">
        <a class="hovered_link" href="https://goo.gl/maps/EnuuTZJEmsM1yDm68" target="_blank"
          >бул. Т. Шевченко / ул. Пушкинская, 5-7/29, Киев</a
        >
      </p>
      <p class="a1">
        <a class="hovered_link" href="mailto:reservation@premier-palace.com" target="_blank"
          >reservation@premier-palace.com</a
        >
      </p>
      <p class="a1 phones">
        <a class="hovered_link phone_link" href="tel:+38 044 359 08 08">+38 044 359 08 08</a>
        <a class="hovered_link phone_link" href="tel:+38 044 590 69 80">+38 044 590 69 80</a>
      </p>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    normal_mode: {
      type: Boolean,
      default: false,
    },
    contactsBlock: {
      type: Object,
    },
    classes: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.contact_block {
  @include mt-64;
  padding: 40px;
  width: 100%;
  background-color: rgba(#f0edea, 0.5);
  height: fit-content;
  @include max(1439) {
    display: flex;
    flex-direction: column;
    // flex-flow: row wrap;
  }
  @include max(lg) {
    padding: 42px 39px;
  }
  @include max(md) {
    padding: 32px;
  }
  @include max(sm) {
    background-color: unset;
    padding: 0;
  }
  p:not(:last-of-type) {
    // @include mb-24;
    margin-bottom: 22px;
    font-weight: 450;
    @include max(sm) {
      margin-bottom: 24px;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
  .a1 + .a1 {
    width: 100%;
    @include max(1439) {
      margin-bottom: 16px;
    }
    @include max(1023) {
      margin-bottom: 12px;
    }
    @include max(767) {
      margin-bottom: 24px;
    }
  }
  .hovered_link {
    opacity: 0.5;
    transition-duration: 0.2s;
  }
  .hovered_link:hover {
      opacity: 0.9;
  }
  .a1 {
    &:hover {
      // transition-duration: 0.2s;
      // opacity: 0.9;
      // @include max(1439) {
        // &:nth-of-type(3) {
        //   order: 2;
        //   width: 100%;
        // }
        // &:nth-of-type(2) {
        //   order: 1;
        // }
        // &:nth-of-type(1) {
        //   order: 3;
        // }

        // @include max(1439) {
        //   &:nth-of-type(3) {
        //     order: 2;
        //     width: 100%;
        //   }
        //   &:nth-of-type(2) {
        //     order: 1;
        //   }
        //   &:nth-of-type(1) {
        //     order: 3;
        //   }
        // }
        // span {
        //   color: rgba(#171717, 0.8);
        // }
        // a {
        //   color: rgba(#171717, 0.9);
        //   display: inline-block;
        //   // margin-left: 24px;
        //   transition: color 0.3s ease-in-out;
        // }

        // &.phones {
        //   a {
        //     color: #171717;
        //     transition: color 0.3s ease-in-out;
        //     &:hover {
        //       color: rgba(#171717, 0.8);
        //     }
        //   }
        // }
      }
    //   p:last-of-type {
    //     margin-bottom: 0;
    //   }
    //   a:first-of-type {
    //     margin-left: 0;
    //   }
    // }
  }
}

.normal_mode {
  background: transparent;
  padding: 0;
  @include max(md) {
    max-width: 275px;
  }
  @include max(sm) {
    max-width: unset;
    width: 100%;
  }
}
.phone_link:not(:last-of-type) {
  margin-right: 24px;
}
</style>
