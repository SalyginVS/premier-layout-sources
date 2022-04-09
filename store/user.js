export const state = () => ({
    isInClub: false,
    email: '',
    phone: '',
    dateBirth: '',
    country: '',

})


export const mutations = {
    setUserClub(state, isInClub) {
        state.isInClub = isInClub
    },
    update(state, data) {
        state[data.field] = data.value;
    }

}