 <template>
  <div
    class="confirmation-request-modal"
    :class="{ 'small-size': smallSize, 'small-size-v2': smallSizeV2 }"
  >
    <p class="p2_light" v-html="data"></p>
    <TextArea v-if="addComment" :placeholder="'ваш коментар'" />
  </div>
</template>

<script>
export default {
  name: "ConfirmationRequestModal",
  props: {
    data: {
      type: String,
      default: "",
    },
    smallSize: {
      type: Boolean,
      default: false,
    },
    smallSizeV2: {
      type: Boolean,
      default: false,
    },
    addComment: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.confirmation-request-modal {
  .p2_light {
    a {
      text-decoration: underline;
    }
  }
  .textarea-block {
    width: 100%;
    textarea {
      font-family: AvenirNextCyrMedium;
      font-style: normal;
      font-weight: 450;
      font-size: 10px;
      line-height: 140%;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: #000000;
      &::placeholder {
        color: #000000;
        opacity: 1;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.confirmation-request-modal {

  //background-color: aqua;
  //width: 536px;
  width: auto;
  margin: 32px 0 56px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @include max(lg) {
    //width: 525px;
  }

  @include max(md) {
    margin: 24px 0 56px 0;
    //width: 435px;
  }

  @include max(sm) {
    margin: 24px 0 148px 0;
    //width: 85vw;
  }

  &.small-size {
    width: 25vw;
  }
  &.small-size-v2 {
    //width: 30vw;
    width: auto;
  }
  .textarea-block {
    margin-top: 64px;
  }
  .p2_light {
    width: 508px;
    @include max(lg) {
      width: 525px;
    }

    @include max(md) {
      width: 395px;
    }

    @include max(sm) {
      width: 92vw;
    }
  }
  .textarea-block {
    width: 460px;
    @include max(lg) {
      width: 368px;
    }

    @include max(md) {
      margin-top: 56px;
    }

    @include max(sm) {
      margin-top: 48px;
      width: 85vw;
    }
  }
}
</style>
