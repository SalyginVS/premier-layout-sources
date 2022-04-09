<template>
  <div
    class="journal_premier_club_container journal_premier"
    :class="{ 'light-mode': lightMode }"
  >
    <div class="main-wrapper">
      <div v-if="onlyMagazine">
        <TileBlock class="journal_premier_club-items" />
      </div>
      <div v-else>
        <p class="a1 journal_premier__little_title">Premier Club</p>
        <h3 class="journal_premier__big_title">Журнали Premier Club</h3>
        <p class="p1 journal_premier__description">
          У часи похмурого середньовіччя венеціанський карнавал був гарною
          нагодою зробити паузу від релігійних та моральних обмежень, сховавши
          обличчя під маскою.
        </p>
        <TileBlock :isOurBlog="isOurBlog"/>
        <div class="journal_premier__button_wrapper">
          <SlashButton text="всі Журнали" :link="link"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlashButton from "~/components/SlashButton";
import TileBlock from "~/blocks/our_blog/TileBlock";

export default {
  name: "JournalPremierClub",
  components: {
    SlashButton,
    TileBlock,
  },
  props: {
    onlyMagazine: {
      type: Boolean,
      default: false,
    },
    lightMode: {
      type: Boolean,
      default: false,
    },
    isOurBlog:{
      type:Boolean,
      default:false
    },
    link:{
      type:String,
      default:null
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";

.journal_premier_club_container {
  background: #f0edea;
  padding: 120px 0;
  @include pl-168;
  @include pr-168;

  @include max(lg) {
    padding: 96px 134px 115px;
  }
  @include max(md) {
    padding: 87px 51px 96px;
  }
  @include max(sm) {
    padding: 56px 0;
  }

  &.light-mode {
    background: #fbfbfb;
  }
}

.journal_premier_club-items {
  margin: 80px 0;
}
.journal_premier {
  &__little_title {
    text-align: center;
    opacity: 0.3;
    @include mb-16;
  }
  &__big_title {
    text-align: center;
    margin-bottom: 32px;

    @include max(lg) {
      margin-bottom: 32px;
    }
    @include max(md) {
      margin-bottom: 24px;
    }
    @include max(sm) {
    }
  }
  &__description {
    text-align: center;
    max-width: 638px;
    margin: auto;
    margin-bottom: 88px;
    opacity: 0.5;
    @include max(lg) {
      margin-bottom: 64px;
    }
    @include max(md) {
      margin-bottom: 32px;
    }
    @include max(sm) {
      width: 90%;
    }
  }
  &__button_wrapper {
    width: fit-content;
    margin: 81px auto 0;
    @include max(lg) {
      margin-top: 64px;
    }
    @include max(md) {
      margin-top: 60px;
    }
    @include max(sm) {
      margin-top:70px;
    }
  }
}
</style>
