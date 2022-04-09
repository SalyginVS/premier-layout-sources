<template>
  <div id="one_hotel">
    <HeaderBlock :secondTypeOfLogo="true" />
    <FirstScreen :colorKebab="true" />
    <AboutHotel />
    <CustomSliderSwiper
      :slides="custom_slider_slides"
      :label="true"
      :description="custom_slider_description"
      :labelContent="label"
      :labelAddInfo="true"
      :openRoomDetailsModal="openRoomDetailsModal"
    >
      <CustomSliderForeground />
    </CustomSliderSwiper>
    <PinnedBlock :pinned_elements="pinned_info" :slideLine="true" />
    <PinnedItemMob :data="pinned_info[1]" />
    <DoubleSliderNew :double_slider_desc="double_slider_desc" />
    <!-- <DoubleSlider :double_slider_desc="double_slider_desc" /> -->
    <WeCare :bg_image="bg_image" :details="details" />
    <ReviewsSlider />
    <Rating />
    <OneHotelMap :isHotelMap="true" />
    <LongDescription :description="longDescription" />
    <div class="room-wrapper">
      <RoomDetailsModal
        @closeModal="closeRoomDetailsModal"
        :openModal="roomDetailsModalActive"
        :roomDetailsModalActive="roomDetailsModalActive"
      />
    </div>
    <Subscribe />
    <transition name="fade">
      <ModalTemplate
        @closeModal="closePhotosModal"
        :openModal="isPhotosModalOpen"
        :sliderModal="true"
      >
        <PhotosModal />
      </ModalTemplate>
    </transition>
    <transition name="fade">
      <ModalTemplate
        @closeModal="closeOneHotelMapModal"
        :openModal="isOneHotelMapModalOpen"
        :positionStart="true"
        :mapWrapper="true"
      >
        <OneHotelMap />
      </ModalTemplate>
    </transition>
  </div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock";
import OneRoom from "~/blocks/rooms/OneRoom";
import FirstScreen from "~/blocks/one_hotel/FirstScreen";
import AboutHotel from "~/blocks/one_hotel/AboutHotel";
import CustomSliderSwiper from "~/blocks/globals/sliders/CustomSliderSwiper";
import CustomSliderForeground from "~/blocks/one_hotel/CustomSliderForeground";
import ReviewsSlider from "~/blocks/globals/sliders/ReviewsSlider";
import Rating from "~/blocks/one_hotel/Rating";
// import DoubleSlider from "~/blocks/globals/sliders/DoubleSlider";
import DoubleSliderNew from "~/blocks/globals/sliders/DoubleSliderNew";
import WeCare from "~/blocks/globals/WeCare";
import OneHotelMap from "~/blocks/one_hotel/OneHotelMap";
import PinnedBlock from "~/blocks/globals/PinnedBlock";
import PinnedItemMob from "~/blocks/globals/PinnedItemMob";
import Subscribe from "~/blocks/globals/Subscribe";
import PhotosModal from "~/components/modals/PhotosModal";
import { mapState, mapMutations } from "vuex"

export default {
  components: {
    HeaderBlock,
    FirstScreen,
    AboutHotel,
    CustomSliderSwiper,
    CustomSliderForeground,
    // DoubleSlider,
    DoubleSliderNew,
    WeCare,
    ReviewsSlider,
    Rating,
    Subscribe,
    OneHotelMap,
    PinnedBlock,
    PinnedItemMob,
    OneRoom,
    PhotosModal
  },
  data: () => ({
    pinned_info: [
      {
        id: 0,
        image: require("~/static/images/scrolled_image1.jpg"),
        little_title: "увага до деталей",
        title_big: {
          one_line_title: false,
          gold_title: "Ідеальне місце",
          black_title: "розташування",
        },
        description_text:
          "Господа, високотехнологічна концепція суспільного укладу дозволяє виконати важливі завдання по розробці як самодостатніх, так і зовні залежних концептуальних рішень. Таким чином, зміцнення і розвиток внутрішньо. ",
        two_buttons: {
          gold_button: "путівник по місту",
          gold_button_href: '/city',
          second_button: "завантажити карту пробіжки",
          second_button_adap: "карта пробіжки",
        },
      },
      {
        id: 1,
        image: require("~/static/images/scrolled_image2.jpg"),
        image_mob: require("~/static/images/img-pinned-mob.png"),
        little_title: "увага до деталей",
        title_big: {
          one_line_title: true,
          gold_title: "Вишукані",
          black_title: "cтрави",
        },
        description_text:
          "Отели Премьер - это профессиональный высококлассный сервис и внимание к вашим пожеланиям. Всем гостям мы предоставляем бесплатный трансфер, обслуживание на reception 24/7, доставка еды в номера с последними технологическими новинками и свежим ремонтом, тапочки по вашему размеру и удобства, которых вы достойны!            ",
        details_button: "Детальніше",
        details_button_href: '/resraurants_and_bars'
      },
      {
        id: 2,
        image: require("~/static/images/scrolled_image3.jpg"),
        little_title: "увага до деталей",
        title_big: {
          one_line_title: true,
          gold_title: "Фітнес",
          black_title: "і Спа",
        },
        description_text:
          "У 2009 році він отримав шість зірок і сім смуг від системи Stars and Stripes, всесвітньо відомої організації по визнанню в індустрії гостинності, а консьєрж готелю володіє «Золотими ключами», виданими йому однією з найбільших і визнаних у світі гільдій Les Clefs d'Or . Готель входить в «ТОП найзнаменитіших готелів світу», що робить її важливим місцем на карті України.",
        details_button: "Детальніше",
        details_button_href: '/fitnes_and_spa'
      },
    ],
    custom_slider_slides: [
      {
        id: 0,
        image: require("~/static/images/custom_slider_image.jpg"),
      },
      {
        id: 1,
        image: require("~/static/images/about_one_hotel_little.jpg"),
      },
      {
        id: 2,
        image: require("~/static/images/our_blog1.jpg"),
      },
    ],
    custom_slider_description: {
      little_title: "кімнати",
      big_title: '<span class="gold_text">Ми дбаємо </span> про ваш відпочинок',
      description:
        "Готелі Прем'єр - це професійний висококласний сервіс і увага до ваших побажань. всім гостям ми надаємо безкоштовний трансфер, обслуговування на reception 24/7, доставка їжі в номери з останніми!",
      slash_button: "усі номери",
      slash_button_href: '/rooms'
    },
    bg_image: require("~/static/images/one_hotel_care.jpg"),
    details: [
      {
        id: 0,
        title: "Конференц - зали",
        description:
          "Початок повсякденної роботи по формуванню позиції однозначно фіксує необхідність експериментів.",
        href: '/hotels'
      },
      {
        id: 1,
        title: "Весілля",
        description:
          "Початок повсякденної роботи по формуванню позиції однозначно фіксує необхідність експериментів.",
        href: '/weddings'
      },
      {
        id: 2,
        title: "Кейтеринг",
        description:
          "Початок повсякденної роботи по формуванню позиції однозначно фіксує необхідність експериментів.",
        href: '/'
      },
      {
        id: 3,
        title: "Усі події",
        description:
          "Початок повсякденної роботи по формуванню позиції однозначно фіксує необхідність експериментів.",
        href: '/'
      },
    ],
    double_slider_desc: {
      little_title: "НАШІ Спеціальні пропозиції",
      big_title: "Спеціальні пропозиції",
      link: "всі пропозиції",
      linkHref: '/special_offers/one_hotel',
      filters: [
        {
          id: 0,
          name: "тип спецпропозиції",
          type: "",
          options: [
            {
              title: "Event1 ",
              value: "Event1",
            },
            {
              title: "Event2",
              value: "Event2",
            },
            {
              title: "Event3",
              value: "Event3",
            },
            {
              title: "Event4",
              value: "Event4",
            },
            {
              title: "Event5",
              value: "Event5",
            },
          ],
        },
      ],
    },
    label: "від <span>1960₴</span> за ніч",
    longDescription: {
      title: "Про Premier Palace Hotel",
      description:
        "Високий рівень залучення представників цільової аудиторії є чітким доказом простого факту: реалізація намічених планових завдань вимагає від нас аналізу відповідних умов активізації. Попередні висновки невтішні: обраний нами інноваційний шлях безпосередньо залежить від нових принципів формування матеріально-технічної та кадрової бази! Повсякденна практика показує, що нова модель організаційної діяльності відіграє визначальне значення для позицій, займаних учасниками щодо поставлених завдань. Високий рівень залучення представників цільової аудиторії є чітким доказом простого факту: існуюча теорія безпосередньо залежить від моделі розвитку. Лише зроблені на базі інтернет-аналітики висновки являють собою не що інше, як квінтесенцію перемоги маркетингу над розумом і повинні бути вказані як претенденти на роль ключових факторів. Є спірна точка зору, яка говорить приблизно наступне: багато відомих осіб будуть в рівній мірі надані самі собі. Високий рівень залучення представників цільової аудиторії є чітким доказом простого факту: реалізація намічених планових завдань вимагає від нас аналізу відповідних умов активізації. Попередні висновки невтішні: обраний нами інноваційний шлях безпосередньо залежить від нових принципів формування матеріально-технічної та кадрової бази! Повсякденна практика показує, що нова модель організаційної діяльності відіграє визначальне значення для позицій, займаних учасниками щодо поставлених завдань. Високий рівень залучення представників цільової аудиторії є чітким доказом простого факту: існуюча теорія безпосередньо залежить від моделі розвитку. Лише зроблені на базі інтернет-аналітики висновки являють собою не що інше, як квінтесенцію перемоги маркетингу над розумом і повинні бути вказані як претенденти на роль ключових факторів. Є спірна точка зору, яка говорить приблизно наступне: багато відомих осіб будуть в рівній мірі надані самі собі.",
      button: "Детальніше",
    },
  }),
  mounted() {
    this.$store.commit("setFooterInsta", true);

    //смена названия
    if (window.innerWidth < 900) {
      this.custom_slider_description.little_title = "увага до деталей";
    } else {
      this.custom_slider_description.little_title = "кімнати";
    }
  },
  destroyed() {
    this.$store.commit("setFooterInsta", false);
  },
  methods: {
    openRoomDetailsModal() {
      this.$store.commit(
        "one_hotel_reducer/changeRoomDetailsModalStatus",
        true
      );
    },
    closeRoomDetailsModal() {
      this.$store.commit(
        "one_hotel_reducer/changeRoomDetailsModalStatus",
        false
      );
    },
    ...mapMutations({
      closePhotosModal: 'modals/closePhotosModal',
      closeOneHotelMapModal: 'modals/closeOneHotelMapModal'
    })
  },
  computed: {
    roomDetailsModalActive() {
      let {
        one_hotel_reducer: { roomDetailsModalActive },
      } = this.$store.state;
      return roomDetailsModalActive;
    },
    ...mapState({
      isPhotosModalOpen: state => state.modals.isPhotosModalOpen,
      isOneHotelMapModalOpen: state => state.modals.isOneHotelMapModalOpen,
    })
  },
  destroyed() {
    this.$store.commit("one_hotel_reducer/changeRoomDetailsModalStatus", false);
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";
#one_hotel {
  @include min(1441) {
    //background-color: #f0edea;
  }
  .custom_slider {
    padding-top: 124px;
    @include max(md) {
      padding-top: 112px;
    }
    @include max(sm) {
      padding-top: 80px;
    }
  }
  #pinnedBlock {
    background-color: unset;
    @include max(sm) {
      display: none;
    }
  }
  #pinned-item-mob {
    display: none;
    @include max(sm) {
      display: flex;
    }
  }
  #double_slider_container {
    @include max(sm) {
      margin-bottom: 80px;
    }
  }
  #pinned-item-mob {
    margin-bottom: 80px;
  }
  #reviews {
    @include max(sm) {
      display: none;
    }
  }
  #rating {
    @include max(sm) {
      display: none;
    }
  }
  #oneHotelMap {
    height: 100vh;
    #pac-input {
      bottom: unset;
      top: 20px;
    }

    @include max(lg) {
      height: 530px;
    }
    @include max(lg) {
      height: 601px;
    }

    @include max(sm) {
      height: 320px;
    }
  }
}
</style>
