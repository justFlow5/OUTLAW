<template>
    <div>
        <div class="image-gallery-wrapper">
            <div class="video-container">
                <VideoBG :category="currentView" />
                <Overlay :isHome="false" :title="currentView" />
            </div>

            <div class="gallery-container">
                <WatchCategoryImageGallery :category="currentView" />
            </div>
        </div>
    </div>
</template>

<script>
import VideoBG from '../components/WatchCategoryGallery/VideoBG';
import Overlay from '../components/Overlay';
import WatchCategoryImageGallery from '../components/WatchCategoryGallery/WatchCategoryImageGallery';
import { mapState, mapGetters } from 'vuex';

export default {
    name: 'WatchCategoryGallery',
    // data() {
    //     return {
    //         watches: [],
    //     };
    // },

    components: {
        VideoBG,
        Overlay,
        WatchCategoryImageGallery,
    },

    mounted() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    computed: {
        ...mapState({
            currentView: (state) => state.appStore.currentView,
        }),

        ...mapGetters({
            getWatchesByCategory: 'productsStore/getWatchesByCategory',
        }),
    },
};
</script>

<style lang="scss" scoped>
.image-gallery-wrapper {
    background-color: rgb(247, 247, 247);
    min-height: 100%;
    width: 100vw;
}

.video-container {
    width: 100vw;
    height: 55vh;
    position: relative;
}

.gallery-container {
    width: 80%;
    margin: 0 auto;
    padding: 100px 0;
}
</style>
