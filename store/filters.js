export const state = () => ({
    rooms: [
        {
            id: 0,
            numberAdults: 1,
            children: [],
        },
    ],

    hotel: '',
    city: ''
})


export const mutations = {

    minusNumAdults(state, roomId) {
        const room = state.rooms.find(r => r.id === roomId);

        if (room && room.numberAdults > 0) {
            room.numberAdults = room.numberAdults - 1;
        }
    },
    plusNumAdults(state, roomId) {
        const room = state.rooms.find(r => r.id === roomId);

        if (room && room.numberAdults < 5) {
            room.numberAdults = room.numberAdults + 1;
        }
    },

    minusNumChild(state, roomId) {
        const room = state.rooms.find(r => r.id === roomId);

        if (room && room.children.length > 0) {
            room.children.splice(-1, 1);
        }
    },
    plusNumChild(state, roomId) {
        const room = state.rooms.find(r => r.id === roomId);

        if (room && room.children.length < 5) {
            room.children.push({ id: room.children.length });
        }
    },

    addRoom(state) {
        if (state.rooms.length < 10) {

            let maxId = 0;
            state.rooms.forEach(e => {
                if (maxId < e.id) {
                    maxId = e.id
                }
            })

            state.rooms.push({
                id: maxId + 1,
                numberAdults: 1,
                children: [],
            });
        }
    },
    deleteRoom(state, roomId) {
        if (state.rooms.length > 1) {
            state.rooms = state.rooms.filter(e => {
                return e.id !== roomId
            })
        }
    },

    setValue(state, value) {
        Object.assign(state, value);
    }
}