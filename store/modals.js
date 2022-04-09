export const state = () => ({
  isBookingModalOpen: false,
  isPhotosModalOpen: false,
  isOneHotelMapModalOpen: false,
  isMainMenuOpen: false,
  isLangPopupOpen: false,
  isHotelsMapModalOpen: false,
  isThanksForBookingModal: false,
  isRoomDetailsModalOpen: false
});

export const mutations = {
  // Booking modal
  openBookingModal(state) {
    state.isBookingModalOpen = true;
  },
  closeBookingModal(state) {
    state.isBookingModalOpen = false;
  },

  //Photos modal
  openPhotosModal(state) {
    state.isPhotosModalOpen = true;
  },
  closePhotosModal(state) {
    state.isPhotosModalOpen = false;
  },

  //One hotel map modal
  openOneHotelMapModal(state) {
    state.isOneHotelMapModalOpen = true;
  },
  closeOneHotelMapModal(state) {
    state.isOneHotelMapModalOpen = false;
  },

  //Hotels map modal
  openHotelsMapModal(state) {
    state.isHotelsMapModalOpen = true;
  },
  closeHotelsMapModal(state) {
    state.isHotelsMapModalOpen = false;
  },

  //Main menu
  closeMainMenu(state) {
    state.isMainMenuOpen = false;
  },
  toggleMainMenu(state) {
    state.isLangPopupOpen = false;
    state.isMainMenuOpen = !state.isMainMenuOpen;
  },

  //Lang popup
  openLangPopup(state) {
    state.isLangPopupOpen = true;
  },
  closeLangPopup(state) {
    state.isLangPopupOpen = false;
  },
  toggleLangPopup(state) {
    state.isLangPopupOpen = !state.isLangPopupOpen;
  },

  //Thanks for Booking Modal
  closeThanksForBookingModal(state) {
    state.isThanksForBookingModal = false;
  },

  openThanksForBookingModal(state) {
    state.isThanksForBookingModal = true;
  },

  //Room Details Modal
  closeRoomDetailsModal(state) {
    state.isRoomDetailsModalOpen = false;
  },

  openRoomDetailsModal(state) {
    state.isRoomDetailsModalOpen = true;
  }
};
