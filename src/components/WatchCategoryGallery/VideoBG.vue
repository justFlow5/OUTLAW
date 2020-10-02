<template>
    <video autoplay muted loop>
        <source :src="setVideoPath()" type="video/mp4" />
    </video>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'VideoBackground',
    props: ['category'],

    computed: {
        ...mapState({
            currentView: (state) => state.appStore.currentView,
        }),
    },

    methods: {
        getVideoPath(watch) {
            return require('../../assets/watchVideo/' + watch);
        },
        setVideoPath() {
            if (window.matchMedia('(orientation: portrait)').matches) {
                return this.getVideoPath(`${this.currentView}.webm`);
            } else if (window.matchMedia('(orientation: landscape)').matches) {
                return this.getVideoPath(`${this.currentView}Big.webm`);
            }
        },
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
}
</style>
