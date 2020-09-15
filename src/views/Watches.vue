<template>
    <div watches-collection>
        <div class="video-container">
            <div class="overlay"></div>
            <video autoplay muted loop>
                <source :src="src" type="video/mp4" />
            </video>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Watches',
    data() {
        return {
            src: '',
        };
    },

    methods: {
        getVideoPath(watch) {
            return require('../assets/watchVideo/' + watch);
        },

        setVideoPath() {
            if (window.matchMedia('(orientation: portrait)').matches) {
                this.src = this.getVideoPath('watches-collection-small.webm');
            } else if (window.matchMedia('(orientation: landscape)').matches) {
                this.src = this.getVideoPath('watches-collection-big.mp4');
            }
        },
    },

    mounted() {
        this.setVideoPath();
    },

    components: {},
};
</script>

<style lang="scss" scoped>
.video-container {
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;

    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 3;
        background: rgba(0, 0, 0, 0.5);
    }

    & > video {
        position: relative;
        width: 100%;
        object-fit: cover;
        width: 100%;
        height: 90%;
    }
}
</style>
