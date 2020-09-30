<template>
    <div class="image-gallery-wrapper">
        <div class="video-container">
            <VideoBG :category="category" />
            <Overlay :title="category" :isHome="false" />
        </div>

        <div class="gallery-container">
            <WatchCategoryImageGallery :category="category" />
        </div>
    </div>
</template>

<script>
import VideoBG from '../components/WatchCategoryGallery/VideoBG';
import Overlay from '../components/Overlay';
import WatchCategoryImageGallery from '../components/WatchCategoryGallery/WatchCategoryImageGallery';

export default {
    name: 'WatchCategoryGallery',
    props: ['category'],
    components: {
        VideoBG,
        Overlay,
        WatchCategoryImageGallery,
    },

    mounted() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
