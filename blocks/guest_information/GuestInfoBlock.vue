<template>
  <div class="guest_info_block">
    <InfoTitleBlock :dataInfo="dataInfo"/>
    <div class="data-wrapper">
      <DataGuestBlock v-for="data in guestData" :key="data.id" :data="data" />
    </div>
  </div>
</template>

<script>
import InfoTitleBlock from "~/blocks/guest_information/InfoTitleBlock";
import DataGuestBlock from "~/blocks/guest_information/DataGuestBlock";

export default {
  name: "GuestInfoBlock",
  props: {
    dataInfo:{
      type: Object,
      default: ()=>({})
    }
  },
  components: {
    InfoTitleBlock,
    DataGuestBlock,
  },
  data() {
    return {

      guestData: [
        {
          id: 0,
          title: "Дані першого гостя",
          inputOptions: [
            {
              id: 0,
              type: "text",
              placeholder: "Ім'я*",
            },
            {
              id: 1,
              type: "text",
              placeholder: "Прізвище*",
            },
            {
              id: 2,
              type: "email",
              placeholder: "E-mail*",
            },
            {
              id: 3,
              type: "text",
              placeholder: "Телефон*",
            },
          ],
        },
        {
          id: 1,
          title: "Дані другого гостя",
          inputOptions: [
            {
              id: 0,
              type: "text",
              placeholder: "Ім'я",
            },
            {
              id: 1,
              type: "text",
              placeholder: "Прізвище",
            },
          ],
        },
        {
          id: 2,
          title: "Дані дитини",
          inputOptions: [
            {
              id: 0,
              type: "text",
              placeholder: "Ім'я",
            },
            {
              id: 1,
              type: "text",
              placeholder: "Прізвище",
            },
          ],
        },
        {
          id: 3,
          title: "Ваші побажання",
          type: "textarea",
          textarea: {
            placeholder: "Коментарі",
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

@import "../../assets/scss/utils.scss";

.guest_info_block {
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  background: rgba(#f0edea, 0.5);

  @include max (sm){
    margin-bottom: 18px;
  }

  .data-wrapper {
    padding-bottom: 72px;

    @include max(lg){
      padding-bottom: 48px;
    }
    @include max(md){
      padding-bottom: 40px;
    }
    @include max(sm){
      padding-bottom: 32px;
    }

  }
  .data_guest_block{
    &:last-child{
      border-bottom: none;
      padding-bottom: 0;
    }
  }
}
</style>
