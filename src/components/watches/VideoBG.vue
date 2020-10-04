<template>
    <video autoplay muted loop>
        <source :src="src" type="video/mp4" />
    </video>
</template>

<script>
export default {
    name: 'VideoBackground',

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
                this.src = this.getVideoPath('watches-collection-small.webm');
            } else if (window.matchMedia('(orientation: landscape)').matches) {
                this.src = this.getVideoPath('watches-collection-big.mp4');
            }
        },
    },

    created() {
        window.addEventListener('resize', this.setVideoPath);
    },
    destroyed() {
        window.removeEventListener('resize', this.setVideoPath);
    },

    mounted() {
        this.setVideoPath();
    },
};
</script>

<style lang="scss" scoped>
video {
    position: relative;
    width: 100%;
    object-fit: cover;
    width: 100%;
    height: 100%;
}
</style>
