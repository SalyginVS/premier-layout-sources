<template>
  <div
    id="restaurant_description"
    class="about-type-one"
    :class="{
      halls_page: isHallsPage,
      managment_and_franchising_page: isManagmentAndFranchisingPage,
      consulting_page: isConsultingPage,
      suppliers_page: isSuppliersPage
    }"
  >
    <div class="main-wrapper">
      <div class="restaurant_description-wrapper">
        <div class="about-image_wrapper">
          <img :src="about_data.image" alt />
          <div v-if="line" class="line-simple"></div>
        </div>
        <div class="rest_and_bars_description">
          <div class="top_description">
            <p class="a1 little_title" v-if="about_data.little_title">
              {{ about_data.little_title }}
            </p>
            <h4 v-html="about_data.main_title"></h4>
            <AboutMainDescription :text="description" :maxLength="30" />
          </div>
          <div class="about_hotel_wrapper">
            <ContactsBlock :contactsBlock="contactsBlock" />
          </div>
          <div class="button_wrapper">
            <GoldButton
              :big_size="changeBtnSize ? false : true"
              :text="about_data.gold_button"
              v-if="about_data.gold_button"
            />
            <p class="a1 second_button" v-if="about_data.second_button">
              {{ about_data.second_button }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactsBlock from "~/blocks/globals/ContactsBlock";
import GoldButton from "~/components/GoldButton";
import AboutMainDescription from "~/blocks/globals/abouts/AboutMainDescription";
import { globalMixin } from "~/plugins/mixins";
export default {
  name: "AboutBlockTypeOne",
  mixins: [globalMixin],
  props: {
    about_data: {
      type: Object,
      default: {
        image: "",
        little_title: "",
        main_title: "",
        description: "",
        gold_button: "",
        second_button: ""
      }
    },
    contactsBlock: {
      type: Object
    },
    line: {
      type: Boolean,
      default: false
    },
    isHallsPage: {
      type: Boolean,
      default: false
    },
    changeBtnSize: {
      type: Boolean,
      default: false
    },
    isManagmentAndFranchisingPage: {
      type: Boolean,
      default: false
    },
    isConsultingPage: {
      type: Boolean,
      default: false
    },
    isSuppliersPage: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ContactsBlock,
    GoldButton,
    AboutMainDescription
  },
  computed: {
    description() {
      if (
        (this.isHallsPage || this.isManagmentAndFranchisingPage) &&
        this.breakpoints >= 768 &&
        this.breakpoints <= 1439
      ) {
        let pointerPos = this.about_data.description.indexOf(".");
        let textValue = this.about_data.description.slice(0, pointerPos + 1);
        return textValue;
      } else {
        return this.about_data.description;
      }
    }
  }
};
</script>
<style lang="scss">
@import "../../../assets/scss/utils.scss";
.managment_and_franchising_page,
.consulting_page {
  .about_hotel_wrapper {
    .contact_block {
      display: flex;
      flex-flow: row wrap;
      @include max(767) {
        .a1 {
          margin-bottom: 0;
        }
        .a1:nth-of-type(1) {
          order: 3;
          margin-top: 24px;
        }
        .a1:nth-last-of-type(2) {
          order: 1;
        }
        .a1:nth-of-type(3) {
          order: 2;
          margin-top: 24px;
        }
      }
    }
  }
}
.rest_and_bars_description {
  .button_wrapper {
      .gold_button {
        @include max(425) {
        width: 100%;
        }
      }
  }
}
</style>
<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";

#restaurant_description {
}
.restaurant_description-wrapper {
  display: flex;
  align-items: center;
  flex-flow: row;
  @include mt-140;
  background-color: #fbfbfb;
  @include max(1439) {
    margin-top: 124px;
  }
  @include max(1023) {
    margin-top: 112px;
  }
}
.about-image_wrapper {
  position: relative;
  width: 42.3vw;
  @include max(1439) {
    width: 41.4vw;
    height: 576px;
  }
  @include max(1023) {
    width: 42.4vw;
    height: 506px;
  }
  @include max(767) {
    height: 451px;
    width: 357px;
  }
  @include max(425){
    width:calc(100% - 18px);
  }
  img {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }
  .line-simple {
    left: unset;
    right: -240px;
    top: 100px;
  }
}
.little_title {
  margin-bottom: 23px;
}
.rest_and_bars_description {
  padding-left: 105px;
  flex: 1 0;
}
h4 {
  @include mb-40;
  @include max(1439) {
    font-size: 36px;
  }
}

.about_hotel_wrapper {
  display: flex;
  justify-content: space-between;
  .litlle_right_image {
    width: 343px;
  }
}

.top_description {
  padding-right: 164px;
  padding-left: 40px;
  @include min(1441) {
    max-width: 521px;
    padding-right: 0;
    padding-left: 0;
  }
  @include max(1439){
    padding-left:30px;
  }
}
.button_wrapper {
  display: flex;
  align-items: center;
  @include mt-64;
  padding-left: 40px;
}
/*managment_and_franchising_page && consulting_page */
.managment_and_franchising_page,
.consulting_page {
  .about-image_wrapper {
    .line-simple {
      @include max(1024) {
        top: 93%;
        right: -90px;
      }
      @include max(650) {
        display: none;
      }
    }
  }
  .top_description {
    @include max(1439) {
      padding-left: 35px;
      padding-right: 137px;
    }
    @include max(1023) {
      padding-left: 32px;
      padding-right: 49px;
    }
    @include max(767) {
      padding: 0;
      max-width: 339px;
    }
    h4 {
      @include max(1023){
        font-size:28px;
      }
      @include max(767) {
        width: 260px;
      }
    }
  }
  .rest_and_bars_description {
    flex: 1;
    padding-left: 105px;
    @include max(1439) {
      padding-left: 66px;
    }
    @include max(1023) {
      padding-left: 37px;
    }
    @include max(767) {
      margin-top: 32px;
      padding: 0 18px;
    }
  }
  .button_wrapper {
    @include max(1439) {
      margin-top: 56px;
    }
    @include max(1023){
      margin-top:48px;
    }
    @include max(767) {
      padding: 0;
      margin: 48px auto 0 auto;
    }
  }
  .restaurant_description-wrapper {
    @include max(768) {
      align-items: unset;
    }
    @include max(650) {
      flex-flow: row wrap;
      justify-content: center;
    }
    @include max(425) {
      justify-content: end;
    }
  }
}
.consulting_page {
  .button_wrapper {
    @include max(425) {
      .gold_button {
        margin: 0 auto;
      }
    }
  }
}
/*managment_and_franchising_page && consulting_page */

/**halls page && suppliers page */
.halls_page,
.suppliers_page {
  .restaurant_description-wrapper {
    // @include min(1441) {
    //   align-items: flex-start;
    // }
    // @include max(1024) {

    // }
    @include max(1439){
      margin: 125px 0;
    }
    @include max(1023) {
      align-items: unset;
      margin: 112px 0;
    }
    @include max(767) {
      flex-flow: row wrap;
      justify-content: center;
      margin: 80px 0;
    }
    @include max(425) {
      justify-content: end;
    }
  }
  .rest_and_bars_description {
    @include max(1439) {
      padding-left: 69px;
    }
    @include max(1023) {
      padding-left: 37px;
    }
    @include max(767) {
      padding: 0 18px;
      margin-top: 32px;
    }
    .top_description {
      padding-right: 133px;
      @include max(1023) {
        padding-left: 32px;
        padding-right: 49px;
      }
      @include max(767) {
        max-width: 339px;
        margin: 0 auto;
      }
      @include max(656) {
        padding: 0;
      }
      @include max(425){
        margin:0;
      }
      .little_title {
        margin-bottom: 16px;
        @include max(656) {
          display: none;
        }
      }
      h4 {
        @include max(1023) {
          font-size: 26px;
        }
      }
    }
    .about_hotel_wrapper {
      @include max(767) {
        max-width: 339px;
        margin:0 auto;
      }
      @include max(425){
        margin:0;
      }
      .contact_block {
        @include max(1439) {
          margin-top: 40px;
        }
        @include max(1023) {
          margin-top: 32px;
        }
        @include max(656) {
          background-color: unset;
        }
      }
    }
    .button_wrapper {
      @include max(1439) {
        margin-top: 40px;
      }
      @include max(1023) {
        flex-flow: row wrap;
        width: 300px;
      }
      @include max(767) {
        margin: 45px auto 0 auto;
      }
      @include max(425) {
        width: 100%;
        margin: 0;
        padding: 0;
      }
      .second_button {
        @include max(1024) {
          margin-left: 44px;
        }
        @include max(900) {
          margin-top: 24px;
          margin-left: 0;
        }
        @include max(656) {
          display: none;
        }
      }
    }
  }
}
.halls_page {
  .about-image_wrapper {
    @include max(1439) {
      height: auto;
    }
    @include max(1200) {
      height: 576px;
    }
    @include max(1023) {
      height: 520px;
    }
  }
  .restaurant_description-wrapper {
    @include max(1024) {
      margin-bottom: 124px;
    }
    @include max(1023) {
      align-items: unset;
      margin: 112px 0;
    }
  }
}
.suppliers_page {
  .restaurant_description-wrapper {
    .line-simple {
      top: unset;
      right: -150px;
      bottom: 40px;
      @include max(1023){
        width:200px;
        right:-80px;
      }
      @include max(767) {
        display: none;
      }
    }
  }
}
.managment_and_franchising_page{
  .line-simple{
    @include max(1023){
      display: none;
    }
  }
}
/** halls page */
</style>
