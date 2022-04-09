
export const state=()=>({
    roomDetailsModalActive:false,
});
export const mutations={
    changeRoomDetailsModalStatus(state,payload){
        state.roomDetailsModalActive=payload;
    },
};