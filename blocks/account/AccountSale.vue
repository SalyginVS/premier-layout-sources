<template>
  <div class="account-sale">
    <div @click="copySale" class="sale">
      <p ref="sale" class="a2">{{ sale }}</p>
      <img src="~/static/icons/sale-icon.svg" alt="icon" />
    </div>
    <p class="p2_light">Це ваш код знижки</p>
  </div>
</template>

<script>
export default {
  name: "AccountSale",
  props: {
    sale: {
      type: String,
      default: "",
    },
  },
  methods: {
    copySale(e) {
      const { sale } = this.$refs;
      const copyText = document.createElement("textarea");
      copyText.value = sale.innerHTML;
      document.body.appendChild(copyText);
      copyText.select();
      document.execCommand("copy");
      document.body.removeChild(copyText);
    },
  },
};
</script>

<style lang="scss" scoped>
.account-sale {
  width: 100%;
  padding-left: 100px;
  display: flex;
  align-items: center;
  .sale {
    width: fit-content;
    padding: 9px 14px 10px 14px;
    margin-right: 16px;
    display: flex;
    align-items: baseline;
    justify-content: center;
    background: rgba(240, 237, 234, 0.3);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    &:hover {
      opacity: 0.6;
    }
    .a2 {
      text-transform: uppercase;
      margin-right: 8px;
    }
  }
}
</style>