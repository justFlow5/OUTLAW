<template>
    <video autoplay muted loop>
        <source :src="src" type="video/mp4" />
    </video>
</template>

<script>
export default {
    name: 'VideoBackground',
    props: ['category'],

    data() {
        return {
            src: '',
        };
    },

    methods: {
        getVideoPath(watch) {
            return require('../../assets/watchVideo/' + watch);
        },

        setVideoPath() {
            if (window.matchMedia('(orientation: portrait)').matches) {
                this.src = this.getVideoPath(`${this.category}.webm`);
            } else if (window.matchMedia('(orientation: landscape)').matches) {
                this.src = this.getVideoPath(`${this.category}Big.webm`);
            }
        },
    },

    mounted() {
        this.setVideoPath();
    },
};
</script>

<style lang="scss" scoped>
video {
    position: absolute;
    width: 100%;
    object-fit: cover;
    width: 100vw;
    height: 100%;
    left: 0;
    top: 0;

    /* @media (min-width: $laptop) {
        height: 90vh;
    } */
}
</style>
