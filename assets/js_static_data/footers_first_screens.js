const footer_type_one = [
    {
        id: 0,
        link_type: "internal",
        value: "фото",
        link: "/"
    },
    {
        id: 1,
        link_type: "internal",
        emit:'openMap',
        value: "ми на мапі",
        link: "/"
    },
    {
        id: 2,
        link_type: "internal",
        value: "3d тур",
        link: "/"
    }
];

const footer_type_two = [
    {
        id: 0,
        value: "КОНФЕРенц зали",
        link_type: "internal",
        link: "/halls"
    },
    {
        id: 1,
        value: "БАНКЕТИ",
        link_type: "internal",
        link: "/weddings"
    },
    {
        id: 2,
        value: "СВЯТИ",
        link_type: "internal",
        link: "/weddings"
    },
    {
        id: 3,
        value: "КЕТЕРИНГ",
        link_type: "internal",
        link: "/weddings"
    },
    {
        id: 4,
        value: "ПІДХОДЖЕННЯ",
        link_type: "internal",
        link: "/weddings"
    },
    {
        id: 5,
        value: "IDEAS HUB",
        link_type: "internal",
        link: "/weddings"
    }
];

const one_restaurant = [
    {
        id: 0,
        value: "Час роботи: 11:00 - 23:00"
    },
    {
        id: 1,
        value: "Китайська кухня"
    }
]
const time_footer = [
    {
        id: 0,
        value: "Час роботи: 11:00 - 23:00"
    }
]
const group_footer = [
    {
        id: 0,
        value: "Час роботи: 11:00 - 23:00"
    },
    {
        id: 1,
        emit: "openMap",
        value: "показати на мапі"
    }
]
const lux_footer = [
    {
        id: 0,
        value: "три лакшери бренду"
    }
]
const contacts_footer = [
    {
        id: 0,
        value: "facebook",
        link_type: "href",
        link: "https://www.youtube.com/"
    },
    {
        id: 1,
        value: "instagram",
        link_type: "href",
        link: "https://www.youtube.com/"
    },
    {
        id: 2,
        value: "twitter",
        link_type: "href",
        link: "https://www.youtube.com/"
    },
]
const school_hotel = [
    {
        id: 0,
        value: "+38 (044) 244 13 04",
        link_type: "tel",
        link: "+38 (044) 244 13 04"
    },
    {
        id: 1,
        value: "pr@phnr.com",
        link_type: "email",
        link: "pr@phnr.com"
    },
    {
        id: 2,
        value: "premier-hospitality.com",
        link_type: "href",
        link: "https://www.premier-hospitality.com/"
    },
]
const suppliers = [
    {
        id: 0,
        value: "+38 (044) 244 13 04",
        link_type: "tel",
        link: "+38 (044) 244 13 04"
    },
    {
        id: 1,
        value: "pr@phnr.com",
        link_type: "email",
        link: "pr@phnr.com"
    },

]

export default footer_type_one;
export {
    footer_type_one,
    footer_type_two,
    one_restaurant,
    time_footer,
    group_footer,
    lux_footer,
    contacts_footer,
    school_hotel,
    suppliers
}
