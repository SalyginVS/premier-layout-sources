<template>
    <div class="scroll-line"></div>
</template>
<script>
export default {
    name: "ScrollLine",
}
</script>

<style scoped lang="scss">
    .scroll-line {
        width: 1px;
        height: 48px;
        background-color: rgba(255,255,255,0.4);
        overflow: hidden;
        &:after {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 1);
            animation-name: scroll-line-animation;
            animation-duration: 2s;
            animation-timing-function: ease-in;
            animation-iteration-count: infinite;

        }
    }
    @keyframes scroll-line-animation {
        0% {
            transform: translateY(-100%);
        }
        80% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(100%);
        }
    }
</style>