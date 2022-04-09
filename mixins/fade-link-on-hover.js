export default {
    data: () => ({
        isLinkFaded: false,
    }),
    methods: {
        fadeLinkOnHover() {
            this.isLinkFaded = true
        },
        unfadeLinkOnMouseleave() {
            this.isLinkFaded = false
        }
    },
}