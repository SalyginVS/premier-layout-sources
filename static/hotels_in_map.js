import { Breakpoints } from "~/helpers/conts"

const cities = [
    {
        id: 0,
        city: "КИЇВ",
        // left: 58.7,
        left: {
            '': 58.7,
            [Breakpoints.bg]: 56.4,
            [Breakpoints.lg]: 58.4,
            [Breakpoints.md]: 60

        },
        bottom: {
            '': 61.6,
            [Breakpoints.bg]: 59,
            [Breakpoints.lg]: 61.4,
            [Breakpoints.md]: 53
        },
        size: {
            '': 30,
            [Breakpoints.lg]: 15,
            [Breakpoints.md]: 15
        },
        color: "#735C33",

        hotels: [
            {
                id: 0,
                stars: 5,
                name: "PREMIER PALACE HOTEL mlkjjkl",
                address : "st.Zamostyanskaya 14/1 Kyiv 14a",
                image: require("~/static/images/one_star.svg")
            },
            {
                id: 1,
                stars: 3,
                name: "Premier Hotel Rus",
                address : "st.Zamostyanskaya 14/1 Kyiv 14a",
                image: require("~/static/images/one_star.svg")
            },
            {
                id: 2,
                stars: 4,
                name: "Premier Hotel Lybid",
                address : "st.Zamostyanskaya 14/1 Kyiv 14a",
                image: require("~/static/images/one_star.svg")
            }
        ]
    },
    {
        id: 1,
        city: "Харків",
        left: {
            '': 76.3,
            [Breakpoints.bg]: 69.7,
            [Breakpoints.lg]: 78.4,
            [Breakpoints.md]: 84
        },
        bottom: {
            '': 60.1,
            [Breakpoints.bg]: 57.7,
            [Breakpoints.lg]: 58,
            [Breakpoints.md]: 48.7
        },
        size: {
            '': 28,
            [Breakpoints.lg]: 15,
            [Breakpoints.md]: 15
        },
        color: "#AA9474",
        hotels: [
            {
                id: 0,
                stars: 5,
                name: "PREMIER PALACE HOTEL",
                address : "st.Zamostyanskaya 14/1 Kharkiv 14b",
                image: require("~/static/images/one_star.svg")
            },
            {
                id: 1,
                stars: 5,
                name: "PREMIER PALACE HOTEL",
                address : "st.Zamostyanskaya 14/1 Kharkiv 14b",
                image: require("~/static/images/one_star.svg")
            }
        ]
    },
    {
        id: 2,
        city: "Одеса",
        left: {
            '': 60.5,
            [Breakpoints.bg]: 57.8,
            [Breakpoints.lg]: 60.3,
            [Breakpoints.md]: 62.4
        },
        bottom: {
            '': 35,
            [Breakpoints.bg]: 39,
            [Breakpoints.lg]: 34.9,
            [Breakpoints.md]: 20.7
        },
        size: {
            '': 28,
            [Breakpoints.lg]: 15,
            [Breakpoints.md]: 15
        },
        color: "#735C33",
        hotels: [
            {
                id: 0,
                stars: 1,
                name: "PREMIER PALACE HOTEL",
                address : "st.Zamostyanskaya 14/1 Kharkiv 14b",
                image: require("~/static/images/one_star.svg")
            },
            {
                id: 1,
                stars: 1,
                name: "PREMIER PALACE HOTEL",
                address : "st.Zamostyanskaya 14/1 Kharkiv 14b",
                image: require("~/static/images/one_star.svg")
            }
        ]
    },
    {
        id: 3,
        city: "Суми",
        left: {
            '': 72.65,
            [Breakpoints.bg]: 66.8,
            [Breakpoints.md]: 76.4
        },
        bottom: {
            '': 68.8,
            [Breakpoints.bg]: 64.2,
            [Breakpoints.lg]: 68.5,
            [Breakpoints.md]: 61.5
        },
        size: {
            '': 12,
            [Breakpoints.lg]: 8,
            [Breakpoints.md]: 7
        },
        color: "#D9BD94",
        hotels: [
            {
                id: 0,
                stars: 1,
                name: "PREMIER PALACE HOTEL",
                address : "st.Zamostyanskaya 14/1 Kharkiv 14b",
                image: require("~/static/images/one_star.svg")
            }
        ]
    },
    {
        id: 4,
        city: "Полтава",
        left: {
            '': 69.4,
            [Breakpoints.bg]: 64.5,
            [Breakpoints.lg]: 69,
            [Breakpoints.md]: 73
        },
        bottom: {
            '': 59.3,
            [Breakpoints.bg]: 57.3,
            [Breakpoints.lg]: 59,
            [Breakpoints.md]: 50.2
        },
        size: {
            '': 12,
            [Breakpoints.lg]: 8,
            [Breakpoints.md]: 7
        },
        color: "#D9BD94",
        hotels: [
            {
                id: 0,
                stars: 1,
                name: "PREMIER PALACE HOTEL",
                address : "st.Zamostyanskaya 14/1 Kharkiv 14b",
                image: require("~/static/images/one_star.svg")
            }
        ]
    },
    {
        id: 5,
        city: "Львів",

        left: {
            '': 37.4,
            [Breakpoints.bg]: 40.4,
            [Breakpoints.lg]: 37,
            [Breakpoints.md]: 34.2
        },
        bottom: {
            '': 59,
            [Breakpoints.bg]: 57,
            [Breakpoints.lg]: 58.6,
            [Breakpoints.md]: 51.3
        },
        size: {
            '': 12,
            [Breakpoints.lg]: 8,
            [Breakpoints.md]: 7
        },
        color: "#D9BD94",
        hotels: [
            {
                id: 0,
                stars: 1,
                name: "PREMIER PALACE HOTEL",
                address : "st.Zamostyanskaya 14/1 Kharkiv 14b",
                image: require("~/static/images/one_star.svg")
            }
        ]
    },
    {
        id: 6,
        city: "Почаїв",
        left: {
            '': 42.9,
            [Breakpoints.bg]: 44.6,
            [Breakpoints.md]: 40.9
        },
        bottom: {
            '': 56.45,
            [Breakpoints.bg]: 55,
            [Breakpoints.lg]: 56,
            [Breakpoints.md]: 44.6
        },
        size: {
            '': 12,
            [Breakpoints.lg]: 8,
            [Breakpoints.md]: 7
        },
        color: "#AA9474",
        hotels: [
            {
                id: 0,
                stars: 1,
                name: "PREMIER PALACE HOTEL",
                address : "st.Zamostyanskaya 14/1 Kharkiv 14b",
                image: require("~/static/images/one_star.svg")
            }
        ]
    },
    {
        id: 7,
        city: "Олександрія",
        left: {
            '': 66.4,
            [Breakpoints.bg]: 62.2,
            [Breakpoints.lg]: 66,
            [Breakpoints.md]: 69.3
        },
        bottom: {
            '': 50.5,
            [Breakpoints.lg]: 50.2,
            [Breakpoints.md]: 39.2
        },
        size: {
            '': 12,
            [Breakpoints.lg]: 8,
            [Breakpoints.md]: 7
        },
        color: "#AA9474",
        hotels: [
            {
                id: 0,
                stars: 1,
                name: "PREMIER PALACE HOTEL",
                address : "st.Zamostyanskaya 14/1 Kharkiv 14b",
                image: require("~/static/images/one_star.svg")
            }
        ]
    },
    {
        id: 9,
        city: "Мішкольц",
        left: {
            '': 24.4,
            [Breakpoints.bg]: 30.7,
            [Breakpoints.lg]: 23.8,
            [Breakpoints.md]: 18.4
        },
        bottom: {
            '': 43,
            [Breakpoints.bg]: 45,
            [Breakpoints.lg]: 42.7,
            [Breakpoints.md]: 30.1
        },
        size: {
            '': 12,
            [Breakpoints.lg]: 8,
            [Breakpoints.md]: 7
        },
        color: "#735C33",
        hotels: [
            {
                id: 0,
                stars: 1,
                name: "PREMIER PALACE HOTEL",
                address : "st.Zamostyanskaya 14/1 Kharkiv 14b",
                image: require("~/static/images/one_star.svg")
            }
        ]
    },
    {
        id: 10,
        city: "Поляниця",
        left: {
            '': 37.4,
            [Breakpoints.bg]: 40.4,
            [Breakpoints.lg]: 37.2,
            [Breakpoints.md]: 34.2
        },
        bottom: {
            '': 46.9,
            [Breakpoints.bg]: 48,
            [Breakpoints.lg]: 46.7,
            [Breakpoints.md]: 34.8
        },
        size: {
            '': 12,
            [Breakpoints.lg]: 8,
            [Breakpoints.md]: 7
        },
        color: "#AA9474",
        hotels: [
            {
                id: 0,
                stars: 1,
                name: "PREMIER PALACE HOTEL",
                address : "st.Zamostyanskaya 14/1 Kharkiv 14b",
                image: require("~/static/images/one_star.svg")
            }
        ]
    },
    {
        id: 11,
        city: "Дніпро",
        left: {
            '': 76.4,
            [Breakpoints.bg]: 69.7,
            [Breakpoints.md]: 81.4
        },
        bottom: {
            '': 47.9,
            [Breakpoints.bg]: 48.9,
            [Breakpoints.md]: 36.3
        },
        size: {
            '': 12,
            [Breakpoints.lg]: 8,
            [Breakpoints.md]: 7
        },
        color: "#AA9474",
        hotels: [
            {
                id: 0,
                stars: 1,
                name: "PREMIER PALACE HOTEL",
                address : "st.Zamostyanskaya 14/1 Kharkiv 14b",
                image: require("~/static/images/one_star.svg")
            }
        ]
    },
    {
        id: 12,
        city: "Херсон",
        left: {
            '': 69.1,
            [Breakpoints.bg]: 64.3,
            [Breakpoints.lg]: 68.8,
            [Breakpoints.md]: 72.7
        },
        bottom: {
            '': 37.4,
            [Breakpoints.bg]: 40.4,
            [Breakpoints.lg]: 37.2,
            [Breakpoints.md]: 23.4
        },
        size: {
            '': 12,
            [Breakpoints.lg]: 8,
            [Breakpoints.md]: 7
        },
        color: "#D9BD94",
        hotels: [
            {
                id: 0,
                stars: 1,
                name: "PREMIER PALACE HOTEL",
                address : "st.Zamostyanskaya 14/1 Kharkiv 14b",
                image: require("~/static/images/one_star.svg")
            }
        ]
    },
]

export default cities;


