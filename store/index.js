import { MainMenuValues } from "~/helpers/conts";

export const state = () => ({
  footerInstaBlock: false,
  showUserStatusIcon: false,
  mainMenuValue: MainMenuValues.hotel,
  openLogInModal: false,
  currentLanguage: 'UA',
  currentCurrency: '₴',

});

export const mutations = {
  setFooterInsta(state, footerInstaBlock){
    state.footerInstaBlock = footerInstaBlock
  },
  setUserStatusIcon(state, showUserStatusIcon){
    state.showUserStatusIcon = showUserStatusIcon
  },
  setMainMenuValue(state, value){
    state.mainMenuValue = value
  },
  setOpenLogInModal(state){
    state.openLogInModal = true
  },
  setCloseLogInModal(state){
    state.openLogInModal = false
  },
  setCurrentLanguage(state, lang) {
    state.currentLanguage = lang
  },
  setCurrentCurrency(state, currency) {
    state.currentCurrency = currency
  }

};

export const actions = () => ({
})

