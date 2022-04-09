<template>
  <div
    class="hotel-contact-block"
    :style="`background-image: url(${contact.img})`"
  >
    <h5 class="title">
      {{ contact.title }}
    </h5>
    <div class="numbers">
      <div class="numbers_phone">
        <a
          :href="`tel:${phone}`"
          class="a2"
          v-for="phone in contact.phones"
          :key="phone.index"
        >
          {{ phone }}
        </a>
      </div>

      <div class="additional-contact-block">
        <div class="emails">
          <a
            target="_blank"
            class="a2"
            :href="`mailto:${email}`"
            v-for="email in contact.emails"
            :key="email.index"
            >{{ email }}</a
          >
        </div>
        <a target="_blank" class="a2 address" href="/">{{ contact.address }}</a>
      </div>
    </div>
    <div class="emails">
      <a
        target="_blank"
        class="a2"
        :href="`mailto:${email}`"
        v-for="email in contact.emails"
        :key="email.index"
        >{{ email }}</a
      >
    </div>

    <a target="_blank" class="a2 address" href="/">{{ contact.address }}</a>
    <div class="links">
      <a
        target="_blank"
        :href="link.href"
        class="p2_light"
        v-for="link in contact.links"
        :key="link.id"
        >{{ link.link }}</a
      >
    </div>
    <div class="social-media">
      <a
        target="_blank"
        class="icon"
        :href="media.link"
        v-for="media in contact.socialMedia"
        :key="media.id"
        ><img :src="media.img" alt="icon"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotelContactBlock",
  props: {
    contact: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";

.hotel-contact-block {
  width: 100%;
  min-height: 498px;
  padding: 0 0 40px 40px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  background-size: cover;
  background-position: center;

  @include max(lg) {
    min-height: 440px;
    padding: 0 0 32px 32px;
  }

  @include max(md) {
    min-height: 302px;
    padding: 0 0 40px 40px;
  }

  @include max(sm) {
    min-height: 478px;
    padding: 0 0 18px 18px;
  }

  .title {
    margin-top: auto;
    margin-bottom: 24px;
    color: #ffffff;

    @include max(lg) {
      margin: 32px 0 24px;
    }
    @include max(md) {
      margin: 32px 0 2px;
    }

    @include max(md) {
      margin: 24px 0 16px;
    }
  }
  .numbers {
    display: flex;
    @include max(lg) {
      order: 2;
      margin-bottom: 32px;
    }

    @include max(md) {
      order: 2;
      margin-bottom: 24px;
    }

    @include max(sm) {
      order: 2;
      margin-bottom: 32px;
    }

    .numbers_phone {
      margin-bottom: 24px;
      display: flex;
      flex-direction: column;
      .a2 {
        transition: opacity 0.3s ease-in-out;
        &:hover {
          opacity: 0.7;
        }
        &:not(:last-child) {
          margin-bottom: 4px;

          @include max(lg) {
            margin-bottom: 16px;
          }
        }
      }
    }
  }
  .emails {
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;

    @include max(lg) {
      order: 2;
      margin-bottom: 32px;
    }

    @media all and (min-width: 650px) and (max-width: 900px) {
      display: none;
    }

    .a2 {
      transition: opacity 0.3s ease-in-out;
      &:hover {
        opacity: 0.7;
      }
      &:not(:last-child) {
        margin-bottom: 24px;

        @include max(lg) {
          margin-bottom: 16px;
        }
      }
    }
  }
  .a2 {
    color: #ffffff;
    letter-spacing: 0.24em;
    text-transform: uppercase;

    &.address {
      line-height: 114%;
      margin-bottom: 8px;

      @include max(lg) {
        margin-bottom: 69px;
      }

      @media all and (min-width: 650px) and (max-width: 900px) {
        display: none;
      }

      @include max(sm) {
        margin-bottom: 138px;
      }
    }
  }
  .links {
    margin-bottom: 24px;
    display: flex;
    align-items: center;

    @include max(lg) {
      order: 7;
      margin-bottom: 0;
      margin-top: 32px;
    }

    @include max(md) {
      order: 1;
      margin-top: 0;
      margin-bottom: 48px;
    }

    @include max(sm) {
      order: 7;
      margin-top: 30px;
      margin-bottom: 0px;
    }

    .p2_light {
      color: #ffffff;
      text-decoration: underline;
      transition: opacity 0.3s ease-in-out;
      &:not(:last-child) {
        margin-right: 24px;
      }
      &:hover {
        opacity: 0.7;
      }
    }
  }
  .social-media {
    @include max(lg) {
      order: 5;
    }
    .icon {
      transition: opacity 0.3s ease-in-out;
      &:not(:last-child) {
        margin-right: 20px;
      }
      &:hover {
        opacity: 0.7;
      }
    }
  }
  .additional-contact-block {
    margin-left: 40px;
    display: none;
    width: fit-content;
    //background-color: rgb(0, 0, 0);

    @media all and (min-width: 650px) and (max-width: 900px) {
      display: block;
    }

    .emails,
    .address {
      display: block;
      margin: 0;
    }

    .emails {
      display: flex;

      div {
        margin-bottom: 16px;
      }
    }
    .address {
      margin-top: 16px;
    }
  }
}
</style>
