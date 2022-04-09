<template>
  <div class="alert_sale_booking">
    <p class="a1">
      ви найшли найкращу ціну від <span>7000₴</span> в booking.com
    </p>
  </div>
</template>

<script>
export default {
  name: "AlertSaleBooking",
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";
.alert_sale_booking {
  padding: 19px 0 19px 24px;
  width: 396px;
  background-color: rgba(#f0edea, 0.3);

  .a1 {
    max-width: 220px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 450;
    line-height: 156%;
    span {
      color: rgb(0, 0, 0);
    }
  }
}
</style>