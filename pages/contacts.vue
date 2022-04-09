<template>
  <div id="resraurants_and_bars">
    <HeaderBlock />
    <BreadCrumbs :crumbs="crumbs" :light_style="true" />
    <SmallFirstScreen :image="first_screen.img" :title="first_screen.title">
      <KebabFooter :footer_list="footer_list" />
    </SmallFirstScreen>
    <ContactsCentralDepartment />
    <ContactsCorporative />
    <ContactsHotels />
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";

import SmallFirstScreen from "~/blocks/globals/SmallFirstScreen";

import BreadCrumbs from "~/components/BreadCrumbs";
import ContactsCentralDepartment from "~/blocks/contacts/ContactsCentralDepartment";
import ContactsCorporative from "~/blocks/contacts/ContactsCorporative";
import ContactsHotels from "~/blocks/contacts/ContactsHotels";
import AboutBrands from "~/blocks/brands/AboutBrands";
import KebabFooter from "~/blocks/globals/KebabFooter";
//static_info
import { contacts_footer } from "~/assets/js_static_data/footers_first_screens";

export default {
  components: {
    HeaderBlock,
    BreadCrumbs,
    SmallFirstScreen,
    ContactsCentralDepartment,
    ContactsCorporative,
    ContactsHotels,
    KebabFooter
  },
  data: () => ({
    footer_list: contacts_footer,
    first_screen: {
      img: require("~/static/images/brands_fs.jpg"),
      title: "контакти",
    },
    crumbs: ["головна мережІ", "контакти"],
  }),
};
</script>

<style lang="scss" scoped>
</style>
