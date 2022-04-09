import { Breakpoints } from "~/helpers/conts"

const globalMixin = {
    data() {
        return {
            screenWidth: 0
        }
    },

    methods: {
        handleResize() {
            this.screenWidth = window.innerWidth;
        }
    },

    computed: {
        breakpoints() {
            if (this.screenWidth > 1441) {
                return Breakpoints.bg;
            }
            if (1200 >= this.screenWidth && this.screenWidth > 768) {
                return Breakpoints.lg;
            }
            else if (768 >= this.screenWidth && this.screenWidth > 600) {
                return Breakpoints.md;
            }
            else if (600 >= this.screenWidth && this.screenWidth>376 ) {
                return Breakpoints.sm;
            }
            else if (this.screenWidth<=375) {
                return Breakpoints.xs;
            }
            return Breakpoints.default;
        },
        isMob() {
            if (!process.client) {
                return false;
            }
            return window.innerWidth > 600;
        }
    },
    mounted() {
        this.handleResize();
        window.addEventListener("resize", this.handleResize);
    },
    destroyed() {
        window.removeEventListener("resize", this.handleResize);
    },

}

export { globalMixin }