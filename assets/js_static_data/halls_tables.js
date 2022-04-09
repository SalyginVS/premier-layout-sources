const headers = [
    {
        name: "НАЗВА ЗАЛУ",
        img: null,
    },
    {
        name: "Театр",
        img: require("~/static/icons-hall-table/theater.svg"),
    },
    {
        name: "Клас",
        img: require("~/static/icons-hall-table/class.svg"),
    },
    {
        name: "Круглий стіл",
        img: require("~/static/icons-hall-table/circle-table.svg"),
    },
    {
        name: "П-стіл",
        img: require("~/static/icons-hall-table/p-table.svg"),
    },
    {
        name: "Банкет",
        img: require("~/static/icons-hall-table/banket.svg"),
    },
    {
        name: "Фуршет",
        img: require("~/static/icons-hall-table/buffet.svg"),
    },
    {
        name: "Площа",
        img: null,
    },
    {
        name: "Ширина / Довжина / Висота",
        img: null,
    },
]

const values = [
    {
        id: 0,
        name: "Софіївський Гранд холл",
        theatre: 250,
        class: 130,
        circle_table: 70,
        p_table: 60,
        banket: 40,
        buffet: 40,
        square: 350,
        width: 18.5,
        length: 19.0,
        height: 6.0
    },
    {
        id: 1,
        name: "Софіївський Гранд холл",
        theatre: 250,
        class: 130,
        circle_table: 70,
        p_table: 60,
        banket: 40,
        buffet: 40,
        square: 350,
        width: 18.5,
        length: 19.0,
        height: 6.0
    },
    {
        id: 2,
        name: "Софіївський Гранд холл",
        theatre: 250,
        class: 130,
        circle_table: 70,
        p_table: 60,
        banket: 40,
        buffet: 40,
        square: 350,
        width: 18.5,
        length: 19.0,
        height: 6.0
    }
]

export default headers;
export { headers, values }