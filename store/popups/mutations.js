import {
    OPEN_LANG_CURRENCY_POPUP,
    CLOSE_LANG_CURRENCY_POPUP,
    TOGGLE_LANG_CURRENCY_POPUP,
    OPEN_ACCOUNT_MENU_POPUP,
    CLOSE_ACCOUNT_MENU_POPUP,
    TOGGLE_ACCOUNT_MENU_POPUP,
    OPEN_CONTACTS_POPUP,
    CLOSE_CONTACTS_POPUP,
    TOGGLE_CONTACTS_POPUP,
    CLOSE_ALL_POPUPS,
    OPEN_ACCOUNT_CLUB_MENU_POPUP,
    CLOSE_ACCOUNT_CLUB_MENU_POPUP,
    TOGGLE_ACCOUNT_CLUB_MENU_POPUP,
} from './mutations-types'

export default {

    // Contacts popup

    [OPEN_CONTACTS_POPUP](state) {
        state.isContactsPopupOpen = true
        state.isAnyPopupOpen = true
    },
    [CLOSE_CONTACTS_POPUP](state) {
        state.isContactsPopupOpen = false
        state.isAnyPopupOpen = false
    },
    [TOGGLE_CONTACTS_POPUP](state) {
        state.isLangCurrencyPopupOpen = false
        state.isAccountMenuPopupOpen = false
        state.isAccountClubMenuPopupOpen = false
        state.isContactsPopupOpen =  !state.isContactsPopupOpen
        if (state.isContactsPopupOpen) {
            state.isAnyPopupOpen = true
        } else {            
            state.isAnyPopupOpen = false
        }
    },

    // Language/currency popup

    [OPEN_LANG_CURRENCY_POPUP](state) {
        state.isLangCurrencyPopupOpen = true
        state.isAnyPopupOpen = true
    },
    [CLOSE_LANG_CURRENCY_POPUP](state) {
        state.isLangCurrencyPopupOpen = false
        state.isAnyPopupOpen = false
    },
    [TOGGLE_LANG_CURRENCY_POPUP](state) {
        state.isAccountMenuPopupOpen = false
        state.isAccountClubMenuPopupOpen = false
        state.isContactsPopupOpen = false
        state.isLangCurrencyPopupOpen =  !state.isLangCurrencyPopupOpen
        if (state.isLangCurrencyPopupOpen) {
            state.isAnyPopupOpen = true
        } else {            
            state.isAnyPopupOpen = false
        }
    },

    // Account menu popup

    [OPEN_ACCOUNT_MENU_POPUP](state) {
        state.isAccountMenuPopupOpen = true
        state.isAnyPopupOpen = true
    },
    [CLOSE_ACCOUNT_MENU_POPUP](state) {
        state.isAccountMenuPopupOpen = false
        state.isAnyPopupOpen = false
    },
    [TOGGLE_ACCOUNT_MENU_POPUP](state) {
        state.isAccountClubMenuPopupOpen = false
        state.isLangCurrencyPopupOpen = false
        state.isContactsPopupOpen = false
        state.isAccountMenuPopupOpen =  !state.isAccountMenuPopupOpen
        if (state.isAccountMenuPopupOpen) {
            state.isAnyPopupOpen = true
        } else {            
            state.isAnyPopupOpen = false
        }
    },
     // Account club menu popup

     [OPEN_ACCOUNT_CLUB_MENU_POPUP](state) {
        state.isAccountMenuPopupOpen = true
        state.isAnyPopupOpen = true
    },
    [CLOSE_ACCOUNT_CLUB_MENU_POPUP](state) {
        state.isAccountMenuPopupOpen = false
        state.isAnyPopupOpen = false
    },
    [TOGGLE_ACCOUNT_CLUB_MENU_POPUP](state) {
        state.isAccountMenuPopupOpen = false
        state.isLangCurrencyPopupOpen = false
        state.isContactsPopupOpen = false
        state.isAccountClubMenuPopupOpen =  !state.isAccountClubMenuPopupOpen
        if (state.isAccountClubMenuPopupOpen) {
            state.isAnyPopupOpen = true
        } else {            
            state.isAnyPopupOpen = false
        }
    },

    //All popups

    [CLOSE_ALL_POPUPS](state) {
        state.isAccountMenuPopupOpen = false
        state.isAccountClubMenuPopupOpen = false
        state.isContactsPopupOpen = false
        state.isLangCurrencyPopupOpen = false
        state.isAnyPopupOpen = false
    }
}