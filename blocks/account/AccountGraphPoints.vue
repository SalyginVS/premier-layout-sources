<template>
  <div
    class="account-graph-points"
    :class="{ simpleGraph: simpleGraph, account_profile: isAccountProfile }"
  >
    <div class="points">
      <h3 class="gold_text">
        {{ data.count }}
      </h3>
      <p class="a2">бонусних балів</p>
    </div>
    <div class="message">
      <img src="~/static/icons/icon-alert.svg" alt="icon" />
      <span v-if="data.count !== '4234'" class="a2">
        наступний рівень
        <span>{{ this.data.nextLevel }} балів</span>
      </span>
      <span v-else class="a2">Ви досягли <span> max рівня</span></span>
    </div>

    <svg class="graph" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="134" cy="134" r="134" fill="#F8F7F6" />
      <circle cx="134" cy="134" r="133.5" stroke="black" stroke-opacity="0.1" />
      <path
        opacity="0.24"
        d="M9.21569 180.02C17.6264 202.826 32.126 222.89 51.1392 238.034C70.1524 253.178 92.9521 262.821 117.061 265.917C141.17 269.013 165.667 265.442 187.889 255.593C210.111 245.745 229.21 229.994 243.109 210.054C257.009 190.113 265.178 166.744 266.729 142.487C268.28 118.229 263.154 94.0105 251.907 72.4619C240.66 50.9133 223.723 32.8588 202.936 20.26C182.149 7.66124 158.307 1 134 1"
        stroke="black"
        stroke-width="2"
      />
    </svg>

    <svg class="graph-simple" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="82" cy="82" r="82" fill="#F8F7F6" />
      <circle cx="82" cy="82" r="81.5" stroke="black" stroke-opacity="0.1" />
      <path
        opacity="0.24"
        d="M5.53442 110.2C10.6883 124.175 19.5734 136.47 31.2244 145.75C42.8753 155.03 56.8466 160.939 71.6202 162.836C86.3938 164.733 101.405 162.545 115.022 156.51C128.64 150.475 140.343 140.824 148.86 128.604C157.378 116.385 162.383 102.065 163.334 87.2005C164.284 72.336 161.143 57.4952 154.251 44.2906C147.36 31.0859 136.981 20.0225 124.243 12.3022C111.505 4.58189 96.8949 0.5 82 0.5"
        stroke="black"
      />
    </svg>

    <svg
      class="graph-simple-mob"
      width="107"
      height="107"
      viewBox="0 0 107 107"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="53.5" cy="53.5" r="53.5" fill="#F8F7F6" />
      <circle cx="53.5" cy="53.5" r="53" stroke="black" stroke-opacity="0.1" />
      <path
        opacity="0.24"
        d="M0.77392 71.8389C4.12554 80.9269 9.90358 88.9225 17.4803 94.9572C25.057 100.992 34.1426 104.835 43.7499 106.068C53.3573 107.302 63.1191 105.879 71.9746 101.955C80.8301 98.0298 88.4408 91.7534 93.9797 83.8071C99.5186 75.8607 102.774 66.5484 103.392 56.8819C104.01 47.2154 101.967 37.5643 97.4855 28.9773C93.0037 20.3902 86.2544 13.1956 77.9709 8.17504C69.6873 3.15448 60.1863 0.5 50.5 0.5"
        stroke="black"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "AccountGraphPoints",
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    simpleGraph: {
      type: Boolean,
      default: false
    },
    isAccountProfile: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
.account-graph-points {
  width: 268px;
  height: 268px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  .graph {
    display: none;
    @include min(1440) {
      display: block;
    }
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .points {
    display: flex;
    flex-direction: column;
    align-items: center;
    @include max(767) {
      width: 81px;
    }
    .gold_text {
      margin-bottom: 16px;
      @include max(767) {
        margin-bottom: 6px;
      }
    }
    .a2 {
      text-transform: uppercase;
      color: rgba(#000000, 0.3);
    }
  }
  .message {
    position: absolute;
    top: -62px;
    width: 168px;
    height: 62px;
    display: flex;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
    .a2 {
      width: 100%;
      padding: 12px 18px 13px 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-transform: uppercase;
      color: rgba(0, 0, 0, 0.5);
      line-height: 14px;
      > span {
        color: #000000;
      }
    }
  }
  &.simpleGraph {
    width: 164px;
    height: 164px;
    @include max(767) {
      height: 107px;
    }
    .gold_text {
      font-family: CormorantRegular;
      font-style: normal;
      font-weight: normal;
      font-size: 48px;
      line-height: 110%;
      @include max(1023) {
        font-size: 28px;
      }
    }
    .message {
      display: none;
    }
    .graph {
      display: none;
    }
    .graph-simple {
      display: block;
      @include max(767) {
        display: none;
      }
    }
    .graph-simple-mob {
      display: none;
      @include max(767) {
        display: block;
      }
    }
    .a2 {
      @include max(767) {
        text-align: center;
      }
    }
  }
}
/**account-profile page */
.account-graph-points {
  &.account_profile {
    @include max(1439) {
      width: 170px;
      height: 170px;
    }
    .points {
      width: auto;
    }
    .graph-simple-mob {
      display: none;
    }
    .graph-simple {
      display: none;
      @include max(1439) {
        display: block;
      }
    }
    .graph {
      display: block;
      @include max(1439) {
        display: none;
      }
    }
    svg {
      @include max(1439) {
        transform: translate(-46%, -50%);
      }
    }
    .gold_text {
      margin-bottom: 16px;
    }
  }
}
/**account-profile page */
</style>
