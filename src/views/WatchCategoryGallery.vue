<template>
    <div class="image-gallery-wrapper">
        <div class="video-container">
            <VideoBG :category="category" />
            <Overlay :title="category" subtitle="" />
        </div>

        <div class="gallery-container">
            <WatchImageGallery />
        </div>
    </div>
</template>

<script>
import VideoBG from '../components/WatchCategoryGallery/VideoBG';
import Overlay from '../components/Overlay';
import WatchImageGallery from '../components/WatchCategoryGallery/WatchImageGallery';

export default {
    name: 'WatchCategoryGallery',
    props: ['category'],
    components: {
        VideoBG,
        Overlay,
        WatchImageGallery,
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
}
</style>
