<template>
  <div id="test-modal">

    <div class="modal_wrapper">
      <div @click="openBookingTableModal" class="modal__button" style="background-color:black" >
        <p class="p1">Book a table</p>
      </div>
      <div @click="openRequestForChainMembershipModal" class="modal__button" style="background-color:black">
        <p class="p1">Request for chain memberhip</p>
      </div>
      <div @click="openContactsRequest" class="modal__button" style="background-color:black" >
        <p class="p1">Contacts request</p>
      </div>
      <div @click="openConfirmationRequestModal" class="modal__button" style="background-color:black">
        <p class="p1">Book a table -- Thank for booking</p>
      </div>
    </div>



    <div class="modal_wrapper">
      <div @click="openBuyClubCardModal" class="modal__button" style="background-color:black">
        <p class="p1">Group programs / buy a club card</p>
      </div>
      <div @click="openServiceRequestModal" class="modal__button" style="background-color:black" >
        <p class="p1">Fitness and Spa / Service request / Резервувати зараз </p>
      </div>
      <div @click="openConfirmationRequestSessionModal" class="modal__button" style="background-color:black">
        <p class="p1">
          Fitness and Spa / Service request / Тривалість сесії закінчена
        </p>
      </div>
    </div>



    <div class="modal_wrapper">
      <div @click="openJoinPremClubModal" class="modal__button" style="background-color:black">
        <p class="p1">Join premier club</p>
      </div>
      <div @click="openJoinPremCorpClubModal" class="modal__button" style="background-color:black" >
        <p class="p1">Join premier corporate club</p>
      </div>
    </div>


    <div class="modal_wrapper">
      <div @click="openRequestPointsModal" class="modal__button" style="background-color:black">
        <p class="p1"> Fitness and Spa / Service request / Перекласти бали </p>
      </div>
      <div @click="openRequestLostPointsModal" class="modal__button"  style="background-color:black">
        <p class="p1">Lost Points Request</p>
      </div>
      <div @click="openContactCoordinatorModal" class="modal__button" style="background-color:black">
        <p class="p1">  Contact the coordinator / Звернутися до коодинатора  </p>
      </div>
      <div @click="openRecoverLostCardModal" class="modal__button" style="background-color:black">
        <p class="p1">Recover Lost Card / check in</p>
      </div>

      <div @click="openBonusCalculatorModal" class="modal__button" style="background-color:black" >
        <p class="p1"> Contact the coordinator / Калькулятор </p>
      </div>
    </div>



    <div class="modal_wrapper">
      <div @click="openPhotosModal" class="modal__button" style="background-color:black">
        <p class="p1">Pop-up / photo</p>
      </div>

      <div class="modal__button">
        <p class="p1">Pop-up / 3d tour</p>
      </div>
      <div @click="openMapModal" class="modal__button" style="background-color:black">
        <p class="p1">Pop-up / map</p>
      </div>
    </div>



    <div class="modal_wrapper">
      <div @click="openHotelServicesModal" class="modal__button" style="background-color:black"    >
        <p class="p1">Hotel services</p>
      </div>
    </div>



    <div class="modal_wrapper">
      <div @click="openTermsOfAccommodationModal" class="modal__button" style="background-color:black">
        <p class="p1">Fitnes and spa / service request</p>
      </div>
    </div>



    <div class="modal_wrapper">
      <div @click="openLogInModal" class="modal__button" style="background-color:black" >
        <p class="p1">log in</p>
      </div>
    </div>







    <transition name="fade">
      <!-- <BookingTableModal
        @closeModal="closeModal"
        :openModal="is_booking_modal_open"
      /> -->
      <ModalTemplate
        @closeModal="closeModal"
        :openModal="is_booking_table_open"
        :data="optionBookingTable"
      >
        <BookingTableModal />
      </ModalTemplate>
    </transition>
    <transition name="fade">
      <ModalTemplate
        @closeModal="closeModal"
        :openModal="is_request_for_chain_membership"
        :data="optionRequestForChain"
        :captcha="true"
      >
        <RequestForChainMembershipModal />
      </ModalTemplate>
    </transition>
    <transition name="fade">
      <ModalTemplate
        @closeModal="closeModal"
        :openModal="is_contacts_request"
        :data="optionContactsRequest"
        :captcha="true"
      >
        <ContactsRequestModal />
      </ModalTemplate>
    </transition>
    <transition name="fade">
      <ModalTemplate
        @closeModal="closeModal"
        :openModal="is_confirmation_request"
        :data="optionConfirmationRequest"
        :positionCenter="true"
      >
        <ConfirmationRequestModal :data="confirmationRequestThanks" />
      </ModalTemplate>
    </transition>

    <transition name="fade">
      <ModalTemplate
        @closeModal="closeModal"
        :openModal="is_buy_club_card_modal"
        :data="optionBuyClubCardModal"
        :positionCenter="true"
      >
        <BuyClubCardModal />
      </ModalTemplate>
    </transition>
    <transition name="fade">
      <ModalTemplate
        @closeModal="closeModal"
        :openModal="is_service_request_modal"
        :data="optionServiceRequestModal"
        :positionCenter="true"
      >
        <ServiceRequestModal />
      </ModalTemplate>
    </transition>
    <transition name="fade">
      <ModalTemplate
        @closeModal="closeModal"
        :openModal="is_confirmation_request_session"
        :data="optionConfirmationRequestSession"
        :positionCenter="true"
      >
        <ConfirmationRequestModal
          :data="confirmationRequestSession"
          :smallSizeV2="true"
        />
      </ModalTemplate>
    </transition>
    <transition name="fade">
      <ModalTemplate
        @closeModal="closeModal"
        :openModal="is_join_prem_club_modal"
        :data="optionJoinPremClubModal"
        :positionCenter="true"
        :captcha="true"
        :loginNetwork="true"
        :agreement="true"
      >
        <JoinPremClubModal />
      </ModalTemplate>
    </transition>

    <transition name="fade">
      <ModalTemplate
        @closeModal="closeModal"
        :openModal="is_join_prem_corp_club_modal"
        :data="optionJoinPremCorpClubModal"
        :positionCenter="true"
        :captcha="true"
        :agreement="true"
      >
        <JoinPremClubModal :jobInfo="true" />
      </ModalTemplate>
    </transition>
    <transition name="fade">
      <ModalTemplate
        @closeModal="closeModal"
        :openModal="is_request_points_modal"
        :data="optionRequestPointsModal"
        :positionCenter="true"
      >
        <RequestPointsModal />
      </ModalTemplate>
    </transition>
    <transition name="fade">
      <ModalTemplate
        @closeModal="closeModal"
        :openModal="is_request_lost_points_modal"
        :data="optionRequestLostPointsModal"
        :positionCenter="true"
      >
        <RequestLostPointsModal />
      </ModalTemplate>
    </transition>
    <transition name="fade">
      <ModalTemplate
        @closeModal="closeModal"
        :openModal="is_contact_coordinator_modal"
        :data="optionContactCoordinatorModal"
        :positionCenter="true"
      >
        <ConfirmationRequestModal
          :data="confirmationContactCoordinator"
          :smallSizeV2="true"
          :addComment="true"
        />
      </ModalTemplate>
    </transition>

    <transition name="fade">
      <ModalTemplate
        @closeModal="closeModal"
        :openModal="is_recover_lost_card_modal"
        :data="optionRecoverLostCardModal"
        :positionCenter="true"
      >
        <RecoverLostCardModal />
      </ModalTemplate>
    </transition>

    <transition name="fade">
      <ModalTemplate
        @closeModal="closeModal"
        :openModal="is_bonus_calculator_modal"
        :data="optionBonusCalculatorModal"
        :positionCenter="true"
      >
        <bonus-calculator-modal />
      </ModalTemplate>
    </transition>

    <transition name="fade">
      <ModalTemplate
        @closeModal="closeModal"
        :openModal="is_photos_modal"
        :sliderModal="true"
      >
        <PhotosModal />
      </ModalTemplate>
    </transition>

    <transition name="fade">
      <ModalTemplate
        @closeModal="closeModal"
        :openModal="is_map_modal"
        :positionStart="true"
        :mapWrapper="true"
      >
        <OneHotelMap />
      </ModalTemplate>
    </transition>

    <transition name="fade">
      <ModalTemplate
        @closeModal="closeModal"
        :openModal="is_hotel_services_modal"
        :positionStart="true"
      >
        <HotelServicesModal />
      </ModalTemplate>
    </transition>

    <transition name="fade">
      <ModalTemplate
        @closeModal="closeModal"
        :openModal="is_terms_of_accommodation_modal"
        :positionStart="true"
      >
        <TermsOfAccommodationModal />
      </ModalTemplate>
    </transition>

    <transition name="fade">
      <LogInModal @closeModal="closeModal" :openModal="is_log_in_modal" />
    </transition>
  </div>
</template>

<script>
import BonusCalculatorModal from '~/components/modals/BonusCalculatorModal.vue';

export default {
  components: { BonusCalculatorModal},
  data() {
    return {
      is_modal_open: false,
      is_booking_table_open: false,
      is_request_for_chain_membership: false,
      is_contacts_request: false,
      is_confirmation_request: false,
      is_buy_club_card_modal: false,
      is_service_request_modal: false,
      is_confirmation_request_session: false,
      is_join_prem_club_modal: false,
      is_join_prem_corp_club_modal: false,
      is_request_points_modal: false,
      is_request_lost_points_modal: false,
      is_contact_coordinator_modal: false,
      is_recover_lost_card_modal: false,
      is_bonus_calculator_modal: false,
      is_photos_modal: false,
      is_hotel_services_modal: false,
      is_terms_of_accommodation_modal: false,
      is_log_in_modal: false,
      is_map_modal: false,

      optionBookingTable: {
        title: "Замовити столик",
        button: "заРЕЗЕРВУВАТИ",
      },
      optionRequestForChain: {
        title: "Вступити в бренд",
        button: "Вступити",
      },
      optionContactsRequest: {
        title: "Зробити запит",
        button: "відправляти запит",
      },
      optionConfirmationRequest: {
        title: "Дякуємо за бронювання",
        button: "на головну",
      },
      confirmationRequestThanks:
        "Ранні заїзди, догляд за вашими речами, кращі акційні пропозиції, знижки та, звичайно ж, ночі в подарунок! Ви будете отримувати на свій рахунок бонуси за всі ваші витрати в наших готелях. Подорожуйте в своє задоволення, отримуйте!",
      optionBuyClubCardModal: {
        title: "Купіть клубну карту",
        description:
          "Ми створюємо максимальний комфорт та турботу для кожного гостя нашої мережі. Маленькі речі, які можуть не бути видні з першого погляду, залишать.",
        button: "відправляти запит",
      },
      optionServiceRequestModal: {
        title: "Резервувати зараз",
        description:
          "Ми створюємо максимальний комфорт та турботу для кожного гостя нашої мережі. Маленькі речі, які можуть не бути видні з першого погляду, залишать.",
        button: "відправляти запит",
      },
      optionConfirmationRequestSession: {
        title: "Тривалість сесії закінчена",
        button: "оновити ціни",
      },
      confirmationRequestSession:
        'Тривалість сесії закінчена. Ви можете шукати знову. 10% економія для <a href="/">зареєстрованих</a> користувачів.',
      optionJoinPremClubModal: {
        title: "Вступити до Premier Club",
        button: "Вступити",
      },

      optionJoinPremCorpClubModal: {
        title: "Вступити до Premier Corporate Club",
        button: "Вступити",
      },
      optionRequestPointsModal: {
        title: "Перекласти бали",
        description:
          "Введіть реквізити гостя, якому ви хочете передати свої бонуси",
        button: "відправити бали",
      },
      optionRequestLostPointsModal: {
        title: "Запит втрачених балів",
        description:
          "Будь ласка, заповніть дані вашого перебування, за які бонуси не були зараховані на ваш рахунок",
        button: "знайти бали",
      },
      optionContactCoordinatorModal: {
        title: "Звернутися до координатора",
        button: "відправляти запит",
      },
      confirmationContactCoordinator:
        "Ваш відгук дуже важливий для нас! Будь ласка, напишіть своє запитання або коментар, і ми незабаром зв’яжемося з вами.",

      optionRecoverLostCardModal: {
        title: "Відновити втрачену карту",
        description:
          "Заповніть, будь ласка, інформацію, необхідну для відновлення картки Premier Club. Як ви віддаєте перевагу отримати нову карту?",
        button: "знайти бали",
      },
      optionBonusCalculatorModal: {
        title: "Калькулятор бонусів",
        description:
          "Щоб дізнатись, скільки бонусів ви заробіть на життя, будь ласка, заповніть дані нижче. Зверніть увагу, що розмір бонусів може змінюватися залежно від різних умов.",
      },
    };
  },
  methods: {
    openBookingTableModal() {
      this.is_booking_table_open = !this.is_booking_table_open;
    },
    openRequestForChainMembershipModal() {
      this.is_request_for_chain_membership = !this
        .is_request_for_chain_membership;
    },
    openContactsRequest() {
      this.is_contacts_request = !this.is_contacts_request;
    },
    openConfirmationRequestModal() {
      this.is_confirmation_request = !this.is_confirmation_request;
    },
    openBuyClubCardModal() {
      this.is_buy_club_card_modal = !this.is_buy_club_card_modal;
    },
    openServiceRequestModal() {
      this.is_service_request_modal = !this.is_service_request_modal;
    },
    openConfirmationRequestSessionModal() {
      this.is_confirmation_request_session = !this
        .is_confirmation_request_session;
    },
    openJoinPremClubModal() {
      this.is_join_prem_club_modal = !this.is_join_prem_club_modal;
    },
    openJoinPremCorpClubModal() {
      this.is_join_prem_corp_club_modal = !this.is_join_prem_corp_club_modal;
    },
    openRequestPointsModal() {
      this.is_request_points_modal = !this.is_request_points_modal;
    },
    openRequestLostPointsModal() {
      this.is_request_lost_points_modal = !this.is_request_lost_points_modal;
    },
    openContactCoordinatorModal() {
      this.is_contact_coordinator_modal = !this.is_contact_coordinator_modal;
    },
    openRecoverLostCardModal() {
      this.is_recover_lost_card_modal = !this.is_recover_lost_card_modal;
    },
    openBonusCalculatorModal() {
      this.is_bonus_calculator_modal = !this.is_bonus_calculator_modal;
    },
    openPhotosModal() {
      this.is_photos_modal = !this.is_photos_modal;
    },
    openHotelServicesModal() {
      this.is_hotel_services_modal = !this.is_hotel_services_modal;
    },
    openTermsOfAccommodationModal() {
      this.is_terms_of_accommodation_modal = !this
        .is_terms_of_accommodation_modal;
    },
    openLogInModal() {
      this.is_log_in_modal = !this.is_log_in_modal;
    },
    openMapModal() {
      this.is_map_modal = !this.is_map_modal;
    },

    closeModal() {
      this.is_modal_open = false;
      this.is_booking_table_open = false;
      this.is_request_for_chain_membership = false;
      this.is_contacts_request = false;
      this.is_confirmation_request = false;
      this.is_buy_club_card_modal = false;
      this.is_service_request_modal = false;
      this.is_confirmation_request_session = false;
      this.is_join_prem_club_modal = false;
      this.is_join_prem_corp_club_modal = false;
      this.is_request_points_modal = false;
      this.is_request_lost_points_modal = false;
      this.is_contact_coordinator_modal = false;
      this.is_recover_lost_card_modal = false;
      this.is_bonus_calculator_modal = false;
      this.is_photos_modal = false;
      this.is_hotel_services_modal = false;
      this.is_terms_of_accommodation_modal = false;
      this.is_log_in_modal = false;
      this.is_map_modal = false;
    },
  },

  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils.scss";

#test-modal {
  min-height: 100vh;
  width: 100%;
  padding: 40px 140px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @include max(sm) {
    padding: 20px;
  }

  .modal_wrapper {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    &:not(:last-child) {
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 1px dashed black;
    }
    .modal__button {
      max-width: 200px;
      padding: 14px 20px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(#000000, 0.3);
      cursor: pointer;
      transition: opacity 0.3s ease-in-out;
      &:hover {
        opacity: 0.7;
      }
      &:not(:last-child) {
        margin-right: 20px;
      }
      p {
        color: white;
      }
    }
  }
}
</style>
