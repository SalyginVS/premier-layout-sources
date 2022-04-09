import Vue from 'vue';
import VCalendar from 'v-calendar';

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
    screens: {
        "tablet": "600px",
        "laptop": '900px',
        "desktop": '1210px'
    },
});
